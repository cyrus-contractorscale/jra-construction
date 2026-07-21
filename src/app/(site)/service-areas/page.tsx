import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import serviceAreas from "@/data/serviceAreas.json";

export const metadata: Metadata = {
  title: { absolute: "Auckland Home Builders Service Area Coverage | Instant Online Estimate" },
  description:
    "Find out if we service your Auckland location. Expert home builders covering residential areas throughout the Auckland region for all projects.",
  alternates: { canonical: "/service-areas" },
};

/* Live-site listing order first; remaining audited areas follow alphabetically. */
const liveOrder = [
  "home-renovation-builder-in-greenhithe",
  "home-renovation-builder-in-glenfield",
  "home-renovation-builder-in-devonport",
  "home-renovation-builder-in-mairangi-bay",
  "home-renovation-builder-in-browns-bay",
  "home-renovation-builder-in-milford",
  "home-renovation-builder-in-northcote",
  "home-renovation-builder-in-albany",
  "home-renovation-builder-in-helensville",
  "home-renovation-builder-in-kumeu",
  "home-renovation-builder-in-waterview",
  "home-renovation-builder-in-blockhouse-bay",
  "home-renovation-builder-in-avondale",
  "home-renovation-builder-in-glen-eden",
  "home-renovation-builder-in-te-atatu",
  "home-renovation-builder-in-henderson",
  "home-renovation-builder-in-snells-beach",
  "home-renovation-builder-in-warkworth",
  "home-renovation-builder-in-paremoremo",
  "home-renovation-builder-in-dairy-flat",
  "home-renovation-builder-in-orewa",
  "home-renovation-builder-in-red-beach",
  "home-renovation-builder-in-westmere",
  "sandringham-nz",
  "ponsonby-nz",
  "point-chevalier-nz",
  "mount-albert-nz",
  "kingsland-nz",
  "herne-bay-nz",
  "grey-lynn-nz",
];

const bySlug = new Map(serviceAreas.map((a) => [a.slug, a]));
const ordered = [
  ...liveOrder.map((slug) => bySlug.get(slug)!).filter(Boolean),
  ...serviceAreas
    .filter((a) => !liveOrder.includes(a.slug))
    .sort((a, b) => a.name.localeCompare(b.name)),
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="Service areas banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <nav className="mb-6 flex items-center justify-center gap-2 text-[13px] text-white/50">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white/90">Service Areas</span>
            </nav>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Service Areas
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
              Expert home builders covering residential areas throughout the Auckland region for all projects.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
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
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Areas grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1100px]">
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#293a57] sm:text-5xl">
              Where We Build
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-[#4d6277]">
              JRA Construction serves homeowners across Auckland. Select your area to learn more about our services near you.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.map((area, i) => (
              <AnimateOnScroll key={area.slug} variant="fade-up" delay={(i % 9) * 40}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[#e8edf2] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(41,58,87,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#293a57] hover:shadow-[0_10px_28px_rgba(41,58,87,0.12)]"
                >
                  <span className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#293a57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-[15px] font-semibold text-[#293a57]">
                      {area.name}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-lg text-[#293a57]/40 transition group-hover:translate-x-1 group-hover:text-[#293a57]">
                    →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#293a57] py-16 sm:py-20">
        <Container className="text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
              Don&apos;t See Your Area Listed?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
              We build across the wider Auckland region. Get in touch to confirm coverage for your location.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#293a57] shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
