# Complete remaining SEO + UX work

## 1. Pillar pages (9 keyword pages)

**A. New "Your expert team & how it works" section** — added to `ServicePillarPage.tsx` between Process and Deliverables. Shows 3 expert profile cards (name initials, discipline, credentials, sample projects) linking to `/experts`, plus a 3-column "Assignment → Drafting → Revision" explainer covering: how assignments are matched within 24h, how drafts flow with tracked changes, and how the unlimited-revision loop works (turnaround, sign-off, re-match guarantee).

**B. Expand FAQ on each of the 9 configs** — add 5 new shared FAQs tailored to Master's/PhD intent:
- Confidentiality / NDA / data handling (GDPR)
- Turnitin similarity thresholds & AI-detection report
- Whether the work is detectable as ghostwritten / institutional integrity stance
- Master's vs PhD scope differences and pricing tiers
- Payment safety, milestones, refund triggers

Brings each page to 10+ FAQs. Updates `sharedFaqs` array in `configs.ts`.

## 2. Thin content expansion (audit CRITICAL)

Add unique long-form sections to:
- `Index.tsx` — narrative "Why postgrads choose DissertlyPro", 5-step explainer, 6-question homepage FAQ (FAQPage schema).
- `Experts.tsx` — "How we vet experts" (3-step), subject coverage matrix, 6-question FAQ, 3 anonymised testimonials.
- `About.tsx` — methodology & ethics block, persona section, founder note.
- `Services.tsx` — decision guide (which service fits which stage), expanded 10-entry FAQ.

Each page target: >1,500 words of unique copy.

## 3. Footer "Dissertation Services" column

Add a 7th column in `Footer.tsx` (`footerLinks.dissertationServices`) linking to the 9 new keyword pages. Adjust grid to `lg:grid-cols-7` and collapse Brand column on large screens, or move Resources/Support balance to keep layout intact.

## 4. Tawk.to mobile auto-open behaviour

Edit `FloatingCTA.tsx` `autoOpenIfFirstVisit`:
- Detect viewport width (`window.matchMedia('(max-width: 768px)')`).
- Desktop: keep current 400ms maximize.
- Mobile: only `showWidget()` immediately, delay `maximize()` by 8 seconds AND require user to have scrolled at least 400px OR remained idle for 8s — whichever first. If user starts interacting with a form/CTA, skip auto-maximize for that session.
- Still gated by `sessionStorage('tawk_auto_opened')`.

## 5. Fix Google-reported 404s

Map each crawl error to a real route or 301-equivalent (SPA = client redirect via `<Navigate>`):

| Crawled URL | Fix |
|---|---|
| `/quick-checkout` and `/quick-checkout?services=…` | Route already named `/quick-service-checkout`. Add `<Route path="/quick-checkout" element={<Navigate to="/quick-service-checkout" replace />} />` preserving query string. |
| `/services/academic-editing` | Add redirect → `/services/editing` |
| `/services/proposal-development` | Redirect → `/services/dissertation-proposal` |
| `/services/dissertation-writing` | Redirect → `/dissertation-writing-services` (pillar) |
| `/services/research-methodology` | Redirect → `/services/methodology` |
| `/refund-policy` | Redirect → `/terms` (refund clauses live there) |
| `/privacy-policy` | Redirect → `/privacy` |
| `/terms-and-conditions` | Redirect → `/terms` |
| `/blog/mit-thesis-writing-strategies` | Redirect → `/blog` (post never existed; tombstone) |
| `/blog/stanford-dissertation-excellence` | Redirect → `/blog` |
| `/search?q={search_term_string}` | This is a SearchAction template echo (Google parsed JSON-LD literally). Fix by either (a) adding a real `/search` route that reads `?q=` and renders a results page using existing `topicClusters`/`glossaryTerms`, or (b) removing the SearchAction from sitewide JSON-LD in `index.html`. Plan: build a lightweight `/search` page so the SearchAction stays valid. |

All redirects added in `src/App.tsx` using `react-router-dom`'s `Navigate`. A small `LegacyRedirect` wrapper preserves the `search` string for `/quick-checkout` variants.

Also update `scripts/generate-sitemap.ts` to drop the broken URLs and include the canonical replacements.

## 6. Mark SEO findings fixed

Call `seo_chat--list_findings` → `seo_chat--update_findings` for the thin-content, JSON-LD, and false-positive markup findings once the code above ships.

## Files changed

- `src/components/services/ServicePillarPage.tsx` (expert-team section, revisions explainer)
- `src/pages/services/configs.ts` (5 new shared FAQs + per-page tailored Q)
- `src/components/cro/FloatingCTA.tsx` (mobile-aware delay)
- `src/components/layout/Footer.tsx` (new column)
- `src/pages/Index.tsx`, `Experts.tsx`, `About.tsx`, `Services.tsx` (thin-content expansion)
- `src/App.tsx` (legacy-URL redirects + new `/search` route)
- `src/pages/Search.tsx` (new lightweight results page)
- `scripts/generate-sitemap.ts` (clean URL set)
- SEO findings marked fixed at end

## Verification

- `bun run build` → sitemap regenerates, no TS errors
- Manual spot-check: `/quick-checkout?services=clarity-call` → lands on quick-service-checkout with query preserved
- Mobile preview (375px) → chat does not pop until 8s + scroll
- Pillar page → expert section + 10 FAQs visible
- SEO rescan after deploy
