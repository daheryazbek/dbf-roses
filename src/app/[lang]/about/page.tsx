import { notFound } from "next/navigation";
import { FloralPlaceholder } from "@/components/common/floral-placeholder";
import { InfoCard } from "@/components/common/info-card";
import { PageHero } from "@/components/common/page-hero";
import { SectionShell } from "@/components/common/section-shell";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return buildPageMetadata(lang, "about", "/about");
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="space-y-8">
      <SectionShell className="pt-4">
        <PageHero title={content.aboutPage.heroTitle} description={content.aboutPage.heroText} />
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          {content.aboutPage.sections.map((section) => (
            <InfoCard key={section.title} title={section.title} description={section.text} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl text-pine">{content.home.trust.title}</h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              {lang === "en"
                ? "We position DBF ROSES as a commercial sourcing and export partner for professional flower buyers. Our model is focused on serious planning, execution, and long-term cooperation."
                : "Posicionamos a DBF ROSES como un socio comercial de abastecimiento y exportación para compradores profesionales de flores. Nuestro modelo está enfocado en planificación seria, ejecución y cooperación de largo plazo."}
            </p>
          </div>

          <FloralPlaceholder
            src="/placeholders/about-roses.svg"
            alt="Commercial rose sourcing placeholder"
            label={lang === "en" ? "Commercial Sourcing" : "Abastecimiento Comercial"}
          />
        </div>
      </SectionShell>
    </div>
  );
}

