import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ConsultStrip() {
  return (
    <section className="bg-[#293a57] py-8">
      <Container className="grid gap-6 text-white sm:grid-cols-3 sm:items-center">
        <div>
          <p className="text-[18px] font-extrabold leading-snug">Book a Free Consultation</p>
          <p className="mt-1 text-[14px] leading-relaxed text-white/70">
            Let&apos;s discuss your project and see how it can be brought to life
          </p>
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/60">
            Call us today
          </p>
          <a
            href="tel:0212769971"
            className="mt-1 block text-[20px] font-extrabold tracking-tight transition hover:text-white/80"
          >
            (021) 276 9971
          </a>
        </div>
        <div className="sm:justify-self-end">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/60">
            Monday - Friday
          </p>
          <p className="mt-1 text-[20px] font-extrabold tracking-tight">7:30am - 5:30pm</p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#293a57] transition hover:bg-zinc-100"
          >
            Free Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}
