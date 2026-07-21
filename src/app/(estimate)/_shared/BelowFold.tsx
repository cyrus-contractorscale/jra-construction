"use client";

import Image from "next/image";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "We meet on-site or virtually to understand your vision, budget, and timeline. No pressure — just a genuine conversation about what is possible.",
    detail: "On-site or virtual · No obligation",
  },
  {
    number: "02",
    title: "Design & Planning",
    desc: "We work alongside your architect or designer — or connect you with trusted professionals — to produce fully consented, build-ready plans.",
    detail: "Council consent · Architectural coordination",
  },
  {
    number: "03",
    title: "Consent & Approval",
    desc: "We manage the council consent process from start to finish, liaising with inspectors and ensuring every requirement is met before breaking ground.",
    detail: "Council liaison · Permit management",
  },
  {
    number: "04",
    title: "Fixed-Price Proposal",
    desc: "You receive a clear, itemised quote with zero hidden costs. We walk you through every line before you sign a single thing.",
    detail: "No surprises · Full line-item breakdown",
  },
  {
    number: "05",
    title: "Build & Communication",
    desc: "Weekly site updates, a dedicated site manager on every project, and strict quality control enforced at every stage of the build.",
    detail: "Weekly updates · Dedicated site manager",
  },
  {
    number: "06",
    title: "Handover & Aftercare",
    desc: "We walk through the completed project with you, hand over all documentation and warranties, and remain available long after the build is done.",
    detail: "Full documentation · Ongoing support",
  },
];

export function BelowFold({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* ── About Us ── */}
      <section id="about" className="relative overflow-hidden bg-zinc-900 py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[200px] font-black leading-none text-white/[0.025] lg:text-[280px]">
          JRA
        </div>
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(18,120,206,0.12) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative w-full max-w-[260px] flex-shrink-0 self-center lg:max-w-[300px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src="/joe-allen.jpg" alt="Joe Allen" fill className="object-cover object-top" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-[#293a57] px-4 py-3">
                <p className="text-2xl font-black text-white">15+</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Years building</p>
              </div>
            </div>

            <div className="flex-1">
              <span className="mb-4 inline-block rounded-full border border-[#293a57]/30 bg-[#293a57]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#293a57]">
                Who We Are
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Auckland&apos;s builders<br />who show up and deliver.
              </h2>
              <p className="mb-4 text-base leading-relaxed text-white/65">
                JRA Construction is founded and run by Joe Allen — a Registered Licensed Building Practitioner with over 15 years of hands-on site experience. Every project is managed personally by Joe, from the first meeting to the final walk-through.
              </p>
              <p className="mb-8 text-base leading-relaxed text-white/65">
                We do not subcontract our management or disappear once work starts. You get direct communication, honest answers, and a build that reflects the quality we are proud to put our name on.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  { value: "15+", label: "Years experience" },
                  { value: "100%", label: "LBP supervised" },
                  { value: "5★", label: "Client rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-white">{s.value}</p>
                    <p className="mt-0.5 text-[11px] text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section id="process" className="relative overflow-hidden bg-[#f2f4f7] py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#293a57]" />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-lg">
              <span className="mb-3 inline-block rounded-full border border-[#293a57]/20 bg-[#293a57]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#293a57]">
                From Start to Finish
              </span>
              <h2 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                Our proven process.<br />No surprises, ever.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500 lg:text-right">
              Every JRA Construction project follows the same framework — so you always know what comes next, what it costs, and why.
            </p>
          </div>
          <div className="grid gap-px bg-zinc-200 overflow-hidden rounded-2xl sm:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="group relative flex flex-col justify-between bg-white p-7 transition-colors duration-200 hover:bg-[#293a57]">
                <div className="mb-6">
                  <span className="text-5xl font-black text-zinc-100 transition-colors duration-200 group-hover:text-white/15">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-zinc-900 transition-colors duration-200 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-zinc-500 transition-colors duration-200 group-hover:text-white/70">
                    {step.desc}
                  </p>
                  <span className="inline-block rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-semibold text-zinc-400 transition-all duration-200 group-hover:border-white/20 group-hover:text-white/50">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative overflow-hidden bg-zinc-900 py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #293a57 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(18,120,206,0.15) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="lg:w-[38%] lg:flex-shrink-0 lg:pt-2">
              <span className="mb-4 inline-block rounded-full border border-[#293a57]/30 bg-[#293a57]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#293a57]">
                Common Questions
              </span>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Questions?<br />We have<br />answers.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white/50">
                Still not sure? Call Joe directly or submit the form and he will get back to you within one business day.
              </p>
              <div className="flex flex-col gap-3">
                <a href="#estimate" className="inline-flex items-center gap-2 rounded-sm bg-[#293a57] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#0d65b5]">
                  Get Free Estimate
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a href="tel:+6448873529" className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white/70 transition hover:border-white/40 hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  +64 4 887 3529
                </a>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
