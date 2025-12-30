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
