import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArticleSidebar } from "@/components/article/ArticleSidebar";
import serviceAreas from "@/data/serviceAreas.json";

interface SectionItem {
  t: "p" | "li" | "sub" | "step";
  text?: string;
  title?: string;
}

interface AreaSection {
  heading: string;
  items: SectionItem[];
}

interface ServiceArea {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string[];
  trustPoints: string[];
  sections: AreaSection[];
  faqs: { q: string; a: string }[];
}

const areas = serviceAreas as ServiceArea[];

function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: { absolute: area.metaTitle },
    description: area.metaDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 70);
}

function computeReadingMinutes(area: ServiceArea) {
  let words = 0;
  const count = (t?: string) => (t ? t.split(/\s+/).length : 0);
  area.heroIntro.forEach((p) => (words += count(p)));
  area.trustPoints.forEach((p) => (words += count(p)));
  area.sections.forEach((s) => {
    words += count(s.heading);
    s.items.forEach((it) => (words += count(it.text) + count(it.title)));
  });
  area.faqs.forEach((f) => (words += count(f.q) + count(f.a)));
  return Math.max(1, Math.round(words / 200));
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-[#eef2f6] bg-[#f9fafb] transition-all duration-300 open:border-[#293a57] open:bg-[#293a57] open:shadow-lg open:shadow-[#293a57]/15">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
        <span className="text-[16px] font-semibold leading-snug text-[#293a57] group-open:text-white sm:text-[17px]">
          {q}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2f6] text-xl font-light text-[#293a57] transition-all duration-300 group-open:rotate-45 group-open:bg-white/15 group-open:text-white">
          +
        </span>
      </summary>
      <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-7">
        <p className="text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{a}</p>
      </div>
    </details>
  );
}

function SectionBody({ items }: { items: SectionItem[] }) {
  const steps = items.filter((it) => it.t === "step");
  return (
    <div className="space-y-5">
      {items.map((it, i) => {
        if (it.t === "p") {
          return (
            <p key={i} className="text-[17px] leading-[1.65] text-[#4d6277]">
              {it.text}
            </p>
          );
        }
        if (it.t === "li") {
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#293a57]" />
              <p className="text-[16px] leading-[1.6] text-[#4d6277]">{it.text}</p>
            </div>
          );
        }
        if (it.t === "sub") {
          return (
            <div key={i} className="rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6">
              <h3 className="text-[18px] font-bold text-[#293a57]">{it.title}</h3>
              {it.text ? (
                <p className="mt-2 text-[16px] leading-[1.65] text-[#4d6277]">{it.text}</p>
              ) : null}
            </div>
          );
        }
        // steps render once, as a numbered list, at the first step's position
        if (it.t === "step" && steps.indexOf(it) === 0) {
          return (
            <ol key={i} className="space-y-4">
              {steps.map((st, n) => (
                <li key={st.title} className="flex items-start gap-4 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#293a57] text-[15px] font-bold text-white">
                    {n + 1}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#293a57]">{st.title}</h3>
                    {st.text ? (
                      <p className="mt-1.5 text-[15px] leading-[1.6] text-[#4d6277]">{st.text}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          );
        }
        return null;
      })}
    </div>
  );
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const readingMinutes = computeReadingMinutes(area);
  const toc = area.sections.map((s) => ({ id: headingId(s.heading), text: s.heading }));
  if (area.faqs.length > 0) {
    toc.push({ id: "faqs", text: "Frequently Asked Questions" });
  }

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt={`${area.name} service area banner`}
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
              <Link href="/service-areas" className="transition hover:text-white">Service Areas</Link>
              <span>/</span>
              <span className="text-white/90">{area.name}</span>
            </nav>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {area.h1}
            </h1>
          </AnimateOnScroll>
          {area.heroIntro[0] ? (
            <AnimateOnScroll variant="fade-up" delay={100}>
              <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-relaxed text-white/70">
                {area.heroIntro[0]}
              </p>
            </AnimateOnScroll>
          ) : null}
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

      {/* Content + sidebar */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            <div className="min-w-0 max-w-[820px]">
              {/* Intro + trust points */}
              <div className="space-y-8">
                {area.heroIntro.slice(1).map((para) => (
                  <AnimateOnScroll key={para.slice(0, 40)} variant="fade-up">
                    <p className="text-[17px] leading-[1.7] text-[#4d6277]">{para}</p>
                  </AnimateOnScroll>
                ))}
                <AnimateOnScroll variant="fade-up">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {area.trustPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-xl border border-[#eef2f6] bg-[#f9fafb] p-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#293a57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-[15px] font-semibold leading-snug text-[#293a57]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateOnScroll>
              </div>

              {/* Content sections */}
              {area.sections.map((section) => (
                <div key={section.heading} className="mt-14">
                  <AnimateOnScroll variant="fade-up" className="space-y-6">
                    <h2
                      id={headingId(section.heading)}
                      className="scroll-mt-36 font-[ui-sans-serif,system-ui,sans-serif] text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#293a57] sm:text-[32px]"
                    >
                      {section.heading}
                    </h2>
                    <SectionBody items={section.items} />
                  </AnimateOnScroll>
                </div>
              ))}

              {/* FAQs */}
              {area.faqs.length > 0 ? (
                <div className="mt-16">
                  <AnimateOnScroll variant="fade-up">
                    <h2 id="faqs" className="scroll-mt-36 font-[ui-sans-serif,system-ui,sans-serif] text-[28px] font-extrabold leading-tight tracking-tight text-[#293a57] sm:text-[32px]">
                      Frequently Asked Questions
                    </h2>
                  </AnimateOnScroll>
                  <div className="mt-8 space-y-4">
                    {area.faqs.map((faq, i) => (
                      <AnimateOnScroll key={faq.q} variant="fade-up" delay={i * 60}>
                        <FaqItem q={faq.q} a={faq.a} />
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <ArticleSidebar readingMinutes={readingMinutes} toc={toc} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#293a57] py-16 sm:py-20">
        <Container className="text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
              {`Ready to Start Your Project in ${area.name.replace(/ NZ$/, "")}?`}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Claim your free design &amp; build consultation, or get an instant online estimate for your project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#293a57] shadow-lg shadow-black/30 transition hover:bg-zinc-100"
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
    </>
  );
}
