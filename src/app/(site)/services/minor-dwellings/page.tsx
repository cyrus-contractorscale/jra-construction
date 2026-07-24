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
  title: { absolute: "Minor Dwellings in Auckland | Instant Online Estimate" },
  description:
    "Build a minor dwelling in Auckland with confidence. JRA Construction manages the process from permits to completion with a focus on quality and compliance.",
  alternates: { canonical: "/services/minor-dwellings" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/minor-dwellings/). */

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

const whyConsiderItems = [
  "Multi-generational living – Keep family close while maintaining independence",
  "Rental income – Generate extra cash flow through long- or short-term rentals",
  "Work-from-home setup – Create a separate home office or studio",
  "Guest space – Give visitors their own private area",
  "Increase property value – Boost your home’s appeal and market value",
  "Future-proof your home – Stay ready for changing needs without major renovations",
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
  { q: "What bathroom renovation services does JRA Construction offer in Auckland?", a: "JRA Construction offers comprehensive bathroom renovation services including design and planning, layout improvements, installation of all bathroom fixtures, custom cabinetry design and construction, selection of countertops, flooring, faucets, sinks, and lighting fixtures. We also handle project management and complete renovation services including plumbing, electrical work, painting, and tiling." },
  { q: "Can JRA Construction help with small updates as well as complete bathroom overhauls?", a: "Yes, we can assist with projects of all sizes. Whether you’re looking to update fixtures, improve the layout, or completely transform your bathroom, our team has the expertise to handle your project. We tailor our services to meet your specific needs and budget." },
  { q: "How does JRA Construction approach the design process for bathroom renovations?", a: "We start with a consultation to understand your needs, style preferences, and budget. Our team then works collaboratively with you to create a custom plan that incorporates all your desired updates. Whether you’re aiming for a contemporary or traditional look, we ensure the design maximizes your space and enhances functionality." },
  { q: "What types of layout improvements can JRA Construction make to my bathroom?", a: "We can make various layout improvements to enhance your bathroom’s functionality. This might include adding a double vanity, enlarging your shower, repositioning your toilet, or reconfiguring the space to maximize efficiency. Our team will work with you to design a layout that best suits your needs and available space." },
  { q: "Does JRA Construction handle all aspects of the bathroom renovation, including plumbing and electrical work?", a: "Yes, we provide complete renovation services that include plumbing, electrical work, painting, and tiling. Our comprehensive approach means you don’t have to coordinate multiple contractors – we take care of everything from start to finish." },
  { q: "How long does a typical bathroom renovation project take with JRA Construction?", a: "The duration of a bathroom renovation can vary depending on the scope of the project. During our initial consultation and design phase, we’ll provide you with a detailed timeline specific to your project. We strive to complete all renovations efficiently while maintaining our high standards of quality." },
  { q: "How does JRA Construction ensure the quality of their bathroom renovations?", a: "We ensure quality through our experienced team of professionals, use of high-quality materials, and attention to detail. Our project management approach includes regular quality checks and open communication with clients throughout the renovation process." },
  { q: "How do I get started with a bathroom renovation project with JRA Construction?", a: "Getting started is easy. You can visit our website to fill out a contact form or call us directly at 021 276 9971 to speak with one of our friendly team members. We’ll schedule an initial consultation to discuss your ideas, needs, and budget, and guide you through the entire renovation process." },
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

export default function MinorDwellingsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
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
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Minor Dwellings<br />in Auckland
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

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl">
          <AnimateOnScroll variant="fade-up">
            <div className="space-y-5">
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                In growing cities like Auckland, making the most of every square metre has become more
                important than ever. That&apos;s where the idea of a minor dwelling comes in. A minor
                dwelling is a small, self-contained home built on the same site as an existing house.
                It&apos;s designed to offer flexible living options—without the need to subdivide.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                These dwellings are becoming a popular choice across Auckland for homeowners who want
                to support extended family, create space for adult children, or provide a private unit
                for guests. Others see them as an opportunity to{" "}
                <Link href="/services/home-maintenance" className="font-semibold text-[#293a57] underline underline-offset-2">
                  add value to their property
                </Link>{" "}
                or generate rental income in a city where housing demand is high.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                If you&apos;ve been exploring what are dwellings and how they differ from other housing
                types, a minor dwelling NZ is often defined by its smaller size (usually capped at
                65m²) and location on a site that already has a main dwelling house. This page walks
                through what minor dwellings are, how they&apos;re used, and why they&apos;re a smart,
                future-ready addition to many Auckland properties.
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
        image="/services/t-granny-970x1024.png"
        imageAlt="Granny Flats Guide"
        bookTitle="The Homeowner’s Guide to Granny Flats and Minor Dwellings in Auckland"
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
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915"
        image="/services/Rustic-Faucets-819x1024.webp"
        imageAlt="Vintage Brass Faucets"
      />

      {/* ── WHAT IS A MINOR DWELLING? ────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="mx-auto max-w-4xl space-y-6">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              What Is a Minor Dwelling?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100} className="space-y-5">
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              A minor dwelling is a small, standalone residential unit built on the same lot as an
              existing dwelling house. In New Zealand, it&apos;s commonly limited to a floor area of
              65m² and is intended to support the main home without needing a separate title or
              subdivision.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              The key difference between a minor dwelling and a full-sized home lies in size and
              consent requirements. A{" "}
              <a
                href="https://bcdgroup.nz/news-articles/granny-flat-changes-in-new-zealand-legislation"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#293a57] underline underline-offset-2"
              >
                minor dwelling NZ
              </a>{" "}
              setup is designed to be compact but functional, often including a kitchen, bathroom,
              bedroom, and living space. It&apos;s built for permanent use, not as a temporary
              structure or sleepout.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              In Auckland, a minor dwelling must comply with local planning rules, including site
              coverage, setbacks, and parking provisions. That&apos;s why working with an experienced
              builder is essential—they&apos;ll help ensure your plans meet council regulations and
              make smart use of your land.
            </p>
            <div className="text-center">
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

      {/* ── WHY CONSIDER BUILDING A MINOR DWELLING ───────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
              Why Consider Building a Minor Dwelling in Auckland?
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              Adding a minor dwelling in Auckland is a smart way to improve how your property works for
              your family. It creates space without needing to buy a second property—and offers privacy
              while staying connected. Whether you&apos;re housing extended family or giving older
              children their own space, the benefits are practical and long-term.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              A minor dwelling also opens the door to future possibilities. You can rent it out or
              repurpose it over time, depending on your needs. It&apos;s a flexible solution that works
              with Auckland&apos;s changing housing landscape.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              Here&apos;s why more homeowners are choosing to build an additional dwelling unit:
            </p>
            <ul className="space-y-3">
              {whyConsiderItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              With councils supporting smarter land use and infill housing, building a minor dwelling
              can also contribute to more livable, connected Auckland neighbourhoods.
            </p>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
            >
              Free Online Estimate <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[400px] overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
              <Image
                src="/services/Decorative-Bathroom-683x1024.webp"
                alt="Luxurious Patterned Bathroom"
                fill
                className="object-cover"
                sizes="400px"
              />
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

      {/* ── WHY WORK WITH JRA ────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-8">
          <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Why Work with JRA Construction for Your Minor Dwelling Project?
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Building a minor dwelling in Auckland involves more than just putting up a small
              home—it requires experience, planning, and a deep understanding of local council rules.{" "}
              <Link href="/" className="font-semibold text-[#293a57] underline underline-offset-2">
                JRA Construction
              </Link>{" "}
              has been working with homeowners across Auckland to deliver well-built, fully consented
              minor dwellings that match their needs and maximise the potential of their property.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              We take the time to understand your goals, your site, and your budget. From there, we
              manage the entire process—from concept and council approvals to construction and final
              walkthrough. Our team knows how to make tight spaces feel spacious and how to handle
              tricky site constraints.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              What sets us apart is our practical approach, clear communication, and focus on quality.
              We make sure your additional dwelling unit blends seamlessly with your main dwelling
              house, both functionally and visually. Whether it&apos;s a rental unit, a place for
              family, or a long-term investment, we&apos;ll build it to last.
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
              How We Put Your Minor Dwellings Plan to Action
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

      {/* ── FEATURED MINOR DWELLINGS GALLERY ─────────────────────── */}
      <FeaturedGallery
        heading="Featured Minor Dwellings"
        images={[
          { src: "/services/Copy-of-2A3A2941-scaled.jpg", alt: "Minor dwelling project" },
          { src: "/services/Copy-of-2A3A2794-1024x683.jpg", alt: "Minor dwelling build" },
          { src: "/services/Copy-of-2A3A2787-1024x683.jpg", alt: "Minor dwelling interior" },
          { src: "/services/Seacombe-11-1024x683.jpg", alt: "Seacombe project" },
          { src: "/services/Patio-Outdoor-Living-1024x683.webp", alt: "Patio outdoor living" },
          { src: "/services/DSC00888-HDR-1-sharpen-1024x683.jpg", alt: "Completed dwelling project" },
        ]}
      />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
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

      {/* ── DOWNLOAD YOUR FREE GUIDE ─────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center space-y-6">
          <AnimateOnScroll variant="fade-up" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
              Download Your FREE Guide to Building a Granny Flat!
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#4d6277]">
              Ready to explore the possibilities of adding a granny flat or minor dwelling to your
              property? Get your FREE copy of &lsquo;The Homeowner&rsquo;s Guide to Granny Flats and
              Minor Dwellings in Auckland&rsquo; and learn everything you need to know
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
            >
              DOWNLOAD NOW <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

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
