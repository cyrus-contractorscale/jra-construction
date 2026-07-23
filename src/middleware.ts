import { NextRequest, NextResponse } from "next/server";

const ADMIN_PATHS = [
  "/audit",
  "/pricing",
  "/report-audit",
  "/api/admin",
  "/api/ghl-fields",
];

// These sub-paths must stay public (they ARE the auth mechanism)
const PUBLIC_EXCEPTIONS = ["/api/admin/auth"];

const COOKIE_NAME = "jra_admin";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the auth endpoint through
  if (PUBLIC_EXCEPTIONS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const isAdminPath = ADMIN_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/") || pathname.startsWith(p + "?"));
  if (!isAdminPath) return NextResponse.next();

  const secret = process.env.ADMIN_SECRET;
  const token = request.cookies.get(COOKIE_NAME)?.value;

  const isAuthed = Boolean(secret && token && token === secret);

  if (!isAuthed) {
    // API routes → 401
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }
    // Pages → redirect to login, preserving the intended destination
    const loginUrl = new URL("/admin-login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/audit/:path*",
    "/pricing/:path*",
    "/report-audit/:path*",
    "/api/admin/:path*",
    "/api/ghl-fields/:path*",
  ],
};
