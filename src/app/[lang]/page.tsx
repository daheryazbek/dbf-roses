import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/cta-banner";
import { FloralPlaceholder } from "@/components/common/floral-placeholder";
import { InfoCard } from "@/components/common/info-card";
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
  return buildPageMetadata(lang, "home", "");
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="space-y-8">
      <SectionShell className="pt-4">
        <div className="grid gap-10 rounded-3xl border border-pine/10 bg-gradient-to-br from-ivory to-white p-8 shadow-soft lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div>
            <p className="inline-flex rounded-full border border-pine/20 bg-white px-4 py-1 text-sm font-medium text-pine">
              {content.brand.companyName}
            </p>
            <h1 className="mt-5 text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {content.home.hero.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
              {content.home.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale(lang, "/contact")}
                className="inline-flex rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-moss"
              >
                {content.home.hero.primaryCta}
              </Link>
              <Link
                href={withLocale(lang, "/products")}
                className="inline-flex rounded-full border border-pine/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory"
              >
                {content.home.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <FloralPlaceholder
            src="/placeholders/hero-roses.svg"
            alt="Ecuadorian roses placeholder"
            label="Ecuadorian Rose Programs"
            className="h-full"
          />
        </div>
      </SectionShell>

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
            <h2 className="text-3xl text-pine">{content.home.productsPreview.title}</h2>
            <p className="mt-4 leading-relaxed text-ink/80">{content.home.productsPreview.text}</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold uppercase tracking-[0.08em] text-pine/90">
              {content.home.productsPreview.items.map((item) => (
                <li key={item} className="rounded-xl border border-pine/10 bg-ivory/60 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft lg:col-span-2 sm:p-8">
            <h2 className="text-3xl text-pine">{content.home.logisticsPreview.title}</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-ink/80">
              {content.home.logisticsPreview.text}
            </p>
            <Link
              href={withLocale(lang, "/export-logistics")}
              className="mt-6 inline-flex rounded-full border border-pine/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-pine transition hover:bg-ivory"
            >
              {content.navigation.exportLogistics}
            </Link>
          </article>

          <FloralPlaceholder
            src="/placeholders/logistics-roses.svg"
            alt="Logistics coordination placeholder"
            label="FOB | CIF | Delivered"
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
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

