"use client";

import type { Question } from "@/lib/types";

interface Props {
  question: Question;
  value?: string;
  onChange: (value: string) => void;
}

export function SizeInput({ question, value, onChange }: Props) {
  return (
    <div className="grid gap-5">
      {/* Number input */}
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className={[
            "w-full rounded-2xl border border-ink-200 bg-white/80 px-5 py-5 pr-20",
            "text-3xl font-extrabold text-ink-900 tracking-tight",
            "outline-none transition-all duration-200",
            "focus:border-ink-700 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,23,42,0.08)]",
            "hover:border-ink-400",
            "placeholder:text-ink-300",
          ].join(" ")}
        />
        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rounded-lg bg-ink-100 px-2.5 py-1.5 text-sm font-bold text-ink-600">
          {question.unit ?? "sqm"}
        </span>
      </div>

      {/* Size guide */}
      {question.guide && question.guide.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-ink-200/60 bg-white/60">
          <div className="border-b border-ink-100 px-5 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-400">
              Size reference guide
            </p>
          </div>
          <ul className="divide-y divide-ink-100">
            {question.guide.map((g) => (
              <li
                key={g.label}
                className="flex items-center justify-between gap-4 px-5 py-3 text-sm"
              >
                <span className="flex items-center gap-2 text-ink-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-300 shrink-0" />
                  {g.label}
                </span>
                <span className="font-bold text-ink-900">{g.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
