# Muhammad Haseeb — Portfolio

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
- Or from a terminal: `python -m http.server 8000` then open `http://localhost:8000`

## Deploying to GitHub Pages

Push this folder to the root of your `haseeb-zai30.github.io` repo (or the
`portfolio` folder, matching your current setup). No build step required —
GitHub Pages serves it as-is.
