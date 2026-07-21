import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader({ tagline }: { tagline?: string }) {
  return (
    <header className="border-b border-ink-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/estimate" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            {site.name.charAt(0)}
          </span>
          <span className="text-sm font-semibold text-ink-900">{site.name}</span>
        </Link>
        {tagline ? (
          <span className="hidden text-sm font-medium text-ink-500 sm:block">
            {tagline}
          </span>
        ) : (
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {site.phoneDisplay}
          </a>
        )}
      </div>
    </header>
  );
}
