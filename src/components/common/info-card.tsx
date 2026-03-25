import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  className?: string;
};

export const InfoCard = ({ title, description, className }: InfoCardProps) => {
  return (
    <article
      className={cn(
        "h-full rounded-2xl border border-pine/10 bg-white p-6 shadow-soft",
        className,
      )}
    >
      <h3 className="text-2xl text-pine">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink/80">{description}</p>
    </article>
  );
};

