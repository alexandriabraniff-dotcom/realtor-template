# Realtor Site Template

A config-driven real estate agent website. Generate a fully branded site for a new client by editing one file.

---

## How to use this template

### 1. Edit `site-config.json`

This single file controls everything:

| Section | What it controls |
|---------|-----------------|
| `meta` | Page title and description |
| `theme.colors` | All background, text, and accent colours |
| `theme.fonts` | Font family names (display + body) |
| `designer` | Credit banner name and email |
| `agent` | Name, title, brokerage, tagline, photo, about copy, credentials, contact, social links |
| `nav.links` | Navigation menu items and hrefs |
| `hero.cta` | Hero button labels and hrefs |
| `services` | All three service cards (number, title, description, tags) |
| `neighborhoods` | Market coverage list, background image, quote |
| `testimonials` | Google review cards and review URL |
| `listings.items` | All property listings (used on both home page and /listings) |
| `footer` | Tagline, column links, legal text |

### 2. Add client assets to `/public/`

- `agent-photo.jpg` — Agent portrait (used in hero). Update `agent.photo` in config to `/agent-photo.jpg`
- `city-skyline.jpg` — Neighborhoods section background. Update `neighborhoods.backgroundImage` in config

### 3. Swap fonts (optional)

Fonts cannot be loaded from JSON at build time in Next.js.
To use different fonts, open `src/app/layout.tsx` and update the two import lines marked with the `── FONT SWAP ──` comment.

```ts
// Change these two lines:
const bodyFont = Inter({ ... });
const displayFont = Cormorant_Garamond({ ... });
```

Then update `theme.fonts.display` and `theme.fonts.body` in `site-config.json` to match the new names.

### 4. Preview

```bash
pnpm dev
```

Opens at `http://localhost:3000` (or specify `--port XXXX`)

### 5. Build and deploy

```bash
pnpm build
```

Push to GitHub and connect to Vercel. All done.

---

## Colour variable reference

| CSS variable | Used for |
|---|---|
| `--color-bg` | Light section backgrounds |
| `--color-text` | Primary dark text |
| `--color-text-muted` | Body copy |
| `--color-text-subtle` | Small detail text |
| `--color-accent` | Same as text for this monochrome theme |
| `--color-border` | Dividers and card borders |
| `--color-dark-bg` | Dark section backgrounds (hero, services, contact) |
| `--color-dark-text` | Text on dark backgrounds |
| `--color-footer-bg` | Footer background (slightly darker than darkBg) |
