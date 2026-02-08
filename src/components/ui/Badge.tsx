import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export default function Badge({
  children,
  highlighted = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        highlighted
          ? "bg-brand-500/15 text-brand-600 dark:text-brand-300 border border-brand-500/25"
          : "bg-[var(--color-border)] text-[var(--color-text-secondary)] border border-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
