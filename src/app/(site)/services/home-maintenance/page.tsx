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
  title: { absolute: "Home Maintenance in Auckland | Instant Online Estimate" },
  description:
    "Keep your home running smoothly with JRA Construction's home maintenance in Auckland services. Contact us today for a free maintenance quote.",
  alternates: { canonical: "/services/home-maintenance" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/home-maintenance/). */

const painPoints = [
  "Noticing small issues around your home that could become major problems?",
  "Want to protect your property value with regular professional upkeep?",
  "Need reliable maintenance services to keep your home safe and functional?",
];

const introParas = [
  "Your home deserves ongoing care to maintain its value, safety, and structural integrity. Our comprehensive home maintenance Auckland services protect your investment through systematic inspections, preventive repairs, and scheduled upkeep programmes. From weatherproofing and electrical safety checks to plumbing maintenance and structural assessments, we ensure your property remains in optimal condition year-round, preventing costly emergency repairs and preserving your home’s performance in accordance with NZ Building Code (NZBC) standards.",
];

const advantageItems = [
  { text: "Real-time construction updates" },
  { text: "Virtual walkthroughs of progress" },
  { text: "Direct communication with your project team" },
  { text: "Digital documentation access" },
  { text: "Milestone tracking and notifications" },
  { text: "Material selections and approvals" },
  { text: "Photo and video progress updates" },
];

const standardItems = [
  "Fixed-price certainty",
  "287-point quality verification system",
  "Master Builders certification",
  "Sustainable building practices",
  "Architectural partnerships",
];

const careParas = [
  "Professional house maintenance and asset management go beyond simple repairs to encompass planned preventive maintenance that preserves your property’s functionality and long-term performance. Our qualified and licensed technicians conduct comprehensive condition assessments of all key systems, identifying potential issues before they develop into expensive or unsafe problems. This proactive approach reduces reactive maintenance costs while ensuring comfort, safety, and compliance.",
  "Our structured property maintenance programme covers every major building element — from roof inspections, gutter cleaning, and drainage checks to interior moisture control and external weatherproofing. Each plan is customised based on property age, materials, and occupancy type, ensuring maintenance schedules match your specific home profile and budget.",
  "Operating throughout Auckland, our property maintenance specialists apply deep knowledge of local weather exposure zones, coastal corrosion factors, and subsoil conditions. This understanding ensures our recommendations and repair methods address the unique environmental stresses affecting Auckland homes.",
];

const programmeItems = [
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
  "Seasonal readiness programmes for Auckland’s climate",
];

const preservationParas = [
  "Effective property care requires knowledge of building science and the interdependency of structural, mechanical, and environmental systems. Our experienced technicians understand how materials respond to moisture, UV exposure, and temperature variation under NZS 3604 (Timber-Framed Buildings) guidelines.",
  "Each maintenance visit includes multi-point system checks, ensuring that even minor deterioration or component wear is addressed early. Prevention remains more cost-effective than restoration — our approach focuses on early detection and remediation to minimise future repair costs and ensure long-term occupant comfort.",
];

const complianceParas = [
  "At JRA Construction, property maintenance is managed through a building performance assurance framework that aligns with the NZ Building Code, Healthy Homes, and insurance compliance requirements. We integrate asset lifecycle planning, maintenance scheduling, and compliance verification to ensure your home not only looks its best but also meets regulatory obligations.",
  "Our condition reporting system tracks all maintenance activities through digital asset registers, enabling homeowners to maintain a verifiable record of upkeep for insurance, warranty, and resale documentation purposes. Each inspection covers weathertightness, safety systems, and energy efficiency components, ensuring alignment with NZS 4299 and MBIE guidance on residential property maintenance.",
  "This systematic, compliance-driven approach sets JRA apart from general maintenance providers — offering peace of mind that your property’s performance, safety, and documentation are maintained to professional standards.",
];

const processSteps = [
  { step: "01", title: "Initial Property Assessment", body: "Comprehensive inspection using condition rating metrics" },
  { step: "02", title: "Customised Care Plan Development", body: "Tailored maintenance schedules and cost forecasting" },
  { step: "03", title: "Scheduled Maintenance Implementation", body: "Regular, traceable servicing" },
  { step: "04", title: "Condition Monitoring and Reporting", body: "Ongoing updates via digital maintenance portal" },
  { step: "05", title: "Preventive Action Recommendations", body: "Targeted upgrades for long-term resilience" },
  { step: "06", title: "Ongoing Property Support", body: "Continuous technical assistance and service coordination" },
];

const faqs = [
  { q: "How often should my home receive professional maintenance?", a: "Most homes benefit from quarterly maintenance cycles, though older or coastal properties may require more frequent inspection due to environmental exposure." },
  { q: "What’s included in your maintenance assessments?", a: "Comprehensive inspection of structural, mechanical, electrical, and envelope systems, supported by digital reporting and recommendations." },
  { q: "Do you handle emergency maintenance issues?", a: "Yes — we provide 24-hour emergency response for urgent matters that threaten property integrity or occupant safety." },
  { q: "Can you assist with insurance maintenance claims?", a: "Absolutely. We supply condition reports, photo records, and invoices to support insurance claim documentation." },
  { q: "How do you prioritise maintenance tasks?", a: "Tasks are categorised by safety, functionality, and aesthetic importance, using a priority-level rating system within our maintenance software." },
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
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Home Maintenance<br />in Auckland
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
        image="/services/JRA-Custom-Home-ebook.png"
        imageAlt="Custom Home Brochure"
        bookTitle="Build Your Custom Home"
      />

      {/* ── JRA STORY + PROCESS VIDEOS ───────────────────────────── */}
      <ServiceVideoPair />

      {/* ── THE JRA ADVANTAGE ────────────────────────────────────── */}
      <ServiceFeatureStory
        heading="The JRA Advantage: Your Home, Your Way"
        items={advantageItems.map((item) => item.text)}
        image="/services/Media-Corner-Nook-1024x683.webp"
        imageAlt="Cozy Media Corner"
      />

      {/* ── SETTING THE STANDARD ─────────────────────────────────── */}
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

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915"
        image="/services/Media-Corner-Nook-1024x683.webp"
        imageAlt="Cozy Media Corner"
      />

      {/* ── COMPREHENSIVE PROPERTY CARE SOLUTIONS ────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
                Comprehensive Property Care Solutions
              </h2>
              {careParas.map((para) => (
                <p key={para.slice(0, 40)} className="text-[16px] leading-[1.7] text-[#4d6277]">
                  {para}
                </p>
              ))}
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Free Online Estimate <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
              <Image
                src="/services/leonards-bedroom-renovation-1024x700.jpg"
                alt="Elegant master bedroom interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROPERTY CARE PROGRAMME + WHY CHOOSE ─────────────────── */}
      <section className="bg-white py-14 sm:py-18">
        <Container className="space-y-14">
          <ServiceStoryChecklist
            image="/services/leonards-bedroom-renovation-1024x700.jpg"
            imageAlt="Elegant master bedroom interior"
            intro={
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[38px]">
                Your Property Care Programme
              </h2>
            }
            items={programmeItems}
          />

          <AnimateOnScroll variant="fade-up">
            <div className="grid gap-8 border-l-4 border-emerald-400 bg-[#f4f6f8] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
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
            </div>
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

      {/* ── PROFESSIONAL PROPERTY UPKEEP ─────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-6">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
              Professional Property Upkeep
            </h2>
            <ul className="space-y-3">
              {upkeepItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              From quarterly inspections to urgent interventions, our maintenance specialists provide
              consistent, professional attention to every detail. We maintain detailed maintenance
              logs, provide photo-documented service reports, and recommend targeted upgrades that
              extend the lifespan of your property&rsquo;s key components.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
              <Image src="/services/Copy-of-2A3A2941-scaled.jpg" alt="JRA Construction project exterior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── EXCELLENCE IN PROPERTY PRESERVATION ──────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
              <Image src="/services/Patio-Outdoor-Living.webp" alt="Patio outdoor living area" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Excellence in Property Preservation
            </h2>
            {preservationParas.map((para) => (
              <p key={para.slice(0, 40)} className="text-[17px] leading-[1.7] text-[#4d6277]">
                {para}
              </p>
            ))}
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── BUILDING PERFORMANCE & COMPLIANCE ASSURANCE ──────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Building Performance &amp; Compliance Assurance
            </h2>
            {complianceParas.map((para) => (
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
          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-[28px]">
              <Image src="/services/Seacombe-11-scaled.jpg" alt="Seacombe project" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-[#f9fafb] py-14 sm:py-16">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Services</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.04] tracking-tight text-[#293a57] sm:text-[52px]">
              How We Put Your Home Maintenance to Action
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-x-10 gap-y-0 lg:grid-cols-2">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className="group grid h-full grid-cols-[72px_1fr] border-t border-[#293a57]/15 py-7">
                  <span className="text-[28px] font-black leading-none text-emerald-500">{s.step}</span>
                  <div className="border-l-2 border-[#293a57]/15 pl-6 transition group-hover:border-emerald-400">
                    <h3 className="mb-2 text-[18px] font-bold text-[#293a57]">{s.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURED HOME MAINTENANCE GALLERY ────────────────────── */}
      <FeaturedGallery
        heading="Featured Home Maintenance"
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
