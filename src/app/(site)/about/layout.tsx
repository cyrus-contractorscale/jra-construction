import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Auckland's Trusted Building Team | Instant Online Estimate" },
  description:
    "Discover our residential building team specializing in high-end renovations, extensions and alterations across Auckland. Book a consulation now.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
