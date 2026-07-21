import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: { absolute: "Auckland Construction Management | 24-Hour Callback Policy" },
  description:
    "Learn more about Auckland construction management company, JRA Construction. Our dedicated team, and our commitment to delivering quality building projects.",
  alternates: { canonical: "/careers" },
};

const benefits = [
  "You would have weekends and public holidays completely to yourself. We don\u2019t run an on-call service so you wouldn\u2019t have to drop everything to run off to a job.",
  "You can enjoy a supportive working environment where we value the contribution of our people and are committed to seeing you develop to your full potential.",
  "At JRA Construction you will be treated as a person and not a machine whose sole purpose in life is to fill the bank account of the owner.",
  "Your exposure to a wide variety of interesting and challenging work will develop your skills and experience. Not to mention your future career development.",
  "There is opportunity to grow into a foreman position with a dynamic company if you demonstrate that you have the right stuff!",
  "We provide you with a tool allowance, so you don\u2019t have to spend your hard earned cash on tools just to get the job done.",
];

export default function CareersPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="Careers banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Careers
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={150}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:0212769971"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                021 276 9971
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Free Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Why work for JRA */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold uppercase leading-[1.12] tracking-tight text-[#293a57] sm:text-[40px]">
                Why Work for JRA Construction?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.slice(0, 40)} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#293a57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 h-5 w-5 shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <p className="text-[16px] leading-[1.65] text-[#4d6277]">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl lg:ml-auto">
              <Image
                src="/projects/gunson-street-freemans-bay/gunson-house-exterior.jpg"
                alt="JRA Construction team project"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Apply CTA */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <AnimateOnScroll variant="fade-up">
            <p className="text-[15px] font-bold uppercase leading-[1.6] tracking-wide text-[#293a57]">
              If you think you&rsquo;ve got what it takes and a career in carpentry could be for you, click below to apply now
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#293a57] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1e2d47]"
            >
              Apply Now!
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Join the team */}
      <section className="bg-[#293a57] py-16 sm:py-20">
        <Container className="text-center">
          <AnimateOnScroll variant="fade-up">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold uppercase leading-tight tracking-tight text-white sm:text-[40px]">
              Join the Team at JRA
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#293a57] shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Be Part of Our Team
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
