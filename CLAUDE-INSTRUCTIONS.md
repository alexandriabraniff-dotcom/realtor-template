# Claude Code — Realtor Template Instructions

Use this file when a new client realtor site needs to be built from this template.

---

## What this template is

A config-driven Next.js realtor website. Every piece of content, colour, copy, and data is controlled from a single `site-config.json` file. No component code needs to be touched for a standard new client build.

---

## How to generate a new client site

### Step 1 — Clone the template

```bash
git clone https://github.com/alexandriabraniff-dotcom/realtor-template "C:/Users/alexa/OneDrive/Desktop/Dev/[Client-Name]-Realestate"
cd "[Client-Name]-Realestate"
rm -rf .git
git init
```

### Step 2 — Install dependencies

```bash
pnpm install
```

### Step 3 — Edit `site-config.json`

Replace all values with the new client's information. Every key is documented below.

#### `meta`
```json
"meta": {
  "title": "Jane Smith | Sydney Real Estate",
  "description": "Short SEO description for Google."
}
```

#### `theme.colors`
All colour values in hex. The site uses a dark/light split — `darkBg` is used for hero, services, contact, and sticky nav sections.
```json
"colors": {
  "bg": "#F8F8F8",          // Light section background
  "text": "#0A0A0A",        // Primary text on light bg
  "textMuted": "#4A4A4A",   // Body copy
  "textSubtle": "#6A6A6A",  // Small detail text
  "accent": "#0A0A0A",      // Accent (same as text for monochrome; change for coloured accent)
  "border": "#E0E0E0",      // Dividers and borders
  "darkBg": "#0A0A0A",      // Dark section background
  "darkText": "#F8F8F8",    // Text on dark background
  "footerBg": "#050505"     // Footer (slightly darker than darkBg)
}
```

#### `theme.fonts`
Font family names used in CSS `font-family` declarations. These must match what is loaded in `layout.tsx`.
```json
"fonts": {
  "display": "Cormorant Garamond",  // Heading / display font
  "body": "Inter"                    // Body / UI font
}
```
> **Note:** To swap fonts, also update the `next/font/google` imports in `src/app/layout.tsx` — see Step 5.

#### `designer`
Controls the credit banner at the top of the site (remove once client has paid).
```json
"designer": {
  "name": "Alexandria Braniff",
  "email": "hello@alexandriabraniff.com"
}
```

#### `agent`
The main agent/client data block.
```json
"agent": {
  "name": "Jane Smith",
  "title": "REALTOR®",
  "brokerage": "TEAM NAME | BROKERAGE NAME",
  "location": "SYDNEY",
  "tagline": "Short punchy one-liner.",
  "subheadline": "Supporting sentence with credentials or experience.",
  "photo": "/agent-photo.jpg",       // Path in /public/, or an https:// URL
  "about": {
    "label": "ABOUT JANE",
    "heading": "Heading line one.<br />Heading line two.",
    "paragraphs": [
      "First paragraph of the about section.",
      "Second paragraph.",
      "Third paragraph."
    ],
    "disciplines": [
      { "label": "First Discipline", "icon": "◇" },
      { "label": "Second Discipline", "icon": "◆" },
      { "label": "Third Discipline", "icon": "◈" }
    ]
  },
  "credentials": [
    { "value": "10+", "label": "Years Experience", "detail": "Detail sentence." },
    { "value": "ABC", "label": "Credential Label", "detail": "Detail sentence." },
    { "value": "$2M", "label": "Another Stat", "detail": "Detail sentence." }
  ],
  "contact": {
    "phone": "(04) 1234 5678",
    "email": "jane@email.com",
    "address": "Suite 1, 100 Main Street\nSydney NSW 2000"
  },
  "social": {
    "instagram": "https://instagram.com/...",
    "youtube": "#",
    "facebook": "#",
    "twitter": "#"
  },
  "googleReviewsUrl": "https://www.google.com/search?q=Jane+Smith+Realtor+Sydney+reviews"
}
```

#### `nav.links`
Navigation menu items. Use `/#sectionid` for same-page anchors or `/listings` for the listings page.
```json
"nav": {
  "links": [
    { "label": "About", "href": "/#about" },
    { "label": "Listings", "href": "/listings" },
    { "label": "Areas", "href": "/#neighbourhoods" },
    { "label": "Reviews", "href": "/#testimonials" }
  ]
}
```

#### `hero.cta`
The two call-to-action buttons in the hero section.
```json
"hero": {
  "cta": {
    "primary": { "label": "GET IN TOUCH", "href": "/#contact" },
    "secondary": { "label": "VIEW LISTINGS", "href": "/#listings" }
  }
}
```

#### `services`
The three service cards shown in the dark services section.
```json
"services": {
  "label": "SERVICES",
  "heading": "Section heading.",
  "headingEmphasis": "Italic part.",
  "enquireHref": "/#contact",
  "items": [
    {
      "number": "01",
      "title": "Service Name",
      "subtitle": "Short subtitle",
      "description": "2-3 sentence description of the service.",
      "detail": "One supporting detail sentence.",
      "tags": ["Tag One", "Tag Two", "Tag Three"],
      "icon": "◇"
    }
  ]
}
```

#### `neighborhoods`
The market coverage section with a background image and quote.
```json
"neighborhoods": {
  "label": "MARKET COVERAGE",
  "heading": "The",
  "headingEmphasis": "Areas.",
  "backgroundImage": "/city-skyline.jpg",
  "ctaLabel": "EXPLORE WITH JANE →",
  "ctaHref": "#contact",
  "quote": {
    "text": "A quote from the agent about their market.",
    "attribution": "JANE SMITH — REALTOR®"
  },
  "items": [
    { "name": "Suburb Name", "description": "One-line description" }
  ]
}
```

#### `testimonials`
Google review cards. Update `googleReviewsUrl` to the client's actual Google listing.
```json
"testimonials": {
  "googleReviewsUrl": "https://www.google.com/search?q=...",
  "items": [
    {
      "name": "Reviewer Name",
      "date": "2 weeks ago",
      "quote": "Full review text without quotation marks.",
      "stars": 5
    }
  ]
}
```

#### `listings.items`
All property listings. Used on both the home page featured section and the `/listings` page.
- `status` must be either `"Active"` or `"Sold"`
- The first item in the array becomes the large featured card on the home page
```json
"listings": {
  "featuredLabel": "FEATURED PROPERTIES",
  "featuredHeading": "Curated for the\ndiscerning buyer.",
  "pageHeaderImage": "https://images.unsplash.com/...",
  "pageSubheadline": "One sentence description for the listings page header.",
  "items": [
    {
      "image": "https://images.unsplash.com/...",
      "price": "$1,200,000",
      "address": "12 Example Street",
      "neighbourhood": "Suburb",
      "beds": 3,
      "baths": 2,
      "sqft": "1,200",
      "status": "Active",
      "label": "BUILDING NAME"
    }
  ]
}
```

#### `footer`
Footer columns of links and legal text.
```json
"footer": {
  "tagline": "One sentence tagline for the footer.",
  "legal": "REALTOR® is a trademark of CREA.",
  "columns": [
    {
      "heading": "Navigate",
      "links": [
        { "label": "About", "href": "/#about" }
      ]
    }
  ]
}
```

---

### Step 4 — Add client photos to `/public/`

| File | Purpose |
|------|---------|
| `agent-photo.jpg` | Agent portrait (hero section) |
| `city-skyline.jpg` | Neighborhoods section background |

Then update the paths in `site-config.json`:
```json
"agent": { "photo": "/agent-photo.jpg" },
"neighborhoods": { "backgroundImage": "/city-skyline.jpg" }
```

---

### Step 5 — Swap fonts (optional)

Only needed if the client wants different fonts than the defaults (Cormorant Garamond + Inter).

Open `src/app/layout.tsx` and update the two lines marked `── FONT SWAP ──`:

```ts
// Example: swap to Playfair Display + Lato
import { Lato, Playfair_Display } from "next/font/google";

const bodyFont = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
const displayFont = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-display" });
```

Then update `site-config.json`:
```json
"fonts": {
  "display": "Playfair Display",
  "body": "Lato"
}
```

---

### Step 6 — Preview

```bash
pnpm dev --port XXXX
```

---

### Step 7 — Push to GitHub and deploy to Vercel

```bash
gh repo create alexandriabraniff-dotcom/[client-name]-realestate --public --source=. --remote=origin --push
```

Then connect the GitHub repo to Vercel.

---

## File map

| File | Purpose |
|------|---------|
| `site-config.json` | **All client data lives here — the only file that needs editing** |
| `src/lib/config.ts` | Typed TypeScript wrapper for the config |
| `src/app/styles.css` | All component styles, uses CSS custom properties for theming |
| `src/app/globals.css` | Tailwind import + base resets only |
| `src/app/layout.tsx` | Injects CSS variables from config, loads Google Fonts |
| `src/components/*.tsx` | All page sections — pull data from config, no hardcoded values |
| `src/app/listings/page.tsx` | Full listings page |
| `TEMPLATE.md` | Short reference for colour variable names |

---

## Section IDs (for anchor links)

| Section | ID |
|---------|---|
| Hero | `#hero` |
| About | `#about` |
| Services | `#services` |
| Featured Listings | `#listings` |
| Neighbourhoods | `#neighbourhoods` |
| Testimonials | `#testimonials` |
| Contact | `#contact` |
