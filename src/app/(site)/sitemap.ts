import type { MetadataRoute } from "next";
import blogPosts from "@/data/blogPosts.json";

export const dynamic = "force-static";

const BASE_URL = "https://jraconstruction.co.nz";

const serviceSlugs = [
  "custom-homes",
  "home-renovations",
  "home-extensions",
  "kitchen-renovations",
  "bathroom-renovations",
  "quantity-surveying",
  "construction-management",
  "home-maintenance",
  "granny-flats",
  "minor-dwellings",
];

const projectSlugs = [
  "bellevue",
  "cleve-road-green-bay",
  "fir-street-waterview",
  "gunson-street-freemans-bay",
  "hurstmere-road",
  "khukhu-milford",
  "laingholm-baptist-church",
  "lucinda-place-glen-eden",
  "matakana",
  "mcleod-road-te-atatu",
  "mount-eden-renovation",
  "muriwai-renovation",
  "north-piha-road",
  "queensway",
  "saint-leonards-road-mount-eden",
  "sandringham-project",
  "seacombe-road-point-chevalier",
  "taipari-road-te-atatu",
  "te-wiata-place-avondale",
  "tiri-road-whangaparaoa",
  "westminster-road-balmoral",
];

const serviceAreaSlugs = [
  "epsom",
  "freemansbay-nz",
  "grey-lynn-nz",
  "herne-bay-nz",
  "home-renovation-builder-in-albany",
  "home-renovation-builder-in-avondale",
  "home-renovation-builder-in-blockhouse-bay",
  "home-renovation-builder-in-browns-bay",
  "home-renovation-builder-in-dairy-flat",
  "home-renovation-builder-in-devonport",
  "home-renovation-builder-in-glen-eden",
  "home-renovation-builder-in-glenfield",
  "home-renovation-builder-in-greenhithe",
  "home-renovation-builder-in-helensville",
  "home-renovation-builder-in-henderson",
  "home-renovation-builder-in-kumeu",
  "home-renovation-builder-in-mairangi-bay",
  "home-renovation-builder-in-milford",
  "home-renovation-builder-in-northcote",
  "home-renovation-builder-in-orewa",
  "home-renovation-builder-in-paremoremo",
  "home-renovation-builder-in-red-beach",
  "home-renovation-builder-in-snells-beach",
  "home-renovation-builder-in-te-atatu",
  "home-renovation-builder-in-warkworth",
  "home-renovation-builder-in-waterview",
  "home-renovation-builder-in-westmere",
  "kingsland-nz",
  "mission-bay",
  "mount-albert-nz",
  "mount-eden",
  "point-chevalier-nz",
  "ponsonby-nz",
  "remuera",
  "rothesay-bay",
  "sandringham-nz",
  "st-heliers-nz",
  "takapuna",
  "titirangi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/why-choose-us`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guarantee`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...projectSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...serviceAreaSlugs.map((slug) => ({
      url: `${BASE_URL}/service-areas/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    { url: `${BASE_URL}/estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
