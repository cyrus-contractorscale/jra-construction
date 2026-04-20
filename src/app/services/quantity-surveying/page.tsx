import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantity Surveying Auckland | JRA Construction",
  description:
    "Expert quantity surveying services in Auckland by JRA Construction. Accurate budgets, transparent cost management, NZIQS-affiliated surveyors. Free consultation.",
};

const advantages = [
  { icon: "📊", text: "Real-time construction updates" },
  { icon: "🖥️", text: "Virtual walkthroughs of progress" },
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
  { step: "01", title: "Initial Budget Development", body: "Establishing baseline budgets and cost plans aligned with design documentation to set accurate financial expectations." },
  { step: "02", title: "Market Rate Analysis", body: "Benchmarking against current Auckland cost databases to ensure pricing reflects real market conditions." },
  { step: "03", title: "Tender Documentation", body: "Preparing Bills of Quantities (BoQ) and tender evaluation criteria for competitive procurement." },
  { step: "04", title: "Cost Monitoring", body: "Implementing earned value management (EVM) and cashflow forecasting to track spend against budget." },
  { step: "05", title: "Payment Management", body: "Certifying progress claims and maintaining complete cost audit trails for full financial transparency." },
  { step: "06", title: "Final Account Settlement", body: "Producing comprehensive close-out and reconciliation reports for a clean project financial conclusion." },
];

const qualityPoints = [
  { icon: "🏅", title: "Chartered Quantity Surveyors", body: "NZIQS-affiliated professionals with deep Auckland construction market knowledge." },
  { icon: "📊", title: "Transparent Cost Reporting", body: "Digital financial dashboards providing real-time visibility of all project expenditure." },
  { icon: "⚙️", title: "Value Engineering", body: "Systematic reviews to identify cost optimisation opportunities without compromising quality." },
  { icon: "📑", title: "Fixed-Price Protection", body: "Formal variation management processes keeping your budget on track throughout." },
];

const faqs = [
  { q: "How accurate are your initial budget estimates?", a: "Our detailed cost plans achieve up to 95% accuracy, using current Auckland market rates, supplier quotations, and comparative project analysis." },
  { q: "What's included in your cost management service?", a: "We provide complete end-to-end financial management, including budgeting, progress monitoring, variation assessment, and contract reconciliation." },
  { q: "How do you handle cost variations during construction?", a: "All changes are processed through formal variation registers with full cost impact analysis and client sign-off, maintaining contractual compliance and budget control." },
  { q: "Do you work with our existing architect and builder?", a: "Yes — our integrated project delivery model ensures cost alignment across all disciplines for seamless execution." },
  { q: "What documentation do you provide for cost tracking?", a: "Comprehensive monthly cost reports including budget vs actual analysis, progress claim summaries, and forecast-to-complete dashboards." },
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

export default function QuantitySurveyingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/quantity_surveying-services.jpg"
          alt="JRA Construction quantity surveying Auckland"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white/90">Quantity Surveying</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              QS Services · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Quantity Surveying<br />in Auckland
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Accurate financial planning and meticulous cost control — protecting your investment from concept to completion.
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
                  "Worried about escalating costs derailing your building project?",
                  "Need accurate budgets before committing to your design and build?",
                  "Want transparent financial oversight from experienced cost professionals?",
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
                Strategic Cost Planning and Control
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Every successful build starts with accurate financial planning and meticulous cost control. At JRA Construction, our expert team combines construction cost consultancy and quantity surveying expertise to deliver precise budgeting, transparent cost management, and comprehensive financial oversight.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                From initial feasibility studies to final account reconciliation, we ensure your investment is protected while maximising value through structured cost engineering and risk analysis. Our local registered quantity surveyors understand Auckland&apos;s regional construction market, empowering informed financial decisions across your build.
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
              Your Financial Management Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              A comprehensive scope of cost management services keeping your project financially on track.
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
                Setting the Standard in Cost Management
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Professional quantity surveying transforms uncertain building budgets into quantifiable, measurable outcomes. We provide elemental cost breakdowns, material rate schedules, and detailed financial analyses — aligned with New Zealand Institute of Quantity Surveyors (NZIQS) standards to remove guesswork and prevent cost blowouts.
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
              Our Cost Management Process
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              A systematic 6-phase approach ensuring financial discipline across every stage of your project.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ── PRECISION IN EVERY CALCULATION ──────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="section-tab w-fit">Precision & Transparency</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[42px]">
                Precision in Every Calculation
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Accurate cost management requires a deep understanding of construction methodologies, specifications, and labour productivity rates. Our certified cost professionals utilise benchmark pricing data, standard method of measurement, and regional cost indices to ensure realistic and transparent budgeting.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Financial transparency extends beyond initial projections to include ongoing budget variance tracking, progress valuations, and forecast adjustments. Our collaborative workflow between builder and quantity surveyor integrates cost control mechanisms into every phase of design and construction.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {qualityPoints.map((pt, i) => (
                <AnimateOnScroll key={pt.title} variant="scale-in" delay={i * 80}>
                  <div className="flex flex-col gap-3 rounded-2xl border border-[#e8edf2] bg-white p-5 shadow-sm">
                    <span className="text-3xl">{pt.icon}</span>
                    <h3 className="text-[15px] font-bold text-[#0f2744]">{pt.title}</h3>
                    <p className="text-[14px] leading-relaxed text-[#5f7286]">{pt.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── CONSULTATION CTA ─────────────────────────────────────── */}
      <section
        id="consultation"
        className="scroll-mt-24 bg-[#0f2744] bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,39,68,0.93), rgba(15,39,68,0.93)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Let&apos;s Get Started</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Claim Your Free Design &amp; Build Consultation
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                This Design &amp; Build Consult covers everything you need to get started with confidence.
              </p>
              <ul className="space-y-3">
                {consultItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] text-white/85">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-3">
            <p className="section-tab mx-auto w-fit">FAQs</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-tight tracking-tight text-[#0f2744]">
              Essential Cost Management Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} variant="fade-up" delay={i * 80}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BACK TO SERVICES ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-10">
        <Container className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0f2744] transition hover:gap-4"
          >
            <span aria-hidden="true">←</span> Back to All Services
          </Link>
        </Container>
      </section>
    </>
  );
}
