import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Te Wiata Place, Avondale | JRA Construction",
  description:
    "Explore the Te Wiata Place, Avondale extension and renovation project by JRA Construction and Drawn Architects.",
};

const projectDetails = [
  { label: "Date", value: "04/08/2022" },
  { label: "Client", value: "Grace & Jaden" },
  { label: "Architect", value: "Drawn" },
  { label: "Project Type", value: "Extension/Renovation" },
];

const galleryImages = [
  "/projects/te-wiata-place-avondale/renovation-window-reflection.jpg",
  "/projects/te-wiata-place-avondale/Te-Wiata-Place-Avondale-Project-13.jpg",
  "/projects/te-wiata-place-avondale/Te-Wiata-Place-Avondale-Project-19.jpg",
  "/projects/te-wiata-place-avondale/avondale-bedroom-touch.webp",
  "/projects/te-wiata-place-avondale/te-wiata-bedroom.webp",
  "/projects/te-wiata-place-avondale/master-bedroom-windows.jpg",
  "/projects/te-wiata-place-avondale/glass-patio-doors.jpg",
  "/projects/te-wiata-place-avondale/jra-home-building-services.webp",
  "/projects/te-wiata-place-avondale/aerial-home-renovation.webp",
  "/projects/te-wiata-place-avondale/te-wiata-stair-renovation.webp",
  "/projects/te-wiata-place-avondale/modern-deck-entrance.webp",
  "/projects/te-wiata-place-avondale/Home-Expansion.webp",
  "/projects/te-wiata-place-avondale/te-wiata-design.webp",
  "/projects/te-wiata-place-avondale/top-view-house-layout.jpg",
  "/projects/te-wiata-place-avondale/modern-window-closeup.jpg",
  "/projects/te-wiata-place-avondale/avondale-staircase-exterior.webp",
  "/projects/te-wiata-place-avondale/exterior-window-sideview.jpg",
  "/projects/te-wiata-place-avondale/orner-window-architecture.jpg",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

export default function TeWiataPlaceAvondalePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/te-wiata-place-avondale/renovation-window-reflection.jpg"
          alt="Te Wiata Place, Avondale Project Hero Image"
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
            <span className="text-white/90">Te Wiata Place, Avondale</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Extension/Renovation · Avondale
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Te Wiata Place,<br />Avondale
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              An extension and renovation project creating spaces that cater to the unique needs of families.
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
                Welcome to the Te Wiata Place, Avondale extension and renovation project—where JRA Construction joined forces with Drawn Architects to bring Grace and Jaden’s vision to life. This project exemplifies our commitment to creating spaces that cater to the unique needs of families, particularly in anticipation of a new little family member.
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
                JRA Construction embarked on an exciting extension and renovation project at Te Wiata Place, Avondale, with the clock ticking to create a livable space for Grace, Jaden, and their growing family. In collaboration with Drawn Architects, we meticulously rebuilt and renovated the existing master bedroom, adding a new ensuite to enhance the functionality and comfort of the space.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Our team worked diligently to create a master bedroom that would be a welcoming sanctuary for the family. The rebuilt bedroom was designed to accommodate the needs of raising a family, with ample space for a growing child and their belongings. Every detail, from the layout to the finishes, was carefully considered to create a harmonious and comfortable environment. To complement the rejuvenated master bedroom, we added a new ensuite that offers convenience and privacy. The ensuite was thoughtfully designed to ensure it meets the requirements of Grace, Jaden, and their little one. The incorporation of modern fixtures and finishes elevates the space, creating a functional and aesthetically pleasing retreat. Throughout the extension and renovation process, we paid meticulous attention to detail and craftsmanship. Our goal was to deliver a space that not only met the family’s immediate needs but also provided a foundation for a happy and comfortable home for years to come.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/te-wiata-place-avondale/te-wiata-bedroom.webp"
                alt="What we did at Te Wiata Place, Avondale"
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
                src="/projects/te-wiata-place-avondale/master-bedroom-windows.jpg"
                alt="Final result of Te Wiata Place, Avondale Project"
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
                The Te Wiata Place, Avondale project showcases JRA Construction’s dedication to delivering exceptional results tailored to the specific needs of our clients. The final outcome is a transformed master bedroom and a new ensuite that provide a welcoming and functional space for Grace, Jaden, and their growing family.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The rebuilt master bedroom offers ample space for the family to create lasting memories. The new ensuite enhances convenience and privacy, ensuring a comfortable living environment. The attention to detail and quality craftsmanship evident in every aspect of the project reflect our commitment to client satisfaction.
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
              A selection of images from the Te Wiata Place, Avondale Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Te Wiata Place, Avondale Project, highlighting key features and transformations."
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
