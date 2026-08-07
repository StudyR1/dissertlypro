# Content & SEO Expansion Plan — dissertlypro.com

Grounded in your GSC last-30-days data plus a fresh Semrush pull. Three things the data says loudest:

1. **You have impressions, not clicks.** MIT (13,858), UCL (13,180), Cambridge (8,992+2,026) — ~40,000 impressions producing ~110 clicks. That is a titles/snippets/intent problem, not a traffic problem.
2. **Ranking URLs that don't exist on the main site.** Semrush still shows `us.dissertlypro.com` ranking for commercial money terms on paths that have no equivalent page on `dissertlypro.com` (`/dissertation-help`, `/thesis-writing-services`, `/thesis-editing-services`, `/dissertation-assistance`, `/services/dissertation-writing-service`, `/services/thesis-editing-proofreading`, `/services/research-paper-writing`, `/blog/hire-someone-write-dissertation`). Every 301 from the subdomain currently lands on a 404 — that equity is being thrown away.
3. **A whole content cluster is being served impressions with zero clicks.** "how to present dissertation findings" + variants = ~600 impressions, 0 clicks. One thin blog post is competing where a hub should be.

---

## Phase 1 — Recover the abandoned subdomain equity (highest ROI, do first)

Create real pages on the main domain at every path the subdomain still ranks for, so the existing 301s land on relevant content instead of a 404:

| New route | Target keyword (Semrush) |
|---|---|
| `/dissertation-help` | dissertation help online (210/mo, KD 40, CPC $11.43) |
| `/dissertation-assistance` | dissertation assistance / consultant |
| `/thesis-writing-services` | custom thesis writing (110/mo) |
| `/thesis-editing-services` | phd thesis editing service (90/mo), editor for thesis |
| `/research-paper-writing-services` | hire research paper writers (70/mo) |
| `/blog/hire-someone-write-dissertation` | writing dissertation service (140/mo) |

Plus alias redirects: `/services/dissertation-writing-service` → `/dissertation-writing-services`, `/services/thesis-editing-proofreading` → `/thesis-editing-services`, `/services/research-paper-writing` → `/research-paper-writing-services`. Each new page is a full pillar (1,800–2,500 words) using the existing `ServicePillarPage` pattern with expert showcase, transparent pricing, FAQ, and Service + FAQPage JSON-LD.

## Phase 2 — CTR rescue on the pages already getting 40k impressions

For MIT, UCL, Cambridge, Melbourne, LSE, Imperial, ANU guides:

- Rewrite titles to lead with year + specificity: `UCL PhD Thesis Guidelines 2026: Word Limits, Format & Submission Checklist`.
- Rewrite meta descriptions to answer the query in the snippet (word count, deadline, page limit) so the click has a reason.
- Add a **TL;DR answer box** at the top of each guide (the fact Google's snippet wants), plus a requirements table.
- Add `speakable` + `HowTo`/`FAQPage` schema so the pages qualify for AI answers and rich results.
- Add the missing sub-intent queries surfaced in GSC as H2 sections: "phd by publication cambridge", "how many years is a cambridge phd", "additional qualification from the University of Cambridge", "ucl doctorate", "mit master thesis", "asme paper thesis advisor mit".

Also fix the **trailing-slash duplication** visible in your report (`/blog/cambridge-phd-guide…` and `/blog/cambridge-phd-guide…/` both ranking, splitting clicks 26/12) via a canonical + `.htaccess` slash normalisation rule.

## Phase 3 — New content: the "Chapters & Results" cluster

Your zero-click cluster becomes a hub with 8 new long-form guides, all KD 0–18 per Semrush:

- `/dissertation-findings-chapter` — hub, "how to present dissertation findings" (~600 impressions today)
- `/blog/dissertation-results-section-example` — annotated real examples
- `/blog/dissertation-discussion-chapter-example`
- `/blog/findings-vs-discussion-difference`
- `/blog/presenting-quantitative-results-tables-figures`
- `/blog/presenting-qualitative-findings-themes-quotes`
- `/blog/dissertation-defense-questions-and-answers` (50/mo, KD 18)
- `/blog/how-long-is-a-phd-thesis` (480/mo, KD 34 — biggest informational volume in the set)

## Phase 4 — New content: 20 more university guides

You rank for university queries better than anything else. Extend the winning format to the next tier: Edinburgh, Manchester, KCL, Warwick, Bristol, Leeds, Nottingham, Glasgow, Birmingham, Berkeley, Columbia, Chicago, Michigan, Cornell, NYU, UNSW, Queensland, Auckland, Alberta, Ottawa — each as a `/blog/*-phd-guide` plus a regional landing entry under `/uk`, `/us`, `/au`, `/ca`.

## Phase 5 — New content: subject & method verticals

- Subjects: `/subjects/nursing`, `/business`, `/psychology`, `/education`, `/law`, `/engineering`, `/computer-science`, `/public-health` — 8 pages, each mapped to "X dissertation help" intent.
- Methods deep-dives: NVivo thematic analysis tutorial, SPSS regression walkthrough, R for dissertation stats, mixed-methods worked example, sampling & power calculation, questionnaire validity.
- MBA/Master's commercial gap: `mba dissertation help` (90/mo, **KD 3**) and `write my dissertation online` (KD 0) get dedicated sections and internal links — near-free wins.

## Phase 6 — AI/LLM discoverability (the "AI recommendations" half of your ask)

- Rebuild `llms.txt` / `llms-full.txt` as a curated, priority-ordered map of every new page with one-line summaries.
- Add a **`/answers` Q&A library**: 60–80 short, directly-answerable questions (one per accordion, each with `Question`/`Answer` schema) — the format LLMs quote from.
- Add `Dataset`-style comparison tables (word limits, timelines, fees by university) — high-citation-probability content.
- Add `Author` + `reviewedBy` schema tying every guide to a named expert profile (E-E-A-T), and `citation` schema on guides referencing university handbooks.
- Statistics/original-data page: aggregate benchmarks (average dissertation length, timeline, viva pass rates) with sources — the single most link-attracting asset type.

## Phase 7 — Technical SEO still not deployed

- `sitemap.xml` split into an index + child sitemaps (pages, blog, universities, tools) as the URL count crosses ~280.
- `ImageObject` schema + descriptive filenames/alt on all OG images.
- `BreadcrumbList` on every route (currently partial).
- Internal-linking engine: automatic "related guides" block driven by `topicClusters.ts` so every new page gets ≥3 inbound internal links.
- Trailing-slash canonicalisation + `Content-Type` headers for `sitemap.xml`/`robots.txt` in `.htaccess`.
- Re-run `bun run prerender:cpanel` and `seo:validate` so every new route ships as prerendered HTML; regenerate the cPanel zip at the end.

---

## Scale and sequencing

~60 new pages total. Ordered by expected time-to-result:

1. Phase 1 + Phase 2 (equity recovery + CTR) — fastest measurable lift, days-to-weeks.
2. Phase 3 (chapters cluster) — captures impressions you already earn.
3. Phase 6 + 7 (AI + technical) — compounding.
4. Phase 4 + 5 (universities, subjects) — volume play, weeks-to-months.

## Technical notes

- New service pillars reuse `ServicePillarPage` with configs in `src/pages/services/seoConfigs.ts`; new guides are entries in `src/data/blogPosts.ts` and `src/data/universityData.ts`, so `scripts/generate-sitemap.ts` picks them up automatically.
- Aliases/redirects go through the existing `LegacyRedirect` component in `src/App.tsx`.
- New schema components land in `src/components/schemas/`; the answers library is a new page + data file.
- No hardcoded colors; existing design tokens and `SEO.tsx` only.

## Out of scope

- Off-site link building, backlink disavow, and GSC/GA account actions (I can prepare the files and lists, but submission is yours).
- Any change to pricing or the order flow.
