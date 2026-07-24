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
  title: { absolute: "Kitchen Renovations in Auckland | Instant Online Estimate" },
  description:
    "Kitchen renovations in Auckland specialist JRA Construction delivers quality, reliability, and innovation with superior craftsmanship. Contact us.",
  alternates: { canonical: "/services/kitchen-renovations" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/kitchen-renovations/). */

const painPoints = [
  "Is your kitchen layout hampering your family's daily routines?",
  "Ready to upgrade to a space that reflects your cooking and entertaining style?",
  "Searching for experienced kitchen renovationl Auckland specialists who understand your vision?",
];

const whyChoose = [
  "Fixed-price contracts",
  "287-point quality system",
  "Licensed practitioners",
  "Master Builders guarantee",
  "Waterproofing expertise",
];

const excellenceItems = [
  { text: "Dedicated project consultant" },
  { text: "Bespoke storage solutions" },
  { text: "Licensed electricians" },
  { text: "Certified plumbers" },
  { text: "Expert installers for cabinetry, benchtops, and splashbacks" },
];

const journeyItems = [
  { text: "Personalised kitchen design consultation" },
  { text: "Custom new style kitchen layout planning" },
  { text: "Premium material and finish selection" },
  { text: "Modern kitchen cabinetry customisation" },
  { text: "Smart appliance coordination" },
  { text: "Gas fitting and ventilation planning" },
  { text: "Contemporary lighting integration" },
  { text: "Expert kitchen renovation quality checks" },
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
  { q: "How long does a typical kitchen renovation take?", a: "Most projects take 4-6 weeks, depending on complexity and material selections." },
  { q: "What's involved in the design process?", a: "We combine your ideas with our expertise to create detailed 3D renderings and plans for your approval." },
  { q: "How do you handle appliance integration?", a: "We coordinate with suppliers and ensure all appliances fit perfectly within your new layout." },
  { q: "Can you help with material selection?", a: "Our design team guides you through choosing materials that match your style and budget." },
  { q: "What about temporary kitchen facilities?", a: "We help plan alternative cooking arrangements during the renovation." },
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
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Kitchen Renovations<br />in Auckland
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
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Kitchen renovations in Auckland is our specialty. Creating exceptional spaces takes more
                than just construction expertise, it demands innovative kitchen design and meticulous
                planning. Our passion for modern kitchen designs drives every project, transforming
                ordinary kitchens into extraordinary living spaces. With our comprehensive approach to
                Auckland kitchen remodel, we ensure every renovation maximises your space’s potential
                while reflecting your unique style.
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
                Why Choose JRA for Your Kitchen Makeover Auckland
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

      {/* ── EXCELLENCE IN KITCHEN CREATION ───────────────────────── */}
      <ServiceFeatureStory
        heading="Excellence in Kitchen Creation"
        items={excellenceItems.map((item) => item.text)}
        image="/projects/sandringham-project/sandringham-renovation-kitchen-qx2xj1zhgxjebxfbuvqtgb2x8m7eqpg6roak3bjna8.webp"
        imageAlt="Sandringham kitchen renovation"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915" image="/services/kitchen-interior-1024x683.webp" imageAlt="Stylish kitchen setup" />

      {/* ── CRAFTING YOUR DREAM AUCKLAND KITCHEN ─────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="relative min-h-[480px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/queensway/Kitchen-_-Dining.jpg"
              alt="Kitchen and dining renovation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="flex flex-col justify-center space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Crafting Your Dream Auckland Kitchen
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              When it comes to Auckland kitchen makeovers, our portfolio showcases transformative
              solutions across diverse homes and styles. From heritage villas to contemporary
              apartments, we understand how to blend new-style kitchen elements with existing
              architecture, incorporating features like kitchen islands and open-plan layouts that suit
              modern living, creating spaces that feel both fresh and timeless.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              Our expertise in kitchen renovations spans compact galley layouts to expansive
              entertaining spaces. Each project begins with understanding your unique kitchen concepts
              and lifestyle needs, ensuring every element—from cabinetry to lighting—enhances both
              functionality and aesthetic appeal.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              By combining innovative modern kitchen solutions with practical layouts, we create spaces
              that work as beautifully as they look. Whether you’re planning a{" "}
              <Link href="/services/home-renovations" className="font-semibold text-[#293a57] underline decoration-[#293a57]/30 underline-offset-2 hover:decoration-[#293a57]">
                complete transformation
              </Link>{" "}
              or targeted updates, our team brings creative vision and technical expertise to every
              project.
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

      {/* ── YOUR KITCHEN TRANSFORMATION JOURNEY ──────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="space-y-12">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Your Kitchen Transformation Journey
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <ServiceStoryChecklist
              image="/projects/sandringham-project/sandringham-kitchen-remodel-r62bylhms7jo6jabe2fnbxklgnwfkeqk4eddm6ymcg.jpg"
              imageAlt="Custom kitchen renovation"
              intro={<p>Our proven approach to modern kitchen designs ensures seamless project delivery:</p>}
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

      {/* ── MODERN KITCHEN DESIGN TRENDS ─────────────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Modern Kitchen Design Trends
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Renovating your kitchen with JRA means gaining insight into the latest design trends and
              innovations. We can incorporate modern kitchen trends that elevate both style and
              functionality. Consider sleek, handle-less cabinetry for a clean look, expansive stone or
              engineered stone benchtops that provide durable workspaces, and multipurpose kitchen
              islands that serve as cooking areas, dining bars, and storage all in one. Homeowners in
              Auckland are also embracing smart kitchen technology – from Wi-Fi-enabled ovens to smart
              fridges – and we’re experienced in integrating these seamlessly into your new layout. By
              staying current with cutting-edge appliances and fixtures, we ensure your kitchen
              renovation feels contemporary and performs efficiently.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Layout and lighting play a huge role in a kitchen’s success. Our design team often
              recommends open-plan configurations or removing walls to connect the kitchen with living
              areas better, creating a social hub ideal for entertaining. We also focus on enhanced
              lighting solutions, combining recessed ceiling lights with stylish pendant lamps to
              brighten work areas and add ambience. Details like soft-close drawers, custom pantry
              storage, and splashbacks that are both attractive and easy to clean come standard in our
              projects. These thoughtful touches, aligned with today’s top trends, result in a kitchen
              that not only looks stunning but is perfectly tailored to your cooking and entertaining
              style.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={100} className="relative min-h-[560px] overflow-hidden rounded-[28px]">
            <Image
              src="/projects/laingholm-baptist-church/laingholm-church-kitchen-r62ev6z3aiqc4fcqma33sjd568cu3vz9u3si4nvhy8.jpg"
              alt="Modern Auckland kitchen"
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
              src="/projects/sandringham-project/sandringham-kitchen-renovation-r62bxola50amw6m3q67penvgo6el303ybvjdtibee8.jpg"
              alt="Finished kitchen renovation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" className="space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Quality Assurance
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Trust and craftsmanship define every Auckland kitchen renovation project we undertake. As
              Master Builders, our work is backed by industry-leading guarantees, comprehensive
              insurance, and a reputation for excellence. Each renovation undergoes our rigorous quality
              control procedures, ensuring every detail—from cabinet installation to electrical
              fittings—meets the highest standards of safety and finish.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              We stand behind our work long after project completion. Our dedicated aftercare programme
              includes maintenance schedules, care guides for your new fixtures and surfaces, and
              priority support for any questions you may have. This commitment to lasting quality,
              combined with our thorough documentation and inspection protocols, ensures your kitchen
              will maintain its beauty and functionality for years to come
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
              How We Put Your Kitchen Renovation Plan to Action
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

      {/* ── FEATURED KITCHEN RENOVATION GALLERY ──────────────────── */}
      <FeaturedGallery
        heading="Featured Kitchen Renovation"
        images={[
          { src: "/services/luxury-kitchen-remodel.webp", alt: "Luxury kitchen remodel" },
          { src: "/services/Kitchen-Island-Interior.webp", alt: "Kitchen island interior" },
          { src: "/services/Kitchen-Countertop-Design.webp", alt: "Kitchen countertop design" },
          { src: "/services/sandringham-renovation-kitchen.webp", alt: "Sandringham renovation kitchen" },
          { src: "/services/kitchen-interior.webp", alt: "Stylish kitchen setup" },
          { src: "/services/JRA-15-Saint-Leonards-Website-148.jpg", alt: "Saint Leonards kitchen renovation" },
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
