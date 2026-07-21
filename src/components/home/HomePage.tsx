import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Blog } from "@/components/sections/Blog";
import { FormCta } from "@/components/sections/FormCta";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Services } from "@/components/sections/Services";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { Guarantee } from "@/components/sections/Guarantee";

/* Section order mirrors the live homepage (jraconstruction.co.nz):
   hero → services → award-winning builders → awards → who we are →
   testimonials → consultation form → guarantee → blogs. */
export function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Services />
        <Statement />
        <Awards />
        <About />
        <ServicesMarquee />
        <Testimonials />
        <FormCta />
        <Guarantee />
        <Blog />
      </main>
    </>
  );
}
