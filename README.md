# Ayman Rezk — Data Analyst Portfolio

![Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-proprietary-blue)
![Language](https://img.shields.io/badge/language-AR%20%7C%20EN-purple)
![Made With](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-orange)

A modern, bilingual (Arabic / English) portfolio website for **Ayman Rezk**, a Data Analyst specializing in Power BI dashboards, Excel analytics, and custom business tools built with Google Apps Script & Google Sheets.

🔗 **Live Demo:** [https://aymanrezk2.github.io/data-portfolio/](https://aymanrezk2.github.io/data-portfolio/)

---

## ✨ Features

- 🌐 **Bilingual Support** — Full Arabic (RTL) and English (LTR) with one-click language toggle
- 🌙 **Dark / Light Mode** — Dark mode by default with a smooth toggle
- 📊 **Featured Work Showcase** — Highlighted project with metrics and awards
- 🎨 **Modern Brand Identity** — Custom color palette (Charcoal + Electric Purple + Neon Cyan)
- ✨ **Glassmorphism & Neon Effects** — Modern, tech-inspired UI
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- ⚡ **Performance Optimized** — Lazy-loaded images, Intersection Observer animations
- 🔍 **SEO Ready** — Open Graph, Twitter Cards, JSON-LD structured data
- ♿ **Accessibility** — ARIA labels, keyboard navigation, reduced-motion support
- 💬 **WhatsApp CTA** — Floating button for instant contact
- 📜 **Certifications Section** — 9 verifiable certificates with direct links
- 🎠 **Testimonials Carousel** — With automatic language-based translation display

---

## 🛠️ Tech Stack

### Core

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (CSS variables), Flexbox, Grid, Glassmorphism
- **Vanilla JavaScript** — No framework, pure DOM manipulation

### External Libraries (CDN)

| Library | Purpose |
| --------- | --------- |
| [Google Fonts](https://fonts.google.com/) | Cairo, Tajawal (Arabic) + Inter, Space Grotesk (English) |
| [Font Awesome 6](https://fontawesome.com/) | Icons throughout the site |
| [jQuery 3.6](https://jquery.com/) | Required for Slick Carousel |
| [Slick Carousel](https://kenwheeler.github.io/slick/) | Testimonials slider |

> ⚠️ **Note:** All dependencies are loaded via CDN. If any of these services are unavailable, it may affect the site's appearance or functionality.

---

## 📁 Project Structure

data-portfolio/
├── index.html # Main page
├── style.css # All styles (brand colors, layout, animations)
├── script.js # Translations, theme toggle, carousel, GitHub API
├── robots.txt # SEO — crawler instructions
├── sitemap.xml # SEO — site structure
├── README.md # This file
│
├── images/
│ ├── me.jpeg # Profile picture
│ ├── og-image.png # Social media preview (1200×630)
│ └── NeuroWheel_cover.jpg # Featured project cover
│
└── assets/
├── AymanRezkCV.pdf # Downloadable resume
├── Certificates/ # 9 PDF/JPG certificates
├── PowerBI/ # Power BI dashboards (.pbix + screenshots)
├── Sample - Superstore_Excel/
└── project_GPT_1/

---

## 🚀 Deployment

This is a **static website** — no build step required.

### Option 1: GitHub Pages (Current Setup)

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **`main` branch → `/root`**
4. Site will be live at: `https://<username>.github.io/<repo-name>/`

### Option 2: Netlify / Vercel

1. Connect your GitHub repository
2. Set build command: *(leave empty)*
3. Set publish directory: `/` (root)
4. Deploy

### Option 3: Any Static Host

Upload all files via FTP to any web server. No server-side code required.

---

## 🎨 Brand Identity

| Color | Hex | Usage |
| ------- | ----- | ------- |
| **Charcoal** | `#1A1D24` | Primary background (60%) |
| **Electric Purple** | `#7B2CBF` / `#9D4EDD` | Secondary color, headings (30%) |
| **Neon Cyan** | `#00F5D4` | Accent, CTAs, metrics (10%) |
| **Dark Teal** *(light mode)* | `#008B7A` | Cyan replacement for readability |

**Typography:**

- **Arabic:** Cairo / Tajawal
- **English:** Inter / Space Grotesk
- **Style:** Minimalist Modern Tech

---

## 🌐 Bilingual System

The site uses a custom i18n system:

- **`data-i18n="key"`** — For plain text (uses `textContent`)
- **`data-i18n-html="key"`** — For text with HTML tags like `<strong>`, `<br>` (uses `innerHTML`)
- **`data-testi="N"`** — For testimonial original text (always shown)
- **`data-testi-trans="N"`** — For testimonial translation (hidden in Arabic)

**To add a new language:**

1. Add a new object to `translations` in `script.js`
2. Copy all keys from the `en` object
3. Translate values
4. Add a toggle button in `index.html`

---

## 📞 Contact

- **Email:** [aymanrizk83@gmail.com](mailto:aymanrizk83@gmail.com)
- **Phone / WhatsApp:** [+20 127 949 6786](https://wa.me/201279496786)
- **LinkedIn:** [linkedin.com/in/aymanrezk](https://www.linkedin.com/in/aymanrezk)
- **GitHub:** [github.com/AymanRezk2](https://github.com/AymanRezk2)
- **TikTok:** [@_ayman_rezk](https://www.tiktok.com/@_ayman_rezk)

---

## 📄 License

© 2026 Ayman Rezk. All rights reserved.

This project is a personal portfolio. The code structure may be referenced for learning purposes, but the content, design, images, and brand identity are proprietary.

---

## 🤝 Credits

- **Design & Development:** Ayman Rezk
- **Icons:** Font Awesome
- **Fonts:** Google Fonts
- **Carousel:** Slick Carousel by Ken Wheeler
- **Inspiration:** Modern data analytics & SaaS portfolios
