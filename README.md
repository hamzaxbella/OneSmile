# OneSmile

A multilingual dental services website with animated sections, service pages, and contact flows.

[Open the demo](https://one-smile.vercel.app) · [Browse the code](https://github.com/hamzaxbella/OneSmile)

## What is inside

- Home, services, contact, sitemap, terms, and not-found routes.
- Before/after presentation, pricing, FAQs, and testimonials.
- React context for language selection and GSAP animation.
- EmailJS contact integration and an optional Gemini chat widget.

## Stack

React · Vite · React Router · Tailwind CSS · GSAP · EmailJS

## Run locally

```bash
git clone https://github.com/hamzaxbella/OneSmile.git
cd OneSmile
npm ci
npm run dev
```

Open <http://localhost:5173> (or the address printed in the terminal).

```bash
npm run build
```

Use the build script to generate production output.

## Integration setup

Copy `.env.example` to `.env.local` and configure your own EmailJS service, template, and public key. The chat widget also reads `VITE_GEMINI_API_KEY`; that variable is not included in the current example file. See [the chat integration guide](CHATBOT_SETUP.md) for the existing implementation.

Variables prefixed with `VITE_` are included in browser code. A private production AI credential belongs behind a server endpoint; the current chat implementation calls the provider from the browser. Email and chat features need their own configured services.

## Code map

| Directory | Purpose |
| --- | --- |
| `src/pages/` | Routed pages |
| `src/sections/` | Landing-page sections |
| `src/components/` | Shared UI and integrations |
| `src/constants/` | Content and configuration |
| `src/utils/` | SEO and performance helpers |

On static hosting, rewrite application routes to `index.html`. Clinic content and media belong to their respective owners; this repository is presented as a development portfolio project.
