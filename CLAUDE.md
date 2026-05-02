# Syklomics Website — Project Guide

A Next.js 15 (App Router) marketing site for Syklomics Biotechnology, deployed to Vercel.

---

## Project Layout

```
landing-page/
├── app/
│   ├── layout.tsx              ← Root layout, fonts, metadata
│   ├── page.tsx                ← Composes all section components
│   ├── globals.css             ← All styling (custom CSS, no Tailwind)
│   └── components/
│       ├── CustomCursor.tsx    ← Custom cursor + ring (client)
│       ├── ScrollReveal.tsx    ← IntersectionObserver fade-in (client)
│       ├── Nav.tsx             ← Fixed nav, scroll/mobile state (client)
│       ├── Hero.tsx            ← Full-screen burgundy hero
│       ├── HeroCells.tsx       ← Floating RBC SVGs (client, mounts after hydration)
│       ├── Problem.tsx
│       ├── Platform.tsx
│       ├── Science.tsx
│       ├── Edge.tsx            ← The "Our Edge" / differentiation section
│       ├── Founders.tsx
│       ├── Roadmap.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── legacy/                     ← Old static-HTML / GCP Cloud Run setup (kept for reference)
├── package.json
├── tsconfig.json
├── next.config.mjs
└── CLAUDE.md                   ← This file
```

Most components are server components. Only the four marked "client" above ship JS to the browser.

---

## Local Development

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

---

## Deploying to Vercel

### Option A — Git-connected (recommended)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Vercel auto-detects Next.js. Click **Deploy**
4. Every push to `main` redeploys automatically

### Option B — Vercel CLI

```powershell
npm install -g vercel
vercel              # preview deploy
vercel --prod       # production deploy
```

### Custom Domain

In the Vercel dashboard → your project → **Settings → Domains** → add `syklomics.com`.
Vercel shows the DNS records to set at your registrar; HTTPS is automatic.

---

## How to Update the Website

The content lives in the section components under `app/components/`. To change a section, edit
its component file directly and commit/push (Git-connected deploys pick it up automatically).

Common edits:

- **Hero headline / subhead / stats** → `app/components/Hero.tsx`
- **Problem stats and copy** → `app/components/Problem.tsx`
- **Three platform cards** → `app/components/Platform.tsx`
- **Three omics cards / pull-quote** → `app/components/Science.tsx`
- **Four differentiator cards** → `app/components/Edge.tsx`
- **Founder bios and quotes** → `app/components/Founders.tsx`
- **Three timeline stages and costs** → `app/components/Roadmap.tsx`
- **Footer links / locations / copyright** → `app/components/Footer.tsx`
- **Nav links** → `app/components/Nav.tsx`
- **Page title / SEO description** → `app/layout.tsx` (the `metadata` export)
- **Any styling, colours, spacing** → `app/globals.css`

---

## Asking Claude to Make Changes

You can paste any component or the relevant CSS block into a conversation with Claude. Useful prompts:

- *"Update the founders section with this new bio: ..."*
- *"Change the hero headline to: ..."*
- *"Add a new section between Science and Edge about our regulatory strategy"*
- *"Change the colour of the CTA button to [colour]"*
- *"Add a new nav link called 'Pipeline' pointing to a new section"*

---

## Colour Reference (Brand Palette)

| Name         | Hex       | CSS variable      | Use                              |
|--------------|-----------|-------------------|----------------------------------|
| Deep Claret  | `#3D0D1E` | `--burg-deep`     | Darkest backgrounds, hero        |
| Burgundy     | `#5C1A2E` | `--burg`          | Primary brand colour, CTAs       |
| Claret       | `#7B2D42` | `--burg-mid`      | Secondary elements               |
| Wine         | `#9B3D55` | `--burg-lite`     | Accents, borders                 |
| Rose         | `#C46F84` | `--rose`          | Highlights, tags, chart accents  |
| Blush        | `#E8B4C0` | `--blush`         | Light accents on dark backgrounds|
| Petal        | `#F5DDE3` | `--petal`         | Light section backgrounds        |
| Cream        | `#FBF7F5` | `--cream`         | Main light background            |

All defined as CSS custom properties in `app/globals.css` under `:root`.

---

## Font Reference

| Font                 | CSS variable       | Role                        | Weights |
|----------------------|--------------------|-----------------------------|---------|
| Outfit               | `--ff-display`     | Headlines, wordmark, UI     | 200, 300, 400, 500, 600, 700, 800 |
| Cormorant Garamond   | `--ff-serif`       | Quotes, taglines, accents   | 300, 400, 500, 600 (+ italic) |
| DM Sans              | `--ff-body`        | Body text, captions         | 300, 400, 500 (+ italic) |

Loaded via `next/font/google` in `app/layout.tsx` — no external `<link>` tag, no FOUT.

---

## Section Order (in `app/page.tsx`)

1. **Nav** — fixed top bar, becomes frosted glass on scroll
2. **Hero** — full-screen dark burgundy, animated floating RBC cells, key stats
3. **Problem** — the case for SCD drug discovery reform, four key statistics
4. **Platform** — three platform pillars (repurposing, novel design, biomarker discovery)
5. **Science** — three omics layers (genomics, proteomics, metabolomics) + pull-quote
6. **Edge** — four competitive advantages vs Healx, BenevolentAI, Recursion
7. **Founders** — Fatima Oyawoye (CEO) and Pamilerin Idowu (CTO)
8. **Roadmap** — three-stage development timeline with cost estimates
9. **CTA** — contact call to action
10. **Footer** — links, locations, legal

---

## Cost Estimate (Vercel)

The Vercel Hobby plan is free and is appropriate for a marketing/pitch site:
- The page renders fully statically (`○ Static` in build output) — no server compute per request
- Free tier covers 100 GB bandwidth/month
- Custom domains and HTTPS are included

Upgrade to Pro (~$20/mo) is only needed for commercial use, team collaboration, or higher bandwidth.

---

## Legacy GCP Setup

The original deployment used a Docker container on Google Cloud Run. Those files
(`Dockerfile`, `nginx.conf`, `deploy.sh`, the original single-file `index.html`)
are preserved under `legacy/` for reference but are not part of the current build.

---

*Syklomics Biotechnology · Bristol, UK · Ibadan, Nigeria*
