import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C9.61 22 2 14.39 2 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      />
    </svg>
  );
}

function IconEmail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1a2433] pb-0 text-[#c8d0dc]">
      <Container className="pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <Link
              href="#top"
              className="relative mb-6 block h-12 w-[min(100%,220px)] sm:h-14 sm:w-[260px]"
            >
              <Image
                src="/jra-logo-white-transparent.png"
                alt="JRA Construction"
                fill
                className="object-contain object-left"
                sizes="260px"
                priority
              />
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-[#aeb8c4]">
              JRA Construction builds custom homes and renovations in Auckland with clear
              communication, disciplined execution, and lasting quality craftsmanship.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d4f63] text-white transition hover:bg-[#4a5f77]"
                aria-label="Facebook"
              >
                <IconFacebook className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d4f63] text-white transition hover:bg-[#4a5f77]"
                aria-label="Instagram"
              >
                <IconInstagram className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="#services" className="transition hover:text-white">
                  Custom Homes
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition hover:text-white">
                  Home Renovations
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition hover:text-white">
                  Home Extensions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-white">Useful Links</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="#blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="transition hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-white">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8fa3b8]" />
                <span>Auckland, New Zealand</span>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-[#8fa3b8]" />
                <a href="tel:+64000000000" className="transition hover:text-white">
                  +64 000 000 000
                </a>
              </li>
              <li className="flex gap-3">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-[#8fa3b8]" />
                <span>9AM – 5PM (Mon–Fri)</span>
              </li>
              <li className="flex gap-3">
                <IconEmail className="mt-0.5 h-5 w-5 shrink-0 text-[#8fa3b8]" />
                <a
                  href="mailto:info@jraconstruction.co.nz"
                  className="break-all transition hover:text-white"
                >
                  info@jraconstruction.co.nz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[14px] text-[#aeb8c4]">
              © Copyright JRA Construction 2026. All Right Reserved.
            </p>
            <p className="text-[14px] text-[#aeb8c4] lg:text-right">
              <Link href="#" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <span className="mx-2 text-white/25">|</span>
              <Link href="#" className="transition hover:text-white">
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </Container>

      <div className="bg-[#090d14] pt-3 pb-2 sm:pt-3.5 sm:pb-2.5">
        <Container>
          <p className="text-center text-[14px] leading-snug text-[#8a95a3]">
            Website &amp; Advertising By{" "}
            <a
              href="https://contractorscale.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8b4c2] underline-offset-2 transition hover:text-[#c5ced8]"
            >
              ContractorScale.com
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
