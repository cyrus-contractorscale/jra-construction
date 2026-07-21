"use client";

import { useRouter } from "next/navigation";
import { surveyList } from "@/lib/surveys";
import type { ProjectType } from "@/lib/types";

const bgImages: Record<ProjectType, string> = {
  customHome:        "/Custom-Home.png",
  homeExtension:     "/Home-Extension.png",
  homeRenovation:    "/Home-Renovation.png",
  kitchenRenovation: "/Kitchen-Renovation.png",
  bathroomRenovation:"/Bathroom-Renovation.png",
};

const typeToSlug: Record<ProjectType, string> = {
  customHome:        "e-home",
  homeExtension:     "e-addition",
  homeRenovation:    "e-reno",
  kitchenRenovation: "e-kitchen",
  bathroomRenovation:"e-bathroom",
};

/* ─── Purpose-built home-builder icons ───────────────────────────── */
const icons: Record<ProjectType, React.ReactNode> = {

  /* Custom Home — classic pitched-roof house with door + windows */
  customHome: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
      {/* Roof */}
      <path d="M6 22L24 7l18 15" />
      {/* Chimney */}
      <path d="M31 11V7h5v8" />
      {/* Walls */}
      <path d="M10 20v20h28V20" />
      {/* Door */}
      <rect x="19" y="30" width="10" height="10" rx="1" />
      {/* Left window */}
      <rect x="11" y="22" width="8" height="6" rx="1" />
      {/* Right window */}
      <rect x="29" y="22" width="8" height="6" rx="1" />
      {/* Window cross — left */}
      <line x1="15" y1="22" x2="15" y2="28" />
      <line x1="11" y1="25" x2="19" y2="25" />
      {/* Window cross — right */}
      <line x1="33" y1="22" x2="33" y2="28" />
      <line x1="29" y1="25" x2="37" y2="25" />
    </svg>
  ),

  /* Home Extension — main house + new wing extending right */
  homeExtension: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
      {/* Existing house */}
      <path d="M4 24L17 12l13 12v16H4V24z" />
      {/* Existing door */}
      <rect x="11" y="32" width="6" height="8" rx="1" />
      {/* Existing window */}
      <rect x="22" y="24" width="5" height="5" rx="0.8" />
      {/* New addition — walls */}
      <path d="M30 20h14v20H30V20z" />
      {/* Addition roof line — dashed, signals "new" */}
      <path d="M28 20h18" strokeDasharray="3 2" />
      {/* Plus inside addition */}
      <path d="M37 26v8M33 30h8" />
    </svg>
  ),

  /* Home Renovation — paint roller on a wall */
  homeRenovation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
      {/* Wall panel being painted */}
      <rect x="7" y="7" width="26" height="22" rx="2" />
      {/* Roller frame */}
      <rect x="11" y="12" width="18" height="8" rx="3" />
      {/* Roller cylinder fill hint */}
      <line x1="14" y1="16" x2="26" y2="16" />
      {/* Handle arm */}
      <path d="M29 16h5v8" />
      {/* Handle grip */}
      <path d="M33 24l-6 16" />
      {/* Paint drip */}
      <path d="M13 29v4M19 29v6M25 29v3" />
    </svg>
  ),

  /* Kitchen Renovation — stove/oven with burner rings */
  kitchenRenovation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
      {/* Oven body */}
      <rect x="5" y="10" width="38" height="32" rx="3" />
      {/* Cooktop divider */}
      <line x1="5" y1="26" x2="43" y2="26" />
      {/* Back-left burner */}
      <circle cx="16" cy="18" r="5" />
      <circle cx="16" cy="18" r="2" />
      {/* Back-right burner */}
      <circle cx="32" cy="18" r="5" />
      <circle cx="32" cy="18" r="2" />
      {/* Oven door handle */}
      <path d="M16 36h16" strokeWidth="2.4" strokeLinecap="round" />
      {/* Oven window */}
      <rect x="13" y="29" width="22" height="8" rx="1.5" />
    </svg>
  ),

  /* Bathroom Renovation — freestanding bathtub */
  bathroomRenovation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
      {/* Tub body */}
      <path d="M6 22h36v6a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8V22z" />
      {/* Tub back panel */}
      <path d="M6 22v-8a4 4 0 0 1 4-4h2" />
      {/* Faucet spout */}
      <path d="M12 10h6a2 2 0 0 1 2 2v2" />
      {/* Faucet tap */}
      <circle cx="20" cy="8" r="2" />
      {/* Drain */}
      <circle cx="24" cy="32" r="2" />
      {/* Legs */}
      <line x1="12" y1="36" x2="10" y2="42" />
      <line x1="36" y1="36" x2="38" y2="42" />
      {/* Water drops over tub */}
      <path d="M32 6c0 2-2 3-2 5" strokeWidth="1.3" />
      <path d="M37 8c0 2-2 3-2 5" strokeWidth="1.3" />
    </svg>
  ),
};

/* ─── Component ──────────────────────────────────────────────────── */
export function ProjectTypeSelect() {
  const router = useRouter();
  const row1 = surveyList.slice(0, 3);
  const row2 = surveyList.slice(3);

  const handleSelect = (type: ProjectType) => {
    router.push(`/${typeToSlug[type]}`);
  };

  return (
    <div>
      <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400 animate-fadeUpSm" style={{ animationDelay: "0.1s" }}>
        Step 1 of 3
      </p>

      <h1
        className="text-[32px] font-extrabold tracking-tight text-ink-900 sm:text-[42px] animate-fadeUp"
        style={{ lineHeight: "1.2em", animationDelay: "0.18s" }}
      >
        What Type Of Project Are You<br /> Looking To Undertake?
      </h1>

      <p className="mt-3 text-sm text-ink-500 animate-fadeUpSm" style={{ animationDelay: "0.28s" }}>
        Select a project type to get started.
      </p>

      {/* All cards — 2 col on mobile, 3 col on sm+ — staggered entrance */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
        {row1.map((s, i) => (
          <ProjectCard key={s.id} id={s.id} label={s.label} bgImage={bgImages[s.id]} onSelect={handleSelect} delay={0.32 + i * 0.09} />
        ))}
      </div>

      {/* Row 2 — 2 cards */}
      <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">
        {row2.map((s, i) => (
          <ProjectCard key={s.id} id={s.id} label={s.label} bgImage={bgImages[s.id]} onSelect={handleSelect} delay={0.59 + i * 0.09} />
        ))}
      </div>
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────── */
function ProjectCard({
  id,
  label,
  bgImage,
  onSelect,
  delay = 0,
}: {
  id: ProjectType;
  label: string;
  bgImage: string;
  onSelect: (type: ProjectType) => void;
  delay?: number;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      style={{ animationDelay: `${delay}s` }}
      className={[
        /* Layout + entrance */
        "group relative flex flex-col items-center justify-center gap-3 sm:gap-5 text-center cursor-pointer overflow-hidden animate-fadeUp",
        "rounded-2xl px-3 py-8 sm:px-5 sm:py-14",
        /* Glass base */
        "bg-white/70 backdrop-blur-md border border-white/80",
        "shadow-[0_4px_24px_rgba(0,0,0,0.07)]",
        /* Hover lift */
        "hover:-translate-y-2 hover:scale-[1.015] hover:border-transparent",
        "hover:shadow-[0_24px_64px_rgba(0,0,0,0.28)]",
        /* Transition */
        "transition-all duration-300 ease-[cubic-bezier(0.34,1.2,0.64,1)]",
        /* Focus */
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2",
      ].join(" ")}
    >
      {/* ── Background image — fades in on hover ── */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Black tint over the image */}
      <span
        aria-hidden
        className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Icon container */}
      <span
        className={[
          "relative z-10 flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-2xl",
          "text-ink-700",
          "group-hover:bg-white/15 group-hover:text-white",
          "transition-all duration-300",
        ].join(" ")}
      >
        {icons[id]}
      </span>

      {/* Label */}
      <span
        className={[
          "relative z-10 font-heading text-[12px] sm:text-[15px] font-semibold leading-snug text-ink-800",
          "group-hover:text-white",
          "transition-colors duration-300",
        ].join(" ")}
      >
        {label}
      </span>

      {/* Arrow — slides in from below on hover */}
      <span
        className={[
          "absolute bottom-5 z-10 text-sm text-white/80",
          "opacity-0 translate-y-2",
          "group-hover:opacity-100 group-hover:translate-y-0",
          "transition-all duration-300 delay-75",
        ].join(" ")}
      >
        Select →
      </span>
    </button>
  );
}
