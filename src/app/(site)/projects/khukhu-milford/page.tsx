import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "KhuKhu Milford - JRA Construction" },
  description:
    "This restaurant fitout project transformed a Milford space into the latest KhuKhu vegan Thai eatery. JRA Construction worked closely with the owners to refre…",
  alternates: { canonical: "/projects/khukhu-milford" },
};

const projectDetails = [
  { label: "Date", value: "11/05/2023" },
  { label: "Client", value: "KHU KHU" },
  { label: "Architect", value: "N/A" },
  { label: "Project Type", value: "Interior fitout" },
];

const galleryImages = [
  "/projects/khukhu-milford/khukhumilford-1.jpg",
  "/projects/khukhu-milford/khukhumilford-8.jpg",
  "/projects/khukhu-milford/khukhumilford-2.jpg",
  "/projects/khukhu-milford/khukhumilford-3.jpg",
  "/projects/khukhu-milford/khukhumilford-4.jpg",
  "/projects/khukhu-milford/khukhumilford-5.jpg",
  "/projects/khukhu-milford/khukhumilford-6.jpg",
  "/projects/khukhu-milford/khukhumilford-7.jpg",
  "/projects/khukhu-milford/khukhumilford-9.jpg",
  "/projects/khukhu-milford/khukhumilford-10.jpg",
  "/projects/khukhu-milford/khukhumilford-11.jpg",
  "/projects/khukhu-milford/khukhumilford-12.jpg",
  "/projects/khukhu-milford/khukhumilford-13.jpg",
  "/projects/khukhu-milford/khukhumilford-14.jpg",
  "/projects/khukhu-milford/khukhumilford-15.jpg",
  "/projects/khukhu-milford/khukhumilford-16.jpg",
  "/projects/khukhu-milford/khukhumilford-17.jpg",
  "/projects/khukhu-milford/khukhumilford-18.jpg",
  "/projects/khukhu-milford/khukhumilford-19.jpg",
  "/projects/khukhu-milford/khukhumilford-20.jpg",
];

const overviewParas = [
  "This restaurant fitout project transformed a Milford space into the latest KhuKhu vegan Thai eatery. JRA Construction worked closely with the owners to refresh the interior, bringing a vibrant and modern feel to match the brand’s style. The design focused on creating a welcoming, community-focused space—complete with comfortable seating, stylish lighting, and clean finishes. Every detail was aimed at enhancing the dining experience and supporting KhuKhu’s signature vegan Thai menu. The result is a fresh, inviting restaurant ready for locals and visitors alike."
];

const whatWeDidParas = [
  "We worked in partnership with the restaurant owners to deliver the new fitout smoothly and efficiently. Our team handled everything from coordinating trades to managing deliveries and site logistics. We kept a strong focus on quality and design consistency, making sure the finishings reflected the KhuKhu brand. Communication was key—we stayed in touch with the owners throughout, ensuring their vision was met. Overall, we delivered a fitout that was on time, on budget, and true to the concept."
];

const finalResultParas = [
  "The new KhuKhu Milford is now a bright, stylish space that feels modern and fun. The layout flows well, with seating that suits solo diners and groups alike. The fitout supports the restaurant’s community vibe and adds to its appeal as a local gathering spot. Feedback from the owners was positive—they appreciated the smooth delivery and attention to detail. The refreshed venue now stands as a solid example of JRA’s fitout work in the hospitality sector."
];

export default function KhukhuMilfordPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/khukhu-milford/khukhumilford-1.jpg"
          alt="Empty tables waiting"
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
            <span className="text-white/90">KhuKhu Milford</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Interior fitout
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              KhuKhu Milford
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
                src="/projects/khukhu-milford/khukhumilford-8.jpg"
                alt="Restaurant open space"
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
                src="/projects/khukhu-milford/khukhumilford-2.jpg"
                alt="Elegant restaurant ceiling"
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
              {`A selection of images from the ${"KhuKhu Milford"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"KhuKhu Milford"} project.`}
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
