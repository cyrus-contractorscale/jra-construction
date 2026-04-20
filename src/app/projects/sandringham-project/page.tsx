import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Sandringham Project | JRA Construction",
  description:
    "Explore the Sandringham Project by JRA Construction: a remarkable home renovation and extension in Auckland, completed with precision and innovative design.",
};

const projectDetails = [
  { label: "Date", value: "17/02/2023" },
  { label: "Client", value: "Confidential" },
  { label: "Architect", value: "Harbour City Plans" },
  { label: "Project Type", value: "Renovation & Extension" },
];

const galleryImages = [
  "/projects/sandringham-project/sandringham-bedroom-renovation-qx7qxfxkzmwa0i0cp6rsh29rhi9tivamcmgklbw8tc.webp",
  "/projects/sandringham-project/sandringham-project-bookshelf-qx2vu7vj4y9awhsl3l232nqx4u26jxxlqk97wlqy00.webp",
  "/projects/sandringham-project/sandringham-hallway-renovation-r62bv7am3qwe987t7lm5bseo8kmprr9gblk987zstc.jpg",
  "/projects/sandringham-project/sandringham-bathroom-renovation-r62bvq3dwfm4pfgi5tqopnnw4a221pc326lytr7xcw.jpg",
  "/projects/sandringham-project/sandringham-bath-renovation-qx2yguan4jsfncckkhi22s5dx7odf1kuqwgv3dg7mo.webp",
  "/projects/sandringham-project/Elegant-Washroom-qx9mj6nye0i8pkv2copzwezy80nye431aj4gc1d09s.jpg",
  "/projects/sandringham-project/sandringham-open-living-r62bx2yzrth1h5hi8evabbbv0bd55yq4kwj7s57gdc.jpg",
  "/projects/sandringham-project/Fireplace-Interior-Warmth-qx7u58nsxveyb3t1iqq75cb21diosi06lrqzzi789s.webp",
  "/projects/sandringham-project/sandringham-renovation-kitchen-qx2xj1zhgxjebxfbuvqtgb2x8m7eqpg6roak3bjna8.webp",
  "/projects/sandringham-project/sandringham-kitchen-renovation-r62bxola50amw6m3q67penvgo6el303ybvjdtibee8.jpg",
  "/projects/sandringham-project/sandringham-kitchen-remodel-r62bylhms7jo6jabe2fnbxklgnwfkeqk4eddm6ymcg.jpg",
  "/projects/sandringham-project/sandringham-studio-conversion-r62bz1gw0e5jnwn3srcb0bjfk7po79hzulgmrwaxeo.jpg",
  "/projects/sandringham-project/Media-Corner-Nook-qx7t3rteim4hio8bb1ok9aollg6yyu9d4bl8bfr6ao.webp",
  "/projects/sandringham-project/sandringham-villa-renovation-qx2zkv985kl01k7huad4r6j0kwe271hd90k7sk3oo0.webp",
  "/projects/sandringham-project/sandringham-house-exterior-r62bzo10kf0fejqc513co5uhtgmhbzzjxp4aajdh9c.jpg",
  "/projects/sandringham-project/sandringham-aerial-perspective-r62c07rmjxrg6cxnxrmimiv6ajx6tn5x0ethdck7mo.jpg",
  "/projects/sandringham-project/Elevated-Home-Aerial-qx7ro5ih75glxl7lq8f4ttmb6omb98c10tuajeai00.webp",
  "/projects/sandringham-project/Neighborhood-Development-qxa1xv7beftnxn5neg8dag09xmpko24qvy7jiaxggw.webp",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

export default function SandringhamProjectPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/sandringham-project/sandringham-house-exterior-r62bzo10kf0fejqc513co5uhtgmhbzzjxp4aajdh9c.jpg"
          alt="Sandringham Project Hero Image"
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
            <span className="text-white/90">Sandringham Project</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation & Extension · Auckland
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sandringham Project
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              A remarkable renovation and extension, transforming an existing home into a stunning, functional space.
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
                Sandringham Project is a remarkable renovation and extension undertaken by JRA Construction in collaboration with the esteemed architects, Harbour City Plans. This project showcases our expertise in transforming existing homes into stunning, functional spaces that meet our client’s unique requirements.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                At JRA Construction, we undertook a comprehensive renovation of the Sandringham residence, breathing new life into its existing structure. The focal point of this project was the creation of an expansive open living area, seamlessly integrating the dining and kitchen spaces. Our skilled team of professionals meticulously executed the design, ensuring a harmonious flow between the different sections of the home.
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
                    <span>{item.value}</span>
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
                At JRA Construction, we undertook a comprehensive renovation of the Sandringham residence, breathing new life into its existing structure. The focal point of this project was the creation of an expansive open living area, seamlessly integrating the dining and kitchen spaces.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Our skilled team of professionals meticulously executed the design, ensuring a harmonious flow between the different sections of the home. Additionally, we undertook a visionary approach by opening up the existing roof space and transforming it into a beautiful studio. This innovative use of space not only increased the property&apos;s functionality but also added an element of uniqueness and charm to the overall design.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            {/* Placeholder for an image related to 'What We Did' */}
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/sandringham-project/sandringham-open-living-r62bx2yzrth1h5hi8evabbbv0bd55yq4kwj7s57gdc.jpg"
                alt="What we did at Sandringham"
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
            {/* Placeholder for an image related to 'Final Result' */}
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl">
              <Image
                src="/projects/sandringham-project/sandringham-studio-conversion-r62bz1gw0e5jnwn3srcb0bjfk7po79hzulgmrwaxeo.jpg"
                alt="Final result of Sandringham Project"
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
                The Sandringham Project stands as a testament to our commitment to excellence. The final outcome is a home that exudes both elegance and functionality, perfectly blending contemporary aesthetics with practicality. The open living/dining area provides a spacious and inviting atmosphere, ideal for entertaining guests and creating cherished memories with loved ones.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The newly created studio in the roof space offers a serene retreat, bathed in natural light, where creativity can flourish. This versatile space can be customized to suit various purposes, such as an art studio, home office, or relaxation area — providing endless possibilities for the homeowner.
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
              A selection of images from the Sandringham Project, highlighting key features and transformations.
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description="A selection of images from the Sandringham Project, highlighting key features and transformations."
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
