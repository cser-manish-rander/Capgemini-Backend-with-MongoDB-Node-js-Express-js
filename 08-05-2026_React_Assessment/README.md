# Mega Sale Website - React

A modern, responsive website built with React featuring a Mega Sale landing page with animated hero section.

## Project Structure

```
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header component
│   │   ├── Header.css      # Header styles
│   │   ├── HeroSection.jsx # Hero/banner section
│   │   └── HeroSection.css # Hero section styles
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── index.jsx           # Entry point
│   └── index.css           # Global styles
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and visually appealing design with gradient backgrounds
- **Animations**: Smooth animations and transitions throughout the page
- **Interactive Elements**: Hamburger menu for mobile navigation
- **Social Links**: Quick access to social media platforms
- **Professional Code**: Clean, well-organized React components following best practices

## Installation

1. Navigate to the project directory:
   ```bash
   cd "08-05-2026 react assignment"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Components

### Header
- Logo with company name
- Navigation menu (HOME, ABOUT US, SHOP, LOGIN)
- Responsive hamburger menu for mobile devices
- Sticky positioning for always-visible navigation

### HeroSection
- Eye-catching banner with gradient background
- Circular image display with animations
- "MEGA SALE" heading with special styling
- Promotional description text
- "SHOP NOW" call-to-action button
- Social media icons (Twitter, Facebook, Instagram)
- Website URL display
- Decorative animated shapes

## Styling

The project uses CSS for styling with:
- CSS Grid and Flexbox for layouts
- CSS animations for visual effects
- Media queries for responsive design
- Gradient backgrounds for modern appearance
- CSS transitions for smooth interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling and animations
- **ES6+** - Modern JavaScript

## Notes

- The project uses a real image from Unsplash for the hero section (can be replaced with your own)
- All animations are GPU-optimized for smooth performance
- The design is fully responsive and works on all screen sizes
- Feel free to customize colors, text, and images as needed
