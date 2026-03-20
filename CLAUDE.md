# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> See `@AGENTS.md` for the full architecture reference — it is the canonical guide and should be treated as equivalent to this file.

## Commands

```bash
pnpm dev         # Vite dev server on http://localhost:5173
pnpm build       # Type-check (tsc -b) then Vite production build
pnpm preview     # Serve the production build locally
```

There is no test runner or linter configured. TypeScript errors surface during `pnpm build`.

## Architecture Overview

Single-page React 19 + TypeScript portfolio built with Vite 6. No router — all sections render in `src/App.tsx` with anchor-based scroll navigation.

**Data flow:** `src/data/resume.ts` is the single source of truth for all content. Section components import `resumeData` from it; never hardcode text in components. Types live in `src/types/resume.ts`.

**Component tiers** under `src/components/`:
- `layout/` — `Navbar`, `Footer`, `Section` (Section adds Framer Motion fade-in-up via `useInView`)
- `ui/` — reusable primitives (`Button`, `Card`, `Badge`, `ThemeToggle`, `SocialLinks`)
- `sections/` — page sections (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`)
- `reactbits/` — third-party visual effect components (`Aurora`, `ColorBends`) using WebGL via `ogl` and `three`

**Styling:** Tailwind CSS v4 with `@theme` tokens defined in `src/index.css` (no `tailwind.config` file). Design tokens use `brand-*` (indigo) and `accent-*` (cyan). Dark mode is toggled via a `dark` class on `<html>` (managed by `src/hooks/useTheme.ts`, persisted to localStorage) — components use `dark:` variants for overrides.

**Animations:** Framer Motion only — no CSS `@keyframes`. Use `useInView` with `once: true` for scroll-triggered animations.

**Utilities:**
- `cn()` in `src/utils/cn.ts` (`clsx` + `tailwind-merge`) — use for all conditional/merged class strings
- `useScrollSpy.ts` — IntersectionObserver hook for active nav link highlighting

## Key Conventions

- Function components only, `export default function ComponentName()`. No class components, no named exports for components.
- `ui/` components accept a `className` prop for external overrides.
- Custom CSS utilities: `.text-gradient` (brand→accent gradient), `.bg-glass` (translucent backdrop-blur card).
- The `autoCV` submodule (`autoCV/cv.tex`) is the upstream source for resume content — keep `resume.ts` in sync with it.
- Deployed on Vercel; `vercel.json` configures SPA rewrite rules and security headers.
