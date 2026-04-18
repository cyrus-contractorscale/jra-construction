import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { FormCta } from "@/components/sections/FormCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Statement } from "@/components/sections/Statement";
import { Services } from "@/components/sections/Services";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Testimonials } from "@/components/sections/Testimonials";

export function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Statement />
        <About />
        <Services />
        <ServicesMarquee />
        <HowItWorks />
        <FormCta />
        <Testimonials />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
