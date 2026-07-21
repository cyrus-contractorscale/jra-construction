import type { Metadata } from "next";
import { AdminNav } from "@/components/ui/AdminNav";
import { PricingEditor } from "@/components/admin/PricingEditor";

export const metadata: Metadata = {
  title: "Pricing",
  robots: { index: false, follow: false },
};

export default function PricingPage() {
  return (
    <>
      <AdminNav active="pricing" />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-ink-900">Pricing</h1>
          <p className="mt-1 text-sm text-ink-500">
            Edit base rates and finish-level multipliers used to compute estimate ranges.
          </p>
        </div>
        <PricingEditor />
      </div>
    </>
  );
}
