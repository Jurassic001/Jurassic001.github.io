# Max Haberer — Portfolio

A modern, responsive developer portfolio built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Dark/light mode, single-page layout with smooth scroll navigation, and all content driven from a single data file.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 (utility-first, `@theme` tokens) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Updating Content

**All portfolio content lives in a single file:**

```
src/data/resume.ts
```

Edit this file to update:
- Personal info, contact details, social links
- Summary / bio text
- Experience entries (roles, bullets, dates, tags)
- Projects (descriptions, tech stacks, links, outcomes)
- Education history
- Skills (categorized, with highlights)
- Awards

The TypeScript types in `src/types/resume.ts` provide autocomplete and type-safety when editing.

## Updating Images

Replace files in `public/img/`:
- `mh_headshot.jpg` — Professional photo (appears in hero + about sections)
- `mh_logo.png` — Personal logo (available for use)

The GitHub avatar is loaded dynamically from `avatars.githubusercontent.com`.

## Updating Favicons

Replace files in `public/favicon/`. Generate a new set at [realfavicongenerator.net](https://realfavicongenerator.net/) if needed.

## Project Structure

```
├── index.html              Vite entry with SEO meta tags
├── package.json
├── vite.config.ts
├── vercel.json             Vercel SPA rewrite + security headers
├── public/
│   ├── favicon/            Favicon assets + webmanifest
│   ├── img/                Profile images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx            React entry point
│   ├── App.tsx             Root component
│   ├── index.css           Tailwind directives + theme tokens
│   ├── types/resume.ts     TypeScript interfaces
│   ├── data/resume.ts      ← ALL CONTENT HERE
│   ├── hooks/              useTheme, useScrollSpy
│   ├── utils/cn.ts         clsx + tailwind-merge helper
│   └── components/
│       ├── layout/         Navbar, Footer, Section
│       ├── ui/             Button, Card, Badge, ThemeToggle, SocialLinks
│       └── sections/       Hero, About, Experience, Projects, Skills, Education, Contact
```

## Deployment (Vercel)

1. Connect this repo to Vercel
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Push to `main` → auto-deploys
