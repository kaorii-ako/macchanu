# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server → http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview dist/ locally
```

No test runner or linter configured.

## Architecture

React 18 + Vite SPA. React Router v6 with 5 routes:

| Route | Component |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/team` | `src/pages/Team.jsx` |
| `/engineering` | `src/pages/Engineering.jsx` |
| `/sponsorship` | `src/pages/Sponsorship.jsx` |
| `/sponsorship-prospectus` | `src/pages/PdfViewer.jsx` |

`App.jsx` is the router shell — it renders `TopNavBar`, `<Routes>`, and `Footer` for every page.

All data is hardcoded in component files (no API calls, fully static).

## Theme System

Dark mode is default. Light mode toggled via `src/context/ThemeContext.jsx`, persisted to localStorage key `macchanu-theme`.

Theme-aware styles use CSS variables defined in `src/index.css`:
- `:root` — dark mode values
- `[data-theme="light"]` — light mode overrides

Key variables: `--theme-bg`, `--theme-text`, `--theme-border`, `--theme-surface`, `--theme-nav-bg`, `--theme-footer-bg`.

Use `style={{ color: 'var(--theme-text)' }}` pattern (not Tailwind dark: prefix) for theme-aware inline styles.

## Design System

Custom Tailwind classes in `tailwind.config.js`:
- **Gold**: `mac-gold` (#d6b747), `mac-gold-light`, `mac-gold-dark`
- **Teal**: `mac-teal` (#19757e), `mac-teal-light`
- **Surface**: `mac-black` (#0a0a0f), `mac-surface` (#f4f0e8)

Reusable utility classes (defined in `src/index.css`):
- `.glass-card` / `.glass-card-hover` — frosted glass panels
- `.btn-gold` — primary CTA button (gold gradient)
- `.btn-primary` — outlined gold-hover button
- `.section-padding` — vertical section spacing (`py-20 md:py-32`)
- `.text-gradient`, `.text-gold-gradient`, `.font-display` — typography helpers
- `.marquee` / `.marquee-container` — scrolling ticker strip

Fonts loaded via Google Fonts in `index.html`: **Bebas Neue** (display/headings), **Space Grotesk** (body, wt 300–700).

## Animations

Framer Motion v11 used throughout. Pages use scroll-triggered `motion.div` with `whileInView` + `viewport={{ once: true }}`. `Home.jsx` also has animated stat counters driven by Intersection Observer.

## Static Assets

All images and PDFs live in `public/`. The prospectus PDF is at `public/prospectus.pdf` and rendered in `PdfViewer.jsx` via an `<iframe>` with fallback download link.
