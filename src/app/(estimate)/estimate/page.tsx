export const runtime = "edge";
import { EstimateSidebar } from "@/components/survey/EstimateSidebar";
import { ProjectTypeSelect } from "@/components/survey/ProjectTypeSelect";
import { getSiteConfig } from "@/lib/config";

// Must be dynamic + edge so KV is read per-request (not baked in at build time)
export const dynamic = "force-dynamic";

const trustBadges = [
  {
    label: "Trusted & Local",
    desc: "Quality craftsmanship built on trust.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Fast & Easy",
    desc: "Get your estimate in minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "No Obligation",
    desc: "100% free with no commitment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "5-Star Rated",
    desc: "Highly rated by homeowners like you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
];

export default async function EstimatePage() {
  const site = await getSiteConfig();
  return (
    /* Gradient background with subtle depth */
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #eaecf0 0%, #f2f4f7 35%, #e8eaee 70%, #eceef2 100%)",
      }}
    >
      {/* Decorative soft blobs for glass depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, #d8dce4 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #cdd2dc 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <main className="relative flex-1">
        {/* ── max-w-7xl wider container ── */}
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">

          {/* Two-column row — items-stretch makes sidebar match survey height */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">

            {/* Left — project type selector */}
            <div className="min-w-0 flex-1 animate-fadeUp" style={{ animationDelay: "0.05s" }}>
              <ProjectTypeSelect />
            </div>

            {/* Right — glass sidebar */}
            <div className="animate-fadeUp" style={{ animationDelay: "0.2s" }}>
              <EstimateSidebar />
            </div>
          </div>

          {/* ── Trust bar ── */}
          <div
            className="mt-16 overflow-hidden rounded-2xl glass animate-fadeUp"
            style={{ animationDelay: "0.38s" }}
          >
            <div className="grid grid-cols-2 divide-y divide-white/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {trustBadges.map((badge, i) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 px-4 py-5 sm:gap-5 sm:px-7 sm:py-7 animate-fadeUpSm"
                  style={{ animationDelay: `${0.45 + i * 0.08}s` }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black text-white shadow-md sm:h-14 sm:w-14">
                    {badge.icon}
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-ink-900">{badge.label}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-500">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Dark footer */}
      <footer className="relative bg-black">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-4 py-5 text-[14px] text-white/60 sm:flex-row sm:px-8 lg:px-12">
          <span>© Copyright {site.copyrightYear} | {site.name} | All Rights Reserved</span>
          <span>Website &amp; Advertising by <a href="https://contractorscale.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ContractorScale.com</a></span>
        </div>
      </footer>
    </div>
  );
}
