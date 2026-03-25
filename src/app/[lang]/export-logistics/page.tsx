import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/cta-banner";
import { FloralPlaceholder } from "@/components/common/floral-placeholder";
import { InfoCard } from "@/components/common/info-card";
import { PageHero } from "@/components/common/page-hero";
import { SectionShell } from "@/components/common/section-shell";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { withLocale } from "@/lib/routes";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return buildPageMetadata(lang, "exportLogistics", "/export-logistics");
}

export default async function ExportLogisticsPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="space-y-8">
      <SectionShell className="pt-4">
        <PageHero title={content.exportPage.heroTitle} description={content.exportPage.heroText} />
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2">
          {content.exportPage.points.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.text} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl text-pine">{content.exportPage.audienceTitle}</h2>
            <p className="mt-4 leading-relaxed text-ink/80">{content.exportPage.audienceText}</p>
            <Link
              href={withLocale(lang, "/contact")}
              className="mt-6 inline-flex rounded-full border border-pine/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory"
            >
              {content.common.contactUs}
            </Link>
          </article>

          <FloralPlaceholder
            src="/placeholders/logistics-roses.svg"
            alt="Export logistics process placeholder"
            label={lang === "en" ? "Order Follow-up" : "Seguimiento de Pedidos"}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <CtaBanner
          title={
            lang === "en"
              ? "Need a reliable Ecuador origin partner?"
              : "¿Necesita un socio confiable en origen Ecuador?"
          }
          description={
            lang === "en"
              ? "Share your destination, buying terms, and weekly frequency. We can structure the right coordination model."
              : "Comparta su destino, términos de compra y frecuencia semanal. Podemos estructurar el modelo de coordinación adecuado."
          }
          buttonLabel={content.common.requestAvailability}
          href={withLocale(lang, "/contact")}
        />
      </SectionShell>
    </div>
  );
}

