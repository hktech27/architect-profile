# Himanshu Khatri — Application Architect Profile

An interactive executive professional profile website built with React + Vite.

**Purpose:** Answer the question "Would I want Himanshu on my account?" within approximately 2 minutes for senior IBM Consulting leadership / Client Partners.

---

## Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173/architect-profile/`

---

## Production Build

```bash
npm run build
```

Output is placed in `dist/`. To preview the production build locally:

```bash
npm run preview
```

---

## GitHub Pages Deployment

```bash
npm run deploy
```

This command:
1. Runs `npm run build` to create a production build
2. Pushes the `dist/` folder to the `gh-pages` branch using the `gh-pages` package

**First-time setup:**

Make sure your `package.json` `homepage` field or the Vite `base` config matches your GitHub Pages URL. The current configuration uses:

```
base: '/architect-profile/'
```

If your GitHub Pages URL is `https://pages.github.ibm.com/himanshur-khatri/architect-profile/`, this is already correct.

---

## Content Updates

All site content is separated from the UI. Update these files without touching any components:

| File | What to update |
|------|---------------|
| `src/data/config.js` | Name, title, tagline, resume path, LinkedIn/GitHub/email links |
| `src/data/experience.js` | Career timeline entries |
| `src/data/certifications.js` | Credentials, groups, Credly/issuer URLs |
| `src/data/aiProjects.js` | AI project cards, demo video URLs |
| `src/data/architectureCases.js` | Architecture case studies, diagram image paths |
| `src/data/currentSolutions.js` | Production pipelines, Tag Governance, DPMS content |
| `src/data/transformation.js` | Transformation timeline milestones |
| `src/data/leadership.js` | Leadership example cards |

---

## Adding Your Resume

1. Place the PDF at:
   ```
   public/resume/Himanshu-Khatri-Resume.pdf
   ```

2. In `src/data/config.js`, confirm `resumePath` is set:
   ```js
   resumePath: '/architect-profile/resume/Himanshu-Khatri-Resume.pdf',
   ```

3. The `Resume ↓` button will automatically become active once the file is present.

---

## Adding Architecture Diagram Images

1. Place your **sanitized** architecture diagram images in:
   ```
   public/architecture/
   ```
   See `public/architecture/README.md` for naming guidance.

2. In `src/data/architectureCases.js`, update the `imagePath` field for each case:
   ```js
   imagePath: '/architect-profile/architecture/state-street.png',
   ```

3. The placeholder will automatically be replaced by the image.

> **Important:** Diagrams must be sanitized — no internal bucket names, Lambda names, API endpoints, environment identifiers, or proprietary naming.

---

## Adding AI Demo Video Links

In `src/data/aiProjects.js`, update the `demoUrl` field:

```js
// YouTube URL
demoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',

// Vimeo URL
demoUrl: 'https://vimeo.com/YOUR_VIDEO_ID',

// Local file in public/demos/
demoUrl: '/architect-profile/demos/preclaimiq.mp4',
```

Leave `demoUrl: ''` to show the "Demo Coming Soon" disabled button.

---

## Project Structure

```
architect-profile/
├── public/
│   ├── architecture/     ← Drop sanitized diagram images here
│   ├── resume/           ← Drop Himanshu-Khatri-Resume.pdf here
│   ├── demos/            ← Optional: local demo video files
│   └── 404.html          ← GitHub Pages SPA redirect
├── src/
│   ├── components/       ← Reusable UI components
│   ├── data/             ← All content (update here, not in components)
│   ├── hooks/            ← useNavigation (wheel/keyboard/swipe)
│   ├── sections/         ← 9 screen components (S01–S09)
│   ├── styles/           ← Global CSS + design tokens
│   ├── App.jsx           ← Horizontal slide engine
│   └── main.jsx          ← React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Navigation

| Action | Result |
|--------|--------|
| Mouse wheel / trackpad | Navigate between sections |
| Arrow keys (← →) | Navigate between sections |
| Header nav links | Jump directly to section |
| Page indicator arrows | Previous / next section |
| Mobile swipe | Navigate between sections |

On mobile (< 768px), sections stack vertically and scroll normally.

---

## Technologies

- **React 18** — UI
- **Vite 5** — Build tool
- **CSS Modules** — Scoped styles
- **gh-pages** — GitHub Pages deployment
