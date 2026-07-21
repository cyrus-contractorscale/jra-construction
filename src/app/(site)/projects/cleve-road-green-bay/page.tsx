import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "Cleve Road, Green Bay - JRA Construction" },
  description:
    "This Green Bay development features eight modern townhouses—six 2-bedroom units and two 3-bedroom units, with garages for the larger homes. The design, by Fo…",
  alternates: { canonical: "/projects/cleve-road-green-bay" },
};

const projectDetails = [
  { label: "Date", value: "17/10/2025" },
  { label: "Client", value: "JRA Group Ltd" },
  { label: "Architect", value: "FORMiS Ltd" },
  { label: "Project Type", value: "New build development" },
];

const galleryImages = [
  "/projects/cleve-road-green-bay/15_cleve_day_hr-25-scaled.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-37-scaled.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-1-scaled-rgbe3hv38rf3nyjl2rgkcv76rpncst5iq1tdwng80w.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-3-scaled-rgbe43hdly8p2zo6kiszg7qsfkospujch0tjy0k61s.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-4-scaled-rgbe4keh0yvuvyzltq49p3h34idekeeijckakzv2xs.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-6-scaled-rgbe59s45hullfyqpj372f2j5wwbc879mu6ejgtg9s.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-8-scaled-rgbe5skvy6kc1n7fnr7qgabr1mbnm69wdf84501ktc.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-9-scaled-rgbe6ju7gdlnec3u8kzwylg49slatea4565720x5sw.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-10-scaled-rgbe7a5orqloff1lywdgwet0wkzksx6lkseshru4yo.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-14-scaled-rgbe83aonlpkfbva8qywjpgbbizyfjea0smudcmxls.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-17-scaled-rgbe8nz4tyhvir18vzwp2k8ge0614vodfmzixfs9sw.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-21-scaled-rgbe9aj9dzcr9e4h89nqqejin92u9m5xiqn6g2utnk.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-27-scaled-rgbea1skw6e2m30vt3fx8pnvvfchgu65ahk9d3qen4.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-28-scaled-rgbeavveyvj8xlt6xgfzgi2mvr88b5hk2mfspyht40.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-31-scaled-rgbebhhpc2cucmxsf7sejum8jm9o86vdtlfyrblr4w.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-34-scaled-rgbec6vcglbl23wxb0rbx67ol0sl00o4x322psk4gw.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-37-scaled-rgbecvb5ea91fyxfcbbmq01o11g4k5d5og0p6zjvz4.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-39-scaled-rgbedhv9yb3x6m0nol2oducqaacxovuprjocpmmfts.jpg",
  "/projects/cleve-road-green-bay/15_cleve_day_hr-42-scaled-rgbeelchxclyq8fba250ake38gyco67fwz2qv8zwkg.jpg",
];

const overviewParas = [
  "This Green Bay development features eight modern townhouses—six 2-bedroom units and two 3-bedroom units, with garages for the larger homes. The design, by Formis Architects, combines terracotta brick and fibre cement board cladding, giving the development a contemporary, high-quality look while keeping the build cost-effective. The site itself was challenging, with limited space and tricky drainage issues, but careful planning and a hands-on approach allowed the team to deliver a development that residents can enjoy for years to come."
];

const whatWeDidParas = [
  "JRA Construction took care of the entire build, handling everything from start to finish:",
];

const whatWeDidList = [
  "Final planning and council approvals",
  "Site preparation and earthworks",
  "Managing drainage challenges",
  "Construction of all eight units",
  "Installation of exterior finishes, including terracotta brick and fibre cement cladding",
  "Interior fit-out and detailing",
  "Landscaping and final sign-off",
];

const whatWeDidClosing =
  "From planning to handover, we made sure the project ran smoothly despite the tight site, delivering a development that feels modern, practical, and built to last.";

export default function CleveRoadGreenBayPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/cleve-road-green-bay/15_cleve_day_hr-25-scaled.jpg"
          alt="Cleve Road, Green Bay"
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
            <span className="text-white/90">Cleve Road, Green Bay</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              New build development
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Cleve Road, Green Bay
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
              <ul className="list-disc space-y-2 pl-5 text-[17px] leading-[1.65] text-[#4d6277]">
                {whatWeDidList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">{whatWeDidClosing}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/cleve-road-green-bay/15_cleve_day_hr-37-scaled.jpg"
                alt="What we did at Cleve Road, Green Bay"
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
              {`A selection of images from the ${"Cleve Road, Green Bay"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"Cleve Road, Green Bay"} project.`}
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
