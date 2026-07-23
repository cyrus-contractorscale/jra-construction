import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://jraconstruction.co.nz";

export const metadata: Metadata = {
  title: {
    default: "Home Builders In Auckland | Instant Online Estimate",
    template: "%s | JRA Construction",
  },
  description:
    "Looking for a reliable home builder in Auckland? Award-winning JRA Construction for quality renovations, extensions, and new builds. Talk to us today.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "JRA Construction",
    title: "Home Builders In Auckland | Instant Online Estimate",
    description:
      "Looking for a reliable home builder in Auckland? Award-winning JRA Construction for quality renovations, extensions, and new builds. Talk to us today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Builders In Auckland | Instant Online Estimate",
    description:
      "Award-winning JRA Construction for quality renovations, extensions, and new builds across Auckland.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "Organization"],
  "@id": "https://jraconstruction.co.nz/#organization",
  name: "JRA Construction LTD",
  description:
    "Looking for a reliable Auckland home builder? Contact award-winning JRA Construction for quality renovations, extensions, and new builds. Talk to us today.",
  url: "https://jraconstruction.co.nz",
  telephone: "+64 21 276 9971",
  email: "joe@jraconstruction.co.nz",
  image: "https://jraconstruction.co.nz/jra-logo-blue.png",
  logo: "https://jraconstruction.co.nz/jra-logo-blue.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Brighton Road Parnell",
    addressLocality: "Auckland",
    addressRegion: "Auckland",
    postalCode: "1052",
    addressCountry: "NZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -36.86018,
    longitude: 174.786769,
  },
  areaServed: [{ "@type": "City", name: "Auckland" }],
  serviceType: [
    "Custom Homes",
    "Home Renovations",
    "Home Extensions",
    "Kitchen Renovations",
    "Bathroom Renovations",
    "Quantity Surveying",
    "Construction Management",
    "Home Maintenance",
    "Granny Flats",
    "Minor Dwellings",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${plusJakarta.variable} ${lora.variable} h-full scroll-smooth antialiased`}
      >
        <head>
          {/* Google Tag Manager */}
          <Script
            id="gtm-head"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MCTBGRD');`,
            }}
          />
        </head>
        <body className="min-h-full flex flex-col font-sans">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MCTBGRD"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {children}
          <Script src="https://link.contractorscale.com/js/form_embed.js" strategy="afterInteractive" />
          {/* ContractorScale tracking is loaded by the GTM container (GTM-MCTBGRD),
              but GTM's script re-injection drops the data-tracking-id attribute,
              which makes the library log "Required data-tracking-id attribute not
              found". This observer restores the attribute on GTM's injected tag
              before the script executes, so exactly one tracker initializes. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){if(window.__lcTrackingPatch)return;window.__lcTrackingPatch=true;var ID='tk_5268635886654abf8064450caaa49c91';new MutationObserver(function(muts){muts.forEach(function(m){m.addedNodes.forEach(function(n){if(n.tagName==='SCRIPT'&&n.src&&n.src.indexOf('external-tracking')>-1&&!n.getAttribute('data-tracking-id')){n.setAttribute('data-tracking-id',ID);}});});}).observe(document.documentElement,{childList:true,subtree:true});})();`,
            }}
          />
          {/* GHL WebChat */}
          <Script
            id="ghl-webchat"
            src="https://beta.leadconnectorhq.com/loader.js"
            data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="66ff5e3fd53ad52f3d5ea788"
            strategy="afterInteractive"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
        </body>
      </html>
  );
}
