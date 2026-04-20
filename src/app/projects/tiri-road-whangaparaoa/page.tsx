import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Tiri Road, Whangaparāoa | JRA Construction",
  description:
    "Explore the Tiri Road, Whangaparāoa new build project by JRA Construction: a complete new build balancing architectural features with practical family living.",
};

const projectDetails = [
  { label: "Date", value: "16/03/2022" },
  { label: "Client", value: "Jack & Janelle" },
  { label: "Architect", value: "Alignworks" },
  { label: "Project Type", value: "New Builds" },
];

const galleryImages = [
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-04-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-06-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-07-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-10-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-11-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-12-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-13-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-14-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-15-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-19-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-21-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-DSC05432-HDR-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-DSC05544-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/Copy-of-winna-scaled.jpg",
  "/projects/tiri-road-whangaparaoa/1344808360982847847.jpg",
  "/projects/tiri-road-whangaparaoa/13945328131721365882.jpg",
  "/projects/tiri-road-whangaparaoa/15247970808966046308.jpg",
  "/projects/tiri-road-whangaparaoa/16080498873894315134.jpg",
  "/projects/tiri-road-whangaparaoa/1870803051076340408.jpg",
  "/projects/tiri-road-whangaparaoa/2008295763949552969-1.jpg",
  "/projects/tiri-road-whangaparaoa/4543271364252587739.jpg",
  "/projects/tiri-road-whangaparaoa/8065066918310750961.jpg",
];

export default function TiriRoadWhangaparaoaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-04-scaled.jpg"
          alt="Tiri Road, Whangaparāoa Project Hero Image"
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
            <span className="text-white/90">Tiri Road, Whangaparāoa</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              New Builds · Whangaparāoa
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tiri Road,<br />Whangaparāoa
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              A complete new build project balancing strong architectural features with practical, comfortable family living.
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
                Located at 50 Tiri Road, Whangaparaoa, this project was a complete new build on a previously bare section, designed by Alignworks for clients Jack and Janelle. The home was carefully planned to balance strong architectural features with practical, comfortable family living, all while staying within a defined budget.
              </p>
              <p className="text-[17px] font-semibold text-[#0f2744]">REGIONAL AWARDS WON: Regional Silver</p>
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
                JRA Construction was involved from the early feasibility stage, working closely with the clients to provide initial costing and construction advice. We collaborated with the design team to refine the plans, going back and forth to ensure the final design aligned with both the clients' vision and their budget expectations.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Once the design was finalised, we delivered the project as a full turnkey build, constructing a four-bedroom family home from the ground up. Key exterior features include metal Spanlok cladding and roofing, complemented by cedar soffits and feature accent walls. Internally, the open-plan kitchen, dining, and living area is highlighted by a striking timber ceiling, creating a warm and inviting space that ties the home together.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-06-scaled.jpg"
                alt="What we did at Tiri Road, Whangaparāoa"
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
                src="/projects/tiri-road-whangaparaoa/Copy-of-AK-52159-1-7-07-scaled.jpg"
                alt="Final result of Tiri Road, Whangaparāoa Project"
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
                The Tiri Road, Whangaparāoa new build project is a testament to JRA Construction's commitment to excellence and creating dream homes. The final result is an exquisite residence that showcases exceptional craftsmanship and attention to detail.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Every aspect of the home exudes sophistication and functionality. From the well-appointed living spaces to the spacious bedrooms and luxurious bathrooms, no detail has been overlooked. The home's design maximizes natural light and offers seamless integration between indoor and outdoor living areas, allowing Jack & Janelle to enjoy the beautiful surroundings of Whangaparāoa.
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
              A selection of images from the Tiri Road, Whangaparāoa Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Tiri Road, Whangaparāoa Project."
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
