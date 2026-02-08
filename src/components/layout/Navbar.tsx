import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { cn } from "../../utils/cn";
import ThemeToggle from "../ui/ThemeToggle";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const activeId = useScrollSpy(sectionIds);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-glass"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] transition-colors hover:text-brand-500 cursor-pointer"
        >
          MH
        </button>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} role="none">
              <button
                role="menuitem"
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  activeId === item.id
                    ? "text-brand-500 bg-brand-50 dark:bg-brand-500/10"
                    : "text-[var(--color-text-secondary)] hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + mobile menu button */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-colors hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 md:hidden cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)] md:hidden">
          <ul className="flex flex-col px-4 py-2" role="menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} role="none">
                <button
                  role="menuitem"
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors cursor-pointer",
                    activeId === item.id
                      ? "text-brand-500 bg-brand-50 dark:bg-brand-500/10"
                      : "text-[var(--color-text-secondary)] hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
