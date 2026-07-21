"use client";

import { cn } from "@/lib/cn";
import type { Question } from "@/lib/types";

interface Props {
  question: Question;
  value: Record<string, string>;
  onChange: (value: Record<string, string>) => void;
}

export function FieldGroup({ question, value, onChange }: Props) {
  const update = (id: string, v: string) => onChange({ ...value, [id]: v });

  return (
    <div className="grid grid-cols-2 gap-4">
      {question.fields?.map((f) => (
        <div
          key={f.id}
          className={cn(f.half ? "col-span-2 sm:col-span-1" : "col-span-2")}
        >
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-ink-500">
            {f.label}
            {f.required && <span className="ml-0.5 text-ink-900">*</span>}
          </label>
          <div className="relative">
            <input
              type={f.type ?? "text"}
              value={value[f.id] ?? ""}
              placeholder={f.placeholder ?? f.label}
              onChange={(e) => update(f.id, e.target.value)}
              autoComplete={autoCompleteFor(f.id)}
              className={cn(
                "w-full rounded-xl border border-ink-200 bg-white/80 px-4 py-3.5",
                "text-[15px] font-medium text-ink-900",
                "placeholder:text-ink-300",
                "outline-none transition-all duration-200",
                "focus:border-ink-700 focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,23,42,0.08)]",
                "hover:border-ink-400"
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function autoCompleteFor(id: string): string | undefined {
  const map: Record<string, string> = {
    firstName: "given-name",
    lastName: "family-name",
    email: "email",
    phone: "tel",
    address1: "address-line1",
    city: "address-level2",
    state: "address-level1",
    country: "country-name",
    postalCode: "postal-code",
  };
  return map[id];
}
