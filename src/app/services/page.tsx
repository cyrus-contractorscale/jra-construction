"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Custom Homes",
    body: "Want to build a new home? We take you from concept to completion, building homes that perfectly fit your lifestyle and needs.",
    image:
      "/custom-home-services.webp",
  },
  {
    title: "Home Renovations",
    body: "Time to update your home? Our home renovation services refresh and renew every part of your space, making your home look and feel brand new.",
    image:
          "/home-renovation-services.webp",
  },
  {
    title: "Home Extensions",
    body: "Feeling cramped in your current home? Our home extension services add space seamlessly, giving you the extra room you need without the hassle of relocating.",
    image:
          "/home-extension-services.jpg",
  },
  {
    title: "Kitchen Renovations",
    body: "Does your kitchen need an upgrade? Our kitchen renovation services transform your kitchen into a space that’s both functional and stylish, making it the true heart of your home.",
    image:
          "/kitchen-services.webp",
  },
  {
    title: "Quantity Surveying",
    body: "Maximize your projects value and understand the true cost before getting started",
    image:
          "/quantity_surveying-services.jpg",
  },
  {
    title: "Bathroom Renovations",
    body: "Ready for a new bathroom? Our bathroom renovation services turn your bathroom into a relaxing retreat, enhancing both its comfort and style.",
    image:
          "/bathroom-services.webp", // Placeholder for Bathroom Renovations
  },
  {
    title: "Granny Flats",
    body: "Granny flats are quickly becoming a popular solution for Auckland homeowners who need more usable space without moving or doing a major renovation.",
    image:
          "/granny-flats_services.webp", // Placeholder
  },
  {
    title: "Minor Dwellings",
    body: "These dwellings are becoming a popular choice across Auckland for homeowners who want to support extended family, create space for adult children, or provide a private unit for guests.",
    image:
          "/minor-dwelling-services.webp", // Placeholder
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
        <Container className="relative z-10 text-center">
          <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Services
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
        <Container className="max-w-[1200px] text-center">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#0f2744] sm:text-5xl">
            Explore Our Comprehensive Building Services
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#4d6277]">
            From bespoke custom homes to meticulous renovations and essential quantity surveying, JRA Construction offers a full spectrum of services tailored to your needs.
          </p>
        </Container>
        <Container className="max-w-[1200px] mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(15,39,68,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,39,68,0.1)]"
            >
              <div className="relative block aspect-[5/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                <h3 className="mt-3 text-[1.05rem] font-bold leading-snug text-[#0f2744] sm:text-[1.2rem]">
                  {service.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[#5f7286]">
                  {service.body}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#0f2744] transition hover:gap-2"
                >
                  View Details
                  <span aria-hidden="true" className="text-lg leading-none">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
