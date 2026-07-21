import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "How it works - JRA Construction" },
  description:
    "From initial contact to handing over the keys — the 8-step JRA Construction Dream Build Journey for custom homes, renovations, and extensions in Auckland.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    step: "Step 1",
    title: "Initial Contact",
    body: "We offer an obligation free meeting before we start any of our quotes or projects, this ensures JRA are the right fit for you and your project. We'll firstly give you a call to discuss, and if it sounds like something we can help with we get you to send through any information you may have along with a short questionnaire to understand exactly what you're after before catching up to discuss. This ensures that we can tailor our meeting to our clients to be as informative and meaningful as possible.",
  },
  {
    step: "Step 2",
    title: "Site Meeting",
    body: "Once we have had some time to go through the information provided we'll organise a catch up to discuss and talk about your project in more depth. We'll bring along some useful guides, information and examples to help talk through and showcase our process and how we can best help you with your project.",
  },
  {
    step: "Step 3",
    title: "Working with Consultants",
    body: "Once we have a better understanding of what you need, we can then start helping to engage the right consultants for your project or work alongside your existing architect and consultants. Many people don't realize how beneficial it is to get a construction company involved in the early stages of planning and design. But it could save you a lot of headaches later down the track!",
  },
  {
    step: "Step 4",
    title: "Estimate of Costs",
    body: "Drawing up your dream house is one thing, but is it feasible? Many people fall in to the pit of fully designing their home then realizing it's not feasible to build. By that time you've spent thousands of dollars on design and council costs all to know you'll have to get it redesigned to fit within your budget.",
  },
  {
    step: "Step 5",
    title: "Quotation",
    body: "Once you are happy with your design and they have been submitted to council we can start putting some actual pricing together for your project. We'll start getting quotations for all subcontractor works such as electrical, plumbing etc and fix as many prices down so you can be sure of what the final cost will be for your project. Along with our pricing we'll put together a list of all our clarifications and assumptions so everything is as transparent as possible with no surprises later down the track.",
  },
  {
    step: "Step 6",
    title: "Contract Agreements",
    body: "Once you are happy with the final design, proposed contract sum and timeline we can start signing contracts. Along with our pricing we'll put together a list of all our clarifications and assumptions so everything is as transparent as possible with no surprises later down the track.",
  },
  {
    step: "Step 7",
    title: "Construction Phase",
    body: "We'll always be available to update you on your project and will keep you informed throughout. If you're wanting to make any changes throughout the project, we'll make sure we discuss options and alternatives so you can make some informed decisions based on the cost, build ability and practicality of any changes. This way you can have peace of mind that any changes you consider are thought of in all aspects.",
  },
  {
    step: "Step 8",
    title: "The Completion Phase",
    body: "Now, we will hand over the keys to your completed project. We take the time to walk you through the project and ensure that you are completely satisfied with the end result. Our team is always available to answer any questions you may have, and we pride ourselves on providing exceptional customer service even after the project is complete.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="How it works banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              How It Works
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

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">The Dream Build Journey</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              How We Work With You
            </h2>
          </AnimateOnScroll>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-4 left-[19px] top-4 hidden w-px bg-[#dfe7ef] sm:block" aria-hidden="true" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                  <div className="relative flex gap-6">
                    <div className="hidden shrink-0 sm:block">
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#293a57] text-[13px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#293a57]/20 hover:shadow-lg hover:shadow-[#293a57]/8 sm:p-7">
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#293a57]/40">{s.step}</p>
                      <h3 className="mt-1 text-[20px] font-extrabold text-[#293a57]">{s.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.65] text-[#4d6277]">{s.body}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <AnimateOnScroll variant="fade-up" className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#293a57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
            >
              Start Your Dream Build Journey <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
