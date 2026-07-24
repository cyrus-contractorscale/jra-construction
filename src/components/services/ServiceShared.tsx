import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* Shared sections used across all 10 service pages — mirrors the live
   jraconstruction.co.nz service-page template (videos, e-book download,
   ways to connect, featured gallery, preliminary planning CTA). */

const PHONE_DISPLAY = "021 276 9971";
const PHONE_TEL = "tel:+64212769971";
const BOOKING_URL = "https://go.jraconstruction.co.nz/book";

/* ── YouTube video section ─────────────────────────────────────────── */
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
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
    <section className="bg-[#f9fafb] py-14 sm:py-16">
      <Container>
        <AnimateOnScroll variant="scale-in">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-2xl border border-[#e8edf2] bg-white p-8 shadow-[0_8px_32px_rgba(41,58,87,0.08)] sm:flex-row sm:p-10">
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
    <section className="bg-white py-16 sm:py-20">
      <Container className={image ? "grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16" : ""}>
        <AnimateOnScroll variant="fade-right" className="space-y-8">
          <div className="space-y-4">
            <p className="section-tab w-fit">Get In Touch</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[46px]">
              Ways To Connect With JRA Construction
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:max-w-md">
            <a
              href={phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#293a57] px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-[#1e2d47]"
            >
              📞 Call Us Directly: {phoneDisplay}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#293a57] px-7 py-4 text-[15px] font-semibold text-[#293a57] transition hover:bg-[#293a57] hover:text-white"
            >
              📅 Schedule An Appointment
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c6d2de] px-7 py-4 text-[15px] font-semibold text-[#293a57] transition hover:border-[#293a57] hover:bg-[#f0f4f8]"
            >
              ✉️ Contact Us
            </Link>
          </div>
        </AnimateOnScroll>

        {image && (
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[400px] overflow-hidden rounded-2xl shadow-xl shadow-[#293a57]/15">
              <Image src={image} alt={imageAlt ?? "JRA Construction project"} fill className="object-cover" sizes="400px" />
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
    <section className="bg-white py-16 sm:py-20">
      <Container className="space-y-10">
        <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
          <p className="section-tab mx-auto w-fit">Our Work</p>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
            {heading}
          </h2>
        </AnimateOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <AnimateOnScroll key={img.src} variant="scale-in" delay={i * 60}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
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
