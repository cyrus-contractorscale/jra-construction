import type { MetadataRoute } from "next";

const PRODUCTION_URL = "https://jraconstruction.co.nz";

// Internal/admin paths that must never be indexed regardless of environment
const ALWAYS_DISALLOW = ["/audit", "/pricing", "/report-audit", "/admin-login", "/api/"];

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.SITE_ENV === "production";

  if (!isProduction) {
    // Staging / preview deployments — block all crawlers entirely
    return {
      rules: { userAgent: "*", disallow: "/" },
      host: PRODUCTION_URL,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ALWAYS_DISALLOW,
      },
    ],
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
    host: PRODUCTION_URL,
  };
}
