# Greene Mechanical Group Website

## Project Overview

Production-ready marketing website for Greene Mechanical Group (GMG), a Cork-based gas, heating, and plumbing contractor. Built with Vite, vanilla TypeScript, and Tailwind CSS for optimal performance and minimal bundle size.

## Tech Stack

- **Frontend**: Vite + vanilla TypeScript + Tailwind CSS
- **Deployment**: Netlify (static hosting with form handling)
- **No backend required**

## Recent Changes

### 2025-10-29 - Motion System & Logo Enhancements
- **Premium Motion System**: Added scroll-synchronized parallax effects across all sections
  - Hero parallax: Multi-layer depth with background, logo, and text moving at different speeds
  - Scroll-triggered lighting: Dynamic blue glow that follows cursor movement
  - Cursor glow effect: Subtle gold radial gradient that smoothly tracks mouse position
  - Reactive flame animation: Logo glow intensifies based on scroll velocity
  - Magnetic buttons: Interactive hover effects with radial spotlights on all CTAs
  - Service card magnetic glow: Blue radial gradient spotlight on hover
  - Footer reveal: Smooth fade-in and slide-up animation when approaching page bottom
  - Section entry animations: Fade-up reveal for all cards and sections on scroll
- **Logo Integration**: Complete GMG branding across all touchpoints
  - Hero section: 175px logo with breathing animation + blue flame glow
  - Header navigation: 105px logo with flame animation
  - Footer: 96px logo (doubled from original 48px)
  - Favicon: Complete favicon suite (16x16, 32x32, 180x180) for cross-platform compatibility
  - Processed transparent logo with white background removal via Python/Pillow
- **Typography System**: Swiss-precision font hierarchy
  - Headings: Poppins (500/600/700) with tight letter-spacing (-0.03em hero, -0.015em sections)
  - Body text: Inter (400/500) for optimal readability
  - All uppercase headings for luxury aesthetic

### 2025-10-29 - Initial Implementation
- Created complete single-page marketing website
- Implemented sticky header with scroll transitions
- Added hero section with animated flame logo
- Built services grid (2×3 layout) with reveal animations
- Added sectors section (Domestic, Commercial, Industrial)
- Created 4-step process timeline
- Implemented contact form with Netlify integration
- Added full SEO optimization (meta tags, Schema.org JSON-LD)
- Configured centralized site.config.ts for easy updates
- Set up build pipeline with Vite

## Project Architecture

### Configuration
- `site.config.ts` - Centralized configuration for all contact details, services, and brand tokens
- `tailwind.config.js` - Custom brand colors (ink #0B0D10, gold #D4B15F, gas blue #2892E5)
- `vite.config.ts` - Build optimization settings with allowedHosts for Replit environment

### Source Files
- `src/main.ts` - Main application logic (header, forms, smooth scroll, reveal animations)
- `src/motion.ts` - Advanced motion system (parallax, magnetic effects, reactive animations)
- `src/styles.css` - Tailwind + custom CSS with glassmorphic depth treatment
- `index.html` - Single-page structure with semantic HTML5

### Key Features
- **Cinematic Motion**: Scroll-synchronized parallax, reactive flame glow, magnetic buttons
- **Premium Design**: Glassmorphic depth, dark luxury gradients, Swiss typography precision
- **Sticky Header**: Transparent-to-solid transition with logo flame animation
- **Smart Animations**: IntersectionObserver-based reveals, section fade-ups, footer unveil
- **Interactive Effects**: Cursor tracking, dynamic lighting, magnetic hover spotlights
- **Netlify Forms**: Integrated with honeypot spam protection
- **Performance**: Optimized for Lighthouse ≥95, mobile-first responsive
- **Accessibility**: WCAG AA compliant with semantic HTML5

### Contact Details
All editable in `site.config.ts`:
- Phone: +353 87 000 0000 (placeholder - TODO update)
- Email: hello@gmg-services.ie (placeholder - TODO update)
- Service area: Cork & surrounding counties

## Deployment

Website is ready for Netlify deployment:
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Forms will automatically work via Netlify

## Design System

### Color Palette
- **Ink Dark**: #0B0D10 → #111317 (background gradient)
- **Panel**: #14161B (glassmorphic surfaces)
- **Gold**: #D4B15F (primary brand, CTAs)
- **Gold Light**: #F0D488 (gradients, highlights)
- **Gas Blue**: #2892E5 (accent, flame, trust badges)
- **Text**: #EAECEF (primary text)
- **Text Muted**: #A9B0BA (body copy)

### Motion Principles
- **Parallax Layers**: Background (0.5×), Logo (0.3×), Text (fade on scroll)
- **Reactive Physics**: Flame glow intensity = scroll velocity / 15
- **Magnetic Pull**: Buttons translate 3px toward cursor on hover
- **Smooth Easing**: cubic-bezier(0.4, 0, 0.2, 1) for all transitions
- **Mobile Optimization**: Parallax disabled on touch devices for performance

## Next Steps

- [ ] Replace placeholder contact details in site.config.ts
- [x] Add GMG logo with transparent background
- [x] Generate and add favicons (complete suite)
- [ ] Create OG social image (public/og.jpg, 1200×630px)
- [ ] Test form submissions on Netlify preview
- [ ] Add analytics if needed (privacy-compliant)
