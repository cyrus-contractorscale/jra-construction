export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";
import { getSiteConfig, setSiteConfig } from "@/lib/config";
import type { SiteConfig } from "@/lib/config";


export type ClientInfo = SiteConfig;

export async function GET() {
  const config = await getSiteConfig();
  return NextResponse.json({ ok: true, site: config });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const info = body as SiteConfig;
  if (!info.name || !info.phoneDisplay || !info.email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const kvOk = await setSiteConfig(info);
  if (kvOk) {
    return NextResponse.json({ ok: true, message: "Saved to KV — changes are live immediately on all pages." });
  }

  return NextResponse.json(
    { ok: false, error: "KV not available. Make sure the JRA_ESTIMATE KV namespace is bound in the Cloudflare Pages dashboard under Settings → Functions → KV namespace bindings." },
    { status: 503 }
  );
}
