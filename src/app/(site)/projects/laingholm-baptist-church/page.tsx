import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "Laingholm Baptist Church | JRA Construction in Auckland" },
  description:
    "JRA Construction collaborated with SGA Architects Ltd. to transform the facilities of Laingholm Baptist Church. Visit our site to learn more about our projects.",
  alternates: { canonical: "/projects/laingholm-baptist-church" },
};

const projectDetails = [
  { label: "Date", value: "23/06/2021" },
  { label: "Client", value: "Laingholm Baptist Church" },
  { label: "Architect", value: "SGA Architects Ltd." },
  { label: "Project Type", value: "New build/Renovation" },
];

const galleryImages = [
  "/projects/laingholm-baptist-church/Laingholm-Baptist-Church1.jpg",
  "/projects/laingholm-baptist-church/JRA-Laingholm-Website-Ready-67.jpg",
  "/projects/laingholm-baptist-church/laingholm-church-pavilion-r62es34ap8h7qtv7rfqi1tlahdo5nwn7qq5q0qhcio.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-detail-r62esy4yyrnodym5qb56u3ri33f9px2cuzoquv7ctc.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-evening-r62ethvkyaep5rthj1ocsgs6k6pz7k8pxpdxxoe36o.jpg",
  "/projects/laingholm-baptist-church/laingholm-church-kitchen-r62ev6z3aiqc4fcqma33sjd568cu3vz9u3si4nvhy8.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-interior-r62evnw6pjdhxeo5vhee1f3fv61fyfufwfj8rn6eu8.jpg",
  "/projects/laingholm-baptist-church/laingholm-church-aerial-r62ewf5i7qeta3kkgb6kjq7t3cb35nuno6gboo1zts.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-daytime-r62ex4j5c9djzkjpc45hx1t94qtzxhnero2fn50d5s.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-lounge-r62exkiekfzfgxwhqt25lfs38an8kceuhv5osuco80.jpg",
  "/projects/laingholm-baptist-church/laingholm-church-bathroom-r62ey8y7i4wvuswzs3mge9m2obas4h3v984ba1cfq8.jpg",
  "/projects/laingholm-baptist-church/laingholm-church-exterior-r62eym3y5tewdcdvn9b8d6aizphx48k3z193zwsxb4.jpg",
  "/projects/laingholm-baptist-church/laingholm-church-overview-r62ezbhlacdn2td0j2a5qhvz140tw2cv2iv7ydran4.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-entrance-r62ezseopd0svsofs9lfzdm9q1pfqm814ulyld27j4.jpg",
  "/projects/laingholm-baptist-church/laingholm-pavilion-canopy-r62f0d34vpt3z7uefij8i8eesivifyi4joyn5g7jq8.jpg",
  "/projects/laingholm-baptist-church/laingholm-entrance-closeup-r62f0t2e3wezgl76u7fw6md8w2or2t9k9w1wb5jusg.jpg",
];

const overviewParas = [
  "This transformative new build and renovation project at Laingholm Baptist Church was brought to life through the collaboration of JRA Construction and SGA Architects Ltd. It showcases our commitment to creating functional and modern spaces that cater to the unique needs of the church and its congregation."
];

const whatWeDidParas = [
  "Our goal was to create spaces that not only accommodate the functional needs of the congregation but also uplift the overall atmosphere of the church. The focal point of this project is the new pavilion building designed for breakout activities. With careful consideration of the church’s requirements, we crafted a versatile and inviting space that fosters community engagement and supports various church gatherings and events. The pavilion provides a flexible area where the congregation can come together, fostering a sense of unity and fellowship.",
  "In addition to the pavilion, we replaced the outdated cottage with a modern kitchen and bathroom block. This new facility is designed to enhance the church’s functionality, providing essential amenities for events, services, and gatherings. The contemporary design and efficient layout ensure a seamless experience for the congregation, catering to their needs with convenience and style.",
  "Throughout the project, we paid meticulous attention to detail, employing quality craftsmanship and sustainable materials. Our team worked diligently to create a transformed space that aligns with the vision and values of Laingholm Baptist Church."
];

const finalResultParas = [
  "The Laingholm Baptist Church project represents JRA Construction’s commitment to excellence and the creation of functional spaces that uplift the church community. The final outcome is a transformed church facility featuring a new pavilion building and a modern kitchen and bathroom block.",
  "The new pavilion building serves as a vibrant hub for breakout activities, fosters community engagement, and encourages fellowship among the congregation. Also, the modern kitchen and bathroom block enhance the functionality of the church, providing convenient and efficient amenities for events and services."
];

export default function LaingholmBaptistChurchPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/laingholm-baptist-church/Laingholm-Baptist-Church1.jpg"
          alt="Laingholm Baptist Church"
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
            <span className="text-white/90">Laingholm Baptist Church</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              New build/Renovation
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Laingholm Baptist Church
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
                src="/projects/laingholm-baptist-church/JRA-Laingholm-Website-Ready-67.jpg"
                alt="What we did at Laingholm Baptist Church"
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
                src="/projects/laingholm-baptist-church/laingholm-church-pavilion-r62es34ap8h7qtv7rfqi1tlahdo5nwn7qq5q0qhcio.jpg"
                alt="Modern church pavilion exterior"
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
              {`A selection of images from the ${"Laingholm Baptist Church"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"Laingholm Baptist Church"} project.`}
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
