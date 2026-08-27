FixYours — New Site — Deploy Instructions
==========================================

WHAT THIS IS
This is the full redesigned/restructured fixyours.net — 16 pages built as
plain static HTML/CSS/JS (no build step, no framework required). It's the
same tech stack as your current site (works with Netlify exactly like
before), just organised into proper pages instead of one giant file.

FOLDER STRUCTURE
  index.html                          Home
  services/index.html                 Services hub
  services/<service-slug>/index.html  7 individual service pages
  industries/index.html               Industries hub
  industries/<slug>/index.html        3 individual industry pages
  about/index.html                    About
  work/index.html                     Work & Approach
  contact/index.html                  Contact / Book a Call
  css/site.css                        Shared styles (one file, all pages)
  js/site.js                          Shared behaviour (nav, scroll reveal)
  assets/                             Logo, founder photo, favicons, OG image
  robots.txt, sitemap.xml             SEO basics

HOW TO DEPLOY (no GitHub CLI / git needed)
1. Go to https://github.com/fixyours/fix-yours-funnel
2. Click "Add file" -> "Upload files"
3. Drag every file/folder from this zip into the uploader, keeping the
   folder structure intact (GitHub's uploader preserves folders when you
   drag a whole folder in from Finder/Explorer).
4. IMPORTANT: delete the old root-level index.html content first (or just
   let this upload overwrite it — the new index.html replaces it).
5. Commit directly to the main branch.
6. Netlify will auto-deploy from main, same as before — live at
   fixyours.net within a minute or two.

WHAT CHANGED FROM THE OLD SITE
- No more "$1,500 / 15 leads" anywhere — every CTA now points to a free
  strategy call instead of a fixed offer.
- Repositioned from "solar lead-gen" to "AI-powered marketing, automation
  & growth" — solar and real estate are now dedicated industry pages,
  not the whole identity.
- 7 dedicated service pages (Lead Generation, Meta Ads & Digital
  Marketing, AI Automation, AI Video & Content, Real Estate Video,
  CRM & GoHighLevel, Business Growth Systems).
- 3 dedicated industry pages (Solar, Real Estate, Other Service
  Businesses).
- New About, Work/Approach and Contact pages.
- No fake testimonials, stats, client names or case studies anywhere —
  the Work page is honest about results being added over time.
- Dropped the ~717KB embedded hero video for a lightweight CSS/animated
  background — the whole site now totals well under 1MB before images,
  and every page loads instantly.
- Logo and founder photo are now real image files (not inlined base64),
  so they load once and are cached across every page.
- Proper SEO: unique title/meta description per page, one H1 per page,
  alt text on every image, sitemap.xml, robots.txt, Open Graph tags.

THINGS WORTH YOUR INPUT
- The logo icon (the roof/solar-panel glyph) is still solar-themed. I
  left it as-is since you said to keep the existing brand identity, but
  now that FixYours is positioned more broadly, you may want a version
  of the mark that isn't solar-specific — happy to design one if wanted.
- The Meta Pixel ID and Calendly link were carried over unchanged from
  the old site (ID 4557836291208199, calendly.com/aliaghadi/30min).
- The "Work" page has placeholder structure for case studies — add real
  ones there as engagements complete, following the pattern already on
  the page.
