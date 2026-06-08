# 🧠 CYBORG DIRECTIVE — Neural Sync Systems

> *Evolve Beyond Biology*

A futuristic, cyberpunk-themed landing page showcasing cybernetic augmentation technology. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

![Status](https://img.shields.io/badge/STATUS-ONLINE-00dbe9?style=for-the-badge&labelColor=131318)
![Tech](https://img.shields.io/badge/TECH-HTML%20%7C%20CSS%20%7C%20JS-00dbe9?style=for-the-badge&labelColor=131318)
![License](https://img.shields.io/badge/LICENSE-MIT-00dbe9?style=for-the-badge&labelColor=131318)

---

## ⚡ Features

### Visual Design
- **Cyberpunk Aesthetic** — Dark theme with cyan/magenta neon accents and octagonal clip-path shapes
- **Animated Circuit Grid** — Full-page background grid with scanning laser line effect
- **Glassmorphism Panels** — Frosted glass cards and sections with backdrop blur
- **Cursor Glow Trail** — Radial glow effect follows the mouse on desktop

### Interactive Elements
- **3D Card Tilt** — Augmentation cards respond to mouse movement with perspective transforms
- **Terminal Typing Effect** — System boot log types out line-by-line when scrolled into view
- **Live Stat Jitter** — Performance metrics subtly fluctuate in real-time to simulate live telemetry
- **Animated Progress Bars** — System stats animate to their target values on scroll

### UX & Navigation
- **Scroll Reveal Animations** — Sections and cards fade/slide in using Intersection Observer
- **Smooth Scroll Navigation** — Anchor links glide to their target sections
- **Active Section Highlighting** — Nav links update dynamically based on scroll position
- **Responsive Mobile Menu** — Full-screen overlay menu with hamburger toggle
- **Hero Parallax** — Subtle parallax depth effect on the hero image

---

## 🏗️ Project Structure

```
TESCHFEST/
├── index.html          # Main HTML — semantic structure with all sections
├── styles.css          # Complete stylesheet — animations, layout, responsive
├── script.js           # Interactions — scroll reveals, tilt, terminal, nav
├── assets/
│   └── cybernetic-eye.png   # Hero image — AI-generated cybernetic eye
└── README.md           # You are here
```

---

## 🖥️ Sections

| Section | Description |
|---|---|
| **Hero** | Bold headline, status indicator, CTA buttons, cybernetic eye visual |
| **Augmentation Suite** | 3 interactive cards — Neural Core, Kinetic Limbs, Optical Matrix |
| **System Performance** | Live animated stat bars — Efficiency, Latency, Neural Load, Sync Rate |
| **Network Topology** | Node registry data table + system terminal boot sequence |
| **Core Directive** | Mission parameters table + augmentation phases timeline |

---

## 🚀 Getting Started

### Option 1 — Open Directly
Simply open `index.html` in any modern browser. No build step required.

### Option 2 — Local Server
```bash
# Using Python
python3 -m http.server 3000

# Using Node.js
npx serve .
```
Then visit `http://localhost:3000`

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure, SEO meta tags, accessibility attributes |
| **CSS3** | Custom properties, `clip-path`, `backdrop-filter`, keyframe animations, CSS Grid/Flexbox |
| **Vanilla JS** | Intersection Observer API, DOM manipulation, requestAnimationFrame, passive event listeners |

**Zero dependencies.** No frameworks. No build tools. Just clean, handcrafted code.

---

## 📱 Responsive Design

- **Desktop** (1200px+) — Full layout with card grid, tilt effects, cursor glow
- **Tablet** (768px–1199px) — Adapted grid, touch-friendly interactions
- **Mobile** (< 768px) — Stacked layout, hamburger menu, optimized animations

---

## 🎨 Design Tokens

```css
--bg-deep:    #131318     /* Primary background */
--bg-panel:   #1a1a24     /* Panel/card background */
--cyan:       #00dbe9     /* Primary accent — neon cyan */
--magenta:    #e930a8     /* Secondary accent — neon magenta */
--text:       #e4e4e7     /* Primary text */
--text-dim:   #71717a     /* Muted text */
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <code>© 2024 NEURAL_SYNC_SYSTEMS — ALL_RIGHTS_RESERVED</code>
</p>
