

# Comprehensive SEO Audit and Fix Plan

## Issues Found

### 1. CRITICAL: Canonical URL Inconsistency (Causing Redirects in GSC)

**The #1 cause of your redirect issues.** There are two conflicting patterns for the `canonical` prop across pages:

- **Pattern A (correct):** Relative path like `canonical="/services"`, `canonical="/blog"` -- the SEO component prepends `https://dissertlypro.com`
- **Pattern B (broken):** Full URL like `canonical="https://dissertlypro.com/thesis-topic-selection"` -- the SEO component ALSO prepends `https://dissertlypro.com`, resulting in `https://dissertlypro.comhttps://dissertlypro.com/thesis-topic-selection`

**55+ pages** use the broken full-URL pattern. This produces malformed canonical tags, confusing Google into redirect chains.

**Fix:** Normalize ALL pages to use relative paths (Pattern A).

### 2. CRITICAL: Sitemap URL Mismatch with Routes

- Sitemap lists `/citing-ai` but the actual route is `/citing-ai-guide`
- Sitemap lists `/quick-checkout` but the actual route is `/quick-services/checkout`
- Google crawls the sitemap URLs, gets 404/SPA fallback, causing phantom redirects

**Fix:** Correct sitemap URLs to match actual routes.

### 3. Missing Pages from Sitemap

These routed pages are completely absent from sitemap.xml:
- `/tools/glossary-quiz`
- `/tools/glossary-flashcards`
- `/glossary`

**Fix:** Add these URLs to the sitemap.

### 4. MobileOptimizedSEO Component: Broken hreflang Tags

The `MobileOptimizedSEO` component generates incorrect hreflang URLs by doing `url.replace('.com', '.com/uk')`, which turns `https://dissertlypro.com/some-page` into `https://dissertlypro.com/uk/some-page` -- pages that don't exist (only `/uk`, `/us`, `/au`, `/ca` are regional landing pages, not variants of every page). However, this component is **never imported anywhere**, so it's dead code causing no harm currently but should be removed.

### 5. Duplicate Hreflang on Non-Regional Pages

The main `SEO.tsx` component adds `<link rel="alternate" hrefLang="en" href={fullUrl} />` on ALL pages. This is fine, but combined with the homepage/regional logic, it creates redundant declarations for the homepage.

### 6. Missing Structured Data Gaps

- **No `SoftwareApplication` schema** on tool pages (citation generator, word counter, etc.) -- these qualify for rich results in Google
- **No `ItemList` schema** on hub/listing pages (Services, Tools Hub, Resources, Universities Hub) for potential carousel rich results
- **No `Glossary`/`DefinedTermSet` schema on `/glossary` page** (DefinedTermSetSchema exists but may not be used on the glossary page itself)

### 7. Missing `og:image:alt` on Dynamic Pages

The `index.html` has `og:image:alt` but the `SEO.tsx` component does not output `og:image:alt` for any page. Social platforms and accessibility tools benefit from this.

### 8. Stale `lastmod` Dates in Sitemap

Many pages still show `2026-01-17` or `2026-01-18`. These should be updated to reflect actual content changes, especially after the recent homepage and feature updates.

---

## Implementation Plan

### Step 1: Fix Canonical URLs (55+ pages)
Normalize all `canonical` props from full URLs to relative paths across all page files. This is the highest-impact fix and will resolve the majority of Google Search Console redirect warnings.

Pages to fix include: `ThesisTopicSelection`, `ThesisStructure`, `InternationalStudents`, `SPSSTutorial`, `DissertationStructure`, `DissertationWriting`, `IRBEthicsGuide`, `MentalHealthHub`, `InternationalPhD`, `MastersThesisGuide`, `MastersDefense`, `CitingAIGuide`, `AIDetectionGuide`, `AIAcademiaHub`, `AILiteratureReview`, `MixedMethodsResearch`, `DataVisualization`, `SystematicLiteratureReview`, `NVivoTutorial`, `CommitteeConflicts`, `DeadlinesDeferrals`, `SupervisorGuide`, `PhDFunding`, `AcademicNetworking`, `PhDPublishing`, `PhDIndustry`, `CandidacyExams`, `ResearchMethodology`, `LiteratureReviewGuide`, `CommitteeCommunication`, `AcademicWriting`, `ResearchQuestions`, `CitationMastery`, `QualitativeAnalysis`, `LimitedSupervision`, `CourseworkToThesis`, `AcceleratedMasters`, `DissertationVsThesis`, `InternationalStudents`, all tool pages using full URLs, and the `AIPolicyCheckerPage`.

### Step 2: Fix Sitemap Mismatches
- Change `/citing-ai` to `/citing-ai-guide` in sitemap
- Change `/quick-checkout` to `/quick-services/checkout` in sitemap
- Add missing pages: `/tools/glossary-quiz`, `/tools/glossary-flashcards`, `/glossary`
- Update all `lastmod` dates to `2026-02-09`

### Step 3: Add `og:image:alt` to SEO Component
Add `og:image:alt` meta tag to `src/components/SEO.tsx` using the page title as fallback alt text.

### Step 4: Add SoftwareApplication Schema for Tools
Create a new `SoftwareApplicationSchema.tsx` component and apply it to tool pages (citation generator, word counter, etc.) for potential rich results.

### Step 5: Add ItemList Schema for Hub Pages
Create an `ItemListSchema.tsx` component for listing/hub pages (Services, Tools Hub, Resources, Universities Hub) to enable Google carousel snippets.

### Step 6: Remove Dead MobileOptimizedSEO Component
Delete `src/components/seo/MobileOptimizedSEO.tsx` since it's unused and contains broken hreflang logic that could cause issues if ever imported.

### Step 7: Fix CitingAIGuide Internal Links
The `CitingAIGuide` page sets `canonical="/citing-ai"` (after Step 1 fix) but its route is `/citing-ai-guide`. The canonical should match the route: `/citing-ai-guide`. Also fix internal links pointing to `/citing-ai` to use `/citing-ai-guide`.

### Step 8: Update Sitemap Dates
Refresh all `lastmod` dates to reflect actual recent changes.

---

## Technical Details

### Files Modified

| File | Change |
|------|--------|
| 55+ page files in `src/pages/` | Fix canonical from full URL to relative path |
| `src/components/SEO.tsx` | Add `og:image:alt` meta tag |
| `public/sitemap.xml` | Fix URL mismatches, add missing pages, update dates |
| `src/components/seo/MobileOptimizedSEO.tsx` | Delete (dead code) |
| `src/pages/CitingAIGuide.tsx` | Fix canonical to `/citing-ai-guide` |
| `src/pages/AIAcademiaHub.tsx` | Fix link from `/citing-ai` to `/citing-ai-guide` |
| `src/pages/AIDetectionGuide.tsx` | Fix link from `/citing-ai` to `/citing-ai-guide` |
| `src/pages/tools/AIPolicyCheckerPage.tsx` | Fix link from `/citing-ai` to `/citing-ai-guide` |
| `src/lib/ogImages.ts` | Fix path check for citing-ai-guide |
| New: `src/components/schemas/SoftwareApplicationSchema.tsx` | Schema for tool pages |
| New: `src/components/schemas/ItemListSchema.tsx` | Schema for hub/listing pages |
| Select tool pages | Add SoftwareApplicationSchema |
| Select hub pages | Add ItemListSchema |

### Expected Impact
- Eliminates redirect warnings in Google Search Console
- Fixes 55+ malformed canonical tags
- Adds missing pages to Google's index via sitemap
- Enables rich results for tools (SoftwareApplication) and listings (ItemList)
- Improves social sharing with proper image alt text
- Removes confusing dead code

