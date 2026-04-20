"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";

const projects = [
  {
    title: "Sandringham Project",
    body: "A remarkable renovation and extension, transforming an existing home into a stunning, functional space.",
    image: "/projects/sandringham-project/Elevated-Home-Aerial.webp",
    href: "/projects/sandringham-project",
  },
  {
    title: "Gunson Street, Freemans Bay",
    body: "An extensive internal and external renovation focused on creating a user-friendly space that maximizes outdoor living.",
    image: "/projects/gunson-street-freemans-bay/gunson-house-exterior.jpg",
    href: "/projects/gunson-street-freemans-bay",
  },
  {
    title: "Muriwai Renovation",
    body: "Enhancing outdoor spaces with new fencing, gates, and sheds, complementing the natural surroundings of Muriwai.",
    image: "/projects/muriwai-renovation/muriwai-property-exterior.jpg",
    href: "/projects/muriwai-renovation",
  },
  {
    title: "Taipari Road, Te Atatu",
    body: "Rejuvenating an outdated property through an external reclad and renovation for Amelia and Mat.",
    image: "/projects/taipari-road-te-atatu/taipari-road-transformation.webp",
    href: "/projects/taipari-road-te-atatu",
  },
  {
    title: "Tiri Road, Whangaparāoa",
    body: "A complete new build project balancing strong architectural features with practical, comfortable family living.",
    image: "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-04-scaled.jpg",
    href: "/projects/tiri-road-whangaparaoa",
  },
  {
    title: "Te Wiata Place, Avondale",
    body: "An extension and renovation project creating spaces that cater to the unique needs of families.",
    image: "/projects/te-wiata-place-avondale/renovation-window-reflection.jpg",
    href: "/projects/te-wiata-place-avondale",
  },
  {
    title: "Lucinda Place, Glen Eden",
    body: "A new build endeavor comprising four units, with two nearing completion, showcasing high standards of craftsmanship and design.",
    image: "/projects/lucinda-place-glen-eden/lucinda-place-units.jpg",
    href: "/projects/lucinda-place-glen-eden",
  },
  {
    title: "Fir Street, Waterview",
    body: "A renovation and extension project creating functional, open-plan living spaces seamlessly blending indoor and outdoor areas.",
    image: "/projects/fir-street-waterview/fir-living-space.jpg",
    href: "/projects/fir-street-waterview",
  },
  {
    title: "Westminster Road, Balmoral",
    body: "A careful renovation and extension of a classic Balmoral villa, blending modern living with the home's original character.",
    image: "/projects/westminster-road-balmoral/westminster-road-kitchen-island.jpg",
    href: "/projects/westminster-road-balmoral",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 lg:py-40">
        <Image
          src="/jra-slider-1.png"
          alt="Projects banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white/90">Projects</span>
          </nav>
          <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
            Explore our portfolio of exceptional construction projects, where vision meets precision and quality lasts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Start Your Project
            </Link>
            <Link
              href="#projects-list"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Browse Projects
            </Link>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section id="projects-list" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="text-center mb-12">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#0f2744] sm:text-5xl">
              Our Latest Projects
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4d6277] max-w-2xl mx-auto">
              Discover the quality and craftsmanship we bring to every home build and renovation.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.title} variant="fade-up" delay={index * 65}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(15,39,68,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,39,68,0.12)]">
                  <div className="relative block aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-[#0f2744] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      View Project →
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-[1.1rem] font-bold leading-snug text-[#0f2744] sm:text-[1.2rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[#5f7286]">
                      {project.body}
                    </p>
                    <Link
                      href={project.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#0f2744] transition hover:gap-3"
                    >
                      View Project
                      <span aria-hidden="true" className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
