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
  title: { absolute: "Home Renovations Auckland | Instant Online Estimate | Quality & On-Time" },
  description:
    "Professional home renovations in New Zealand. JR&A Construction delivers reliable, high-quality renovations on time and on budget—from kitchens and bathrooms to full home makeovers.",
  alternates: { canonical: "/services/home-renovations" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/home-renovations/). */

const painPoints = [
  "Living in a space that no longer suits your family's needs?",
  "Want to modernise your home while preserving its character?",
  "Looking for trusted renovation builders in Auckland who can bring your vision to life?",
];

const whyChoose = [
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

const journeyItems = [
  { text: "Detailed project timeline and milestones" },
  { text: "Regular progress updates with photos" },
  { text: "Direct access to your renovation team" },
  { text: "Material selection assistance" },
  { text: "Building consent management" },
  { text: "Quality assurance checks" },
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
  { q: "How long does a typical renovation take?", a: "Timeline varies by scope, but most projects take 12-16 weeks from start to completion." },
  { q: "Do I need council consent?", a: "We handle all necessary permits and ensure compliance with local regulations." },
  { q: "Can we live in our home during renovations?", a: "Yes, most clients do. We implement strict safety protocols and minimise disruption." },
  { q: "How do you manage costs?", a: "We provide fixed-price contracts with detailed breakdowns and transparent variation processes." },
  { q: "What about heritage properties?", a: "Our team has extensive experience with heritage homes, working under Heritage New Zealand guidelines to preserve character while adding modern comfort." },
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

export default function HomeRenovationsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/home-renovation-services.webp"
          alt="JRA Construction home renovations Auckland"
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
            <span className="text-white/90">Home Renovations</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Home Renovations<br />in Auckland
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
            <div className="space-y-6">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
                <Image
                  src="/services/eden-renovation-lounge-1024x683.webp"
                  alt="living room renovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Breathing new life into existing spaces takes more than just{" "}
                <Link href="/services/construction-management" className="font-semibold text-[#293a57] underline decoration-[#293a57]/30 underline-offset-2 hover:decoration-[#293a57]">
                  construction skills
                </Link>{" "}
                it demands creativity, precision, and deep understanding of renovating houses, local
                council regulations, and compliance requirements. As specialists in home renovations in
                Auckland, we combine innovative design solutions with masterful craftsmanship to create
                homes that exceed expectations. Our comprehensive approach to home and construction
                ensures every project delivers lasting value while honouring your home’s unique
                character.
              </p>
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

      {/* ── WHY CHOOSE JRA ───────────────────────────────────────── */}
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
              {whyChoose.map((item, i) => (
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
        image="/projects/mount-eden-renovation/eden-renovation-lounge.webp"
        imageAlt="Mount Eden home renovation"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915" image="/services/sandringham-project-bookshelf-683x1024.webp" imageAlt="Renovated study area" />

      {/* ── EXPERIENCE THE DIFFERENCE ────────────────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="relative min-h-[420px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/fir-street-waterview/fir-living-space.jpg"
              alt="Renovated Auckland living space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="flex flex-col justify-center space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Experience the Difference in Auckland Home Renovations
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              When it comes to renovations Auckland, our portfolio showcases transformative projects
              across the city’s diverse neighbourhoods, from coastal Muriwai to urban centres. Our
              expertise ranges from renovating an old house in heritage areas to enhancing outdoor
              living spaces, demonstrating our versatility in handling house renovations Auckland of any
              scale or style.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              As specialists in household renovations, we’ve successfully transformed everything from
              classic villas to contemporary homes, including comprehensive outdoor renovations that
              harmoniously blend with natural surroundings. Our Muriwai project exemplifies this
              approach, where we enhanced the property’s functionality while ensuring every
              element—from new fencing to storage solutions—complemented the natural environment.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              Our comprehensive approach combines innovative design solutions with practical
              craftsmanship, ensuring every renovation enhances both the aesthetic appeal and
              functionality of your space. We pride ourselves on understanding the unique challenges
              each project presents, whether it’s integrating new structures with existing architecture
              or creating outdoor spaces that reflect the character of their surroundings. This
              attention to detail and respect for the environment has helped us deliver results that
              exceed expectations while preserving the natural beauty of each location.
            </p>
            <div className="pt-2">
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

      {/* ── YOUR JOURNEY ─────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Your Journey to Home Renovations in Auckland
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <ServiceStoryChecklist
              image="/projects/saint-leonards-road-mount-eden/saint-leonards-art-space.webp"
              imageAlt="Elegant renovated living space"
              intro={<p>Our systematic approach to renovations on a house keeps you informed and involved:</p>}
              items={journeyItems.map((item) => item.text)}
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

      {/* ── HERITAGE HOME RENOVATION EXPERTISE ───────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Heritage Home Renovation Expertise
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Renovating heritage and character homes requires a specialised approach, and it’s an area
              where JRA Construction truly excels. Auckland’s older villas and bungalows often come with
              heritage overlays or special council rules – we navigate these complexities with
              confidence. Our team works closely with heritage architects and council heritage advisors
              to ensure any changes (such as extending a protected villa or modernising a bungalow’s
              interior) preserve the original character. From restoring ornate ceilings and timber
              floors to matching century-old mouldings, we take care to retain the charm that makes your
              home unique. At the same time, we discreetly integrate modern amenities so you gain
              comfort and efficiency without sacrificing history.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Our experience with heritage home renovations means we understand the permit and consent
              processes that come with them. We prepare all necessary documentation for resource
              consents when altering protected structures and adhere to Heritage New Zealand guidelines
              during construction. Renovating an old house might involve structural reinforcement,
              retrofitting insulation into wall cavities, or upgrading to double-glazed windows – all
              while maintaining the home’s authentic look. JRA’s knowledgeable, careful approach ensures
              that your renovated character home meets today’s standards for safety and livability, all
              while honouring the architecture and story of the original building. This balance of old
              and new results in a home that continues to grace your neighbourhood for decades to come,
              now enhanced for modern living.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="relative min-h-[560px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/gunson-street-freemans-bay/gunson-house-exterior.jpg"
              alt="Auckland heritage home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
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

      {/* ── QUALITY GUARANTEE ────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="relative min-h-[460px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/lucinda-place-glen-eden/lucinda-place-livingroom.jpg"
              alt="Completed home renovation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" className="space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Quality Guarantee
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Every renovation project in Auckland comes with comprehensive Master Builders guarantees
              and full insurance coverage. Our team specialises in building for renovation, ensuring
              structural integrity while creating beautiful, functional spaces. From houses for
              renovation to modern upgrades, we maintain the highest standards throughout every project
              phase through our rigorous 287-point quality control system.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Beyond industry-standard warranties, we provide ongoing support and maintenance guidance
              to protect your investment. Our quality assurance process includes detailed documentation,
              regular inspections, and comprehensive final checks to ensure every aspect of your
              renovation meets our exacting standards. This meticulous attention to detail, combined
              with our Master Builders Association membership and full insurance coverage, gives you
              complete confidence in the longevity and quality of your renovation.
            </p>
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
              How We Put Your Home Renovations Plan to Action
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

      {/* ── FEATURED HOME RENOVATION GALLERY ─────────────────────── */}
      <FeaturedGallery
        heading="Featured Home Renovation"
        images={[
          { src: "/services/Media-Corner-Nook.webp", alt: "Cozy media corner" },
          { src: "/services/Library-Lounge-Area.webp", alt: "Library lounge area" },
          { src: "/services/Bedroom-Interior-Design.webp", alt: "Bedroom interior design" },
          { src: "/services/Bathroom-Vanity-Design.webp", alt: "Bathroom vanity design" },
          { src: "/services/eden-renovation-lounge.webp", alt: "living room renovation" },
          { src: "/services/construction-project-space.webp", alt: "Construction project space" },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
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
