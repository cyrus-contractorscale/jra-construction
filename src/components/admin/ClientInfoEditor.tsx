"use client";

import { useEffect, useRef, useState } from "react";
import type { ClientInfo } from "@/app/api/admin/client/route";

/** Strip everything except digits and a leading +, then prepend tel: */
function derivePhoneHref(display: string): string {
  const digits = display.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "";
}

export function ClientInfoEditor() {
  const [form, setForm]         = useState<ClientInfo | null>(null);
  const [saving, setSaving]     = useState(false);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg]           = useState<{ ok: boolean; text: string } | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const fileRef                 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin/client")
      .then((r) => r.json() as Promise<{ ok: boolean; site: ClientInfo }>)
      .then((d) => {
        if (d.ok) {
          setForm(d.site);
          setLogoPreview(`/${d.site.logoFile}`);
        }
      })
      .catch(() => {});
  }, []);

  const set = (key: keyof ClientInfo, val: string) =>
    setForm((prev) => {
      if (!prev) return prev;
      const next = { ...prev, [key]: val };
      if (key === "phoneDisplay") next.phoneHref = derivePhoneHref(val);
      if (key === "logoFile") setLogoPreview(`/${val}`);
      return next;
    });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !form) return;
    setUploading(true);
    setMsg(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res  = await fetch("/api/admin/upload-logo", { method: "POST", body: fd });
      const data = await res.json() as { ok: boolean; filename?: string; message?: string; error?: string };
      if (data.ok && data.filename) {
        setForm((prev) => prev ? { ...prev, logoFile: data.filename! } : prev);
        setLogoPreview(`/${data.filename}?t=${Date.now()}`);
        setMsg({ ok: true, text: `Uploaded "${data.filename}" — click Save Changes to apply.` });
      } else {
        setMsg({ ok: false, text: data.error ?? "Upload failed" });
      }
    } catch (err) {
      setMsg({ ok: false, text: String(err) });
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const save = async () => {
    if (!form) return;
    setSaving(true);
    setMsg(null);
    try {
      const payload = { ...form, phoneHref: derivePhoneHref(form.phoneDisplay) };
      const res  = await fetch("/api/admin/client", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = await res.json() as { ok: boolean; message?: string; error?: string };
      setMsg({ ok: data.ok, text: data.message ?? data.error ?? "Unknown error" });
    } catch (err) {
      setMsg({ ok: false, text: String(err) });
    } finally {
      setSaving(false);
    }
  };

  if (!form) {
    return <p className="text-sm text-ink-400 py-4">Loading client info…</p>;
  }

  const inputCls = "w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-[14px] text-ink-900 outline-none transition focus:border-ink-700 focus:shadow-[0_0_0_3px_rgba(15,23,42,0.08)]";
  const labelCls = "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.15em] text-ink-500";
  const hintCls  = "mt-1 text-[11px] text-ink-400";

  return (
    <div className="space-y-7">

      {/* ── Logo ── */}
      <div>
        <p className={labelCls}>Logo</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

          {/* Preview box */}
          <div className="flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-ink-50 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoPreview || "/logo-here.png"}
              alt="Logo preview"
              className="h-auto max-h-[96px] w-auto max-w-full object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.2"; }}
              onLoad={(e)  => { (e.target as HTMLImageElement).style.opacity = "1"; }}
            />
          </div>

          <div className="flex-1 space-y-3">
            {/* Filename input */}
            <div>
              <label className={labelCls}>Filename in /public</label>
              <input
                type="text"
                value={form.logoFile}
                onChange={(e) => set("logoFile", e.target.value)}
                placeholder="logo-here.png"
                className={inputCls}
              />
              <p className={hintCls}>
                Type the filename of any image already in <code className="rounded bg-ink-100 px-1 py-0.5 text-ink-600">/public</code> — preview updates instantly.
              </p>
            </div>

            {/* Upload button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2 text-[13px] font-semibold text-ink-700 transition hover:bg-ink-50 disabled:opacity-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                {uploading ? "Uploading…" : "Upload Image"}
              </button>
              <p className="text-[11px] text-ink-400">Localhost only — on Cloudflare, commit the file to /public</p>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Fields grid: Company Name | Director Name / Email | Phone / Booking | Copyright ── */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* Company Name */}
        <div>
          <label className={labelCls}>Company Name</label>
          <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} />
          <p className={hintCls}>Appears in footers and copyright line</p>
        </div>

        {/* Client / Director Name */}
        <div>
          <label className={labelCls}>Client / Director Name</label>
          <input type="text" value={form.directorName} onChange={(e) => set("directorName", e.target.value)} className={inputCls} />
          <p className={hintCls}>Shown on Consult &ldquo;From:&rdquo; and About section</p>
        </div>

        {/* Email Address */}
        <div>
          <label className={labelCls}>Email Address</label>
          <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
          <p className={hintCls}>Shown in the estimate sidebar</p>
        </div>

        {/* Phone Number */}
        <div>
          <label className={labelCls}>Phone Number</label>
          <input type="text" value={form.phoneDisplay} onChange={(e) => set("phoneDisplay", e.target.value)} placeholder="(555) 555-5555" className={inputCls} />
          <p className={hintCls}>
            Phone link auto-generated:{" "}
            <code className="rounded bg-ink-100 px-1 py-0.5 text-ink-600">{derivePhoneHref(form.phoneDisplay) || "—"}</code>
          </p>
        </div>

        {/* Booking Link */}
        <div>
          <label className={labelCls}>Booking Link</label>
          <input type="text" value={form.bookingUrl} onChange={(e) => set("bookingUrl", e.target.value)} className={inputCls} />
          <p className={hintCls}>Calendar / consult booking URL</p>
        </div>

        {/* Copyright Year */}
        <div>
          <label className={labelCls}>Copyright Year</label>
          <input type="text" value={form.copyrightYear} onChange={(e) => set("copyrightYear", e.target.value)} className={inputCls} />
          <p className={hintCls}>Shown in all footers</p>
        </div>

      </div>

      {/* ── Save ── */}
      <div className="flex items-center gap-4 border-t border-ink-100 pt-5">
        <button
          onClick={save}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-ink-800 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save Changes"}
        </button>
        {msg && (
          <p className={`text-[13px] font-medium ${msg.ok ? "text-emerald-600" : "text-red-600"}`}>
            {msg.ok ? "✓ " : "✗ "}{msg.text}
          </p>
        )}
      </div>

      {/* ── KV note ── */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-[12px] text-blue-700">
        <strong>On Cloudflare Pages:</strong> Changes save to KV and go live immediately — no rebuild needed.{" "}
        Requires the <code className="rounded bg-blue-100 px-1">BEAR_ESTIMATE</code> KV namespace binding in Cloudflare Pages → Settings → Functions → KV namespace bindings.
        On localhost, changes save to <code className="rounded bg-blue-100 px-1">lib/site.ts</code> and require a dev server restart.
      </div>

    </div>
  );
}
