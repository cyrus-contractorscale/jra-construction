import Link from "next/link";

export interface TocEntry {
  id: string;
  text: string;
}

export function ArticleSidebar({
  readingMinutes,
  toc,
}: {
  readingMinutes: number;
  toc: TocEntry[];
}) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-36 lg:self-start">

      {/* Reading time pill */}
      <div className="inline-flex items-center gap-2.5 rounded-xl border border-[#dfe7ef] bg-[#f4f7fa] px-4 py-2.5">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#293a57]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="text-[13px] font-semibold text-[#293a57]">
          {readingMinutes} min read
        </span>
      </div>

      {/* Table of contents */}
      {toc.length > 0 && (
        <nav className="overflow-hidden rounded-2xl border border-[#dfe7ef] bg-white shadow-[0_2px_16px_rgba(41,58,87,0.06)]">
          {/* Header */}
          <div className="border-b border-[#eef2f6] bg-[#f4f7fa] px-5 py-3.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a9aab]">
              In This Article
            </p>
          </div>

          {/* Links */}
          <ol className="divide-y divide-[#f0f4f8]">
            {toc.map((entry, i) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  className="flex items-start gap-3 px-5 py-3 text-[13px] leading-snug text-[#5f7286] transition hover:bg-[#f4f7fa] hover:text-[#293a57]"
                >
                  <span className="mt-0.5 flex h-4.5 w-4 shrink-0 items-center justify-center text-[11px] font-bold text-[#293a57]">
                    {i + 1}
                  </span>
                  <span>{entry.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Free Consultation CTA */}
      <div className="overflow-hidden rounded-2xl bg-[#293a57] p-6 text-white">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          Ready to Build?
        </p>
        <h3 className="mt-2.5 text-[20px] font-extrabold leading-tight">
          Claim Your Free Design &amp; Build Consultation
        </h3>
        <p className="mt-2.5 text-[13px] leading-relaxed text-white/65">
          Talk to JRA Construction about your custom home, renovation, or extension — no obligation.
        </p>
        <div className="mt-5 flex flex-col gap-2.5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-[#293a57] transition hover:bg-zinc-100"
          >
            Free Consultation
          </Link>
          <Link
            href="/estimate"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/10"
          >
            Online Estimate
          </Link>
        </div>
        <a
          href="tel:+64212769971"
          className="mt-4 flex items-center justify-center gap-1.5 text-[13px] font-medium text-white/65 transition hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 4h4l1 4-2 2a13 13 0 0 0 5 5l2-2 4 1v4c-8 1-15-6-14-14z" />
          </svg>
          (021) 276 9971
        </a>
      </div>
    </aside>
  );
}
