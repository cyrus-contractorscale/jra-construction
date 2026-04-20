import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

function CertificateIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c5d0dc] bg-white text-[13px] font-bold text-[#0f2744]">
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

export function Guarantee() {
  return (
    <section
      id="guarantee"
      className="scroll-mt-24 bg-[#0f2744] bg-cover bg-center bg-no-repeat py-16 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,39,68,0.86), rgba(15,39,68,0.86)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=80')",
      }}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimateOnScroll variant="fade-left" className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2.5 rounded-[10px] border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <CertificateIcon />
            <span className="text-white">Guarantee</span>
          </div>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[48px] lg:text-[52px]">
            The JRA Construction "Build with Confidence" Guarantee
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            At JRA Construction, we promise to provide customers with the best possible service and experience for their home renovation projects. We understand the concerns of homeowners and aim to overcome them by building trust, delivering the highest quality workmanship, offering fixed price contracts, and maintaining clear and open communication.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="stamp" delay={200} className="flex items-center justify-center">
          <Image
            src="/guarantee_seal-bf646c3a-3990-40ad-b1e1-c35cc0c1fa68.png"
            alt="100% Best Quality Workmanship Guarantee Seal"
            width={400}
            height={400}
            priority
            className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition duration-500 hover:scale-105"
          />
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
