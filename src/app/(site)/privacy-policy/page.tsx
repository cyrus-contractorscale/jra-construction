import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: { absolute: "Comprehensive Home Builder Privacy Policy | JRA Construction" },
  description:
    "Learn how we protect your information and ensure a secure online experience. Read our builder privacy policy and data protection guidelines.",
  alternates: { canonical: "/privacy-policy" },
};

const paragraphs = [
  "JRA Construction understands your concerns about privacy and security when using the Internet, and we are committed to protecting the privacy of our valued customers. JRA Construction does not sell, rent or exchange any information collected via the Internet. JRA Construction keeps all collected information confidential. We have implemented security policies and technical measures to protect your personal data from improper use or unauthorized access.",
  "In order to fulfill your requests for our services and products, it is necessary to obtain your name, address, phone number, and other personally identifiable information. We use the information you provide to schedule the services and deliver the products you request. We may also use the information to contact you about our products, services, and events, to notify you about special offers or promotions, or to respond to your request for information from JRA Construction.",
  "JRA Construction collects information as described to ensure personalized service to our customers. By using JRA Construction you consent to the collection and use of data for this purpose. Any changes to this policy will be posted on the Website.",
  "For any questions or concerns regarding the privacy of your data or the accessibility of our website please contact us for a resolution.",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <Image
          src="/jra-slider-1.png"
          alt="Privacy policy banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy &amp; Accessibility Statement
            </h1>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Policy body */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6">
          {paragraphs.map((para) => (
            <AnimateOnScroll key={para.slice(0, 40)} variant="fade-up">
              <p className="text-[17px] leading-[1.7] text-[#4d6277]">{para}</p>
            </AnimateOnScroll>
          ))}
        </Container>
      </section>
    </>
  );
}
