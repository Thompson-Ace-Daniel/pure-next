# Purity Solar Inverter Website

## Overview
A modern, professional website for Purity Solar Inverter - a company specializing in clean, efficient, and reliable solar inverter technology. The site features a clean white and light blue design scheme with modern typography and smooth interactions.

**Status:** Production-ready ✅  
**Last Updated:** October 13, 2025

## Features Implemented

### Core Sections
1. **Hero Section** - Full-width solar field background with headline, subtext, and dual CTAs
2. **About Us** - Company history, mission/vision, and image grid (R&D, Manufacturing, Team)
3. **Products** - Three product categories (Residential, Commercial, Industrial) with detailed specs and features
4. **Technology & Features** - Four key technology highlights with icons and statistics
5. **Testimonials** - Customer success stories with 5-star ratings and installation photos
6. **Contact** - Functional form with validation, company information, and Google Maps embed
7. **Footer** - Social media links, quick navigation, and legal links

### Technical Features
- **Responsive Design:** Mobile-first approach with breakpoints at 768px and 1024px
- **SEO Optimized:** Meta tags, Open Graph tags, and semantic HTML
- **Performance:** Lazy loading images with `loading="lazy"` and `decoding="async"`
- **Smooth Scrolling:** CSS-based smooth scroll with JavaScript fallback
- **Form Validation:** React Hook Form with Zod schema validation
- **Loading States:** Visual feedback with spinner during form submission
- **Error Handling:** Toast notifications for success/error states

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom design tokens
- **Wouter** - Lightweight routing
- **React Hook Form** - Form management
- **TanStack Query** - Data fetching and state management
- **Shadcn UI** - Component library

### Backend
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Zod** - Runtime validation
- **In-memory storage** - Contact form submissions

### Design System
- **Typography:** Poppins (headings), Inter (body), Roboto (data/metrics)
- **Colors:** White and light blue primary scheme, green accent for sustainability
- **Spacing:** Consistent 8px-based spacing system
- **Components:** Shadcn UI with custom theming

## API Endpoints

### POST /api/contact
Submit a contact form message
- **Request:** `{ name: string, email: string, message: string }`
- **Validation:** 
  - name: min 2 characters
  - email: valid email format
  - message: min 10 characters
- **Response:** `{ id, name, email, message, createdAt }`

### GET /api/contact/submissions
Retrieve all contact form submissions (admin use)
- **Response:** Array of contact submissions

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── TechnologySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/ (Shadcn components)
│   ├── data/
│   │   ├── products.ts
│   │   ├── testimonials.ts
│   │   └── techFeatures.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── not-found.tsx
│   └── index.css (Design tokens)
├── index.html
└── ...

server/
├── routes.ts (API endpoints)
├── storage.ts (In-memory data storage)
└── index.ts

shared/
└── schema.ts (TypeScript types and Zod schemas)
```

## Data Models

### Product
- id, name, category (residential/commercial/industrial)
- description, specs (power, efficiency, warranty)
- features array, image

### Testimonial
- id, name, company, rating (1-5 stars)
- comment, optional image

### Contact Submission
- id, name, email, message, createdAt

## Design Guidelines
See `design_guidelines.md` for complete design specifications including:
- Color palette and gradients
- Typography hierarchy
- Layout system and spacing
- Component library usage
- Interaction patterns
- Accessibility standards

## Running the Application

```bash
npm run dev
```

The application runs on port 5000 with:
- Frontend served by Vite (hot reload enabled)
- Backend API at `/api/*` endpoints
- Automatic workflow restart on code changes

## Testing
Comprehensive end-to-end tests verify:
- All section navigation and smooth scrolling
- Contact form submission with validation
- Responsive design (desktop and mobile)
- Loading states and error handling
- Image lazy loading performance

## Future Enhancements
- Product comparison tool
- ROI calculator for solar savings
- Live chat support widget
- Blog/resources section
- CRM integration for lead management
- Database persistence (PostgreSQL)

## Notes
- All images are lazy loaded for optimal performance
- Contact form uses in-memory storage (data cleared on server restart)
- Social media links are placeholder URLs
- Google Maps embed uses demo coordinates (update in ContactSection.tsx)
