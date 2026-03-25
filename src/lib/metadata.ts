import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dbfroses.com";

type PageKey = "home" | "about" | "products" | "exportLogistics" | "contact";

export const buildPageMetadata = (
  locale: Locale,
  page: PageKey,
  path: string,
): Metadata => {
  const content = getContent(locale);
  const seo = content.seo.pages[page];

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        es: `/es${path}`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/${locale}${path}`,
      siteName: "DBF ROSES",
      locale: locale === "en" ? "en_US" : "es_EC",
      type: "website",
    },
  };
};


