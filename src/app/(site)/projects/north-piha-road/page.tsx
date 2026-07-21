import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "North Piha Road - JRA Construction" },
  description:
    "JRA Construction worked with clients John and Sarah to breathe new life into their North Piha bach. The brief was simple: take an old-school bach and turn it…",
  alternates: { canonical: "/projects/north-piha-road" },
};

const projectDetails = [
  { label: "Date", value: "19/02/2025" },
  { label: "Client", value: "Sarah & John" },
  { label: "Architect", value: "RJ Architecture" },
  { label: "Project Type", value: "Renovation/Extension" },
];

const galleryImages = [
  "/projects/north-piha-road/JRAPHIA-44-scaled.jpg",
  "/projects/north-piha-road/JRAPHIA-132.jpg",
  "/projects/north-piha-road/JRAPHIA-3-scaled-rfu1hz6878fsrq0jpruc3ibsmrwscg7892ady8ycgw.jpg",
  "/projects/north-piha-road/JRAPHIA-5-scaled-rfu1ie7n8l0dxhep9ycd7ej64xunrluxn4q5moc1pc.jpg",
  "/projects/north-piha-road/JRAPHIA-11-scaled-rfu1it929xkz38suu4uebaqjn3sj6rin175xb3pqxs.jpg",
  "/projects/north-piha-road/JRAPHIA-31-scaled-rfu1ja65oy84w84a3c5ok6guc1h51bdt3iwny30nts.jpg",
  "/projects/north-piha-road/JRAPHIA-44-scaled-rfu1js13aswl0tec71vldjylmd143kcphzaw2ca6jk.jpg",
  "/projects/north-piha-road/JRAPHIA-56-scaled-rfu1katv3hmbh0n15a04rf7ti2ggdifc8kclnvib34.jpg",
  "/projects/north-piha-road/JRAPHIA-61-scaled-rfu1kn1rkc31ny5a5xaa5u4t82s85krum8twwh06u8.jpg",
  "/projects/north-piha-road/JRAPHIA-66-scaled-rfu1kybtucihj9owc25szraccp8mpy0mnsnqnsjgrk.jpg",
  "/projects/north-piha-road/JRAPHIA-79-scaled-rfu1lj0a0pasmouuzb3lim2hf6epfaaq2n0f7vosyo.jpg",
  "/projects/north-piha-road/JRAPHIA-85-scaled-rfu1lw60odst58bqugsdhiqxqkluf1qysg57xr5ajk.jpg",
  "/projects/north-piha-road/JRAPHIA-107-scaled-rfu1m7g2ye890jvd0lnwbfwgv728zezqtzz1p2okgw.jpg",
  "/projects/north-piha-road/JRAPHIA-112-scaled-rfu1mjnzf8oz7hdm18y1putgl7e0rhc97ogcxo6g80.jpg",
  "/projects/north-piha-road/JRAPHIA-113-scaled-rfu1mwtq2x6zq0uhwemtorhwwll5r8shxhl5njmxsw.jpg",
  "/projects/north-piha-road/JRAPHIA-115-scaled-rfu1ndqthxu5j05x5ly3xn87lj9rlsnnztbwaixuow.jpg",
  "/projects/north-piha-road/JRAPHIA-123-rfu1npypysavpxo66989c257bjljdv06dht7j4fqg0.jpg",
  "/projects/north-piha-road/JRAPHIA-128-rfu1o26mfmrlwv6f6wieqh271jxb5xcor6airpxm74.jpg",
  "/projects/north-piha-road/JRAPHIA-131-rfu1odgopn71s6q1d1dxke7q66dpqalgsq4cj1gw4g.jpg",
  "/projects/north-piha-road/JRAPHIA-132-rfu1omv2lzjx0acdu5g79buc413dv9ms60n7bt2ye8.jpg",
  "/projects/north-piha-road/JRAPHIA-133-rfu1p1whnc4i61qjeby8d81pm719afahk32z08gnmo.jpg",
];

const overviewParas = [
  "JRA Construction worked with clients John and Sarah to breathe new life into their North Piha bach. The brief was simple: take an old-school bach and turn it into an easy, modern retreat that still feels right at home in its coastal surroundings, while making the most of both indoor and outdoor living."
];

const whatWeDidParas = [
  "We carried out a full gut and rebuild of the existing bach, giving us the opportunity to completely refresh the layout and finishes. A small extension was added to improve functionality, along with a large entertainer’s deck that creates the perfect space for relaxing and hosting after a day at the beach. Inside, we installed a new kitchen and opened up the living area, finished with bamboo timber flooring to add warmth, durability, and a natural coastal feel throughout the home."
];

export default function NorthPihaRoadPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/north-piha-road/JRAPHIA-44-scaled.jpg"
          alt="North Piha Road"
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
            <span className="text-white/90">North Piha Road</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Renovation/Extension
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              North Piha Road
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
                src="/projects/north-piha-road/JRAPHIA-132.jpg"
                alt="What we did at North Piha Road"
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
              {`A selection of images from the ${"North Piha Road"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"North Piha Road"} project.`}
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
