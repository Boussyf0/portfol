# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 5173 with auto-open
- `npm run build` - Build for production to `dist/` directory
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all JavaScript/JSX files

### Deployment
- `npm run deploy` - Build and deploy to GitHub Pages (requires gh-pages setup)
- `npm run predeploy` - Automatically runs before deploy to build the project

## Architecture

This is a single-page React portfolio application built with Vite, showcasing projects and skills for Abderrahim Boussyf.

### Tech Stack
- **Frontend**: React 18 with JSX
- **Styling**: Material-UI (MUI) + Tailwind CSS with custom theme system
- **Animation**: Framer Motion for smooth animations and transitions
- **Charts**: Chart.js and Recharts for data visualizations
- **Build Tool**: Vite with React plugin
- **Deployment**: GitHub Pages

### Application Structure
- **Single Page Layout**: All sections rendered directly in App.jsx without routing
- **Section-based Navigation**: Uses hash links (`#home`, `#about`, etc.) with smooth scrolling
- **Responsive Design**: Mobile-first approach with MUI breakpoints and drawer navigation
- **Theme System**: Dynamic light/dark mode with localStorage persistence

### Key Components
- `App.jsx` - Main application with navigation, theme provider, and all sections
- `Hero.jsx` - Landing section with animations and typewriter effects  
- `About.jsx`, `Skills.jsx`, `Projects.jsx` - Main content sections
- `DataDashboard.jsx`, `DevOpsPipeline.jsx`, `Lab.jsx` - Interactive demo sections
- `ThemeToggle.jsx` - Theme switching functionality

### State Management
- Local component state with React hooks
- Theme mode persisted in localStorage
- No external state management library used

### Styling Approach
- **MUI Components**: Primary UI framework for layout and components
- **Tailwind Classes**: Utility classes for custom styling and animations
- **Emotion Styled**: Styled components for complex component-specific styles
- **Custom Theme**: Defined color palette with neon blue/violet accent colors

### Data Constants
All portfolio content (projects, skills, social links) is centralized in `src/data/constants.js` for easy updates.

### Build Configuration
- Base path set to `/portfol/` for GitHub Pages deployment
- Source maps enabled for debugging
- Path aliases: `@` → `src/`, `@assets` → `src/assets`
- Custom fonts: Satoshi (sans), JetBrains Mono (mono), Orbitron (display)

### ESLint Rules
- React Hooks plugin for proper hook usage
- React Refresh plugin for hot reloading
- Unused variables allowed if they match pattern `^[A-Z_]` (constants)