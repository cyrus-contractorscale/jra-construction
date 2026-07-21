import Link from "next/link";
import Image from "next/image";
import { EstimateSidebarStatic } from "@/components/survey/EstimateSidebarStatic";
import { SurveyFlow } from "@/components/survey/SurveyFlow";
import { BelowFoldLazy } from "./BelowFoldLazy";
import type { FaqItem } from "./FaqAccordion";
import type { ProjectType } from "@/lib/types";

const navLinks = [
  { label: "Get Estimate", href: "#estimate" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Answer a few questions",
    desc: "Tell us your project type, size, finish level, and timeline. Under 3 minutes — no plans needed.",
  },
  {
    number: "02",
    title: "Get your range instantly",
    desc: "We calculate a realistic price range using current Auckland market rates and your inputs.",
  },
  {
    number: "03",
    title: "Book your free consult",
    desc: "Joe reaches out within one business day to walk through the numbers and plan next steps.",
  },
];

interface Props {
  projectType: ProjectType;
  faqs: FaqItem[];
}

export function SurveyLandingPage({ projectType, faqs }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f2f4f7]">

      {/* ── Sticky nav ── */}
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12">
          <Link href="/" className="flex-shrink-0">
            <Image src="/jra-logo-blue.png" alt="JRA Construction" width={130} height={36} style={{ height: "auto" }} />
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-150 ${
                  l.href === "#estimate"
                    ? "bg-[#293a57] text-white hover:bg-[#0d65b5]"
                    : "text-zinc-500 hover:text-[#293a57]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="tel:+6448873529" className="text-xs font-semibold text-[#293a57] md:hidden">
            +64 4 887 3529
          </a>
        </div>
      </nav>

      <main className="flex-1">

        {/* ── Survey + How It Works — fills the viewport ── */}
        <section id="estimate" className="relative overflow-hidden bg-[#f2f4f7] flex flex-col" style={{ minHeight: "calc(100dvh - 49px)" }}>
          <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, #d8dce4 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, #cdd2dc 0%, transparent 70%)", filter: "blur(70px)" }} />

          {/* Survey form */}
          <div className="relative flex-1 mx-auto w-full max-w-[1440px] px-4 pt-8 pb-10 sm:px-8 lg:px-12 lg:pt-10">
            <div className="mb-4">
              <Link href="/estimate" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                Back to Estimate
              </Link>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              <div className="min-w-0 flex-1">
                <SurveyFlow projectType={projectType} backHref="/estimate" />
              </div>
              <EstimateSidebarStatic />
            </div>
          </div>

          {/* How It Works strip */}
          <div id="how-it-works" className="relative border-t border-zinc-200/60 bg-white">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
              <div className="grid divide-y divide-zinc-100 sm:divide-y-0 sm:divide-x sm:grid-cols-3">
                {howItWorksSteps.map((step, i) => (
                  <div key={step.number} className="group flex items-start gap-4 py-6 sm:px-8 sm:py-8 first:pl-0 last:pr-0">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#293a57]/10 text-[#293a57] text-sm font-black transition-colors duration-200 group-hover:bg-[#293a57] group-hover:text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-zinc-900">{step.title}</h3>
                      <p className="text-xs leading-relaxed text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Us, Our Process, FAQ — client-side lazy loaded */}
        <BelowFoldLazy faqs={faqs} />

      </main>

      {/* ── Footer ── */}
      <footer className="bg-black">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-4 py-5 text-[14px] text-white/60 sm:flex-row sm:px-8 lg:px-12">
          <span>© Copyright 2026 | JRA Construction | All Rights Reserved</span>
          <span>
            Website &amp; Advertising by{" "}
            <a href="https://contractorscale.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              ContractorScale.com
            </a>
          </span>
        </div>
      </footer>

    </div>
  );
}
