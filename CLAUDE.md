# CLAUDE.md — Creativals Website (SEO Project Context)

This file gives Claude Code permanent context for all work on this repository.
It is part of an ongoing SEO program (Phases 0–5). Follow these rules in EVERY session.

## What this project is
The Creativals agency website (https://creativals.com) — currently a Vite + React
client-side SPA being upgraded for SEO: prerendered HTML, structured data, Core Web
Vitals, and on-page optimization across ~50 routes (homepage, ~30 /services/:slug
pages, 8 /industries/:slug pages, /about-us, contact, and others).

## Business facts — use EXACTLY these, never invent data
- **Name:** Creativals
- **Address:** B 609, B-Block, Asian Sun City, Behind AMB Mall, Forest Dept Colony,
  Kothaguda X Road, Kondapur, Hyderabad, Telangana 500084
  - streetAddress: "B 609, B-Block, Asian Sun City, Behind AMB Mall, Forest Dept Colony, Kothaguda X Road, Kondapur"
  - addressLocality: "Hyderabad" · addressRegion: "Telangana"
  - postalCode: "500084" · addressCountry: "IN"
- **URL:** https://creativals.com
- **Social (sameAs):**
  - https://www.instagram.com/creativals.agency/
  - https://www.facebook.com/people/Creativalsagency/61560510279989/
  - https://www.linkedin.com/company/creativals-digital-marketing-agency/
  - https://www.youtube.com/@creativalsagency
- **Phone:** NOT finalized. Use the TODO_PHONE constant in the central org config.
  Never invent a phone number.
- All org data lives in ONE central config file — update there only, never inline.

## Content policy (STRICT — applies to all content and code changes)
1. NEVER publish client revenue, payment amounts, profit, or internal business data.
   Only percentage improvements, traffic growth, and lead-generation results where
   client permission exists.
2. NEVER add placeholder, fictional, or unverified case studies or client names
   (previously removed: Royal Palm Resorts, Pinnacle Academy, City Dental, etc.).
   If a case-studies section has zero verified entries, keep it hidden (not rendered,
   not in nav, not in sitemap).
3. Never fabricate reviews, ratings, statistics, testimonials, or credentials.

## SEO conventions for all code changes
- Priority services (in order): Custom Website Development, E-commerce Development,
  Web Application Development, UI/UX Design, SEO, Google Ads (PPC), Branding,
  AI Automation & Chatbots, CRM & Automation, Website Maintenance.
- Every page must have: unique <title> (≤60 chars), unique meta description
  (≤155 chars), exactly one H1, canonical tag, and its JSON-LD in the raw HTML source.
- Schema in use: Organization + LocalBusiness (ProfessionalService) on homepage;
  Service on service pages; BreadcrumbList sitewide; FAQPage only where a real FAQ
  block exists. Do NOT add Review/AggregateRating or Person schema yet (deferred).
- Sitemap.xml is auto-generated from the router at build time — never hand-edit it.
  If routes change, the build script handles the sitemap.
- Any new public route must: be in the sitemap, have full meta + schema, and return
  real prerendered HTML (once SSG is live).
- Performance targets: LCP < 2.5s, INP < 200ms, CLS < 0.1. Prefer WebP/AVIF images,
  lazy-load below-fold media, code-split routes.
- Never remove or break canonical tags, meta tags, schema, redirects, or the sitemap
  script when making unrelated changes.

## Workflow
- Commit after each completed task with a clear message.
- End significant sessions with a summary: what changed, validation results, and
  anything needing human review — this gets reported back to the SEO tracking chat.
