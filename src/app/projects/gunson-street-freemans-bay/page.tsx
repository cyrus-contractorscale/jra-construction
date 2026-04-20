import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Gunson Street Freemans Bay | JRA Construction",
  description:
    "Explore the Gunson Street, Freemans Bay Renovation project by JRA Construction: an extensive internal and external renovation maximizing outdoor living and functionality.",
};

const projectDetails = [
  { label: "Date", value: "08/10/2020" },
  { label: "Client", value: "Mark" },
  { label: "Architect", value: "" }, // No architect specified in the content
  { label: "Project Type", value: "Renovation" },
];

const galleryImages = [
  "/projects/gunson-street-freemans-bay/gunson-house-exterior.jpg",
  "/projects/gunson-street-freemans-bay/Gunson-Street-Freemans-Bay08.jpg",
  "/projects/gunson-street-freemans-bay/gunson-fence-closeup.jpg",
  "/projects/gunson-street-freemans-bay/gunson-fence-construction.jpg",
  "/projects/gunson-street-freemans-bay/gunson-fence-detail.jpg",
  "/projects/gunson-street-freemans-bay/gunson-pergola-frame.jpg",
  "/projects/gunson-street-freemans-bay/gunson-pergola-closeup.jpg",
  "/projects/gunson-street-freemans-bay/gunson-pergola-building.jpg",
  "/projects/gunson-street-freemans-bay/gunson-construction-detail.jpg",
  "/projects/gunson-street-freemans-bay/gunson-window-installation.jpg",
  "/projects/gunson-street-freemans-bay/gunson-light-detail.jpg",
  "/projects/gunson-street-freemans-bay/gunson-door-detail.jpg",
  "/projects/gunson-street-freemans-bay/gunson-interior-detail.jpg",
  "/projects/gunson-street-freemans-bay/gunson-room-glimpse.jpg",
  "/projects/gunson-street-freemans-bay/gunson-hallway-interior.jpg",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

export default function GunsonStreetFreemansBayPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/gunson-street-freemans-bay/gunson-house-exterior.jpg"
          alt="Gunson Street, Freemans Bay Project Hero Image"
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
            <span className="text-white/90">Gunson Street, Freemans Bay</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation · Freemans Bay
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Gunson Street,<br />Freemans Bay
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              An extensive internal and external renovation focused on creating a user-friendly space that maximizes outdoor living.
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
                Welcome to the Gunson Street, Freemans Bay Renovation project—where JRA Construction collaborated with Mark to revitalize his home through an extensive internal and external renovation. Our focus was on creating a user-friendly space that maximizes outdoor living and enhances the overall functionality of the property.
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
                The internal renovation involved reconfiguring the layout to create a seamless flow between indoor and outdoor areas. We enhanced the living spaces to encourage interaction with the outdoors and maximize natural light. Our team of professionals meticulously executed the design, ensuring a harmonious blend of functionality and aesthetics.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                For the external renovation, we focused on creating an inviting outdoor living area that reflects Mark’s desires. This included revitalizing the exterior spaces, optimizing landscaping, and creating a welcoming atmosphere for outdoor activities and relaxation. The design aimed to harmonize with the surrounding environment while providing a practical and visually appealing space for Mark and his family to enjoy. Throughout the project, we prioritized attention to detail, craftsmanship, and quality materials. Our goal was to create a transformed home that not only meets Mark’s needs but also exceeds his expectations.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/gunson-street-freemans-bay/gunson-pergola-frame.jpg"
                alt="What we did at Gunson Street"
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
                src="/projects/gunson-street-freemans-bay/gunson-interior-detail.jpg"
                alt="Final result of Gunson Street Project"
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
                The Gunson Street, Freemans Bay Renovation project showcases JRA Construction’s expertise in internal and external renovations that enhance outdoor living. The final outcome is a home that seamlessly integrates indoor and outdoor spaces, creating a user-friendly environment for Mark and his family.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The internal renovation has transformed the living spaces, ensuring a seamless flow and maximizing the connection with the outdoors. The revitalized exterior spaces provide an inviting and functional area for outdoor activities, entertaining, and relaxation.
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
              A selection of images from the Gunson Street, Freemans Bay Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Gunson Street, Freemans Bay Project, highlighting key features and transformations."
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
