"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

function FaqRow({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`group border-b border-white/10 last:border-0 transition-colors duration-200 ${open ? "bg-white/5" : "hover:bg-white/5"}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
      >
        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex-shrink-0 text-xs font-bold tabular-nums text-[#293a57]/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold leading-snug text-white group-hover:text-[#60aae8] transition-colors duration-150">
            {q}
          </span>
        </div>
        <span className={`mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 transition-all duration-300 ${open ? "border-[#293a57] bg-[#293a57] rotate-45" : "group-hover:border-white/40"}`}>
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-5 pl-16 text-sm leading-relaxed text-white/60">{a}</p>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      {items.map((faq, i) => (
        <FaqRow key={faq.q} q={faq.q} a={faq.a} index={i} />
      ))}
    </div>
  );
}
