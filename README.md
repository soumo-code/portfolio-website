# Shubhodip Ghosh - Portfolio Website

A modern, professional, and fully responsive portfolio website designed specifically for a Commerce / B.Com Accountancy Honours student.

## Features

✨ **Modern Design**
- Dark professional background with elegant blue/gold accents
- Glassmorphism cards and smooth animations
- Fully responsive and mobile-friendly
- Premium UI suitable for teachers, recruiters, and employers

🎯 **Dynamic Features**
- Smooth scrolling navigation
- Scroll reveal animations
- Active navigation highlighting
- Sticky navigation bar
- Mobile hamburger menu
- Animated skill cards with hover effects
- Interactive social media cards
- Contact form with validation
- Back-to-top button
- Typing effect animation

📱 **Sections**
- **Home**: Hero section with profile photo and introduction
- **Bio**: Professional biography
- **About Me**: Education, interests, and location
- **Skills**: Microsoft Office, Bookkeeping, Account Management, Mathematics, Digital Marketing, Business Management
- **Interests**: Trading, Stock Market, Finance, Business, Accounting, Digital Marketing
- **Social Media**: Instagram, WhatsApp, Discord
- **Contact**: Contact information and form with validation

## Personal Information

- **Name**: Shubhodip Ghosh
- **Phone**: 6290495160
- **Email**: shubhodipghosh001@gmail.com
- **Address**: Ucchagar, Santra Nursery, PO-Shyamnagar, PS-Jagatdal, North 24 PGS, West Bengal, India - 743127
- **Course**: B.Com Accountancy Honours
- **Stream**: Commerce

## Social Media Links

- **Instagram**: [@shubhodip1ghosh](https://www.instagram.com/shubhodip1ghosh/)
- **WhatsApp**: [6290495160](https://wa.me/916290495160)
- **Discord**: [Join Server](https://discord.gg/VcG6QUE9)

## How to Use

### Option 1: Open Directly
Simply double-click `index.html` to open the website in your default browser.

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues:

```powershell
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## File Structure

```
Vi website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── profile.jpg         # Profile photo
└── README.md           # This file
```

## Customization

### Updating Personal Information

**HTML (index.html)**: Search and replace the following:
- Name: "Shubhodip Ghosh"
- Phone: "6290495160"
- Email: "shubhodipghosh001@gmail.com"
- Address: Update in About and Contact sections

**JavaScript (script.js)**: 
- Line 53: Update profile image path if needed

### Changing Colors

**CSS (styles.css)**: Edit the color variables at the top:
```css
:root {
    --primary-color: #2563eb;      /* Blue accent */
    --secondary-color: #d97706;    /* Orange accent */
    --gold-color: #fbbf24;         /* Gold accent */
    --dark-bg: #0a0a0a;            /* Dark background */
    --card-bg: #1a1a1a;            /* Card background */
}
```

### Adding/Removing Skills

In `index.html`, locate the `<div class="skills-grid">` section and add/remove skill cards:

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="skill-name">Your Skill</h3>
</div>
```

### Contact Form Backend Integration

The contact form currently has frontend validation only. To make it functional:

1. Add a backend API endpoint (Node.js, PHP, Python, etc.)
2. Update the form submission in `script.js` (line 139)
3. Replace the console.log with an actual API call:

```javascript
// Example using fetch
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
    contactForm.reset();
})
.catch(error => {
    showNotification('Failed to send message.', 'error');
});
```

## Icons

This website uses [Font Awesome 6.4.0](https://fontawesome.com/) for all icons. The library is loaded via CDN.

## Fonts

Primary font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0
- Google Fonts (Poppins)

## Performance Features

- Optimized animations
- Efficient scroll listeners
- Lazy loading for images
- Smooth scrolling
- Responsive images
- Minimal dependencies

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 968px - 1199px
- **Mobile Large**: 600px - 967px
- **Mobile Small**: Below 600px

## Notes

- The website is built with clean, maintainable code
- All personal information is accurate and up-to-date
- No fake qualifications, certifications, or achievements included
- Suitable for showing to teachers, recruiters, and employers
- Backend integration for contact form is pending
- All assets are locally created (no GitHub templates used)

## Future Enhancements

- Backend integration for contact form
- Email notification system
- Blog section for finance/trading insights
- Project showcase section
- Testimonials section
- Dark/Light mode toggle
- Multi-language support

## Support

For questions or issues, contact:
- **Email**: shubhodipghosh001@gmail.com
- **Phone**: 6290495160

---

**© 2026 Shubhodip Ghosh. All Rights Reserved.**

Built with ❤️ for Commerce Students
