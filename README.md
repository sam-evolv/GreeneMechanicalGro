# Greene Mechanical Group (GMG) Website

A sleek, minimalist marketing website for Greene Mechanical Group - RGI-registered gas, heating, and plumbing services in Cork, Ireland.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JS** - No framework overhead, maximum performance

## Features

- Single-page application with smooth scroll navigation
- Sticky header with transparent-to-solid transition
- Animated hero section with flame icon
- Reveal-on-scroll animations using IntersectionObserver
- Netlify form integration for contact enquiries
- Full SEO optimization with meta tags and Schema.org JSON-LD
- Accessible design (WCAG AA compliant)
- Performance optimized (Lighthouse score ≥95)
- Mobile responsive

## How to Run Locally

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder (target: ≤250KB total).

### Preview Production Build

```bash
npm run preview
```

## Where to Change Contact Details

All contact information, services, and brand details are centralized in **`site.config.ts`** for easy updates.

### Key fields to update:

- `phoneDisplay` - The phone number displayed on the site (e.g., "+353 87 000 0000")
- `phoneE164` - The E.164 format for tel: links (e.g., "+353870000000")
- `email` - Contact email address
- `serviceArea` - Geographic coverage area
- `address` - Business address
- `hours` - Business hours
- `meta.siteUrl` - Your actual domain when deployed

Simply edit `site.config.ts` and the changes will automatically appear across the entire website. The JavaScript in `src/main.ts` dynamically populates contact information from the config file into the HTML, ensuring a single source of truth. This also updates the Schema.org JSON-LD for SEO automatically.

## How to Deploy on Netlify

### Option 1: Drag and Drop

1. Run `npm run build` to create the `dist/` folder
2. Go to [netlify.com](https://www.netlify.com) and sign in
3. Drag the `dist/` folder to the Netlify drop zone
4. Your site is live!

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Sign in to [Netlify](https://www.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Form Configuration

The contact form will automatically work on Netlify with no additional setup required. Form submissions will appear in your Netlify dashboard under "Forms".

### Custom Domain

Once deployed, you can add a custom domain in Netlify:
1. Go to Site settings > Domain management
2. Add your custom domain (e.g., gmg-services.ie)
3. Follow Netlify's DNS configuration instructions

## How to Replace the Logo

The current logo is a placeholder SVG located at `assets/logo-gmg.svg`.

### To replace with your own logo:

1. **If you have an SVG logo:**
   - Replace the contents of `assets/logo-gmg.svg` with your SVG code
   - Ensure the viewBox and dimensions are appropriate (current: 120x120)

2. **If you have a PNG/JPG logo:**
   - Save your logo as `assets/logo-gmg.png` (or .jpg)
   - Update `index.html` - change all instances of `/assets/logo-gmg.svg` to `/assets/logo-gmg.png`

3. **Generate favicons:**
   - Use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Upload your logo and generate all favicon sizes
   - Replace the placeholder files in the `public/` folder:
     - `favicon-32x32.png`
     - `apple-touch-icon.png`
   - Update `og.jpg` (1200×630px) for social media sharing

## Project Structure

```
gmg-website/
├── assets/              # SVG logo and icons
│   └── logo-gmg.svg
├── public/              # Static assets (favicons, OG image)
│   ├── sitemap.xml
│   ├── favicon-32x32.png.placeholder
│   ├── apple-touch-icon.png.placeholder
│   └── og.jpg.placeholder
├── src/
│   ├── main.ts          # TypeScript for interactivity
│   └── styles.css       # Tailwind base + custom styles
├── index.html           # Main HTML file
├── site.config.ts       # Centralized configuration
├── robots.txt           # SEO directives
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite build configuration
└── tsconfig.json        # TypeScript configuration
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- First load bundle: ≤250KB (target)
- Lighthouse Performance: ≥95
- Lighthouse Accessibility: ≥95
- No blocking JavaScript in head
- Optimized font loading with preconnect
- CSS minification and tree-shaking

## Changelog

### v1.0.0 (2025-10-29)

- Initial release
- Single-page marketing website
- 7 service cards (2×3 grid, 1 hidden on mobile)
- 3 sector panels (Domestic, Commercial, Industrial)
- 4-step process timeline
- Contact form with Netlify integration
- Sticky header with scroll transition
- Reveal-on-scroll animations
- Full SEO optimization
- Schema.org LocalBusiness JSON-LD
- Mobile responsive design
- Dark theme with gold accents

## License

Copyright © 2025 Greene Mechanical Group. All rights reserved.

## Support

For website support, contact the developer.
For GMG services, visit the contact section or call +353 87 000 0000.
