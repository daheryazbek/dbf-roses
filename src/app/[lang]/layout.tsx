import { notFound } from "next/navigation";
import { LangSync } from "@/components/layout/lang-sync";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getContent } from "@/lib/content";
import { isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="min-h-screen bg-white text-ink">
      <LangSync locale={lang} />
      <SiteHeader locale={lang} content={content} />
      <main
        id="main-content"
        className="mx-auto max-w-8xl px-4 pb-16 pt-8 sm:px-6 lg:px-8"
      >
        {children}
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
