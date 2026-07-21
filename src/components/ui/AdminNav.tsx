import Link from "next/link";

interface Props {
  active: "estimate" | "audit" | "pricing";
}

const links = [
  { href: "/estimate",  label: "Estimate",      id: "estimate" },
  { href: "/audit",     label: "Setup & Audit",  id: "audit"    },
  { href: "/pricing",   label: "Pricing",        id: "pricing"  },
] as const;

export function AdminNav({ active }: Props) {
  return (
    <header className="sticky top-0 z-20 border-b border-ink-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-6 py-3 sm:px-10 lg:px-14">
        {links.map((l) => {
          const isActive = l.id === active;
          return (
            <Link
              key={l.id}
              href={l.href}
              className={[
                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                isActive
                  ? "bg-ink-900 text-white"
                  : "text-ink-500 hover:bg-ink-100 hover:text-ink-900",
              ].join(" ")}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
