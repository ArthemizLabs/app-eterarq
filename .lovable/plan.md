

## Plan: Replace portfolio carousel with photo grid + hover overlay

Replace the current `PortfolioCarousel` component with a 3-column, 2-row photo grid (like the reference images). On hover, each image shows a dark overlay with the project name and a subtle text shadow.

### Changes

**1. New component: `src/components/ui/portfolio-grid.tsx`**
- Grid layout: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`
- Each cell is an image with `aspect-ratio` and `object-cover`
- On hover: dark overlay (`bg-black/40`) fades in with the project name centered in white, with `text-shadow` for readability
- Smooth transition (~300ms)
- Optional: clicking opens the existing lightbox (reuse pattern from stacked-cards)

**2. Update `src/pages/LandingPage.tsx` — `Projects` function**
- Replace `PortfolioCarousel` import/usage with `PortfolioGrid`
- Restructure the data: each item needs `image`, `title` (project name shown on hover)
- Group images by project if desired (e.g. "Consultório Médico", "Numer+Pétalla")
- Keep the 6 images in a 3x2 grid

### Grid item hover behavior
```text
┌─────────────────┐
│                  │
│   (photo)        │  ← normal state
│                  │
└─────────────────┘

┌─────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  Consultório    │  ← hover: dark overlay + project name
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓  │
└─────────────────┘
```

### Technical details
- Uses `framer-motion` for hover overlay animation (consistent with rest of project)
- Rounded corners (`rounded-xl`) on each grid cell
- Text shadow via inline style `textShadow: "0 2px 8px rgba(0,0,0,0.5)"` for name readability
- Lightbox with prev/next navigation reused from existing pattern

