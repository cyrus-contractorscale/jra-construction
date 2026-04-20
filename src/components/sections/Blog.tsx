import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern home with swimming pool",
    date: "06 March 2024",
    category: "Living Room",
    title: "Modern Living Room Design: Sleek and Stylish...",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bright modern kitchen with island",
    date: "05 March 2024",
    category: "Kitchen",
    title: "Kitchen Layout Ideas: Optimizing Space and Fu...",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Luxurious master bedroom with city view",
    date: "04 March 2024",
    category: "Bedroom",
    title: "Master Bedroom Design Tips: Creating Your Pers...",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
];

function NewspaperIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 3h12a2 2 0 0 1 2 2v15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h12V5H6zm2 2h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
      />
    </svg>
  );
}

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 bg-[#f9fafb] py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <AnimateOnScroll variant="fade-left" className="min-w-0 space-y-5">
            <div className="section-tab border-[#d5dde6] bg-white text-[#0f2744]">
              <NewspaperIcon />
              <span>News &amp; Blog</span>
            </div>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0f2744] sm:text-[48px] lg:text-[52px]">
              Our Latest News &amp; Blogs
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-right" delay={150} className="self-start">
            <Link
              href="#"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#cfd8e2] bg-white px-5 py-2.5 text-[15px] font-medium text-[#6b7c8f] shadow-sm transition hover:border-[#b8c5d3] hover:text-[#0f2744] lg:mt-2"
            >
              View All Blogs
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.title} variant="fade-up" delay={index * 130}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(15,39,68,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(15,39,68,0.12)]">
                <Link href={post.href} className="relative block aspect-[5/3] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.06]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                  <p className="text-[13px] text-[#8a9aab]">
                    {post.date}
                    <span className="text-[#c5ced8]"> • </span>
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-[1.05rem] font-bold leading-snug text-[#0f2744] sm:text-[1.2rem]">
                    <Link href={post.href} className="transition hover:text-[#1a3d5c]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 text-[15px] leading-relaxed text-[#5f7286]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#0f2744] transition hover:gap-3"
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
  );
}
