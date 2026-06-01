
## 1. Audit fixes

### CRITICAL — Thin content on `/experts`, `/`, `/about`, `/services`

Expand each page with unique, intent-matched body copy (target: >1,500 words each).

- **`src/pages/Experts.tsx`** — add "How we vet experts" (~250w), "Subject coverage matrix" (~200w), 6-question FAQ (~400w), expanded testimonial paragraphs.
- **`src/pages/Index.tsx`** — add "Why postgraduates choose DissertlyPro" (~300w), "What a dissertation engagement looks like" 5-step explainer (~250w), homepage FAQ (6 Q&A, ~400w) wired to `FAQSchema`.
- **`src/pages/About.tsx`** — add "Methodology & quality standards" (~300w), "Ethics & academic integrity" (~250w), "Who we serve" personas (~200w).
- **`src/pages/Services.tsx`** — add "How to choose the right service" (~250w), "What's included in every engagement" (~200w), push FAQ from 6 → 10 entries.

### MODERATE — Markup baseline on `/experts`

`charset` and `viewport` are already in `index.html` (lines 4–5) and apply to every SPA route. False positive from a non-JS crawler. No code change; mark fixed with verification note in `update_findings`.

### MODERATE — JSON-LD on `/experts`, `/`, `/about`, `/services`

Move baseline `Organization` + `WebSite` JSON-LD into `index.html` `<head>` so non-JS crawlers see it. Add `FAQPage` schema to the new Index/Experts FAQ blocks; add `ItemList` of experts on `/experts`.

## 2. New keyword-targeted SEO pages

Cluster 34 keywords into 9 new routes (one route per distinct intent). Keywords like "llm/english/top 10 dissertation writing services" (vol 10, off-fit) become H2 + FAQ inside the closest cluster page to avoid thin-content cannibalization.

| New route | Primary keywords | Combined volume |
|---|---|---|
| `/phd-dissertation-writing-services` | phd dissertation writing service(s), best/doctoral | 170 |
| `/masters-dissertation-writing-services` | masters/master/ma dissertation writing services | 150 |
| `/mba-dissertation-writing-services` | mba dissertation writing services | 10 |
| `/medical-dissertation-writing-services` | medical dissertation writing services | 10 |
| `/cheap-dissertation-writing-services` | cheap, cheap online, cost | 140 |
| `/dissertation-writing-services-reviews` | review(s), best service review(s) | 70 |
| `/online-dissertation-writing-services` | online dissertation writing service(s) | 110 |
| `/dissertation-proposal-writing-services` | proposal, abstract writing | 40 |
| `/capstone-dissertation-writing-services` | capstone and dissertation writing services | 20 |

Each new page follows the `DissertationWritingServices` pillar template:
- Hero H1 = exact-match keyword + CTA
- TL;DR block (AI Overview-friendly)
- 1,500–2,000 words: who it's for, what's included, process, deliverables, expert profile
- Pricing/turnaround block → `/pricing`, `/order`
- 8–10 page-specific FAQs
- Schemas: `ServiceSchema`, `FAQSchema`, `BreadcrumbSchema`, `AggregateRatingSchema`
- `SEO` component with exact title, meta description, canonical
- Footer cross-links to pillar + siblings

## 3. Tawk.to — open immediately on visit

Currently `FloatingCTA` calls `hideWidget()` on load and only opens the panel on button click. Change behavior so the chat panel appears immediately when a visitor lands on the site.

- Edit `src/components/cro/FloatingCTA.tsx`:
  - In `Tawk_API.onLoad`, replace `hideWidget()` with `showWidget()` + `maximize()` (one-time per session, gated by `sessionStorage` flag `tawk_auto_opened` so we don't re-pop on every internal route change).
  - Remove the 3-second fallback `hideWidget()` call.
  - Keep the custom "Chat with Expert" button as a fallback trigger.
  - Loosen the aggressive hide CSS so the native chat panel renders (already permitted via `.tawk-chat-panel`); keep hiding the small "bubble" mini-launcher only when the panel is already open.

## 4. Wiring

- `src/App.tsx` — 9 new lazy imports + `<Route>` entries.
- `scripts/generate-sitemap.ts` — bump priority map for the 9 new routes to `0.9`.
- `src/components/layout/Footer.tsx` — new "Dissertation services" column linking the 9 pages + pillar.

## Files changed

- Edit: `index.html`, `src/pages/Experts.tsx`, `src/pages/Index.tsx`, `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/App.tsx`, `src/components/layout/Footer.tsx`, `src/components/cro/FloatingCTA.tsx`, `scripts/generate-sitemap.ts`
- Create: 9 new page files under `src/pages/services/`

## Verification

1. `bun run build` — sitemap regenerates with new routes, no TS errors.
2. Preview spot-check `/phd-dissertation-writing-services` + `/masters-dissertation-writing-services` — H1, FAQ accordion, schemas render.
3. View-source `/` — Organization JSON-LD visible without executing JS.
4. Reload preview — Tawk.to chat panel opens automatically on first visit; does not re-open after navigating between routes in the same session.
5. SEO rescan — thin-content + JSON-LD findings cleared; 9 new indexable URLs in sitemap.

## Notes / impact

- 9 new lazy chunks; no initial bundle impact.
- Auto-opening Tawk on every visit may increase chat staff load — sessionStorage gate limits to once per session per visitor.
- "Missing charset/viewport" finding documented as SPA-crawler false positive in `update_findings`.
