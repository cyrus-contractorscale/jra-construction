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
} from "@/components/services/ServiceShared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Kitchen Renovations in Auckland | Instant Online Estimate" },
  description:
    "Kitchen renovations in Auckland specialist JRA Construction delivers quality, reliability, and innovation with superior craftsmanship. Contact us.",
  alternates: { canonical: "/services/kitchen-renovations" },
};

const advantages = [
  { icon: "🎨", text: "Personalised kitchen design consultation" },
  { icon: "📐", text: "Custom new-style kitchen layout planning" },
  { icon: "🪨", text: "Premium material and finish selection" },
  { icon: "🚪", text: "Modern kitchen cabinetry customisation" },
  { icon: "🍳", text: "Smart appliance coordination" },
  { icon: "🔥", text: "Gas fitting and ventilation planning" },
  { icon: "💡", text: "Contemporary lighting integration" },
  { icon: "✅", text: "Expert kitchen renovation quality checks" },
];

const standards = [
  "Fixed-price contracts",
  "287-point quality system",
  "Licensed practitioners",
  "Master Builders guarantee",
  "Waterproofing expertise",
];

const processSteps = [
  { step: "01", title: "Initial Contact", body: "We start with a free, no-obligation chat to understand your goals and see if we're the right fit." },
  { step: "02", title: "Site Meeting", body: "We visit your home to discuss your project in detail. We'll bring guides and examples to help you visualize the possibilities." },
  { step: "03", title: "Working with Consultants", body: "We collaborate with your existing architect or connect you with trusted consultants. Early involvement helps prevent costly design changes later." },
  { step: "04", title: "Estimate of Costs", body: "Before finalizing designs, we provide a cost estimate to ensure your plans align with your budget. This step helps avoid unexpected expenses." },
  { step: "05", title: "Quotation", body: "Once designs are ready and submitted to the council, we compile a detailed, fixed-price quote including all subcontractor costs and assumptions." },
  { step: "06", title: "Contract Agreements", body: "With the design, pricing, and timeline agreed upon, we formalize everything in a clear contract before construction begins." },
  { step: "07", title: "Construction Phase", body: "Our licensed builders execute the project according to plan. You'll receive regular updates and can discuss any changes or decisions as needed." },
  { step: "08", title: "The Completion Phase", body: "We conduct a thorough walkthrough with you to ensure satisfaction and provide all necessary documentation and ongoing support." },
];

const qualityPoints = [
  { icon: "👤", title: "Dedicated Project Consultant", body: "A single point of contact manages your kitchen renovation from concept to completion." },
  { icon: "🚪", title: "Bespoke Storage Solutions", body: "Custom cabinetry and pantry designs tailored to your cooking and entertaining habits." },
  { icon: "⚡", title: "Licensed Electricians", body: "All electrical work completed by certified professionals to the highest safety standards." },
  { icon: "🔧", title: "Certified Plumbers", body: "Expert plumbers handle all water connections, gas fittings, and drainage requirements." },
  { icon: "🛠️", title: "Expert Installers", body: "Specialist installers for cabinetry, benchtops, and splashbacks deliver a flawless finish." },
];

const faqs = [
  { q: "How long does a typical kitchen renovation take?", a: "Most projects take 4–6 weeks, depending on complexity and material selections." },
  { q: "What's involved in the design process?", a: "We combine your ideas with our expertise to create detailed plans for your approval, helping you visualise the final result before construction starts." },
  { q: "How do you handle appliance integration?", a: "We coordinate with suppliers and ensure all appliances fit perfectly within your new layout, including gas fittings and ventilation." },
  { q: "Can you help with material selection?", a: "Our design team guides you through choosing materials, benchtops, cabinetry, splashbacks, and lighting that match your style and budget." },
  { q: "What about temporary kitchen facilities?", a: "We help plan alternative cooking arrangements during the renovation to minimise disruption to your daily life." },
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

export default function KitchenRenovationsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/kitchen-services.webp"
          alt="JRA Construction kitchen renovations Auckland"
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
            <span className="text-white/90">Kitchen Renovations</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Kitchens · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Kitchen Renovations<br />in Auckland
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Transforming ordinary kitchens into extraordinary living spaces — bespoke design, masterful craftsmanship.
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#293a57]/50">Sound Familiar?</p>
              <ul className="space-y-4">
                {[
                  "Is your kitchen layout hampering your family's daily routines?",
                  "Ready to upgrade to a space that reflects your cooking and entertaining style?",
                  "Searching for experienced kitchen renovation Auckland specialists who understand your vision?",
                ].map((point) => (
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
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                Kitchen Renovations Are Our Specialty
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Kitchen renovations in Auckland is our specialty. Creating exceptional spaces takes more than just construction expertise — it demands innovative kitchen design and meticulous planning. Our passion for modern kitchen designs drives every project, transforming ordinary kitchens into extraordinary living spaces.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                From heritage villas to contemporary apartments, we understand how to blend new-style kitchen elements with existing architecture, incorporating features like kitchen islands and open-plan layouts that suit modern living — creating spaces that feel both fresh and timeless.
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

      {/* ── VIDEO: BUSINESS SHOWCASE ─────────────────────────────── */}
      <ServiceVideo
        videoId="NAaXgHLW51Q"
        title="JRA Construction | Business Showcase"
        eyebrow="See JRA In Action"
      />

      {/* ── JRA ADVANTAGE ────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <p className="section-tab mx-auto w-fit mb-4">The JRA Advantage</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Your Kitchen Transformation Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              Our proven approach to modern kitchen designs ensures seamless project delivery every time.
            </p>
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

      {/* ── VIDEO: 8-STEP CLIENT PROCESS ─────────────────────────── */}
      <ServiceVideo
        videoId="Fc3nnr7B4Hw"
        title="JRA's 8-Step Client Process - How it works"
        eyebrow="How We Work"
        background="gray"
      />

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
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Our Commitment</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px]">
                Why Choose JRA for Your Kitchen Makeover
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Trust and craftsmanship define every Auckland kitchen renovation project we undertake. As Master Builders, our work is backed by industry-leading guarantees, comprehensive insurance, and a reputation for excellence. Each renovation undergoes our rigorous quality control procedures, ensuring every detail meets the highest standards.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-zinc-100"
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

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect image="/services/kitchen-interior-1024x683.webp" imageAlt="Stylish kitchen setup" />

      {/* ── CRAFTING YOUR DREAM KITCHEN ──────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Our Portfolio</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Crafting Your Dream Auckland Kitchen
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <AnimateOnScroll variant="fade-right" className="space-y-5">
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                When it comes to Auckland kitchen makeovers, our portfolio showcases transformative
                solutions across diverse homes and styles. From heritage villas to contemporary
                apartments, we understand how to blend new-style kitchen elements with existing
                architecture, incorporating features like kitchen islands and open-plan layouts that
                suit modern living, creating spaces that feel both fresh and timeless.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                Our expertise in kitchen renovations spans compact galley layouts to expansive
                entertaining spaces. Each project begins with understanding your unique kitchen concepts
                and lifestyle needs, ensuring every element&mdash;from cabinetry to lighting&mdash;enhances
                both functionality and aesthetic appeal.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                By combining innovative modern kitchen solutions with practical layouts, we create
                spaces that work as beautifully as they look. Whether you&apos;re planning a complete
                transformation or targeted updates, our team brings creative vision and technical
                expertise to every project.
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
                  src="/services/Kitchen-Island-Interior-1024x683.webp"
                  alt="Elegant kitchen design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">How It Works</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              How We Put Your Kitchen Renovation Plan to Action
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Our proven 8-step process ensures your kitchen renovation is delivered beautifully and on time.
            </p>
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

      {/* ── MODERN DESIGN TRENDS ─────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="section-tab w-fit">Latest Trends</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                Modern Kitchen Design Trends
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Renovating your kitchen with JRA means gaining insight into the latest design trends and innovations. Consider sleek, handle-less cabinetry for a clean look, expansive stone or engineered stone benchtops, and multipurpose kitchen islands that serve as cooking areas, dining bars, and storage all in one.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Homeowners in Auckland are also embracing smart kitchen technology — from Wi-Fi-enabled ovens to smart fridges — and we&apos;re experienced in integrating these seamlessly into your new layout. Layout and lighting play a huge role in a kitchen&apos;s success, with open-plan configurations creating social hubs ideal for entertaining.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {qualityPoints.map((pt, i) => (
                <AnimateOnScroll key={pt.title} variant="scale-in" delay={i * 80}>
                  <div className="flex flex-col gap-3 rounded-2xl border border-[#e8edf2] bg-white p-5 shadow-sm">
                    <span className="text-3xl">{pt.icon}</span>
                    <h3 className="text-[15px] font-bold text-[#293a57]">{pt.title}</h3>
                    <p className="text-[14px] leading-relaxed text-[#5f7286]">{pt.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── QUALITY ASSURANCE ────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-8">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Our Promise</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Quality Assurance
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Trust and craftsmanship define every Auckland kitchen renovation project we undertake. As
              Master Builders, our work is backed by industry-leading guarantees, comprehensive
              insurance, and a reputation for excellence. Each renovation undergoes our rigorous quality
              control procedures, ensuring every detail&mdash;from cabinet installation to electrical
              fittings&mdash;meets the highest standards of safety and finish.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              We stand behind our work long after project completion. Our dedicated aftercare programme
              includes maintenance schedules, care guides for your new fixtures and surfaces, and
              priority support for any questions you may have. This commitment to lasting quality,
              combined with our thorough documentation and inspection protocols, ensures your kitchen
              will maintain its beauty and functionality for years to come.
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

      {/* ── FEATURED KITCHEN RENOVATION GALLERY ──────────────────── */}
      <FeaturedGallery
        heading="Featured Kitchen Renovation"
        images={[
          { src: "/services/kitchen-interior-1024x683.webp", alt: "Stylish kitchen setup" },
          { src: "/services/Kitchen-Island-Interior-1024x683.webp", alt: "Elegant kitchen design" },
          { src: "/services/saint-leonards-interior-1024x683.webp", alt: "Elegant dining area" },
          { src: "/services/Media-Corner-Nook-1024x683.webp", alt: "Cozy media corner" },
          { src: "/services/mount-eden-woodwork-1024x682.webp", alt: "Wooden paneling detail" },
          { src: "/services/Living-Room-Renovations-1024x683.webp", alt: "Modern open-plan living" },
        ]}
      />

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
      <PlanningNextSteps />

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
