"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { projectOrder } from "@/lib/pricingMeta";
import type { PricingConfig } from "@/lib/pricing";
import type { ProjectType } from "@/lib/types";

interface PricingResponse {
  ok: boolean;
  pricing: PricingConfig;
  projectLabels: Record<ProjectType, string>;
}

export function PricingEditor() {
  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [labels, setLabels] = useState<Record<ProjectType, string> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/pricing", { cache: "no-store" });
      const data = (await res.json()) as PricingResponse;
      if (!res.ok || !data.ok) {
        throw new Error("Failed to load pricing");
      }
      setPricing(data.pricing);
      setLabels(data.projectLabels);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load pricing");
    } finally {
      setLoading(false);
    }
  }

  function updateProject(project: ProjectType, key: "basePerSqm", value: number) {
    setPricing((prev) =>
      prev
        ? {
            ...prev,
            projects: {
              ...prev.projects,
              [project]: {
                ...prev.projects[project],
                [key]: value,
              },
            },
          }
        : prev
    );
  }

  function updateFinish(project: ProjectType, level: "Economy" | "Standard" | "Premium", value: number) {
    setPricing((prev) =>
      prev
        ? {
            ...prev,
            projects: {
              ...prev.projects,
              [project]: {
                ...prev.projects[project],
                finish: {
                  ...prev.projects[project].finish,
                  [level]: value,
                },
              },
            },
          }
        : prev
    );
  }

  async function save() {
    if (!pricing) return;
    setSaving(true);
    setMessage(null);
    setError(null);
    try {
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pricing),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to save pricing");
      }
      setMessage("Pricing saved to lib/pricing.ts");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save pricing");
    } finally {
      setSaving(false);
    }
  }

  const preview = useMemo(() => {
    if (!pricing) return null;
    return projectOrder.map((project) => ({
      project,
      basePerSqm: pricing.projects[project].basePerSqm,
      economy: pricing.projects[project].basePerSqm * pricing.projects[project].finish.Economy,
      standard: pricing.projects[project].basePerSqm * pricing.projects[project].finish.Standard,
      premium: pricing.projects[project].basePerSqm * pricing.projects[project].finish.Premium,
    }));
  }, [pricing]);

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-3xl border border-ink-200 bg-white p-8">
        <svg className="h-5 w-5 animate-spin text-ink-400" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="text-sm text-ink-500">Loading pricing config…</span>
      </div>
    );
  }

  if (!pricing || !labels) {
    return (
      <div className="flex items-center gap-3 rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red-500 text-white text-sm font-bold">!</span>
        {error || "Unable to load pricing."}
      </div>
    );
  }

  const hasZeroBase = projectOrder.some((p) => pricing.projects[p].basePerSqm === 0);

  return (
    <div className="space-y-6">

      {/* ── Global settings ── */}
      <div className="rounded-3xl border border-ink-200 bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-ink-900">Global Settings</h2>
            <p className="mt-1 text-sm text-ink-500">
              Saved to <code className="rounded bg-ink-100 px-1 py-0.5">lib/pricing.ts</code> — changes take effect immediately after save.
            </p>
          </div>
          <Button size="lg" onClick={save} disabled={saving} className="shrink-0">
            {saving ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving…
              </span>
            ) : "Save Pricing"}
          </Button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <NumberField
            label="Range spread"
            hint="Creates the low–high band. 0.12 = ±12%"
            value={pricing.rangeSpread}
            step="0.01"
            onChange={(value) => setPricing({ ...pricing, rangeSpread: value })}
          />
          <NumberField
            label="Round to"
            hint="Estimates are rounded to this amount."
            value={pricing.roundTo}
            step="100"
            onChange={(value) => setPricing({ ...pricing, roundTo: value })}
          />
        </div>

        {message && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            <span>✓</span> {message}
          </div>
        )}
        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            <span>!</span> {error}
          </div>
        )}
      </div>

      {/* ── Zero-base warning banner ── */}
      {hasZeroBase && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-400 text-white text-xs font-bold mt-0.5">!</span>
          <p className="text-sm font-medium text-amber-800">
            <strong>One or more projects have a base rate of $0/sqm.</strong> The estimate calculator will return $0 for those projects until you set a real rate.
          </p>
        </div>
      )}

      {/* ── Per-project cards ── */}
      {projectOrder.map((project) => {
        const proj     = pricing.projects[project];
        const baseOk   = proj.basePerSqm > 0;
        const multOk   = proj.finish.Economy <= proj.finish.Standard && proj.finish.Standard <= proj.finish.Premium;
        const cardOk   = baseOk && multOk;

        return (
          <section
            key={project}
            className={cn(
              "rounded-3xl border bg-white p-6 sm:p-8 border-l-4",
              cardOk
                ? "border-emerald-100 border-l-emerald-400"
                : !baseOk
                ? "border-amber-200 border-l-amber-400 bg-amber-50/30"
                : "border-ink-200 border-l-ink-300"
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className={cn(
                  "grid h-8 w-8 place-items-center rounded-full text-sm font-bold",
                  cardOk ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-600"
                )}>
                  {cardOk ? "✓" : "!"}
                </span>
                <h2 className="text-lg font-bold text-ink-900">{labels[project]}</h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {!baseOk && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    ⚠ Base rate is $0 — set a real rate
                  </span>
                )}
                {!multOk && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                    ⚠ Multiplier order incorrect (Economy ≤ Standard ≤ Premium)
                  </span>
                )}
                {cardOk && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    ✓ Configured
                  </span>
                )}
              </div>
            </div>

            <p className="mt-1 text-sm text-ink-400 ml-11">Base rate × finish multiplier = effective per-sqm rate</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <NumberField
                label="Base per sqm"
                prefix="$"
                value={proj.basePerSqm}
                onChange={(value) => updateProject(project, "basePerSqm", value)}
                warn={!baseOk}
              />
              <NumberField
                label="Economy ×"
                hint={`→ ${formatMoney(proj.basePerSqm * proj.finish.Economy)}/sqm`}
                value={proj.finish.Economy}
                step="0.01"
                onChange={(value) => updateFinish(project, "Economy", value)}
                accent="bg-sky-50 border-sky-200"
              />
              <NumberField
                label="Standard ×"
                hint={`→ ${formatMoney(proj.basePerSqm * proj.finish.Standard)}/sqm`}
                value={proj.finish.Standard}
                step="0.01"
                onChange={(value) => updateFinish(project, "Standard", value)}
                accent="bg-emerald-50 border-emerald-200"
              />
              <NumberField
                label="Premium ×"
                hint={`→ ${formatMoney(proj.basePerSqm * proj.finish.Premium)}/sqm`}
                value={proj.finish.Premium}
                step="0.01"
                onChange={(value) => updateFinish(project, "Premium", value)}
                accent="bg-violet-50 border-violet-200"
              />
            </div>
          </section>
        );
      })}

      {/* ── Preview table ── */}
      <section className="rounded-3xl border border-ink-200 bg-white p-6 sm:p-8">
        <h2 className="text-lg font-bold text-ink-900">Effective Rate Preview</h2>
        <p className="mt-1 text-sm text-ink-500">Actual per-sqm rate after each finish multiplier is applied.</p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-ink-50 text-ink-500">
              <tr>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider">Project</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider">Base</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-sky-600">Economy</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-emerald-600">Standard</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-violet-600">Premium</th>
              </tr>
            </thead>
            <tbody>
              {preview?.map((row) => {
                const baseOk = row.basePerSqm > 0;
                return (
                  <tr key={row.project} className={`border-t border-ink-100 ${!baseOk ? "bg-amber-50/50" : "hover:bg-ink-50/50"}`}>
                    <td className="px-4 py-3 font-semibold text-ink-900">
                      <div className="flex items-center gap-2">
                        {!baseOk && <span className="text-amber-500 text-xs">⚠</span>}
                        {labels[row.project]}
                      </div>
                    </td>
                    <td className={`px-4 py-3 font-mono font-semibold ${!baseOk ? "text-amber-600" : "text-ink-700"}`}>
                      {formatMoney(row.basePerSqm)}
                    </td>
                    <td className="px-4 py-3 font-mono text-sky-700">{formatMoney(row.economy)}</td>
                    <td className="px-4 py-3 font-mono text-emerald-700">{formatMoney(row.standard)}</td>
                    <td className="px-4 py-3 font-mono text-violet-700">{formatMoney(row.premium)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  hint,
  step = "1",
  prefix,
  warn = false,
  accent,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
  step?: string;
  prefix?: string;
  warn?: boolean;
  accent?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className={cn("rounded-xl p-3", accent ?? "bg-ink-50/60")}>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-ink-500">
        {label}
        {warn && <span className="ml-2 text-amber-500">⚠</span>}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-ink-400">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(event) => onChange(Number(event.target.value))}
          className={cn(
            "w-full rounded-lg border bg-white py-2.5 text-base font-bold text-ink-900 outline-none transition-all",
            "focus:ring-2 focus:ring-offset-1",
            warn
              ? "border-amber-300 focus:border-amber-400 focus:ring-amber-100"
              : "border-ink-200 focus:border-ink-500 focus:ring-ink-100",
            prefix ? "pl-7 pr-3" : "px-3"
          )}
        />
      </div>
      {hint && <p className="mt-1 text-xs font-medium text-ink-500">{hint}</p>}
    </div>
  );
}

function formatMoney(value: number): string {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}
