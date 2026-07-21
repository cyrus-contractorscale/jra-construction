import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import blogPosts from "@/data/blogPosts.json";
import serviceAreas from "@/data/serviceAreas.json";

export const metadata: Metadata = {
  title: { absolute: "Sitemap - JRA Construction" },
  description:
    "Browse the full JRA Construction sitemap: services, projects, service areas, blog posts, and company pages.",
  alternates: { canonical: "/sitemap" },
};

const corePages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Guarantee", href: "/guarantee" },
  { name: "Frequently Asked Questions", href: "/faq" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sitemap", href: "/sitemap" },
];

const servicePages = [
  { name: "Services", href: "/services" },
  { name: "Custom Homes", href: "/services/custom-homes" },
  { name: "Home Renovations", href: "/services/home-renovations" },
  { name: "Home Extensions", href: "/services/home-extensions" },
  { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
  { name: "Bathroom Renovations", href: "/services/bathroom-renovations" },
  { name: "Construction Management", href: "/services/construction-management" },
  { name: "Quantity Surveying", href: "/services/quantity-surveying" },
  { name: "Home Maintenance", href: "/services/home-maintenance" },
  { name: "Granny Flats", href: "/services/granny-flats" },
  { name: "Minor Dwellings", href: "/services/minor-dwellings" },
];

const estimatePages = [
  { name: "Estimate", href: "/estimate" },
  { name: "Custom Home Estimate", href: "/e-home" },
  { name: "House Addition Estimate", href: "/e-addition" },
  { name: "Kitchen Renovation Estimate", href: "/e-kitchen" },
  { name: "Bathroom Renovation Estimate", href: "/e-bathroom" },
];

const projectPages = [
  { name: "Projects", href: "/projects" },
  { name: "Mcleod Road, Te Atatu", href: "/projects/mcleod-road-te-atatu" },
  { name: "Cleve Road, Green Bay", href: "/projects/cleve-road-green-bay" },
  { name: "Hurstmere Road", href: "/projects/hurstmere-road" },
  { name: "Queensway", href: "/projects/queensway" },
  { name: "North Piha Road", href: "/projects/north-piha-road" },
  { name: "Seacombe Road, Point Chevalier", href: "/projects/seacombe-road-point-chevalier" },
  { name: "KhuKhu Milford", href: "/projects/khukhu-milford" },
  { name: "Matakana", href: "/projects/matakana" },
  { name: "Sandringham Project", href: "/projects/sandringham-project" },
  { name: "Westminster Road, Balmoral", href: "/projects/westminster-road-balmoral" },
  { name: "Fir Street, Waterview", href: "/projects/fir-street-waterview" },
  { name: "Te Wiata Place, Avondale", href: "/projects/te-wiata-place-avondale" },
  { name: "Tiri Road, Whangaparāoa", href: "/projects/tiri-road-whangaparaoa" },
  { name: "Lucinda Place, Glen Eden", href: "/projects/lucinda-place-glen-eden" },
  { name: "Laingholm Baptist Church", href: "/projects/laingholm-baptist-church" },
  { name: "Bellevue", href: "/projects/bellevue" },
  { name: "Mount Eden Renovation", href: "/projects/mount-eden-renovation" },
  { name: "Saint Leonards Road, Mount Eden", href: "/projects/saint-leonards-road-mount-eden" },
  { name: "Gunson Street, Freemans Bay", href: "/projects/gunson-street-freemans-bay" },
  { name: "Muriwai Renovation", href: "/projects/muriwai-renovation" },
  { name: "Taipari Road, Te Atatu", href: "/projects/taipari-road-te-atatu" },
];

function LinkColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <AnimateOnScroll variant="fade-up">
      <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[24px] font-extrabold tracking-tight text-[#293a57]">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[15px] leading-relaxed text-[#4d6277] transition hover:text-[#293a57]">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </AnimateOnScroll>
  );
}

export default function SitemapPage() {
  const areaLinks = serviceAreas.map((a) => ({
    name: a.name,
    href: `/service-areas/${a.slug}`,
  }));
  const postLinks = blogPosts.map((p) => ({
    name: `${p.title} (${p.date})`,
    href: `/${p.slug}`,
  }));

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <Image
          src="/jra-slider-1.png"
          alt="Sitemap banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl">
              Sitemap
            </h1>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Link sections */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-[1100px]">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <LinkColumn title="Pages" links={corePages} />
            <LinkColumn title="Services" links={servicePages} />
            <LinkColumn title="Online Estimates" links={estimatePages} />
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <LinkColumn title="Projects" links={projectPages} />
            <LinkColumn
              title="Service Areas"
              links={[{ name: "Service Areas", href: "/service-areas" }, ...areaLinks]}
            />
          </div>
          <div className="mt-14">
            <LinkColumn title="Posts" links={postLinks} />
          </div>
        </Container>
      </section>
    </>
  );
}
