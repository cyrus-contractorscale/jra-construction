import Link from "next/link";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <MainNav />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#293a57]">
          404 — Page Not Found
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-[#516577]">
          The page you&apos;re looking for may have been moved, renamed, or
          removed. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-[#293a57] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e2d47]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-[#293a57] px-6 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-[#293a57]/10"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-16 grid gap-4 text-sm text-[#516577] sm:grid-cols-3">
          <Link href="/services" className="hover:text-[#293a57]">
            Our Services →
          </Link>
          <Link href="/projects" className="hover:text-[#293a57]">
            Our Projects →
          </Link>
          <Link href="/about" className="hover:text-[#293a57]">
            About Us →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
