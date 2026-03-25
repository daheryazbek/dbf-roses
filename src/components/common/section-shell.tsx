import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export const SectionShell = ({
  as,
  id,
  className,
  containerClassName,
  children,
}: SectionShellProps) => {
  const Component = as ?? "section";

  return (
    <Component id={id} className={cn("py-12 sm:py-16", className)}>
      <div className={cn("mx-auto max-w-7xl", containerClassName)}>{children}</div>
    </Component>
  );
};

