# Purity Solar Inverter - Design Guidelines

## Design Approach
**Selected Approach:** Design System (Material Design principles) with custom clean-tech aesthetic
**Justification:** Professional B2B solar technology website requiring trust, clarity, and modern sophistication. Material Design provides excellent information hierarchy and interaction patterns perfect for technical product showcases.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- Primary: 200 85% 95% (Clean White Background)
- Secondary: 195 100% 45% (Light Blue - Technology & Trust)
- Accent: 195 85% 35% (Deeper Blue - CTAs & Interactive Elements)
- Success: 145 65% 45% (Eco-friendly Green for sustainability messaging)
- Text Primary: 210 20% 15% (Deep Charcoal)
- Text Secondary: 210 15% 45% (Medium Gray)

**Gradients:**
- Hero Gradient: Linear from 195 100% 98% to 195 80% 92%
- Card Hover: Subtle radial from 195 90% 96% to white
- CTA Buttons: Linear 195 85% 40% to 195 75% 35%

### B. Typography

**Font Stack:**
- Primary: 'Poppins' (Headings, CTAs, Navigation)
- Secondary: 'Inter' (Body text, forms, technical specs)
- Accent: 'Roboto' (Product labels, metrics, data points)

**Hierarchy:**
- H1 Hero: 48px/56px (mobile: 32px/40px) - Poppins SemiBold
- H2 Section: 36px/44px (mobile: 28px/36px) - Poppins SemiBold  
- H3 Cards: 24px/32px (mobile: 20px/28px) - Poppins Medium
- Body: 16px/26px - Inter Regular
- Small/Captions: 14px/22px - Inter Regular

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24, 32
- Component padding: p-8 (cards), p-12 (sections on mobile), p-24 (sections on desktop)
- Element spacing: gap-4 (tight), gap-8 (standard), gap-16 (section breaks)
- Container max-width: max-w-7xl with px-4 md:px-8 lg:px-12

**Grid System:**
- Products: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Testimonials: grid-cols-1 lg:grid-cols-2

### D. Component Library

**Navigation:**
- Fixed header with backdrop blur, white background, subtle shadow on scroll
- Logo left, navigation center, CTA buttons right
- Mobile: hamburger menu with slide-in drawer

**Hero Section:**
- Full-width background image (solar field with sunlight flares)
- Overlay gradient: linear-gradient(135deg, rgba(0,174,239,0.1) 0%, rgba(0,174,239,0.05) 100%)
- Content centered, max-w-4xl
- Dual CTA buttons: Primary (solid blue), Secondary (outline white with backdrop blur)
- Height: 85vh on desktop, auto on mobile

**Product Cards:**
- White background with rounded-xl borders
- Hover: lift effect (shadow-lg, translate-y-1 transition)
- Image top (aspect-ratio-4/3), content below with p-6
- Spec badges with bg-blue-50 text-blue-700
- "Learn More" link in accent blue

**Technology Section:**
- Icon grid layout with 4 columns on desktop
- Icons using Heroicons (outline style) in 48px circles with light blue background
- Title below icon, short description, all center-aligned

**Testimonials:**
- Card design with quotation icon top-left
- 5-star rating with filled star icons
- Customer name and company in smaller text
- Optional customer photo (circular, 64px)

**Contact Form:**
- Two-column layout on desktop: Form left (60%), Info right (40%)
- Input fields: border-gray-200, focus:border-blue-400, rounded-lg
- Submit button: full-width on mobile, auto on desktop
- Google Maps embed with rounded corners and subtle shadow

**Footer:**
- Three-column layout: Company info, Quick links, Social/Newsletter
- Background: 210 20% 15% (dark charcoal) with white text
- Social icons in light blue hover state
- Bottom bar with copyright and legal links

### E. Interactions & Animations

**Subtle Animations (use sparingly):**
- Hero text: Fade up on load (opacity 0 to 1, translateY 20px to 0, 800ms)
- Cards on scroll: Stagger fade-in using Intersection Observer
- Hover states: Scale 1.02 on product cards, color transitions 200ms
- Button hovers: Background darken by 10%, smooth 150ms transition
- NO complex scroll animations or parallax effects

**Performance:**
- Images: Next.js Image component with lazy loading
- Critical CSS inline, defer non-critical
- Smooth scroll behavior with `scroll-behavior: smooth`

## Images

**Hero Section:**
- Large hero image: Solar panel field at golden hour with sun flares (landscape, 1920x800px minimum)
- Overlay to ensure text readability
- Positioned: background-position center, background-size cover

**About Section:**
- Image grid: 3 images showing R&D lab, manufacturing facility, team collaboration (square format, 800x800px each)
- Arranged in grid-cols-1 md:grid-cols-3

**Products Section:**
- Product images for each inverter model (3-4 images)
- Clean product shots on white background (square format, 600x600px)
- Residential, Commercial, and Industrial variants

**Technology Section:**
- Infographic-style icons (use Heroicons library)
- Optional: Small supporting images for each tech feature (400x300px)

**Testimonials:**
- Optional customer photos (circular crop, 80x80px)
- Installation photos showing inverters in real settings (landscape, 800x600px)

**Trust & Quality:**
- Certification badges/logos (150x80px)
- Partner/client logos in grayscale hover to color (200x100px)

## Accessibility & Performance

- WCAG 2.1 AA compliance
- Color contrast ratio minimum 4.5:1 for text
- All interactive elements keyboard accessible
- Focus indicators: 2px solid blue ring with offset
- Alt text for all images, aria-labels for icons
- Semantic HTML5 structure throughout
- Lazy load all images below fold
- Preload hero image and critical fonts