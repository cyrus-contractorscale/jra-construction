import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Satisfied Clients - Home Builder Auckland | Instant Online Estimate" },
  description:
    "Read genuine testimonials from our satisfied clients about their building projects. Real experiences from Auckland homeowners we've helped.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
