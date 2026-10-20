# Mahmoud Eltantawy · Portfolio

Personal portfolio of Mahmoud Eltantawy, Software Engineer (Flutter · API Gateway · System Integration & Design).

**Live:** https://ma7moud-eltantawy.github.io/mahmoud_eltantawy_portfolio/

## Stack

React 19 + Vite, hand-written CSS design system (no UI framework), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

All content lives in [`src/data/cv.js`](src/data/cv.js) and mirrors the CV in `public/Mahmoud_Eltantawy_CV.pdf`. Update both together.

## Portfolio assistant

A bilingual (English / Arabic) chat guide, built from `src/data/cv.js` with no backend. See [`docs/ASSISTANT.md`](docs/ASSISTANT.md) for how it works, how to extend it, and the optional AI setup.

## Design system

- `src/styles/tokens.css`: color, type, radius, spacing, and motion tokens, with light and dark palettes (follows the system setting; the nav toggle overrides it)
- `src/styles/base.css`: reset, buttons, chips, cards, segmented control, modal, reveal motion
- `src/styles/sections.css`: per-section layout, with breakpoints at 1068 / 834 / 734px

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```
