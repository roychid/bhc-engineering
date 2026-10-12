# BHC Engineering & Design — Static Website V1

Premium, motion-led static website for BHC Engineering & Design (Pty) Ltd.

## Stack

- Next.js static export
- React + TypeScript
- CSS (no backend)
- CSS design tokens in `app/globals.css`, fonts via `next/font` (Archivo + IBM Plex Mono)
- Motion: one CSS line-draw on scroll (`components/DrawOnScroll.tsx`, IntersectionObserver), off under reduced motion
- gsap, lenis, three and @react-three/fiber are still listed in package.json but are not imported anywhere; remove with `npm uninstall gsap lenis three @react-three/fiber`
- Static hosting compatible with Vercel, Netlify, Cloudflare Pages or any static server

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production static build

```bash
npm run build
```

The finished static website is generated in `out/`.

## Hero video

Put your approved background video at:

`public/media/bhc-hero.mp4`

The hero video autoplays only on screens 768px and wider without reduced motion, and has a pause/play button. Otherwise the poster (`public/media/opt/hero-home-1600.webp`) shows until the visitor presses play.

## Images

Page images are served from `public/media/opt/` as AVIF/WebP at 1200px and 2400px widths. To add one, export both widths in both formats with the same naming (`name-1200.avif`, `name-2400.webp`, etc.) and pass `image="name"` to `PageHead`. The original JPGs in `public/media/` are no longer referenced.

## Content

Most initial website copy is in:

`lib/content.ts`

## Important content note

The Capabilities page (`/projects/`) shows project types as line drawings. Delivered case studies appear automatically once `caseStudies` in `lib/content.ts` has approved entries; until then the page shows an honest empty state.

## Contact handoff

The Contact form is client-side and opens a pre-filled email to the address in `lib/content.ts` (`company.email`). Replace the email address in `lib/content.ts` with BHC's confirmed project enquiry address, or later connect a third-party form endpoint without introducing a BHC backend.

## Company information used

The legal name is presented as BHC ENGINEERING & DESIGN (PTY) LTD. The supplied company documents show the company was registered in South Africa in August 2026. Avoid publishing private director or tax PIN information on the public site unless separately approved.


## v9 structure

Pages: Home, About, Services, Projects, Contact. Content lives in `lib/content.ts`. Add real registrations to `registrations`, approved director profiles to `leaders`, delivered projects to `caseStudies` and a phone number to `company.phone`; each only appears once populated.
