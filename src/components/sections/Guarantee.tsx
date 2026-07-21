import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

function CertificateIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c5d0dc] bg-white text-[13px] font-bold text-[#293a57]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-award"
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 22 12 18 17 22 15.79 13.88" />
      </svg>
    </span>
  );
}

/* Guarantee uses a white / very light background so it is visually distinct
   from the dark FormCta section that appears directly above it.
   The live site separates them with the same image but different colours —
   here we use a clean white card treatment which reads better in Next.js. */
export function Guarantee() {
  return (
    <section
      id="guarantee"
      className="scroll-mt-24 bg-[#f0f4f8] py-16 sm:py-20"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimateOnScroll variant="fade-left" className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#c5d0dc] bg-white px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#293a57]">
            <CertificateIcon />
            <span>- Our Promise</span>
          </div>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[44px] lg:text-[50px]">
            The JRA Construction &ldquo;Build with Confidence&rdquo; Guarantee
          </h2>
          <p className="text-[17px] leading-relaxed text-[#4a6075]">
            At JRA Construction, we promise to provide customers with the best possible service and experience for their home renovation projects. We understand the concerns of homeowners and aim to overcome them by building trust, delivering the highest quality workmanship, offering fixed price contracts, and maintaining clear and open communication.
          </p>
          <Link
            href="/guarantee"
            className="inline-flex items-center justify-center rounded-full bg-[#293a57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1e2d47]"
          >
            Read More About Guarantee
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll variant="stamp" delay={200} className="flex items-center justify-center">
          <Image
            src="/guarantee_seal-bf646c3a-3990-40ad-b1e1-c35cc0c1fa68.png"
            alt="100% Best Quality Workmanship Guarantee Seal"
            width={400}
            height={400}
            priority
            className="drop-shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition duration-500 hover:scale-105"
          />
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
