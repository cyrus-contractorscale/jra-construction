import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "Mcleod Road, Te Atatu - JRA Construction" },
  description:
    "The Mcleod Road, Te Atatu development focuses on building a new residential project guided by the design direction of Mercury Architecture. The aim is to cre…",
  alternates: { canonical: "/projects/mcleod-road-te-atatu" },
};

const projectDetails = [
  { label: "Date", value: "08/12/2025" },
  { label: "Client", value: "Guman Developer Ltd" },
  { label: "Architect", value: "Mercury Architecture" },
  { label: "Project Type", value: "Development" },
];

const galleryImages = [
  "/projects/mcleod-road-te-atatu/McleodRD-77-scaled.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-77-scaled-rfu37oausqwcuae8fxxr9fu0c9t4l84yefuqz3h21s.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-2-scaled-rfu38m51ms6og912yckbr7alq56cabvaj3c8922vts.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-8-scaled-rfu395vnmaxp828er33hpkba78h1rz1nlt1fbv9m74.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-16-scaled-rfu39rhxzhran3d08ufwswuvv3ihp0fhcs1ld8dk80.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-17-scaled-rfu3ae22jim6dqg8l46ygr5y4cfatqx1fvp8vvg42o.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-29-scaled-rfu3ar7t7746w9x4g9vqfnuefqmftida5ou1lqwlnk.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-31-scaled-rfu3b6988jos21ba0gdrjk1rxwkb8o0zjr9ta6aaw0.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-41-scaled-rfu3bygdxkrdqc6bfskkmcxlrgpbnl4xnmudoh4hpc.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-72-scaled-rfu3ck2oarkz5dawxjwzpph7fbqrkmirelujpu8fq8.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-77-1-scaled-rfu3d0zrps84ycmc6r89yl7i49fdf6dxgxlactjcm8.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-80-1-scaled-rfu3dnjw9t30ozpkj0zbmfikdic6jwvhk18xvglwgw.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-81-1-scaled-rfu3e5etvnrgtkzmmqp8ft0bntw5m5udyhn5zpvf6o.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-82-1-scaled-rfu3ejieq6arnqf5cesmz7g8klyntmed0ffg6vailc.jpg",
  "/projects/mcleod-road-te-atatu/McleodRD-92-1-scaled-rfu3evqb70rhunxed22sdmd8amafloqve3wrfgsecg.jpg",
];

const overviewParas = [
  "The Mcleod Road, Te Atatu development focuses on building a new residential project guided by the design direction of Mercury Architecture. The aim is to create a functional layout, strong structural flow and a clean modern finish that aligns with the goals of Guman Developer Ltd. The project brings together practical planning, efficient space use and a design approach suited to the location."
];

const whatWeDidParas = [
  "We are working with Mercury Architecture to deliver each stage of the development process. The work includes site preparation, structural construction and coordination of trades to follow the approved plans. We monitor framing, exterior progress and internal fit-out as the project moves forward. All tasks are tracked to keep quality high and ensure the build matches the specifications set by Guman Developer Ltd. Our team keeps communication clear, manages onsite activity and maintains steady progress as the development continues."
];

export default function McleodRoadTeAtatuPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/mcleod-road-te-atatu/McleodRD-77-scaled.jpg"
          alt="Mcleod Road, Te Atatu"
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
            <span className="text-white/90">Mcleod Road, Te Atatu</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Development
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mcleod Road, Te Atatu
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              {overviewParas[0].split(". ")[0] + "."}
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROJECT OVERVIEW & DETAILS ───────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#293a57]/50">Project Details</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                Project Overview
              </h2>
              {overviewParas.map((para) => (
                <p key={para.slice(0, 40)} className="text-[17px] leading-[1.65] text-[#4d6277]">{para}</p>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-4 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#293a57]">Key Information</h3>
              <ul className="space-y-3">
                {projectDetails.map((item) => (
                  <li key={item.label} className="flex justify-between gap-4 text-[15px] leading-relaxed text-[#5f7286]">
                    <span className="font-medium text-[#293a57]">{item.label}:</span>
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#293a57]/50">Our Work</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                What We Did
              </h2>
              {whatWeDidParas.map((para) => (
                <p key={para.slice(0, 40)} className="text-[17px] leading-[1.65] text-[#4d6277]">{para}</p>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/mcleod-road-te-atatu/McleodRD-77-scaled-rfu37oausqwcuae8fxxr9fu0c9t4l84yefuqz3h21s.jpg"
                alt="McleodRD-77"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── IMAGE GALLERY ────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Gallery</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              Project Showcase
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#5f7286]">
              {`A selection of images from the ${"Mcleod Road, Te Atatu"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"Mcleod Road, Te Atatu"} project.`}
          />
        </Container>
      </section>

      {/* ── BACK TO PROJECTS ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-10">
        <Container className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#293a57] transition hover:gap-4"
          >
            <span aria-hidden="true">←</span> Back to All Projects
          </Link>
        </Container>
      </section>
    </>
  );
}
