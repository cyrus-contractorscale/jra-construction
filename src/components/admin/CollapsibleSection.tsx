"use client";

import { useState } from "react";

interface Props {
  title: React.ReactNode;
  badge?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function CollapsibleSection({
  title,
  badge,
  defaultOpen = true,
  children,
  className = "",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={`overflow-hidden rounded-3xl border border-ink-200 bg-white ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left transition-colors hover:bg-ink-50/60 sm:px-8"
      >
        <div className="flex items-center gap-3">
          {title}
          {badge}
        </div>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Smooth animated collapse using CSS grid trick */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-ink-100">{children}</div>
        </div>
      </div>
    </section>
  );
}
