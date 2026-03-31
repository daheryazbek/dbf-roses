import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: string;
  className?: string;
};

export const PageHero = ({ title, description, badge, className }: PageHeroProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-3xl border border-pine/10 bg-gradient-to-br from-ivory to-white p-8 shadow-soft sm:p-12 flex flex-col md:flex-row items-center gap-8",
      className
    )}>
      <div className="flex-1 z-10">
        {badge && (
          <p className="mb-4 inline-flex rounded-full border border-pine/20 bg-white px-4 py-1 text-sm font-medium text-pine">
            {badge}
          </p>
        )}
        <h1 className="text-4xl leading-tight text-ink sm:text-5xl font-bold italic">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{description}</p>
      </div>
      <div className="flex-1 w-full h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-lg">
        <img 
  src="/images/hero-multiforal-variety.jpg" 
  alt="DBF Roses Variety" 
  className="w-full h-full object-cover" 
/>
      </div>
    </div>
  );
};