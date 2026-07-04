# Lakshinder Singh - Professional Portfolio

A modern, responsive portfolio website showcasing skills, education, and contact information with WhatsApp integration.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with animated profile placeholder
- **About Section**: Personal introduction with statistics
- **Education Section**: Detailed academic background
- **Skills Section**: Visual representation of technical skills with progress bars
- **Contact Form**: WhatsApp-integrated contact form
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with gradient accents
- **Smooth Animations**: Subtle animations for enhanced user experience

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (optional, for customization)
- A WhatsApp account (for contact form functionality)

## 🛠️ Setup Instructions

### 1. Configure WhatsApp Number

**IMPORTANT**: Before using the portfolio, you must configure your WhatsApp number.

#### Step 1: Open `script.js`
Locate the file `script.js` in your project folder and open it in a text editor.

#### Step 2: Find the WhatsApp Configuration
Look for this line around line 20:
```javascript
const whatsappNumber = 'YOUR_WHATSAPP_NUMBER';
```

#### Step 3: Replace with Your Number
Replace `YOUR_WHATSAPP_NUMBER` with your actual WhatsApp number in international format without `+` or spaces.

**Example**: If your WhatsApp number is `+91 98765 43210`, replace it with:
```javascript
const whatsappNumber = '919876543210';
```

#### Step 4: Update HTML Links
Open `index.html` and replace `YOUR_WHATSAPP_NUMBER` in two places:
- Line 48: `<a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" class="social-link">`
- Line 157: `<a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" class="contact-social-link">`

Replace both occurrences with your number (same format as above).

### 2. Update Personal Information

You may want to update the following information in `index.html`:

- **Email**: Line 148 - Replace `lakshinder.singh@email.com` with your actual email
- **Phone**: Line 152 - Replace `+91 XXXXX XXXXX` with your phone number
- **Social Links**: Update GitHub and LinkedIn URLs with your actual profiles

### 3. Add Profile Photo (Optional)

Currently, the portfolio uses a placeholder icon. To add your photo:

1. Place your photo in the project folder and name it `profile.jpg` or `profile.png`
2. Open `index.html`
3. Replace the `profile-placeholder` div (lines 53-56) with:
```html
<div class="hero-image">
    <img src="profile.jpg" alt="Lakshinder Singh" class="profile-photo">
</div>
```

4. Add this CSS to `styles.css`:
```css
.profile-photo {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.3);
    animation: float 3s ease-in-out infinite;
}
```

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality and WhatsApp integration
└── README.md           # This file
```

## 🎨 Customization

### Colors
To customize the color scheme, edit the CSS variables in `styles.css` (lines 7-15):

```css
:root {
    --primary-color: #2563eb;      /* Primary blue color */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #10b981;       /* Green accent */
    --dark-color: #1f2937;         /* Dark text */
    --light-color: #f9fafb;        /* Light background */
    /* ... more variables */
}
```

### Fonts
The portfolio uses the system font stack for optimal performance. To use a custom font:

1. Add a Google Fonts link in `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

2. Update the `body` font-family in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Sections
To add or remove sections:

1. **Add a section**: Copy an existing section in `index.html` and modify the content
2. **Remove a section**: Delete the section HTML and its corresponding navigation link
3. **Reorder sections**: Move the HTML blocks and update navigation link order

## 🌐 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "main branch" as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a random URL
4. You can customize the domain in site settings

### Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your project from GitHub or drag and drop
3. Your site will be deployed automatically

## 📱 WhatsApp Integration Details

The contact form works by:
1. Collecting user input (name, email, subject, message)
2. Formatting the message with proper encoding
3. Opening WhatsApp with a pre-filled message
4. The user can then send the message to your WhatsApp

**Note**: The recipient (you) must have saved the sender's number in their contacts for the message to be delivered successfully.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Testing

To test the WhatsApp integration:

1. Configure your WhatsApp number as described above
2. Fill out the contact form on your portfolio
3. Click "Send via WhatsApp"
4. WhatsApp should open with your message pre-filled
5. Send the message to verify it works

## 🎓 Skills Display

The skills section shows progress bars that animate when scrolled into view. To adjust skill levels:

1. Open `index.html`
2. Find the skill cards in the Skills section (lines 119-177)
3. Adjust the `style="width: X%"` values on the skill-progress divs

## 📝 License

This portfolio is free to use and modify for personal and commercial purposes.

## 👨‍💻 Developer

**Lakshinder Singh**
- Diploma in Computer Application, Hartron Skill Centre, Ambala City
- B.Tech, Chitkara University
- 12th from Gurukul Nilokheri, Karnal, Haryana (75%)

## 🙏 Acknowledgments

- Font Awesome for icons
- Modern CSS features for responsive design
- WhatsApp API for contact integration

---

**Need Help?** If you encounter any issues or have questions about customization, feel free to reach out through the contact form on the portfolio!
