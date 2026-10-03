# CLAUDE.md

Marketing site + blog + lead admin for **Adiel Cohen, Israeli mortgage advisor** (https://adiel-cohen.co.il).
Hebrew-only, RTL (`<html lang="he" dir="rtl">`). Primary goal of the site: get visitors to leave a lead (contact form / WhatsApp / phone).

## Stack
- Next.js 15 (App Router, Turbopack in dev), React 19, TypeScript
- Tailwind CSS v4 (`@theme` in `app/globals.css`, no tailwind.config), shadcn/ui (Radix) in `components/ui`, `tailwindcss-animate`
- framer-motion for animations (`components/animations/*`), lucide-react icons, sonner toasts
- MongoDB via mongoose (`server/connect.ts`, models in `server/*/`), images on Cloudinary (`next-cloudinary`, `res.cloudinary.com` allowed in `next.config.ts`)
- next-auth v5 beta (Google provider) guarding `/admin`; admin emails are hardcoded in `auth.ts`
- nodemailer for lead emails (`actions/emails.ts`), react-hook-form + zod for forms
- Heebo font via `next/font/google`; Google Analytics via `@next/third-parties`
- Accessibility widget "Nagishli" loaded from `public/nagishli_v3_beta/` (Israeli legal requirement, keep it)
- Deploy: Netlify (`netlify.toml`, `@netlify/plugin-nextjs`); redirects www and netlify.app to apex `adiel-cohen.co.il`
- Package manager: pnpm lockfile present (`package.json` scripts are plain `next`)

## Commands
```
pnpm dev      # next dev --turbo
pnpm build    # next build (ESLint ignored during builds; TS errors are NOT)
pnpm start
pnpm lint
```
No test suite. Verify changes with `pnpm build` and, for perf/SEO, Lighthouse against a production build (`pnpm build && pnpm start`), not dev.

## Env vars (`.env`, never commit or print values)
`MONGODB_URI` (required, throws on import if missing), `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`, `AUTH_SECRET`, Google OAuth ids, `REVALIDATE_TOKEN`, Cloudinary and SMTP creds.
Because `connectToDatabase` throws at import, any page/route importing a model needs the DB at build time (`generateStaticParams`, `sitemap`).

## Routes
Public (`app/(guest)/`, wrapped with `Navbar` by `(guest)/layout.tsx`):
- `/` home: Hero, About, Steps, Testimonials, Contact (lead form), LatestBlogs (Suspense, `unstable_cache` 1h, tag `posts`)
- `/services`, `/calc` (mortgage calculator, `components/ui/calc.tsx`), `/news` (flash news), `/restore` (refinance/restore page)
- `/blog`, `/blog/[slug]` (DB-backed, `generateStaticParams`, `generateMetadata`), `/leads` (public lead landing), `/login`
Admin (`app/admin/`, protected by `middleware.ts` -> `auth`): blogs, flash, leads CRUD.
API: `/api/auth/*`, `/api/lead` (STUB, only validates email, saves nothing), `/api/revalidate` (Bearer token).
Metadata routes: `app/sitemap.ts` (force-dynamic, reads blogs from DB), `app/robots.ts`, `app/manifest.ts`.

## Layout of code
- `app/layout.tsx` root layout: metadata defaults, JSON-LD, Nagishli scripts, Footer, WhatsApp float, GA
- `components/ui/*` sections AND shadcn primitives mixed together; `components/layout/*` navbar/footer; `components/leads/*` admin lead table
- `lib/data/*` static content (services, testimonials, about, contact, nav links). `blogs.ts` / `blogs-gemini.ts` are seed/legacy data
- `actions/*` server actions (blog, contact, flash, lead, emails); `server/*` mongoose models

## Design system (see `app/globals.css`)
- Brand: gold `--color-brand-gold` rgb(224,185,101) / `-dark`, dark slate (`slate-900`) backgrounds, warm off-white `hsl(40,33%,96%)`
- Utility classes: `container-main`, `section-padding`, `text-h1..h4`, `text-body`, `card-elevation`, `gradient-gold`
- Recent git history: "change to darkmode", "design", "change design" (branch `design`). Design is mid-iteration; keep new work consistent with the dark-slate + gold direction unless the user says otherwise.

## Conventions
- All user-facing copy is Hebrew. Keep RTL in mind: use logical properties (`ms-`/`me-`/`ps-`/`pe-`, `text-start`) rather than left/right where possible; arrow icons point LEFT for "forward".
- Server components by default; add `"use client"` only for interactivity/animation.
- Use `next/image` for all images; use `@/` path alias.
- Do not add unrelated dependencies; do not commit `.env`.

## Improvement project (current focus, in priority order)
1. **SEO + Lighthouse score**
2. **User experience**
3. **UX/UI design**

### Known issues found during initial read (candidates, not yet fixed)
SEO / structured data
- `app/layout.tsx` WebSite JSON-LD is invalid JSON (`"url": ${...}` is unquoted) and uses `next/script beforeInteractive`; replace with a `<script type="application/ld+json">` with `JSON.stringify`. Add `Organization`/`FinancialService`/`LocalBusiness` + `Person` (Adiel), `Article` on blog posts, `BreadcrumbList`, `FAQPage` where there is FAQ content.
- `canonical: '/'` is set in the root layout, so inner pages inherit the homepage canonical unless they override it. Each page needs its own `alternates.canonical`.
- Blog `generateMetadata` lacks canonical, `publishedTime`, `twitter` card, and uses wrong OG image size; `/services`, `/calc`, `/news`, `/restore`, `/leads` metadata should be reviewed (unique title/description each).
- `robots.ts` sitemap URL has no fallback if `NEXT_PUBLIC_SITE_URL` is unset; sitemap uses `lastModified: new Date()` and `changeFrequency: daily` for every post (use `updatedAt`); `/leads` and `/login` indexability should be decided.
- OG image is `/front.webp` (verify real 1200x630). PWA manifest uses one webp as a 512x512 icon, theme color `#2563eb` does not match brand gold/slate.
- Blog body is rendered as plain text with `whitespace-pre-line` (no headings/semantic markup, no TOC); `prose` classes need `@tailwindcss/typography` which is not installed.
- No `generateStaticParams`-friendly `revalidate` strategy on blog pages (check ISR vs dynamic).

Performance / Lighthouse
- `public/_DSC89xx.webp` are ~3.3-3.6 MB each (6 files). Verify where they are used; resize/compress, or serve through `next/image` with proper `sizes`.
- `framer-motion` is used in Hero/Navbar (above the fold, client components) which hurts LCP/TBT; consider CSS animations for hero, `LazyMotion`, or removing the header slide-in. Hero text is wrapped in `FadeIn` (opacity 0 initially, delays up to 0.8s) which delays LCP.
- Nagishli accessibility script + GA load on every page; keep Nagishli but load lazily (`lazyOnload`) where legally acceptable. Hero `<Image>` has no `sizes`.
- `ac-logo.jpg`, `adiel-cohen.jpg`, `union.png` are unoptimized formats; unused default files (`next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg`) can be removed. `.agent/`, `.cursor/`, `.windsurf/` skill folders are committed but irrelevant to the site.
- `connectToDatabase` logs on every call (noisy in prod).

UX
- Navbar is transparent with light text until scroll, but only the home hero is dark; inner pages with light backgrounds risk unreadable nav links before scrolling. The mobile menu must also be checked.
- Hero: "דבר איתי" CTA only anchors to `#contact` (which is placed near the bottom, above blogs); no click-to-call or WhatsApp CTA in hero. Trust indicators are generic text; no real numbers (years, clients, lenders), no ratings.
- `/api/lead` is a stub; real lead flow is the contact server action. Confirm success/error states, validation messages in Hebrew, and spam protection (honeypot/captcha).
- Admin: `auth.ts` has hardcoded admin emails and falls back to `AUTH_SECRET || 'secret'` (security issue, fix before launch). `deleteLead` has no auth check inside the server action.

Design
- Mixed styling approaches: hard-coded `slate-*`/`hsl(40,33%,96%)`/`bg-white` coexist with CSS variables and a `.dark` variant; the "darkmode" commit is partial. Decide on one palette and tokenize.
- Components in `components/ui` mix primitives and page sections; consider moving sections to `components/sections`.
- Gold on white (`rgb(224,185,101)`) fails WCAG contrast for small text; use the darker gold or dark text for text on light backgrounds.

## Owner decisions
- Main goal: **more leads** (form submissions, WhatsApp clicks, phone calls). Judge UX/design changes by this.
- Design scope: **moderate refresh**. Keep brand colors (gold + dark slate); rework hero, sections, cards. No full rebrand.
- Theme: **light + dark with a toggle**. Finish dark mode properly (tokens, no hard-coded `bg-white`/`slate-*` that break in dark).
- Page priority: unknown, treat all pages equally.
- Trust data: owner has only some real data. Never invent numbers, ratings, license numbers or lender names; ask for each item.
- Traffic: site is **live, organic only**. Do not change existing URLs without 301 redirects; protect rankings; keep GA working.
- Workflow: **audit first** (production build + Lighthouse), present a ranked list for approval before changing code.
- Tooling: use the `ui-ux-pro-max:ui-ux-pro-max` skill for design/UX work (palette, typography, UX guidelines, accessibility), and `ui-ux-pro-max:ui-styling` for dark mode/Tailwind tokens.
- Design process: before implementing any visual redesign, **show the user 4 distinct design ideas** (mockups/previews) and wait for their pick.
- `/leads` page: **leave the `https://embed.vp4.me` script as is** (app/(guest)/leads/page.tsx). Do not remove or defer it.
- Risky changes (lazy-loading Nagishli, admin security fixes, real lead API/spam protection, blog content format/DB changes): **ask the user before each one**; never do them silently.
