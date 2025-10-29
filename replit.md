# Greene Mechanical Group Website

## Project Overview

Production-ready marketing website for Greene Mechanical Group (GMG), a Cork-based gas, heating, and plumbing contractor. Built with Vite, vanilla TypeScript, and Tailwind CSS for optimal performance and minimal bundle size.

## Tech Stack

- **Frontend**: Vite + vanilla TypeScript + Tailwind CSS
- **Deployment**: Netlify (static hosting with form handling)
- **No backend required**

## Recent Changes

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
- `tailwind.config.js` - Custom brand colors (ink, gold, gas blue)
- `vite.config.ts` - Build optimization settings

### Key Features
- Sticky header with transparent-to-solid transition on scroll
- IntersectionObserver-based reveal animations
- Netlify form integration with honeypot spam protection
- Performance optimized (target: Lighthouse ≥95)
- Accessibility compliant (WCAG AA)
- Mobile-first responsive design

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

## Next Steps

- [ ] Replace placeholder contact details in site.config.ts
- [ ] Add real logo to replace assets/logo-gmg.svg
- [ ] Generate and add favicons (favicon-32x32.png, apple-touch-icon.png)
- [ ] Create OG social image (public/og.jpg, 1200×630px)
- [ ] Test form submissions on Netlify preview
- [ ] Add analytics if needed (privacy-compliant)
