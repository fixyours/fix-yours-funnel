FixYours — Updated Site — Local Preview & Notes
==================================================

WHAT THIS IS
This is the updated fixyours.net — 16 pages, plain static HTML/CSS/JS
(no build step, no framework required). This folder is a LOCAL COPY ONLY.
Per your instructions, nothing in this batch has been pushed to GitHub —
it's sitting on your Desktop for you to review first.

FOLDER STRUCTURE
  index.html                          Home
  services/index.html                 Services hub
  services/<service-slug>/index.html  5 individual service pages
  industries/index.html               Industries hub
  industries/<slug>/index.html        3 individual industry pages
  about/index.html                    About
  how-it-works/index.html             How It Works (process, transparency, case studies note)
  reviews/index.html                  Reviews (honest placeholder — no fake testimonials)
  faq/index.html                      FAQ
  contact/index.html                  Contact / Book a Call
  css/site.css                        Shared styles (one file, all pages)
  js/site.js                          Shared behaviour (nav, scroll reveal)
  assets/                             Logo, founder photo, favicons, OG image
  assets/video/                       Background videos + poster frames (home, solar, real estate)
  robots.txt, sitemap.xml             SEO basics

HOW TO PREVIEW LOCALLY
Because pages link to each other with root-relative paths (e.g. /services/,
/css/site.css), double-clicking index.html will NOT work correctly — the
browser will fail to load the CSS, nav links and videos. Instead, run a
tiny local web server from inside this folder:

  1. Open Terminal.
  2. cd into this folder, e.g.:
       cd ~/Desktop/fixyours-updates-final
  3. Run:
       python3 -m http.server 8000
  4. Open this in your browser:
       http://localhost:8000/
  5. When you're done, go back to Terminal and press Control+C to stop
     the server.

(Mac ships with python3 already installed, so no extra install is needed.)

WHAT TO CHECK
- Home (/) — new hero: badge "Growth Marketing & Automation", the line
  "For businesses ready to grow", headline "More Leads. Better Marketing.
  Real Growth.", and the background video playing behind it.
- Nav bar (any page) — flat bar: Home, About, Services, How It Works,
  Reviews, FAQ, Contact. Check it on mobile width too (menu icon, top right).
- Services (/services/) — now 5 services instead of 7. "Marketing
  Automation & CRM" merges the old AI Automation / CRM / Business Growth
  Systems pages (GoHighLevel is never named — it's described functionally:
  automated follow-up, lead nurturing, appointment booking). "Content
  Strategy & Creative" replaces "AI Video & Content."
- Industries (/industries/solar/ and /industries/real-estate/) — background
  video behind the page header on both.
- How It Works (/how-it-works/) — the old "Work" page content, repositioned
  under the new nav item.
- Reviews (/reviews/) — intentionally honest: no invented testimonials,
  ratings or client names. Explains what will go there once real, confirmed
  reviews come in.
- FAQ (/faq/) — new page, expandable questions.
- Footer (any page) — tagline "We deliver growth." and the founder credit
  "Ali Aghadi, Founder and Growth Strategist."
- Contact (/contact/) — email links now point to admin@fixyours.net
  (replacing the old hello@fixyours.net everywhere on the site).
- Logo — replaced site-wide, including the nav bar, footer, and favicons/
  browser tab icon.

WHAT CHANGED IN THIS UPDATE
- Navigation simplified to a single flat bar (no dropdowns): Home, About,
  Services, How It Works, Reviews, FAQ, Contact.
- New homepage hero copy and a looping background video.
- Every hello@fixyours.net reference replaced with admin@fixyours.net.
- Logo replaced site-wide (nav, footer, favicons, social preview image).
- Services restructured from 7 down to 5: "AI Automation," "CRM &
  GoHighLevel" and "Business Growth Systems" are now one page,
  "Marketing Automation & CRM" — GoHighLevel is never named, only
  described by what it does. "AI Video & Content" is renamed "Content
  Strategy & Creative."
- Background videos added: homepage hero, Solar industry page, Real
  Estate industry page — each with a poster image fallback and a dark
  overlay so text stays readable.
- The old standalone "/work/" page has been folded into the new
  "/how-it-works/" page (same content, new nav position). "/reviews/"
  and "/faq/" are brand-new pages.
- Still no fake testimonials, stats, client names or case studies
  anywhere — Reviews and How It Works are both honest about results
  being added over time as they're real and confirmed.

NOT DONE YET / NOTHING PUSHED
- This batch has NOT been pushed to GitHub or deployed to Netlify — it's
  local only, waiting on your review.
- The background videos were AI-generated stock-style clips; a small
  watermark was found and cropped out of all three, and one (the solar
  clip) has some van signage in it that's worth a quick look in case you'd
  rather swap that clip out.
- The Meta Pixel ID and Calendly link were carried over unchanged
  (ID 4557836291208199, calendly.com/aliaghadi/30min).
