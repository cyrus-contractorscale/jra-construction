import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Westminster Road, Balmoral | JRA Construction",
  description:
    "Explore the Westminster Road, Balmoral renovation and extension project by JRA Construction and Spooner Architectural.",
};

const projectDetails = [
  { label: "Date", value: "21/09/2022" },
  { label: "Client", value: "Brent & Kim" },
  { label: "Architect", value: "Spooner Architectural" },
  { label: "Project Type", value: "Renovation/Extension" },
];

const galleryImages = [
  "/projects/westminster-road-balmoral/westminster-road-tub.jpg",
  "/projects/westminster-road-balmoral/Bathroom-Vanity-Design.webp",
  "/projects/westminster-road-balmoral/westminster-road-shower.jpg",
  "/projects/westminster-road-balmoral/westminster-road-bathroom-design.jpg",
  "/projects/westminster-road-balmoral/Modern-Bathroom-Vanity.webp",
  "/projects/westminster-road-balmoral/westminster-road-towel-rails-1.jpg",
  "/projects/westminster-road-balmoral/westminster-road-kitchen-island.jpg",
  "/projects/westminster-road-balmoral/westminster-road-kitchen-shelf.jpg",
  "/projects/westminster-road-balmoral/westminster-road-kitchen-cabinetry.jpg",
  "/projects/westminster-road-balmoral/Kitchen-Countertop-Design.webp",
  "/projects/westminster-road-balmoral/Westminster-Road-Project-10.jpg",
  "/projects/westminster-road-balmoral/westminster-road-kitchen-wood.jpg",
  "/projects/westminster-road-balmoral/westminster-road-hallway.jpg",
  "/projects/westminster-road-balmoral/westminster-project-wall.webp",
  "/projects/westminster-road-balmoral/westminster-road-bathroom-vanity.jpg",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

export default function WestminsterRoadBalmoralPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/westminster-road-balmoral/westminster-road-bathroom-design.jpg"
          alt="Westminster Road, Balmoral Project Hero Image"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-white/90">Westminster Road, Balmoral</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation/Extension · Balmoral
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Westminster Road,<br />Balmoral
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              A careful renovation and extension of a classic Balmoral villa, blending modern living with original character.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROJECT OVERVIEW & DETAILS ───────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2744]/50">Project Details</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[42px]">
                Project Overview
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                This project involved the careful renovation and extension of a classic Balmoral villa, blending modern living with the home’s original character. The family wanted to update their outdated spaces while preserving the charm and style of their villa.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-4 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#0f2744]">Key Information</h3>
              <ul className="space-y-3">
                {projectDetails.map((item) => (
                  <li key={item.label} className="flex justify-between gap-4 text-[15px] leading-relaxed text-[#5f7286]">
                    <span className="font-medium text-[#0f2744]">{item.label}:</span>
                    <span>{item.value || "N/A"}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── WHAT WE DID ──────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2744]/50">Our Work</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[42px]">
                What We Did
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                We refreshed the existing bedrooms and hallway, including a new ensuite for the master bedroom, ensuring the updates complemented the villa’s original style. At the rear of the property, we extended the home to create a spacious new kitchen, dining, and living area, designed to meet the family’s needs for modern open-plan living.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Large sliding doors were added to connect the interior seamlessly with the rear deck and backyard, creating an inviting indoor-outdoor flow. The renovation successfully brought modern comfort and functionality to this character home while respecting its heritage charm.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/westminster-road-balmoral/westminster-road-kitchen-island.jpg"
                alt="What we did at Westminster Road, Balmoral"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── FINAL RESULT ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/westminster-road-balmoral/westminster-road-hallway.jpg"
                alt="Final result of Westminster Road, Balmoral Project"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2744]/50">Achieved Outcomes</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0f2744] sm:text-[42px]">
                Final Result
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The Westminster Road, Balmoral project represents JRA Construction’s unwavering commitment to delivering exceptional results that exceed client expectations. The final outcome is a home that harmoniously combines contemporary aesthetics with thoughtful functionality.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The modern living, kitchen, and dining room extension provide a spacious and welcoming area where Brent & Kim’s family can create lasting memories. The refreshed master bedroom and ensuite offer a serene retreat that reflects their personal style and enhances their daily lives. With the addition of the new main bathroom, the home has been transformed into a haven of convenience and luxury. Every aspect of this project showcases our dedication to craftsmanship, attention to detail, and client satisfaction.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── IMAGE GALLERY ────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Gallery</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[48px]">
              Project Showcase
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              A selection of images from the Westminster Road, Balmoral Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Westminster Road, Balmoral Project, highlighting key features and transformations."
          />
        </Container>
      </section>

      {/* ── BACK TO PROJECTS ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-10">
        <Container className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0f2744] transition hover:gap-4"
          >
            <span aria-hidden="true">←</span> Back to All Projects
          </Link>
        </Container>
      </section>
    </>
  );
}
