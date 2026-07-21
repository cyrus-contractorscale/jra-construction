"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const advantages = [
  "Regulatory Compliance: Our operations are in full compliance with local building codes, providing peace of mind and reducing legal liabilities.",
  "Guaranteed Quality: Our certifications and licenses are not just formalities; they represent our promise of high-quality, durable construction.",
  "Expertise in Complex Projects: Our team's capability in managing and executing complex projects comes from rigorous training and extensive experience, ensuring each project's success.",
  "Reliability and Timeline Adherence: We maintain professional reliability by strictly adhering to project timelines and budget, preventing any unforeseen expenses.",
  "Boosting Property Value: The superior quality of our construction not only meets but often exceeds standards, significantly enhancing the resale value of your property.",
];

/* Live-site "Award-Winning Auckland Builders" section:
   navy #293A57 background + Neighborhood-Development.webp + 90% overlay.
   Text is centered, white. Mirrors jraconstruction.co.nz element f724bf3. */
export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20"
      style={{
        backgroundImage:
          "url('/neighborhood-development.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 90% navy overlay — matches live site */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#293A57", opacity: 0.9 }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <AnimateOnScroll variant="fade-up" className="mx-auto max-w-6xl text-center text-white">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold uppercase leading-[1.1] tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] sm:text-[42px] lg:text-[48px]">
            Award-Winning Auckland Builders for New Homes, Renovations and Extensions
          </h2>

          <p className="mt-6 text-[16px] leading-[1.65] text-white/85">
            JRA Construction delivers custom homes, home renovations, home extensions, and quantity
            surveying across Auckland. From early planning and budgeting through council consents
            and construction, we focus on clear communication, buildability, and durable
            workmanship.
          </p>

          <h3 className="mt-10 text-[22px] font-semibold text-white sm:text-[24px]">
            We Are Licensed &amp; Certified Home Builders in Auckland
          </h3>

          <p className="mt-4 text-[16px] leading-[1.65] text-white/85">
            As licensed and certified home builders in Auckland, we manage custom homes,
            renovations, and extensions to current code and quality standards. Our team is built
            for complex residential projects where cost control, sequencing, and finish quality all
            matter.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={150} className="mx-auto mt-10 max-w-5xl text-white">
          <p className="text-[15px] font-bold text-white/90">
            Advantages of Working with Certified Professionals
          </p>
          <ul className="mt-4 space-y-3">
            {advantages.map((item) => {
              const [bold, ...rest] = item.split(": ");
              return (
                <li key={item.slice(0, 30)} className="flex items-start gap-3 text-left">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1FA700"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.5 12l2.5 2.5 4.5-5" />
                  </svg>
                  <span className="text-[15px] leading-[1.6] text-white/85">
                    <strong className="font-semibold text-white">{bold}:</strong> {rest.join(": ")}
                  </span>
                </li>
              );
            })}
          </ul>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
