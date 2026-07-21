"use client";

import React, { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */
export interface TabField {
  key: string;
  label: string;
  ghlId: string;
  ghlKey?: string;        // GHL merge tag, e.g. {{contact.quote}}
  mapped: boolean;
  note?: string;          // optional explanation shown in a small tag
}

export interface TabSection {
  sectionLabel?: string;  // renders a divider row when set
  fields: TabField[];
}

export interface AuditTab {
  id: string;
  label: string;
  accent: string;
  headerBg: string;
  borderColor: string;
  sections: TabSection[];
}

interface Props {
  tabs: AuditTab[];
  totalMapped: number;
  totalFields: number;
}

/* ─── Pill ───────────────────────────────────────────────────────────────── */
function Pill({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span className={[
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold whitespace-nowrap",
      ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700",
    ].join(" ")}>
      <span className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-emerald-500" : "bg-amber-400"}`} />
      {label}
    </span>
  );
}

/* ─── Flatten all fields across sections ─────────────────────────────────── */
function allFields(tab: AuditTab) {
  return tab.sections.flatMap((s) => s.fields);
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export function AuditTabs({ tabs, totalMapped, totalFields }: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  const allMapped = totalMapped === totalFields;

  return (
    <div className="space-y-0">

      {/* ── Tab bar ───────────────────────────────────────────────────────── */}
      <div className="flex overflow-x-auto gap-1 border-b border-ink-200 scrollbar-none pb-px">
        {tabs.map((tab) => {
          const fields   = allFields(tab);
          const mapped   = fields.filter((f) => f.mapped).length;
          const total    = fields.length;
          const tabOk    = mapped === total;
          const isActive = tab.id === active;

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={[
                "relative flex shrink-0 items-center gap-2 rounded-t-lg border border-b-0 px-3.5 py-2.5 text-[12px] font-semibold transition-all duration-150 outline-none",
                isActive
                  ? "border-ink-200 bg-white text-ink-900 shadow-sm -mb-px z-10"
                  : "border-transparent bg-transparent text-ink-400 hover:bg-ink-50 hover:text-ink-700",
              ].join(" ")}
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${tab.accent}`} />
              <span>{tab.label}</span>
              <span className={[
                "rounded-full px-1.5 py-0.5 text-[10px] font-black leading-none",
                tabOk ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700",
              ].join(" ")}>
                {mapped}/{total}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Active tab panel ──────────────────────────────────────────────── */}
      {current && (() => {
        const fields  = allFields(current);
        const mapped  = fields.filter((f) => f.mapped).length;
        const allTabMapped = mapped === fields.length;

        return (
          <div className={`border border-t-0 border-ink-200 border-l-4 ${current.borderColor} rounded-b-xl bg-white overflow-hidden`}>

            {/* Tab header bar */}
            <div className={`flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-ink-100 ${current.headerBg}`}>
              <div className="flex items-center gap-2 min-w-0">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${current.accent}`} />
                <span className="text-sm font-bold text-ink-800">{current.label}</span>
                <span className="text-xs text-ink-400 hidden sm:inline">
                  — {mapped} of {fields.length} mapped
                </span>
              </div>
              <Pill
                ok={allTabMapped}
                label={allTabMapped ? "All mapped" : `${fields.length - mapped} need ID`}
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-ink-50/80 border-b border-ink-100">
                  <tr>
                    <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-ink-400 w-[200px]">Field Name</th>
                    <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-ink-400 hidden sm:table-cell w-[150px]">Internal Key</th>
                    <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-ink-400 hidden xl:table-cell w-[190px]">GHL Field ID</th>
                    <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-ink-400 hidden md:table-cell">Merge Tag Key</th>
                    <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-ink-400 w-[110px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {current.sections.map((section, si) => (
                    <React.Fragment key={`section-${si}`}>
                      {/* Section divider row */}
                      {section.sectionLabel && (
                        <tr className="bg-ink-100/60">
                          <td colSpan={5} className="px-4 py-2">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-ink-500">
                              <span className="h-px flex-1 bg-ink-300 hidden sm:block w-4" />
                              {section.sectionLabel}
                            </span>
                          </td>
                        </tr>
                      )}

                      {/* Field rows */}
                      {section.fields.map((f) => (
                        <tr
                          key={f.key}
                          className={`border-t border-ink-100 transition-colors hover:bg-ink-50/60 ${!f.mapped ? "bg-amber-50/50" : ""}`}
                        >
                          <td className="px-4 py-3">
                            <p className="font-medium text-ink-800">{f.label}</p>
                            {f.note && (
                              <p className="mt-0.5 text-[10px] text-ink-400 italic">{f.note}</p>
                            )}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-ink-500 hidden sm:table-cell align-top">
                            {f.key}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs hidden xl:table-cell align-top">
                            {f.mapped
                              ? <span className="text-emerald-700 break-all">{f.ghlId}</span>
                              : <span className="text-amber-500 italic">— add ID to ghlFieldMap.ts</span>}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs hidden md:table-cell align-top">
                            {f.ghlKey
                              ? <span className="text-sky-700 break-all">{f.ghlKey}</span>
                              : <span className="text-ink-300">—</span>}
                          </td>
                          <td className="px-4 py-3 align-top">
                            <Pill ok={f.mapped} label={f.mapped ? "Mapped" : "Needs ID"} />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Unmapped hint footer */}
            {!allTabMapped && (
              <div className="border-t border-amber-100 bg-amber-50/70 px-5 py-2.5 text-xs text-amber-700 flex items-center gap-2">
                <span className="font-bold">Tip:</span>
                <span>
                  Visit{" "}
                  <a href="/api/ghl-fields" target="_blank" className="underline underline-offset-2 font-semibold">
                    /api/ghl-fields
                  </a>{" "}
                  to fetch existing field IDs, then add them to{" "}
                  <code className="rounded bg-amber-100 px-1 py-0.5">lib/ghlFieldMap.ts</code>.
                </span>
              </div>
            )}
          </div>
        );
      })()}

      {/* ── Overall summary bar ───────────────────────────────────────────── */}
      <div className={`mt-4 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
        allMapped
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-amber-200 bg-amber-50 text-amber-800"
      }`}>
        <span className={`shrink-0 text-lg font-black ${allMapped ? "text-emerald-500" : "text-amber-500"}`}>
          {allMapped ? "✓" : "!"}
        </span>
        <span>
          <strong>{totalMapped}</strong> of <strong>{totalFields}</strong> custom fields mapped across all services.
          {!allMapped && <> <strong>{totalFields - totalMapped}</strong> still need GHL IDs.</>}
        </span>
      </div>
    </div>
  );
}
