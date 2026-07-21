import { NextRequest, NextResponse } from "next/server";
import { type PricingConfig } from "@/lib/pricing";
import { projectLabels, projectOrder } from "@/lib/pricingMeta";
import { getPricingConfig, setPricingConfig } from "@/lib/config";

export const runtime = "edge";

function isValidConfig(value: unknown): value is PricingConfig {
  if (!value || typeof value !== "object") return false;
  const candidate = value as PricingConfig;
  if (!Number.isFinite(candidate.rangeSpread)) return false;
  if (!Number.isFinite(candidate.roundTo)) return false;
  for (const project of projectOrder) {
    const config = candidate.projects?.[project];
    if (!config) return false;
    if (!Number.isFinite(config.basePerSqm)) return false;
    if (!config.finish || typeof config.finish !== "object") return false;
    for (const key of ["Economy", "Standard", "Premium"]) {
      if (!Number.isFinite(config.finish[key])) return false;
    }
  }
  return true;
}

export async function GET() {
  const pricing = await getPricingConfig();
  return NextResponse.json({ ok: true, pricing, projectLabels });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValidConfig(body)) {
    return NextResponse.json({ ok: false, error: "Invalid pricing config structure" }, { status: 400 });
  }

  const kvOk = await setPricingConfig(body);
  if (kvOk) {
    return NextResponse.json({ ok: true, message: "Pricing saved to KV — live immediately on all quote calculations." });
  }

  return NextResponse.json(
    { ok: false, error: "KV not available. Make sure the JRA_ESTIMATE KV namespace is bound in the Cloudflare Pages dashboard under Settings → Functions → KV namespace bindings." },
    { status: 503 }
  );
}
