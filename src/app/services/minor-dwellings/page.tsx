import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minor Dwellings Auckland | JRA Construction",
  description:
    "Build a minor dwelling in Auckland with JRA Construction. Expert planning, council compliance, and quality builds on your existing section. Free consultation.",
};

const advantages = [
  { icon: "👨‍👩‍👧‍👦", text: "Multi-generational living — keep family close" },
  { icon: "💰", text: "Rental income — long- or short-term" },
  { icon: "🏢", text: "Work-from-home setup or creative studio" },
  { icon: "🏨", text: "Guest space with full independence" },
  { icon: "📈", text: "Increase property value" },
  { icon: "🔮", text: "Future-proof your home" },
  { icon: "✅", text: "Quality assurance and warranty coverage" },
];

const standards = [
  "Fixed-Price Contracts",
  "287-Point Quality Checklist",
  "Licensed Building Practitioners",
  "Master Builders Guarantee",
  "Transparent Project Management",
];

const processSteps = [
  { step: "01", title: "Initial Contact", body: "We start with a free, no-obligation chat to understand your goals and see if we're the right fit." },
  { step: "02", title: "Site Meeting", body: "We visit your home to discuss your project in detail. We'll bring guides and examples to help you visualize the possibilities." },
  { step: "03", title: "Working with Consultants", body: "We collaborate with your existing architect or connect you with trusted consultants. Early involvement helps prevent costly design changes later." },
  { step: "04", title: "Estimate of Costs", body: "Before finalizing designs, we provide a cost estimate to ensure your plans align with your budget. This step helps avoid unexpected expenses." },
  { step: "05", title: "Quotation", body: "Once designs are ready and submitted to the council, we compile a detailed, fixed-price quote including all subcontractor costs and assumptions." },
  { step: "06", title: "Contract Agreements", body: "With the design, pricing, and timeline agreed upon, we formalize everything in a clear contract before construction begins." },
  { step: "07", title: "Construction Phase", body: "Our licensed builders execute the project according to plan. You'll receive regular updates and can discuss any changes or decisions as needed." },
  { step: "08", title: "The Completion Phase", body: "We conduct a thorough walkthrough with you to ensure satisfaction and provide all necessary documentation and ongoing post-project support." },
];

const keyPoints = [
  { icon: "📏", title: "Size Capped at 65m²", body: "Minor dwellings in Auckland are typically limited to 65m² — compact but fully functional with all essentials." },
  { icon: "🏠", title: "No Subdivision Required", body: "Built on your existing title — no need to subdivide, keeping the process simpler and more cost-effective." },
  { icon: "🏛️", title: "Council Compliance", body: "Must comply with Auckland planning rules covering site coverage, setbacks, and parking provisions — we manage all of this." },
  { icon: "🔄", title: "Permanent Use", body: "Designed for permanent living — not a temporary structure. Fully self-contained with kitchen, bathroom, and bedroom." },
];

const faqs = [
  { q: "What is a minor dwelling?", a: "A minor dwelling is a small, standalone residential unit built on the same lot as an existing dwelling house. In New Zealand, it's commonly limited to 65m² and doesn't require a separate title or subdivision." },
  { q: "How is a minor dwelling different from a granny flat?", a: "The terms are often used interchangeably. Both are self-contained units on the same property. Minor dwelling is the formal planning term used by Auckland Council, while granny flat is the common name." },
  { q: "Do I need council consent?", a: "Yes. In Auckland, a minor dwelling must comply with local planning rules including site coverage, setbacks, and parking provisions. We manage all consents and compliance documentation on your behalf." },
  { q: "Can I rent out a minor dwelling?", a: "Yes — minor dwellings are an excellent rental investment. We ensure your dwelling is fully compliant with all tenancy and building regulations." },
  { q: "How long does it take to build a minor dwelling?", a: "Timelines vary depending on design and site complexity, but most projects take 3–6 months from consent approval to completion. We provide a detailed schedule during your consultation." },
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

export default function MinorDwellingsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/minor-dwelling-services.webp"
          alt="JRA Construction minor dwellings Auckland"
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
            <span className="text-white/90">Minor Dwellings</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Minor Dwellings · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Minor Dwellings<br />in Auckland
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Smart, flexible, and future-ready — self-contained minor dwellings built on your existing section.
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

      {/* ── INTRO + BENEFITS ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2744]/50">Smart Space Solution</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[42px]">
                What Is a Minor Dwelling?
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                A minor dwelling is a small, self-contained home built on the same site as an existing house, designed to offer flexible living options without the need to subdivide. In New Zealand, it&apos;s commonly limited to a floor area of 65m² and is intended to support the main home on the same title.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                These dwellings are becoming a popular choice across Auckland for homeowners who want to support extended family, create space for adult children, or provide a private unit for guests — all while adding long-term value to their property.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0f2744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16385f]">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2744]/50">Why Consider Building a Minor Dwelling</p>
              <ul className="space-y-3">
                {[
                  "Multi-generational living — keep family close while maintaining independence",
                  "Rental income — generate extra cash flow through long- or short-term rentals",
                  "Work-from-home setup — create a separate home office or creative studio",
                  "Guest space — give visitors their own private, comfortable area",
                  "Increase property value — boost your home's appeal and market value",
                  "Future-proof your home — stay ready for changing needs without major renovations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-[#eef2f6] bg-[#f9fafb] px-5 py-4">
                    <CheckIcon />
                    <span className="text-[15px] leading-relaxed text-[#2d4560]">{item}</span>
                  </li>
                ))}
              </ul>
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
              What You Get with Every Project
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              More than just a builder — a partner who manages every detail from design to completion.
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
                Why Work with JRA Construction
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Building a minor dwelling in Auckland involves more than just putting up a small home — it requires experience, planning, and a deep understanding of local council rules. JRA Construction has been working with homeowners across Auckland to deliver well-built, fully consented minor dwellings that match their needs and maximise the potential of their property.
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
              How We Put Your Minor Dwellings Plan to Action
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Our proven 8-step process ensures your minor dwelling is delivered on time, on budget, and to the highest standard.
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

      {/* ── KEY FACTS ────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <p className="section-tab mx-auto w-fit mb-4">Key Facts</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[48px]">
              What You Need to Know
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              Understanding the rules and requirements before you start ensures a smooth, successful build.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyPoints.map((point, i) => (
              <AnimateOnScroll key={point.title} variant="fade-up" delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e8edf2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0f2744]/8">
                  <span className="text-4xl">{point.icon}</span>
                  <h3 className="text-[17px] font-bold text-[#0f2744]">{point.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#5f7286]">{point.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
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
              Frequently Asked Questions
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
