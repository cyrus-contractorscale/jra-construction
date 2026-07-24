import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: { absolute: "Projects - JRA Construction" },
  description:
    "Explore JRA Construction's portfolio of custom homes, renovations, and extensions completed across Auckland.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* Consultation CTA — mirrors the live-site project page footer CTA */}
      <section className="bg-[#293a57] py-14 sm:py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
            Ready to Start Your Own Project?
          </h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-white/70">
            Book a free consultation with our team, or call us to talk through your renovation,
            extension, or new build.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#293a57] shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Free Consultation
            </Link>
            <a
              href="tel:+64212769971"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Call us on (021) 276 9971
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
