import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Projects - JRA Construction" },
  description:
    "Explore JRA Construction's portfolio of custom homes, renovations, and extensions completed across Auckland.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
