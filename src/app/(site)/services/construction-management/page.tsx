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
  title: { absolute: "Construction Management Auckland | Instant Online Estimate" },
  description:
    "Elevate your project with top-tier construction management Auckland from JRA Construction. Connect today to discover our expertise.",
  alternates: { canonical: "/services/construction-management" },
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

const experienceItems = [
  "Comprehensive project planning and scheduling using Microsoft Project or Procore",
  "Trade selection and supervision through prequalification and scope validation",
  "Material verification via supplier quality documentation",
  "On-site progress monitoring using daily site logs and H&S checklists",
  "Budget control through cost-to-complete forecasting",
  "Coordination with local councils for building consent milestones",
  "Quality assessment via ISO-aligned verification protocols",
];

const whyChooseItems = [
  "A certified project manager (PMI or NZIOB accredited)",
  "Real-time tracking via cloud-based project management software",
  "Fixed-price contract assurance with variation control mechanisms",
  "A 287-point QA/QC inspection framework",
  "Full Master Builders certification and Licensed Building Practitioner (LBP) oversight",
];

const processSteps = [
  { step: "01", title: "Pre-Construction Planning", body: "Developing the project execution plan (PEP) and scope of works (SOW)." },
  { step: "02", title: "Design Coordination", body: "Managing architectural and structural coordination meetings (DCMs)." },
  { step: "03", title: "Consent Management", body: "Handling Resource and Building Consent documentation and CCC compliance." },
  { step: "04", title: "Construction Oversight", body: "Implementing site supervision protocols and quality assurance hold points." },
  { step: "05", title: "Quality Verification", body: "Conducting final sign-off inspections and as-built documentation reviews." },
  { step: "06", title: "Project Completion", body: "Delivering certified outcomes with a defects liability period." },
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
  { q: "What does a construction manager actually do on my project?", a: "Your construction manager coordinates trades, suppliers, consultants, and council inspections — acting as your single point of accountability from pre-construction planning through to final code compliance." },
  { q: "How do you keep projects on schedule?", a: "We use critical path scheduling, cloud-based project management software, and daily site logs so delays are identified early and mitigated before they impact your completion date." },
  { q: "How is budget control managed during construction?", a: "Through cost-to-complete forecasting, formal variation control mechanisms, and fixed-price contract assurance — you always know where your budget stands." },
  { q: "Do you handle council consents and compliance?", a: "Yes — we manage Resource and Building Consent documentation, coordinate council inspections, and ensure full CCC compliance at project completion." },
  { q: "What quality assurance do you provide?", a: "Every project runs through our 287-point QA/QC inspection framework under Licensed Building Practitioner oversight, with full Master Builders certification." },
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

export default function ConstructionManagementPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/construction-management-services.webp"
          alt="JRA Construction construction management Auckland"
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
            <span className="text-white/90">Construction Management</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Construction Management · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Construction Management<br />in Auckland
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              End-to-end project administration that prevents delays, cost overruns, and quality issues — from concept design to final code compliance.
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
                  "Concerned about project delays and budget blowouts on your build?",
                  "Need a dedicated professional to coordinate all aspects of your construction?",
                  "Want peace of mind knowing every detail is managed by experienced experts?",
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
                Streamlined Project Coordination
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Building a home or renovating in Auckland demands precise coordination, reliable communication, and technical expertise. At JRA Construction, we provide comprehensive construction project administration, managing every phase of your build to prevent delays, cost overruns, and quality issues.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Our end-to-end construction management framework ensures seamless execution — from concept design development to the final code compliance inspection — so you can enjoy a stress-free experience and a finished result that meets NZ Building Code standards.
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
              Your dedicated project manager becomes your single point of accountability, overseeing procurement workflows, council compliance milestones, and progress tracking.
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
                Setting the Standard in New Build Developments Auckland
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Professional construction project management transforms complex builds into organised, goal-driven operations. Our team coordinates architectural consultants, structural engineers, subcontractors, and suppliers while maintaining site safety and quality assurance protocols.
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
        image="/services/construction-project-space.webp"
        imageAlt="Modern home addition"
      />

      {/* ── EXPERIENCE + WHY CHOOSE ──────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="section-tab w-fit">Structured Delivery</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#293a57] sm:text-[38px]">
                Your Construction Management Experience
              </h2>
              <p className="text-[16px] leading-[1.65] text-[#4d6277]">
                Our process follows a structured project delivery methodology that ensures transparency and precision at every stage:
              </p>
              <ul className="space-y-3">
                {experienceItems.map((item) => (
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
              <p className="section-tab w-fit">Governance & Transparency</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#293a57] sm:text-[38px]">
                Why Choose Our Construction Management Group
              </h2>
              <p className="text-[16px] leading-[1.65] text-[#4d6277]">
                Clients benefit from a management process built on governance, transparency, and procedural compliance. Every project receives:
              </p>
              <ul className="space-y-3">
                {whyChooseItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[16px] leading-[1.65] text-[#4d6277]">
                This framework protects your investment by combining technical precision with transparent project control, resulting in consistent outcomes across renovations, extensions, and new builds.
              </p>
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
              Our Management Framework
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              A structured project delivery methodology that ensures transparency and precision at every stage.
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

      {/* ── OVERSIGHT & METHODOLOGY ──────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="section-tab w-fit">Professional Build Oversight</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                Excellence in Execution
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Effective oversight requires disciplined site logistics coordination, work sequencing, and continuous safety management in accordance with Site Safe NZ protocols. Our supervisors document progress daily, enforce construction methodology compliance, and manage communication through RFI (Request for Information) and site diary systems.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Complex construction projects rely on multi-trade coordination and lean construction practices. We identify risks early through project risk registers and address them before they impact the schedule or budget. Every element — from procurement schedules to defect rectification checklists — is verified through structured QA/QC workflows.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5 rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-7 sm:p-9">
              <h3 className="text-[22px] font-extrabold leading-tight text-[#293a57]">
                Construction Management Methodology &amp; Compliance Framework
              </h3>
              <p className="text-[15px] leading-[1.65] text-[#4d6277]">
                We apply industry-recognised project governance frameworks, including PMBOK-aligned planning principles, risk management registers, and QA/QC verification protocols tailored to New Zealand&apos;s construction environment. Our management process incorporates critical path scheduling (CPS), earned value management (EVM), and construction phase monitoring using cloud-based platforms such as Procore and Buildertrend.
              </p>
              <p className="text-[15px] leading-[1.65] text-[#4d6277]">
                All projects are delivered under the oversight of Licensed Building Practitioners (LBPs), adhere to the NZ Building Code (NZBC), and maintain complete alignment with Site Safe NZ safety standards and ISO 9001 quality assurance procedures — providing predictable delivery, cost certainty, and verified quality at handover.
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

      {/* ── FEATURED CONSTRUCTION MANAGEMENT GALLERY ─────────────── */}
      <FeaturedGallery
        heading="Featured Construction Management"
        images={[
          { src: "/services/laingholm-pavilion-evening-1024x683.jpg", alt: "Modern church pavilion exterior" },
          { src: "/services/taipari-road-te-atatu07-673a8cab8f4c5-1-1024x536.webp", alt: "Suburban Residence Exterior" },
          { src: "/services/Neighborhood-Development-1024x682.webp", alt: "New build development" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-09-1024x682.jpg", alt: "Avondale project exterior" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-13-1024x682.jpg", alt: "Avondale project detail" },
          { src: "/services/stylish-home-deck.jpg", alt: "Stylish home deck" },
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
