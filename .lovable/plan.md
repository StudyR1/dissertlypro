# Plan: Conversion-First Order Form + SEO Fixes + 90-Day Plan Follow-through

## 1. Rebuild `/order` as a low-friction, per-page custom order

**Goal:** kill the $50 flat "consultation deposit" friction. Clients configure pages + add-ons, see a live price starting at ~$15/page, and pay the full computed amount (or a small commitment fee) directly.

### Pricing model

- **Base:** $15 / page (double-spaced, ~275 words). Configurable constant.
- **Academic level multiplier:** Undergrad ×1.0 · Master's ×1.4 · PhD ×1.8 · DBA/EdD ×2.0
- **Deadline multiplier:** 3+ months ×0.9 · 1 month ×1.0 · 2 weeks ×1.25 · 1 week ×1.4 · 3 days ×1.7 · 24 h ×2.0
- **Service-type multiplier:** Editing ×0.4 · Proofreading ×0.3 · Data analysis ×1.3 · Statistics ×1.4 · Writing ×1.0
- **Add-ons (flat or per-page):** Turnitin report +$10 · Plagiarism-free certificate +$5 · Native writer +$3/page · Top-tier expert +$4/page · Progressive delivery +$15 · SPSS/NVivo dataset +$25 · Abstract +$10 · PowerPoint summary +$20 · Extended revisions (30 days) +$15
- **Live total** updates on every input change; minimum order $15.

### New form flow (3 steps, not 5)

1. **Configure order** — service type, academic level, pages (± stepper), deadline, subject, citation style, add-ons, brief description, optional file upload.
2. **Your details** — name, email, phone (WhatsApp), university (optional).
3. **Review & pay** — itemized summary, T&Cs checkbox, PayPal button charging the full computed total. No "$50 consultation" anywhere.

Keep the existing multi-step animation shell and PayPal integration; replace the pricing/step logic. Preserve `/quick-checkout` for micro-services.

### Order delivery to email + Sheet

Existing `logFullOrder` already POSTs to the Apps Script webhook that both appends to the Sheet AND sends email to `tutorsgallery@gmail.com` via `MailApp.sendEmail`. Actions:

- Extend the `FullOrderData` payload with the new fields (pages, level, add-ons array, computed subtotal, multipliers, final total) so the email + sheet capture everything.
- Update the header comment in `src/lib/googleSheets.ts` with the new columns and an updated Apps Script snippet that formats the add-ons list and price breakdown in the email body.
- Add a **fallback mailto backup**: on submit, also construct a `mailto:tutorsgallery@gmail.com` with the full order body and fire it in a hidden link only if the webhook fetch throws — guarantees the user never loses an order even if Apps Script is down.
- Show the user a clear "Order confirmation sent to [tutorsgallery@gmail.com](mailto:tutorsgallery@gmail.com)" note on the success screen.

> Note: fully server-side email without Sheets would require Lovable Cloud + a Resend edge function. Current setup (Apps Script → Gmail) already delivers to your inbox reliably; the fallback mailto covers outages. If you want a Cloud-based backup, say so and I'll add it in a follow-up.

## 2. Fix all outstanding SEO & AI-review findings

From the SEO panel:

- **Heading levels:** `src/pages/Index.tsx:310` and `src/pages/Services.tsx:217` → H3 to H2.
- **Generic anchor text:** `Index.tsx:548` and `Services.tsx:242` "Learn more" → "Explore {Service Name}".
- **Icon-button a11y:** `CitationGeneratorPage.tsx:595` copy button → add `aria-label="Copy citation"`.
- **Robots/sitemap host mismatch:** switch `Sitemap:` in `public/robots.txt` and `BASE_URL` in `scripts/generate-sitemap.ts` to `https://dissertlypro.com` (the SEO scanner's expected host) — keep the `.htaccess` 301 rules so production `dissertlypro.com` still consolidates.
- **Sitemap sync:** add `/quick-checkout` (canonical), remove `/quick-checkout/*` stale entries, and drop `/search` (already `noindex`).
- **Lighthouse LCP:** add `fetchpriority="high"` + explicit width/height to homepage hero image, remove `loading="lazy"` from it; ensure `font-display: swap` on all `@font-face` in `src/index.css`.
- **Lighthouse contrast:** audit `text-muted-foreground/50` and any arbitrary gray utilities; replace with token classes.
- **Semrush content gap:** add `/blog/best-dissertation-writing-services-reviews-2026` comparative pillar (5–7 providers, pricing, guarantees, verdict) — targets the 1,900/mo head term with the review intent Google now favors.
- Mark each finding fixed via `update_findings` After implementation.

## 3. Continue the 90-day content plan

- **New comparison pillar** above becomes item #1 of Month 2 content.
- **Internal linking pass:** add contextual links from the 9 new keyword pages and top blog posts (from the attached GSC screenshot: `cambridge-phd-guide`, `ucl-phd-doctoral-guide`, `mit-thesis-requirements`, `melbourne-phd-candidature`, `presenting-research-findings`) → `/dissertation-writing-services` and the new comparison post, using descriptive anchors.
- **GSC top-performers optimization:** for each URL in the screenshot with impressions but low clicks, refresh the `<title>` + meta description with the highest-CTR keyword variant and add an updated `dateModified` in Article JSON-LD.
- `**llms.txt` refresh:** add the new comparison post and reordered top-priority pages so AI crawlers (ChatGPT, Perplexity, Claude) surface them first.

## 4. cPanel + crawler visibility verification

- Run `bun run seo:validate` (existing script) to confirm every route has `<title>`, `<meta description>`, canonical, JSON-LD, and `noscript` fallback presence.
- Re-verify `.htaccess`: SPA fallback ✓, subdomain 301s ✓, gzip ✓, cache headers ✓. Add `mod_headers` rule so `sitemap.xml` and `robots.txt` are served with `Content-Type: application/xml` / `text/plain` explicitly (some cPanel setups mis-guess).
- Update the `<noscript>` fallback in `index.html` to include the new comparison post + updated service pages so JS-less crawlers see the current link graph.
- Confirm `react-snap` prerender config still lists all new routes (`prerender:cpanel` in `package.json`) — add any missing ones.
- After deploy: run `curl -A "Googlebot" https://dissertlypro.com/order` and `curl -A "GPTBot" https://dissertlypro.com/dissertation-writing-services` locally to confirm meaningful HTML returns (not just `<div id="root">`).

## Files touched

- `src/pages/Order.tsx` — full rewrite of pricing + steps
- `src/lib/googleSheets.ts` — payload + docs + mailto fallback helper
- `src/pages/Index.tsx`, `src/pages/Services.tsx`, `src/pages/tools/CitationGeneratorPage.tsx` — a11y/heading fixes + anchor text
- `public/robots.txt`, `scripts/generate-sitemap.ts`, `public/.htaccess`
- `src/index.css` — font-display + contrast tokens
- `index.html` — noscript fallback update, LCP preload
- `src/pages/BlogPost.tsx` data + new post entry for comparative review
- `public/llms.txt`
- Mark SEO findings via `update_findings`

## Out of scope (flag if you want them next)

- Lovable Cloud + Resend edge function as a second email backup
- Off-site work (Reddit seeding, HARO, guest posts) — code can't do these
- GSC OAuth connection (needs your click)