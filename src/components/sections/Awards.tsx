import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* Certified-builder logos — from live site "Choose A Licensed & Certified Builder" section */
const certLogos = [
  { src: "/logos/master-builders.png", alt: "5f9a698ce7fd8533695d3aae_Master Builders Logo", w: 120, h: 80 },
  { src: "/logos/nzgbc.png", alt: "NZGBC Logo to fit round social profiles", w: 80, h: 80 },
  { src: "/logos/nzcb.png", alt: "5f9a698d6a13646407084e2c_NZCB Logo", w: 100, h: 80 },
  { src: "/logos/cb.png", alt: "CB", w: 80, h: 80 },
];

export function Awards() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container className="text-center">
        <AnimateOnScroll variant="fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#293a57]/50">
            - Awards &amp; Recognition -
          </p>
          <h2 className="mt-3 font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[40px]">
            Choose A Licensed &amp; Certified Builder
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={150}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-14 sm:gap-24 lg:gap-32">
            {certLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="h-20 w-auto object-contain sm:h-28"
              />
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
