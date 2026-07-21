import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import blogPosts from "@/data/blogPosts.json";

export const metadata: Metadata = {
  title: { absolute: "Building and Renovation Blog | Instant Online Estimate" },
  description:
    "Expert building advice, renovation tips, and home improvement insights from Auckland's trusted builders. Stay updated with our construction blog.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <Image
          src="/jra-slider-1.png"
          alt="Blog banner background"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <AnimateOnScroll variant="fade-up">
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Blog
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
              Expert building advice, renovation tips, and home improvement insights from Auckland&apos;s trusted builders.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200}>
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

      {/* Posts grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px]">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} variant="fade-up" delay={(i % 6) * 65}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(41,58,87,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(41,58,87,0.12)]">
                  <Link href={`/${post.slug}`} className="relative block aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <p className="blog-meta font-semibold uppercase tracking-wide text-[#293a57]">
                      {post.date}
                    </p>
                    <h2 className="mt-2 text-[1.05rem] font-bold leading-snug text-[#293a57]">
                      <Link href={`/${post.slug}`} className="transition hover:text-[#293a57]">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 line-clamp-3 flex-1 text-[14.5px] leading-relaxed text-[#5f7286]">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#293a57] transition hover:gap-3"
                    >
                      Read More
                      <span aria-hidden="true" className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
