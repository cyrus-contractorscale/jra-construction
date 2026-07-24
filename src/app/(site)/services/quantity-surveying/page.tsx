import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  ServiceVideo,
  EbookCta,
  WaysToConnect,
  FeaturedGallery,
  PlanningNextSteps,
  JourneyCta,
} from "@/components/services/ServiceShared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Quantity Surveying Auckland | Instant Online Estimate" },
  description:
    "Expert quantity surveying Auckland services by JRA Construction. Experienced surveyors keep your project on time and budget. Contact us today.",
  alternates: { canonical: "/services/quantity-surveying" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/quantity-surveying/). */

const painPoints = [
  "Worried about escalating costs derailing your building project?",
  "Need accurate budgets before committing to your design and build?",
  "Want transparent financial oversight from experienced cost professionals?",
];

const introParas = [
  "Every successful build starts with accurate financial planning and meticulous cost control. At JRA Construction, our expert team combines construction cost consultancy and quantity surveying expertise to deliver precise budgeting, transparent cost management, and comprehensive financial oversight. From initial feasibility studies to final account reconciliation, we ensure your investment is protected while maximising value through structured cost engineering and risk analysis.",
];

const advantageItems = [
  { icon: "📡", text: "Real-time construction updates" },
  { icon: "🖥️", text: "Virtual walkthroughs of progress" },
  { icon: "💬", text: "Direct communication with your project team" },
  { icon: "📁", text: "Digital documentation access" },
  { icon: "📍", text: "Milestone tracking and notifications" },
  { icon: "✅", text: "Material selections and approvals" },
  { icon: "📸", text: "Photo and video progress updates" },
];

const standardItems = [
  "Fixed-price certainty",
  "287-point quality verification system",
  "Master Builders certification",
  "Sustainable building practices",
  "Architectural partnerships",
];

const strategicParas = [
  "Professional quantity surveying and cost planning services transform uncertain building budgets into quantifiable, measurable outcomes. We provide elemental cost breakdowns, material rate schedules, and detailed financial analyses, giving you confidence in your project’s economic feasibility. Our systematic cost management framework, aligned with New Zealand Institute of Quantity Surveyors (NZIQS) standards, removes guesswork and prevents cost blowouts common in residential construction.",
  "As your dedicated construction quantity surveyor, we monitor every expenditure using real-time cost tracking software, ensuring optimal value and accountability. Our team conducts cost-to-complete forecasting, variance analysis, and benchmark comparisons to identify opportunities for savings without compromising design integrity or build quality.",
  "Our local registered quantity surveyors understand Auckland’s regional construction market, supplier cost structures, and council compliance fees. This local knowledge ensures accurate pricing that reflects current labour rates, supply chain trends, and material lead times, empowering informed financial decisions across your build.",
];

const journeyItems = [
  "Initial project feasibility and budget development using elemental cost planning",
  "Detailed material take-offs and labour estimates verified against market rate databases",
  "Tender documentation preparation and bid evaluation using competitive analysis",
  "Contract cost analysis and recommendations aligned with NZS 3910 contract standards",
  "Progress payment verification through on-site valuation inspections",
  "Variation assessment and cost impact modelling",
  "Final account preparation and reconciliation reporting",
];

const trustItems = [
  "Chartered quantity surveyors (NZIQS-affiliated)",
  "In-depth Auckland construction market intelligence",
  "Transparent cost reporting through digital financial dashboards",
  "Value engineering reviews and cost optimisation strategies",
  "Fixed-price contract protection and variation management",
];

const oversightItems = [
  "Pre-construction cost planning and budget modelling",
  "Real-time expenditure monitoring using construction cost control software",
  "Progress claim assessment and payment certification",
  "Change order review and budget re-forecasting",
  "Final account reconciliation and close-out documentation",
];

const precisionParas = [
  "Accurate cost management requires a deep understanding of construction methodologies, specifications, and labour productivity rates. Our certified cost professionals utilise benchmark pricing data, standard method of measurement (SMM7/NZS MM4), and regional cost indices to ensure realistic and transparent budgeting.",
  "Financial transparency extends beyond initial projections to include ongoing budget variance tracking, progress valuations, and forecast adjustments. Our collaborative workflow between builder and quantity surveyor integrates cost control mechanisms into every phase of design and construction, eliminating miscommunication and unapproved cost drift.",
];

const proactiveItems = [
  "Monthly budget performance reviews",
  "Cost variance trend analysis and early-warning reporting",
  "Payment milestone verification and retention tracking",
  "Supplier rate negotiation and procurement review",
  "Fixed-price contract protection and variation management",
];

const processSteps = [
  { step: "01", title: "Initial Budget Development", body: "Establishing baseline budgets and cost plans aligned with design documentation" },
  { step: "02", title: "Market Rate Analysis", body: "Benchmarking against current Auckland cost databases" },
  { step: "03", title: "Tender Documentation", body: "Preparing Bills of Quantities (BoQ) and tender evaluation criteria" },
  { step: "04", title: "Cost Monitoring", body: "Implementing earned value management (EVM) and cashflow forecasting" },
  { step: "05", title: "Payment Management", body: "Certifying progress claims and maintaining cost audit trails" },
  { step: "06", title: "Final Account Settlement", body: "Producing comprehensive close-out and reconciliation reports" },
];

const faqs = [
  { q: "How accurate are your initial budget estimates?", a: "Our detailed cost plans achieve up to 95% accuracy, using current Auckland market rates, supplier quotations, and comparative project analysis." },
  { q: "What’s included in your cost management service?", a: "We provide complete end-to-end financial management, including budgeting, progress monitoring, variation assessment, and contract reconciliation." },
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
    <details className="group rounded-2xl border border-[#eef2f6] bg-[#f9fafb] transition-all duration-300 open:border-[#293a57] open:bg-[#293a57] open:shadow-lg open:shadow-[#293a57]/15">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
        <span className="text-[16px] font-semibold leading-snug text-[#293a57] group-open:text-white sm:text-[17px]">
          {q}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2f6] text-xl font-light text-[#293a57] transition-all duration-300 group-open:rotate-45 group-open:bg-white/15 group-open:text-white">
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
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
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
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Quantity Surveying<br />in Auckland
            </h1>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Free Consultation
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Online Estimate
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PAIN POINTS + INTRO ──────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-[#eef2f6] bg-[#f9fafb] px-5 py-4">
                    <span className="mt-0.5 text-[#293a57]">
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
              {introParas.map((para) => (
                <p key={para.slice(0, 40)} className="text-[17px] leading-[1.65] text-[#4d6277]">
                  {para}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── E-BOOK CTA ───────────────────────────────────────────── */}
      <EbookCta
        image="/services/JRA-Custom-Home-ebook.png"
        imageAlt="Custom Home Brochure"
        bookTitle="Build Your Custom Home"
      />

      {/* ── VIDEO: BUSINESS SHOWCASE ─────────────────────────────── */}
      <ServiceVideo
        videoId="NAaXgHLW51Q"
        title="JRA Construction | Business Showcase"
        eyebrow="See JRA In Action"
      />

      {/* ── THE JRA ADVANTAGE ────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              The JRA Advantage: Your Home, Your Way
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantageItems.map((item, i) => (
              <AnimateOnScroll key={item.text} variant="scale-in" delay={i * 70}>
                <div className="flex items-start gap-4 rounded-2xl border border-[#e8edf2] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#293a57]/8">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-[15px] font-medium leading-snug text-[#293a57]">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SETTING THE STANDARD ─────────────────────────────────── */}
      <section
        className="bg-[#293a57] bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,58,87,0.92), rgba(41,58,87,0.92)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Setting the Standard in New Build Developments Auckland
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <ul className="space-y-4">
              {standardItems.map((item, i) => (
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

      {/* ── VIDEO: 8-STEP CLIENT PROCESS ─────────────────────────── */}
      <ServiceVideo
        videoId="Fc3nnr7B4Hw"
        title="JRA's 8-Step Client Process - How it works"
        eyebrow="How We Work"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915"
        image="/services/6406b86736711b0d60253049_JRA-Ward-Final-Website-Ready-46-p-800-768x1152.jpg"
        imageAlt="Auckland Home Quantity Surveying"
      />

      {/* ── STRATEGIC COST PLANNING AND CONTROL ──────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Strategic Cost Planning and Control
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} className="space-y-5">
            {strategicParas.map((para) => (
              <p key={para.slice(0, 40)} className="text-[17px] leading-[1.7] text-[#4d6277]">
                {para}
              </p>
            ))}
            <div className="text-center">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Free Online Estimate <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── FINANCIAL MANAGEMENT JOURNEY + WHY TRUST ─────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#293a57] sm:text-[38px]">
                Your Financial Management Journey
              </h2>
              <ul className="space-y-3">
                {journeyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#293a57] sm:text-[38px]">
                Why Trust JRA&apos;s Cost Expertise
              </h2>
              <ul className="space-y-3">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── COMPREHENSIVE FINANCIAL OVERSIGHT ────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
              Comprehensive Financial Oversight
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <ul className="space-y-3">
              {oversightItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── CONSULTATION CTA ─────────────────────────────────────── */}
      <section
        id="consultation"
        className="scroll-mt-24 bg-[#293a57] bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,58,87,0.93), rgba(41,58,87,0.93)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Let&apos;s Get Your Dream Started</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Claim Your Free Design &amp; Build Consultation
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">This Design &amp; Build Consult covers…</p>
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

      {/* ── PRECISION IN EVERY CALCULATION ───────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Precision in Every Calculation
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} className="space-y-5">
            {precisionParas.map((para) => (
              <p key={para.slice(0, 40)} className="text-[17px] leading-[1.7] text-[#4d6277]">
                {para}
              </p>
            ))}
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROACTIVE FINANCIAL MANAGEMENT ───────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
              Proactive Financial Management
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} className="space-y-6">
            <ul className="space-y-3">
              {proactiveItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Our established financial governance systems maintain budget discipline while ensuring
              premium workmanship. This approach aligns with QS industry best practices and ISO 9001
              quality management principles, safeguarding financial integrity across every construction
              phase.
            </p>
            <div className="text-center">
              <Link
                href="/why-choose-us"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#293a57] px-7 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-[#293a57] hover:text-white"
              >
                Read More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Services</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              Our Cost Management Process
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#293a57]/20 hover:shadow-lg hover:shadow-[#293a57]/8">
                  <span className="mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#293a57]/30">{s.step}</span>
                  <h3 className="mb-2 text-[18px] font-bold text-[#293a57]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURED QUANTITY SURVEYING GALLERY ──────────────────── */}
      <FeaturedGallery
        heading="Featured Quantity Surveying"
        images={[
          { src: "/services/Copy-of-2A3A2941-scaled.jpg", alt: "JRA Construction project exterior" },
          { src: "/services/Copy-of-2A3A2794-scaled.jpg", alt: "JRA Construction project living space" },
          { src: "/services/Copy-of-2A3A2787-scaled.jpg", alt: "JRA Construction project interior" },
          { src: "/services/Seacombe-11-scaled.jpg", alt: "Seacombe project" },
          { src: "/services/Patio-Outdoor-Living.webp", alt: "Patio outdoor living area" },
          { src: "/services/DSC00888-HDR-1-sharpen-scaled.jpg", alt: "Architecturally designed residence" },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-3">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-tight tracking-tight text-[#293a57]">
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

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <Testimonials heading="See What Others Are Saying" />

      {/* ── PRELIMINARY PLANNING NEXT STEPS ──────────────────────── */}
      <PlanningNextSteps leadIn="Thinking about extending your home?" />

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <JourneyCta leadIn="Thinking about extending your home?" />

      {/* ── BACK TO SERVICES ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-10">
        <Container className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#293a57] transition hover:gap-4"
          >
            <span aria-hidden="true">←</span> Back to All Services
          </Link>
        </Container>
      </section>
    </>
  );
}
