import type { SiteContent } from "@/lib/content";

type SiteFooterProps = {
  content: SiteContent;
};

export const SiteFooter = ({ content }: SiteFooterProps) => {
  return (
    <footer className="border-t border-pine/10 bg-ivory">
      <div className="mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-semibold tracking-[0.12em] text-pine">
              {content.brand.brandName}
            </h2>
            <p className="mt-3 text-sm text-ink/75">{content.footer.city}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-pine">
              {content.footer.salesLabel}
            </h3>
            <a href={`mailto:${content.contactPage.details.salesEmail}`} className="mt-2 block text-sm text-ink/80 hover:text-pine">
              {content.contactPage.details.salesEmail}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-pine">
              {content.footer.accountingLabel}
            </h3>
            <a
              href={`mailto:${content.contactPage.details.accountingEmail}`}
              className="mt-2 block text-sm text-ink/80 hover:text-pine"
            >
              {content.contactPage.details.accountingEmail}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-pine">
              {content.footer.focusLabel}
            </h3>
            <p className="mt-2 text-sm text-ink/80">{content.footer.descriptor}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-pine/10 pt-6 text-sm text-ink/70">
          © {new Date().getFullYear()} {content.brand.companyName}. {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

