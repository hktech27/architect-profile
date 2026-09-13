# Architect Profile — Implementation Plan

## Overview

Build a production-quality, interactive executive professional profile website for **Himanshu Khatri, Application Architect** (Cloud • Data • Modernization • AI).

**Primary audience:** Senior IBM Consulting leadership / Client Partners deciding whether to bring Himanshu into an enterprise engagement as Application Architect / technical leader.

**Core question the site must answer within ~2 minutes:** "Would I want Himanshu on my account?"

**Tech stack:** React · Vite · CSS Modules · JavaScript · GitHub Pages compatible

**Repo:** https://github.ibm.com/himanshur-khatri/architect-profile

**Contact links:**
- LinkedIn: https://www.linkedin.com/in/himanshu-khatri-7b8390399/
- GitHub: https://github.ibm.com/himanshur-khatri
- Email: himanshur.khatri@in.ibm.com
- Resume: `/public/resume/Himanshu-Khatri-Resume.pdf` (configurable; graceful fallback if absent)

---

## Architecture Decisions

- **Horizontal full-screen storytelling** — 9 "slides" navigated by wheel, keyboard arrows, prev/next controls, direct nav links, and mobile swipe.
- **CSS Modules** — scoped styles per component, no CSS-in-JS dependency.
- **Content-data separation** — all copy lives in `src/data/` as plain JS objects; components are purely presentational.
- **No backend** — static site only.
- **GitHub Pages** — `base` in `vite.config.js` set to repo name; `gh-pages` npm script for deployment.
- **Sanitized architecture diagrams** — SVG/JSX components built from scratch; no internal screenshots published.
- **Resume download** — reads path from `src/data/config.js`; button disabled with tooltip if file not yet placed.
- **Demo video links** — stored in `src/data/aiProjects.js`; open in modal or new tab based on whether URL is populated.

---

## Folder Structure

```
architect-profile/
├── public/
│   ├── resume/              ← place Himanshu-Khatri-Resume.pdf here
│   ├── architecture/        ← DROP sanitized diagram images here (PNG/SVG/JPG)
│   │   ├── state-street.png         (placeholder slot)
│   │   ├── speech-analytics.png     (placeholder slot)
│   │   └── genesys-ava.png          (placeholder slot)
│   └── demos/               ← optional: local demo video files
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── PageIndicator/
│   │   ├── ArchDiagramPlaceholder/  ← renders image from /public/architecture/ or "coming soon" fallback
│   │   ├── CaseStudyCard/
│   │   ├── CredentialCard/
│   │   ├── TimelineItem/
│   │   ├── AiProjectCard/
│   │   ├── VideoModal/
│   │   └── ResumeButton/
│   ├── data/
│   │   ├── config.js        ← external links, resume path, site meta
│   │   ├── experience.js
│   │   ├── certifications.js
│   │   ├── aiProjects.js
│   │   ├── architectureCases.js    ← imagePath field points to /architecture/*.png
│   │   ├── currentSolutions.js
│   │   ├── transformation.js
│   │   └── leadership.js
│   ├── sections/
│   │   ├── S01_Introduction/
│   │   ├── S02_Journey/
│   │   ├── S03_Building/
│   │   ├── S04_Architecture/
│   │   ├── S05_Transformation/
│   │   ├── S06_AppliedAI/
│   │   ├── S07_Credentials/
│   │   ├── S08_Leadership/
│   │   └── S09_WhatsNext/
│   ├── hooks/
│   │   └── useNavigation.js ← wheel, keyboard, swipe, active index
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css       ← design tokens (colors, type, spacing)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Design Tokens (tokens.css)

```
--color-bg:        #0a0c0f        (near-black)
--color-surface:   #111318        (card/panel background)
--color-border:    #1e2229        (subtle borders)
--color-accent:    #0062ff        (IBM Blue — primary CTA, active states)
--color-accent-2:  #4589ff        (lighter blue for secondary highlights)
--color-text-1:    #f4f4f4        (primary text)
--color-text-2:    #a8b2c1        (secondary / label text)
--color-text-3:    #5a6478        (muted / de-emphasized)
--font-display:    'Inter', system-ui (headings)
--font-body:       'Inter', system-ui (body)
```

Visual mood: Executive dark theme — IBM-influenced, premium, restrained. Not cyberpunk. No neon, no particles.

---

## Sub-Tasks

---

### Sub-Task 1 — Project Scaffold

**Intent:** Create the Vite + React project with correct dependencies, folder structure, GitHub Pages configuration, and base CSS tokens.

**Expected Outcomes:**
- `npm install` succeeds
- `npm run dev` serves a blank white/dark page with no console errors
- `npm run build` produces a valid `dist/`
- `npm run deploy` (gh-pages) is wired up

**Todo List:**
1. `package.json` — React 18, Vite 5, gh-pages; scripts: dev, build, preview, deploy
2. `vite.config.js` — base set to `/architect-profile/` for GitHub Pages; React plugin
3. `index.html` — title, Inter font via Google Fonts link, meta viewport
4. `src/main.jsx` — renders `<App />`
5. `src/App.jsx` — placeholder with `<div>Loading</div>`
6. `src/styles/tokens.css` — all design tokens
7. `src/styles/global.css` — CSS reset, box-sizing, body background, font defaults, scrollbar hiding, focus-visible styles, reduced-motion media query

**Relevant Context:** None yet — greenfield.

**Status:** [ ] pending

---

### Sub-Task 2 — Data Layer

**Intent:** Separate all content from UI. Every screen's text, links, and structured data lives here. Components will import and render these objects with zero hardcoded copy.

**Expected Outcomes:**
- `src/data/config.js` exports site meta, external links, resume path
- `src/data/experience.js` exports career timeline entries
- `src/data/certifications.js` exports 4 grouped credential sets
- `src/data/aiProjects.js` exports 3 AI project objects with empty demoUrl fields
- `src/data/architectureCases.js` exports 3 sanitized case study objects
- `src/data/currentSolutions.js` exports 3 solution objects (pipelines, tag governance, DPMS)
- `src/data/transformation.js` exports 7 transformation timeline entries
- `src/data/leadership.js` exports 3 leadership example objects

**Todo List:**
1. `config.js` — `siteConfig` object: `{ name, title, tagline, capabilities, resumePath, links: { linkedin, github, email } }`
2. `experience.js` — array of `{ period, title, org, theme, highlight? }` for the 7 career phases
3. `certifications.js` — array of 4 groups, each with `{ group, items: [{ name, url, verifyLabel }] }`
4. `aiProjects.js` — array of `{ id, name, event, placement, team, description, demoUrl, tags }`
5. `architectureCases.js` — array of `{ id, title, context, problem, decision, outcome, diagramType, keyMessage }`
6. `currentSolutions.js` — 3 objects: `pipelines`, `tagGovernance`, `dpms` with structured content
7. `transformation.js` — array of `{ year, system, verb, detail }` for the 7 transformation milestones
8. `leadership.js` — array of `{ challenge, context, situation, principle }`

**Relevant Context:** All content specified in the brief above.

**Status:** [ ] pending

---

### Sub-Task 3 — Core Navigation Shell

**Intent:** Build the horizontal scroll engine, persistent header, page indicator, and keyboard/wheel/touch navigation. This is the structural backbone everything else mounts into.

**Expected Outcomes:**
- 9 full-viewport sections render side by side
- Mouse wheel / trackpad scrolls between sections (debounced)
- Left/right keyboard arrows navigate
- Click on header nav items jumps to section
- Click on prev/next arrows navigates
- Mobile: swipe left/right navigates
- Active section index is tracked in state
- Page indicator shows `← 01 / 09 →` style counter
- Smooth CSS transition between sections
- Header persists above all sections; shows `HK` monogram + 5 nav links + `Resume ↓`

**Todo List:**
1. `src/hooks/useNavigation.js` — state: `activeIndex`, `isTransitioning`; handlers: wheel (debounced), keydown, touch start/end; returns `{ activeIndex, goTo, goNext, goPrev }`
2. `src/components/Header/Header.jsx + Header.module.css` — HK monogram left, nav links center (Journey / Architecture / Transformation / AI / Credentials), ResumeButton right; highlights active section
3. `src/components/ResumeButton/ResumeButton.jsx` — reads `resumePath` from config; if file path truthy renders anchor download link; else renders disabled button with title "Resume coming soon"
4. `src/components/PageIndicator/PageIndicator.jsx + .module.css` — `← 03 / 09 →` with prev/next click handlers; fixed position bottom-center
5. `src/App.jsx` — full implementation: imports all 9 section components; horizontal slide container; `useNavigation` hook wired to DOM events; passes `isActive` prop to each section

**Relevant Context:** Sub-task 1 (scaffold), Sub-task 2 (config.js for resume path and links).

**Status:** [ ] pending

---

### Sub-Task 4 — Screen 01: Introduction

**Intent:** Hero screen that creates curiosity. Communicates who Himanshu is in ~10 seconds. Warm, confident, not resume-like.

**Expected Outcomes:**
- Name, title, capability pills (Cloud · Data · Modernization · AI) render cleanly
- Supporting statement displayed
- Career progression concept `Build → Lead → Transform → Architect → AI` shown subtly
- Two CTAs: `Explore Journey →` and `Resume ↓`
- No "years of experience" messaging
- Loads instantly, no heavy animations

**Todo List:**
1. `src/sections/S01_Introduction/Introduction.jsx + .module.css`
2. Left column: name `Himanshu Khatri` in large display type; title `Application Architect`; capability row as spaced pills
3. Supporting statement in slightly smaller, italic or lighter weight text
4. Progression row: `Build → Lead → Transform → Architect → AI` as subtle labeled nodes with connecting lines (CSS only)
5. CTA row: primary button "Explore Journey →" calls `goTo(1)`; secondary ResumeButton inline
6. Subtle animated entrance: content fades up once `isActive` becomes true; respects `prefers-reduced-motion`

**Relevant Context:** Sub-task 3 (`goTo` from useNavigation, `isActive` prop).

**Status:** [ ] pending

---

### Sub-Task 5 — Screen 02: Journey

**Intent:** Elegant career timeline from 2006 to present. Story of progression from engineering into leadership and architecture. No job descriptions.

**Expected Outcomes:**
- Heading "From building systems to shaping them."
- 7 timeline entries with period, title/role, org context rendered horizontally on desktop
- `$5M portfolio` callout highlighted on the Program Manager entry
- Progression labels `BUILD → LEAD → DELIVER → TRANSFORM → ARCHITECT` shown beneath
- Closing statement visible
- Mobile: vertical timeline with clear flow

**Todo List:**
1. `src/sections/S02_Journey/Journey.jsx + .module.css`
2. `src/components/TimelineItem/TimelineItem.jsx + .module.css` — props: `period`, `title`, `org`, `theme`, `highlight`, `active`
3. Horizontal scrollable timeline on desktop; each item is a vertical card with period top, title bold, org/context muted
4. Connector line between items
5. Highlight badge for `$5M portfolio` entry
6. Progression band beneath: `BUILD → LEAD → DELIVER → TRANSFORM → ARCHITECT`
7. Closing statement below timeline
8. Responsive: stack vertically with left-border connector on mobile

**Relevant Context:** `src/data/experience.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 6 — Screen 03: What I'm Building

**Intent:** Establish current relevance. Three sections: production data pipelines, tag governance automation, DPMS. Show ownership and architecture thinking.

**Expected Outcomes:**
- Heading "Building reusable cloud solutions."
- Section A: 5 enterprise integration sources listed; simplified data layer architecture diagram (Enterprise Sources → Ingestion → Landing/Stage → Raw → Curated → Published → Consumers); technology list subtle
- Section B: Tag Governance card with flow diagram; `IDEA → DESIGN → DEVELOPMENT / Himanshu` ownership indicator; BUILT/DELIVERED badge
- Section C: DPMS card with flow diagram; TEAM SOLUTION clearly stated; IN DEVELOPMENT badge; my specific contribution (config.json model) called out
- Bottom statement: "Build the pipeline. Standardize the platform. Improve how it operates."
- No AWS logo wall; technology listed as text

**Todo List:**
1. `src/sections/S03_Building/Building.jsx + .module.css`
2. Three sub-panel layout (tabs or horizontal thirds on desktop, stacked on mobile)
3. Section A: source chips row; pipeline architecture as vertical flow SVG/CSS diagram; technology as small tag row
4. Section B: Tag Governance card with ownership badge; flow diagram as CSS flex column with connector lines
5. Section C: DPMS card with team note; config.json contribution called out with subtle highlight; flow diagram
6. Bottom statement

**Relevant Context:** `src/data/currentSolutions.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 7 — Screen 04: How I Architect

**Intent:** Most important screen. Three interactive architecture case studies that demonstrate trade-off thinking, not AWS knowledge.

**Expected Outcomes:**
- Heading "Different problems. Different patterns."
- Three case study cards, each showing: title, context, problem, key decision, key message
- Each card has "Explore Architecture →" expand button
- Expanded state shows sanitized architecture flow diagram (SVG/CSS built from scratch — NO internal screenshots)
- All internal names, bucket names, Lambda names stripped and generalized
- Diagrams communicate: pattern → decision → data flow → outcome
- Bottom quote prominent: "Architecture is knowing the patterns. Good architecture is knowing when to break them."

**Todo List:**
1. `src/sections/S04_Architecture/Architecture.jsx + .module.css`
2. `src/components/CaseStudyCard/CaseStudyCard.jsx + .module.css` — collapsed / expanded state managed locally
3. Diagram components (inline JSX/SVG, sanitized):
   - `StateStreetDiagram.jsx` — entity IDs → 3 parallel APIs (Activities, Positions, Transactions) via independent triggers → data lake layers
   - `SpeechAnalyticsDiagram.jsx` — Scheduled Trigger → Step Functions → API Extraction → Stage → Glue → Raw/Curated → Published
   - `GenesysAvaDiagram.jsx` — Schedule → Availability Check → Ready? branch → API Stage → Checkpoint → Multiple Conversation APIs → Stage → Raw → Curated → Published
4. Each diagram component uses only CSS flexbox/grid + SVG arrows; zero internal identifiers
5. Bottom quote rendered as large blockquote

**Relevant Context:** `src/data/architectureCases.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 8 — Screen 05: Enterprise Transformation

**Intent:** Visually driven timeline of enterprise transformation work from 2014 to present. Shows breadth. No long descriptions.

**Expected Outcomes:**
- Heading "More than a decade of transformation."
- 7 milestone cards: year, system name, action verb (CONVERT / MODERNIZE / DELIVER / LEAD / RETIRE / RE-ARCHITECT / CLOUD-ENABLE)
- Connecting arrows between milestones
- Hover/click reveals one-line detail (from transformation.js detail field)
- Supporting statement: "From converting legacy systems to helping shape what replaces them."
- No claim that Himanshu coded the Financial System Modernization solution
- Mobile: vertical stacked with left-border connector

**Todo List:**
1. `src/sections/S05_Transformation/Transformation.jsx + .module.css`
2. Horizontal milestone strip with year + verb badge + system name
3. Hover state reveals `detail` from data
4. Connecting visual between cards
5. Supporting statement below

**Relevant Context:** `src/data/transformation.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 9 — Screen 06: Applied AI

**Intent:** Visually memorable. Three project cards showing practical AI experimentation and hackathon achievements. Not "AI Expert" — genuine exploration.

**Expected Outcomes:**
- Heading "From learning AI to building with it."
- Three project cards: PreClaimIQ (1st Place), CoverIQ++, BR ImpactLens
- Each card shows: name, event, achievement/placement, team, description, technology tags, "Watch Demo ▶" button
- If `demoUrl` is empty, button is disabled with title "Demo coming soon"
- If `demoUrl` is populated, clicking opens a VideoModal (iframe/video) or new tab depending on URL type
- `VideoModal` component: dark overlay, close button, accessible
- Bottom statement: "Exploring how AI, enterprise context and agentic workflows can solve practical business problems."

**Todo List:**
1. `src/sections/S06_AppliedAI/AppliedAI.jsx + .module.css`
2. `src/components/AiProjectCard/AiProjectCard.jsx + .module.css`
3. `src/components/VideoModal/VideoModal.jsx + .module.css` — overlay, close on ESC/click-outside, focus trap
4. Card layout: 3-up on desktop, 1-up stacked on mobile
5. Achievement badge (e.g. "1st Place") styled prominently on PreClaimIQ
6. Bottom statement

**Relevant Context:** `src/data/aiProjects.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 10 — Screen 07: Credentials

**Intent:** Four organized credential groups. Clickable "Verify ↗" links. No badge wall, no exam scores.

**Expected Outcomes:**
- Heading "Built across the disciplines I bring together."
- Four groups: Architecture & Cloud, AI & Consulting, Industry & Technology, Leadership & Delivery
- Each credential: name + "Verify ↗" link opening in new tab
- Clean list layout — not a grid of badge images
- 11 total credentials all present with correct URLs

**Todo List:**
1. `src/sections/S07_Credentials/Credentials.jsx + .module.css`
2. `src/components/CredentialCard/CredentialCard.jsx + .module.css` — group heading, list of credential rows each with name + verify link
3. 2×2 group layout on desktop, stacked on mobile

**Relevant Context:** `src/data/certifications.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 11 — Screen 08: How I Lead

**Intent:** Prove technical leadership with three specific real examples. No skill bars. No generic statements.

**Expected Outcomes:**
- Heading "I lead through decisions."
- Three example cards: Challenge Assumptions, Explain the Why, Stay Close to the Technology
- Each card: challenge name, context, situation summary, leadership principle (quoted)
- Bottom statement prominent: "My role isn't to make every technical decision. It's to help teams make better decisions together."

**Todo List:**
1. `src/sections/S08_Leadership/Leadership.jsx + .module.css`
2. Three card layout — clean, generous whitespace
3. Leadership principle displayed as a pull-quote with accent styling
4. Bottom statement

**Relevant Context:** `src/data/leadership.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 12 — Screen 09: What's Next + Footer

**Intent:** Forward-looking close. Four capability areas. Clear aspiration statement. Footer CTAs.

**Expected Outcomes:**
- Heading "Technical leadership. Architecture at the center."
- Four capability blocks: Architecture Depth, Delivery Leadership, Business Context, Emerging Capability
- Supporting statement about growth aspiration
- Final 3-line statement: "Build deeply. / Lead thoughtfully. / Architect for what comes next."
- Footer: LinkedIn ↗, GitHub ↗, Email ↗, Resume ↓ — all driven from `config.js`

**Todo List:**
1. `src/sections/S09_WhatsNext/WhatsNext.jsx + .module.css`
2. Four capability tiles: label + sub-items in muted type
3. Aspiration paragraph
4. Final statement in large display type, line-broken intentionally
5. Footer row with icon links from config — all open correct targets

**Relevant Context:** `src/data/config.js` (Sub-task 2).

**Status:** [ ] pending

---

### Sub-Task 13 — Responsive Design Pass

**Intent:** Ensure the experience works properly on laptop, tablet, and mobile. Not just shrinking the desktop.

**Expected Outcomes:**
- Mobile: vertical scroll replaces horizontal slide navigation
- Timelines stack vertically with left-border connectors
- Architecture diagrams scale or allow vertical scroll in expanded state
- Cards stack 1-up on mobile
- Header collapses to hamburger or simplified state on mobile
- Typography remains readable at all breakpoints
- Touch swipe works for mobile section navigation

**Todo List:**
1. Define breakpoints in `tokens.css`: `--bp-md: 768px`, `--bp-lg: 1200px`
2. Review each section module for mobile layout rules
3. Header: mobile = HK monogram + hamburger menu drawer
4. Timeline sections: `flex-direction: column` with left border on mobile
5. Architecture diagrams: max-width + horizontal scroll container on mobile
6. Card grids: `grid-template-columns: 1fr` on mobile
7. Swipe handler already in `useNavigation` — verify works correctly on touch devices

**Relevant Context:** All section components (Sub-tasks 4–12).

**Status:** [ ] pending

---

### Sub-Task 14 — Accessibility + Performance Pass

**Intent:** Semantic HTML, keyboard navigation, focus states, ARIA, contrast, reduced motion, lazy loading.

**Expected Outcomes:**
- All interactive elements reachable by keyboard with visible focus ring
- ARIA roles/labels on navigation controls, modal, page indicator
- `prefers-reduced-motion` disables transitions
- Images (if any) have alt text
- VideoModal traps focus, closes on ESC
- No autoplay video
- Lighthouse accessibility score ≥ 90
- Bundle size reasonable — no large unused dependencies

**Todo List:**
1. Audit `useNavigation` keyboard handler — ensure no focus traps outside modal
2. Add `aria-current="true"` to active header nav link
3. Add `role="dialog" aria-modal="true"` to VideoModal
4. Add `aria-label` to prev/next PageIndicator buttons
5. Verify all `<a>` tags have meaningful text (not just "↗")
6. Add `@media (prefers-reduced-motion: reduce)` guard to all CSS transitions
7. Check color contrast against design tokens — text-2 (#a8b2c1) on bg (#0a0c0f) must pass AA
8. Add `loading="lazy"` to any img elements

**Relevant Context:** All components.

**Status:** [ ] pending

---

### Sub-Task 15 — README + Deployment Instructions

**Intent:** Clear, exact instructions for local development and GitHub Pages deployment.

**Expected Outcomes:**
- README.md covers: prerequisites, install, dev, build, deploy, content update guide, resume/demo URL placement

**Todo List:**
1. Write `README.md` with sections:
   - Project overview
   - Prerequisites (Node 18+, npm)
   - Local development: `npm install` + `npm run dev`
   - Production build: `npm run build`
   - GitHub Pages deployment: `npm run deploy` (gh-pages)
   - Content update guide: where to edit experience, certifications, AI demo URLs, external links
   - Resume: place PDF at `public/resume/Himanshu-Khatri-Resume.pdf`
   - Architecture diagram customization note

**Status:** [ ] pending

---

## Content Rules (Enforced Throughout)

- Title is always **Application Architect** — never Solutions Architect, Cloud Engineer, Developer
- State Street and Burgiss are **enterprise data sources/integrations** — not clients
- Himanshu is **not** an AI Expert — he is exploring and building with AI
- Do **not** claim sole authorship of DPMS — team solution; Himanshu's contribution = config-driven monitoring model
- Do **not** claim Himanshu coded the Financial System Modernization modern solution
- Do **not** invent metrics or business outcomes
- Architecture diagrams must be **sanitized** — no internal bucket/Lambda/URL names
- Resume button degrades gracefully if PDF not present

---

## Implementation Sequence

```
Sub-task 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15
```

Each sub-task is self-contained and reviewable before the next begins.
