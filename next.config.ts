import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Live site used /project/<slug>; this build uses /projects/<slug>.
      {
        source: "/project",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/project/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
      // Live site's "Free Consultation" buttons pointed at /contact-us/.
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      // These 4 live-site service-area URLs are aliases of the index
      // (rel=canonical → /service-areas/ on the WordPress site).
      {
        source: "/service-area/bombay",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/service-area/east-tamaki",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/service-area/tamaki",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/service-area/wiri",
        destination: "/service-areas",
        permanent: true,
      },
      // Remaining live-site /service-area/<slug> URLs map 1:1 to
      // /service-areas/<slug> in this build (must come after the aliases).
      {
        source: "/service-area/:slug",
        destination: "/service-areas/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// Enables Cloudflare bindings during local `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
