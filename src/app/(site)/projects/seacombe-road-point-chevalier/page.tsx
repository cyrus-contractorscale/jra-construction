import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "Seacombe Road, Point Chevalier Home Extension & Renovation" },
  description:
    "Discover how JRA Construction transformed a Point Chevalier home on Seacombe Road. Explore this stunning extension and renovation project.",
  alternates: { canonical: "/projects/seacombe-road-point-chevalier" },
};

const projectDetails = [
  { label: "Date", value: "26/12/2024" },
  { label: "Client", value: "Keren & Becki" },
  { label: "Architect", value: "Draughting Machine" },
  { label: "Project Type", value: "Renovation and Extension" },
];

const galleryImages = [
  "/projects/seacombe-road-point-chevalier/Seacombe-11-scaled.jpg",
  "/projects/seacombe-road-point-chevalier/Seacombe-12-scaled.jpg",
  "/projects/seacombe-road-point-chevalier/open-plan-seacombe-renovation-r62bbp56ai77cijq3o3u37lchqrj1utyn28jqiwvxc.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-road-point-chevalier-poolhouse-r62bccn51d3derllag9ibjnvcdjpeaf92ajoqfy1ls.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-road-point-chevalier-poolhouse-exterior-r62bcui2n7rtjcvne5zf4x5mmp3ogje5gqxwup7kbk.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-kitchen-renovation-r62bdnn2j2vpj9pbo0kus7sx1n4235ltwr5yqa0cyo.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-living-room-renovation-r62bexp5tymrc5uf72hkoe6i5it1kboof34r8u42hs.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-open-plan-interior-r62bfjbg75gcr6z0ottzrqq3tduhhd2i624xa780io.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-living-kitchen-area-r62bgakrpcho3vvf9nm6a1uh1k44ol2pxt20783li8.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-indoor-outdoor-living-r62bgzyetvgetcuk5gl3ndfx2yn1gevh1ao45p1yu8.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-dining-space-design-r62bhhtcfq4uxy4m96b0gqxoda70inudfr2c9ybhk0.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-living-room-interior-r62bhzoa1ktb2jeocw0xa4ffnlqzkwt9u7gke7l09s.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-kitchen-renovation-detail-r62bim8ello6t6hwp5ryxyqhwunspnatxb47wunk4g.jpg",
  "/projects/seacombe-road-point-chevalier/seacombe-kitchen-living-area-r62bj7uoyshs87mi6x4e1ba3kpp8moonoa4dy7ri5c.jpg",
];

const overviewParas = [
  "Keren & Becki wanted to transform their Seacombe Road home in Point Chevalier into a modern, functional space for their family. They partnered with Draughting Machine for the design and brought in the JRA Construction team to make it happen. The plan was to completely renovate and extend the kitchen and living area, creating an open layout perfect for entertaining."
];

const whatWeDidParas = [
  "The JRA Construction team got to work, gutting the existing kitchen and living room to create a blank canvas. We expanded the layout to establish an open plan design, with a brand-new, modern kitchen at the heart of the space. The kitchen features premium appliances, sleek finishes, and a practical scullery for additional storage and prep space.",
  "We opened up the living area and integrated it seamlessly with the new kitchen, creating a spacious and inviting environment. To enhance the connection between indoor and outdoor living, we constructed a stunning new deck that functions as an extension of the main living area. The project also included the addition of a stylish pool house in the backyard, providing a convenient and luxurious amenity for the family to enjoy."
];

const finalResultParas = [
  "The renovation totally transformed the feel and function of Keren & Becki’s home. The new open plan layout makes the space seem so much bigger and brighter. And the sleek, modern kitchen is a dream for cooking and entertaining.",
  "Now, the main living area flows seamlessly out to the beautiful new deck, creating the perfect indoor-outdoor connection. Plus, the new pool house is a convenient and stylish addition that elevates the whole backyard.",
  "Keren & Becki love their refreshed home. It suits their family’s lifestyle so much better and feels like a brand new space. The JRA Construction team is really proud of how this project turned out. It’s a great example of how a smart renovation can completely enhance a home."
];

export default function SeacombeRoadPointChevalierPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/seacombe-road-point-chevalier/Seacombe-11-scaled.jpg"
          alt="Open-layout renovation"
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
            <span className="text-white/90">Seacombe Road, Point Chevalier</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation and Extension
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Seacombe Road, Point Chevalier
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
                src="/projects/seacombe-road-point-chevalier/Seacombe-12-scaled.jpg"
                alt="Contemporary Deck Design"
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
                src="/projects/seacombe-road-point-chevalier/open-plan-seacombe-renovation-r62bbp56ai77cijq3o3u37lchqrj1utyn28jqiwvxc.jpg"
                alt="Open Plan Kitchen"
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
              {`A selection of images from the ${"Seacombe Road, Point Chevalier"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"Seacombe Road, Point Chevalier"} project.`}
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
