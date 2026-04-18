"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function ProjectsPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 lg:py-40">
        <Image
          src="/jra-slider-1.png"
          alt="Projects banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Projects
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Content Section (Placeholder) */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] text-center">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#0f2744] sm:text-5xl">
            Projects Portfolio Coming Soon
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#4d6277]">
            Explore our upcoming portfolio of exceptional construction projects.
          </p>
        </Container>
      </section>
    </>
  );
}
