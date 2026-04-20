"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const faqs = [
  {
    question: "What services does JRA Construction offer?",
    answer: "JRA Construction offers a range of services including: Custom Homes, Home renovations, Home extensions, Kitchen renovations, Bathroom renovations, Quantity surveying",
  },
  {
    question: "Is JRA Construction a licensed and certified builder?",
    answer: "Yes, JRA Construction is a licensed and certified builder. We are proud members of several accredited organizations, including Registered Master Builders, New Zealand Certified Builders, and Licensed Building Practitioners.",
  },
  {
    question: "What areas does JRA Construction serve?",
    answer: "JRA Construction primarily serves the Auckland area as a home builder and renovation specialist.",
  },
  {
    question: "How does JRA Construction ensure quality in their projects?",
    answer: "We ensure quality by: Setting high expectations for all work and sub-trades, Adhering to current standards, Conducting a thorough walk-through using our JRA Quality Checklist upon project completion",
  },
  {
    question: "What are JRA Construction's operating hours?",
    answer: "Our operating hours are Monday to Friday, from 7:30 am to 5:30 pm.",
  },
  {
    question: "How does JRA Construction handle project communication?",
    answer: "We prioritize communication by: Providing a direct point of contact for every project, Implementing a 24-hour call back policy, Offering constant project updates to keep clients informed",
  },
  {
    question: "Does JRA Construction offer quantity surveying services?",
    answer: "Yes, we offer quantity surveying services to help maximize your project's value and understand the true cost before getting started.",
  },
  {
    question: "Can JRA Construction help with kitchen and bathroom renovations?",
    answer: "Absolutely! We specialize in both kitchen and bathroom renovations, creating functional and stylish spaces tailored to your needs.",
  },
  {
    question: "How does JRA Construction approach new home builds?",
    answer: "For new builds, we focus on creating homes tailored to your lifestyle. We work closely with clients to understand their needs and preferences, ensuring the final result is their dream home.",
  },
  {
    question: "Does JRA Construction offer home extension services?",
    answer: "Yes, we provide seamless home extension services for those who need more space but don't want to move. We help expand your living area with minimal hassle.",
  },
  {
    question: "How does JRA Construction handle project budgeting?",
    answer: "We prioritize budget management through our quantity surveying services. This ensures your budget is well looked after throughout the project.",
  },
];

function QuestionMarkIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c5d0dc] bg-white text-[13px] font-bold text-[#0f2744]">
      ?
    </span>
  );
}

function ExpandableAnswer({ isOpen, answer }: { isOpen: boolean; answer: string }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    if (!panel || !inner) return;

    if (isOpen) {
      panel.style.maxHeight = `${inner.scrollHeight + 48}px`;
      panel.style.opacity = "1";
    } else {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
    }
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      style={{
        maxHeight: "0px",
        opacity: 0,
        overflow: "hidden",
        transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
      }}
    >
      <div ref={innerRef} className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-7 sm:pb-7">
        <p className="text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <AnimateOnScroll variant="fade-up" className="mb-10 space-y-5 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#dfe7ef] bg-[#fafbfc] px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#4f6678]">
            <QuestionMarkIcon />
            <span className="text-[#0f2744]">FAQ</span>
          </div>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[48px] lg:text-[52px]">
            Frequently Asked Questions
          </h2>
        </AnimateOnScroll>

        <div className="flex w-full flex-col gap-3 sm:gap-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimateOnScroll
                key={item.question}
                variant="fade-up"
                delay={Math.min(index * 55, 400)}
              >
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#0f2744] bg-[#0f2744] shadow-lg shadow-[#0f2744]/15"
                      : "border-[#eef2f6] bg-[#f9fafb] hover:border-[#c8d5e2] hover:shadow-md hover:shadow-[#0f2744]/5 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span
                      className={`text-[16px] font-semibold leading-snug sm:text-[17px] transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-[#0f2744]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-light leading-none transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? "rotate-45 bg-white/15 text-white"
                          : "bg-[#eef2f6] text-[#0f2744] hover:bg-[#e2e8f0]"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <ExpandableAnswer isOpen={isOpen} answer={item.answer} />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
