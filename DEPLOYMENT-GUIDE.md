# Greene Mechanical Group - Deployment Guide

Complete guide for deploying the GMG website to production.

## 📦 What You Have

This repository contains a production-ready static website built with:
- **Vite** (build tool)
- **TypeScript** (type-safe JavaScript)
- **Tailwind CSS** (utility-first styling)
- **Vanilla JS** (no framework dependencies)

The production files are located in the `dist/` folder after running `npm run build`.

---

## 🚀 Quick Deploy to Netlify

### Option 1: Netlify UI (Recommended for First-Time)

1. **Sign up** at [netlify.com](https://netlify.com)
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the entire `dist/` folder
4. Your site is live! 🎉

Netlify will automatically:
- Read the `netlify.toml` configuration
- Apply security headers
- Enable form handling
- Provide a free HTTPS domain

### Option 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy the dist folder
netlify deploy --prod --dir=dist
```

### Option 3: Connect to Git (Continuous Deployment)

1. Push your code to GitHub/GitLab/Bitbucket
2. In Netlify, click **"Add new site" → "Import an existing project"**
3. Connect your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

Every push to your main branch will automatically redeploy! 🔄

---

## 🌐 Custom Domain Setup

1. In Netlify dashboard, go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `gmg-services.ie`)
4. Follow DNS instructions to:
   - Add A record pointing to Netlify's load balancer
   - Or add CNAME record pointing to your Netlify subdomain
5. Enable HTTPS (automatic with Let's Encrypt)

**Recommended DNS Records:**
```
Type    Name    Value
A       @       75.2.60.5 (Netlify's IP - check current)
CNAME   www     [your-site].netlify.app
```

---

## 📧 Contact Form Setup

The contact form uses **Netlify Forms** (no backend needed!):

1. Form will work automatically when deployed to Netlify
2. View submissions: **Netlify Dashboard → Forms**
3. Set up email notifications:
   - Go to **Site settings → Forms → Form notifications**
   - Add email notification to: `hello@gmg-services.ie`
4. Optional: Add spam filtering with Akismet or reCAPTCHA

**Update Contact Details:**
1. Edit `site.config.ts`:
   ```typescript
   export const SITE_CONFIG = {
     phone: '+353 87 XXX XXXX',  // Replace with real number
     email: 'hello@gmg-services.ie',  // Replace with real email
     // ...
   }
   ```
2. Rebuild: `npm run build`
3. Redeploy the new `dist/` folder

---

## 🧪 Local Testing

Test the production build locally before deploying:

### Using Python (if installed):
```bash
cd dist
python -m http.server 8000
```

### Using Node.js:
```bash
npx serve dist
```

### Using PHP:
```bash
cd dist
php -S localhost:8000
```

Then open: **http://localhost:8000**

---

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] **Contact info updated** in `site.config.ts`
- [ ] **Phone number** is correct (appears in "Call Dan" buttons)
- [ ] **Email address** is correct (for form submissions)
- [ ] **Images optimized** (all images under 500KB)
- [ ] **Test mobile view** (360px - 428px screens)
- [ ] **Test hamburger menu** (opens/closes, ESC key works)
- [ ] **Test contact form** (validation works)
- [ ] **Run build** (`npm run build`) successfully
- [ ] **No console errors** in browser

---

## 📱 Mobile Optimization Features

The site is fully optimized for mobile:

✅ **Responsive Navigation**
- Hamburger menu on screens < 768px
- Keyboard accessible (Tab, ESC, Enter)
- Touch-optimized tap targets

✅ **Fluid Typography**
- Text scales smoothly from 360px to 1440px+
- Uses CSS `clamp()` for responsive sizing
- No text overflow or awkward wrapping

✅ **Performance**
- Hero logo loads immediately (`loading="eager"`)
- Other images lazy-load (`loading="lazy"`)
- Parallax effects disabled on mobile
- Minified CSS and JS

---

## 🔒 Security Headers

The `netlify.toml` file includes production-grade security headers:

```toml
X-Frame-Options: DENY              # Prevents clickjacking
X-Content-Type-Options: nosniff    # Prevents MIME sniffing
X-XSS-Protection: 1; mode=block    # XSS protection
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Plus aggressive caching for static assets (1 year).

---

## 🔧 Development vs Production

### Development (this Replit):
```bash
npm run dev
```
- Hot module reloading
- Source maps for debugging
- Runs on port 5000

### Production Build:
```bash
npm run build
```
- Minified JS/CSS
- Optimized images
- Output in `dist/` folder
- Ready for static hosting

---

## 📊 Performance Targets

Expected Lighthouse scores:

| Metric              | Target | Notes                        |
|---------------------|--------|------------------------------|
| Performance         | 95+    | Fast load, optimized images  |
| Accessibility       | 95+    | WCAG AA compliant            |
| Best Practices      | 95+    | Security headers applied     |
| SEO                 | 100    | Meta tags, sitemap, robots   |

Test with: **Chrome DevTools → Lighthouse**

---

## 🆘 Troubleshooting

### Form not submitting?
- Ensure deployed to Netlify (forms don't work locally)
- Check form has `data-netlify="true"` attribute
- Verify no JavaScript errors in console

### Images not loading?
- Check file paths are relative (start with `/`)
- Verify images exist in `public/assets/`
- Check browser console for 404 errors

### Mobile menu not working?
- Clear browser cache
- Check JavaScript loaded (view source → see `<script>` tag)
- Test in incognito mode

### Horizontal scroll on mobile?
- Check for elements with fixed widths
- Use browser DevTools → Mobile view to debug
- CSS overflow-x: hidden applied to body

---

## 📞 Support

For issues or questions:
- Check browser console for errors
- Test in different browsers (Chrome, Firefox, Safari)
- Verify all files in `dist/` folder are deployed

---

## 🎯 Next Steps After Deployment

1. **Submit to Google Search Console**
   - Verify domain ownership
   - Submit sitemap: `https://gmg-services.ie/sitemap.xml`

2. **Set up Google Analytics** (optional)
   - Add tracking code to `index.html`
   - Rebuild and redeploy

3. **Test Contact Form**
   - Submit a test enquiry
   - Verify email notification received

4. **Share on Social Media**
   - Facebook, LinkedIn, etc.
   - Open Graph tags ensure nice previews

5. **Monitor Performance**
   - Use Netlify Analytics
   - Check form submissions weekly
   - Update content as needed

---

**Deployed successfully? Congratulations! 🎉**

Your GMG website is now live and ready to attract customers in Cork!
