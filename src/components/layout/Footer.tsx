import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border)] py-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Max Haberer. Built with React &amp;
          TypeScript.
        </p>
        <SocialLinks size={18} />
      </div>
    </footer>
  );
}
