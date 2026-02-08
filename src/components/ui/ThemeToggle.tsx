import { Moon, Sun } from "lucide-react";
import { cn } from "../../utils/cn";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  className?: string;
}

export default function ThemeToggle({
  theme,
  toggleTheme,
  className,
}: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "rounded-lg p-2 transition-colors cursor-pointer",
        "text-[var(--color-text-secondary)] hover:text-brand-500",
        "hover:bg-brand-50 dark:hover:bg-brand-500/10",
        className
      )}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
