import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Building Guarantee - JRA Construction" },
  description:
    "JRA Construction offers a comprehensive building guarantee covering quality, safety, and communication. Our construction guarantee includes 10-year Building Act warranties.",
  alternates: { canonical: "/guarantee" },
};

const guarantees = [
  {
    icon: "💬",
    title: "Communication",
    body: "Every successful project starts with a shared understanding. From the very first meeting, we'll sit down with you to thoroughly discuss your plans, ensuring every detail, from the biggest decisions to the smallest finishes, aligns perfectly with your vision. Transparency drives how we work. We'll keep you informed at every step, and our 24-hour callback promise means you'll always hear back from us quickly. For new builds and major renovations, we provide 24/7 access to a dedicated project management platform, where you can track progress, view photo updates, check deadlines, and easily address changes in real-time.",
  },
  {
    icon: "🏆",
    title: "Quality Workmanship",
    body: "Your home deserves the highest standards of quality. We employ skilled tradespeople with extensive experience leading each project. With our 23-point quality checklist in place at every stage of the build, we leave no stone unturned to make sure nothing is overlooked. Our team also works closely with proven and reliable subcontractors to ensure that deadlines are met and every aspect of your project reflects our strict standards. The result? A structurally sound, beautifully built home that stands the test of time.",
  },
  {
    icon: "🦺",
    title: "A Safe and Clean Environment",
    body: "Safety is a non-negotiable priority at JRA Construction. We are proud members of HazardCo, using its systems and guidelines to ensure workspaces remain safe for everyone - our team, visitors, and you. From start to finish, our hard-working professionals maintain a clean and hazard-free site, so you never need to worry. For extra peace of mind, we carry $2 million in third-party liability coverage. When we hand over the keys to your new home, it's move-in ready, spotless, and stress-free.",
  },
  {
    icon: "🔧",
    title: "Follow Up and Maintenance",
    body: "Our relationship with you doesn't end when your project is complete. We stand behind our workmanship and offer a comprehensive post-completion follow-up service to address any concerns or adjustments you may need. Additionally, we'll provide you with a clear maintenance schedule, ensuring your new home remains as beautiful and functional as the day you moved in.",
  },
];

const deliveryPromises = [
  "All building work will be done properly, competently and according to the plans and specifications in your approved consent",
  "All the materials used will be suitable and, unless otherwise stated in the contract, new",
  "The building work will be consistent with the Building Act and the Building Code",
  "The building work will be carried out with reasonable care and skill, and completed within the time specified or a reasonable time if no time is stated.",
  "The home will be suitable for occupation at the end of the work",
  "If the contract states any particular outcome and the homeowner relies on the skill and judgement of the contractor to achieve it, the building work and the materials will be fit for purpose and be of a nature and quality suitable to achieve that result",
];

export default function GuaranteePage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="JRA Construction guarantee banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Guarantee
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={150}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Free Consultation
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Online Estimate
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Guarantee pillars */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">We Guarantee</p>
            <h2 className="mx-auto max-w-3xl font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#293a57] sm:text-[48px]">
              JRA Construction Family Home Guarantee to You
            </h2>
            <div className="mx-auto flex justify-center pt-2">
              <Image
                src="/guarantee_seal-bf646c3a-3990-40ad-b1e1-c35cc0c1fa68.png"
                alt="JRA Build With Confidence Guarantee seal"
                width={140}
                height={140}
                className="h-auto w-[130px]"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2">
            {guarantees.map((g, i) => (
              <AnimateOnScroll key={g.title} variant="fade-up" delay={i * 90}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#293a57]/20 hover:shadow-lg hover:shadow-[#293a57]/8">
                  <span className="text-4xl">{g.icon}</span>
                  <h3 className="text-[20px] font-extrabold text-[#293a57]">{g.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-[#4d6277]">{g.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery promises (Building Act warranties) */}
      <section
        className="bg-[#293a57] bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,58,87,0.93), rgba(41,58,87,0.93)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
        }}
      >
        <Container className="space-y-10">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">10-Year Building Act Warranties</p>
            <h2 className="mx-auto max-w-2xl font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[44px]">
              Delivering What We Say We Will
            </h2>
          </AnimateOnScroll>

          <div className="mx-auto max-w-3xl space-y-4">
            {deliveryPromises.map((item, i) => (
              <AnimateOnScroll key={item} variant="fade-up" delay={i * 70}>
                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
                    ✓
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/85">{item}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#293a57] transition hover:bg-zinc-100"
            >
              Book Your Free Consultation <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
