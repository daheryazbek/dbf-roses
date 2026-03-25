import Image from "next/image";
import { cn } from "@/lib/utils";

type FloralPlaceholderProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
};

export const FloralPlaceholder = ({
  src,
  alt,
  label,
  className,
}: FloralPlaceholderProps) => {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-pine/10 bg-ivory", className)}>
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
      </div>
      {label ? (
        <div className="border-t border-pine/10 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-pine/80">
          {label}
        </div>
      ) : null}
    </div>
  );
};

