## 1. Switch canonical host to `https://dissertlypro.com` everywhere

The production domain is `dissertlypro.com`. Every crawler-visible URL, canonical, `og:url`, sitemap loc, JSON-LD `url`, hreflang, and internal absolute link in the built `dist/` must use `https://dissertlypro.com`. No `dissertlypro.lovable.app` in the shipped build.

### Code + config changes

- `scripts/generate-sitemap.ts` → `BASE_URL = "https://dissertlypro.com"`.
- `public/robots.txt` → `Sitemap: https://dissertlypro.com/sitemap.xml` and header comment.
- `index.html` → canonical, `og:url`, `twitter:url`, JSON-LD `url` all → `https://dissertlypro.com`.
- `src/components/SEO.tsx` and any base-URL constants (`src/lib/ogImages.ts`, schema components under `src/components/schemas/*`) → replace hardcoded `dissertlypro.lovable.app` with `dissertlypro.com`.
- `public/llms.txt`, `public/llms-full.txt`, `public/ai-context.json`, `public/humans.txt`, `public/security.txt`, `public/.well-known/security.txt`, `public/manifest.json` → replace all lovable.app occurrences.
- `public/.htaccess` → verify 301 rules canonicalize to `https://dissertlypro.com` (non-www, https). Add rule to 301 `dissertlypro.lovable.app` → `dissertlypro.com` at the app level (defense in depth; primary redirect happens at DNS/host).
- Search-replace sweep across `src/**` and `public/**` for any remaining `dissertlypro.lovable.app` string; fail the build if any survive.

### Post-build guard

Add a step to `scripts/seo-validate.ts` (or a new small script) that:

- Greps `dist/` recursively for `dissertlypro.lovable.app`.
- Exits non-zero if any hit is found, blocking the cPanel zip step.

## 2. Remove consultation fees — replace all consultation CTAs

Every user-facing "Book / Free / Schedule Consultation" button currently routes to `/consultation`, which still implies a paid step. Replace across the site with fee-free actions.

### Replacement policy

- **Primary CTA** ("Book Consultation") → **"Order Now"** → `/order`
- **Secondary CTA** ("Free / Schedule Consultation") → **"Chat With Support"** → opens Tawk.to via `window.Tawk_API.maximize()` (same pattern as `MobileCTA.tsx`)
- **Tertiary / info surfaces** → **"WhatsApp Us"** → `https://wa.me/18126905122?text=...`
- No button, card, banner, or schema `potentialAction` may send users to `/consultation`.

### Files to sweep

Pages: `Index.tsx`, `Pricing.tsx`, `About.tsx`, `Contact.tsx`, `Experts.tsx`, `DissertationWritingServices.tsx`, `DissertationWriting.tsx`, `DissertationVsThesis.tsx`, `DissertationStructure.tsx`, `ResearchMethodology.tsx`, `ResearchQuestions.tsx`, `QualitativeAnalysis.tsx`, `MixedMethodsResearch.tsx`, `DataVisualization.tsx`, `AcademicNetworking.tsx`, `AcceleratedMasters.tsx`, `PartTimePhD.tsx`, `CourseworkToThesis.tsx`, `MastersDefense.tsx`, `MastersResources.tsx`, `MastersThesisGuide.tsx`, `PhDResources.tsx`, `PhDFunding.tsx`, `PhDIndustry.tsx`, `PhDPublishing.tsx`, `CandidacyExams.tsx`, `VivaPreparation.tsx`, `ThesisTopicSelection.tsx`, `ThesisStructure.tsx`, `CitationMastery.tsx`, `Glossary.tsx`, `FAQ.tsx`, `IRBEthicsGuide.tsx`, `MentalHealthHub.tsx`, `DeadlinesDeferrals.tsx`, `AIAcademiaHub.tsx`, `LiteratureReviewGuide.tsx`, `Subjects.tsx`, `UniversityLanding.tsx`, `UniversitiesHub.tsx`, `RegionLanding.tsx`, `QuickServices.tsx`, `Order.tsx`.

Tools: `ToolsHub.tsx`, `WordCounterPage.tsx`, `QuoteCalculatorPage.tsx`, `ThesisBuilderPage.tsx`, `PersonalizationQuizPage.tsx`, `ResearchQuestionValidatorPage.tsx`, `DeadlineCheckerPage.tsx`, `LiteratureSearchPage.tsx`.

Data/config: `src/data/serviceFAQs.ts`, `src/data/blogPosts.ts`, `src/pages/services/configs.ts`, `src/pages/services/seoConfigs.ts`.

Layout: `Header.tsx`, `Footer.tsx`, `FloatingCTA.tsx` — verify no `/consultation` links remain.

### `/consultation` route

Keep the route (inbound backlinks/GSC impressions) but repurpose `src/pages/Consultation.tsx` into a fee-free **"Get Your Custom Quote"** page: remove all "$50" and payment copy; leave two CTAs (Order Now, Chat With Support, WhatsApp). Update `llms.txt`, `llms-full.txt`, `ai-context.json` descriptions to match.

## 3. Fix all SEO & AI-review issues + Semrush gap pass

### Scanner findings

- Call `seo_chat--list_findings`, fix every failing item, mark fixed via `seo_chat--update_findings`.
- Resolve remaining `warn` items from `public/seo-report.json`:
  - `seo-component-usage` warn → ensure per-page `<SEO />` on all routes still missing it (`Order.tsx`, new service pillars, tools, utility pages).
  - `prerender-built` warn → resolved by running `bun run prerender:cpanel` in the build step.

### Structural / content improvements

- Confirm each route's Helmet `canonical` and `og:url` self-reference the route (not the homepage).
- Confirm every JSON-LD `url` field uses `https://dissertlypro.com`.
- Update `/consultation` sitemap entry priority to `0.6` (informational, not commercial).
- Add hreflang alternates on regional landing pages if missing (`/uk`, `/us`, `/au`, `/ca`).

### Semrush gap pass (before build)

1. `semrush--domain_analysis` on `dissertlypro.com` — current keywords + traffic.
2. `semrush--top_pages` — verify title/description/JSON-LD quality on top URLs.
3. `semrush--competitive_analysis` — auto-discover competitors, keyword gaps.
4. `semrush--keyword_research` on 3–5 highest-value gap terms.
5. `semrush--serp_analysis` on `best dissertation writing services 2026` to validate the comparison pillar's angle.

Actions from Semrush output:

- Add up to 3 new landing pages / blog posts for realistic-difficulty gap keywords.
- Rewrite titles/descriptions for underperforming top pages (pos 4–15, high impressions).
- Reorder `llms.txt` to lead with highest-CTR pages.
- Internal linking pass from top-performing pages → 7 new service pillars + comparison post, using descriptive anchor text.

## 4. cPanel-ready optimized build

Once code changes land:

1. `bun run seo:validate` → all `ok`, no `warn`.
2. Grep guard: `! rg -q "dissertlypro\.lovable\.app" dist/` after build.
3. `bun run prerender:cpanel` → prerendered `dist/index.html` per route.
4. Verify `dist/` contains: prerendered HTMLs, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `ai-context.json`, `.htaccess`, `manifest.json`, fingerprinted assets.
5. Spot-check with `curl -A "Googlebot" file://dist/...` — meaningful HTML in `<body>`, not just `<div id="root">`.
6. Zip `dist/` → `/mnt/documents/dissertlypro-cpanel-<date>.zip`, surface download link in the reply.

### `.htaccess` verification

- SPA fallback rewrite ✓
- Force HTTPS + non-www to `https://dissertlypro.com` ✓
- Redirect `dissertlypro.lovable.app` requests → `https://dissertlypro.com/$1` (301) — add if missing.
- GZIP + long-cache for `/assets/*`, `/images/*` ✓
- Explicit `Content-Type` for `sitemap.xml` (`application/xml`) and `robots.txt` (`text/plain`) — add if missing.

## Out of scope

- Removing `/consultation` route entirely (kept, repurposed to free quote).
- Off-site link-building, GSC OAuth, HARO/Reddit outreach.
- Backend email replacement (Apps Script + mailto fallback stays).

## Files expected to change

- ~45 page/component files (consultation CTA + host sweep).
- `src/pages/Consultation.tsx` (repurpose to free quote).
- `src/components/SEO.tsx`, `src/lib/ogImages.ts`, `src/components/schemas/*` (host constants).
- `scripts/generate-sitemap.ts`, `scripts/seo-validate.ts` (host + guard).
- `index.html`, `public/robots.txt`, `public/llms.txt`, `public/llms-full.txt`, `public/ai-context.json`, `public/humans.txt`, `public/security.txt`, `public/.well-known/security.txt`, `public/manifest.json`, `public/.htaccess`.
- 0–3 new landing/blog files from the Semrush gap pass.
- Build artifact: `/mnt/documents/dissertlypro-cpanel-<date>.zip`.
