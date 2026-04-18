"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" }, // Assuming a #projects anchor will be added later
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  return (
    <div className="fixed inset-x-0 top-0 z-[999] border-b border-white/10 bg-zinc-950/45 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between text-white lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden items-center gap-6 justify-self-start text-[14px] font-semibold tracking-wider lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="block lg:justify-self-center">
          <Image
            src="/jra-logo-white-transparent.png"
            alt="JRA Construction logo"
            width={130}
            height={54}
            priority
            className="h-auto w-[130px] object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/35 text-white transition hover:bg-white/10 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Link
          href="#contact"
          className="hidden justify-self-end rounded-full border border-white/35 px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-white/10 lg:inline-flex lg:px-6"
        >
          Online Estimate
        </Link>
      </Container>

      <div
        className={`fixed inset-0 z-[998] bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <aside
        className={`fixed right-0 top-0 z-[1000] h-screen w-[82%] max-w-[340px] border-l border-white/10 bg-[#0f1724] px-6 pb-8 pt-5 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-[0.18em] text-white/70">MENU</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-xl leading-none text-white transition hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <nav className="mt-7 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg border border-white/10 px-4 py-3 text-[15px] font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
