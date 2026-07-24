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
  JourneyCta,
} from "@/components/services/ServiceShared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Granny Flats in Auckland | Instant Online Estimate" },
  description:
    "Looking to build a granny flat in Auckland? JRA Construction handles the entire build process with expert project management and reliable results.",
  alternates: { canonical: "/services/granny-flats" },
};

/* All copy on this page is verbatim from the live site
   (jraconstruction.co.nz/services/granny-flats/). */

const ourDifference = [
  "Fixed-Price Contracts",
  "287-Point Quality Checklist",
  "Licensed Building Practitioners",
  "Master Builders Guarantee",
  "Transparent Project Management",
];

const whatYouGet = [
  { text: "Dedicated Project Manager" },
  { text: "Real-Time Progress Updates" },
  { text: "Professional Design Consultation" },
  { text: "Council Compliance Expertise" },
  { text: "Quality Assurance & Warranty Coverage" },
];

const grannyFlatForms = [
  { lead: "Detached:", body: "A separate unit, often in the backyard." },
  { lead: "Attached:", body: "Built onto the main house but with its own entrance." },
  { lead: "Internal:", body: "Created by converting part of the main home, like a basement or garage." },
];

const benefits = [
  "Extra space for family – Give elderly parents or adult children a place to live nearby while still maintaining privacy.",
  "Rental income – A granny flat can become a steady source of extra income, especially in high-demand areas.",
  "Adds property value – Homes with a legal second dwelling often attract more interest from buyers.",
  "Flexible use – A home office, a studio, a guest house—granny flats can adapt as your needs change.",
  "Cost-effective – Compared to building an extension or upsizing to a new home, a granny flat is usually more affordable and quicker to complete.",
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

export default function GrannyFlatsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/granny-flats_services.webp"
          alt="JRA Construction granny flats Auckland"
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
            <span className="text-white/90">Granny Flats</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Granny Flats<br />in Auckland
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
      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5 lg:pr-4">
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Granny flats are quickly becoming a popular solution for Auckland homeowners who need
                more usable space without moving or doing a{" "}
                <Link href="/services/home-renovations" className="font-semibold text-[#293a57] underline underline-offset-2">
                  major renovation
                </Link>
                . These self-contained units are built on the same section as a main home and offer
                flexibility for a wide range of living situations.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                For families, a granny flat can provide a private, comfortable space for elderly
                parents, young adults, or long-term guests. For others, it can serve as a rental unit,
                a home office, or a separate area for hobbies or side businesses. The layout is
                compact, but the impact is big—granny flats give you more control over how you use your
                property.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                As housing costs rise and land becomes harder to come by, granny flats offer a
                practical way to make better use of existing space. They&apos;re cost-effective, add
                value to your home, and suit a range of property types across Auckland.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="relative min-h-[560px] overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(41,58,87,0.16)]">
              <Image
                src="/services/Cabin-Facade-Wooded-683x1024.webp"
                alt="Granny flat exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
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

      {/* ── JRA STORY + PROCESS VIDEOS ───────────────────────────── */}
      <ServiceVideoPair />

      {/* ── WHY CHOOSE JRA: OUR DIFFERENCE ───────────────────────── */}
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
      <ServiceFeatureStory
        heading="What You Get with Every Project"
        items={whatYouGet.map((item) => item.text)}
        image="/services/Te-Wiata-Place-Avondale-Project-15.jpg"
        imageAlt="Avondale granny flat interior"
      />

      {/* ── WAYS TO CONNECT ──────────────────────────────────────── */}
      <WaysToConnect phoneDisplay="+64 9 884 0915" phoneTel="tel:+6498840915"
        image="/services/Media-Corner-Nook-1024x683.webp"
        imageAlt="Cozy Media Corner"
      />

      {/* ── WHAT IS A GRANNY FLAT? ───────────────────────────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
              What Is a Granny Flat?
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              A granny flat is a fully self-contained home built on the same property as the main
              house. It has everything needed for independent living, including a kitchen, bathroom,
              bedroom, and living space.
            </p>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">Granny flats come in a few forms:</p>
            <ul className="space-y-3">
              {grannyFlatForms.map((form) => (
                <li key={form.lead} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2d4560]">
                  <CheckIcon />
                  <span>
                    <strong className="font-bold text-[#293a57]">{form.lead}</strong> {form.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-[1.7] text-[#4d6277]">
              Some people call them minor dwellings or secondary units. Whether you&apos;re thinking
              about a granny flat or a house with granny flat, the idea is the same—more usable space
              on your existing land. In Auckland, there are{" "}
              <a
                href="https://www.planning.nsw.gov.au/policy-and-legislation/disaster-and-pandemic-recovery/secondary-dwellings-granny-flats"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#293a57] underline underline-offset-2"
              >
                specific council rules
              </a>{" "}
              around size, placement, and access, so it&apos;s important to plan with those in mind.
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
                src="/services/sandringham-bedroom-renovation-683x1024.webp"
                alt="Cozy bedroom setup"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── BENEFITS OF BUILDING A GRANNY FLAT ───────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="space-y-8">
          <AnimateOnScroll variant="fade-up">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Benefits of Building a Granny Flat
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <ServiceStoryChecklist
              image="/services/Te-Wiata-Place-Avondale-Project-09-1024x682.jpg"
              imageAlt="avondale project"
              intro={<p>Granny flats offer real, practical value. Here&apos;s what makes them a smart choice:</p>}
              items={benefits}
              outro={<p>
                For many Auckland homeowners, a granny flat just makes sense—whether it&apos;s about
                keeping family close or getting more out of your property.
              </p>}
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

      {/* ── WHY CHOOSE JRA FOR YOUR GRANNY FLAT ──────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right" className="space-y-5">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Why Choose JRA Construction for Your Granny Flat?
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Building a granny flat in Auckland involves more than just good design—it requires a
              builder who understands council rules, local site conditions, and how to make the most of
              limited space. That&apos;s where{" "}
              <Link href="/" className="font-semibold text-[#293a57] underline underline-offset-2">
                JRA Construction
              </Link>{" "}
              comes in.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              We&apos;re a residential builder with years of experience delivering high-quality builds
              across Auckland. Our team is hands-on from day one, helping you plan and build a granny
              flat that fits your section and your needs. We handle the details—consents, timelines,
              and coordination—so you can focus on how the space will work for you and your family.
            </p>
            <p className="text-[17px] leading-[1.7] text-[#5f7286]">
              Whether you want a compact, modern flat or something that complements your main home,
              we&apos;ll work with you to bring it to life. Our approach is collaborative, transparent,
              and focused on getting things done right the first time.
            </p>
            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#293a57] px-7 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-[#293a57] hover:text-white"
            >
              Read More <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="/services/Media-Corner-Nook.webp"
                alt="Cozy Media Corner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
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
              How We Put Your Granny Flat Plan to Action
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-x-10 gap-y-0 lg:grid-cols-2">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className="grid h-full grid-cols-[72px_1fr] border-t border-[#293a57]/15 py-7">
                  <span className="border-r-2 border-emerald-400 text-[24px] font-extrabold tracking-tight text-[#293a57]/35">{s.step}</span>
                  <div className="pl-6">
                    <h3 className="mb-2 text-[18px] font-bold text-[#293a57]">{s.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURED GRANNY FLAT GALLERY ─────────────────────────── */}
      <FeaturedGallery
        heading="Featured Granny Flat"
        images={[
          { src: "/services/Te-Wiata-Place-Avondale-Project-06.jpg", alt: "Avondale granny flat exterior" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-09-1024x682.jpg", alt: "avondale project" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-08-1024x683.jpg", alt: "Te Wiata Place Avondale project" },
          { src: "/services/te-wiata-bedroom.webp", alt: "Te Wiata bedroom" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-15.jpg", alt: "Avondale granny flat interior" },
          { src: "/services/Te-Wiata-Place-Avondale-Project-03.jpg", alt: "Avondale granny flat living area" },
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

      {/* ── READY TO BUILD A GRANNY FLAT? (NEXT STEPS) ───────────── */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="space-y-10">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-3">
            <p className="section-tab mx-auto w-fit">What Are The Next Steps From Here?</p>
            <p className="text-[15px] font-semibold text-[#5f7286]">Get started with JRA Construction today</p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scale-in" delay={100}>
            <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-2xl border border-[#e8edf2] bg-white p-8 shadow-[0_8px_32px_rgba(41,58,87,0.08)] sm:p-10 lg:grid-cols-[380px_1fr]">
              <div className="relative mx-auto aspect-[1024/980] w-full max-w-[380px]">
                <Image
                  src="/services/b-granny-1024x980.png"
                  alt="Construction Process Booklet"
                  fill
                  className="object-contain"
                  sizes="380px"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-[26px] font-extrabold leading-tight text-[#293a57]">
                  Ready to Build a Granny Flat?
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                  If you&apos;re thinking about adding a granny flat to your home in Auckland,
                  we&apos;re here to help. From design to construction, JRA Construction can guide you
                  through the process and make sure everything runs smoothly.
                </p>
                <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                  Get in touch with our team to discuss your ideas, explore your site&apos;s potential,
                  and start planning a space that works for you. Whether it&apos;s for family, guests,
                  or extra income, your house with granny flat can add real value to how you live.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
                >
                  Get Your Free Homeowner&apos;s Guide to Granny Flats and Minor Dwellings in Auckland <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── DOWNLOAD YOUR FREE GUIDE ─────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
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
