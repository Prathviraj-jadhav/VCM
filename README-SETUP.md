# Vibe Create Media Website

## Quick Start

### Prerequisites
- **Node.js** 18+ or **Bun** (recommended)
- npm, yarn, or bun package manager

### Installation

```bash
# 1. Extract the archive
tar xzf vibe-create-media.tar.gz -C vibe-create-media
cd vibe-create-media

# 2. Install dependencies
bun install
# OR: npm install

# 3. Run development server
bun run dev
# OR: npm run dev

# 4. Open http://localhost:3000
```

### Production Build

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main entry (SPA with client-side routing)
│   │   ├── layout.tsx        # Root layout (fonts, metadata, tab animator)
│   │   └── globals.css       # Global styles + Tailwind
│   ├── components/
│   │   ├── sections/         # Home page sections (Hero, Services, etc.)
│   │   ├── pages/            # Inner pages (About, Services, UGC, etc.)
│   │   ├── overlays/         # Drawer overlays (Project, UGC, Careers)
│   │   ├── shared/           # Navbar, Footer, FloatingActions, etc.
│   │   ├── blocks/           # Feature blocks (Pan-India map, etc.)
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   │   ├── data.ts           # All content data (services, case studies, etc.)
│   │   ├── page-context.tsx  # Client-side hash router
│   │   └── utils.ts          # Utility functions
│   └── hooks/                # Custom hooks
├── public/
│   ├── images/               # Team photos, icons, logo, favicon
│   └── robots.txt
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS transitions + custom scroll animations
- **Brand Color**: #FFD400 (Yellow)

## Customization

- **Content**: Edit `src/lib/data.ts` for services, case studies, team, blogs, UGC categories
- **Colors**: Brand yellow `#FFD400` is used throughout components
- **Images**: Replace files in `public/images/`
- **Favicon**: Replace `public/images/favicon.png`
