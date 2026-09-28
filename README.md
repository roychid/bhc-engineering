# BHC Engineering & Design — Static Website V1

Premium, motion-led static website for BHC Engineering & Design (Pty) Ltd.

## Stack

- Next.js static export
- React + TypeScript
- CSS (no backend)
- GSAP / Lenis / Three.js dependencies are ready for future motion/3D layers
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

The hero is designed around video as the primary visual layer. A branded SVG poster is included as a fallback before the video loads.

## Content

Most initial website copy is in:

`lib/content.ts`

## Important content note

The project section currently uses concept visualisations/placeholders rather than inventing a BHC project history. Replace these with approved BHC Engineering & Design projects and/or clearly labelled team experience before launch.

## Contact handoff

The Start a Project flow is entirely client-side. The final step opens a pre-filled email. Replace the email address in `components/Site.tsx` with BHC's confirmed project enquiry address, or later connect a third-party form endpoint without introducing a BHC backend.

## Company information used

The legal name is presented as BHC ENGINEERING & DESIGN (PTY) LTD. The supplied company documents show the company was registered in South Africa in August 2026. Avoid publishing private director or tax PIN information on the public site unless separately approved.
