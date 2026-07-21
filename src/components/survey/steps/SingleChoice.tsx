"use client";

import { cn } from "@/lib/cn";
import type { Question } from "@/lib/types";

/* ─── Smart icon lookup by option label ──────────────────────────── */
function getIcon(label: string): React.ReactNode {
  const l = label.toLowerCase();

  if (l === "yes")                                          return <IconCheck />;
  if (l === "no")                                           return <IconX />;
  if (l.includes("not yet") || l.includes("just gather"))  return <IconInfo />;
  if (l.includes("as soon") || l.includes("asap"))         return <IconZap />;
  if (l.includes("within") && l.includes("month"))         return <IconCalendar />;
  if (l.includes("gathering") || l.includes("research"))   return <IconBook />;

  if (l.includes("apartment"))                             return <IconApartment />;
  if (l.includes("multi storey") || l.includes("two storey")) return <IconMultiStorey />;
  if (l.includes("storey") || l.includes("single storey")) return <IconHouse />;

  if (l.includes("own the land") || l.includes("own land")) return <IconKey />;
  if (l.includes("buying land"))                           return <IconTag />;
  if (l.includes("knockdown") || l.includes("rebuild"))    return <IconHammer />;

  if (l.includes("bedroom"))                               return <IconBed />;
  if (l.includes("bathroom"))                              return <IconBath />;
  if (l.includes("living") || l.includes("dining"))        return <IconSofa />;

  if (l === "none")                                        return <IconMinus />;
  if (l.includes("triple") || l.includes("double"))        return <IconCars />;
  if (l.includes("single") && !l.includes("storey"))       return <IconCar />;

  if (l.includes("economy") || l.includes("budget"))       return <IconLeaf />;
  if (l.includes("standard"))                              return <IconStar />;
  if (l.includes("premium") || l.includes("luxury"))       return <IconDiamond />;

  if (l.startsWith("$"))                                   return <IconDollar />;

  return null;
}

/* ─── Component ──────────────────────────────────────────────────── */
interface Props {
  question: Question;
  value?: string;
  onSelect: (value: string) => void;
}

export function SingleChoice({ question, value, onSelect }: Props) {
  const opts = question.options ?? [];
  /* Use 2-column grid only when all labels are short and there are ≤6 options */
  const useGrid =
    opts.length <= 6 && opts.every((o) => o.label.length <= 28);

  return (
    <div
      className={cn(
        "grid gap-2.5",
        useGrid ? "sm:grid-cols-2" : "grid-cols-1"
      )}
    >
      {opts.map((opt, i) => {
        const selected = value === opt.value;
        const icon = getIcon(opt.label);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "group relative flex w-full items-center gap-3.5 rounded-2xl border px-4 py-4 text-left",
              "transition-all duration-200 ease-out",
              selected
                ? "border-[#293a57] bg-[#293a57] shadow-lg scale-[1.01]"
                : "border-ink-200 bg-white/80 hover:border-ink-400 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            {/* Icon / letter badge */}
            <span
              className={cn(
                "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-bold transition-colors duration-200",
                selected
                  ? "bg-white/15 text-white"
                  : "bg-ink-100 text-ink-500 group-hover:bg-ink-200 group-hover:text-ink-700"
              )}
            >
              {icon ?? (
                <span className="text-[13px] font-extrabold">
                  {String.fromCharCode(65 + i)}
                </span>
              )}
            </span>

            {/* Label */}
            <span
              className={cn(
                "flex-1 text-[15px] font-semibold leading-snug transition-colors duration-200",
                selected ? "text-white" : "text-ink-800"
              )}
            >
              {opt.label}
            </span>

            {/* Radio / check indicator */}
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-all duration-200",
                selected
                  ? "border-white/60 bg-white/20"
                  : "border-ink-300 group-hover:border-ink-500"
              )}
            >
              {selected && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Icons ──────────────────────────────────────────────────────── */
const ico = (d: string | React.ReactNode) =>
  typeof d === "string" ? (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  ) : d;

const IconCheck   = () => ico("M5 13l4 4L19 7");
const IconX       = () => ico("M18 6L6 18M6 6l12 12");
const IconInfo    = () => ico("M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z");
const IconZap     = () => ico("M13 2L3 14h9l-1 8 10-12h-9l1-8z");
const IconCalendar= () => ico("M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z");
const IconBook    = () => ico("M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z");
const IconHouse   = () => ico("M3 12L12 4l9 8M5 10v10h14V10M10 20v-6h4v6");
const IconApartment = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <path d="M9 22V12h6v10M8 6h.01M12 6h.01M16 6h.01M8 10h.01M16 10h.01" />
  </svg>
);
const IconMultiStorey = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="15" rx="1" />
    <path d="M3 12h18M3 17h18M8 22V7M16 22V7" />
    <path d="M8 4h8" />
    <path d="M12 4V7" />
  </svg>
);
const IconKey     = () => ico("M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4");
const IconTag     = () => ico("M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01");
const IconHammer  = () => ico("m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9M17.64 15 22 10.64M20.35 12.35 11.65 3.65a.48.48 0 0 0-.71 0l-2.3 2.3a.48.48 0 0 0 0 .71l8.7 8.7");
const IconBed     = () => ico("M2 4v16M2 8h20v12M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4M6 12h.01M18 12h.01");
const IconBath    = () => ico("M9 6C9 4.343 7.657 3 6 3S3 4.343 3 6v12M3 13h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3zM7 19v2M17 19v2");
const IconSofa    = () => ico("M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0zM4 18v2M20 18v2");
const IconMinus   = () => ico("M5 12h14");
const IconCar     = () => ico("M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14l4 4v4a2 2 0 0 1-2 2h-2M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0");
const IconCars    = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 16H1a1 1 0 0 1-1-1v-3l2-4h10l2 4v3a1 1 0 0 1-1 1h-2" transform="translate(1 2) scale(0.8)" />
    <circle cx="4" cy="17" r="1.5" />
    <circle cx="10" cy="17" r="1.5" />
    <path d="M14 17h2l1.5-4H22l1.5 4H25" />
    <circle cx="16" cy="19" r="1.5" />
    <circle cx="22" cy="19" r="1.5" />
  </svg>
);
const IconLeaf    = () => ico("M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21c1-1 2-2 3-2 1 0 2 .5 3 1s2 1 3 1c4 0 6-3.5 6-7 0-4-3-6-4-6z");
const IconStar    = () => ico("M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z");
const IconDiamond = () => ico("M6 3h12l4 6-10 13L2 9l4-6z");
const IconDollar  = () => ico("M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6");
