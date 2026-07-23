 "use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useEffect, useRef, useState } from "react";

const heroSlides = ["/jra-slider-1.png", "/jra-slider-2.png"];
const awardLogos = [
  { src: "/awards/reverelogo.png", alt: "reverelogo" },
  { src: "/awards/logo-silver.png", alt: "logo silver" },
  { src: "/awards/lgo-gold.png", alt: "lgo gold" },
  { src: "/awards/lgo-regional.png", alt: "lgo regional" },
  { src: "/awards/logo-silver-2022.png", alt: "logo silver 2022" },
  { src: "/awards/logo-top100.png", alt: "logo top100" },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "NAaXgHLW51Q";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling on html
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVideoOpen]);

  return (
        <section
            id="top"
            ref={heroRef}
            className="relative flex min-h-screen items-center overflow-hidden bg-zinc-900"
        >
            {heroSlides.map((slide, index) => (
                <Image
                    key={slide}
                    src={slide}
                    alt={`JRA Construction project showcase ${index + 1}`}
                    fill
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-[1300ms] ease-in-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
                    sizes="100vw"
                />
            ))}
            <div className="absolute inset-0 bg-zinc-950/55" />

            <Container className="relative z-10 py-28 sm:py-36 lg:py-44">
                <div className="w-full space-y-6 text-center text-white">
                    <p className="w-full text-[12px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-[13px] sm:whitespace-nowrap">
                        Home Builders in Auckland for Custom Homes, Renovations and Extensions
                    </p>
                    <h1 className="w-full font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold uppercase leading-[1.05] tracking-tight [text-shadow:0_3px_18px_rgba(0,0,0,0.38)] sm:text-5xl lg:text-[72px]">
                        Build your dream home
                        <br />
                        with JRA Construction
                    </h1>
                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
                        Planning a custom home, renovation, or home extension in Auckland? JRA Construction
                        combines licensed building expertise with in-house quantity surveying, fixed-price
                        clarity, and hands-on project management so you can build with confidence from
                        concept through completion.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
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

            <Container className="pointer-events-none absolute inset-x-0 bottom-6 z-20">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
                    {/* Left: Play Video */}
                    <button
                        type="button"
                        onClick={() => setIsVideoOpen(true)}
                        className="pointer-events-auto inline-flex items-center gap-4 rounded-full border border-white/35 bg-white/15 px-5 py-3 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white/20"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[16px] text-slate-700">
                            ▷
                        </span>
                        <span className="text-[14px] font-semibold leading-none">Play Video</span>
                    </button>

                    {/* Right: award logos */}
                    <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-4">
                        {awardLogos.map((logo) => (
                            <Image
                                key={logo.src}
                                src={logo.src}
                                alt={logo.alt}
                                width={80}
                                height={80}
                                className="h-14 w-auto object-contain drop-shadow-lg sm:h-20"
                            />
                        ))}
                    </div>
                </div>
            </Container>

            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl rounded-lg bg-black p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-0 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800"
                            onClick={() => setIsVideoOpen(false)}
                        >
                            &times;
                        </button>
                        <div className="relative pb-[56.25%]" style={{ height: 0 }}>
                            <iframe
                                className="absolute inset-0 h-full w-full rounded-md"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}