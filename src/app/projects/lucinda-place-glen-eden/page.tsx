import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Lucinda Place, Glen Eden | JRA Construction",
  description:
    "Explore the Lucinda Place, Glen Eden new build project by JRA Construction, Guman Developer Ltd, and Tarzan Design, comprising four units.",
};

const projectDetails = [
  { label: "Date", value: "17/10/2021" },
  { label: "Client", value: "Guman Developer Ltd" },
  { label: "Architect", value: "Tarzan Design" },
  { label: "Project Type", value: "New Build" },
];

const galleryImages = [
  "/projects/lucinda-place-glen-eden/lucinda-place-units.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-place-townhouse.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-place-entrance.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-place-livingroom.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-living-space.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-living-dining.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-kitchen-design.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-kitchen-dining.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-dining-area.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-interior-design.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-bedroom-design.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-bedroom-storage.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-bedroom-window.jpg",
  "/projects/lucinda-place-glen-eden/lucinda-bathroom-interior.jpg",
  "/projects/lucinda-place-glen-eden/Lucinda-Place-Glen-Eden-In-Progress-02.jpg",
  "/projects/lucinda-place-glen-eden/Lucinda-Place-Glen-Eden-In-Progress-14.jpg",
];

export default function LucindaPlaceGlenEdenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/lucinda-place-glen-eden/lucinda-place-units.jpg"
          alt="Lucinda Place, Glen Eden Project Hero Image"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-white/90">Lucinda Place, Glen Eden</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              New Build · Glen Eden
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Lucinda Place,<br />Glen Eden
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              A new build endeavor comprising four units, showcasing high standards of craftsmanship and contemporary design.
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
                Lucinda Place project in Glen Eden is a new build endeavor undertaken by JRA Construction in collaboration with Guman Developer Ltd and Tarzan Design. It comprises four units, and we are proud to announce that two of them are nearing completion. Our experienced team of professionals has been working meticulously to ensure that every aspect of the construction meets the highest standards of craftsmanship and design.
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
                We are currently in the construction phase, diligently bringing this new build project to life. Throughout the construction phase, we have prioritized attention to detail, utilizing premium materials and incorporating modern building techniques. Our collaboration with Guman Developer Ltd and Tarzan Design has allowed us to create homes that boast contemporary aesthetics, functionality, and energy efficiency.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/lucinda-place-glen-eden/lucinda-place-entrance.jpg"
                alt="What we did at Lucinda Place, Glen Eden"
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
                src="/projects/lucinda-place-glen-eden/lucinda-place-townhouse.jpg"
                alt="Final result of Lucinda Place, Glen Eden Project"
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
                The Lucinda Place project in Glen Eden is a testament to JRA Construction's dedication to delivering exceptional new build projects. With two of the four units nearing completion, we are excited about the final outcome, promising quality craftsmanship and modern design.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Each unit reflects our commitment to creating homes that harmonize with the surrounding environment while meeting the needs of future residents. The combination of thoughtful design, meticulous construction, and high-quality finishes will create a welcoming and functional space for residents to call home.
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
              A selection of images from the Lucinda Place, Glen Eden Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Lucinda Place, Glen Eden Project."
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
