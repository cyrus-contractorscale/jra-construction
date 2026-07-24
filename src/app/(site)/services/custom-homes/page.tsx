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
  title: { absolute: "Custom Homes Auckland | Instant Online Estimate" },
  description:
    "Explore custom homes Auckland with JRA Construction. Learn about our expert builders and quality assurance. Start your dream home today now.",
  alternates: { canonical: "/services/custom-homes" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/custom-homes/). */

const painPoints = [
  "Dreaming of a custom-designed home but overwhelmed by the building process?",
  "Concerned about budget overruns and construction delays?",
  "Want to work with builders who understand your unique vision?",
];

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

const portalAccess = [
  "Daily site progress updates and photo documentation",
  "Material selection approvals and tracking",
  "Building consent status and compliance documents",
  "Direct messaging with your dedicated build team",
  "Construction schedule and milestone tracking",
  "Budget management and cost breakdowns",
  "Virtual site walk-throughs and progress reports",
];

const excellenceItems = [
  { icon: "👤", text: "Personal project consultant" },
  { icon: "📅", text: "Detailed timeline planning" },
  { icon: "🏛️", text: "Council liaison expertise" },
  { icon: "🔩", text: "Material procurement specialists" },
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
  { q: "What's the typical timeframe for a new build?", a: "Most projects take 8-12 months from consent to completion, depending on complexity." },
  { q: "How do you ensure budget accuracy?", a: "We provide detailed cost breakdowns and fixed-price contracts with transparent variation processes." },
  { q: "What sustainable options do you offer?", a: "We incorporate energy-efficient design, sustainable materials, and future-proof technologies." },
  { q: "How do you handle council consents?", a: "Our team manages the entire consent process, including documentation and compliance requirements." },
  { q: "What support do you provide post-completion?", a: "We offer comprehensive after-care service and maintain contact throughout your warranty period." },
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

export default function CustomHomesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
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
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white/90">Custom Homes</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Custom Homes<br />in Auckland
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
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Creating exceptional new build homes in Auckland requires more than just construction
                expertise – it demands vision, precision, and unwavering dedication to quality. At JRA
                Construction, we deliver all three. Our comprehensive project management approach ensures
                complete transparency throughout your building journey, from securing Auckland Council
                building consents to final sign-off.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                With our team of Licensed Building Practitioners and partnerships with leading
                architects, we’ve established ourselves as trusted new builds Auckland specialists. Our
                fixed-price contracts, proven systems, and dedicated client support ensure your building
                experience is seamless from foundation to final handover.
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
              The JRA Advantage
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
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

      {/* ── VIDEO: 8-STEP CLIENT PROCESS ─────────────────────────── */}
      <ServiceVideo
        videoId="Fc3nnr7B4Hw"
        title="JRA's 8-Step Client Process - How it works"
        eyebrow="How We Work"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915" image="/services/Cabin-Facade-Wooded-683x1024.webp" imageAlt="Wooded Cabin Facade" />

      {/* ── BRINGING YOUR DREAM HOME TO LIFE ─────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Bringing Your Dream Home to Life
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <AnimateOnScroll variant="fade-right" className="space-y-5">
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                Our portfolio of new build developments Auckland showcases the depth of our expertise and
                commitment to excellence, incorporating sustainable, energy-efficient materials and
                innovative technologies, as demonstrated in our{" "}
                <Link href="/project/tiri-road-whangaparaoa" className="font-semibold text-[#293a57] underline decoration-[#293a57]/30 underline-offset-2 hover:decoration-[#293a57]">
                  Whangaparāoa build
                </Link>
                . From our Regional Silver Award-winning project in Whangaparāoa to our architecturally
                designed dual residences in Queensway, each home demonstrates our ability to bring unique
                visions to life.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                Working alongside renowned architects like Alignworks and ICR Studio Architectural
                Design, we create new homes Auckland that harmoniously blend sophisticated design with
                practical living. Our recent Tiri Road project exemplifies this approach, where
                meticulous attention to detail resulted in an exquisite residence that maximises natural
                light and seamlessly connects indoor and outdoor spaces.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                Every new build houses Auckland project benefits from our comprehensive approach to
                construction. Whether we’re incorporating sustainable materials and innovative
                technologies, as demonstrated in our Whangaparāoa build, or creating multiple
                architecturally designed residences like our Queensway development, we ensure every
                aspect meets our exacting standards.
              </p>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Free Online Estimate <span aria-hidden="true">→</span>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" delay={150}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
                <Image
                  src="/services/Neighborhood-Development-1024x682.webp"
                  alt="Suburban Construction View"
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
                Throughout your new build journey, our advanced client communication system keeps you
                informed and involved. From groundwork to final touches, you’ll have instant access to:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {portalAccess.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#4d6277]">
                Whether you’re creating a compact urban dwelling or an expansive family residence, our
                transparent approach ensures you’re always in control of your building journey. From
                foundation to final handover, every detail of your new home’s progress is documented and
                accessible, eliminating guesswork and providing peace of mind throughout the
                construction process.
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

      {/* ── NAVIGATING COUNCIL CONSENTS & COMPLIANCE ─────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Navigating Council Consents &amp; Compliance
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} className="space-y-5">
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Navigating the regulatory landscape is a critical part of any new build project. We
              leverage our in-depth knowledge of <strong>Auckland Council</strong> requirements and the{" "}
              <strong>New Zealand Building Code</strong> to streamline the consent process for your new
              home. From preparing documentation for resource and building consents to coordinating
              council inspections, our team handles it all. This means your project stays on track with
              all permits in place and no compliance surprises.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Our expertise as Licensed Building Practitioners and <strong>Registered Master
              Builders</strong> includes liaising with council officials and obtaining the Code
              Compliance Certificate (CCC) at project completion. We ensure every aspect of your new
              build meets or exceeds local building standards – from structural integrity and insulation
              values to safety and accessibility codes. With JRA managing consents and compliance, you
              can be confident your new home is fully approved and built to last in Auckland’s
              regulatory environment.
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

      {/* ── OUR QUALITY PROMISE ──────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-8">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Our Quality Promise
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Every new home in Auckland comes with comprehensive Master Builders guarantees and is
              delivered with a Code Compliance Certificate (CCC) from the council. This includes
              protection against structural defects for 10 years, giving you absolute confidence in your
              investment. Our membership in industry-leading associations ensures we maintain the highest
              construction standards, while our extensive quality control system verifies every aspect of
              your build.
            </p>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── BUILDING EXCELLENCE GUARANTEED ───────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="space-y-10">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Building Excellence Guaranteed
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {excellenceItems.map((item, i) => (
              <AnimateOnScroll key={item.text} variant="scale-in" delay={i * 70}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[#e8edf2] bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#293a57]/8">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-[15px] font-semibold leading-snug text-[#293a57]">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" className="text-center">
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
      <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Services</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              How We Put Your Custom Home to Action
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── FEATURED CUSTOM HOME GALLERY ─────────────────────────── */}
      <FeaturedGallery
        heading="Featured Custom Home"
        images={[
          { src: "/services/Copy-of-2A3A2941-scaled.jpg", alt: "Custom home exterior" },
          { src: "/services/Copy-of-2A3A2794-scaled.jpg", alt: "Custom home outdoor space" },
          { src: "/services/Copy-of-2A3A2787-scaled.jpg", alt: "Custom home living area" },
          { src: "/services/Seacombe-11-scaled.jpg", alt: "Seacombe custom build" },
          { src: "/services/Patio-Outdoor-Living.webp", alt: "Patio outdoor living" },
          { src: "/services/DSC00888-HDR-1-sharpen-scaled.jpg", alt: "Architecturally designed residence" },
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
