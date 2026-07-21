import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArticleSidebar } from "@/components/article/ArticleSidebar";
import postsContent from "@/data/blogPostsContent.json";

interface PostBlock {
  type: "heading" | "para" | "list" | "quote" | "image" | "table";
  html?: string;
  level?: number;
  id?: string;
  ordered?: boolean;
  items?: string[];
  src?: string;
  alt?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  readingMinutes: number;
  words: number;
  toc: { id: string; text: string }[];
  blocks: PostBlock[];
}

const posts = postsContent as BlogPost[];

/* Blog posts live at root-level URLs, exactly matching the live WordPress site
   (e.g. /how-much-does-a-home-addition-cost-in-auckland). Only audited slugs
   are generated; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle || post.title },
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/${post.slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      images: [post.image],
    },
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading": {
      if (block.level === 2) {
        return (
          <h2
            id={block.id}
            className="mt-12 scroll-mt-36 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold leading-[1.2] tracking-tight text-[#293a57] sm:text-[30px]"
            dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
          />
        );
      }
      if (block.level === 3) {
        return (
          <h3
            id={block.id}
            className="mt-9 scroll-mt-36 text-[21px] font-bold leading-[1.25] text-[#293a57] sm:text-[23px]"
            dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
          />
        );
      }
      return (
        <h4
          className="mt-7 text-[18px] font-bold leading-[1.3] text-[#293a57]"
          dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
        />
      );
    }
    case "para":
      return (
        <p
          className="mt-5 text-[17px] leading-[1.75] text-[#3f5162]"
          dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
        />
      );
    case "quote":
      return (
        <blockquote className="mt-6 rounded-r-2xl border-l-4 border-[#293a57] bg-[#f0f5fa] px-6 py-5">
          <p
            className="text-[17px] font-medium leading-[1.7] text-[#293a57]"
            dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
          />
        </blockquote>
      );
    case "list": {
      const items = block.items ?? [];
      if (block.ordered) {
        return (
          <ol className="mt-5 space-y-3 pl-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#293a57] text-[12px] font-bold text-white">
                  {i + 1}
                </span>
                <span
                  className="text-[16.5px] leading-[1.7] text-[#3f5162]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="mt-5 space-y-3 pl-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#293a57]" />
              <span
                className="text-[16.5px] leading-[1.7] text-[#3f5162]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      );
    }
    case "image":
      return (
        <figure className="mt-8">
          <Image
            src={block.src ?? ""}
            alt={block.alt ?? ""}
            width={1200}
            height={700}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
            sizes="(min-width: 1024px) 66vw, 100vw"
          />
        </figure>
      );
    case "table":
      return (
        <div
          className="mt-6 overflow-x-auto rounded-xl border border-[#dfe7ef]"
          dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
        />
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-zinc-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent" />
        <Container className="relative z-10">
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white/85">{post.title}</span>
          </nav>
          <h1 className="mt-6 max-w-4xl font-[ui-sans-serif,system-ui,sans-serif] text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] font-semibold text-white/70">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {post.date}
            </span>
            <span className="h-3 w-px bg-white/25" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readingMinutes} min read
            </span>
          </div>
        </Container>
      </section>

      {/* Body + sidebar */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            <article className="article-body min-w-0 max-w-[760px]">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>
            <ArticleSidebar readingMinutes={post.readingMinutes} toc={post.toc} />
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#293a57] py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Claim your free design &amp; build consultation, or get an instant online estimate for your project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#293a57] shadow-lg shadow-black/30 transition hover:bg-zinc-100"
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
        </Container>
      </section>
    </>
  );
}
