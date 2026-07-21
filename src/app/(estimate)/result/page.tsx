import { EstimateResult } from "@/components/result/EstimateResult";
import { getSiteConfig } from "@/lib/config";

// Must be dynamic + edge so KV is read per-request (not baked in at build time)
export const runtime = "edge";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Your Estimate | Free Project Quote Range",
};

export default async function ResultPage() {
  const site = await getSiteConfig();
  return <EstimateResult site={site} />;
}
