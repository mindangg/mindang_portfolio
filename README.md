# Portfolio — React + Vite + TypeScript + Tailwind CSS

A creative, production-grade portfolio website inspired by chimung.github.io/portfolio.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.tsx           # Entry point
    ├── App.tsx            # Root component
    ├── index.css          # Global styles + Tailwind
    ├── types.ts           # TypeScript interfaces
    ├── data.ts            # Content data (projects, skills, etc.)
    ├── hooks/
    │   └── useScrollAnimation.ts   # Intersection Observer hook
    ├── components/
    │   ├── Cursor.tsx     # Custom cursor
    │   ├── Navbar.tsx     # Sticky navigation
    │   └── Footer.tsx     # Footer
    └── sections/
        ├── Hero.tsx       # Hero / landing section
        ├── About.tsx      # About + stats
        ├── Work.tsx       # Projects grid with filter
        ├── Skills.tsx     # Skills bars + tools
        ├── Experience.tsx # Timeline
        └── Contact.tsx    # Contact form
```

## ✏️ Customization

1. **Personal info** — Edit `src/data.ts` to update your name, projects, skills, and experience.
2. **Colors & fonts** — Modify `tailwind.config.js` to change the color palette or typography.
3. **Sections** — Add or remove sections in `src/App.tsx`.
4. **Your photo** — Replace the placeholder in `src/sections/About.tsx` with an `<img>` tag.
5. **Contact form** — Wire up the form in `src/sections/Contact.tsx` to a backend or service like Formspree, EmailJS, or Resend.

## 🎨 Design System

| Token | Value |
|-------|-------|
| `cream` | `#f5f2eb` (background) |
| `ink` | `#0a0a0a` (text) |
| `gold` | `#c8a96e` (accent) |
| `accent` | `#e85d3a` (highlight) |
| Display font | Playfair Display |
| Body font | DM Sans |
| Mono font | JetBrains Mono |

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **TypeScript** — Type safety
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon set
