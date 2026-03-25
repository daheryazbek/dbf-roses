"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import type { SiteContent } from "@/lib/content";
import { getAlternateLocale, type Locale } from "@/lib/i18n";
import { navPaths, withLocale } from "@/lib/routes";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  content: SiteContent;
};

export const SiteHeader = ({ locale, content }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentPath = useMemo(() => {
    const stripped = (pathname ?? `/${locale}`).replace(/^\/(en|es)(?=\/|$)/, "");
    return stripped === "" ? "/" : stripped;
  }, [locale, pathname]);

  const nextLocale = getAlternateLocale(locale);
  const languageTarget = `/${nextLocale}${currentPath === "/" ? "" : currentPath}`;

  const navItems = [
    { label: content.navigation.home, path: navPaths.home },
    { label: content.navigation.about, path: navPaths.about },
    { label: content.navigation.products, path: navPaths.products },
    { label: content.navigation.exportLogistics, path: navPaths.exportLogistics },
    { label: content.navigation.contact, path: navPaths.contact },
  ];

  const isActive = (path: string) => {
    const normalized = path === "" ? "/" : path;
    if (normalized === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(normalized);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-pine/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={withLocale(locale, "")} className="text-xl font-semibold tracking-[0.12em] text-pine">
          {/* Replace text mark with official logo in /public/logo.svg when available. */}
          {content.brand.logoText}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path || "home"}
              href={withLocale(locale, item.path)}
              className={cn(
                "text-sm font-semibold uppercase tracking-[0.08em] text-ink/80 transition hover:text-pine",
                isActive(item.path) ? "text-pine" : "",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={languageTarget}
            className="rounded-full border border-pine/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory"
          >
            {content.navigation.languageToggle}
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-pine/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {content.navigation.menu}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-pine/10 bg-white px-4 py-4 lg:hidden sm:px-6">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.path || "home"}`}
                href={withLocale(locale, item.path)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink/80",
                  isActive(item.path) ? "bg-ivory text-pine" : "",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={languageTarget}
              className="rounded-xl border border-pine/20 px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine"
              onClick={() => setOpen(false)}
            >
              {content.navigation.languageToggle}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

