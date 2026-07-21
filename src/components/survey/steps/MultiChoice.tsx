"use client";

import { cn } from "@/lib/cn";
import type { Question } from "@/lib/types";

const isExclusive = (label: string) => /^none/i.test(label.trim());

interface Props {
  question: Question;
  value: string[];
  onChange: (value: string[]) => void;
}

export function MultiChoice({ question, value, onChange }: Props) {
  const opts = question.options ?? [];

  const toggle = (optValue: string) => {
    const exclusive = isExclusive(optValue);
    if (exclusive) {
      onChange(value.includes(optValue) ? [] : [optValue]);
      return;
    }
    const withoutExclusive = value.filter((v) => !isExclusive(v));
    onChange(
      withoutExclusive.includes(optValue)
        ? withoutExclusive.filter((v) => v !== optValue)
        : [...withoutExclusive, optValue]
    );
  };

  const useGrid = opts.length <= 6 && opts.every((o) => o.label.length <= 28);

  return (
    <div className={cn("grid gap-2.5", useGrid ? "sm:grid-cols-2" : "grid-cols-1")}>
      {opts.map((opt) => {
        const selected = value.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className={cn(
              "group flex w-full items-center gap-3.5 rounded-2xl border px-4 py-4 text-left",
              "transition-all duration-200 ease-out",
              selected
                ? "border-[#293a57] bg-[#293a57] shadow-lg scale-[1.01]"
                : "border-ink-200 bg-white/80 hover:border-ink-400 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            {/* Checkbox */}
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-all duration-200",
                selected
                  ? "border-white/60 bg-white/20"
                  : "border-ink-300 group-hover:border-ink-500"
              )}
            >
              {selected && (
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-white" fill="none">
                  <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>

            {/* Label */}
            <span
              className={cn(
                "text-[15px] font-semibold leading-snug transition-colors duration-200",
                selected ? "text-white" : "text-ink-800"
              )}
            >
              {opt.label}
            </span>

            {/* Selected badge */}
            {selected && (
              <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-white/60">
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
