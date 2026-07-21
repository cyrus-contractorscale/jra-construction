import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "FAQ for Home Building Construction Auckland | Instant Online Estimate" },
  description:
    "Find answers to common questions about our building services, process, and costs. Expert insights from Auckland's trusted construction team.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What services does JRA Construction offer?",
    a: "JRA Construction offers a range of services including: Custom Homes, Home renovations, Home extensions, Kitchen renovations, Bathroom renovations, and Quantity surveying.",
  },
  {
    q: "Is JRA Construction a licensed and certified builder?",
    a: "Yes, JRA Construction is a licensed and certified builder. We are proud members of several accredited organizations, including Registered Master Builders, New Zealand Certified Builders, and Licensed Building Practitioners.",
  },
  {
    q: "What areas does JRA Construction serve?",
    a: "JRA Construction primarily serves the Auckland area as a home builder and renovation specialist.",
  },
  {
    q: "How does JRA Construction ensure quality in their projects?",
    a: "We ensure quality by setting high expectations for all work and sub-trades, adhering to current standards, and conducting a thorough walk-through using our JRA Quality Checklist upon project completion.",
  },
  {
    q: "What are JRA Construction's operating hours?",
    a: "Our operating hours are Monday to Friday, from 7:30 am to 5:30 pm.",
  },
  {
    q: "How does JRA Construction handle project communication?",
    a: "We prioritize communication by providing a direct point of contact for every project, implementing a 24-hour call back policy, and offering constant project updates to keep clients informed.",
  },
  {
    q: "Does JRA Construction offer quantity surveying services?",
    a: "Yes, we offer quantity surveying services to help maximize your project's value and understand the true cost before getting started.",
  },
  {
    q: "Can JRA Construction help with kitchen and bathroom renovations?",
    a: "Absolutely! We specialize in both kitchen and bathroom renovations, creating functional and stylish spaces tailored to your needs.",
  },
  {
    q: "How does JRA Construction approach new home builds?",
    a: "For new builds, we focus on creating homes tailored to your lifestyle. We work closely with clients to understand their needs and preferences, ensuring the final result is their dream home.",
  },
  {
    q: "Does JRA Construction offer home extension services?",
    a: "Yes, we provide seamless home extension services for those who need more space but don't want to move. We help expand your living area with minimal hassle.",
  },
  {
    q: "How does JRA Construction handle project budgeting?",
    a: "We prioritize budget management through our quantity surveying services. This ensures your budget is well looked after throughout the project.",
  },
];

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

export default function FaqPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="FAQ banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Frequently Asked Questions
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

      {/* FAQ list */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-3xl space-y-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} variant="fade-up" delay={i * 60}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" className="pt-6 text-center">
            <p className="text-[16px] text-[#5f7286]">
              Still have questions? We&apos;re happy to help.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
