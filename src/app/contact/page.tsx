"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C9.61 22 2 14.39 2 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  );
}

function IconEmail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 lg:py-40">
        <Image
          src="/jra-slider-1.png"
          alt="Contact Us banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Contact Us
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

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Client Details */}
          <div className="space-y-6 text-[#4d6277]">
            <p className="text-[16px] leading-relaxed">
              Completely synergize resource taxing relationships niche markets. Professionally cultivate one-to-one customer service.
            </p>
            <div className="flex items-start space-x-3">
              <IconMapPin className="mt-0.5 h-6 w-6 shrink-0 text-[#0f2744]" />
              <div className="space-y-1">
                <h3 className="font-bold text-[#0f2744]">Address:</h3>
                <p>45 Brighton Road, Parnell,<br />Auckland 1052, New Zealand</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <IconPhone className="mt-0.5 h-6 w-6 shrink-0 text-[#0f2744]" />
              <div className="space-y-1">
                <h3 className="font-bold text-[#0f2744]">Phone:</h3>
                <p>+64 9 884 0915</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <IconEmail className="mt-0.5 h-6 w-6 shrink-0 text-[#0f2744]" />
              <div className="space-y-1">
                <h3 className="font-bold text-[#0f2744]">Email:</h3>
                <p>jraconstruction.co.nz</p>
              </div>
            </div>
          </div>

          {/* Right Column: Placeholder Form */}
          <div className="space-y-6">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-3xl font-extrabold leading-tight tracking-tight text-[#0f2744] sm:text-4xl">
              Send Us A Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4d6277]">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0f2744] focus:ring-[#0f2744] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4d6277]">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0f2744] focus:ring-[#0f2744] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4d6277]">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0f2744] focus:ring-[#0f2744] sm:text-sm"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#0f2744] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-[#1a3d5e]">
                Submit
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
