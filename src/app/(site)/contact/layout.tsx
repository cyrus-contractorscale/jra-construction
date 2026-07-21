import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Home Builder in Auckland | Free Consultation" },
  description:
    "Get in touch with our Auckland building team for expert advice and a free consultation. Available 24/7 for your home construction questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
