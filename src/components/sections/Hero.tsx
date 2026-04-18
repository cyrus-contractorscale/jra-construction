 "use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useEffect, useMemo, useRef, useState } from "react";

const heroSlides = ["/jra-slider-1.png", "/jra-slider-2.png"];
const baseHeading = "Build Your Dream";
const fadedFirstLine = " Home";
const fadedSecondLine = "With JRA Construction";
const revealText = `${fadedFirstLine}${fadedSecondLine}`;
const customerImages = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const touchStartY = useRef<number | null>(null);
  const totalRevealLetters = revealText.length;

  const firstLineReveal = useMemo(() => {
    const lineCount = Math.min(revealedLetters, fadedFirstLine.length);
    return {
      visible: fadedFirstLine.slice(0, lineCount),
      hidden: fadedFirstLine.slice(lineCount),
    };
  }, [revealedLetters]);

  const secondLineReveal = useMemo(() => {
    const secondLineCount = Math.max(0, revealedLetters - fadedFirstLine.length);
    const clamped = Math.min(secondLineCount, fadedSecondLine.length);
    return {
      visible: fadedSecondLine.slice(0, clamped),
      hidden: fadedSecondLine.slice(clamped),
    };
  }, [revealedLetters]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function canControlReveal() {
      const hero = heroRef.current;
      if (!hero) return false;
      const rect = hero.getBoundingClientRect();
      return rect.top <= 4 && rect.bottom > window.innerHeight * 0.55;
    }

    function updateRevealFromDelta(deltaY: number) {
      const step = Math.max(1, Math.round(Math.abs(deltaY) / 45));
      setRevealedLetters((prev) => {
        if (deltaY > 0) {
          return Math.min(totalRevealLetters, prev + step);
        }
        if (deltaY < 0) {
          return Math.max(0, prev - step);
        }
        return prev;
      });
    }

    function onWheel(event: WheelEvent) {
      if (!canControlReveal()) return;
      const delta = event.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;
      const shouldLockDown = scrollingDown && revealedLetters < totalRevealLetters;
      const shouldLockUp = scrollingUp && revealedLetters > 0 && window.scrollY <= 8;

      if (!shouldLockDown && !shouldLockUp) return;
      event.preventDefault();
      updateRevealFromDelta(delta);
    }

    function onTouchStart(event: TouchEvent) {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    }

    function onTouchMove(event: TouchEvent) {
      if (!canControlReveal() || touchStartY.current === null) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - currentY;
      const swipingDown = delta > 0;
      const swipingUp = delta < 0;
      const shouldLockDown = swipingDown && revealedLetters < totalRevealLetters;
      const shouldLockUp = swipingUp && revealedLetters > 0 && window.scrollY <= 8;

      if (!shouldLockDown && !shouldLockUp) return;
      event.preventDefault();
      updateRevealFromDelta(delta);
      touchStartY.current = currentY;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!canControlReveal()) return;
      const downKeys = ["ArrowDown", "PageDown", " ", "Spacebar"];
      const upKeys = ["ArrowUp", "PageUp"];
      const isDown = downKeys.includes(event.key);
      const isUp = upKeys.includes(event.key);
      if (!isDown && !isUp) return;

      const shouldLockDown = isDown && revealedLetters < totalRevealLetters;
      const shouldLockUp = isUp && revealedLetters > 0 && window.scrollY <= 8;
      if (!shouldLockDown && !shouldLockUp) return;

      event.preventDefault();
      updateRevealFromDelta(isDown ? 55 : -55);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [revealedLetters, totalRevealLetters]);

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
          <h1 className="w-full font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold uppercase leading-[1.05] tracking-tight [text-shadow:0_3px_18px_rgba(0,0,0,0.38)] sm:text-5xl lg:text-[72px]">
            {baseHeading}
            <span className="whitespace-pre transition-opacity duration-150">
              {firstLineReveal.visible}
            </span>
            <span className="whitespace-pre text-white/30 transition-opacity duration-150">
              {firstLineReveal.hidden}
            </span>
            <br />
            <span className="whitespace-pre transition-opacity duration-150">
              {secondLineReveal.visible}
            </span>
            <span className="whitespace-pre text-white/30 transition-opacity duration-150">
              {secondLineReveal.hidden}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Our quantity surveying services ensure your budget is well looked after. Reputable
            builders in Auckland blend expert craftsmanship with precise surveying, ensuring your
            dream home is built flawlessly within budget.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
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
        </div>
      </Container>

      <Container className="pointer-events-none absolute inset-x-0 bottom-6 z-20">
        <div className="flex items-end justify-between gap-6">
          <div className="pointer-events-auto text-white">
            <div className="flex items-center -space-x-2.5">
              {customerImages.map((src, index) => (
                <div
                  key={src}
                  className="relative h-14 w-14 overflow-hidden rounded-full border-[3px] border-white shadow-lg shadow-black/30"
                >
                  <Image
                    src={src}
                    alt={`Satisfied customer ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 text-[18px] font-extrabold leading-none tracking-tight">7K+</p>
            <p className="mt-1 text-[12px] font-medium tracking-wide text-white/95">
              Satisfied Customers
            </p>
          </div>

          <button
            type="button"
            className="pointer-events-auto inline-flex items-center gap-4 rounded-full border border-white/35 bg-white/15 px-5 py-3 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white/20"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[16px] text-slate-700">
              ▷
            </span>
            <span className="text-[14px] font-semibold leading-none">Play Video</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
