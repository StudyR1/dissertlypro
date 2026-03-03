

# Plan: Create "Dissertation Writing Services" Pillar Page

## Overview

Create a new high-authority commercial pillar page at `/dissertation-writing-services` targeting the primary keyword "dissertation writing services" and secondary variations. This is a NEW page -- not a replacement for the existing `/dissertation-writing` informational guide.

## What Will Be Built

A ~2200-word conversion-optimized pillar page with:
- Strong H1 targeting "Dissertation Writing Services"
- 9 content sections with proper H2/H3 hierarchy
- 10 SEO-optimized FAQs with FAQ schema for featured snippets
- Natural keyword integration (no stuffing)
- CTAs woven throughout (consultation, order)
- Trust signals (stats, guarantees, process clarity)
- Internal links to existing pages (literature review guide, research methodology, dissertation structure, etc.)

## Files to Create/Modify

### 1. New file: `src/pages/DissertationWritingServices.tsx`
The full pillar page component containing:

**SEO metadata:**
- Title: `Dissertation Writing Services | Expert PhD Support`
- Description: `Professional dissertation writing services for Master's & PhD students. Expert guidance, 100% original work, unlimited revisions. Get matched with a PhD expert today.`
- Canonical: `/dissertation-writing-services`
- Schemas: BreadcrumbSchema, FAQSchema, ServiceSchema, AggregateRatingSchema, HowToSchema

**Content sections (H2 hierarchy):**
1. Hero with H1: "Dissertation Writing Services — Expert Support for Every Chapter"
2. "Why Students Seek Professional Dissertation Support" -- addresses pain points (time pressure, methodology confusion, isolation, language barriers)
3. "How Our Dissertation Writing Service Works" -- 4-step process with HowTo schema
4. "Subjects and Academic Levels We Cover" -- grid of disciplines, Master's + PhD
5. "Quality Assurance and Revision Policy" -- guarantees, plagiarism screening, unlimited revisions
6. "Confidentiality and Plagiarism Protection" -- GDPR, encryption, originality
7. "Transparent Pricing and Value" -- no hidden fees, payment plans, ROI framing
8. "Frequently Asked Questions" -- 10 FAQs targeting long-tail variations ("can someone write my dissertation", "how much does dissertation help cost", etc.)
9. Final CTA section

**Internal links naturally placed throughout:**
- `/literature-review-guide`
- `/research-methodology`
- `/dissertation-structure`
- `/services/data-analysis`
- `/services/editing`
- `/services/thesis-writing`
- `/consultation`
- `/pricing`
- `/ethics`

### 2. Modify: `src/App.tsx`
- Add lazy import for `DissertationWritingServices`
- Add route: `/dissertation-writing-services`

### 3. Modify: `public/sitemap.xml`
- Add `/dissertation-writing-services` entry with current date

### 4. New FAQs in page component (not in serviceFAQs.ts since this is a standalone pillar page)
10 FAQs targeting search queries:
- "What are dissertation writing services?"
- "Is it ethical to use a dissertation writing service?"
- "Can someone write my dissertation for me?"
- "How much do dissertation writing services cost?"
- "How do I choose a reliable dissertation service?"
- "Will my dissertation pass Turnitin?"
- "What subjects do you cover?"
- "How long does it take to complete a dissertation?"
- "Can you help with just one chapter?"
- "What guarantees do you offer?"

## Design Approach
- Follows existing page patterns (Layout, SEO, motion animations, Card components)
- Uses the same copper/midnight color scheme and typography
- FloatingOrderButton included
- Mobile-responsive grid layouts matching Services and ServiceDetail pages

