# Greene Mechanical Group - Static Website

Production-ready static website for GMG gas, heating, and plumbing services in Cork, Ireland.

## 📦 What's Included

```
gmg-site/
├── index.html           # Main HTML file
├── css/
│   └── main.css        # All styles (no frameworks)
├── js/
│   └── main.js         # Vanilla JavaScript (no dependencies)
├── assets/
│   ├── img/            # Images and logos
│   └── icons/          # Favicons and app icons
├── site.webmanifest    # PWA manifest
├── robots.txt          # Search engine instructions
├── sitemap.xml         # SEO sitemap
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🚀 Deploy to Netlify

### Option 1: Drag and Drop (Easiest)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the entire `gmg-site` folder
4. Done! Your site is live with HTTPS 🎉

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from inside the gmg-site folder
cd gmg-site
netlify deploy --prod
```

### Configuration

The `netlify.toml` file is already configured with:
- ✅ No build command (static files)
- ✅ Security headers (XSS, clickjacking protection)
- ✅ Long-term caching for assets
- ✅ Form handling (Netlify Forms)

## 💻 Run Locally

### On Replit

1. Create a new **"Static HTML/CSS/JS"** Repl
2. Upload the `gmg-site` contents to the Repl
3. Click "Run" - opens `index.html` automatically

### Using Python

```bash
cd gmg-site
python -m http.server 8000
```

Visit: http://localhost:8000

### Using Node.js

```bash
cd gmg-site
npx serve
```

### Using PHP

```bash
cd gmg-site
php -S localhost:8000
```

## ✏️ Customization

### Update Contact Information

Edit `index.html` and search/replace:

- **Phone**: `+353 87 000 0000` → Your real number
- **Email**: `hello@gmg-services.ie` → Your real email
- **Location**: Update if needed

### Replace Placeholder Images

1. Add your images to `assets/img/`
2. Update `src` attributes in `index.html`:
   - Hero background: Line ~155
   - Logo: Multiple locations
   - Project images: Lines ~280-320

### Change Colors

Edit `css/main.css` at the top (`:root` section):

```css
:root {
  --gold: #D4B15F;    /* Primary gold color */
  --gas: #2892E5;     /* Blue accent */
  --ink: #0B0D10;     /* Dark background */
}
```

### Update Content

All content is in `index.html`:
- **Services**: Lines ~160-250
- **Sectors**: Lines ~260-320
- **About**: Lines ~330-350
- **Contact form**: Lines ~360-420

## 📱 Mobile Features

✅ **Responsive Design**: Works perfectly on 360px-1440px screens  
✅ **Hamburger Menu**: Accessible navigation with keyboard support  
✅ **Touch Optimized**: Large tap targets, no horizontal scroll  
✅ **Fast Loading**: Optimized images, minimal CSS/JS  

## ♿ Accessibility

✅ **WCAG AA Compliant**  
✅ **Keyboard Navigation**: Tab, Shift+Tab, ESC support  
✅ **Focus Trap**: Menu keeps focus when open  
✅ **Screen Reader Friendly**: Semantic HTML, ARIA labels  
✅ **Labeled Forms**: All inputs have associated labels  

## 📧 Contact Form

The form uses **Netlify Forms** (no backend needed!):

1. Form works automatically when deployed to Netlify
2. View submissions: Netlify Dashboard → Forms
3. Set up email notifications in Netlify settings
4. Optional: Add Akismet or reCAPTCHA for spam protection

## 🎯 Performance

- **No build step** - instant deployment
- **No frameworks** - lightweight and fast
- **No dependencies** - nothing to update or break
- **Optimized CSS** - mobile-first, modern techniques
- **Smooth scrolling** - enhanced UX
- **Long-term caching** - fast repeat visits

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔒 Security Headers

Configured in `netlify.toml`:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` - Restricts camera/mic/location

## 🌐 Custom Domain

In Netlify dashboard:
1. Go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter `gmg-services.ie`
4. Follow DNS instructions (add A or CNAME record)
5. HTTPS enabled automatically via Let's Encrypt

## 🔍 SEO Setup

After deployment:

1. **Google Search Console**:
   - Verify ownership
   - Submit sitemap: `https://gmg-services.ie/sitemap.xml`

2. **Google Analytics** (optional):
   - Add tracking code to `index.html` before `</head>`

3. **Social Media**:
   - Share your site - Open Graph tags are already set

## 📝 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari 12+
- Android Chrome

## 🆘 Troubleshooting

**Form not working?**
- Forms only work when deployed to Netlify (not locally)
- Check `data-netlify="true"` is on the `<form>` tag
- Ensure hidden `form-name` input exists

**Images not loading?**
- Check file paths start with `/` (e.g., `/assets/img/logo.png`)
- Verify images exist in the correct folders
- Check browser console for 404 errors

**Horizontal scroll on mobile?**
- All elements are constrained with `max-width: 100%`
- If issues persist, use browser DevTools to inspect

## 📄 License

© 2025 Greene Mechanical Group. All rights reserved.

---

**Questions?** Check the inline code comments in `index.html`, `css/main.css`, and `js/main.js` for detailed explanations.

**Ready to deploy?** Just drag and drop to Netlify! 🚀
