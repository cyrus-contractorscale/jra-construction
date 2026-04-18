import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl"
        >
          JRA <span className="text-amber-700">Construction</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 sm:px-5"
        >
          Request a bid
        </Link>
      </Container>
    </header>
  );
}
