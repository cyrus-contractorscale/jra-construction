"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/estimate";
import type { SiteConfig } from "@/lib/config";
import { loadState, type StoredState } from "@/lib/state";

const consultSteps = [
  { title: "Needs Assessment",  desc: "Complete assessment of your project's core needs, wants, and vision." },
  { title: "Site Walk-Thru",    desc: "Professional site walk-thru and expert structural inspection assessment." },
  { title: "Avoid Obstacles",   desc: "Expert advice on hidden issues or regulatory obstacles to avoid." },
  { title: "Detailed Scope",    desc: "Creation of a comprehensive and line-by-line detailed scope of work." },
  { title: "Fixed-Price Quote", desc: "Outline of a transparent, fixed-price quote with zero hidden surprises." },
  { title: "Detailed Timeline", desc: "A clear, realistic project timeline from ground-break to handover." },
];

export function EstimateResult({ site }: { site: SiteConfig }) {
  const [state, setState] = useState<StoredState | null>(null);
  const [calculating, setCalculating] = useState(true);

  useEffect(() => {
    setState(loadState());
    const t = window.setTimeout(() => setCalculating(false), 2200);
    return () => window.clearTimeout(t);
  }, []);

  const result  = state?.result;
  const hasResult = !!result && result.basis !== "unavailable";

  return (
    <div className="flex min-h-screen flex-col bg-[#f2f4f7]">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-ink-100 px-5 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/estimate">
            <Image
              src={`/${site.logoFile}`}
              alt="Company logo"
              width={200}
              height={67}
              className="h-auto w-auto max-h-[67px] max-w-[200px] object-contain"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Call button */}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0d65b5] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden sm:inline">Call Now: &nbsp;</span>{site.phoneDisplay}
          </a>
        </div>
      </header>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <main className="flex flex-1 flex-col items-center px-4 py-14 sm:py-20">
        <div className="w-full max-w-[1024px]">

          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-ink-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
              </svg>
              Estimate Ready
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-center text-[26px] sm:text-[32px] font-bold text-ink-900 leading-snug">
            Your Estimate will cost approximately
          </h1>

          {/* Price card */}
          <div className="mt-8 rounded-3xl border border-ink-100 bg-white px-4 py-8 sm:px-8 sm:py-12 text-center shadow-[0_4px_32px_rgba(0,0,0,0.07)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-400">
              Estimated Project Cost
            </p>

            <div className="mt-5 min-h-[80px] flex items-center justify-center">
              {calculating ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-end gap-1.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="h-10 w-2.5 rounded-full bg-ink-300 animate-pulseBar"
                        style={{ animationDelay: `${i * 0.12}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-ink-400">Calculating your estimate…</p>
                </div>
              ) : hasResult && result ? (
                <p
                  className="animate-fadeIn text-[26px] sm:text-[44px] lg:text-[58px] tracking-tight text-black leading-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
                >
                  {formatCurrency(result.low)} - {formatCurrency(result.high)}
                </p>
              ) : (
                <div className="animate-fadeIn text-center">
                  <p className="text-lg font-semibold text-ink-700">
                    We&apos;ll prepare your estimate on your free consult.
                  </p>
                  <Link href="/estimate" className="mt-2 inline-block text-sm font-semibold text-ink-600 underline underline-offset-2 hover:text-ink-900">
                    Start an estimate →
                  </Link>
                </div>
              )}
            </div>

            {!calculating && hasResult && (
              <p className="mt-6 animate-fadeIn text-[14px] text-ink-400">
                This is a preliminary estimate based on your project details.
              </p>
            )}
          </div>

          {/* Bridge text */}
          <p className="mt-10 text-center text-[15px] text-ink-600">
            Ready to lock in your exact project pricing? Take the next step below.
          </p>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-ink-200" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-400">Your Next Step</span>
            <span className="h-px flex-1 bg-ink-200" />
          </div>

          {/* CTA cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Call Now */}
            <a
              href={site.phoneHref}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-ink-200 bg-white px-6 py-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-100 bg-ink-50 text-ink-600 group-hover:bg-ink-100 transition-colors">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-[17px] font-bold text-ink-900">Call Now</p>
                <p className="mt-1 text-sm text-ink-500">{site.phoneDisplay}</p>
              </div>
            </a>

            {/* Schedule a Meeting */}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl bg-[#293a57] px-6 py-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0d65b5] hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white group-hover:bg-white/15 transition-colors">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-[17px] font-bold text-white">Schedule a Meeting</p>
                <p className="mt-1 text-sm text-white/60">Book a free consult</p>
              </div>
            </a>

          </div>
        </div>
      </main>

      {/* ── On your consult, we will ────────────────────────────────────── */}
      <section className="w-full bg-white py-20 px-4 sm:px-8">
        <div className="mx-auto max-w-[1024px]">

          {/* Heading */}
          <div className="text-center">
            <h2 className="font-heading text-[32px] sm:text-[40px] font-black text-ink-900">
              On your consult, we will:
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.75] text-ink-500">
              We&apos;ll walk through your vision and provide a professional roadmap to
              ensure your project is a success from day one.
            </p>
          </div>

          {/* 3-col grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultSteps.map((step) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)]"
              >
                {/* Watermark circle */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border-[20px] border-ink-100/50 opacity-60 transition-colors duration-300 group-hover:border-emerald-100/60"
                />

                {/* Icon — green on hover */}
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-ink-200 bg-ink-50 text-ink-400 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>

                {/* Text */}
                <h3 className="font-heading text-[16px] font-bold text-ink-900 transition-colors duration-300 group-hover:text-emerald-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5-Star Guarantee ────────────────────────────────────────────── */}
      <section className="w-full bg-[#f2f4f7] px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[1024px]">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

            {/* Badge */}
            <div className="shrink-0 flex justify-center lg:w-[380px]">
              <Image
                src="/guarantee-seal.webp"
                alt="5-Star Guarantee Badge"
                width={360}
                height={360}
                className="h-auto w-[280px] sm:w-[360px] drop-shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">

              {/* Pill */}
              <span className="inline-flex items-center rounded-full bg-black px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Our Promise
              </span>

              {/* Heading */}
              <h2 className="font-heading mt-4 text-[28px] sm:text-[36px] font-black text-ink-900 leading-tight">
                The 5-Star Guarantee
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-[15px] leading-[1.75] text-ink-500 max-w-lg">
                Building your dream home shouldn&apos;t be stressful. We&apos;ve built our
                reputation on a commitment to transparency and quality.
              </p>

              {/* Promise card */}
              <div className="mt-7 rounded-xl border border-ink-200 bg-white py-5 pl-5 pr-6 shadow-sm border-l-4 border-l-black">
                <p className="font-heading text-[15px] font-bold text-ink-900">
                  We Build Within Your Budget
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Expert estimators provide detailed, line-item costings before we start.",
                    "Smart contingencies built-in to handle potential delays without extra cost.",
                    "All variations are approved by you first—no surprise invoices at the end.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-ink-600 leading-[1.65]">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA link */}
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-black underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Speak with an expert today
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ── About Us ────────────────────────────────────────────────────── */}
      <section className="w-full bg-white px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[1024px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

            {/* ── Left: text ── */}
            <div className="flex-1 min-w-0">

              {/* Heading + black underline */}
              <div>
                <h2 className="font-heading text-[32px] sm:text-[38px] font-black text-ink-900">
                  Hey there,
                </h2>
                <span className="mt-2 block h-1 w-12 rounded-full bg-black" />
              </div>

              <p className="mt-6 text-[15px] leading-[1.8] text-ink-600">
                Let&apos;s get straight to the point – why we&apos;re different and how that
                benefits your building project.
              </p>

              <p className="mt-4 text-[15px] leading-[1.8] text-ink-600">
                One of the biggest frustrations homeowners face is working with builders who
                take on too much and struggle to give each job the focus it needs. We&apos;ve
                solved this by setting up systems that allow us to manage 5–6 projects at
                once while still keeping everything on track.
              </p>

              {/* What it means card */}
              <div className="mt-7 rounded-xl border border-ink-200 bg-ink-50/50 px-6 py-5">
                <p className="font-heading text-[15px] font-bold text-ink-900">
                  Here&apos;s what that means for you:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Your project runs on a strict, predictable schedule",
                    "Proactive updates—you'll never have to chase us for info",
                    "Rapid issue resolution with dedicated site resources",
                    "Total transparency on every stage of the build",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-ink-600 leading-[1.65]">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <a
                href={site.phoneHref}
                className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#293a57] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0d65b5]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now: {site.phoneDisplay}
              </a>
            </div>

            {/* ── Right: director photo ── */}
            <div className="shrink-0 lg:w-[340px]">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)]" style={{ aspectRatio: "4/4.2" }}>
                <Image
                  src={`/${site.directorPhoto}`}
                  alt={site.directorName}
                  fill
                  className="object-cover object-top"
                />

                {/* Name card overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-5 py-4 border-t border-ink-100">
                  <p className="font-heading text-[16px] font-black text-ink-900">{site.directorName}</p>
                  <p className="mt-0.5 text-[13px] font-semibold text-ink-500">{site.directorTitle}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-black">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-5 text-[14px] text-ink-400 sm:flex-row sm:px-8">
          <span>© Copyright {site.copyrightYear} | {site.name} | All Rights Reserved</span>
          <span>Website &amp; Advertising by <a href="https://contractorscale.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ContractorScale.com</a></span>
        </div>
      </footer>

    </div>
  );
}
