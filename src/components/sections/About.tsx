"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const el = imageWrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const translateY = (clamped - 0.5) * 48;
      el.style.transform = `translateY(${translateY}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="scroll-mt-28 bg-white pt-0 pb-10 sm:pb-14">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <AnimateOnScroll variant="fade-right" className="min-w-0">
          <div
            ref={imageWrapRef}
            className="relative h-[520px] w-full overflow-hidden rounded-[40px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 sm:h-[620px] xl:h-[700px]"
            style={{ willChange: "transform", transition: "transform 0.1s linear" }}
          >
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
              About Us
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <h2 className="mt-5 font-[ui-sans-serif,system-ui,sans-serif] text-[44px] font-extrabold leading-[1.02] tracking-tight text-[#0f2744] sm:text-[56px]">
              Built on clarity, craft, and accountability
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <div className="mt-7 space-y-5 text-[22px] leading-[1.52] text-[#3f5162]">
              <p>
                JRA Construction is a full-service construction and management company specialising
                in residential renovations, extensions, and alterations across New Zealand. We focus
                on clear planning from the start and disciplined execution through every stage so your
                project runs smoothly and stays aligned.
              </p>
              <p>
                We work closely with you to make practical decisions early, maintain clear
                communication throughout the build, and ensure every detail meets a high standard.
              </p>
            </div>
          </AnimateOnScroll>

          <ul className="mt-8 space-y-4 text-[18px] text-[#22384f]">
            {[
              "Clear planning and defined scope before construction begins",
              "Direct communication with consistent updates throughout the project",
              "Quality workmanship that meets current standards and expectations",
            ].map((text, i) => (
              <AnimateOnScroll key={text} variant="fade-up" delay={300 + i * 80}>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-[#1d314a]" aria-hidden="true">
                    <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8.3 12.2l2.2 2.2 5.1-5.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{text}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>

          <AnimateOnScroll variant="fade-up" delay={560}>
            <p className="mt-8 text-[30px] font-extrabold leading-[1.2] text-[#0f2744]">
              If you want a builder who takes ownership from plans through to completion, book a free
              consultation and we&apos;ll walk through your project with you.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={660}>
            <Link
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0f2744] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#16385f]"
            >
              Read More About Us
            </Link>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
