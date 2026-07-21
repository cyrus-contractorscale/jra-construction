import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Site Audit Report | JRA Construction",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
// Generated from the live-site crawl of jraconstruction.co.nz (see report-audit/ docs).

const SITE_URL = "https://jraconstruction.co.nz";
const REPORT_DATE = "21 July 2026 (initial Next.js conversion audit)";

const trackingStatus = [
  {
    tool: "GoHighLevel Form Embed",
    id: "form_embed.js",
    script: "https://link.contractorscale.com/js/form_embed.js",
    status: "active" as const,
    note: "Loaded globally via layout.tsx (afterInteractive)",
  },
  {
    tool: "GoHighLevel External Tracking",
    id: "tk_5268635886654abf8064450caaa49c91",
    script: "https://link.contractorscale.com/js/external-tracking.js",
    status: "active" as const,
    note: "Loaded globally via layout.tsx (afterInteractive)",
  },
  {
    tool: "Google Tag Manager",
    id: "GTM-MCTBGRD",
    script: "https://www.googletagmanager.com/gtm.js?id=GTM-MCTBGRD",
    status: "active" as const,
    note: "GTM head script loaded via beforeInteractive in layout.tsx. Noscript fallback after <body>. Matches live WordPress site.",
  },
  {
    tool: "GHL WebChat Widget",
    id: "66ff5e3fd53ad52f3d5ea788",
    script: "https://beta.leadconnectorhq.com/loader.js",
    status: "active" as const,
    note: "Loaded globally via layout.tsx (afterInteractive). Same widget ID as live site.",
  },
  {
    tool: "Facebook Pixel",
    id: "1421767261676261",
    script: "https://connect.facebook.net/en_US/fbevents.js",
    status: "missing" as const,
    note: "Present on the live WordPress site but NOT yet added to this build. Add to layout.tsx before launch.",
  },
];

const pages = [
  {
    group: "Core",
    label: "Homepage",
    url: "/",
    title: "Home Builders In Auckland | Instant Online Estimate",
    titleLen: 51,
    description: "Looking for a reliable home builders in Auckland? Award-winning JRA Construction for quality renovations, extensions, and new builds. Talk to us today.",
    descLen: 151,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Core",
    label: "About",
    url: "/about/",
    title: "Auckland's Trusted Building Team | Instant Online Estimate",
    titleLen: 58,
    description: "Discover our residential building team specializing in high-end renovations, extensions and alterations across Auckland. Book a consulation now.",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Core",
    label: "Blog",
    url: "/blog/",
    title: "Building and Renovation Blog | Instant Online Estimate",
    titleLen: 54,
    description: "Expert building advice, renovation tips, and home improvement insights from Auckland's trusted builders. Stay updated with our construction blog.",
    descLen: 145,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Core",
    label: "Careers",
    url: "/careers/",
    title: "Auckland Construction Management | 24-Hour Callback Policy",
    titleLen: 58,
    description: "Learn more about Auckland construction management company, JRA Construction. Our dedicated team, and our commitment to delivering outstanding craftsmanship.",
    descLen: 156,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Core",
    label: "Contact",
    url: "/contact/",
    title: "Contact Home Builder in Auckland | Free Consultation",
    titleLen: 52,
    description: "Get in touch with our Auckland building team for expert advice and a free consultation. Available 24/7 for your home construction questions.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness",
  },
  {
    group: "Core",
    label: "Faq",
    url: "/faq/",
    title: "FAQ for Home Building Construction Auckland | Instant Online Estimate",
    titleLen: 69,
    description: "Find answers to common questions about our building services, process, and costs. Expert insights from Auckland's trusted construction team.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Core",
    label: "Guarantee",
    url: "/guarantee/",
    title: "Building Guarantee - JRA Construction",
    titleLen: 37,
    description: "JRA Construction offers a comprehensive building guarantee covering quality, safety, and communication. Our construction guarantee includes 10-year Building Act warranties.",
    descLen: 172,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Core",
    label: "How It Works",
    url: "/how-it-works/",
    title: "How it works - JRA Construction",
    titleLen: 31,
    description: "Step 1: Initial Contact",
    descLen: 23,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Core",
    label: "Sitemap",
    url: "/sitemap/",
    title: "Sitemap - JRA Construction",
    titleLen: 26,
    description: "Free Consultation ONLINE ESTIMATE",
    descLen: 33,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Core",
    label: "Testimonials",
    url: "/testimonials/",
    title: "Satisfied Clients - Home Builder Auckland | Instant Online Estimate",
    titleLen: 67,
    description: "Read genuine testimonials from our satisfied clients about their building projects. Real experiences from Auckland homeowners we've helped.",
    descLen: 139,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Core",
    label: "Why Choose Us",
    url: "/why-choose-us/",
    title: "Auckland's Trusted Home Renovation Builder | Instant Online Estimate",
    titleLen: 68,
    description: "Licensed builders with quality guarantees, fixed-price contracts, and safety-first approach. See why Auckland homeowners trust our building team.",
    descLen: 145,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Services",
    label: "Services Index",
    url: "/services/",
    title: "Auckland Home Builder Services | Instant Online Estimate",
    titleLen: 56,
    description: "From new builds to renovations, JRA Construction provides a range of Auckland home builder services. Contact our expert team to discuss your project.",
    descLen: 149,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Services",
    label: "Bathroom Renovations",
    url: "/services/bathroom-renovations/",
    title: "Bathroom Renovations Auckland | Instant Online Estimate",
    titleLen: 55,
    description: "Transform your space with high-quality bathroom renovations in Auckland by JRA Construction. Contact us today for your free quote.",
    descLen: 130,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Services",
    label: "Construction Management",
    url: "/services/construction-management/",
    title: "Construction Management Auckland | Instant Online Estimate",
    titleLen: 58,
    description: "Elevate your project with top-tier construction management Auckland from JRA Construction. Connect today to discover our expertise.",
    descLen: 131,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Services",
    label: "Custom Homes",
    url: "/services/custom-homes/",
    title: "Custom Homes Auckland | Instant Online Estimate",
    titleLen: 47,
    description: "Explore custom homes Auckland with JRA Construction. Learn about our expert builders and quality assurance. Start your dream home today now.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Services",
    label: "Granny Flats",
    url: "/services/granny-flats/",
    title: "Granny Flats in Auckland | Instant Online Estimate",
    titleLen: 50,
    description: "Looking to build a granny flat in Auckland? JRA Construction handles the entire build process with expert project management and reliable results.",
    descLen: 146,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Article",
  },
  {
    group: "Services",
    label: "Home Extensions",
    url: "/services/home-extensions/",
    title: "Home Extensions Auckland | Instant Online Estimate | Expand & Enhance Your Home With Confidence",
    titleLen: 95,
    description: "Expert home extensions in Auckland, New Zealand. JRA Construction designs and builds quality extensions that add space, value, and comfort - tailored to your lifestyle and budget.",
    descLen: 179,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Article",
  },
  {
    group: "Services",
    label: "Home Maintenance",
    url: "/services/home-maintenance/",
    title: "Home Maintenance in Auckland | Instant Online Estimate",
    titleLen: 54,
    description: "Keep your home running smoothly with JRA Construction's home maintenance in Auckland services. Contact us today for a free maintenance quote.",
    descLen: 141,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Article",
  },
  {
    group: "Services",
    label: "Home Renovations",
    url: "/services/home-renovations/",
    title: "Home Renovations Auckland | Instant Online Estimate | Quality & On-Time",
    titleLen: 71,
    description: "Professional home renovations in New Zealand. JR&A Construction delivers reliable, high-quality renovations on time and on budget—from kitchens and bathrooms to full home makeovers.",
    descLen: 181,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Services",
    label: "Kitchen Renovations",
    url: "/services/kitchen-renovations/",
    title: "Kitchen Renovations in Auckland | Instant Online Estimate",
    titleLen: 57,
    description: "Kitchen renovations in Auckland specialist JRA Construction delivers quality, reliability, and innovation with superior craftsmanship. Contact us.",
    descLen: 146,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Services",
    label: "Minor Dwellings",
    url: "/services/minor-dwellings/",
    title: "Minor Dwellings in Auckland | Instant Online Estimate",
    titleLen: 53,
    description: "Build a minor dwelling in Auckland with confidence. JRA Construction manages the process from permits to completion with a focus on quality and compliance.",
    descLen: 155,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Article",
  },
  {
    group: "Services",
    label: "Quantity Surveying",
    url: "/services/quantity-surveying/",
    title: "Quantity Surveying Auckland | Instant Online Estimate",
    titleLen: 53,
    description: "Expert quantity surveying Auckland services by JRA Construction. Experienced surveyors keep your project on time and budget. Contact us today.",
    descLen: 142,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Article",
  },
  {
    group: "Projects",
    label: "Projects Index",
    url: "/project/",
    title: "Projects - JRA Construction",
    titleLen: 27,
    description: "Projects Archive - JRA Construction",
    descLen: 35,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness",
  },
  {
    group: "Projects",
    label: "Bellevue",
    url: "/project/bellevue/",
    title: "Bellevue - JRA Construction",
    titleLen: 27,
    description: "",
    descLen: 0,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Cleve Road Green Bay",
    url: "/project/cleve-road-green-bay/",
    title: "Cleve Road, Green Bay - JRA Construction",
    titleLen: 40,
    description: "",
    descLen: 0,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Fir Street Waterview",
    url: "/project/fir-street-waterview/",
    title: "Fir Street, Waterview | JRA Construction in Auckland",
    titleLen: 52,
    description: "JRA Construction partnered with Hoxha Bailey Architects to revitalize the Fir Street dwelling in Waterview. Learn more about the transformed living area now.",
    descLen: 157,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Gunson Street Freemans Bay",
    url: "/project/gunson-street-freemans-bay/",
    title: "Gunson Street, Freemans Bay | JRA Construction in Auckland",
    titleLen: 58,
    description: "JRA Construction handled an internal and external renovation project on Gunson Street, Freemans Bay. Visit our website to learn more about this project.",
    descLen: 152,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Hurstmere Road",
    url: "/project/hurstmere-road/",
    title: "Hurstmere Road - JRA Construction",
    titleLen: 33,
    description: "",
    descLen: 0,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Khukhu Milford",
    url: "/project/khukhu-milford/",
    title: "KhuKhu Milford - JRA Construction",
    titleLen: 33,
    description: "",
    descLen: 0,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Laingholm Baptist Church",
    url: "/project/laingholm-baptist-church/",
    title: "Laingholm Baptist Church | JRA Construction in Auckland",
    titleLen: 55,
    description: "JRA Construction collaborated with SGA Architects Ltd. to transform the facilities of Laingholm Baptist Church. Visit our site to learn more about our projects.",
    descLen: 160,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Lucinda Place Glen Eden",
    url: "/project/lucinda-place-glen-eden/",
    title: "Lucinda Place, Glen Eden | JRA Construction in Auckland",
    titleLen: 55,
    description: "JRA Construction is proud to collaborate with Guman Developer Ltd and Tarzan Design on the Lucinda Place project in Glen Eden. Contact us now to learn more.",
    descLen: 156,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Matakana",
    url: "/project/matakana/",
    title: "Matakana Renovation & Extension | JRA Construction",
    titleLen: 50,
    description: "RA Construction renovated and extended this Matakana family home, adding a master bedroom suite and open-plan living. Visit our site to learn more about our work",
    descLen: 161,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Mcleod Road Te Atatu",
    url: "/project/mcleod-road-te-atatu/",
    title: "Mcleod Road, Te Atatu - JRA Construction",
    titleLen: 40,
    description: "",
    descLen: 0,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Mount Eden Renovation",
    url: "/project/mount-eden-renovation/",
    title: "Mount Eden Villa Renovation Project | JRA Construction",
    titleLen: 54,
    description: "View our award-winning Mount Eden villa renovation. See how we transformed this Auckland home with modern design while preserving its character.",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Muriwai Renovation",
    url: "/project/muriwai-renovation/",
    title: "Muriwai Renovation | JRA Construction in Auckland",
    titleLen: 49,
    description: "JRA Construction undertook a renovation project in Muriwai, enhancing the property's outdoor spaces. To learn more about our projects, visit our website.",
    descLen: 153,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "North Piha Road",
    url: "/project/north-piha-road/",
    title: "North Piha Road - JRA Construction",
    titleLen: 34,
    description: "",
    descLen: 0,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Queensway",
    url: "/project/queensway/",
    title: "New Build Queensway Project | JRA Construction",
    titleLen: 46,
    description: "Explore our Queensway project showcasing two architecturally designed homes in Auckland. View our quality craftsmanship and attention to detail.",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Saint Leonards Road Mount Eden",
    url: "/project/saint-leonards-road-mount-eden/",
    title: "Saint Leonards Road, Mount Eden Villa | JRA Construction",
    titleLen: 56,
    description: "JRA Construction managed this extensive renovation and villa extension project on Saint Leonards Road, Mount Eden. View our project portfolio.",
    descLen: 142,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Sandringham Project",
    url: "/project/sandringham-project/",
    title: "Sandringham Project | JRA Construction in Auckland",
    titleLen: 50,
    description: "JRA Construction partnered with Harbour City Plans to transform this Sandringham residence. Contact us to learn about our building expertise.",
    descLen: 141,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Seacombe Road Point Chevalier",
    url: "/project/seacombe-road-point-chevalier/",
    title: "Seacombe Road, Point Chevalier Home Extension & Renovation",
    titleLen: 58,
    description: "Discover how JRA Construction transformed a Point Chevalier home on Seacombe Road. Explore this stunning extension and renovation project.",
    descLen: 138,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + VideoObject",
  },
  {
    group: "Projects",
    label: "Taipari Road Te Atatu",
    url: "/project/taipari-road-te-atatu/",
    title: "Taipari Road and Te Atatu Home Project | JRA Construction",
    titleLen: 57,
    description: "JRA Construction transformed this Taipari Road, Te Atatu property through expert external reclad and renovation. View our building projects.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Te Wiata Place Avondale",
    url: "/project/te-wiata-place-avondale/",
    title: "Te Wiata Place, Avondale | JRA Construction in Auckland",
    titleLen: 55,
    description: "JRA Construction collaborated with Drawn Architects to undertake a transformative extension and renovation project on Te Wiata Place in Avondale.",
    descLen: 145,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Tiri Road Whangaparaoa",
    url: "/project/tiri-road-whangaparaoa/",
    title: "Tiri Road, Whangaparāoa | JRA Construction in Auckland",
    titleLen: 54,
    description: "JRA Construction created a stunning new build project on Tiri Road, Whangaparāoa. Learn more about its exceptional design by contacting us.",
    descLen: 139,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Projects",
    label: "Westminster Road Balmoral",
    url: "/project/westminster-road-balmoral/",
    title: "Westminster Road, Balmoral | JRA Construction in Auckland",
    titleLen: 57,
    description: "JRA Construction partnered with Spooner Architectural to transform this Westminster Road residence in Balmoral. View our project details.",
    descLen: 137,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage",
  },
  {
    group: "Service Areas",
    label: "Bombay",
    url: "/service-area/bombay/",
    title: "Auckland Home Builders Service Area Coverage | Instant Online Estimate",
    titleLen: 70,
    description: "Find out if we service your Auckland location. Expert home builders covering residential areas throughout the Auckland region for all projects.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Service Areas",
    label: "East Tamaki",
    url: "/service-area/east-tamaki/",
    title: "Auckland Home Builders Service Area Coverage | Instant Online Estimate",
    titleLen: 70,
    description: "Find out if we service your Auckland location. Expert home builders covering residential areas throughout the Auckland region for all projects.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Service Areas",
    label: "Epsom",
    url: "/service-area/epsom/",
    title: "Home Renovation Builder Epsom | JRA Construction",
    titleLen: 48,
    description: "Choose JRA Construction for expert new builds and home renovations at Epsom. Call us now to transform your home with our professional services!",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Freemansbay Nz",
    url: "/service-area/freemansbay-nz/",
    title: "Home Renovation Builder in Freemans Bay | JRA Construction",
    titleLen: 58,
    description: "Need a home renovation builder in Freemans Bay, NZ? JRA Construction delivers tailored renovations with quality workmanship. Book a consult today!",
    descLen: 146,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Grey Lynn Nz",
    url: "/service-area/grey-lynn-nz/",
    title: "Home Renovation Builder in Grey Lynn NZ | JRA Construction",
    titleLen: 58,
    description: "Need a home renovation builder in Grey Lynn? JRA Construction offers quality renovations, expert service, and local experience you can trust.",
    descLen: 141,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Herne Bay Nz",
    url: "/service-area/herne-bay-nz/",
    title: "Home Renovation Builder in Herne Bay, NZ | JRA Construction",
    titleLen: 59,
    description: "Looking for a trusted home renovation builder in Herne Bay, NZ? JRA Construction creates quality, custom solutions. Book your renovation consult now!",
    descLen: 149,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Albany",
    url: "/service-area/home-renovation-builder-in-albany/",
    title: "Custom Extensions & Home Renovation Albany | JRA Construction",
    titleLen: 61,
    description: "JRA Construction: Premier home building and structural renovations in Albany. Modernise suburban family properties with 100% fixed-price transparency.",
    descLen: 150,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Avondale",
    url: "/service-area/home-renovation-builder-in-avondale/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Blockhouse Bay",
    url: "/service-area/home-renovation-builder-in-blockhouse-bay/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Browns Bay",
    url: "/service-area/home-renovation-builder-in-browns-bay/",
    title: "Coastal Extensions & Home Renovation Browns Bay | JRA Construction",
    titleLen: 66,
    description: "JRA Construction: Premier home building and structural renovations in Browns Bay. Modernise clifftop properties with 100% fixed-price transparency.",
    descLen: 147,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Dairy Flat",
    url: "/service-area/home-renovation-builder-in-dairy-flat/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Devonport",
    url: "/service-area/home-renovation-builder-in-devonport/",
    title: "Heritage Villa Renovations & Extensions Devonport | JRA Construction",
    titleLen: 68,
    description: "JRA Construction: Premier home building and structural restorations in Devonport. Modernise historic villas with 100% fixed-price transparency.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Glen Eden",
    url: "/service-area/home-renovation-builder-in-glen-eden/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Glenfield",
    url: "/service-area/home-renovation-builder-in-glenfield/",
    title: "Structural Extensions & Home Renovation Glenfield | JRA Construction",
    titleLen: 68,
    description: "JRA Construction: Premier home building and structural renovations in Glenfield. Modernise sloping and suburban properties with 100% fixed-price transparency.",
    descLen: 158,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Greenhithe",
    url: "/service-area/home-renovation-builder-in-greenhithe/",
    title: "Lifestyle Extensions & Home Renovation Greenhithe | JRA Construction",
    titleLen: 68,
    description: "JRA Construction: Premier home building and structural renovations in Greenhithe. Modernise lifestyle and character properties with 100% fixed-price transparency.",
    descLen: 162,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Helensville",
    url: "/service-area/home-renovation-builder-in-helensville/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Henderson",
    url: "/service-area/home-renovation-builder-in-henderson/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Kumeu",
    url: "/service-area/home-renovation-builder-in-kumeu/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Mairangi Bay",
    url: "/service-area/home-renovation-builder-in-mairangi-bay/",
    title: "Coastal Extensions & Home Renovation Mairangi Bay | JRA Construction",
    titleLen: 68,
    description: "JRA Construction: Premier home building and structural renovations in Mairangi Bay. Modernise clifftop properties with 100% fixed-price transparency.",
    descLen: 149,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Milford",
    url: "/service-area/home-renovation-builder-in-milford/",
    title: "Coastal Extensions & Home Renovation Milford | JRA Construction",
    titleLen: 63,
    description: "JRA Construction: Premier home building and structural renovations in Milford. Modernise coastal and lakeside properties with 100% fixed-price transparency.",
    descLen: 156,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Northcote",
    url: "/service-area/home-renovation-builder-in-northcote/",
    title: "Custom Extensions & Home Renovation Albany | JRA Construction",
    titleLen: 61,
    description: "JRA Construction: Premier home building and structural renovations in Albany. Modernise suburban family properties with 100% fixed-price transparency.",
    descLen: 150,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Orewa",
    url: "/service-area/home-renovation-builder-in-orewa/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Paremoremo",
    url: "/service-area/home-renovation-builder-in-paremoremo/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Red Beach",
    url: "/service-area/home-renovation-builder-in-red-beach/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Snells Beach",
    url: "/service-area/home-renovation-builder-in-snells-beach/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Te Atatu",
    url: "/service-area/home-renovation-builder-in-te-atatu/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Warkworth",
    url: "/service-area/home-renovation-builder-in-warkworth/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Waterview",
    url: "/service-area/home-renovation-builder-in-waterview/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Home Renovation Builder In Westmere",
    url: "/service-area/home-renovation-builder-in-westmere/",
    title: "Home Renovation Builder Bombay | JRA Construction",
    titleLen: 49,
    description: "Transform your home with JRA Construction, a trusted home renovation builder in Bombay. Connect with us today to start your project!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Kingsland Nz",
    url: "/service-area/kingsland-nz/",
    title: "Home Renovation Builder in Kingsland | JRA Construction",
    titleLen: 55,
    description: "Trusted home renovation builder in Kingsland, NZ. JRA Construction delivers custom upgrades, extensions, and quality finishes tailored to your lifestyle.",
    descLen: 153,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Mission Bay",
    url: "/service-area/mission-bay/",
    title: "Home Building and Renovation Mission Bay | JRA Construction",
    titleLen: 59,
    description: "JRA Construction delivers top-notch home building and renovation in Mission Bay. Contact us now to start your home transformation journey!",
    descLen: 138,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Mount Albert Nz",
    url: "/service-area/mount-albert-nz/",
    title: "Home Renovation Builder in Mount Albert | JRA Construction",
    titleLen: 58,
    description: "Looking for a home renovation builder in Mount Albert? JRA Construction offers expert service, quality finishes, and tailored renovation solutions.",
    descLen: 147,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Mount Eden",
    url: "/service-area/mount-eden/",
    title: "Home Renovation Builder Mount Eden | JRA Construction",
    titleLen: 53,
    description: "At JRA Construction, we offer expert home renovation services in Mount Eden. Contact us to start enhancing your living space today.",
    descLen: 131,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Point Chevalier Nz",
    url: "/service-area/point-chevalier-nz/",
    title: "Home Renovation Builder in Point Chevalier | JRA Construction",
    titleLen: 61,
    description: "Looking for a home renovation builder in Point Chevalier? JRA Construction delivers expert craftsmanship, tailored designs, and seamless project execution.",
    descLen: 155,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Ponsonby Nz",
    url: "/service-area/ponsonby-nz/",
    title: "Home Renovation Builder in Ponsonby, NZ | JRA Construction",
    titleLen: 58,
    description: "Looking for a home renovation builder in Ponsonby, NZ? JRA Construction crafts stylish upgrades tailored to your vision. Get started today!",
    descLen: 139,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Remuera",
    url: "/service-area/remuera/",
    title: "Home Building and Renovation Remuera | JRA Construction",
    titleLen: 55,
    description: "Transform your Remuera home with JRA Construction's expert building and renovation services. Get a free quote today for your dream home project!",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Rothesay Bay",
    url: "/service-area/rothesay-bay/",
    title: "Home Renovation Builder Rothesay Bay | JRA Construction",
    titleLen: 55,
    description: "JRA Construction is your go-to home renovation builder in Rothesay Bay. Contact us now and let’s transform your home with our expertise!",
    descLen: 136,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Sandringham Nz",
    url: "/service-area/sandringham-nz/",
    title: "Home Renovation Builder in Sandringham, NZ | JRA Construction",
    titleLen: 61,
    description: "Transform your home with JRA Construction, the trusted home renovation builder in Sandringham, NZ. Expert renovation services tailored to your vision.",
    descLen: 150,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "St Heliers Nz",
    url: "/service-area/st-heliers-nz/",
    title: "Home Renovation Builder in St Heliers | JRA Construction",
    titleLen: 56,
    description: "Looking for a reliable home renovation builder in St Heliers, NZ? JRA Construction offers expert renovations tailored to your needs. Get in touch today!",
    descLen: 152,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Takapuna",
    url: "/service-area/takapuna/",
    title: "Home Building and Renovation Takapuna | JRA Construction",
    titleLen: 56,
    description: "Elevate your Takapuna property with JRA Construction's premium home building and renovation services. Schedule a consultation today!",
    descLen: 132,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Tamaki",
    url: "/service-area/tamaki/",
    title: "Auckland Home Builders Service Area Coverage | Instant Online Estimate",
    titleLen: 70,
    description: "Find out if we service your Auckland location. Expert home builders covering residential areas throughout the Auckland region for all projects.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Service Areas",
    label: "Titirangi",
    url: "/service-area/titirangi/",
    title: "Home Renovation Builder Titirangi | JRA Construction",
    titleLen: 52,
    description: "For expert home renovations in Titirangi, count on JRA Construction. Connect with us today to start your home renovation project!",
    descLen: 129,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Service Areas",
    label: "Wiri",
    url: "/service-area/wiri/",
    title: "Auckland Home Builders Service Area Coverage | Instant Online Estimate",
    titleLen: 70,
    description: "Find out if we service your Auckland location. Expert home builders covering residential areas throughout the Auckland region for all projects.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Service Areas",
    label: "Service Areas Index",
    url: "/service-areas/",
    title: "Auckland Home Builders Service Area Coverage | Instant Online Estimate",
    titleLen: 70,
    description: "Find out if we service your Auckland location. Expert home builders covering residential areas throughout the Auckland region for all projects.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
  {
    group: "Estimate",
    label: "e-addition",
    url: "/e-addition/",
    title: "House Addition Cost Calculator Auckland | Instant Online Estimate",
    titleLen: 65,
    description: "Calculate your home addition costs instantly. Get detailed price breakdowns for ground floor, second storey extensions, and expert planning advice.",
    descLen: 147,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Estimate",
    label: "e-bathroom",
    url: "/e-bathroom/",
    title: "Bathroom Renovation Cost Calculator | Instant Online Estimate",
    titleLen: 61,
    description: "Calculate your bathroom renovation costs instantly. Get price breakdowns, expert advice & quality guarantees for your Auckland bathroom project.",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Estimate",
    label: "e-home",
    url: "/e-home/",
    title: "Custom Home Auckland | Instant Online Estimate",
    titleLen: 46,
    description: "Calculate your new home building instantly. Get comprehensive price estimates, expert planning advice, and detailed breakdowns for your project.",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Estimate",
    label: "e-kitchen",
    url: "/e-kitchen/",
    title: "Kitchen Renovation Cost Calculator | Instant Online Estimate",
    titleLen: 60,
    description: "Calculate your kitchen renovation costs instantly. Get detailed price estimates, design ideas, and expert planning advice for your Auckland project.",
    descLen: 148,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Estimate",
    label: "estimate",
    url: "/estimate/",
    title: "Construction & Renovation Estimates | Instant Online",
    titleLen: 52,
    description: "Get instant estimates 24/7 for your building or renovation project. Detailed cost breakdowns for new homes, additions, kitchens & bathrooms.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + VideoObject",
  },
  {
    group: "Blog",
    label: "An Ultimate Guide To Kitchen Renovations In Auckland",
    url: "/an-ultimate-guide-to-kitchen-renovations-in-auckland/",
    title: "Kitchen Renovation Ultimate Guide | JRA Construction",
    titleLen: 52,
    description: "Discover how to plan and execute your kitchen renovation in Auckland. Expert tips for design, costs, and creating your dream kitchen space.",
    descLen: 139,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Aucklands Expert Bathroom Renovation Ultimate Guide Tips Tri",
    url: "/aucklands-expert-bathroom-renovation-ultimate-guide-tips-tricks-and-more/",
    title: "Bathroom Renovation Guide | JRA Construction",
    titleLen: 44,
    description: "Discover expert tips for your bathroom renovation. Learn how to plan, budget, and execute your dream bathroom project in Auckland.",
    descLen: 130,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Person",
  },
  {
    group: "Blog",
    label: "Bathroom Renovations Guide",
    url: "/bathroom-renovations-guide/",
    title: "Bathroom Renovations Guide | JRA Construction",
    titleLen: 45,
    description: "Bathroom renovations guide for Auckland homeowners. JRA Construction explains cost, consent, timing and planning.",
    descLen: 113,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Builder Architect Collaboration Auckland",
    url: "/builder-architect-collaboration-auckland/",
    title: "Builder-Architect Collaboration in Auckland | JRA Construction",
    titleLen: 62,
    description: "JRA Construction protects your budget. Builder-architect collaboration in Auckland secures planning success.",
    descLen: 108,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Building Your Dream Home In New Zealand The Ultimate New Bui",
    url: "/building-your-dream-home-in-new-zealand-the-ultimate-new-build-guide/",
    title: "The Ultimate New Home Guide | JRA Construction",
    titleLen: 46,
    description: "Discover how to build your dream home in Auckland with our expert guide. Learn essential tips and tricks for a successful new build project.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Choosing A New Home Builder",
    url: "/choosing-a-new-home-builder/",
    title: "Choosing a New Home Builder | JRA Construction",
    titleLen: 46,
    description: "Expert tips for choosing a new home builder. Learn how to select the right builder for your project with JRA Construction. Book a free consultation today.",
    descLen: 154,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Cost To Build New House Auckland",
    url: "/cost-to-build-new-house-auckland/",
    title: "Real Cost to Build a New House in Auckland 2026 | JRA Construction",
    titleLen: 66,
    description: "Discover the real cost to build a new house in Auckland with JRA Construction's guide. Get transparent pricing and avoid budget surprises.",
    descLen: 138,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Custom Home Building Timeline",
    url: "/custom-home-building-timeline/",
    title: "A Typical Custom Home Building Timeline in Auckland - JRA Construction",
    titleLen: 70,
    description: "These aren’t small questions — getting an honest answer helps homeowners set realistic expectations, avoid wasted time and money, and reduce stress right from the start. This guide provides transparent answers based on the current construction methods used in Auckland homes.",
    descLen: 275,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Custom Home Construction Checklist",
    url: "/custom-home-construction-checklist/",
    title: "Custom Home Construction Checklist for Auckland | JRA Construction",
    titleLen: 66,
    description: "Plan your build with JRA Construction. Our custom home construction checklist reveals hidden costs and feasibility risks before you start.",
    descLen: 138,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Custom Home Exterior Design",
    url: "/custom-home-exterior-design/",
    title: "Custom Home Exterior Design Auckland | Slopes & Durability | JRA Construction",
    titleLen: 77,
    description: "JRA Construction explains costs and durability for custom home exterior design in Auckland. Learn how to manage slopes, prevent rot, and match styles.",
    descLen: 150,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Custom Home Floor Plans In Auckland",
    url: "/custom-home-floor-plans-in-auckland/",
    title: "Custom Home Floor Plans in Auckland | JRA Construction",
    titleLen: 54,
    description: "Custom home floor plans in Auckland by JRA Construction. Plan with clarity and build with confidence.",
    descLen: 101,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Custom Home Warranties Insurance",
    url: "/custom-home-warranties-insurance/",
    title: "Auckland Custom Home Warranties Insurance Gaps: Assessment Guide | JRA Construction",
    titleLen: 83,
    description: "Learn why Auckland homes are underinsured by 40% on custom home warranties insurance. JRA Construction helps homeowners avoid costly coverage gaps.",
    descLen: 147,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Financing Custom Home Construction",
    url: "/financing-custom-home-construction/",
    title: "Financing Custom Home Construction Guide | JRA Construction",
    titleLen: 59,
    description: "Learn the best financing custom home construction options in New Zealand. JRA Construction explains loans, costs, and qualification requirements. Book your free consultation today.",
    descLen: 180,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Home Extensions Guide",
    url: "/home-extensions-guide/",
    title: "Home Extensions Ultimate Guide | JRA Construction",
    titleLen: 49,
    description: "Home Extensions Ultimate Guide: Expert advice on planning, costs, and regulations for your Auckland house extension project. Start here.",
    descLen: 136,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Home Renovations A Complete Guide For Auckland Homeowners",
    url: "/home-renovations-a-complete-guide-for-auckland-homeowners/",
    title: "Expert Auckland Home Renovation Guide | JRA Construction",
    titleLen: 56,
    description: "Complete guide to home renovations in Auckland. Learn essential steps, costs, and expert tips for a successful renovation project.",
    descLen: 130,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "How Much Does A Home Addition Cost In Auckland",
    url: "/how-much-does-a-home-addition-cost-in-auckland/",
    title: "How Much Does a Home Addition Cost in Auckland? | JRA Construction",
    titleLen: 66,
    description: "The true home addition cost in Auckland goes well beyond the per-square-metre build rate, and most homeowners underestimate what they need to budget. JRA Construction breaks down every cost driver, realistic price ranges, and the site-specific surprises that move the number in Auckland.",
    descLen: 287,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "How Much Does A New Build Cost In Auckland",
    url: "/how-much-does-a-new-build-cost-in-auckland/",
    title: "Auckland New Build Cost | JRA Construction",
    titleLen: 42,
    description: "Master construction project management with our detailed guide. Learn essential strategies, planning tips, and best practices for Auckland builds.",
    descLen: 146,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "How Much Does Home Renovation Cost",
    url: "/how-much-does-home-renovation-cost/",
    title: "Home Renovation Costs in Auckland | JRA Construction",
    titleLen: 52,
    description: "In a blog post, JRA Construction comprehensively discussed home renovation costs in Auckland. Read more by visiting our website.",
    descLen: 128,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Managing Custom Home Construction",
    url: "/managing-custom-home-construction/",
    title: "Managing Custom Home Construction Guide | JRA Construction",
    titleLen: 58,
    description: "Learn proven strategies for managing custom home construction from Auckland's trusted builders at JRA Construction. Get practical tips and book your free consultation today.",
    descLen: 173,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "New Build Building Codes And Regulations Auckland",
    url: "/new-build-building-codes-and-regulations-auckland/",
    title: "New Build Building Codes and Regulations in Auckland | JRA Construction",
    titleLen: 71,
    description: "Need help with new build building codes and regulations in Auckland? JRA Construction ensures your project avoids costly consent delays.",
    descLen: 136,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "New Build Construction Costs",
    url: "/new-build-construction-costs/",
    title: "Real Costs of Building Your New Home",
    titleLen: 36,
    description: "Discover the costs of building your new home with JRA Construction. Get expert insights and accurate estimates for a cost-effective building experience.",
    descLen: 152,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "New Build Design Ideas",
    url: "/new-build-design-ideas/",
    title: "New Build Design Ideas | JRA Construction",
    titleLen: 41,
    description: "Discover 9 innovative new build design ideas for your dream home. Contact JRA Construction to bring your vision to life with expert craftsmanship and modern design solutions.",
    descLen: 174,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "New Build Materials",
    url: "/new-build-materials/",
    title: "New Build Materials | JRA Construction",
    titleLen: 38,
    description: "Get a detailed breakdown of custom home building costs in Auckland from JRA Construction. Learn exact pricing for 2025 builds and book your consultation today.",
    descLen: 159,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Planning A Home Extension In Auckland Heres The Step By Step",
    url: "/planning-a-home-extension-in-auckland-heres-the-step-by-step-process-you-should-know/",
    title: "Home Extension Process in Auckland | JRA Construction",
    titleLen: 53,
    description: "Explore the step-by-step home extension process in Auckland with JRA Construction. Get expert guidance for a successful home extension project.",
    descLen: 143,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Article",
  },
  {
    group: "Blog",
    label: "Planning Your New Build",
    url: "/planning-your-new-build/",
    title: "Planning Your New Build | JRA Construction",
    titleLen: 42,
    description: "Discover 7 smart strategies for planning your new build with JRA Construction. Contact us today for expert guidance on your dream home project in Auckland.",
    descLen: 155,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Smart Home Features Custom Build",
    url: "/smart-home-features-custom-build/",
    title: "Smart Home Features for New Builds Guide | JRA Construction",
    titleLen: 59,
    description: "Discover 9 innovative smart home features for your new build with JRA Construction. Book a free consultation to start planning your smart home today.",
    descLen: 149,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "Sustainable Custom Home Building",
    url: "/sustainable-custom-home-building/",
    title: "Sustainable Custom Home Building Guide | JRA Construction",
    titleLen: 57,
    description: "Learn sustainable custom home building in Auckland with JRA Construction. Get expert tips on costs, benefits, and process. Book your FREE consultation today.",
    descLen: 157,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Person",
  },
  {
    group: "Blog",
    label: "The Ultimate Construction Project Management Guide",
    url: "/the-ultimate-construction-project-management-guide/",
    title: "Construction Project Management Guide | JRA Construction",
    titleLen: 56,
    description: "Expert guide to managing construction projects. Learn essential strategies, planning tips, and best practices for successful builds in Auckland.",
    descLen: 144,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + FAQPage + Person",
  },
  {
    group: "Legal",
    label: "Privacy Policy",
    url: "/privacy-policy/",
    title: "Comprehensive Home Builder Privacy Policy | JRA Construction",
    titleLen: 60,
    description: "Learn how we protect your information and ensure a secure online experience. Read our builder privacy policy and data protection guidelines.",
    descLen: 140,
    keywords: [],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness + Article + Person",
  },
];

const prelaunchFixes = [
  {
    item: "1",
    area: "Contact page",
    issue: "Placeholder lorem copy, wrong phone (+64 9 884 0915), email shown as bare domain",
    fix: "Copy replaced with audited text; phone set to 021 276 9971; email set to joe@jraconstruction.co.nz",
    status: "fixed" as const,
  },
  {
    item: "2",
    area: "Homepage — Blog section",
    issue: "All 3 blog cards used lorem ipsum, Unsplash placeholder images, and href='#'",
    fix: "Cards now show the 3 real latest posts from the live site with downloaded images, linking to /blog",
    status: "fixed" as const,
  },
  {
    item: "3",
    area: "Homepage — Services section",
    issue: "All 6 'View Details' CTAs used href='#' (broken links)",
    fix: "Each card links to its matching service page",
    status: "fixed" as const,
  },
  {
    item: "4",
    area: "Navigation",
    issue: "Nav missing Why Choose Us, How It Works, and the 10-service dropdown from the live site",
    fix: "MainNav rebuilt with services dropdown and all audited links; estimate CTA points to /estimate",
    status: "fixed" as const,
  },
  {
    item: "5",
    area: "Footer",
    issue: "Placeholder phone (+64 000 000 000), wrong hours (9AM–5PM), dead anchor links (#about etc.)",
    fix: "Real contact details (021 276 9971, 7:30am–5:30pm Mon–Fri, joe@) and real page links",
    status: "fixed" as const,
  },
  {
    item: "6",
    area: "SEO metadata",
    issue: "About, contact, testimonials, services/projects indexes had no metadata; sub-pages diverged from live titles",
    fix: "All existing pages synced to the audited live meta titles/descriptions with canonicals",
    status: "fixed" as const,
  },
  {
    item: "7",
    area: "Root layout",
    issue: "No GTM, webchat, tracking scripts, or LocalBusiness schema",
    fix: "GTM-MCTBGRD, GHL webchat, external tracking, and audited JRA LocalBusiness schema added",
    status: "fixed" as const,
  },
  {
    item: "8",
    area: "Redirects",
    issue: "Live URLs /project/*, /contact-us, /service-area/*, and 4 alias service-area pages had no mapping",
    fix: "301 redirects added in next.config.ts (/project/* → /projects/*, /contact-us → /contact, /service-area/* → /service-areas/*, aliases → /service-areas)",
    status: "fixed" as const,
  },
  {
    item: "9",
    area: "Service-area meta titles",
    issue: "13 live pages shipped a copy-pasted meta title ('Home Renovation Builder Bombay') on non-Bombay suburbs; Northcote reused Albany's title",
    fix: "Per-suburb titles/descriptions corrected in src/data/serviceAreas.json (intentional improvement over live site)",
    status: "fixed" as const,
  },
  {
    item: "10",
    area: "Estimate funnel branding",
    issue: "Funnel pages carried Bear Construction / Phil Ashton / Wellington template copy",
    fix: "All (estimate) pages, survey sidebars, and landing FAQs rebranded to JRA / Joe Allen / Auckland; pricing grounded in JRA's published Auckland cost guides",
    status: "fixed" as const,
  },
];

const remainingGaps = [
  { priority: "High", page: "Estimate funnel — GHL", issue: "GHL_PIT_TOKEN / GHL_LOCATION_ID and custom-field IDs still belong to the template sub-account", fix: "Re-map ghlFieldMap.ts against the JRA GHL location and set secrets in wrangler.jsonc" },
  { priority: "High", page: "wrangler.jsonc", issue: "JRA_ESTIMATE KV namespace ID is a placeholder", fix: "Create the KV namespace with wrangler and paste the ID before deploying" },
  { priority: "High", page: "Facebook Pixel", issue: "Pixel 1421767261676261 active on live site but missing in this build", fix: "Add FB Pixel snippet to layout.tsx" },
  { priority: "High", page: "Blog posts (28)", issue: "Conversion deferred by decision — /blog index and /sitemap link to /<slug> paths that 404 until the posts phase ships", fix: "Convert posts from report-audit/06-blog.md in the next phase" },
  { priority: "Medium", page: "Estimate pricing", issue: "Kitchen/bathroom per-sqm rates are template defaults; custom-home/extension/renovation rates derived from JRA's published cost guides", fix: "Confirm all base rates and finish multipliers with JRA before launch" },
  { priority: "Medium", page: "/careers", issue: "Live meta title ('Auckland Construction Management | 24-Hour Callback Policy') does not match page intent (kept as-is from live site)", fix: "Consider a careers-specific title at launch" },
  { priority: "Medium", page: "/careers apply buttons", issue: "Live site opened an Elementor application-form popup; this build routes APPLY NOW / BE PART OF OUR TEAM to /contact", fix: "Wire a proper careers application form (GHL) if desired" },
  { priority: "Low", page: "LocalBusiness schema", issue: "sameAs array is empty", fix: "Add Facebook, Instagram, YouTube, LinkedIn profile URLs" },
  { priority: "Low", page: "Service-area pages", issue: "Live pages reuse two stock interior photos; this build renders text-focused layouts without them", fix: "Optionally add imagery per suburb" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function Badge({ children, variant }: { children: React.ReactNode; variant: "green" | "red" | "yellow" | "gray" | "blue" }) {
  const styles: Record<string, string> = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-zinc-100 text-zinc-600",
    blue: "bg-blue-100 text-blue-800",
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}

function Check() {
  return <span className="text-green-600 font-bold">✓</span>;
}

function Cross() {
  return <span className="text-red-400 font-bold">✕</span>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mt-14 mb-4">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold text-zinc-800 mt-8 mb-3">{children}</h3>;
}

const groupOrder = ["Core", "Services", "Projects", "Service Areas", "Estimate", "Blog", "Legal"];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ReportAuditPage() {
  const totalPages = pages.length;
  const withOG = pages.filter((p) => p.hasOG).length;
  const withCanonical = pages.filter((p) => p.hasCanonical).length;
  const longTitles = pages.filter((p) => p.titleLen > 60).length;
  const longDescs = pages.filter((p) => p.descLen > 160).length;
  const activeTracking = trackingStatus.filter((t) => t.status === "active").length;
  const missingTracking = trackingStatus.filter((t) => t.status === "missing").length;

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ── HEADER ── */}
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="gray">INTERNAL — NOINDEX</Badge>
          <Badge variant="blue">JRA Construction</Badge>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-1">
          SEO &amp; Site Audit Report
        </h1>
        <p className="text-zinc-500 text-[14px] mb-10">
          {SITE_URL} &nbsp;·&nbsp; Last updated {REPORT_DATE} &nbsp;·&nbsp; Crawled from live WordPress sitemaps &nbsp;·&nbsp; {totalPages} pages audited
        </p>

        {/* ── SUMMARY STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          {[
            { label: "Total Pages", value: totalPages, tone: "neutral" },
            { label: "With OG Tags", value: `${withOG}/${totalPages}`, tone: "good" },
            { label: "With Canonical", value: `${withCanonical}/${totalPages}`, tone: "good" },
            { label: "Long Titles (>60)", value: longTitles, tone: longTitles > 0 ? "warn" : "good" },
            { label: "Long Descs (>160)", value: longDescs, tone: longDescs > 0 ? "warn" : "good" },
            { label: "Active Trackers", value: `${activeTracking}/${trackingStatus.length}`, tone: missingTracking > 0 ? "warn" : "good" },
          ].map((s) => (
            <div
              key={s.label}
              className={`rounded-xl border p-4 text-center ${
                s.tone === "good" ? "border-green-200 bg-green-50" :
                s.tone === "warn" ? "border-yellow-200 bg-yellow-50" :
                "border-zinc-200 bg-white"
              }`}
            >
              <div className={`text-3xl font-extrabold ${
                s.tone === "good" ? "text-green-700" :
                s.tone === "warn" ? "text-yellow-700" :
                "text-zinc-800"
              }`}>{s.value}</div>
              <div className="text-[12px] text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── STATUS BANNER ── */}
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 mb-2">
          <p className="text-[14px] font-semibold text-green-800">
            ✓ All 122 live URLs crawled with zero failures — full source-of-truth content, image, and SEO capture in the repo&apos;s report-audit/ folder. &nbsp;·&nbsp; ✓ Conversion fixes applied — placeholder copy, dead links, and missing metadata resolved.
          </p>
        </div>

        {/* ══ CONVERSION FIXES ════════════════════════════════════════════════ */}
        <SectionHeading>Conversion Fixes Applied</SectionHeading>
        <p className="text-[13px] text-zinc-500 mb-4">
          Issues found in the starter repo and resolved during the template adoption. All items confirmed clean in production build.
        </p>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white mb-2">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600 w-8">#</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Area</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Issue</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Resolution</th>
                <th className="px-4 py-3 font-semibold text-zinc-600 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {prelaunchFixes.map((f, i) => (
                <tr key={f.item} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-3 font-mono text-zinc-400 text-[11px]">{f.item}</td>
                  <td className="px-4 py-3 font-medium text-zinc-800 whitespace-nowrap">{f.area}</td>
                  <td className="px-4 py-3 text-zinc-600">{f.issue}</td>
                  <td className="px-4 py-3 text-zinc-500">{f.fix}</td>
                  <td className="px-4 py-3 text-center">
                    <Badge variant="green">Fixed</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ TRACKING CODES ══════════════════════════════════════════════════ */}
        <SectionHeading>Tracking &amp; Analytics Codes</SectionHeading>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600">Tool</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">ID / Tag</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Script Source</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Status</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Notes</th>
              </tr>
            </thead>
            <tbody>
              {trackingStatus.map((t, i) => (
                <tr key={t.tool} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{t.tool}</td>
                  <td className="px-4 py-3 font-mono text-zinc-600">{t.id}</td>
                  <td className="px-4 py-3 text-zinc-500 max-w-[220px] break-all">{t.script}</td>
                  <td className="px-4 py-3">
                    {t.status === "active"
                      ? <Badge variant="green">Active</Badge>
                      : <Badge variant="red">Not Installed</Badge>}
                  </td>
                  <td className="px-4 py-3 text-zinc-500">{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ SEO AUDIT BY PAGE ═══════════════════════════════════════════════ */}
        <SectionHeading>SEO Audit by Page (from live-site crawl)</SectionHeading>
        <p className="text-[13px] text-zinc-500 mb-4">
          Title ideal ≤ 60 chars &nbsp;·&nbsp; Description ideal ≤ 160 chars &nbsp;·&nbsp; OG = page-level OpenGraph &nbsp;·&nbsp; Canonical = per-page canonical URL
        </p>
        {groupOrder.map((group) => {
          const groupPages = pages.filter((p) => p.group === group);
          if (groupPages.length === 0) return null;
          return (
            <div key={group} className="mb-8">
              <SubHeading>{group} Pages ({groupPages.length})</SubHeading>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">Page</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">URL</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">Title</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">Desc</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">OG</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">Schema</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">Canonical</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupPages.map((p, i) => (
                      <tr key={p.url} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                        <td className="px-3 py-2.5 font-medium text-zinc-800 whitespace-nowrap">{p.label}</td>
                        <td className="px-3 py-2.5 font-mono text-zinc-500 whitespace-nowrap max-w-[280px] truncate">{p.url}</td>
                        <td className={`px-3 py-2.5 text-center whitespace-nowrap font-mono ${p.titleLen > 60 ? "text-yellow-700 font-bold" : "text-zinc-600"}`}>
                          {p.titleLen}{p.titleLen > 60 ? " ⚠" : " ✓"}
                        </td>
                        <td className={`px-3 py-2.5 text-center whitespace-nowrap font-mono ${p.descLen > 160 ? "text-yellow-700 font-bold" : "text-zinc-600"}`}>
                          {p.descLen}{p.descLen > 160 ? " ⚠" : " ✓"}
                        </td>
                        <td className="px-3 py-2.5 text-center">{p.hasOG ? <Check /> : <Cross />}</td>
                        <td className="px-3 py-2.5">
                          {p.schemaType !== "—"
                            ? <Badge variant="blue">{p.schemaType}</Badge>
                            : <span className="text-zinc-400">—</span>}
                        </td>
                        <td className="px-3 py-2.5 text-center">{p.hasCanonical ? <Check /> : <Cross />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}

        {/* ══ STRUCTURED DATA ═════════════════════════════════════════════════ */}
        <SectionHeading>Schema.org Structured Data — Global (layout.tsx)</SectionHeading>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 max-w-xl">
          <dl className="space-y-2 text-[13px]">
            {[
              ["Type", "HomeAndConstructionBusiness + Organization"],
              ["Name", "JRA Construction LTD"],
              ["Phone", "+64 21 276 9971"],
              ["Email", "joe@jraconstruction.co.nz"],
              ["Address", "45 Brighton Road Parnell, Auckland 1052"],
              ["Areas Served", "Auckland"],
              ["Hours", "Mon–Fri 07:30–17:30"],
              ["Coordinates", "-36.86018, 174.786769"],
              ["sameAs", "Empty — add social URLs"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <dt className="font-semibold text-zinc-500 w-[120px] shrink-0">{k}:</dt>
                <dd className={`text-zinc-700 ${k === "sameAs" ? "text-yellow-700" : ""}`}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ══ REMAINING GAPS ══════════════════════════════════════════════════ */}
        <SectionHeading>Remaining Gaps &amp; Launch Blockers</SectionHeading>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600">Priority</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Page / Scope</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Issue</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Recommended Fix</th>
              </tr>
            </thead>
            <tbody>
              {remainingGaps.map((g, i) => (
                <tr key={i} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-3">
                    <Badge variant={g.priority === "High" ? "red" : g.priority === "Medium" ? "yellow" : "gray"}>{g.priority}</Badge>
                  </td>
                  <td className="px-4 py-3 font-mono text-zinc-600 text-[12px]">{g.page}</td>
                  <td className="px-4 py-3 text-zinc-700">{g.issue}</td>
                  <td className="px-4 py-3 text-zinc-500">{g.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ TECHNICAL INFRASTRUCTURE ════════════════════════════════════════ */}
        <SectionHeading>Technical Infrastructure</SectionHeading>
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden max-w-xl">
          <table className="w-full text-[13px]">
            <tbody>
              {[
                ["Framework", "Next.js 16 (Turbopack) + Tailwind 4"],
                ["Hosting", "Cloudflare Workers via OpenNext (wrangler.jsonc)"],
                ["Route groups", "(site) marketing pages · (estimate) survey funnel"],
                ["Sitemap", "/sitemap.xml — generated from src/app/(site)/sitemap.ts"],
                ["Fonts", "Plus Jakarta Sans + Lora (site) · Inter/Montserrat/Poppins (estimate)"],
                ["Source of truth", "report-audit/ markdown docs + audit-data.json in repo root"],
              ].map(([k, v], i) => (
                <tr key={k} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-2.5 font-medium text-zinc-600 whitespace-nowrap">{k}</td>
                  <td className="px-4 py-2.5 text-zinc-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-12 pt-6 border-t border-zinc-200">
          <p className="text-[12px] text-zinc-400 text-center">
            Internal report — noindexed &nbsp;·&nbsp; {SITE_URL}/report-audit &nbsp;·&nbsp; JRA Construction &nbsp;·&nbsp; {REPORT_DATE}
          </p>
        </div>
      </div>
    </div>
  );
}
