# Wisdom Tutor

A static marketing website for Wisdom Tutor, a tutoring agency in Kigali, Rwanda, connecting parents and students with tutors. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Build

```bash
npm run build
npm run start
```

## Before deploying

1. **Update the site URL.** Open `lib/site.ts` and change `site.url` from the
   placeholder (`https://www.wisdomtutor.rw`) to the real domain. This value
   drives canonical URLs, `sitemap.xml`, `robots.txt`, and Open Graph tags.
2. **Double-check contact details** in `lib/site.ts` (WhatsApp number, email)
   if they ever change.
3. Run `npm run build` once more after any changes to confirm there are no
   errors, then deploy the `.next` output (e.g. to Vercel, or any Node
   hosting that supports Next.js).

## Project structure

- `app/` — one folder per route (`about`, `services`, `parents`, `tutors`,
  `contact`), plus `layout.tsx` (fonts, global metadata, Navbar/Footer),
  `sitemap.ts`, and `robots.ts`.
- `components/` — reusable UI: `Navbar`, `Footer`, `Hero`, `PageHero`,
  `SectionHeading`, `ServiceCard`, `GradeLevelCard`, `HowItWorks`,
  `CTASection`, `WhatsAppButton`, `StepPath` (the SVG grade-progression
  illustration).
- `lib/site.ts` — single source of truth for the company name, contact
  details, WhatsApp link builder, nav links, and grade-level data.

## Notes on content

Per the original brief, no testimonials, statistics, prices, tutor
qualifications, or partnerships are included anywhere on the site, since
none were provided. Add these deliberately later if and when they become
real and confirmed.

## Fonts

Fraunces (headings) and IBM Plex Sans (body) are self-hosted via
`@fontsource`, so the site has no runtime dependency on Google Fonts.

## Dependency versions

All packages are pinned to their latest stable release as of this writing,
with two deliberate exceptions:

- **ESLint stays on 9.x** (not 10.x). `eslint-config-next` bundles
  `eslint-plugin-react`, which crashes under ESLint 10 (`contextOrFilename.getFilename
  is not a function`). Revisit once `eslint-config-next` publishes a release
  that supports ESLint 10.
- **TypeScript stays on 5.x** (not 7.x). TypeScript 7's native Go compiler
  doesn't yet expose the JS Compiler API Next.js's type-checker and
  `typescript-eslint` depend on (`typescript-eslint`'s peer range is
  `>=4.8.4 <6.1.0`, and TypeScript 6 was never released as a standalone
  line). Revisit once the ecosystem catches up — Next.js 16.3 does support
  TypeScript 7 in `next build` behind an opt-in flag
  (`experimental.useTypeScriptCli`), but the linter isn't ready yet.

Run `npm outdated` periodically to check for new releases.
