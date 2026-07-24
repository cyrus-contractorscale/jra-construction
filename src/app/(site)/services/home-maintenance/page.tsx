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
  title: { absolute: "Home Maintenance in Auckland | Instant Online Estimate" },
  description:
    "Keep your home running smoothly with JRA Construction's home maintenance in Auckland services. Contact us today for a free maintenance quote.",
  alternates: { canonical: "/services/home-maintenance" },
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

const careItems = [
  "Detailed property inspections and digital condition reports",
  "Roof, spouting, and gutter maintenance and repair",
  "Interior and exterior painting, sealing, and coatings",
  "Plumbing system checks and minor leak remediation",
  "Electrical testing and tag inspections in accordance with AS/NZS 3760",
  "Door and window adjustment and hardware replacement",
  "Weatherproofing, insulation, and building envelope assessments",
];

const whyChooseItems = [
  "Licensed Building Practitioners (LBPs) and insured maintenance professionals",
  "Preventive maintenance and asset management systems",
  "Transparent pricing supported by digital condition reports",
  "24/7 emergency call-out services",
  "Adherence to Master Builders and Healthy Homes Standards",
];

const upkeepItems = [
  "Scheduled preventive maintenance visits",
  "Continuous condition monitoring and reporting",
  "Priority-based repair and replacement strategies",
  "Emergency response and make-safe services",
  "Seasonal readiness programmes for Auckland's climate",
];

const processSteps = [
  { step: "01", title: "Initial Property Assessment", body: "Comprehensive inspection using condition rating metrics." },
  { step: "02", title: "Customised Care Plan Development", body: "Tailored maintenance schedules and cost forecasting." },
  { step: "03", title: "Scheduled Maintenance Implementation", body: "Regular, traceable servicing." },
  { step: "04", title: "Condition Monitoring and Reporting", body: "Ongoing updates via digital maintenance portal." },
  { step: "05", title: "Preventive Action Recommendations", body: "Targeted upgrades for long-term resilience." },
  { step: "06", title: "Ongoing Property Support", body: "Continuous technical assistance and service coordination." },
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

const faqs = [
  { q: "How often should my home receive professional maintenance?", a: "Most homes benefit from quarterly maintenance cycles, though older or coastal properties may require more frequent inspection due to environmental exposure." },
  { q: "What does a property condition report include?", a: "A comprehensive inspection of roofing, plumbing, electrical, weatherproofing, and structural elements — documented in a digital condition report with prioritised recommendations." },
  { q: "Do you offer emergency maintenance services?", a: "Yes — we provide 24/7 emergency call-out services including make-safe repairs, leak remediation, and urgent weatherproofing." },
  { q: "Can maintenance records help with insurance or resale?", a: "Absolutely. Our digital asset registers give you a verifiable record of upkeep for insurance, warranty, and resale documentation purposes." },
  { q: "Are your maintenance professionals licensed and insured?", a: "All work is carried out by Licensed Building Practitioners (LBPs) and insured maintenance professionals, adhering to Master Builders and Healthy Homes Standards." },
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
    <details className="group rounded-2xl border border-[#eef2f6] bg-white transition-all duration-300 open:border-[#293a57] open:bg-[#293a57] open:shadow-lg open:shadow-[#293a57]/15">
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

export default function HomeMaintenancePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/home-maintenance-services.webp"
          alt="JRA Construction home maintenance Auckland"
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
            <span className="text-white/90">Home Maintenance</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Home Maintenance · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Home Maintenance<br />in Auckland
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Systematic inspections, preventive repairs, and scheduled upkeep programmes that protect your property&apos;s value, safety, and structural integrity.
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
                  "Noticing small issues around your home that could become major problems?",
                  "Want to protect your property value with regular professional upkeep?",
                  "Need reliable maintenance services to keep your home safe and functional?",
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
                Comprehensive Property Care Solutions
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Your home deserves ongoing care to maintain its value, safety, and structural integrity. Our comprehensive home maintenance Auckland services protect your investment through systematic inspections, preventive repairs, and scheduled upkeep programmes.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                From weatherproofing and electrical safety checks to plumbing maintenance and structural assessments, we ensure your property remains in optimal condition year-round, preventing costly emergency repairs and preserving your home&apos;s performance in accordance with NZ Building Code (NZBC) standards.
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

      {/* ── JRA ADVANTAGE ────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <p className="section-tab mx-auto w-fit mb-4">The JRA Advantage</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Your Home, Your Way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              From quarterly inspections to urgent interventions, our maintenance specialists provide consistent, professional attention to every detail.
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
                Setting the Standard in Property Care
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Professional house maintenance and asset management go beyond simple repairs to encompass planned preventive maintenance that preserves your property&apos;s functionality and long-term performance. Our qualified and licensed technicians conduct comprehensive condition assessments of all key systems, identifying potential issues before they develop into expensive or unsafe problems.
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
      <WaysToConnect
        image="/services/Media-Corner-Nook-1024x683.webp"
        imageAlt="Cozy Media Corner"
      />

      {/* ── CARE PROGRAMME + WHY CHOOSE ──────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="section-tab w-fit">Full-Spectrum Care</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#293a57] sm:text-[38px]">
                Your Property Care Programme
              </h2>
              <p className="text-[16px] leading-[1.65] text-[#4d6277]">
                Our structured property maintenance programme covers every major building element, customised to your property&apos;s age, materials, and occupancy type:
              </p>
              <ul className="space-y-3">
                {careItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Free Online Estimate <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5">
              <p className="section-tab w-fit">Trusted Professionals</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#293a57] sm:text-[38px]">
                Why Choose JRA&apos;s Maintenance Team
              </h2>
              <ul className="space-y-3">
                {whyChooseItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="pt-4 text-[20px] font-extrabold text-[#293a57]">Professional Property Upkeep</h3>
              <ul className="space-y-3">
                {upkeepItems.map((item) => (
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

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">How It Works</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              How We Put Your Home Maintenance to Action
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              A systematic 6-phase approach keeping your property in optimal condition year-round.
            </p>
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

      {/* ── EXCELLENCE + COMPLIANCE ──────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="section-tab w-fit">Building Science Expertise</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                Excellence in Property Preservation
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Effective property care requires knowledge of building science and the interdependency of structural, mechanical, and environmental systems. Our experienced technicians understand how materials respond to moisture, UV exposure, and temperature variation under NZS 3604 (Timber-Framed Buildings) guidelines.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Prevention remains more cost-effective than restoration — our approach focuses on early detection and remediation to minimise future repair costs and ensure long-term occupant comfort.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5 rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-7 sm:p-9">
              <h3 className="text-[22px] font-extrabold leading-tight text-[#293a57]">
                Building Performance &amp; Compliance Assurance
              </h3>
              <p className="text-[15px] leading-[1.65] text-[#4d6277]">
                Property maintenance is managed through a building performance assurance framework that aligns with the NZ Building Code, Healthy Homes, and insurance compliance requirements. Our condition reporting system tracks all maintenance activities through digital asset registers, enabling homeowners to maintain a verifiable record of upkeep for insurance, warranty, and resale documentation purposes.
              </p>
              <p className="text-[15px] leading-[1.65] text-[#4d6277]">
                Each inspection covers weathertightness, safety systems, and energy efficiency components, ensuring alignment with NZS 4299 and MBIE guidance on residential property maintenance.
              </p>
              <Link
                href="/why-choose-us"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#293a57] px-6 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-[#293a57] hover:text-white"
              >
                Read More <span aria-hidden="true">→</span>
              </Link>
            </div>
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

      {/* ── FEATURED HOME MAINTENANCE GALLERY ────────────────────── */}
      <FeaturedGallery
        heading="Featured Home Maintenance"
        images={[
          { src: "/services/leonards-bedroom-renovation-1024x700.jpg", alt: "Elegant master bedroom interior" },
          { src: "/services/eden-renovation-lounge-1024x683.webp", alt: "Renovated lounge interior" },
          { src: "/services/mount-eden-woodwork-1024x682.webp", alt: "Mount Eden woodwork detail" },
          { src: "/services/saint-leonards-interior-1024x683.webp", alt: "Saint Leonards interior" },
          { src: "/services/Rustic-Faucets-819x1024.webp", alt: "Rustic bathroom faucets" },
          { src: "/services/Kitchen-Island-Interior-1024x683.webp", alt: "Kitchen island interior" },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
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
      <section className="bg-white py-10">
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
