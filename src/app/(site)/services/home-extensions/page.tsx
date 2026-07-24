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
  title: { absolute: "Home Extensions Auckland | Instant Online Estimate | Expand & Enhance Your Home With Confidence" },
  description:
    "Expert home extensions in Auckland, New Zealand. JRA Construction designs and builds quality extensions that add space, value, and comfort - tailored to your lifestyle and budget.",
  alternates: { canonical: "/services/home-extensions" },
};

/* All copy on this page is verbatim from the live site
   (report-audit/02-services.md · Home Extensions in Auckland). */

const painPoints = [
  "Are you struggling with a growing family but love your current neighbourhood too much to move?",
  "Does your home's layout no longer suit your lifestyle, leaving you wondering about house extension options?",
  "Are you seeking trusted home extension contractors in Auckland who can deliver quality work within budget?",
];

const introParas = [
  "As trusted Auckland home extension builders, JRA Construction plans, costs, and delivers house extensions for growing families who want more space without leaving the suburb they love.",
  "We combine design coordination, quantity surveying, council-consent support, and fixed-price construction management so your extension is practical, buildable, and aligned with your budget.",
  "Unlike many contractors, we provide end-to-end project management through our digital platform, from initial architectural designs and council consents through to final construction, giving you clear visibility and control throughout the renovation journey.",
  "With our team of Licensed Building Practitioners and dedication to transparent fixed-price contracts, we have helped Auckland families expand their homes without the stress of moving or hidden costs.",
];

const ourDifference = [
  "Fixed-Price Contracts",
  "287-Point Quality Checklist",
  "Licensed Building Practitioners",
  "Master Builders Guarantee",
  "Transparent Project Management",
];

const whatYouGet = [
  { icon: "👤", text: "Dedicated Project Manager" },
  { icon: "📡", text: "Real-Time Progress Updates" },
  { icon: "🎨", text: "Professional Design Consultation" },
  { icon: "🏛️", text: "Council Compliance Expertise" },
  { icon: "✅", text: "Quality Assurance & Warranty Coverage" },
];

const portalFeatures = [
  { icon: "📡", text: "Track real-time construction progress" },
  { icon: "📍", text: "View and approve project milestones" },
  { icon: "📁", text: "Access all project documentation and consents" },
  { icon: "💬", text: "Communicate directly with your project manager" },
  { icon: "🗓️", text: "Monitor timelines and scheduled works" },
  { icon: "✅", text: "Review and approve any variations" },
  { icon: "📸", text: "Access progress photos and updates" },
];

const processSteps = [
  { step: "01", title: "Initial Contact", body: "We start with a free, no-obligation chat to understand your goals and see if we're the right fit." },
  { step: "02", title: "Site Meeting", body: "We visit your home to discuss your project in detail. We'll bring guides and examples to help you visualize the possibilities." },
  { step: "03", title: "Working with Consultants", body: "We collaborate with your existing architect and structural engineer, or connect you with trusted consultants. Early involvement helps prevent costly design changes later." },
  { step: "04", title: "Estimate of Costs", body: "Before finalizing designs, we provide a cost estimate to ensure your plans align with your budget. This step helps avoid unexpected expenses down the line." },
  { step: "05", title: "Quotation", body: "Once designs are ready and submitted to the council, we compile a detailed, fixed-price quote. This includes subcontractor costs and a list of assumptions for full transparency." },
  { step: "06", title: "Contract Agreements", body: "With the design, pricing, and timeline agreed upon, we formalize everything in a clear contract. This ensures all parties are aligned before construction begins." },
  { step: "07", title: "Construction Phase", body: "Our licensed builders execute the project according to plan. You'll receive regular updates and have the opportunity to discuss any changes or decisions as needed." },
  { step: "08", title: "The Completion Phase", body: "Upon completion, we conduct a thorough walkthrough with you to ensure satisfaction. We provide all necessary documentation and remain available for any post-project support." },
];

const digitalFirst = [
  { icon: "🖥️", text: "24/7 Access to Project Portal" },
  { icon: "📡", text: "Live Updates and Progress Tracking" },
  { icon: "📁", text: "Document Management" },
  { icon: "💬", text: "Direct Communication Channel" },
];

const faqs = [
  { q: "How long does a typical house extension Auckland project take?", a: "Timeline varies depending on scope, but most extensions take 12-16 weeks from construction start to completion." },
  { q: "What council permits are needed for adding a bedroom to a house New Zealand?", a: "Most extensions require building consent. We handle all paperwork and ensure compliance with local regulations, obtaining building consent and any required resource consents." },
  { q: "How do you manage project costs?", a: "We provide fixed-price contracts and transparent change orders, with detailed cost breakdowns at every stage." },
  { q: "Can we live in our home during construction?", a: "Yes, most clients do. We implement strict safety protocols and minimise disruption to your daily routine." },
  { q: "What warranties do you offer?", a: "Our work comes with comprehensive guarantees through the Registered Master Builders Association, protecting your investment for up to 10 years." },
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

export default function HomeExtensionsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/home-extension-services.jpg"
          alt="JRA Construction home extensions Auckland"
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
            <span className="text-white/90">Home Extensions</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Home Extensions<br />in Auckland
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
        image="/services/3d-Home-Extension-Guide-1024x819.png"
        imageAlt="Home Extension Guide"
        bookTitle="The Ultimate Guide To Home Extension In Auckland"
      />

      {/* ── VIDEO: BUSINESS SHOWCASE ─────────────────────────────── */}
      <ServiceVideo
        videoId="NAaXgHLW51Q"
        title="JRA Construction | Business Showcase"
        eyebrow="See JRA In Action"
      />

      {/* ── WHY CHOOSE JRA: OUR DIFFERENCE ───────────────────────── */}
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
                Why Choose JRA Construction: Our Difference
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <ul className="space-y-4">
              {ourDifference.map((item, i) => (
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

      {/* ── WHAT YOU GET WITH EVERY PROJECT ──────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              What You Get with Every Project
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whatYouGet.map((item, i) => (
              <AnimateOnScroll key={item.text} variant="scale-in" delay={i * 70}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[#e8edf2] bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#293a57]/8">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-[15px] font-semibold leading-snug text-[#293a57]">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── VIDEO: 8-STEP CLIENT PROCESS ─────────────────────────── */}
      <ServiceVideo
        videoId="Fc3nnr7B4Hw"
        title="JRA's 8-Step Client Process - How it works"
        eyebrow="How We Work"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect image="/services/Te-Wiata-Place-Avondale-Project-13-1024x682.jpg" imageAlt="best home extensions auckland" />

      {/* ── WITHOUT THE STRESS OF MOVING ─────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              House Extensions in Auckland Without the Stress of Moving
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <AnimateOnScroll variant="fade-right" className="space-y-5">
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                Transform your living space without leaving the neighbourhood you love. We specialise in
                Auckland house extensions that blend with the existing home while improving layout,
                light, and resale value.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                From our Balmoral living and kitchen extension work to our Avondale bedroom rebuild, and
                projects across Mount Eden, Point Chevalier, Waterview, and Sandringham, we understand
                how to add space in established Auckland suburbs.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" delay={150}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
                <Image
                  src="/services/Te-Wiata-Place-Avondale-Project-09-1024x682.jpg"
                  alt="avondale project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <div className="mx-auto max-w-4xl rounded-2xl border border-[#e8edf2] bg-white p-8 shadow-[0_8px_32px_rgba(41,58,87,0.08)] sm:p-10">
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                From day one, you will have access to our client portal where you can:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {portalFeatures.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-[15px] text-[#2d4560]">
                    <span className="text-xl">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#4d6277]">
                Whether you are planning a simple bedroom extension, open-plan rear addition, or full
                house transformation, our digital-first process keeps everything visible from design
                through handover. If you are still researching options, start with our home extensions
                guide, then book a consultation when you want advice tailored to your home and budget.
              </p>
              <Link
                href="/estimate"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Free Online Estimate <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── VERSATILE EXTENSION OPTIONS ──────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Versatile Extension Options for Your Home
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} className="space-y-5">
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Home additions come in many forms, and we have the expertise to execute them all. Whether
              you&apos;re considering a second-storey addition to gain extra bedrooms or a ground-floor
              extension to enlarge your living area, we tailor the solution to your needs. In
              Auckland&apos;s urban environment, we&apos;ve designed creative rear extensions that add
              open-plan kitchen and dining spaces, as well as side extensions that make room for home
              offices, playrooms, or expanded garages. Each project is approached with an eye for
              seamless integration – matching the new roofing, cladding, and style to your existing
              structure so the addition looks and feels like a natural part of your home.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              We also advise on unique extension ideas to maximise your property&apos;s potential. For
              example, converting an underutilised attic into a livable loft or extending outwards to
              create an indoor-outdoor entertainment area with decking. Our experience includes
              navigating height-to-boundary considerations for second levels and ensuring foundations
              are reinforced for new loads. By exploring various house extension options with you – from
              minor alterations to full-scale additions – we help determine the best way to achieve more
              space and functionality. The result is a custom extension that enhances your lifestyle and
              adds significant value to your Auckland home, all carried out with the quality and
              professionalism you expect from JRA Construction.
            </p>
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

      {/* ── QUALITY GUARANTEE ────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-8">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Quality Guarantee
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              As Registered Master Builders, our work comes with comprehensive 10-year guarantees, full
              professional indemnity, and contract works insurance. This means your house extension
              Auckland project is protected against defects in materials and workmanship, giving you
              complete peace of mind about your investment.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Our membership with the Registered Master Builders Association also means we adhere to the
              highest industry standards and best practices in construction. Additionally, we maintain
              strict quality control through our 287-point checklist system, ensuring every aspect of
              your home addition meets our exacting standards before handover.
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
      <section id="process" className="scroll-mt-24 bg-[#f9fafb] py-16 sm:py-20">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Services</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              How We Put Your Home Extension Plan to Action
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-[#e8edf2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#293a57]/20 hover:shadow-lg hover:shadow-[#293a57]/8">
                  <span className="mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#293a57]/30">{s.step}</span>
                  <h3 className="mb-2 text-[18px] font-bold text-[#293a57]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROJECT MANAGEMENT EXCELLENCE ────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-10">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Project Management Excellence: Digital-First Approach
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {digitalFirst.map((item, i) => (
              <AnimateOnScroll key={item.text} variant="scale-in" delay={i * 70}>
                <div className="flex items-start gap-4 rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#293a57]/8">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-[15px] font-medium leading-snug text-[#293a57]">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" delay={100} className="text-center">
            <p className="mx-auto max-w-2xl text-[16px] leading-[1.7] text-[#4d6277]">
              Perfect for living room extensions, second-storey additions, master suite expansions, and
              full home additions across Auckland.
            </p>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── FEATURED HOME EXTENSION GALLERY ──────────────────────── */}
      <FeaturedGallery
        heading="Featured Home Extension/Renovation"
        images={[
          { src: "/services/Te-Wiata-Place-Avondale-Project-06.jpg", alt: "Avondale home extension exterior" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-09-1024x682.jpg", alt: "avondale project" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-08-1024x683.jpg", alt: "Auckland Home Extension" },
          { src: "/services/te-wiata-bedroom.webp", alt: "Te Wiata bedroom" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-15.jpg", alt: "Avondale extension interior" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-03.jpg", alt: "Avondale extension living area" },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
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
