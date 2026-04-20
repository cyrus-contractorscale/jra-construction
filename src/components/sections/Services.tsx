"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "Custom Homes",
    category: "CUSTOM HOMES",
    body: "Want to build a new home? We take you from concept to completion, building homes that perfectly fit your lifestyle and needs.",
    image: "/custom-home-services.webp",
  },
  {
    title: "Home Renovations",
    category: "RENOVATIONS",
    body: "Time to update your home? Our home renovation services refresh and renew every part of your space, making your home look and feel brand new.",
    image: "/home-renovation-services.webp",
  },
  {
    title: "Home Extensions",
    category: "EXTENSIONS",
    body: "Feeling cramped in your current home? Our home extension services add space seamlessly, giving you the extra room you need without the hassle of relocating.",
    image: "/home-extension-services.jpg",
  },
  {
    title: "Kitchen Renovations",
    category: "KITCHENS",
    body: "Does your kitchen need an upgrade? Our kitchen renovation services transform your kitchen into a space that is both functional and stylish, making it the true heart of your home.",
    image: "/kitchen-services.webp",
  },
  {
    title: "Quantity Surveying",
    category: "QS SERVICES",
    body: "Maximize your projects value and understand the true cost before getting started.",
    image: "/quantity_surveying-services.jpg",
  },
  {
    title: "Bathroom Renovations",
    category: "BATHROOM",
    body: "Ready for a new bathroom? Our bathroom renovation services turn your bathroom into a relaxing retreat, enhancing both its comfort and style.",
    image: "/bathroom-services.webp",
  },
];

export function Services() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollServices(direction: "next" | "prev") {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    const styles = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const amount = firstCard.getBoundingClientRect().width + gap;
    scroller.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#fbfcfd] bg-cover bg-center bg-no-repeat py-16 sm:py-20"
      style={{ backgroundImage: "url('/services-section-bg.png')" }}
    >
      <Container className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-[70%_30%] lg:items-end">
          <AnimateOnScroll variant="fade-up" className="w-full space-y-4">
            <p className="section-tab">
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
              Services
            </p>
            <h2 className="w-full font-[ui-sans-serif,system-ui,sans-serif] text-[42px] font-extrabold leading-[1.03] tracking-tight text-[#0f2744] sm:text-[52px]">
              Building Solutions for Every Need
            </h2>
            <p className="max-w-xl text-[16px] text-[#4a6075]">
              From custom homes to remodels and additions, we deliver inspector-backed construction
              that ensures quality, safety, and lasting value for your family.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={150} className="flex items-center justify-start gap-3 lg:justify-end">
            <button
              type="button"
              className="h-[42px] rounded-sm border border-[#d9e2eb] bg-white px-5 text-[14px] font-semibold text-[#223750] transition hover:bg-zinc-50"
            >
              View All Services
            </button>
            <button
              type="button"
              onClick={() => scrollServices("prev")}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-sm border border-[#d9e2eb] bg-white text-[#223750] transition hover:bg-zinc-50"
              aria-label="Previous services"
            >
              <span className="block text-[16px] leading-none">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollServices("next")}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-sm border border-[#d9e2eb] bg-white text-[#223750] transition hover:bg-zinc-50"
              aria-label="Next services"
            >
              <span className="block text-[16px] leading-none">→</span>
            </button>
          </AnimateOnScroll>
        </div>

        <div
          ref={scrollerRef}
          className="-mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-8 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              variant="fade-up"
              delay={index * 90}
              className="group min-w-[86%] snap-start sm:min-w-[64%] lg:min-w-[calc((100%-3rem)/3)]"
            >
              <article className="h-full rounded-[20px] border border-transparent bg-white shadow-[0_3px_10px_#f3f4f6] transition duration-300 hover:border-[#0f2744]/8 hover:shadow-[0_18px_38px_rgba(15,39,68,0.2)]">
                <div className="relative h-[210px] w-full overflow-hidden rounded-t-[20px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="font-[ui-sans-serif,system-ui,sans-serif] text-[28px] font-extrabold leading-tight text-[#0f2744]">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-[#3f5367]">{service.body}</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0f2744]">
                    View Details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
