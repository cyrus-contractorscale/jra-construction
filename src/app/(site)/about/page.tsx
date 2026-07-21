"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function AboutUsPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="About Us banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              About Us
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={150}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Start Your Project
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          {/* Text Column */}
          <div className="space-y-6">
            <AnimateOnScroll variant="fade-up">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#293a57] sm:text-5xl">
                JRA Construction: Your Trusted Building Partner
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={80}>
              <p className="text-[16px] leading-relaxed text-[#4d6277]">
                At JRA Construction, we are a full-service construction and management company that
                specializes in residential renovations, extensions, and alterations. As a New
                Zealand-owned company, we take pride in our customer service excellence and work
                closely with our clients to find the best solutions that fit their budget and timeline.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={160}>
              <p className="text-[16px] leading-relaxed text-[#4d6277]">
                We believe that communication is key to a successful build, which is why we
                prioritize having a direct point of contact for every project. Our 24-hour call back
                policy and constant project updates ensure that our clients are informed every step
                of the way. Trust is also crucial when dealing with such a significant investment,
                which is why we are proud members of several accredited organizations, including the
                Registered Master Builders, New Zealand Certified Builders, and Licensed Building
                Practitioners.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={240}>
              <p className="text-[16px] leading-relaxed text-[#4d6277]">
                Quality service is at the core of everything we do at JRA Construction. We ensure
                that all work and sub-trades meet our high expectations and are up to current
                standards. Once a project is complete, we conduct a thorough walk-through using our
                JRA Quality Checklist to ensure that it meets both our standards and the client&apos;s
                expectations.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={320}>
              <p className="text-[16px] leading-relaxed text-[#4d6277]">
                We also prioritize safety at all times, ensuring that not only our staff but anyone
                in and around our sites is protected. As partners with HazardCo, we utilize their
                site safety plans alongside our own to ensure the utmost safety on every site.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={400}>
              <p className="text-[16px] leading-relaxed text-[#4d6277]">
                At JRA Construction, we aim to make every project run as smoothly and effortlessly as
                possible, with joint satisfaction being one of our top priorities. So, if you&apos;re
                ready to take the first step towards your dream project, contact us today to schedule
                a FREE consultation. Let us be your trusted building partner and build your dream
                into reality.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Image Column */}
          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="relative h-[400px] w-full overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 lg:h-[600px]">
              <Image
                src="/jra-about.png"
                alt="JRA Construction team discussing plans"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
