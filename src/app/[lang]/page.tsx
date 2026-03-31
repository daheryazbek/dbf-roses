import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/cta-banner";
import { InfoCard, ProductGrid } from "@/components/common/info-card";
import { SectionShell } from "@/components/common/section-shell";
import { PageHero } from "@/components/common/page-hero";
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
  return buildPageMetadata(lang, "home", "");
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="space-y-12">
      {/* SECCIÓN 1: HERO */}
      <SectionShell className="pt-4">
        <PageHero 
          title="Flores Ecuatorianas Premium & Variedades de Verano"
          description="Abastecimiento integral de rosas, flores de verano y especialidades con exportación directa desde Ecuador."
          badge={content.brand.companyName}
        />
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start px-4">
          <Link
            href={withLocale(lang, "/contact")}
            className="inline-flex rounded-full bg-pine px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-moss shadow-lg"
          >
            {content.home.hero.primaryCta}
          </Link>
          <Link
            href={withLocale(lang, "/products")}
            className="inline-flex rounded-full border border-pine/20 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory shadow-md"
          >
            {content.home.hero.secondaryCta}
          </Link>
        </div>
      </SectionShell>

      {/* SECCIÓN 2: CATÁLOGO (Aquí estaba el error) */}
      <SectionShell>
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-pine sm:text-4xl">Nuestro Catálogo de Exportación</h2>
          <p className="text-ink/60 mt-2">Calidad premium garantizada en cada tallo.</p>
        </div>
        <ProductGrid /> 
      </SectionShell>

      {/* SECCIÓN 3: CONFIANZA */}
      <SectionShell>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl text-pine sm:text-4xl">{content.home.trust.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.home.trust.items.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionShell>

      {/* SECCIÓN 4: SOBRE NOSOTROS Y LOGÍSTICA */}
      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl text-pine">{content.home.aboutPreview.title}</h2>
            <p className="mt-4 leading-relaxed text-ink/80">{content.home.aboutPreview.text}</p>
            <Link
              href={withLocale(lang, "/about")}
              className="mt-6 inline-flex rounded-full border border-pine/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory"
            >
              {content.common.learnMore}
            </Link>
          </article>

          <article className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl text-pine">{content.home.logisticsPreview.title}</h2>
            <p className="mt-4 leading-relaxed text-ink/80">{content.home.logisticsPreview.text}</p>
            <Link
              href={withLocale(lang, "/export-logistics")}
              className="mt-6 inline-flex rounded-full border border-pine/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory"
            >
              {content.navigation.exportLogistics}
            </Link>
          </article>
        </div>
      </SectionShell>

      {/* SECCIÓN 5: BANNER DE CONTACTO */}
      <SectionShell className="pt-0 pb-12">
        <CtaBanner
          title={content.home.contactCta.title}
          description={content.home.contactCta.text}
          buttonLabel={content.home.contactCta.button}
          href={withLocale(lang, "/contact")}
        />
      </SectionShell>
    </div>
  );
}