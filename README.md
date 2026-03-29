# apelabs.dev

Personal portfolio website for Arsenii Peskovatskov — Solutions Engineer & AI Builder.

**Live:** [apelabs.dev](https://apelabs.dev)

## Stack

- [Astro](https://astro.build/) — Static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) — Styling
- [Cloudflare Pages](https://pages.cloudflare.com/) — Hosting

## Development

```sh
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build
```

## Deployment

Connected to Cloudflare Pages via GitHub. Pushes to `main` trigger auto-deploy.

- Build command: `npm run build`
- Output directory: `dist`
- Domain: `apelabs.dev`
