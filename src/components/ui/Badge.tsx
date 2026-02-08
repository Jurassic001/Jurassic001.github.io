import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        "bg-[var(--color-border)] text-[var(--color-text-secondary)] border border-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
