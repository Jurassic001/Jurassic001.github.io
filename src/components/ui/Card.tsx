import { cn } from "../../utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm transition-all duration-300",
        hover && "hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-border-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}
