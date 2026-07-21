import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Auckland's Trusted Home Renovation Builder | Instant Online Estimate" },
  description:
    "Licensed builders with quality guarantees, fixed-price contracts, and safety-first approach. See why Auckland homeowners trust our building team.",
  alternates: { canonical: "/why-choose-us" },
};

const benefits = [
  {
    icon: "💰",
    title: "Budget Control",
    body: "Cost overruns can derail projects, but we've got you covered. We use fixed-price contracts and mutually agreed change orders to prevent surprises. Our detailed pricing breakdowns and itemised estimates ensure transparency. With these measures, you can be confident your project will stay within budget.",
  },
  {
    icon: "⏱️",
    title: "Project Timeliness",
    body: "Delays aren't just inconvenient - they're costly. That's why we prioritise timely completion. Our seasoned team uses proven project management techniques to keep things moving. We provide weekly progress updates and proactively address potential delays, ensuring your project finishes on schedule.",
  },
  {
    icon: "💬",
    title: "Open Communication",
    body: "Communication is key, and we prioritize clear and open communication with our clients. From regular site meetings to keeping you updated on the progress of your project, we are always available to answer any questions or concerns you may have. We believe that a collaborative approach to construction ensures a seamless and successful project.",
  },
  {
    icon: "🤝",
    title: "Trust",
    body: "At the heart of every successful project is trust. We are a proud member of the Professional Builders Association, which guarantees that we meet the highest standards of professionalism, workmanship, and ethics. Our team is licensed, insured, and highly skilled, giving you the peace of mind that your project is in good hands.",
  },
  {
    icon: "🏆",
    title: "Quality Of Workmanship",
    body: "We believe that quality is non-negotiable. We take pride in our work and use only the best materials and skilled craftsmen to ensure that your project is completed to the highest standard possible. Our 287pt quality assurance checklist ensures that every detail is meticulously checked, leaving you with a stunning finished product that you will be proud to call your own.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="Why choose JRA Construction banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Why Choose Us
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={150}>
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

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Our Benefits</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Why You Should Choose Us for Your Home Building Project
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} variant="fade-up" delay={i * 90}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#293a57]/20 hover:shadow-lg hover:shadow-[#293a57]/8">
                  <span className="text-4xl">{b.icon}</span>
                  <h3 className="text-[20px] font-extrabold text-[#293a57]">{b.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-[#4d6277]">{b.body}</p>
                </div>
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll variant="fade-up" delay={5 * 90}>
              <div className="flex h-full flex-col items-start justify-center gap-4 rounded-2xl bg-[#293a57] p-7">
                <h3 className="text-[22px] font-extrabold leading-tight text-white">
                  Ready to build with confidence?
                </h3>
                <p className="text-[15px] leading-[1.65] text-white/75">
                  Book a free consultation and see the JRA difference for yourself.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-zinc-100"
                >
                  Free Consultation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Guarantee cross-link */}
      <section className="bg-[#f9fafb] py-14 sm:py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-[ui-sans-serif,system-ui,sans-serif] text-[30px] font-extrabold leading-tight tracking-tight text-[#293a57] sm:text-[36px]">
            Backed by the JRA Construction &ldquo;Build with Confidence&rdquo; Guarantee
          </h2>
          <Link
            href="/guarantee"
            className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
          >
            Read More About Our Guarantee <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
