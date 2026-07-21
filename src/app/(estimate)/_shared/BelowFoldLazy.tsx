"use client";

import dynamic from "next/dynamic";
import type { FaqItem } from "./FaqAccordion";

const BelowFoldDynamic = dynamic(
  () => import("./BelowFold").then((m) => m.BelowFold),
  { ssr: false }
);

export function BelowFoldLazy({ faqs }: { faqs: FaqItem[] }) {
  return <BelowFoldDynamic faqs={faqs} />;
}
