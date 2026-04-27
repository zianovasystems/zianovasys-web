import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zianovasys.com";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/technology", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/what-we-do", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
