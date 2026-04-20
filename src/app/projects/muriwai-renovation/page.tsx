import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Muriwai Renovation | JRA Construction",
  description:
    "Explore the Muriwai Renovation project by JRA Construction: enhancing outdoor spaces with new fencing, gates, and sheds complementing the natural surroundings.",
};

const projectDetails = [
  { label: "Date", value: "08/10/2020" },
  { label: "Client", value: "Robin" },
  { label: "Architect", value: "" },
  { label: "Project Type", value: "Renovation" },
];

const galleryImages = [
  "/projects/muriwai-renovation/muriwai-property-exterior.jpg",
  "/projects/muriwai-renovation/muriwai-property-view.jpg",
  "/projects/muriwai-renovation/muriwai-fence-closeup.jpg",
  "/projects/muriwai-renovation/muriwai-fence-design.jpg",
  "/projects/muriwai-renovation/muriwai-fence-installation.jpg",
  "/projects/muriwai-renovation/muriwai-fence-perspective.jpg",
  "/projects/muriwai-renovation/muriwai-renovation-fence.webp",
  "/projects/muriwai-renovation/muriwai-outdoor-structures.jpg",
  "/projects/muriwai-renovation/muriwai-garden-shed.jpg",
  "/projects/muriwai-renovation/muriwai-garden-sheds.webp",
  "/projects/muriwai-renovation/muriwai-shed-construction.jpg",
  "/projects/muriwai-renovation/Coastal-Renovation-Site.webp",
  "/projects/muriwai-renovation/Renovated-Cabin.webp",
  "/projects/muriwai-renovation/Garden-Shed-Closed.webp",
  "/projects/muriwai-renovation/Muriwai-Renovation06.jpg",
];

export default function MuriwaiRenovationPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/muriwai-renovation/muriwai-property-exterior.jpg"
          alt="Muriwai Renovation Project Hero Image"
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
            <span className="text-white/90">Muriwai Renovation</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation · Muriwai
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Muriwai<br />Renovation
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Enhancing outdoor spaces with new fencing, gates, and sheds, complementing the natural surroundings of Muriwai.
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
                JRA Construction collaborated with Robin to enhance the outdoor spaces of their property. Our focus for this project was on incorporating new fencing, gates, and sheds that complement the natural surroundings of Muriwai—offering both functionality and aesthetic appeal.
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
                We took on the Muriwai Renovation project with a commitment to enhancing the outdoor spaces of Robin's property. Our goal was to create a harmonious connection between the property and the beautiful natural environment that Muriwai has to offer.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                We meticulously planned and executed the installation of new fencing, ensuring it not only provided privacy and security but also blended seamlessly with the surroundings. Additionally, we installed new gates and constructed sheds that provided additional storage and utility areas—incorporating materials and colors that harmonize with the environment.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/muriwai-renovation/muriwai-fence-installation.jpg"
                alt="What we did at Muriwai Renovation"
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
                src="/projects/muriwai-renovation/Muriwai-Renovation06.jpg"
                alt="Final result of Muriwai Renovation Project"
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
                The Muriwai Renovation project showcases JRA Construction's dedication to enhancing outdoor spaces with careful consideration for the natural surroundings. The final outcome is a property that exudes both functionality and aesthetic appeal.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The new fencing provides privacy and security while blending seamlessly with the natural beauty of Muriwai. The gates offer an inviting entrance that reflects the character of the area. The sheds not only provide additional storage and utility but also harmonize with the natural surroundings—enhancing the overall visual appeal of the property.
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
              A selection of images from the Muriwai Renovation Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Muriwai Renovation Project."
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
