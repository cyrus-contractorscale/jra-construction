import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: { absolute: "Saint Leonards Road, Mount Eden Villa | JRA Construction" },
  description:
    "JRA Construction managed this extensive renovation and villa extension project on Saint Leonards Road, Mount Eden. View our project portfolio.",
  alternates: { canonical: "/projects/saint-leonards-road-mount-eden" },
};

const projectDetails = [
  { label: "Date", value: "19/11/2020" },
  { label: "Client", value: "Robyn & Wayne" },
  { label: "Architect", value: "Logan Architects" },
  { label: "Project Type", value: "Villa Extension" },
];

const galleryImages = [
  "/projects/saint-leonards-road-mount-eden/JRA-15-Saint-Leonards-Website-151.jpg",
  "/projects/saint-leonards-road-mount-eden/Bedroom-Interior-Design.webp",
  "/projects/saint-leonards-road-mount-eden/leonards-bedroom-renovation-r62cixpwo5e1erqpmcy0saso7tnd4mhgl2kmgqsxpc.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-bedroom-decor-r62cjfkua02hjd0rq2nxloafi57c6vgcziyul02gf4.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-kitchen-remodel-r62cjwhxp0pnccc6z9z7uk0q72vy1fbj1upl7zddb4.jpg",
  "/projects/saint-leonards-road-mount-eden/Kitchen-Island-Interior.webp",
  "/projects/saint-leonards-road-mount-eden/leonards-kitchen-detail-r62cklvktjoe1tbbv2y57vm68heut94a5cbp6gbqn4.jpg",
  "/projects/saint-leonards-road-mount-eden/saint-leonards-interior.webp",
  "/projects/saint-leonards-road-mount-eden/saint-leonards-art-space.webp",
  "/projects/saint-leonards-road-mount-eden/leonards-bathroom-renovation-r62cl7hv6qhzgufxcuakb85rwcgaqai3wbbv7tfoo0.jpg",
  "/projects/saint-leonards-road-mount-eden/Decorative-Bathroom.webp",
  "/projects/saint-leonards-road-mount-eden/leonards-bathroom-vanity-r62clvxo4fffupgfe4uv41zrcd3uaf74noahp0fg68.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-exterior-evening-r62cmihsogablcjnqelwrwatlm0nf5ooqry57ni00w.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-evening-exterior-r62cn4431n3x0do985ybv8uf9h23c72ihqyb90ly1s.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-interior-hallway-r62cnmwuubtngkwy6e2v943n56hfm5558c00uju2lc.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-kitchen-details-r62co6ngtuko8e49z4m17h4bm9s53sbib1p7xd0syo.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-kitchen-renovation-r62coqe2tdbp07blrv575u503d2ulfhvdref067jc0.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-exterior-aerial-r62cp96um21fgekaq39qjpe7z2i6vdki4cg4lpfnvk.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-villa-aerial-r62cprzmeqr5wlszobe9xknfurxj5bn4uxhu78nsf4.jpg",
  "/projects/saint-leonards-road-mount-eden/leonards-villa-aerial-1-r62cqbq8e9i6of0bh1xfvxo4bv88mythxn71a1uisg.jpg",
];

const overviewParas = [
  "Saint Leonards Road, Mount Eden project is a remarkable villa extension and renovation undertaken by JRA Construction in partnership with the esteemed Logan Architects. This project exemplifies our commitment to creating open, functional spaces that enhance the lifestyle of our clients."
];

const whatWeDidParas = [
  "At JRA Construction, we embarked on an extensive renovation and villa extension project on Saint Leonards Road. Our collaboration with Logan Architects ensured a seamless integration of new and existing elements, creating a harmonious space that reflects Robyn and Wayne’s vision.",
  "The primary focus of this project was to create more open space and usability for our clients, who enjoy entertaining. We undertook an extensive renovation and extension, resulting in a transformed living, dining, and kitchen area that provides the perfect backdrop for hosting gatherings and socializing. The design incorporates modern features and high-quality finishes, ensuring a space that is as visually stunning as it is functional.",
  "Additionally, we built a new master bedroom and ensuite to enhance the living experience for Robyn and Wayne. This private retreat is designed to tie in effortlessly with the current style of the property, offering a serene and luxurious space for relaxation and rejuvenation.",
  "Throughout the project, we paid meticulous attention to detail, ensuring that the new extension seamlessly integrates with the existing structure. The result is a cohesive, visually appealing home that reflects Robyn and Wayne’s style and preferences."
];

const finalResultParas = [
  "The Saint Leonards Road project stands as a testament to our commitment to craftsmanship and personalized design. It showcases JRA Construction’s expertise in villa extension and renovation projects. The final outcome is a home that beautifully combines open, functional spaces with timeless elegance.",
  "The transformed living, dining, and kitchen area offers a generous and inviting atmosphere, perfect for entertaining guests and creating cherished memories. The master bedroom and ensuite provide a private sanctuary, allowing our clients to unwind in comfort and style."
];

export default function SaintLeonardsRoadMountEdenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Image
          src="/projects/saint-leonards-road-mount-eden/JRA-15-Saint-Leonards-Website-151.jpg"
          alt="Luxury home exterior"
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
            <span className="text-white/90">Saint Leonards Road, Mount Eden</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Villa Extension
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Saint Leonards Road, Mount Eden
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
                src="/projects/saint-leonards-road-mount-eden/Bedroom-Interior-Design.webp"
                alt="Stylish Bedroom Interior"
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
                src="/projects/saint-leonards-road-mount-eden/leonards-bedroom-renovation-r62cixpwo5e1erqpmcy0saso7tnd4mhgl2kmgqsxpc.jpg"
                alt="Elegant master bedroom interior"
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
              {`A selection of images from the ${"Saint Leonards Road, Mount Eden"} project, highlighting key features and transformations.`}
            </p>
          </AnimateOnScroll>

          <ImageGallery
            images={galleryImages}
            title="Project Showcase"
            description={`A selection of images from the ${"Saint Leonards Road, Mount Eden"} project.`}
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
