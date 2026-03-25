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
  return buildPageMetadata(lang, "products", "/products");
}

export default async function ProductsPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="space-y-8">
      <SectionShell className="pt-4">
        <PageHero title={content.productsPage.heroTitle} description={content.productsPage.heroText} />
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <InfoCard
              title={content.productsPage.categories[0].title}
              description={content.productsPage.categories[0].text}
            />
            <FloralPlaceholder
              src="/placeholders/standard-roses.svg"
              alt="Standard roses placeholder"
              label={content.productsPage.categories[0].title}
            />
          </div>

          <div className="space-y-6">
            <InfoCard
              title={content.productsPage.categories[1].title}
              description={content.productsPage.categories[1].text}
            />
            <FloralPlaceholder
              src="/placeholders/premium-roses.svg"
              alt="Premium roses placeholder"
              label={content.productsPage.categories[1].title}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="rounded-3xl border border-pine/10 bg-white p-8 shadow-soft sm:p-10">
          <h2 className="text-3xl text-pine">{content.productsPage.lengthsTitle}</h2>
          <p className="mt-4 text-xl font-semibold tracking-[0.08em] text-ink">{content.productsPage.lengths}</p>
          <p className="mt-6 leading-relaxed text-ink/80">{content.productsPage.weeklyNote}</p>
          <p className="mt-4 leading-relaxed text-ink/80">{content.productsPage.programsNote}</p>
          <p className="mt-4 text-sm text-pine/90">
            {lang === "en"
              ? "Spray roses can be coordinated as an optional line depending on weekly sourcing availability."
              : "Las spray roses pueden coordinarse como línea opcional según la disponibilidad semanal de abastecimiento."}
          </p>
        </div>
      </SectionShell>
    </div>
  );
}

