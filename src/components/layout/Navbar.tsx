import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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

const SCROLL_THRESHOLD = 50;

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll(); // check initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when transitioning to dock mode
  useEffect(() => {
    if (scrolled) setMobileOpen(false);
  }, [scrolled]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed z-50 bg-[var(--color-bg-card)] transition-[border-color] duration-300",
        scrolled
          ? "top-4 left-4 right-4 rounded-2xl border border-[var(--color-border)] shadow-lg md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-auto bg-glass"
          : "top-0 right-0 left-0 border-b border-[var(--color-border)]"
      )}
      layout
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      role="banner"
    >
      <nav
        className={cn(
          "flex items-center",
          scrolled
            ? "gap-1 px-2 py-2"
            : "mx-auto max-w-6xl justify-between px-4 py-3 sm:px-6"
        )}
        aria-label="Main navigation"
      >
        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap",
                  activeId === item.id
                    ? "text-brand-500 bg-brand-50 dark:bg-brand-500/10"
                    : "text-[var(--color-text-secondary)] hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
                )}
                aria-current={activeId === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Spacer to push right-side controls when not scrolled */}
        {!scrolled && <div className="flex-1 md:hidden" />}

        {/* Right side: theme toggle + mobile menu button */}
        <div className="flex items-center gap-1">
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
        <div
          className={cn(
            "border-t border-[var(--color-border)] bg-[var(--color-bg-card)] md:hidden",
            scrolled && "rounded-b-2xl"
          )}
        >
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
    </motion.header>
  );
}
