# Zeyaam Shahid - Personal Website

A modern, responsive personal website built with React, TypeScript, and Vite. Features a dark gradient design with a professional timeline layout showcasing work experience and achievements.

## ✨ Features

- **Modern Design**: Dark gradient background with subtle grain texture
- **Responsive Layout**: Mobile-first design that works on all devices
- **Professional Timeline**: Interactive work history with elegant timeline design
- **Loading Animation**: Smooth intro animation with typewriter effect
- **Optimized Performance**: Asset preloading and intelligent loading states
- **Type-Safe**: Built with TypeScript for robust development

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **CSS Variables** - Centralized theming system

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/zeyaam.com.git
cd zeyaam.com
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── LoadingScreen/   # Intro animation
│   ├── MainContent/     # Main content area
│   └── Sidebar/         # Navigation sidebar
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── styles/              # CSS variables and styles
└── App.tsx              # Main app component
```

## 🎨 Customization

### Colors
Edit `src/styles/variables.css` to customize the color scheme:
```css
:root {
  --gradient-light: #091625;
  --gradient-dark: #000918;
  --timeline-dot: #0abde3;
  /* ... other variables */
}
```

### Loading Animation
Toggle the loading screen in `src/pages/homepage/HomePage.tsx`:
```typescript
const SHOW_LOADING_ANIMATION = true; // Set to false to disable
```

### Content
Update personal information and work history in `src/pages/homepage/HomePage.tsx`:
```typescript
const personalInfo = {
  name: "Your Name",
  location: "Your Location",
  greeting: "Your greeting message..."
};
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The `dist/` folder will contain the production-ready files.

## 📱 Features Overview

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Session-Based Loading**: Loading animation only shows on first visit
- **Asset Preloading**: Images are preloaded for smooth experience
- **Fade Transitions**: Smooth transitions between loading and content states
- **Timeline Components**: Modular, reusable timeline item components
