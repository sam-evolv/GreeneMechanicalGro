# Greene Mechanical Group Website - Production Ready

## Project Overview
Production-grade marketing website for Greene Mechanical Group (GMG), an RGI-registered gas, heating, and plumbing service in Cork, Ireland.

## Current State: ✅ PRODUCTION READY

The site is fully built, mobile-optimized, and ready for deployment to Netlify.

## Tech Stack
- **Build Tool**: Vite
- **Language**: TypeScript (vanilla, no React)
- **Styling**: Tailwind CSS
- **Target**: Static site deployment (Netlify)

## Recent Changes (Dec 30, 2025)

### Mobile Menu Premium Upgrade (Dec 30, 2025)
1. **Premium Slide-in Drawer**:
   - Tighter width: `min(80vw, 300px)` for better proportions
   - Subtle radial gradient overlay for depth (no blur)
   - 2px gold border accent
   - Gold-tinted dividers (15% opacity)
2. **Larger Logo**: 50px height (brand-forward presence)
3. **Refined Nav Links**:
   - 52px touch targets with gold left bar on active
   - Tight letter-spacing for premium typography
4. **Polished Close Button**: Subtle background, gold on hover
5. **Optimized CTA**: 50px height button with 10px rounded corners
6. **Mobile Performance**:
   - Disabled `backdrop-filter` blur on mobile
   - Disabled card glow effects on mobile
   - Added `prefers-reduced-motion` support
7. **Accessibility**: Focus trap, ESC close, focus return to hamburger
8. **Scroll Lock**: Only locked when menu is open

### Header Nav Centering (Dec 30, 2025)
1. **Centered Navigation**: Nav links (Services, Sectors, About, Contact) now centered between logo and CTA
2. **Single Header CTA**: Removed "Request a Quote" from header, only "Call Now" remains (gold solid button)
3. **Absolute Positioning**: Nav uses `left-1/2 -translate-x-1/2` for true centering
4. **Mobile Menu**: Single "Call Now" CTA in mobile menu (removed duplicate)
5. **Hero Unchanged**: Still has both "Call Now" and "Request a Quote" buttons

### Mobile & Tablet Responsiveness (Dec 30, 2025)
1. **Global CSS Guardrails**:
   - `overflow-x: hidden` on html/body to prevent horizontal scroll
   - Max-width constraints on all media elements
2. **Mobile Menu Improvements**:
   - Body scroll lock preserves scroll position
   - 44px minimum touch targets
   - Max-height prevents menu overflow
3. **Responsive Breakpoints**:
   - Extra small (≤480px): Full-width hero buttons, compact spacing
   - Mobile (≤768px): 16px inputs prevent iOS zoom, stacked layouts
   - Tablet (768-1024px): 2-column grids, medium sizing
   - Desktop (1024px+): 3-column services grid
4. **Hero Section**: 100svh viewport height, stacked CTAs on mobile
5. **Contact Form**: Touch-friendly dropdown with viewport-aware max-height
6. **Footer**: Stacked layout on mobile with proper centering

### Netlify Forms + Custom Dropdown (Dec 30, 2025)
1. **Netlify Forms Integration**:
   - Form renamed to `gmg-contact` with proper `data-netlify="true"` attributes
   - Honeypot spam protection (`data-netlify-honeypot="bot-field"`)
   - Redirect to `/thank-you.html` on successful submission
2. **Custom Service Dropdown**:
   - Replaced native `<select>` with themed custom dropdown (dark + gold)
   - Full keyboard accessibility (Tab, Enter, Space, ArrowUp/Down, Escape)
   - Hidden input captures selected value for Netlify submission
3. **Thank You Page**: Created `public/thank-you.html` with matching theme

### Final Polish Pass
1. **Header CTAs**: Removed "Call Dan" button, replaced with refined "Call Now" and "Request a Quote" pill buttons
2. **Navigation**: Centered nav items with consistent gold-underline hover states
3. **Contact Info Updated**: 
   - Phone: 087 702 5171
   - Email: dgmechanicalgroup@gmail.com
4. **Hero Buttons**: Softer rounded styling, subtle hover animations (no jarring scale jumps)
5. **Services Section**: Tightened grid spacing, subtle card hover effects
6. **Visual Consistency**: Unified transition timing (200-250ms), reduced gold saturation
7. **Footer Enhanced**: Logo, contact info with icons, navigation links

## Previous Changes (Nov 5, 2025)

### Mobile-First Production Optimization
1. **Hamburger Menu**: Implemented accessible mobile navigation with:
   - ARIA attributes (aria-expanded, aria-label)
   - Full keyboard support (Tab, Shift+Tab, ESC)
   - Focus trap when menu is open
   - Focus return to toggle button on all close paths
   - Touch-optimized interactions

2. **Fluid Typography**: All text scales smoothly using `clamp()`
   - Hero title: `clamp(2rem, 8vw, 6.5rem)`
   - Section titles: `clamp(1.75rem, 5vw, 2.25rem)`
   - Body text: `clamp(0.95rem, 2vw, 1.05rem)`
   - No awkward wrapping on 360px-428px screens

3. **Mobile Responsiveness**:
   - No horizontal scroll on any screen size
   - Responsive logo sizing (70px mobile → 105px desktop)
   - Optimized spacing and padding for small screens
   - Touch-friendly button sizing

4. **Production Files Created**:
   - `netlify.toml` - Security headers + cache config
   - `robots.txt` - Search engine instructions
   - `sitemap.xml` - SEO sitemap
   - `site.webmanifest` - PWA manifest
   - `DEPLOYMENT-GUIDE.md` - Complete deployment instructions

5. **Performance Optimizations**:
   - Minified CSS (27.24 KB, gzipped: 5.41 KB)
   - Minified JS (8.82 KB, gzipped: 3.34 KB)
   - Lazy loading for non-critical images
   - Hero logo loads immediately (loading="eager")
   - 1-year cache for static assets

## Production Build

### Location
All production files are in the `dist/` folder:
```
dist/
├── index.html (28.51 KB)
├── assets/
│   ├── index-[hash].css (27.24 KB)
│   ├── index-[hash].js (8.82 KB)
│   ├── logo-gmg-transparent-[hash].png (163.50 KB)
│   └── hero-bg-[hash].png (1.33 MB)
├── netlify.toml
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.ico
├── favicon-32x32.png
└── apple-touch-icon.png
```

### Rebuild Command
```bash
npm run build
```

## Deployment Instructions

See **`DEPLOYMENT-GUIDE.md`** for complete deployment instructions.

### Quick Deploy to Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Click "Deploy manually"
3. Drag and drop the entire `dist/` folder
4. Done! Your site is live with HTTPS

## Architecture Decisions

### Design Choices
- **Cinematic luxury aesthetic**: Dark gradients, glassmorphic effects
- **Premium typography**: Poppins (headings), Inter (body text)
- **Color palette**: 
  - Ink (#0B0D10 → #111317)
  - Gold (#D4B15F)
  - Gas Blue (#2892E5)

### Motion System
- Scroll-synchronized parallax on hero
- Velocity-based flame glow
- Footer reveal animation
- Section reveal on scroll
- Single RAF coordinator to prevent conflicts
- Disabled on mobile/touch devices for performance

### Accessibility Features
- WCAG AA compliant
- Keyboard navigation throughout
- Focus trap in mobile menu
- Proper ARIA labels
- Screen reader friendly
- Semantic HTML5

### Performance Strategy
- Vite build optimization
- Tailwind CSS purging
- Asset minification
- Lazy loading
- Security headers (XSS, clickjacking protection)
- Long cache for immutable assets

## User Preferences

### Contact Information
Current placeholders (update in `site.config.ts`):
- Phone: +353 87 000 0000
- Email: hello@gmg-services.ie

After updating, rebuild with `npm run build`.

### No Cursor Glow
User requested removal of cursor glow effects - removed in previous iteration.

### No React Framework
User specifically requested vanilla TypeScript with Tailwind CSS, no React.

## Accessibility Review: ✅ PASSED

Architect verified:
- ✅ Focus trap loops correctly (Tab/Shift+Tab)
- ✅ Focus returns to toggle button on all close paths
- ✅ ESC key closes menu
- ✅ Click outside closes menu
- ✅ ARIA attributes properly implemented
- ✅ No keyboard navigation issues
- ✅ Production-ready for deployment

## Next Steps

1. **Update Contact Info**: Edit `site.config.ts` with real phone/email
2. **Deploy to Netlify**: Follow `DEPLOYMENT-GUIDE.md`
3. **Custom Domain**: Point `gmg-services.ie` to Netlify
4. **Test Forms**: Submit test enquiry to verify Netlify Forms
5. **Google Search Console**: Submit sitemap for indexing

## Files to Ignore

- `node_modules/` (dependencies)
- `.git/` (version control)
- `attached_assets/` (Replit-specific)

---

**Status**: Production ready, architect approved, ready for deployment 🚀
