import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* Shared sections used across all 10 service pages — mirrors the live
   jraconstruction.co.nz service-page template (videos, e-book download,
   ways to connect, featured gallery, preliminary planning CTA). */

const PHONE_DISPLAY = "021 276 9971";
const PHONE_TEL = "tel:+64212769971";
const BOOKING_URL = "https://go.jraconstruction.co.nz/book";

/* ── Professional monochrome line icon ────────────────────────────── */
export function ServiceLineIcon({
  index = 0,
  className = "",
}: {
  index?: number;
  className?: string;
}) {
  const paths = [
    <><path d="M4 18V9m5 9V5m5 13v-7m5 7V3" /><path d="M3 21h18" /></>,
    <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10M9 20v-6h6v6" /></>,
    <><path d="M20 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.6V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /></>,
    <><path d="M6 3h9l4 4v14H6Z" /><path d="M14 3v5h5M9 13h6m-6 4h6" /></>,
    <><circle cx="12" cy="10" r="3" /><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /></>,
    <><path d="m5 12 4 4L19 6" /><circle cx="12" cy="12" r="10" /></>,
    <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="m21 15-5-5L5 19" /></>,
    <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  ];

  const isCheck = index % paths.length === 5;

  return (
    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
      isCheck
        ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-600"
        : "border-[#293a57]/20 bg-[#293a57]/[0.04] text-[#293a57]"
    } ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[index % paths.length]}
      </svg>
    </span>
  );
}

/* ── Editorial feature story ──────────────────────────────────────── */
export function ServiceFeatureStory({
  heading,
  items,
  image,
  imageAlt,
  dark = false,
  action,
}: {
  heading: string;
  items: string[];
  image: string;
  imageAlt: string;
  dark?: boolean;
  action?: ReactNode;
}) {
  return (
    <section className={`overflow-hidden py-14 sm:py-18 ${dark ? "bg-[#293a57]" : "bg-white"}`}>
      <Container>
        <div className="grid overflow-hidden rounded-[28px] border border-[#293a57]/10 bg-[#f4f6f8] shadow-[0_24px_70px_rgba(41,58,87,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateOnScroll variant="fade-right" className="relative min-h-[360px] lg:min-h-full">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101b2e]/55 via-transparent to-transparent" />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <h2 className="max-w-xl font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[42px]">
              {heading}
            </h2>
            <div className="mt-8 divide-y divide-[#293a57]/10 border-y border-[#293a57]/10">
              {items.map((item, index) => (
                <div key={item} className="group flex items-center gap-4 py-4">
                  <ServiceLineIcon index={index} className="transition group-hover:border-[#293a57]/40 group-hover:bg-white" />
                  <p className="text-[15px] font-semibold leading-snug text-[#293a57]">{item}</p>
                </div>
              ))}
            </div>
            {action ? <div className="mt-7">{action}</div> : null}
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}

/* ── Image-anchored story checklist ───────────────────────────────── */
export function ServiceStoryChecklist({
  image,
  imageAlt,
  intro,
  items,
  outro,
  action,
}: {
  image: string;
  imageAlt: string;
  intro: ReactNode;
  items: string[];
  outro?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="grid overflow-hidden rounded-[28px] bg-[#293a57] shadow-[0_28px_80px_rgba(41,58,87,0.2)] lg:grid-cols-[0.8fr_1.2fr]">
      <div className="relative min-h-[420px]">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17243b]/75 via-[#17243b]/5 to-transparent" />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <div className="text-[17px] leading-[1.7] text-white/80">{intro}</div>
        <ul className="mt-7 grid gap-x-7 gap-y-1 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 border-t border-white/12 py-4 text-[15px] font-medium leading-snug text-white">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-[#17243b]">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        {outro ? <div className="mt-6 text-[16px] leading-[1.7] text-white/72">{outro}</div> : null}
        {action ? <div className="mt-7">{action}</div> : null}
      </div>
    </div>
  );
}

/* ── Two-video story section ──────────────────────────────────────── */
export function ServiceVideoPair() {
  return (
    <section className="relative overflow-hidden bg-[#eef2f5] py-14 sm:py-18">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#293a57]/10" />
      <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#293a57]/10" />
      <Container className="relative">
        <AnimateOnScroll variant="fade-up" className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <p className="section-tab w-fit">How We Work</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[42px]">
              See JRA In Action
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 lg:grid-cols-2">
          {[
            { videoId: "NAaXgHLW51Q", title: "JRA Construction | Business Showcase" },
            { videoId: "Fc3nnr7B4Hw", title: "JRA's 8-Step Client Process - How it works" },
          ].map((video, index) => (
            <AnimateOnScroll key={video.videoId} variant="fade-up" delay={index * 100}>
              <article className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_18px_50px_rgba(41,58,87,0.12)]">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#293a57] text-white">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true"><path d="m8 5 11 7-11 7Z" /></svg>
                  </span>
                  <h3 className="text-[15px] font-bold text-[#293a57]">{video.title}</h3>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* Kept for any non-service-page use. */
export function ServiceVideo({
  videoId,
  title,
  eyebrow,
  background = "white",
}: {
  videoId: string;
  title: string;
  eyebrow?: string;
  background?: "white" | "gray";
}) {
  return (
    <section className={`${background === "gray" ? "bg-[#f9fafb]" : "bg-white"} py-14 sm:py-16`}>
      <Container>
        <AnimateOnScroll variant="fade-up" className="mx-auto max-w-4xl space-y-6 text-center">
          {eyebrow && <p className="section-tab mx-auto w-fit">{eyebrow}</p>}
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
            <div className="relative pb-[56.25%]">
              <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube.com/embed/${videoId}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

/* ── E-book download CTA ───────────────────────────────────────────── */
export function EbookCta({
  image,
  imageAlt,
  bookTitle,
}: {
  image: string;
  imageAlt: string;
  bookTitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-12 sm:py-14">
      <Container>
        <AnimateOnScroll variant="scale-in">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 overflow-hidden rounded-2xl border border-[#e1e7ed] bg-white p-7 shadow-[0_16px_48px_rgba(41,58,87,0.09)] sm:flex-row sm:p-9">
            <div className="relative h-52 w-52 shrink-0">
              <Image src={image} alt={imageAlt} fill className="object-contain" sizes="208px" />
            </div>
            <div className="space-y-4 text-center sm:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#293a57]/50">
                Free Resource
              </p>
              <h3 className="text-[26px] font-extrabold leading-tight text-[#293a57]">
                Take advantage of our FREE E-book <span className="italic">&lsquo;{bookTitle}&rsquo;</span>
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                DOWNLOAD NOW <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

/* ── Ways To Connect ───────────────────────────────────────────────── */
export function WaysToConnect({
  image,
  imageAlt,
  phoneDisplay = PHONE_DISPLAY,
  phoneTel = PHONE_TEL,
}: {
  image?: string;
  imageAlt?: string;
  phoneDisplay?: string;
  phoneTel?: string;
}) {
  return (
    <section className="bg-white py-14 sm:py-18">
      <Container className={image ? "grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16" : ""}>
        <AnimateOnScroll variant="fade-right" className="space-y-8">
          <div className="space-y-4">
            <p className="section-tab w-fit">Get In Touch</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
              Ways To Connect With JRA Construction
            </h2>
          </div>
          <div className="grid gap-3 sm:max-w-lg">
            <a
              href={phoneTel}
              className="group inline-flex items-center gap-4 rounded-xl bg-[#293a57] px-5 py-4 text-[15px] font-semibold text-white transition hover:bg-[#1e2d47]"
            >
              <ServiceLineIcon index={2} className="border-white/20 bg-white/10 text-white" />
              Call Us Directly: {phoneDisplay}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 rounded-xl border border-[#293a57]/20 bg-[#f7f8fa] px-5 py-4 text-[15px] font-semibold text-[#293a57] transition hover:border-[#293a57]"
            >
              <ServiceLineIcon index={1} />
              Schedule An Appointment
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 rounded-xl border border-[#293a57]/20 px-5 py-4 text-[15px] font-semibold text-[#293a57] transition hover:border-[#293a57] hover:bg-[#f0f4f8]"
            >
              <ServiceLineIcon index={3} />
              Contact Us
            </Link>
          </div>
        </AnimateOnScroll>

        {image && (
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
              <Image src={image} alt={imageAlt ?? "JRA Construction project"} fill className="object-cover transition duration-700 hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 52vw" />
            </div>
          </AnimateOnScroll>
        )}
      </Container>
    </section>
  );
}

/* ── Featured project gallery ──────────────────────────────────────── */
export function FeaturedGallery({
  heading,
  images,
}: {
  heading: string;
  images: { src: string; alt: string }[];
}) {
  return (
    <section className="bg-[#f4f6f8] py-14 sm:py-18">
      <Container className="space-y-10">
        <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
          <p className="section-tab mx-auto w-fit">Our Work</p>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
            {heading}
          </h2>
        </AnimateOnScroll>
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <AnimateOnScroll key={img.src} variant="scale-in" delay={i * 60}>
              <div className={`relative h-full overflow-hidden rounded-2xl ${i === 0 ? "sm:row-span-2 lg:col-span-2" : ""}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Preliminary planning / next steps CTA ─────────────────────────── */
export function PlanningNextSteps({ leadIn }: { leadIn?: string }) {
  return (
    <section className="bg-[#f9fafb] py-16 sm:py-20">
      <Container className="space-y-10">
        <AnimateOnScroll variant="fade-up" className="text-center space-y-3">
          <p className="section-tab mx-auto w-fit">What Are The Next Steps From Here?</p>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
            Start Your Preliminary Planning Today
          </h2>
          <p className="text-[15px] font-semibold text-[#5f7286]">Get started with JRA Construction today</p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale-in" delay={100}>
          <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-2xl border border-[#e8edf2] bg-white p-8 shadow-[0_8px_32px_rgba(41,58,87,0.08)] sm:p-10 lg:grid-cols-[380px_1fr]">
            <div className="relative mx-auto aspect-[1024/799] w-full max-w-[380px]">
              <Image
                src="/services/jra-3dbook-3-1024x799.png"
                alt="Preliminary Planning Guide"
                fill
                className="object-contain"
                sizes="380px"
              />
            </div>
            <div className="space-y-5">
              <p className="text-[16px] leading-[1.7] text-[#4d6277]">
                {leadIn ? `${leadIn} ` : ""}Start by downloading our FREE Preliminary Planning Document. It&apos;s packed with useful
                insights to help you plan with confidence and avoid common pitfalls. Once you&apos;re ready,
                book a no-obligation consultation with our team. We&apos;ll assess your goals, provide expert
                advice, and give you a detailed project breakdown and timeline. It&apos;s a simple,
                stress-free way to take the first step toward transforming your home.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
              >
                Get Your Free Preliminary Planning Document <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

/* ── Global final CTA — appears on every live service page ─────────── */
export function JourneyCta({ leadIn = "Thinking about extending your home?" }: { leadIn?: string }) {
  return (
    <section className="bg-[#293a57] py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[38px]">
          Start Your Home Extension Journey Today
        </h2>
        <p className="max-w-2xl text-[16px] leading-relaxed text-white/75">
          {leadIn}
          <br />
          Start by downloading our FREE Preliminary Planning Document.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#293a57] shadow-lg shadow-black/30 transition hover:bg-zinc-100"
        >
          Download Now
        </Link>
      </Container>
    </section>
  );
}
