import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export const CtaBanner = ({
  title,
  description,
  buttonLabel,
  href,
}: CtaBannerProps) => {
  return (
    <div className="rounded-3xl border border-pine/10 bg-pine p-8 text-white shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
      <div>
        <h2 className="text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-white/80">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-rose/90 sm:mt-0"
      >
        {buttonLabel}
      </Link>
    </div>
  );
};

