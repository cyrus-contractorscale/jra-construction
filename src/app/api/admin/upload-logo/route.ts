import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * File uploads to the filesystem are not supported on Cloudflare Pages (no writable disk).
 * To change the logo:
 *   1. Commit your image file to the /public folder in your Git repo.
 *   2. Go to /audit → Client Information → type the filename.
 *   3. Click Save Changes — the logo updates everywhere instantly via KV.
 */
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      error:
        "Direct file upload is not supported on Cloudflare Pages. " +
        "Add your logo file to /public in your Git repo, then type the filename in the Client Information tab.",
    },
    { status: 501 }
  );
}
