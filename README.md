# Muhammad Haseeb — Portfolio (Redesign)

A premium, dark-mode-only portfolio built with TailwindCSS (CDN) and vanilla JS —
no build step, works straight out of VS Code, drop-in ready for GitHub Pages.

## Structure

```
index.html         → all markup/content
css/style.css       → design tokens, glassmorphism, animations
js/main.js          → project & cert data, typing effect, particles, filters, video modal
images/<slug>.jpg    → project cover images
docs/<slug>.pdf      → project documentation + resume + certificates
videos/<slug>.mp4    → project demo videos (open in an in-page player)
ASSETS-NEEDED.md    → exact filenames the site expects, checklist form
```

## Run it locally in VS Code

No build tools needed. Easiest options:
- Install the **Live Server** extension → right-click `index.html` → "Open with Live Server"
- Or from a terminal: `python3 -m http.server 8000` then open `http://localhost:8000`

## Before you publish

1. Open **`ASSETS-NEEDED.md`** and drop your images, PDFs, and videos into
   `images/`, `docs/`, and `videos/` using the exact filenames listed — everything
   is already wired up by project slug, so nothing else needs editing for those.
2. In `js/main.js`, each project has a `github:` field pointing at your GitHub
   profile by default. Swap in the specific repo URL per project once available.
3. Any image/video that isn't in place yet degrades gracefully (a styled fallback,
   or a "coming soon" message) — so you can publish before every asset is ready.

## Deploying to GitHub Pages

Push this folder to the root of your `haseeb-zai30.github.io` repo (or the
`portfolio` folder, matching your current setup). No build step required —
GitHub Pages serves it as-is.

## Notes

- All animations respect `prefers-reduced-motion`.
- The hero particle field and mouse-spotlight are disabled automatically for users
  with reduced-motion preferences.
- Projects, certifications, filtering, and the video modal are all driven by the
  data arrays at the top of `js/main.js` — add or remove entries there rather than
  editing HTML directly.
