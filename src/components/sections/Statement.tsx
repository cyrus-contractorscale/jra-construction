"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

const fixedHeadingStart = "Build Right Contractors";
const revealLineOne = " in";
const revealLineTwo = "Auckland By JRA";
const revealLineThree = "Construction";
const revealText = `${revealLineOne}${revealLineTwo}${revealLineThree}`;

export function Statement() {
  const [revealedLetters, setRevealedLetters] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartY = useRef<number | null>(null);
  const totalRevealLetters = revealText.length;

  const firstLineReveal = useMemo(() => {
    const lineCount = Math.min(revealedLetters, revealLineOne.length);
    return {
      visible: revealLineOne.slice(0, lineCount),
      hidden: revealLineOne.slice(lineCount),
    };
  }, [revealedLetters]);

  const secondLineReveal = useMemo(() => {
    const secondLineCount = Math.max(0, revealedLetters - revealLineOne.length);
    const clamped = Math.min(secondLineCount, revealLineTwo.length);
    return {
      visible: revealLineTwo.slice(0, clamped),
      hidden: revealLineTwo.slice(clamped),
    };
  }, [revealedLetters]);

  const thirdLineReveal = useMemo(() => {
    const consumed = revealLineOne.length + revealLineTwo.length;
    const thirdLineCount = Math.max(0, revealedLetters - consumed);
    const clamped = Math.min(thirdLineCount, revealLineThree.length);
    return {
      visible: revealLineThree.slice(0, clamped),
      hidden: revealLineThree.slice(clamped),
    };
  }, [revealedLetters]);

  useEffect(() => {
    function canControlReveal() {
      const section = sectionRef.current;
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.35;
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
      const shouldLockUp = scrollingUp && revealedLetters > 0;

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
      const shouldLockUp = swipingUp && revealedLetters > 0;

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
      const shouldLockUp = isUp && revealedLetters > 0;
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
    <section ref={sectionRef} className="bg-white py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[35%_65%] lg:items-start lg:gap-16">
          <div className="max-w-sm space-y-5">
            <h3 className="text-[24px] font-extrabold leading-[1.1] tracking-tight text-[#102539]">
              We Are Licensed & Certified
              <br />
              Home Builders in Auckland
            </h3>
            <p className="text-[18px] leading-[1.62] text-[#516577]">
              As leading home builders in Auckland, we ensure quality construction, compliance with
              local codes, and beautifully designed homes. Our expert team delivers durability and
              value, enhancing aesthetics and ensuring safety.
            </p>
          </div>

          <div className="max-w-full pt-1">
            <h2 className="max-w-[800px] font-[ui-sans-serif,system-ui,sans-serif] text-[46px] font-extrabold leading-[1.05] tracking-tight text-[#102539] sm:text-[54px] lg:text-[68px]">
              {fixedHeadingStart}
              <span className="whitespace-pre">{firstLineReveal.visible}</span>
              <span className="whitespace-pre text-[#102539]/30">{firstLineReveal.hidden}</span>
              <br />
              <span className="whitespace-pre">{secondLineReveal.visible}</span>
              <span className="whitespace-pre text-[#102539]/30">{secondLineReveal.hidden}</span>
              <br />
              <span className="whitespace-pre">{thirdLineReveal.visible}</span>
              <span className="whitespace-pre text-[#102539]/30">{thirdLineReveal.hidden}</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 border-b border-zinc-200" />
      </Container>
    </section>
  );
}
