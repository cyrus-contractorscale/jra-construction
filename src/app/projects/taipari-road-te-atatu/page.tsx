import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Taipari Road, Te Atatu | JRA Construction",
  description:
    "Explore the Taipari Road, Te Atatu project by JRA Construction: a remarkable external reclad and renovation rejuvenating an outdated property.",
};

const projectDetails = [
  { label: "Date", value: "08/10/2020" },
  { label: "Client", value: "Amelia & Mat" },
  { label: "Architect", value: "" }, // No architect specified in the content
  { label: "Project Type", value: "Maintenance" },
];

const galleryImages = [
  "/projects/taipari-road-te-atatu/taipari-road-transformation.webp",
  "/projects/taipari-road-te-atatu/Taipari-Road-Te-Atatu02.jpg",
  "/projects/taipari-road-te-atatu/Taipari-Road-Te-Atatu07.jpg",
  "/projects/taipari-road-te-atatu/exterior-siding-detail.jpg",
  "/projects/taipari-road-te-atatu/modern-facade-te-atatu.jpg",
  "/projects/taipari-road-te-atatu/window-siding-revamp.jpg",
  "/projects/taipari-road-te-atatu/turquoise-front-door.jpg",
  "/projects/taipari-road-te-atatu/stylish-door-closeup.jpg",
  "/projects/taipari-road-te-atatu/glass-window-taipari.jpg",
  "/projects/taipari-road-te-atatu/taipari-road-patio.webp",
  "/projects/taipari-road-te-atatu/renovated-home-backview.jpg",
  "/projects/taipari-road-te-atatu/updated-windows-te-atatu.jpg",
  "/projects/taipari-road-te-atatu/Wooden-Staircase-Detail.webp",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

export default function TaipariRoadTeAtatuPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/taipari-road-te-atatu/taipari-road-transformation.webp"
          alt="Taipari Road, Te Atatu Project Hero Image"
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
            <span className="text-white/90">Taipari Road, Te Atatu</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Maintenance · Te Atatu
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Taipari Road,<br />Te Atatu
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Rejuvenating an outdated property through an external reclad and renovation for Amelia and Mat.
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
                Welcome to the Taipari Road, Te Atatu project—where JRA Construction took on the task of rejuvenating an outdated property through an external reclad and renovation. Our expertise and commitment to excellence shine through in the remarkable transformation of this home for Amelia and Mat.
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
                At JRA Construction, we recognized the need to breathe new life into the property on Taipari Road. Amelia and Mat entrusted us with the task of carrying out an external reclad and renovation to give their home a fresh and modern look.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Our experienced team meticulously executed the recladding process, ensuring the exterior of the property was not only aesthetically pleasing but also well-protected against the elements. We utilized quality materials and employed industry best practices to achieve a durable and visually appealing finish. In addition to the external reclad, we undertook a comprehensive renovation of the property’s interior. Our aim was to create a space that Amelia and Mat would be proud to call home. We upgraded outdated features, enhanced the functionality of different areas, and incorporated modern design elements that reflect their personal style and preferences. Throughout the project, we prioritized attention to detail, craftsmanship, and quality. Our goal was to not only improve the aesthetics but also enhance the overall functionality and livability of the home.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/taipari-road-te-atatu/exterior-siding-detail.jpg"
                alt="What we did at Taipari Road, Te Atatu"
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
                src="/projects/taipari-road-te-atatu/modern-facade-te-atatu.jpg"
                alt="Final result of Taipari Road, Te Atatu Project"
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
                The Taipari Road, Te Atatu project showcases JRA Construction’s commitment to delivering exceptional results through external reclad and renovation projects. The final outcome is a transformed property that exudes modernity and sophistication.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The external reclad has revitalized the appearance of the home, giving it a fresh and appealing look. The carefully chosen materials and expert installation ensure long-term durability and protection. Inside the home, the comprehensive renovation has created a space that truly reflects Amelia and Mat’s lifestyle and preferences. The updated features, improved layout, and modern design elements have transformed the property into a comfortable and inviting haven.
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
              A selection of images from the Taipari Road, Te Atatu Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Taipari Road, Te Atatu Project, highlighting key features and transformations."
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
