import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "Bellevue - JRA Construction" },
  description:
    "This Bellevue project was a full renovation and extension of a 1980s family home for clients Steve and Emma, with designs by Four Walls Architecture. We refr…",
  alternates: { canonical: "/projects/bellevue" },
};

const projectDetails = [
  { label: "Date", value: "01/05/2021" },
  { label: "Client", value: "Steve & Emma" },
  { label: "Architect", value: "Four walls architecture" },
  { label: "Project Type", value: "Renovation and Extension" },
];

const galleryImages = [
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-2.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-23.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-1.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-3.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-4.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-6.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-8.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-10.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-12.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-13.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-14.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-15.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-16.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-17.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-18.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-39.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-21.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-22.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-27.jpg",
  "/projects/bellevue/JRA-Belle-Vue-Website-Ready-36.jpg",
];

const overviewParas = [
  "This Bellevue project was a full renovation and extension of a 1980s family home for clients Steve and Emma, with designs by Four Walls Architecture. We refreshed the living, dining, and kitchen areas to improve indoor–outdoor flow and added a fourth bedroom to accommodate their growing family. The aim was an updated, functional family home with modern appeal. The end result fits naturally with the area and meets the clients’ lifestyle needs."
];

const whatWeDidParas = [
  "Our team took on the complete renovation and extension—from planning through to delivery. We reclad the exterior in Weathertex, installed double-glazed windows and doors throughout, and updated key living areas. On the outside, we built a new deck and entertaining area complete with a spa. We managed all parts of the project—coordinating trades, ordering materials, and keeping the build on time and budget. We stayed in close contact with Steve and Emma and the architect to make sure everything aligned with their expectations."
];

const finalResultParas = [
  "The updated Bellevue home now offers better indoor–outdoor flow, modern finishes, and additional living space. The new bedroom meets the family’s needs, and the outdoor deck with spa enhances their entertaining options. The refreshed exterior and upgraded cladding give the home a clean, contemporary look while tying in with the rest of the neighbourhood. Steve and Emma are pleased with a spacious, stylish, and well-thought-out home that reflects their vision."
];

export default function BellevuePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/bellevue/JRA-Belle-Vue-Website-Ready-2.jpg"
          alt="Custom Home Interior"
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
            <span className="text-white/90">Bellevue</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation and Extension
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Bellevue
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
                src="/projects/bellevue/JRA-Belle-Vue-Website-Ready-23.jpg"
                alt="Stylish kitchen with modern island"
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
                src="/projects/bellevue/JRA-Belle-Vue-Website-Ready-1.jpg"
                alt="a room with a book shelf and a couch"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#293a57]/50">Achieved Outcomes</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#293a57] sm:text-[42px]">
                Final Result
              </h2>
              {finalResultParas.map((para) => (
                <p key={para.slice(0, 40)} className="text-[17px] leading-[1.65] text-[#4d6277]">{para}</p>
              ))}
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
              {`A selection of images from the ${"Bellevue"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"Bellevue"} project.`}
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
