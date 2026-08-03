# M. Zohaib Safdar — Portfolio

A futuristic 2027-aesthetic portfolio built with **Next.js 14**, **Tailwind CSS**, **GSAP**, **Framer Motion**, **AOS**, and **React Icons**. Features glassmorphism, custom cursor, dark/light mode, page transitions, animated skill bars, parallax hero, and a scroll-triggered timeline.

## ✨ Features

- **Multi-page** architecture — Home, About, Skills, Experience, Projects, Contact
- **Dark & Light themes** — smooth toggle powered by `next-themes`
- **Glassmorphism** — heavy use of `backdrop-filter` with HSL design tokens
- **GSAP animations** — character-by-character headline reveal, 3D photo parallax, animated skill bars
- **Framer Motion** — page transitions, pill-based nav indicator, button micro-interactions, mobile menu
- **AOS** — scroll-triggered reveals throughout
- **Custom cursor** — blend-mode ring that scales on hover
- **Aurora background** — mouse-tracked radial spotlight + animated gradient orbs + grid overlay
- **Scroll progress bar** at the top
- **Animated counters**, **marquee tech stack**, **timeline**, **contact form**
- Fully **responsive** — mobile → 4K
- Uses **react-icons** throughout

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
zohaib-portfolio/
├── public/
│   └── profile.jpg          # Your profile photo
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout (fonts, theme, navbar, footer)
│   │   ├── page.js          # Home
│   │   ├── globals.css      # Global styles + design tokens
│   │   ├── about/page.js
│   │   ├── skills/page.js
│   │   ├── experience/page.js
│   │   ├── projects/page.js
│   │   └── contact/page.js
│   ├── components/
│   │   ├── AOSProvider.jsx
│   │   ├── AuroraBackground.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Counter.jsx
│   │   ├── Cursor.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SkillCard.jsx
│   │   ├── TechMarquee.jsx
│   │   ├── ThemeProvider.jsx
│   │   └── ThemeToggle.jsx
│   └── lib/
│       └── data.js          # All portfolio data (edit this to customize)
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.mjs
├── jsconfig.json
└── package.json
```

## ✏️ Customizing

All content (name, contact, skills, projects, experience) lives in one file:

```
src/lib/data.js
```

Edit that file to update your info — no component changes needed.

**Change profile photo:** replace `public/profile.jpg` with your own.

**Change color scheme:** edit the HSL variables in `src/app/globals.css` under `:root` (light) and `.dark` (dark).

**Change fonts:** edit the font imports in `src/app/layout.js`. Currently using Space Grotesk (sans), Syne (display), and JetBrains Mono.

## 🎨 Design System

- **Primary:** Electric Violet (`hsl(265 95% 70%)` dark / `hsl(258 90% 58%)` light)
- **Accent:** Cyan (`hsl(185 95% 55%)` dark / `hsl(190 95% 45%)` light)
- **Gold:** Warm highlight for subtle accents
- **Fonts:** Syne (display), Space Grotesk (sans), JetBrains Mono (code)

## 📦 Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3.4
- GSAP 3.12
- Framer Motion 11
- AOS 2.3
- next-themes
- react-icons

## 📧 Contact

Built by **M. Zohaib Safdar** — Full-Stack MERN Developer
- Email: za789688@gmail.com
- Phone: +92 302-2375072
- Location: Lahore, Pakistan

---

Made with precision. Deployed with confidence.
