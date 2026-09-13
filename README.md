# Himanshu Khatri — Application Architect Profile

Interactive executive profile for IBM Consulting leadership. Answers "Would I want Himanshu on my account?" in ~2 minutes.

Live: `https://pages.github.ibm.com/himanshur-khatri/architect-profile/`

---

## Local Development

```bash
npm install
npm run dev
```

Available at `http://localhost:5173/architect-profile/`

---

## Deploy

```bash
npm run deploy
```

Builds and pushes `dist/` to the `gh-pages` branch.

---

## Content

All content lives in `src/data/`. Edit these files — no component changes needed.

| File | What it controls |
|------|-----------------|
| `src/data/config.js` | Name, title, tagline, resume path, links |
| `src/data/experience.js` | Career timeline |
| `src/data/certifications.js` | Credentials and Credly URLs |
| `src/data/aiProjects.js` | AI project cards and demo URLs |
| `src/data/architectureCases.js` | Architecture case studies and diagram paths |
| `src/data/currentSolutions.js` | Production pipelines content |
| `src/data/transformation.js` | Transformation timeline |
| `src/data/leadership.js` | Leadership example cards |

---

## Adding Files

**Resume** — place PDF at `public/resume/Himanshu-Khatri-Resume.pdf`. The download button activates automatically.

**Architecture diagrams** — place sanitized PNG/SVG/JPG files in `public/architecture/` and update `imagePath` in `src/data/architectureCases.js`. Use paths like `/architect-profile/architecture/state-street.png`. Sanitize all images — no internal bucket names, Lambda names, URLs, or environment identifiers.

**Demo videos** — place MP4 files in `public/demos/` and update `demoUrl` in `src/data/aiProjects.js`, e.g. `/architect-profile/demos/preclaimiq.mp4`. Leave `demoUrl: ''` to show a "Demo Coming Soon" button. YouTube and Vimeo URLs also work.

---

## Navigation

| Input | Action |
|-------|--------|
| Mouse wheel / trackpad | Move between sections |
| Arrow keys ← → | Move between sections |
| Header nav links | Jump to section |
| Mobile swipe | Move between sections |

On mobile (< 768px) sections stack vertically and scroll normally.
