# Idea to Azure — Prototype Accelerator

Landing site for the **Idea to Azure Prototype Accelerator** — a hands-on programme
for founders and product managers to turn an idea into a working prototype using
AI-assisted development, built on Azure.

## Site

A static single-page site served via **GitHub Pages**.

| File | Purpose |
|------|---------|
| `index.html` | Page markup / content |
| `styles.css` | Responsive Microsoft-branded styling based on the Figma mockup |
| `app.js` | Scroll-reveal animations |
| `assets/` | Cosmos artwork from the supplied mockup and Lucide icons (license included) |
| `bootcamp-promo.mp4` | Compressed promo video (web-optimized H.264) |
| `bootcamp-promo-poster.jpg` | Video poster frame |
| `og-image.jpg` | Social link-preview image (1200×630) |
| `favicon.svg` | Site icon |
| `.nojekyll` | Serve assets as-is (skip Jekyll) |

### Local preview

From the repository root, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` and refresh after edits. This serves local files only;
it does not publish to GitHub Pages. Stop the server with Ctrl+C.

### Enable GitHub Pages
Settings → Pages → Build and deployment → **Deploy from a branch** →
Branch: `main` / root (`/`).

Site publishes at: `https://azurecosmosdb.github.io/idea-to-azure/`

## Next cohort
- **Starts:** 27 October 2026
- **Apply:** https://forms.cloud.microsoft/r/Sd8TXFD3WS
