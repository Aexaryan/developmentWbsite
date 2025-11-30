# Arya Tech Portfolio

A professional, minimal portfolio website for Arya Tech, built with pure HTML, CSS, and JavaScript. Features multi-language support (English, Farsi, Swedish), SEO optimization, and a clean black and white design.

## Features

- ✅ **Multi-language Support**: English, Farsi (Persian), and Swedish translations
- ✅ **SEO Optimized**: Comprehensive meta tags, structured data (Schema.org), Open Graph tags
- ✅ **AEO & LLM Friendly**: Optimized for Answer Engine Optimization and Large Language Models
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **Minimal Professional Design**: Clean black and white aesthetic
- ✅ **No Backend Required**: Pure static HTML - works with any hosting (even free hosting)
- ✅ **Fast Loading**: Lightweight and optimized for performance

## Project Showcases

The portfolio includes showcases for:

1. **SMS Gateway Android App** - Kotlin, Android Studio
2. **Smart Shopping App** - React, Cloudflare Workers, Node.js
3. **Film Production Management** - React, Cloudflare Workers
4. **Taxi Offer Platform** - React, Cloudflare Workers, Node.js

## Setup Instructions

1. **Update Personal Information**:
   - Open `index.html` and replace "Your Name" with your actual name
   - Update the email address in the contact section
   - Replace `https://yourdomain.com` with your actual domain URL

2. **Customize Content**:
   - Edit translations in `translations.js` to match your experience
   - Modify project descriptions to reflect your actual work
   - Update skills section as needed

3. **Deploy**:
   - Upload all files to any web hosting service
   - Works with free hosting like GitHub Pages, Netlify, Vercel, or any static hosting
   - No server-side requirements needed

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Language switching and functionality
├── translations.js     # Multi-language content
└── README.md          # This file
```

## SEO Features

- Semantic HTML5 structure
- Schema.org structured data (Person, WebSite, SoftwareApplication)
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- Hreflang tags for multi-language support
- Meta descriptions and keywords
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Changing Colors

The design uses CSS variables in `styles.css`. To change colors, modify:

```css
:root {
    --primary-color: #000000;    /* Black */
    --secondary-color: #ffffff;  /* White */
    --text-color: #000000;       /* Text color */
    --bg-color: #ffffff;          /* Background */
}
```

### Adding More Languages

1. Add translations to `translations.js` following the existing structure
2. Add a language button in `index.html` navigation
3. Update the language switcher in `script.js`

## License

This portfolio template is free to use and modify for personal and commercial purposes.

## Contact

For questions or customization help, update the contact information in the HTML file.

