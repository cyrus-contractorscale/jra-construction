import { Inter, Montserrat, Poppins } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Get Your Free Estimate | JRA Construction",
    template: "%s | JRA Construction",
  },
  description:
    "Answer a few quick questions and get an instant project estimate range from JRA Construction — Auckland's trusted home builders.",
  robots: { index: false, follow: false },
};

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}>
      {children}
    </div>
  );
}
