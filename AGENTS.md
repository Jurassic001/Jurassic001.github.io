# Copilot Instructions — Max Haberer Portfolio

## Architecture

Single-page React 19 portfolio (Vite 6 + TypeScript, strict mode). No router — all 7 sections render in `src/App.tsx` with anchor-based scroll navigation. Styling is Tailwind CSS **v4** using `@theme` tokens in `src/index.css` (not a `tailwind.config` file). Dark/light mode via a `dark` class on `<html>`, toggled by `src/hooks/useTheme.ts` and persisted to localStorage.

## Content Model (critical)

**All portfolio content is in one file: `src/data/resume.ts`.**  
This is the single source of truth — every section component imports `resumeData` from it. Types are in `src/types/resume.ts` (`ResumeData`, `ExperienceEntry`, `ProjectEntry`, etc.). When updating content, edit only `resume.ts`; never hardcode text in components. The canonical upstream source for this data is the LaTeX resume in the `autoCV` submodule (`autoCV/cv.tex`).

## Component Conventions

- **Function components only**, `export default function ComponentName()`. No class components, no named exports for components.
- Three tiers under `src/components/`:
  - `layout/` — structural wrappers (`Navbar`, `Footer`, `Section`). `Section` adds Framer Motion fade-in-up on scroll via `useInView`.
  - `ui/` — reusable primitives (`Button`, `Card`, `Badge`, `ThemeToggle`, `SocialLinks`). Accept `className` prop for overrides.
  - `sections/` — page sections (`Hero`, `About`, `Experience`, etc.). Import data from `src/data/resume.ts`, render through layout/ui components.
- Use the `cn()` helper (`src/utils/cn.ts` = `clsx` + `tailwind-merge`) for all conditional/merged class strings.

## Styling Rules

- **Tailwind CSS v4** — uses `@theme` block in `src/index.css` for design tokens, not a JS config file.
- Theme colors: `brand-*` (indigo), `accent-*` (cyan). Reference semantic CSS vars for surfaces/text: `var(--color-bg)`, `var(--color-text-primary)`, `var(--color-border)`, etc.
- Dark mode: token vars swap in the `.dark {}` block in `index.css`. Components use `dark:` variant for Tailwind utilities.
- Custom utilities: `.text-gradient` (brand→accent gradient text), `.bg-glass` (translucent card background with backdrop blur).
- Animations: Framer Motion only (not CSS `@keyframes`). Use `useInView` for scroll triggers with `once: true`.

## Commands

```bash
npm run dev      # Vite dev server on :5173
npm run build    # tsc -b && vite build (TypeScript checked first)
npm run preview  # Preview production build locally
```

## Key Files

| File | Purpose |
|---|---|
| `src/data/resume.ts` | All content — edit here to update the portfolio |
| `src/types/resume.ts` | TypeScript interfaces for the content model |
| `src/index.css` | Tailwind import + `@theme` tokens + light/dark CSS vars |
| `src/hooks/useTheme.ts` | Dark/light toggle with localStorage persistence |
| `src/hooks/useScrollSpy.ts` | IntersectionObserver hook for active nav highlighting |
| `index.html` | Vite entry — contains all SEO meta, OG tags, favicon links |
| `vercel.json` | SPA rewrite + security headers |
