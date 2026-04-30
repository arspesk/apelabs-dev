# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Arsenii Peskovatskov at **apelabs.dev**. Static site deployed to Cloudflare Pages.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Build to `./dist/`
- `npm run preview` — Preview production build locally

## Architecture

**Stack:** Astro 6 (static output) + Tailwind CSS 4 + TypeScript

**Layout:** Single-page site with anchor navigation. All sections compose in `src/pages/index.astro`. A 404 page exists at `src/pages/404.astro`.

**Content data lives in `src/data/`:**
- `projects.ts` — Typed project arrays (aiProjects + infraProjects), merged and sorted by date in Projects.astro
- `skills.ts` — Skill categories with items

**Component flow:** `BaseLayout.astro` wraps everything (head, SEO, GA4, JSON-LD, scroll observer). `index.astro` composes: Header → Hero → About → Projects → Skills → Education → Contact → Footer.

**Styling:** Tailwind 4 via `@tailwindcss/vite` plugin (no tailwind.config — theme defined in `src/styles/global.css` using `@theme` directive). Brand colors: `--color-brand-400` (#A78BFA), `--color-brand-500` (#8B5CF6), `--color-brand-600` (#7C3AED). Dark theme only.

**Animations:** CSS `.fade-in` class + IntersectionObserver in BaseLayout. Respects `prefers-reduced-motion`.

## Key Conventions

- Project images go in `public/projects/` at 800x450px. Source originals in `assets/` (gitignored).
- Resume PDF and headshot in `public/assets/`.
- Logo/favicon PNGs in `public/` root.
- Projects have optional `imagePosition` field for CSS `object-position` override on card images.
- Sitemap auto-generated via `@astrojs/sitemap` integration.
- GA4 tracking ID: `G-P3TDFKX6HC` (in BaseLayout head).

## Deployment

Static build on Cloudflare Pages connected to GitHub repo `arspesk/apelabs-dev`. Build command: `npm run build`, output dir: `dist`. Domain: apelabs.dev (DNS on Cloudflare).
