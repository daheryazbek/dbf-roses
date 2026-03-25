import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: string;
  className?: string;
};

export const PageHero = ({
  title,
  description,
  badge,
  className,
}: PageHeroProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-pine/10 bg-gradient-to-br from-ivory to-white p-8 shadow-soft sm:p-12",
        className,
      )}
    >
      {badge ? (
        <p className="mb-4 inline-flex rounded-full border border-pine/20 bg-white px-4 py-1 text-sm font-medium text-pine">
          {badge}
        </p>
      ) : null}
      <h1 className="text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/80">{description}</p>
    </div>
  );
};

