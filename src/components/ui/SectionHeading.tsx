type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use on dark section backgrounds (e.g. contact band). */
  onDark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const centerWrap = align === "center" ? "mx-auto" : "";

  const eyebrowClass = onDark ? "text-amber-400" : "text-amber-700";
  const titleClass = onDark ? "text-white" : "text-zinc-900";
  const bodyClass = onDark ? "text-zinc-300" : "text-zinc-600";

  return (
    <div
      className={`max-w-3xl space-y-4 ${alignClass} ${align === "center" ? "mx-auto" : ""}`}
    >
      <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass} ${centerWrap}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-lg leading-relaxed sm:text-xl ${bodyClass} ${centerWrap} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
