import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/contact-form";
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
  return buildPageMetadata(lang, "contact", "/contact");
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const details = content.contactPage.details;

  return (
    <div className="space-y-8">
      <SectionShell className="pt-4">
        <PageHero title={content.contactPage.heroTitle} description={content.contactPage.heroText} />
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <aside className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl text-pine">{content.contactPage.detailsTitle}</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-pine/70">{details.companyNameLabel}</dt>
                <dd className="mt-1 text-sm text-ink/85">{details.companyName}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-pine/70">{details.salesEmailLabel}</dt>
                <dd className="mt-1 text-sm text-ink/85">{details.salesEmail}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-pine/70">{details.rucLabel}</dt>
                <dd className="mt-1 text-sm text-ink/85">{details.ruc}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-pine/70">{details.addressLabel}</dt>
                <dd className="mt-1 text-sm text-ink/85">{details.address}</dd>
              </div>
            </dl>
          </aside>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <ContactForm form={content.contactPage.form} />
        </div>
      </SectionShell>
    </div>
  );
}