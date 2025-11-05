# Greene Mechanical Group - Static Website

Production-ready static website for GMG - RGI-registered gas, heating, and plumbing services in Cork, Ireland.

## Deploy to Netlify (Drag and Drop - No Build)

### Step 1: Download

Download this entire project as a ZIP file.

### Step 2: Go to Netlify

1. Visit [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Deploy manually"**

### Step 3: Upload

Drag and drop this entire folder (or the ZIP file) onto the Netlify upload area.

**That's it!** Your site will be live with:
- ✅ HTTPS enabled automatically
- ✅ Contact form submissions working (Netlify Forms)
- ✅ Security headers configured
- ✅ Long-term asset caching

### Custom Domain

After deployment:
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter `gmg-services.ie`
4. Follow DNS instructions (add A or CNAME record)
5. HTTPS enabled automatically via Let's Encrypt

## Deploy on Replit (Static HTML/CSS/JS)

### Step 1: Create Repl

1. Go to [replit.com](https://replit.com)
2. Create a new **"Static HTML/CSS/JS"** Repl

### Step 2: Upload Files

Upload all files from this project to your Repl:
- `index.html`
- `css/main.css`
- `js/main.js`
- `assets/` folder (with all images and icons)
- `site.webmanifest`
- `robots.txt`
- `sitemap.xml`
- `netlify.toml`

### Step 3: Run

Click the **"Run"** button. Your site opens automatically!

## Run Locally

### Python (simplest)

```bash
python -m http.server 8000
```

Visit: http://localhost:8000

### Node.js

```bash
npx serve
```

### PHP

```bash
php -S localhost:8000
```

## Features

### Mobile-First Design
✅ Responsive on all screens (360px to 1440px+)  
✅ No horizontal scroll  
✅ Fluid typography with clamp()  
✅ Touch-optimized navigation  

### Accessibility (WCAG AA)
✅ Full keyboard navigation (Tab, Shift+Tab, ESC)  
✅ Focus trap in mobile menu  
✅ All forms properly labeled  
✅ Screen reader friendly  
✅ Visible focus states  

### Performance
✅ WebP images with JPG fallback  
✅ Lazy loading for non-hero images  
✅ No build step required  
✅ No frameworks or dependencies  
✅ Expected Lighthouse score: 95+  

### Security
✅ XSS protection headers  
✅ Clickjacking prevention  
✅ Content security policies  
✅ 1-year cache for static assets  

## Customization

### Update Contact Information

Edit `index.html` and replace:

- **Phone**: `+353 87 000 0000` → Your real number (appears in 3 places)
- **Email**: `hello@gmg-services.ie` → Your real email

### Change Colors

Edit `css/main.css` at the top (`:root` section):

```css
:root {
  --gold: #D4B15F;    /* Primary gold color */
  --gas: #2892E5;     /* Blue accent */
  --ink: #0B0D10;     /* Dark background */
}
```

### Replace Images

1. Add your images to `assets/img/` folder
2. Update paths in `index.html`:
   - Logo: `/assets/img/logo.svg`
   - Hero background: `/assets/img/hero.webp` and `/assets/img/hero.jpg`
   - Project images: `/assets/img/p1.jpg`, `/assets/img/p2.jpg`, `/assets/img/p3.jpg`

Tip: For best performance, use WebP format with JPG fallback (see `<picture>` element in hero section).

## Contact Form

The contact form uses **Netlify Forms** (no backend needed!):

1. Form works automatically when deployed to Netlify
2. View submissions: Netlify Dashboard → **Forms** tab
3. Set up email notifications in Netlify settings
4. Optional: Add spam protection (Akismet or reCAPTCHA)

**Note**: Forms only work when deployed to Netlify, not locally.

## File Structure

```
.
├── index.html              # Main HTML file
├── css/
│   └── main.css           # All styles (766 lines, no frameworks)
├── js/
│   └── main.js            # Vanilla JavaScript (224 lines)
├── assets/
│   ├── img/
│   │   ├── logo.svg       # GMG logo
│   │   ├── hero.webp      # Hero background (WebP)
│   │   ├── hero.jpg       # Hero background (JPG fallback)
│   │   ├── p1.jpg         # Project image 1
│   │   ├── p2.jpg         # Project image 2
│   │   └── p3.jpg         # Project image 3
│   └── icons/
│       ├── favicon.ico    # Browser favicon
│       ├── icon-192.png   # Android icon
│       ├── icon-512.png   # Android icon
│       └── apple-touch-icon.png  # iOS icon
├── site.webmanifest       # PWA manifest
├── robots.txt             # Search engine instructions
├── sitemap.xml            # SEO sitemap
├── netlify.toml           # Netlify configuration
└── README.md              # This file
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari 12+
- Android Chrome

## SEO Setup

After deployment:

1. **Google Search Console**:
   - Verify ownership
   - Submit sitemap: `https://gmg-services.ie/sitemap.xml`

2. **Google Analytics** (optional):
   - Add tracking code to `index.html` before `</head>`

## Troubleshooting

**Form not working?**
- Forms only work when deployed to Netlify (not locally)
- Check `data-netlify="true"` is on the `<form>` tag
- Ensure hidden `form-name` input exists

**Images not loading?**
- Check file paths start with `/` (e.g., `/assets/img/logo.svg`)
- Verify images exist in correct folders
- Check browser console for 404 errors

**Horizontal scroll on mobile?**
- All elements are constrained with `max-width: 100%`
- Test at 360px width in browser DevTools

## Performance Checklist

✅ Hero uses `<picture>` with WebP + JPG fallback  
✅ Non-hero images have `loading="lazy" decoding="async"`  
✅ CSS and JS minified for production (optional)  
✅ Long-term caching configured (1 year for assets)  
✅ Security headers enabled  

## License

© 2025 Greene Mechanical Group. All rights reserved.

---

**Questions?** Check inline code comments in `index.html`, `css/main.css`, and `js/main.js` for detailed explanations.

**Ready to deploy?** Just drag and drop to Netlify! 🚀
