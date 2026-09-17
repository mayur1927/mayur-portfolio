# Mayur Chaudhari — Portfolio

A production Next.js portfolio for Mayur Chaudhari — Computer Engineering
student building full-stack, AI/NLP and Android applications.

Live GitHub and LeetCode activity, three project case studies, and an
animation system built on GSAP/ScrollTrigger, Framer Motion and Lenis.

## Features

- **Next.js 14 (App Router)** with React Server Components by default —
  client components are used only where they need interactivity or browser
  APIs (cursor, nav, toolkit hover, form, scroll-triggered animation).
- **Real GitHub data** — public profile stats via the GitHub REST API, and
  the contribution calendar via the GitHub GraphQL API when a token is
  configured. No numbers are ever hardcoded or invented.
- **Real LeetCode data** — solved counts and a submission heatmap from a
  public community stats source, with an explicit "unavailable" state
  (never fabricated numbers) if that source is down.
- **Three project case studies** (`/projects/[slug]`) generated from a
  single typed data source (`lib/projects.ts`) — no duplicated markup.
- **Interactive toolkit** — hovering a linked skill highlights the project
  card(s) that use it.
- **Animation system** — GSAP + ScrollTrigger for scroll-driven reveals and
  the AI pipeline animation, Framer-style magnetic buttons, Lenis for
  smooth scrolling, a custom cursor, and full `prefers-reduced-motion`
  support.
- **No Experience section**, on purpose — no fabricated internships or jobs.

## Tech stack

Next.js · React · TypeScript · Tailwind CSS · GSAP (+ ScrollTrigger) ·
Framer Motion · Lenis

## Project structure

```text
app/
  layout.tsx            Root layout: fonts, metadata, cursor, smooth scroll
  page.tsx               Assembles every home page section
  globals.css
  sitemap.ts / robots.ts
  api/
    github/route.ts      GET /api/github  → real GitHub activity JSON
    leetcode/route.ts     GET /api/leetcode → real LeetCode activity JSON
  projects/[slug]/page.tsx  Dynamic case-study route per project

components/
  navbar/ hero/ about/ projects/ toolkit/ github/ leetcode/
  education/ contact/ footer/ cursor/ animations/ ui/

lib/
  github.ts        Server-side GitHub REST + GraphQL fetching (cached)
  leetcode.ts       Server-side LeetCode community-API fetching (cached)
  projects.ts       Central project data model
  constants.ts      Site config, nav links, toolkit data, education data
  utils.ts

types/
  github.ts  leetcode.ts
```

The GitHub/LeetCode sections (`components/github/GitHubActivity.tsx`,
`components/leetcode/LeetCodeActivity.tsx`) are `async` Server Components
that call `lib/github.ts` / `lib/leetcode.ts` directly at render time —
this avoids an extra client-side round trip and works with JS disabled.
The `app/api/*/route.ts` handlers wrap the same `lib/` functions so the
same data is also available as a plain JSON endpoint if you want to reuse
it elsewhere.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what applies:

```env
# GitHub (server-side only — never exposed to the browser)
GITHUB_USERNAME=
GITHUB_TOKEN=

# LeetCode
LEETCODE_USERNAME=

# Public social links
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_EMAIL=mayurchaudhari1927@gmail.com
```

Notes:

- `GITHUB_USERNAME` alone gets you real public profile stats (repos,
  followers, following). Adding `GITHUB_TOKEN` (a personal access token —
  no special scopes needed for public data) additionally unlocks the real
  contribution calendar, since GitHub only exposes contribution history
  through its authenticated GraphQL API, not the public REST API.
- Never prefix `GITHUB_TOKEN` with `NEXT_PUBLIC_` — that would ship it to
  the browser. It's read only inside `lib/github.ts`, which is a
  server-only module (enforced by the `server-only` package).
- If `LEETCODE_USERNAME` is unset, or the upstream stats source is down,
  the LeetCode section shows an honest "unavailable" message instead of
  fake numbers.
- Also fill in each project's `githubUrl` (and `liveUrl`, if applicable)
  in `lib/projects.ts` once those repos exist — they're intentionally left
  blank rather than guessed.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel ([vercel.com/new](https://vercel.com/new)).
3. Add the environment variables above in the Vercel project settings
   (Settings → Environment Variables) — do this for Production, Preview,
   and Development as needed.
4. Deploy. Every push to the main branch redeploys automatically.

## Accessibility & performance

- Semantic HTML, visible focus states, keyboard-operable navigation and
  form; the custom cursor is decorative only and never required to use
  the site (it's hidden entirely on touch devices).
- `prefers-reduced-motion` disables scroll-scrubbed reveals, the floating
  keyword drift, and Lenis smooth scrolling in favor of native scroll.
- GitHub/LeetCode responses are cached/revalidated hourly
  (`revalidate: 3600`) instead of being re-fetched on every request.

## What's intentionally not here

No Experience section, no fabricated companies, internships, certifications
or metrics — the three shipped projects are the primary evidence of
hands-on work, per the resume this site is built from.
