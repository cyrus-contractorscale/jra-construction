"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SiteConfig } from "@/lib/config";

/* ─── Scroll-triggered fade-in + slide-up ───────────────────────────────── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── CTA Button — rounded, black, hover lift ───────────────────────────── */
function Cta({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const base =
    "inline-flex items-center gap-2.5 rounded-xl px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] transition-all duration-200 active:scale-[0.97]";
  const styles = {
    dark:  `${base} bg-[#293a57] text-white hover:bg-[#0d65b5] hover:shadow-[0_10px_36px_rgba(18,120,206,0.45)] hover:-translate-y-[3px]`,
    light: `${base} bg-white text-black hover:bg-zinc-100 hover:shadow-[0_10px_36px_rgba(255,255,255,0.2)] hover:-translate-y-[3px]`,
  };
  return (
    <Link href="/result">
      <button className={styles[variant]}>
        Get My Instant Estimate Result Now
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </Link>
  );
}

/* ─── Full-width section with 1200px inner ──────────────────────────────── */
function Section({
  children,
  className = "",
  innerClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className={`mx-auto max-w-[1200px] px-6 sm:px-10 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/* ─── Eyebrow ────────────────────────────────────────────────────────────── */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-white/45" : "text-zinc-400"}`}>
      {children}
    </p>
  );
}

/* ─── Section heading — 48px ─────────────────────────────────────────────── */
function H2({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-heading text-[34px] sm:text-[48px] font-black leading-[1.12] tracking-tight ${
        light ? "text-white" : "text-black"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN
══════════════════════════════════════════════════════════ */
export function ConsultContent({ site }: { site: SiteConfig }) {
  const year = site.copyrightYear;

  return (
    <div className="font-sans text-black antialiased">

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/Consult-Background.png"
          alt="Beautiful home interior"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/80" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-16 sm:py-28 lg:px-24 lg:py-36 text-center text-white">

          {/* Logo — use light version on dark hero */}
          <div className="mb-7 flex justify-center">
            <Image
              src={`/${site.logoFileLight}`}
              alt="Company logo"
              width={200}
              height={67}
              className="h-auto w-auto max-h-[80px] max-w-[200px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              style={{ height: "auto" }}
              priority
            />
          </div>

          {/* Tagline pill */}
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
              Your FREE Resource will arrive in your inbox in about 5 minutes
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading mx-auto text-[32px] sm:text-[38px] lg:text-[42px] font-black uppercase leading-[1.15] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Don&apos;t Roll the Dice with Your<br /> Building or Renovation Project
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-2xl text-[17px] sm:text-[20px] leading-[1.7] text-white/80">
            Save Tens of Thousands of Dollars with a{" "}
            <span className="font-bold text-white underline underline-offset-4">
              FREE 90-Minute Consult
            </span>{" "}
            with a Qualified and Experienced Builder
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Cta variant="light" />
          </div>

          {/* Author */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-white/20 shrink-0">
              <Image
                src={`/${site.directorPhoto}`}
                alt={site.directorName}
                width={56}
                height={56}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">From</p>
              <p className="text-sm font-bold text-white">{site.directorName}</p>
              <p className="text-[11px] text-white/45">{site.directorTitle}</p>
            </div>
          </div>

          {/* ─ HURRY! — red warning ─ */}
          <div className="mt-12 inline-block rounded-xl border border-red-500/40 bg-red-600/15 px-3 py-3 backdrop-blur-sm">
            <p className="text-sm sm:text-base leading-[1.7] text-white/90">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-white mr-2">
                ⚠ HURRY!
              </span>
              <span className="font-semibold underline underline-offset-2">
                John saved $50,000 with one 90-minute meeting
              </span>{" "}
              &amp; a rare insight shared about exterior cladding materials.
            </p>
          </div>
        </div>
      </section>

      {/* ══ THE PROBLEM ══════════════════════════════════════════════════════ */}
      <Section className="bg-white py-20 sm:py-28" innerClassName="max-w-[820px]">
        <FadeIn>
        <Eyebrow>The Problem</Eyebrow>

        {/* Heading with red italic highlight on "a serious gamble" */}
        <H2 className="mt-4">
          If an architect draws plans before you get a builder&apos;s quote,
          you&apos;re taking{" "}
          <span className="relative inline-block">
            <em className="not-italic text-red-600">a serious gamble.</em>
            {/* Red underline stroke */}
            <span
              className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-red-500"
              aria-hidden="true"
            />
          </span>
        </H2>

        <p className="mt-8 text-[17px] leading-[1.85] text-zinc-600">
          You&apos;ll pay architects a hefty fee for a design only to hear builders tell
          you your project is{" "}
          <strong className="text-black">25%, 50% or DOUBLE the price</strong>, above
          your anticipated budget.
        </p>

        <p className="mt-5 text-[18px] font-bold leading-[1.8] text-black">
          You&apos;ll be stuck between a rock and a hard place.
        </p>

        {/* Pain bullet points — plain left-bordered list */}
        <ul className="mt-7 space-y-4">
          {[
            <>You&apos;ll either have to spend tens (if not hundreds) of thousands more than you wanted to&hellip;</>,
            <>Or you&apos;ll have to go back to the drawing board and pay your designer to have a less expensive project designed&hellip;</>,
            <>Or you may have to abandon the project altogether and lose the{" "}
              <strong className="text-red-600">$10,000–$50,000</strong>{" "}
              you paid for an architect to design your new home.</>,
          ].map((text, i) => (
            <li key={i} className="flex gap-4 border-l-4 border-zinc-300 pl-5 py-1">
              <span className="text-[16px] leading-[1.85] text-zinc-700">{text}</span>
            </li>
          ))}
        </ul>

        {/* ─ "Due to rising material costs" — YELLOW warning ─ */}
        <div className="mt-8 flex gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-5 py-4">
          <svg className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          <p className="text-[16px] leading-[1.8] text-yellow-900">
            <strong>Due to rising material costs</strong>, this is a predicament
            many people today are finding themselves in.
          </p>
        </div>
        </FadeIn>
      </Section>

      {/* ══ THE OLD WAY ══════════════════════════════════════════════════════ */}
      <Section className="bg-zinc-50 py-20 sm:py-28">
        <FadeIn>
        <div className="mx-auto max-w-[860px]">
          <div className="text-center">
            <Eyebrow>The Old Way</Eyebrow>
            <H2 className="mt-4">
              You Can Easily Fall Into the Same Trap…{" "}
              <span className="text-zinc-400">Or…</span>
            </H2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-xl">
            <Image
              src="/3a549b5a-fb65-437b-8542-50d3c12481da.webp"
              alt="The Old Way diagram"
              width={860}
              height={440}
              className="w-full object-contain bg-white"
            />
          </div>

          <div className="mt-14 flex justify-center">
            <Cta variant="dark" />
          </div>
        </div>
        </FadeIn>
      </Section>

      {/* ══ COST BREAKDOWN ═══════════════════════════════════════════════════ */}
      <Section className="bg-white py-20 sm:py-28" innerClassName="max-w-[820px]">
        <FadeIn>
        <Eyebrow>The Cost of Inaction</Eyebrow>
        <H2 className="mt-4">
          Do You Want to Pay Tens of Thousands for a{" "}
          <span className="text-zinc-400 italic">&ldquo;Paper House&rdquo;?</span>
        </H2>

        <p className="mt-7 text-[17px] leading-[1.85] text-zinc-600">
          Architects charge a small fortune to create a design for you. However,
          it&apos;s chump change compared to what you have to pay to build it.
        </p>

        <h3 className="mt-10 font-heading text-[14px] font-extrabold uppercase tracking-[0.18em] text-zinc-400">
          A typical build involves:
        </h3>

        {/* Green checkmark grid */}
        <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Project management fees",
            "Building permits",
            "Roofing",
            "Windows and doors",
            "Plumbing",
            "Electrical",
            "Flooring",
            "Lighting",
            "Carpenters",
          ].map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-[14px] font-semibold text-zinc-700 transition-all duration-200 hover:border-zinc-400 hover:bg-white hover:shadow-md"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <svg className="h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[17px] leading-[1.85] text-zinc-600">
          Because building designers and architects have little knowledge of these
          costs, they often underestimate what it takes to build a new home by{" "}
          <strong className="text-black">50–300%</strong>.
        </p>

        {/* ─ 80%+ — RED warning card ─ */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-red-200 bg-red-50 px-8 py-10 text-center shadow-xl">
          <p className="font-heading text-[80px] sm:text-[100px] font-black leading-none text-red-600">
            80%+
          </p>
          <p className="mt-3 font-heading text-xl sm:text-2xl font-black text-red-900">
            of designs never get built.
          </p>
          <div className="mx-auto mt-3 h-px w-16 bg-red-300" />
          <p className="mt-5 text-[15px] leading-[1.85] text-red-800">
            <strong>Yes, you read this right.</strong> A whopping{" "}
            <strong>4 out of 5 people</strong> are unable to build their home or
            extension because they hadn&apos;t consulted a builder first to find out
            how much it would cost.
          </p>
          <div className="mt-6 rounded-xl border border-red-200 bg-white/70 px-5 py-5">
            <p className="text-[15px] italic leading-[1.8] text-red-900">
              Instead of having their dream home, they&apos;re left with a{" "}
              <span className="font-bold not-italic">&ldquo;paper house&rdquo;</span>{" "}
              — an expensive drawing of what their home could have been.
            </p>
          </div>
        </div>
        </FadeIn>
      </Section>

      {/* ══ MATERIAL COSTS ═══════════════════════════════════════════════════ */}
      <Section className="bg-black py-20 sm:py-28">
        <FadeIn>
        <div className="text-center">
          <Eyebrow light>Market Reality</Eyebrow>
          <H2 className="mt-4" light>
            The Price of Materials Is Soaring —
            <span className="block text-white/55 mt-1">
              And It&apos;s Not Slowing Down.
            </span>
          </H2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { img: "/72060f5d-672b-45ed-b28d-3eac7cb76418.webp", caption: "US wood prices surge to record level", label: "Chart 1" },
            { img: "/723e7034-4234-4482-aac8-9e5da43fe6a9.webp", caption: "NZ building material price index", label: "Chart 2" },
          ].map(({ img, caption, label }) => (
            <div key={label} className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image src={img} alt={caption} width={580} height={380} className="w-full object-cover" />
              <div className="bg-white px-4 py-3 flex items-center gap-2">
                <span className="shrink-0 rounded-lg bg-black px-2 py-0.5 text-[10px] font-black uppercase text-white">
                  {label}
                </span>
                <span className="text-[12px] font-semibold text-zinc-600">{caption}</span>
              </div>
            </div>
          ))}
        </div>
        </FadeIn>
      </Section>

      {/* ══ ADDITIONS & PROBLEM PROJECT ══════════════════════════════════════ */}
      <Section className="bg-white py-20 sm:py-28" innerClassName="max-w-[820px]">
        <FadeIn>
        <Eyebrow>Additions &amp; Extensions</Eyebrow>
        <H2 className="mt-4">It&apos;s A Similar Story For Additions</H2>

        <p className="mt-7 text-[17px] leading-[1.85] text-zinc-600">
          Building an addition to your home can cost from{" "}
          <strong className="text-black">$90,000 to $800,000</strong>{" "}
          depending on the type of work and any complexities involved.
        </p>
        <p className="mt-5 text-[17px] leading-[1.85] text-zinc-600">
          If you want to add a kitchen or bathroom, the plumbing, ventilation and
          extra building permits can throw a spanner in the works — making estimating
          the price per m² tricky to predict.
        </p>

        <div className="mt-14 border-t border-zinc-100 pt-14">
          <Eyebrow>The Risk</Eyebrow>
          <H2 className="mt-4">
            Your Dream Home Can Quickly Turn into a Never-Ending
            &ldquo;Problem Project&rdquo;
          </H2>

          <p className="mt-7 text-[17px] leading-[1.85] text-zinc-600">
            Escalating costs can cause you to go over budget by tens of thousands. You
            may have to wait months, even years, to complete the construction. It
            consumes your life.
          </p>

          <blockquote className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 px-7 py-6">
            <p className="font-heading text-[19px] italic leading-[1.7] text-zinc-800">
              &ldquo;It&apos;s the last thing you think of when your head hits the pillow
              each night and it&apos;s the first thing you think of each morning.&rdquo;
            </p>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-zinc-300" />
          </blockquote>
        </div>

        <div className="mt-14 flex justify-center">
          <Cta variant="dark" />
        </div>
        </FadeIn>
      </Section>

      {/* ══ TAGLINE DIVIDER ══════════════════════════════════════════════════ */}
      <section className="w-full bg-black py-14 sm:py-20">
        <FadeIn>
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 text-center">
          <p className="font-heading text-[22px] sm:text-[30px] md:text-[36px] font-black uppercase tracking-tight text-white leading-snug">
            Designers Show You What Your Dream House Could Look Like&hellip;{" "}
            <br className="hidden sm:block" />
            <span className="text-white/45">Builders Make Your Dream Come True.</span>
          </p>
        </div>
        </FadeIn>
      </section>

      {/* ══ THE NEW WAY ══════════════════════════════════════════════════════ */}
      <Section className="bg-zinc-50 py-20 sm:py-28">
        <FadeIn>
        <div className="mx-auto max-w-[860px]">
          <div className="text-center">
            <Eyebrow>The New Way</Eyebrow>
            <H2 className="mt-4">Clarity. Accuracy. Confidence.</H2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-xl">
            <Image
              src="/fa901b18-4aa2-4ec7-a66b-4626220e7b3a.webp"
              alt="The New Way diagram"
              width={860}
              height={440}
              className="w-full object-contain bg-white"
            />
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Clarity on the entire process from day one.",
              "Accurate budget ranges before committing financially.",
              "Decades of experience in building and modifying homes.",
              "Predicting costs of every feature with precision.",
              "Identifying difficult site implications early.",
              "Recommendations on where to cut back to stay in budget.",
            ].map((b, i) => (
              <li
                key={b}
                className="group flex items-start gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:border-green-400 hover:shadow-md"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-500 text-white transition-colors group-hover:bg-green-600">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[14px] font-medium leading-[1.65] text-zinc-800">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>
      </Section>

      {/* ══ MEET THE DIRECTOR ════════════════════════════════════════════════ */}
      <Section className="bg-white py-20 sm:py-28">
        <FadeIn>
        <div className="mx-auto max-w-[860px]">
          <div className="flex flex-col sm:flex-row gap-10 items-start">
            <div className="mx-auto sm:mx-0 shrink-0">
              <div className="h-36 w-36 rounded-full overflow-hidden ring-4 ring-zinc-200 ring-offset-4">
                <Image
                  src={`/${site.directorPhoto}`}
                  alt={site.directorName}
                  width={144}
                  height={144}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <Eyebrow>Meet the Director</Eyebrow>
              <h3 className="mt-2 font-heading text-[28px] sm:text-[36px] font-black text-black">
                {site.directorName}
              </h3>
              <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {site.directorTitle}
              </p>
              <p className="mt-6 text-[16px] leading-[1.9] text-zinc-600">
                {site.name} aims to revolutionise home building in NZ. Our vision is to
                modernise outdated construction methods using Building Information
                Modelling <strong className="text-black">(BIM)</strong>.
              </p>
              <p className="mt-4 text-[16px] leading-[1.9] text-zinc-600">
                We are dedicated to transforming the residential construction industry,
                ensuring better outcomes and greater customer satisfaction. Join us in
                creating real change, one family home at a time.
              </p>
              <p className="mt-4 text-[16px] leading-[1.9] text-zinc-600">
                We use BIM to improve accuracy, reduce costs, and avoid problems before
                they happen — enhancing your building&apos;s longevity and functionality.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Cta variant="dark" />
          </div>
        </div>
        </FadeIn>
      </Section>

      {/* ══ FREE RESOURCES ═══════════════════════════════════════════════════ */}
      <Section className="bg-zinc-50 py-20 sm:py-28">
        <FadeIn>
        <div className="mx-auto max-w-[860px]">
          <div className="text-center">
            <Eyebrow>Included With Every Consult</Eyebrow>
            <H2 className="mt-4">Get 2 FREE Resources</H2>
            <p className="mt-5 text-[17px] leading-[1.75] text-zinc-500">
              When you book a consult, you&apos;ll also receive 2 bonus resources to
              guide your entire construction project.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                num: "1", title: "Home Building Planner",
                desc: "Our New Home Build Planner guides you through your entire new home journey — from searching inspiration and organising finances, to selecting your floor plan, preparing for selections, organising handover and moving in.",
                img: "/3e208172-53ee-4722-9c20-3c6dda7abafd.webp",
                imgAlt: "Home Building Planner booklet",
              },
              {
                num: "2", title: "Your Selections Checklist",
                desc: "This lists all the important parts of your project in one place — so you can tick the materials and fixtures YOU WANT before the house is built.",
                img: "/5899c9aa-b7c3-4274-a222-a94d15ba0376.webp",
                imgAlt: "Selections checklist on a clipboard",
              },
            ].map(({ num, title, desc, img, imgAlt }) => (
              <div
                key={num}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1.5"
              >
                <div className="relative h-60 overflow-hidden bg-zinc-100">
                  <Image
                    src={img} alt={imgAlt} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    <svg className="h-2.5 w-2.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Included in your consult
                  </span>
                  <h3 className="mt-4 font-heading text-[20px] font-black text-black">
                    {num}. {title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.85] text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Cta variant="dark" />
          </div>
        </div>
        </FadeIn>
      </Section>

      {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-black py-24 sm:py-32">
        <FadeIn>
        <div className="relative z-10 mx-auto max-w-[780px] px-6 sm:px-10 text-center text-white">
          <Eyebrow light>Limited Availability</Eyebrow>
          <H2 className="mt-4 text-[32px] sm:text-[46px] text-white leading-[1.12]" light>
            Avoid Getting Stuck With a House of Horrors —
            <span className="block text-white/55 mt-1">
              Make Your Dream Home Come True
            </span>
          </H2>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-[12px] font-semibold text-white/55">
            Free Building Consult — Valued at $995
          </div>

          <blockquote className="mt-10 rounded-2xl border border-white/10 bg-white/5 px-7 py-6 text-left">
            <p className="font-heading text-[17px] italic font-semibold leading-[1.8] text-white/75">
              &ldquo;Do you want to take the doubt and uncertainty out of your
              construction? And instead, have financial security and peace of mind
              every step of the process until the final brick is laid?&rdquo;
            </p>
          </blockquote>

          <p className="mt-8 text-[16px] leading-[1.9] text-white/60">
            Then you can have a{" "}
            <strong className="text-white">FREE 90-minute construction consult</strong>.
            One of our team will go to your site, walk around the property with you and
            advise you on where things should go, what it should look like, and other
            important details.
          </p>

          <p className="mt-5 text-[14px] font-semibold text-white/65">
            As we only work with select clients, there are only{" "}
            <span className="text-white underline underline-offset-2">
              limited slots available per month
            </span>.
          </p>

          <div className="mt-10">
            <Cta variant="light" />
          </div>

          <p className="mt-5 text-[12px] text-white/25">
            Schedule yours now and have your dream home without facing financial
            hardship and despair.
          </p>
        </div>
        </FadeIn>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer className="bg-[#080808] py-8 text-center">
        <p className="text-[14px] text-white/35">
          &copy; Copyright {year} | {site.name} | All Rights Reserved
        </p>
        <p className="mt-1 text-[14px] text-white/25">
          Website &amp; Advertising by ContractorScale.com
        </p>
      </footer>
    </div>
  );
}
