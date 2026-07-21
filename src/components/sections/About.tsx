"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-white py-14 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        {/* Sticky image: follows the reader while the text column scrolls */}
        <AnimateOnScroll variant="fade-right" className="min-w-0 lg:sticky lg:top-36 lg:self-start">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[40px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 sm:h-[620px]">
            <Image
              src="/jra-about.png"
              alt="Builder marking timber onsite"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </AnimateOnScroll>

        <div className="min-w-0 pt-2">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="section-tab">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  d="M3 10.5L12 3l9 7.5v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Who We Are
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <h2 className="mt-5 font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#293a57] sm:text-[50px]">
              JRA Construction: Your Trusted Building Partner
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <div className="mt-7 space-y-5 text-[17px] leading-[1.65] text-[#3f5162]">
              <p>
                At JRA Construction, we are a full-service Auckland building company specialising in
                custom homes, renovations, and extensions. From Avondale extension work to Balmoral
                renovation projects and premium Auckland villa upgrades, we help homeowners improve
                layout, add space, and protect project budgets without compromising workmanship.
              </p>
              <p>
                We believe that communication is key to a successful build, which is why we
                prioritise having a direct point of contact for every project. Our 24-hour callback
                policy and consistent project updates keep clients informed from the first
                consultation through handover.
              </p>
              <p>
                Quality service is at the core of everything we do at JRA Construction. We ensure
                that all work and sub-trades meet our high expectations and current standards, then
                finish each project with a thorough walk-through using our JRA Quality Checklist.
              </p>
              <p>
                We also prioritise safety at all times, ensuring that not only our staff but anyone
                in and around our sites is protected. As partners with HazardCo, we use site safety
                plans alongside our own to maintain a clean, well-managed environment on every
                project.
              </p>
              <p>
                If you are ready to take the first step towards your dream project, contact us today
                to schedule a FREE consultation.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={400}>
            <div className="mt-8">
              <h3 className="text-[24px] font-extrabold tracking-tight text-[#293a57]">Joe Allen</h3>
              <p className="mt-1 text-[15px] font-semibold uppercase tracking-wide text-[#5f7286]">
                Director
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={500}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#293a57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Free Consultation
              </Link>
              <a
                href="tel:0212769971"
                className="inline-flex items-center justify-center rounded-full border border-[#293a57]/30 px-7 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-[#293a57]/5"
              >
                Call Us (021) 276 9971
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
