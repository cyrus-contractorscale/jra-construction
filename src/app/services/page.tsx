"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const services = [
  {
    title: "Custom Homes",
    body: "Want to build a new home? We take you from concept to completion, building homes that perfectly fit your lifestyle and needs.",
    image: "/custom-home-services.webp",
    href: "/services/custom-homes",
  },
  {
    title: "Home Renovations",
    body: "Time to update your home? Our home renovation services refresh and renew every part of your space, making your home look and feel brand new.",
    image: "/home-renovation-services.webp",
    href: "/services/home-renovations",
  },
  {
    title: "Home Extensions",
    body: "Feeling cramped in your current home? Our home extension services add space seamlessly, giving you the extra room you need without the hassle of relocating.",
    image: "/home-extension-services.jpg",
    href: "/services/home-extensions",
  },
  {
    title: "Kitchen Renovations",
    body: "Does your kitchen need an upgrade? Our kitchen renovation services transform your kitchen into a space that's both functional and stylish, making it the true heart of your home.",
    image: "/kitchen-services.webp",
    href: "/services/kitchen-renovations",
  },
  {
    title: "Quantity Surveying",
    body: "Maximize your project's value and understand the true cost before getting started with expert quantity surveying services.",
    image: "/quantity_surveying-services.jpg",
    href: "/services/quantity-surveying",
  },
  {
    title: "Bathroom Renovations",
    body: "Ready for a new bathroom? Our bathroom renovation services turn your bathroom into a relaxing retreat, enhancing both its comfort and style.",
    image: "/bathroom-services.webp",
    href: "/services/bathroom-renovations",
  },
  {
    title: "Granny Flats",
    body: "Granny flats are quickly becoming a popular solution for Auckland homeowners who need more usable space without moving or doing a major renovation.",
    image: "/granny-flats_services.webp",
    href: "/services/granny-flats",
  },
  {
    title: "Minor Dwellings",
    body: "These dwellings are becoming a popular choice across Auckland for homeowners who want to support extended family, create space for adult children, or provide a private unit for guests.",
    image: "/minor-dwelling-services.webp",
    href: "/services/minor-dwellings",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 lg:py-40">
        <Image
          src="/jra-slider-1.png"
          alt="Services banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white/90">Services</span>
          </nav>
          <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
            From bespoke custom homes to meticulous renovations and essential quantity surveying — we deliver quality that lasts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Start Your Project
            </Link>
            <Link
              href="#services-list"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Browse Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="text-center mb-12">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#0f2744] sm:text-5xl">
              Explore Our Comprehensive Building Services
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4d6277] max-w-2xl mx-auto">
              JRA Construction offers a full spectrum of services tailored to your needs — each backed by our licensed team and quality guarantee.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} variant="fade-up" delay={index * 65}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(15,39,68,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,39,68,0.12)]">
                  <div className="relative block aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-[1.1rem] font-bold leading-snug text-[#0f2744] sm:text-[1.2rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[#5f7286]">
                      {service.body}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#0f2744] transition hover:gap-3"
                    >
                      View Service
                      <span aria-hidden="true" className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
