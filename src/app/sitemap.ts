import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dbfroses.com";
const routes = ["", "/about", "/products", "/export-logistics", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}

