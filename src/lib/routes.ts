import type { Locale } from "@/lib/i18n";

export const navPaths = {
  home: "",
  about: "/about",
  products: "/products",
  exportLogistics: "/export-logistics",
  contact: "/contact",
} as const;

export const withLocale = (locale: Locale, path: string) =>
  `/${locale}${path}`;

