# GitHub Copilot Instructions

## Project Overview
This is a modern presentation website built with React and enhanced with smooth animations.

## Tech Stack

### Core Framework
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool for fast development

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind CSS v4
- **Autoprefixer** - Automatically adds vendor prefixes to CSS

### Animation Library
- **Framer Motion** - Production-ready animation library for React
  - Used for page transitions, scroll animations, hover effects, and interactive elements
  - Provides smooth, physics-based animations

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx         # Landing section with animated background
│   ├── Features.jsx     # Feature cards with stagger animations
│   ├── About.jsx        # About section with tech stack display
│   └── Contact.jsx      # Contact section with CTA buttons
├── App.jsx              # Main app component
├── index.css            # Tailwind directives
└── main.jsx             # App entry point
```

## Coding Guidelines

### React Components
- Use functional components with hooks
- Prefer named exports for components
- Keep components focused and single-responsibility

### Styling with Tailwind
- Use Tailwind utility classes directly in JSX
- Leverage gradient utilities: `bg-gradient-to-*`, `from-*`, `to-*`, `via-*`
- Use backdrop blur for glassmorphism effects: `backdrop-blur-lg`
- Responsive design with mobile-first approach: use `md:`, `lg:` prefixes

### Animations with Framer Motion
- Import `motion` from 'framer-motion'
- Use `motion.div`, `motion.button`, etc. for animated elements
- Common animation patterns:
  - `initial` - Starting state
  - `animate` - Ending state
  - `whileHover` - Hover animations
  - `whileTap` - Click animations
  - `whileInView` - Scroll-triggered animations with `viewport={{ once: true }}`
  - `transition` - Control duration, delay, easing
  - `variants` - Reusable animation states for orchestration

### Animation Best Practices
- Use `staggerChildren` for sequential animations
- Add `viewport={{ once: true }}` to prevent re-triggering on scroll
- Keep animations under 1 second for UI responsiveness
- Use `ease: "easeInOut"` for natural motion
- Apply `whileHover` and `whileTap` for interactive feedback

## Color Palette
- Primary: Purple (`purple-400`, `purple-500`, `purple-900`)
- Accent: Pink (`pink-400`, `pink-500`, `pink-600`)
- Background: Slate (`slate-900`)
- Text: White and gray shades (`gray-300`, `gray-400`, `gray-500`)

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## When Adding New Features
1. Create components in `src/components/` directory
2. Use Framer Motion for all animations
3. Follow the existing gradient and glassmorphism design patterns
4. Ensure all interactive elements have hover and tap animations
5. Make components responsive using Tailwind breakpoints
6. Use `whileInView` for scroll-triggered animations

## Code Style
- Use ES6+ features (arrow functions, destructuring, template literals)
- Prefer `const` over `let` when possible
- Use meaningful variable and function names
- Keep JSX readable with proper indentation
- Extract repeated animation variants into constants
