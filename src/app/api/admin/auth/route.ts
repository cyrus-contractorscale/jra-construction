export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "jra_admin";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";

  let password = "";
  let next = "/audit";

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const text = await req.text();
    const params = new URLSearchParams(text);
    password = params.get("password") ?? "";
    next = params.get("next") ?? "/audit";
  } else {
    try {
      const body = await req.json() as { password?: string; next?: string };
      password = body.password ?? "";
      next = body.next ?? "/audit";
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
    }
  }

  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    return NextResponse.json({ ok: false, error: "ADMIN_SECRET not configured" }, { status: 503 });
  }

  if (password !== secret) {
    const loginUrl = new URL("/admin-login", req.url);
    loginUrl.searchParams.set("next", next);
    loginUrl.searchParams.set("error", "1");
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  // Valid — set HttpOnly secure cookie and redirect to intended destination
  const safeNext = next.startsWith("/") ? next : "/audit";
  const response = NextResponse.redirect(new URL(safeNext, req.url), { status: 303 });
  response.cookies.set(COOKIE_NAME, secret, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return response;
}

export async function DELETE(req: NextRequest) {
  const response = NextResponse.redirect(new URL("/admin-login", req.url), { status: 303 });
  response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return response;
}
