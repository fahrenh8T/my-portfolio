# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A React-based portfolio website for showcasing creative design and development work. Built with Create React App, React Router, and React Bootstrap. Configured for GitHub Pages deployment.

## Development Commands

### Running the Application
```bash
npm start              # Start development server on localhost:3000
npm run build          # Create production build in build/ directory
npm test               # Run test suite with react-scripts
```

### Deployment
```bash
npm run predeploy      # Build and create 404.html for GitHub Pages routing
npm run deploy         # Deploy to GitHub Pages (requires gh-pages package)
```

Note: The `predeploy` script creates a copy of index.html as 404.html to handle client-side routing on GitHub Pages.

## Architecture Overview

### Content Management System
All portfolio content is centralized in `src/content_option.js`. This is the single source of truth for:
- Personal information (name, title, description)
- Social media links (GitHub, LinkedIn, Behance)
- Work timeline and experience
- Skills and service offerings
- Portfolio items with links
- Contact form EmailJS configuration

**When making content updates, only modify this file** - changes automatically propagate throughout the application.

### Application Structure

#### Core App (`src/app/`)
- `App.js`: Root component with Router, AnimatedCursor, ScrollToTop, and Header
- `routes.js`: Defines all routes with page transition animations using CSSTransition

#### Pages (`src/pages/`)
Each page is a self-contained module with its own `index.js` and `style.css`:
- `home/`: Landing page with typewriter effect and hero image
- `about/`: Work timeline, skills progress bars, and services section
- `portfolio/`: Portfolio grid displaying projects from content_option.js
- `contact/`: Contact form integrated with EmailJS

#### Shared Components (`src/components/`)
- `socialicons/`: Social media icon links displayed on all pages
- `themetoggle/`: Dark/light theme switcher

#### Custom Hooks (`src/hooks/`)
- `withRouter.js`: HOC for accessing router location in class-style components
- `AnimatedCursor.js`: Custom cursor animation component

#### Header (`src/header/`)
Persistent navigation with mobile menu toggle and theme switcher

### Routing and Navigation
- Uses React Router v6 with BrowserRouter
- `basename={process.env.PUBLIC_URL}` for GitHub Pages compatibility
- Page transitions handled via react-transition-group with 400ms enter/exit timing
- All routes defined in `src/app/routes.js`

### Contact Form Integration
Contact form uses EmailJS for email delivery. Configuration requires:
1. EmailJS account setup
2. Update `src/content_option.js` contactConfig with:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_USER_ID`

See EmailJS React documentation: https://www.emailjs.com/docs/examples/reactjs/

### Styling Approach
- Global styles in `src/index.css` and `src/app/App.css`
- Component-specific styles co-located with components
- Bootstrap 5 for grid system and basic components
- Custom CSS for animations, transitions, and theme system

### Build Configuration
- Source maps disabled via `GENERATE_SOURCEMAP=false` in .env
- ESLint plugin disabled via `DISABLE_ESLINT_PLUGIN=true` in .env
- Public URL configured via `PUBLIC_URL` environment variable (set by package.json homepage)

## Key Implementation Patterns

### Adding New Content
1. Modify arrays/objects in `src/content_option.js`
2. No component changes needed - data flows automatically

### Adding New Pages
1. Create page component in `src/pages/<pagename>/index.js`
2. Add corresponding styles in `src/pages/<pagename>/style.css`
3. Register route in `src/app/routes.js`
4. Add navigation link in `src/header/index.js`

### Theme System
Theme toggle component in `src/components/themetoggle/` manages light/dark mode. CSS variables and classes handle theme-specific styling throughout the application.
