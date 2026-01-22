import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function SectionTitle({
  children,
  className,
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <Component
      className={cn(
        "font-serif text-[36px] sm:text-[44px] lg:text-[54px] font-medium text-charcoal",
        className
      )}
    >
      {children}
    </Component>
  );
}
