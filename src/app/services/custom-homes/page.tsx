import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Homes Auckland | JRA Construction",
  description:
    "Build your dream custom home in Auckland with JRA Construction. Fixed-price contracts, licensed builders, Master Builders certified. Get a free consultation today.",
};

const advantages = [
  { icon: "📡", text: "Real-time construction updates" },
  { icon: "🏠", text: "Virtual walkthroughs of progress" },
  { icon: "💬", text: "Direct communication with your project team" },
  { icon: "📁", text: "Digital documentation access" },
  { icon: "📍", text: "Milestone tracking and notifications" },
  { icon: "✅", text: "Material selections and approvals" },
  { icon: "📸", text: "Photo and video progress updates" },
];

const standards = [
  "Fixed-price certainty",
  "287-point quality verification system",
  "Master Builders certification",
  "Sustainable building practices",
  "Architectural partnerships",
];

const processSteps = [
  { step: "01", title: "Initial Contact", body: "We start with a free, no-obligation chat to understand your goals and see if we're the right fit." },
  { step: "02", title: "Site Meeting", body: "We visit your home to discuss your project in detail. We'll bring guides and examples to help you visualize the possibilities." },
  { step: "03", title: "Working with Consultants", body: "We collaborate with your existing architect or connect you with trusted consultants. Early involvement helps prevent costly design changes later." },
  { step: "04", title: "Estimate of Costs", body: "Before finalizing designs, we provide a cost estimate to ensure your plans align with your budget. This step helps avoid unexpected expenses." },
  { step: "05", title: "Quotation", body: "Once designs are ready and submitted to the council, we compile a detailed, fixed-price quote including all subcontractor costs." },
  { step: "06", title: "Contract Agreements", body: "With the design, pricing, and timeline agreed upon, we formalize everything in a clear contract before construction begins." },
  { step: "07", title: "Construction Phase", body: "Our licensed builders execute the project according to plan. You'll receive regular updates and can discuss any changes as needed." },
  { step: "08", title: "The Completion Phase", body: "We conduct a thorough walkthrough with you to ensure satisfaction and provide all necessary documentation including your CCC." },
];

const qualityPoints = [
  { icon: "👤", title: "Personal Project Consultant", body: "A dedicated consultant guides you through every stage of your build." },
  { icon: "📅", title: "Detailed Timeline Planning", body: "Precise scheduling ensures your project stays on track from day one." },
  { icon: "🏛️", title: "Council Liaison Expertise", body: "We handle all consents and compliance documentation on your behalf." },
  { icon: "🔩", title: "Material Procurement Specialists", body: "We source quality materials at competitive prices through our trusted network." },
];

const faqs = [
  { q: "What's the typical timeframe for a new build?", a: "Most projects take 8–12 months from consent to completion, depending on complexity and design requirements." },
  { q: "How do you ensure budget accuracy?", a: "We provide detailed cost breakdowns and fixed-price contracts with fully transparent variation processes — no nasty surprises." },
  { q: "What sustainable options do you offer?", a: "We incorporate energy-efficient design, sustainable materials, and future-proof technologies in all new builds." },
  { q: "How do you handle council consents?", a: "Our team manages the entire consent process, including resource consent, building consent documentation, inspections, and the final CCC." },
  { q: "What support do you provide post-completion?", a: "We offer comprehensive after-care service and maintain contact throughout your entire warranty period." },
];

const consultItems = [
  "Design Consultation",
  "Site Walk-Thru and Inspection",
  "Director's Consultation",
  "Selections Checklist & Comparison",
  "Rough Estimate and Budget Scope",
  "Timeline Estimate and Move-In Date Expectations",
  "Connection to our Preferred Partner Network",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-[#eef2f6] bg-[#f9fafb] transition-all duration-300 open:border-[#0f2744] open:bg-[#0f2744] open:shadow-lg open:shadow-[#0f2744]/15">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
        <span className="text-[16px] font-semibold leading-snug text-[#0f2744] group-open:text-white sm:text-[17px]">
          {q}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2f6] text-xl font-light text-[#0f2744] transition-all duration-300 group-open:rotate-45 group-open:bg-white/15 group-open:text-white">
          +
        </span>
      </summary>
      <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-7">
        <p className="text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{a}</p>
      </div>
    </details>
  );
}

export default function CustomHomesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/custom-home-services.webp"
          alt="JRA Construction custom home Auckland"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white/90">Custom Homes</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              New Builds · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Custom Homes<br />in Auckland
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              From concept to completion — fixed-price contracts, licensed builders, and unwavering commitment to quality.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#consultation"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Free Consultation
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Our Process
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PAIN POINTS + INTRO ──────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2744]/50">Sound Familiar?</p>
              <ul className="space-y-4">
                {[
                  "Dreaming of a custom-designed home but overwhelmed by the building process?",
                  "Concerned about budget overruns and construction delays?",
                  "Want to work with builders who understand your unique vision?",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-[#eef2f6] bg-[#f9fafb] px-5 py-4">
                    <span className="mt-0.5 text-[#0f2744]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[16px] font-medium text-[#2d4560]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[42px]">
                Creating Exceptional New Build Homes
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                At JRA Construction, we deliver vision, precision, and unwavering dedication to quality. Our comprehensive project management approach ensures complete transparency throughout your building journey — from securing Auckland Council building consents to final sign-off.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                With our team of Licensed Building Practitioners and partnerships with leading architects, we've established ourselves as trusted new builds Auckland specialists. Our fixed-price contracts, proven systems, and dedicated client support ensure your building experience is seamless.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0f2744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16385f]">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── JRA ADVANTAGE ────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <p className="section-tab mx-auto w-fit mb-4">The JRA Advantage</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[48px]">
              Always Informed. Always in Control.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              Our advanced client communication system keeps you connected to every stage of your build.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
              <AnimateOnScroll key={item.text} variant="scale-in" delay={i * 70}>
                <div className="flex items-start gap-4 rounded-2xl border border-[#e8edf2] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0f2744]/8">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-[15px] font-medium leading-snug text-[#0f2744]">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SETTING THE STANDARD ─────────────────────────────────── */}
      <section
        className="bg-[#0f2744] bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,39,68,0.92), rgba(15,39,68,0.92)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Our Commitment</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Setting the Standard in New Build Developments
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Our portfolio showcases the depth of our expertise, incorporating sustainable, energy-efficient materials and innovative technologies. From our Regional Silver Award-winning project in Whangaparāoa to architecturally designed dual residences in Queensway, each home demonstrates our ability to bring unique visions to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f2744] transition hover:bg-zinc-100"
              >
                Start Your Journey <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <ul className="space-y-4">
              {standards.map((item, i) => (
                <AnimateOnScroll key={item} variant="fade-up" delay={i * 80}>
                  <li className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                    <CheckIcon />
                    <span className="text-[16px] font-semibold text-white">{item}</span>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">How It Works</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#0f2744] sm:text-[52px]">
              How We Put Your Custom Home to Action
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Our proven 8-step process removes the stress and guesswork from building your new home.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0f2744]/20 hover:shadow-lg hover:shadow-[#0f2744]/8">
                  <span className="mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#0f2744]/30">{s.step}</span>
                  <h3 className="mb-2 text-[18px] font-bold text-[#0f2744]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COUNCIL CONSENTS ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-6">
            <p className="section-tab w-fit">Consents & Compliance</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[46px]">
              Navigating Council Consents & Compliance
            </h2>
            <div className="space-y-4 text-[17px] leading-[1.65] text-[#4d6277]">
              <p>
                Navigating the regulatory landscape is a critical part of any new build project. We leverage our in-depth knowledge of Auckland Council requirements and the New Zealand Building Code to streamline the consent process.
              </p>
              <p>
                From preparing documentation for resource and building consents to coordinating council inspections, our team handles it all — so your project stays on track with all permits in place and no compliance surprises.
              </p>
              <p>
                Our expertise as Licensed Building Practitioners and Registered Master Builders includes liaising with council officials and obtaining the Code Compliance Certificate (CCC) at project completion.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scale-in" delay={200}>
            <div className="rounded-2xl border border-[#e8edf2] bg-white p-8 shadow-[0_8px_32px_rgba(15,39,68,0.08)] space-y-5">
              <h3 className="text-[22px] font-extrabold text-[#0f2744]">What We Manage For You</h3>
              <ul className="space-y-3">
                {[
                  "Resource consent documentation",
                  "Building consent applications",
                  "Council inspection scheduling",
                  "NZ Building Code compliance",
                  "Code Compliance Certificate (CCC)",
                  "Structural & safety standards",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f2744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16385f]"
              >
                Discuss Your Project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── QUALITY PROMISE ──────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Our Promise</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[48px]">
              Building Excellence Guaranteed
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Every new home comes with comprehensive Master Builders guarantees and a Code Compliance Certificate. Protection against structural defects for 10 years — absolute confidence in your investment.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPoints.map((item, i) => (
              <AnimateOnScroll key={item.title} variant="scale-in" delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0f2744]/8">
                  <span className="mx-auto text-4xl">{item.icon}</span>
                  <h3 className="text-[16px] font-bold text-[#0f2744]">{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-[#5f7286]">{item.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5 lg:sticky lg:top-28">
            <p className="section-tab w-fit">FAQ</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[46px]">
              Common Questions About Custom Homes
            </h2>
            <p className="text-[17px] leading-relaxed text-[#5f7286]">
              Have more questions? Our team is ready to walk you through every detail of your new build journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f2744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16385f]"
            >
              Ask Us Anything <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100} className="space-y-3">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── CONSULTATION CTA ─────────────────────────────────────── */}
      <section
        id="consultation"
        className="scroll-mt-24 bg-[#0f2744] bg-cover bg-center bg-no-repeat py-14 sm:py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,39,68,0.86), rgba(15,39,68,0.86)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="grid gap-8 lg:grid-cols-[1fr_520px] lg:items-start">
          <AnimateOnScroll variant="fade-right" className="pt-2 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
              Let&apos;s get your dream started
            </p>
            <h2 className="mt-2 max-w-xl font-[ui-sans-serif,system-ui,sans-serif] text-[48px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[54px]">
              Claim Your Free Design &amp; Build Consultation
            </h2>
            <p className="mt-5 text-[17px] text-zinc-200">This Design &amp; Build Consult covers…</p>
            <ul className="mt-5 space-y-3 text-[16px] text-zinc-100">
              {consultItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150} className="flex justify-center lg:justify-center">
            <div className="w-full max-w-[520px] rounded-xl bg-white p-5 shadow-2xl shadow-black/35 sm:p-6">
              <ContactForm />
              <div className="mt-3 text-center text-[11px] text-zinc-400">
                We respect your privacy. No spam, ever.
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── NEXT STEPS / BACK TO SERVICES ────────────────────────── */}
      <section className="bg-white py-12 sm:py-14">
        <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#8a9aab]">Explore More</p>
            <h3 className="mt-1 text-[22px] font-extrabold text-[#0f2744]">View All Our Services</h3>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[#0f2744] px-7 py-3 text-sm font-semibold text-[#0f2744] transition hover:bg-[#0f2744] hover:text-white"
          >
            ← Back to Services
          </Link>
        </Container>
      </section>
    </>
  );
}
