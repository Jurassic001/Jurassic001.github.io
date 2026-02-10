import { Github, Linkedin } from "lucide-react";
import resumeData from "../../data/resume";
import { cn } from "../../utils/cn";

interface SocialLinksProps {
  size?: number;
  className?: string;
  showLabels?: boolean;
}

export default function SocialLinks({
  size = 20,
  className,
  showLabels = false,
}: SocialLinksProps) {
  const github = resumeData.basics.profiles.find(
    (p) => p.network === "GitHub"
  );
  const linkedin = resumeData.basics.profiles.find(
    (p) => p.network === "LinkedIn"
  );

  const links = [
    {
      icon: <Github size={size} />,
      label: "GitHub",
      href: github?.url ?? "#",
    },
    {
      icon: <Linkedin size={size} />,
      label: "LinkedIn",
      href: linkedin?.url ?? "#",
    },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label !== "Email" ? "_blank" : undefined}
          rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className="inline-flex items-center gap-2 rounded-lg p-2 text-[var(--color-text-secondary)] transition-colors hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10"
        >
          {link.icon}
          {showLabels && <span className="text-sm font-medium">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
