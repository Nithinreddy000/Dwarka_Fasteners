# Dwarka Fasteners Website

A high-performance Next.js website built with TypeScript and Tailwind CSS 3.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Font:** Inter (Google Fonts with Next.js font optimization)

## Features

- ⚡ **High Performance** - Optimized for Core Web Vitals
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- ♿ **Accessible** - WCAG compliant with proper focus states
- 🖼️ **Image Optimization** - Next.js Image component with AVIF/WebP support
- 🚀 **Fast Loading** - Font optimization, code splitting, and caching

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── products/          # Products page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/              # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       └── index.ts
└── lib/                   # Utilities and constants
    ├── utils.ts
    └── constants.ts
```

## Performance Optimizations

- **Font Loading:** Uses `next/font` for optimal font loading
- **Image Optimization:** Configured for AVIF and WebP formats
- **Caching:** Static assets cached for 1 year
- **Code Splitting:** Automatic code splitting with Next.js
- **Compression:** Enabled in production builds

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
    },
  },
}
```

### Site Configuration

Update `src/lib/constants.ts` for site-wide settings like contact info, navigation, and social links.

## License

© 2024 Dwarka Fasteners. All rights reserved.
