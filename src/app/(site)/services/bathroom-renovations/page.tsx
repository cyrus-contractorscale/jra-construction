import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  ServiceVideoPair,
  ServiceFeatureStory,
  ServiceStoryChecklist,
  EbookCta,
  WaysToConnect,
  FeaturedGallery,
  PlanningNextSteps,
  JourneyCta,
} from "@/components/services/ServiceShared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Bathroom Renovations Auckland | Instant Online Estimate" },
  description:
    "Transform your space with high-quality bathroom renovations in Auckland by JRA Construction. Contact us today for your free quote.",
  alternates: { canonical: "/services/bathroom-renovations" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/bathroom-renovations/). */

const painPoints = [
  "Is your bathroom outdated, cramped, or not meeting your family's needs?",
  "Dreaming of a modern, functional bathroom that adds value to your home?",
  "Want to create a luxurious retreat within your existing space?",
];

const introParas = [
  "Transform your bathroom into a stunning sanctuary with JRA Construction’s bathroom renovations Auckland expertise. As specialists in Auckland bathroom renovations, we combine innovative New Zealand bathroom design principles with superior craftsmanship to create spaces that perfectly balance luxury with functionality, incorporating innovations like underfloor heating and high-efficiency ventilation to enhance comfort. Our comprehensive approach to bathroom design renovation ensures every project delivers lasting value while maximising your space’s potential.",
];

const whyChooseItems = [
  "Fixed-price contracts",
  "287-point quality system",
  "Licensed practitioners",
  "Master Builders guarantee",
  "Heritage expertise",
];

const excellenceItems = [
  { text: "Personal project consultant" },
  { text: "Design collaboration" },
  { text: "Council compliance expertise" },
  { text: "Material procurement specialists" },
];

const remodelingParas = [
  "With decades of experience in bathroom remodeling in Auckland, we specialise in elevating ordinary bathrooms into sophisticated retreats. From bathroom renovation projects in heritage villas to shower renovation solutions in contemporary homes, installing frameless glass showers in tight en-suites to designing spa-like retreats in larger bathrooms, we understand how to maximise space while creating stunning results.",
  "Our expertise in bathroom reconstruction spans everything from compact ensuites to luxury master bathrooms. Each project benefits from our detailed planning process, ensuring every element—from layout optimisation to fixture selection—works harmoniously to create your perfect bathroom.",
  "We specialise in creating tailored solutions that match your lifestyle needs, whether you’re planning a complete bath renovation or targeted bathroom repairs. Our comprehensive design approach ensures every renovation enhances both functionality and aesthetic appeal.",
];

const journeyItems = [
  "Professional design consultation",
  "Custom layout planning",
  "Premium fixture selection",
  "Material and finish choices",
  "Council compliance management",
  "Waterproofing certification",
  "Quality assurance checks",
];

const innovationsParas = [
  "Elevate your bathroom renovation with the latest in modern amenities and design trends. Today’s bathroom innovations can transform a standard bathroom into a luxury oasis. We can incorporate features like smart thermostatic shower systems, touchscreen bathroom mirrors with integrated lighting, and sensor-activated faucets that combine convenience with water efficiency. Popular in many Auckland bathroom makeovers is the addition of underfloor heating for those chilly mornings, as well as demister mirror technology to keep your vanity fog-free. By staying up-to-date on cutting-edge fixtures and materials, we ensure your renovated bathroom is both stylish and future-proof.",
  "Design-wise, our team is adept at implementing contemporary trends in a practical way. Whether it’s creating a curbless walk-in shower for a seamless look and improved accessibility, or installing a freestanding bathtub as a focal point, we marry form and function. We pay special attention to finishes that resist moisture and mould – from premium waterproof membranes behind the tiles to proper ventilation systems – so your beautiful new space stands the test of time. With JRA’s clear, knowledgeable guidance, you can choose modern features that not only elevate your daily routine but also add long-term value to your home.",
];

const qualityParas = [
  "Every bathroom renovation project comes with comprehensive Master Builders guarantees and full insurance coverage. Our meticulous attention to detail ensures your renovation meets the highest standards of quality and compliance, including strict waterproofing to New Zealand Building Code requirements, from waterproofing to final fixtures.",
  "Beyond industry-standard warranties, we provide ongoing support and maintenance guidance. Our quality control process includes detailed documentation, regular inspections, and comprehensive final checks, giving you complete confidence in your bathroom’s longevity.",
];

const processSteps = [
  { step: "01", title: "Initial Contact", body: "We start with a free, no-obligation chat to understand your goals and see if we're the right fit." },
  { step: "02", title: "Site Meeting", body: "We visit your home to discuss your project in detail. We'll bring guides and examples to help you visualize the possibilities." },
  { step: "03", title: "Working with Consultants", body: "We collaborate with your existing architect or connect you with trusted consultants. Early involvement helps prevent costly design changes later." },
  { step: "04", title: "Estimate of Costs", body: "Before finalizing designs, we provide a cost estimate to ensure your plans align with your budget. This step helps avoid unexpected expenses down the line." },
  { step: "05", title: "Quotation", body: "Once designs are ready and submitted to the council, we compile a detailed, fixed-price quote. This includes subcontractor costs and a list of assumptions for full transparency." },
  { step: "06", title: "Contract Agreements", body: "With the design, pricing, and timeline agreed upon, we formalize everything in a clear contract. This ensures all parties are aligned before construction begins." },
  { step: "07", title: "Construction Phase", body: "Our licensed builders execute the project according to plan. You'll receive regular updates and have the opportunity to discuss any changes or decisions as needed." },
  { step: "08", title: "The Completion Phase", body: "Upon completion, we conduct a thorough walkthrough with you to ensure satisfaction. We provide all necessary documentation and remain available for any post-project support." },
];

const faqs = [
  { q: "How long does a bathroom renovation take?", a: "Typically 3-4 weeks, depending on scope and complexity." },
  { q: "Do I need council consent?", a: "We handle all necessary permits and ensure compliance with local regulations." },
  { q: "Can you help with design ideas?", a: "Yes, our design team will help you explore options that suit your style and budget." },
  { q: "How do you manage waterproofing?", a: "We use certified waterproofing systems and specialists to ensure long-lasting results." },
  { q: "What about temporary facilities?", a: "We can discuss options to minimise disruption during your renovation." },
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
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-[#17243b]">
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

export default function BathroomRenovationsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/bathroom-services.webp"
          alt="JRA Construction bathroom renovations Auckland"
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
            <span className="text-white/90">Bathroom Renovations</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Bathroom Renovations<br />in Auckland
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
      <section className="bg-white py-14 sm:py-16">
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
        image="/services/JRA-Home-Reno-PDF.png"
        imageAlt="Auckland Renovation Guide Book"
        bookTitle="The Ultimate Guide to Home Renovation in Auckland"
      />

      {/* ── JRA STORY + PROCESS VIDEOS ───────────────────────────── */}
      <ServiceVideoPair />

      {/* ── WHY CHOOSE JRA FOR HOUSE RENOVATIONS AUCKLAND ────────── */}
      <section
        className="bg-[#293a57] bg-cover bg-center py-14 sm:py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,58,87,0.92), rgba(41,58,87,0.92)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Why Choose JRA for House Renovations Auckland
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <ul className="space-y-4">
              {whyChooseItems.map((item, i) => (
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

      {/* ── EXCELLENCE IN HOME IMPROVEMENTS ──────────────────────── */}
      <ServiceFeatureStory
        heading="Excellence in Home Improvements"
        items={excellenceItems.map((item) => item.text)}
        image="/projects/saint-leonards-road-mount-eden/Decorative-Bathroom.webp"
        imageAlt="Decorative bathroom renovation"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915"
        image="/services/westminster-bathroom-design-683x1024.webp"
        imageAlt="Stylish bathroom renovation"
      />

      {/* ── BATHROOM REMODELING SOLUTIONS ────────────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="relative min-h-[500px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/westminster-road-balmoral/westminster-road-tub.jpg"
              alt="Balmoral bathroom renovation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="flex flex-col justify-center space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Creating Exceptional Bathroom Remodeling Auckland Solutions
            </h2>
            {remodelingParas.map((para) => (
              <p key={para.slice(0, 40)} className="text-[17px] leading-[1.7] text-[#4d6277]">
                {para}
              </p>
            ))}
            <div>
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

      {/* ── YOUR BATHROOM TRANSFORMATION JOURNEY ─────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
                Your Bathroom Transformation Journey
              </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <ServiceStoryChecklist
              image="/projects/fir-street-waterview/bathroom-renovation-fir.jpg"
              imageAlt="Luxurious bathroom renovation"
              intro={<p>Our organized approach ensures a smooth bathroom renovation process:</p>}
              items={journeyItems}
              action={<Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-zinc-100"
              >
                Free Online Estimate <span aria-hidden="true">→</span>
              </Link>}
            />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── MODERN BATHROOM INNOVATIONS ──────────────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Modern Bathroom Innovations
            </h2>
            {innovationsParas.map((para) => (
              <p key={para.slice(0, 40)} className="text-[17px] leading-[1.7] text-[#4d6277]">
                {para}
              </p>
            ))}
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="relative min-h-[560px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/saint-leonards-road-mount-eden/leonards-bathroom-renovation-r62cl7hv6qhzgufxcuakb85rwcgaqai3wbbv7tfoo0.jpg"
              alt="Modern bathroom innovation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── CONSULTATION CTA ─────────────────────────────────────── */}
      <section
        id="consultation"
        className="scroll-mt-24 bg-[#293a57] bg-cover bg-center py-14 sm:py-16"
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
                {consultItems.map((item, i) => (
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

      {/* ── QUALITY ASSURANCE ────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="relative min-h-[460px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/fir-street-waterview/vanity-fir-street.jpg"
              alt="Completed bathroom vanity"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" className="space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Quality Assurance
            </h2>
            {qualityParas.map((para) => (
              <p key={para.slice(0, 40)} className="text-[17px] leading-[1.7] text-[#5f7286]">
                {para}
              </p>
            ))}
            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#293a57] px-7 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-[#293a57] hover:text-white"
            >
              Read More <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-[#f9fafb] py-14 sm:py-16">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Services</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              How We Put Your Bathroom Renovation Plan to Action
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-5 lg:grid-cols-2">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className={`grid h-full grid-cols-[64px_1fr] overflow-hidden rounded-2xl border border-[#e8edf2] ${i % 2 === 0 ? "bg-white" : "bg-[#eef2f5]"}`}>
                  <span className="flex items-start justify-center border-r border-[#293a57]/10 pt-6 text-[13px] font-bold uppercase tracking-[0.18em] text-[#293a57]/45">{s.step}</span>
                  <div className="p-6">
                    <h3 className="mb-2 text-[18px] font-bold text-[#293a57]">{s.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURED BATHROOM RENOVATION GALLERY ─────────────────── */}
      <FeaturedGallery
        heading="Featured Bathroom Renovation"
        images={[
          { src: "/services/Decorative-Bathroom.webp", alt: "Decorative bathroom renovation" },
          { src: "/services/bathroom-renovation-balmoral.webp", alt: "Balmoral bathroom renovation" },
          { src: "/services/Modern-Bathroom-Vanity.webp", alt: "Modern bathroom vanity" },
          { src: "/services/Bathtub-Modern-Bathroom.webp", alt: "Bathtub in modern bathroom" },
          { src: "/services/Bathroom-Vanity-Design.webp", alt: "Bathroom vanity design" },
          { src: "/services/JRA-15-Saint-Leonards-Website-15.jpg", alt: "Saint Leonards bathroom renovation" },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="max-w-3xl space-y-8">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-3">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-tight tracking-tight text-[#293a57]">
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
