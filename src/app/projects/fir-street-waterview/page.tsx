import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Fir Street, Waterview | JRA Construction",
  description:
    "Explore the Fir Street, Waterview renovation and extension project by JRA Construction and Hoxha Bailey Architects, creating functional, open-plan living spaces.",
};

const projectDetails = [
  { label: "Date", value: "04/08/2022" },
  { label: "Client", value: "Kane & Rochelle" },
  { label: "Architect", value: "Hoxha Bailey Architects" },
  { label: "Project Type", value: "Renovation & Extension" },
];

const galleryImages = [
  "/projects/fir-street-waterview/JRA-Waterview-Website-53.jpg",
  "/projects/fir-street-waterview/fir-living-space.jpg",
  "/projects/fir-street-waterview/fir-interior-view.jpg",
  "/projects/fir-street-waterview/fir-indoor-outdoor-connection.jpg",
  "/projects/fir-street-waterview/fir-living-room.jpg",
  "/projects/fir-street-waterview/fir-kitchen-renovation.jpg",
  "/projects/fir-street-waterview/fir-indoor-outdoor-living.jpg",
  "/projects/fir-street-waterview/fir-storage-solution.jpg",
  "/projects/fir-street-waterview/fir-dining-room.jpg",
  "/projects/fir-street-waterview/fir-kitchen-remodel.jpg",
  "/projects/fir-street-waterview/fir-kitchen-fixture.jpg",
  "/projects/fir-street-waterview/fir-laundry-renovation.jpg",
  "/projects/fir-street-waterview/fir-patio-view.jpg",
  "/projects/fir-street-waterview/fir-outdoor-deck.jpg",
  "/projects/fir-street-waterview/fir-bathroom-renovation.jpg",
  "/projects/fir-street-waterview/bathroom-renovation-fir.jpg",
  "/projects/fir-street-waterview/vanity-fir-street.jpg",
  "/projects/fir-street-waterview/outdoor-indoor-design.jpg",
  "/projects/fir-street-waterview/fir-street-patio.jpg",
  "/projects/fir-street-waterview/roof-top-view.jpg",
  "/projects/fir-street-waterview/yard-renovation-fir.jpg",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

export default function FirStreetWaterviewPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/fir-street-waterview/fir-living-space.jpg"
          alt="Fir Street, Waterview Project Hero Image"
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
            <span className="text-white/90">Fir Street, Waterview</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation & Extension · Waterview
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Fir Street,<br />Waterview
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              A renovation and extension project creating functional, open-plan living spaces seamlessly blending indoor and outdoor areas.
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
                Welcome to the Fir Street, Waterview renovation and extension project, where JRA Construction collaborated with Hoxha Bailey Architects to breathe new life into Kane & Rochelle’s home. This project showcases our commitment to creating functional, open-plan living spaces that seamlessly blend indoor and outdoor areas, enhancing the lifestyle of our valued clients.
              </p>
              <p className="text-[17px] font-semibold text-[#0f2744]">NATIONAL AWARDS WON: Top 100</p>
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
                In close collaboration with Hoxha Bailey Architects, our team meticulously transformed the existing property, focusing on creating a more user-friendly and open-plan environment that perfectly suited Kane & Rochelle’s needs.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The heart of this project was the extension and renovation of the living area. Our team worked diligently to expand and open up this space, allowing for a more seamless flow and improved functionality. The addition of a new kitchen, along with a refreshed living and dining area, created a modern and inviting space that catered to their lifestyle and preferences. One of our primary objectives was to enhance the indoor-outdoor connection. We carefully designed and incorporated features that allowed for a seamless transition between the indoor living spaces and the outdoor environment. The result is a harmonious blend of the two, offering Kane & Rochelle the opportunity to enjoy their home’s natural surroundings.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/fir-street-waterview/fir-interior-view.jpg"
                alt="What we did at Fir Street, Waterview"
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
                src="/projects/fir-street-waterview/fir-living-room.jpg"
                alt="Final result of Fir Street, Waterview Project"
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
                The Fir Street, Waterview renovation and extension project reflects JRA Construction’s commitment to delivering exceptional results tailored to our client’s unique needs. The final outcome is a transformed dwelling that boasts an expanded and user-friendly living area, an open-plan design, and a seamless connection between indoor and outdoor spaces.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The new kitchen serves as a central hub for culinary endeavors and family gatherings, blending functionality and style. The refreshed living and dining area complements the surrounding environment, offering a welcoming and comfortable atmosphere for everyday living. At JRA Construction, we take pride in our ability to create spaces that exceed expectations. The Fir Street, Waterview project showcases our dedication to craftsmanship, attention to detail, and client satisfaction.
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
              A selection of images from the Fir Street, Waterview Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Fir Street, Waterview Project, highlighting key features and transformations."
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
