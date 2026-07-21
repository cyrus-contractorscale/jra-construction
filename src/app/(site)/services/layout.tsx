import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Auckland Home Builder Services | Instant Online Estimate" },
  description:
    "From new builds to renovations, JRA Construction provides a range of Auckland home builder services. Contact our expert team to discuss your project.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
