

# Fix Region/University Page Redirects + Add SoftwareApplicationSchema to Tools

## Root Cause of Redirects

Both `RegionLanding.tsx` and `UniversityLanding.tsx` use `useParams()` to extract a `region` parameter, but the routes in `App.tsx` are hardcoded paths (`/uk`, `/us`, `/au`, `/ca`) without a `:region` param:

```text
Route: /uk                → useParams() = {}           → region = undefined → REDIRECT
Route: /uk/:university    → useParams() = {university}  → region = undefined → REDIRECT
```

Every region and university page immediately redirects to `/` because `region` is always `undefined`.

## Fix

**RegionLanding.tsx** and **UniversityLanding.tsx**: Replace `useParams` region extraction with `useLocation().pathname` parsing. The university param from `useParams` still works fine since `/:university` IS in the route pattern.

## Changes

### 1. Fix `src/pages/RegionLanding.tsx`
- Replace `const { region } = useParams()` with extracting region from `useLocation().pathname.split('/')[1]`
- This makes `/uk` → region = "uk", `/au` → region = "au", etc.

### 2. Fix `src/pages/UniversityLanding.tsx`
- Replace `const { region, university } = useParams()` with:
  - `region` from `useLocation().pathname.split('/')[1]`
  - `university` still from `useParams()` (works fine since `/:university` is in path)

### 3. Add SoftwareApplicationSchema to all 17 tool pages
Each tool page already has a `ToolSchema` (WebApplication). Adding `SoftwareApplicationSchema` alongside it for richer structured data. Tool pages:
- CitationGeneratorPage, ChapterPlannerPage, ThesisBuilderPage, DeadlineCheckerPage
- WordCounterPage, QuoteCalculatorPage, ResearchQuestionValidatorPage
- PersonalizationQuizPage, DIYComparisonCalculatorPage, OutlineGeneratorPage
- MethodologySelectorPage, LiteratureSearchPage, PRISMAFlowPage
- ReferenceManagerPage, GlossaryQuizPage, GlossaryFlashcardsPage, AIPolicyCheckerPage

### 4. Update `public/sitemap.xml`
- Update all `lastmod` dates for region and university pages to `2026-03-04`

### Files Modified
| File | Change |
|------|--------|
| `src/pages/RegionLanding.tsx` | Fix region extraction from pathname |
| `src/pages/UniversityLanding.tsx` | Fix region extraction from pathname |
| 17 tool pages in `src/pages/tools/` | Add SoftwareApplicationSchema import and component |
| `public/sitemap.xml` | Update lastmod dates |

