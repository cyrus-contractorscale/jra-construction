"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

const FAQ_ANSWER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua";

const faqs = [
  { question: "What services do you offer?", answer: FAQ_ANSWER },
  {
    question: "Can I see examples of your previous work/portfolio?",
    answer: FAQ_ANSWER,
  },
  { question: "How do I get started with a project?", answer: FAQ_ANSWER },
  {
    question: "Do you provide consultations or initial design concepts?",
    answer: FAQ_ANSWER,
  },
  { question: "Do you work within a specific budget range?", answer: FAQ_ANSWER },
];

function QuestionMarkIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c5d0dc] bg-white text-[13px] font-bold text-[#0f2744]">
      ?
    </span>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-10 space-y-5 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#dfe7ef] bg-[#fafbfc] px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#4f6678]">
            <QuestionMarkIcon />
            <span className="text-[#0f2744]">FAQ</span>
          </div>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[48px] lg:text-[52px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex w-full flex-col gap-3 sm:gap-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#0f2744] bg-[#0f2744] shadow-lg shadow-[#0f2744]/15"
                    : "border-[#eef2f6] bg-[#f9fafb] hover:border-[#e2e8f0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-[16px] font-semibold leading-snug sm:text-[17px] ${
                      isOpen ? "text-white" : "text-[#0f2744]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center text-2xl font-light leading-none sm:h-10 sm:w-10 ${
                      isOpen ? "text-white" : "text-[#0f2744]"
                    }`}
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-white/10 px-5 pb-6 pt-0 sm:px-7 sm:pb-7">
                    <p className="text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
