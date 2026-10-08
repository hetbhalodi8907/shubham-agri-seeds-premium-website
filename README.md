# 🌱 Shaswat Agri Seeds — Premium Agricultural Website

> A modern, responsive and premium single-page business website for **Shaswat Agri Seeds**, a groundnut and hybrid seed supplier based in Keshod, Gujarat, India.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)](https://motion.dev/)

---

## 📌 About the Project

**Shaswat Agri Seeds** is a premium agricultural business website designed to present the company's seed varieties, quality standards, experience and contact information in a professional digital format.

The website focuses primarily on:

- 🌱 Groundnut seed varieties
- 🌾 Hybrid seed varieties
- 🏆 Seed quality and performance
- 👨‍🌾 Farmer trust and experience
- 📞 Customer enquiries
- 📍 Business location
- 💬 Direct WhatsApp communication
- 📧 Email-based seed enquiries

The project is implemented as a **single-page website** with smooth scrolling between major sections.

---

## ✨ Key Features

### 🚀 Premium Landing Page

The homepage starts with an animated splash screen followed by a full-screen hero section introducing Shaswat Agri Seeds.

The hero section includes:

- Company branding
- Premium seed messaging
- "Trusted Since 2006" badge
- Call-to-action buttons
- Experience and variety statistics
- Animated seed-themed visual
- Smooth scrolling
- Responsive layout

The hero section is implemented in `HeroSection.tsx` and uses Framer Motion for entrance and continuous animations.

---

### 🧭 Responsive Navigation

The navigation bar provides quick access to:

- Home
- About
- Products
- Why Us
- Contact

It supports:

- Desktop navigation
- Mobile navigation menu
- Scroll-based navbar styling
- Active navigation state
- Smooth section scrolling
- Animated transitions

The navigation is implemented in `Navbar.tsx`.

---

### 🌱 About Section

The About section introduces the company and its agricultural philosophy.

It highlights:

- Company history
- Farmer-focused approach
- Seed quality
- Yield performance
- Disease resistance
- Quality testing
- Direct farmer relationships
- Agricultural expertise

The section also contains multiple company-quality pillars and animated cards.

---

### 🌾 Seed Products

The Products section contains a locally defined catalog of groundnut seed varieties.

Currently represented varieties include:

| Variety | Category |
|---|---|
| G-20 | Traditional |
| G-22 | Traditional |
| G-32 | Traditional |
| G-24 | Traditional |
| No. 37 | Popular |
| No. 38 | Popular |
| No. 39 | Popular |
| Sona | Special |
| Girnar 4 | Hybrid |
| Girnar 5 | Hybrid |

Each product contains information such as:

- Variety name
- Category
- Description
- Benefits
- Yield/oil/germination highlights
- Visual styling
- Animated appearance

The product information is currently stored directly inside `ProductsSection.tsx` rather than coming from a database or external API.

---

### 🏆 Why Choose Us

The website includes a dedicated section explaining the company's competitive advantages.

It covers:

- Properly graded and cleaned seeds
- High germination rate
- Superior oil content
- Yield performance
- Disease and pest tolerance
- Local agricultural expertise

It also includes statistics such as:

- 18+ years of experience
- 10+ premium varieties
- 1000s of farmers
- Customer trust statistics

The section also contains farmer testimonial cards.

---

### 📩 Seed Enquiry Form

The Contact section contains a detailed enquiry form.

Users can provide:

- Name
- Phone number
- Email
- Location
- Seed variety
- Required quantity
- Additional message

The available seed options include all major varieties listed on the website plus a **"Not Sure"** option.

#### How submission works

This project does not currently send the form data to a backend server.

Instead:

1. User fills out the enquiry form.
2. The application creates an email subject and body.
3. A `mailto:` URL is generated.
4. The visitor's default email application is opened.
5. The enquiry is prepared inside the email.

This behavior is implemented directly in `ContactSection.tsx`.

---

### 💬 WhatsApp Integration

A floating WhatsApp button is displayed on the website.

Features include:

- Fixed bottom-right position
- Animated entrance
- Hover tooltip
- Hover scaling
- Ripple animation
- Pre-filled enquiry message

The component is implemented in `WhatsAppButton.tsx`.

---

### 📍 Google Maps Integration

The footer contains an embedded Google Maps location for the business.

It also provides an **Open Maps** link for visitors who want to open the location externally.

---

### 🎬 Animated Splash Screen

The website includes a branded splash screen before the main website becomes visible.

The splash animation includes:

- Company logo
- Animated rings
- Glow effects
- Company name
- Premium quality tagline
- Smooth exit animation

The splash screen automatically completes after the animation sequence and reveals the main website.

---

### 🎨 Premium Visual Design

The design uses a combination of:

- Deep teal
- Orange/gold accents
- White backgrounds
- Green agricultural tones
- Gradient backgrounds
- Rounded cards
- Glass-like effects
- Animated elements
- Seed/leaf visual motifs

Custom animations such as shimmer, floating elements, pulse glow, fade-in effects and seed-card hover effects are defined in `globals.css`.

---

## 🛠️ Technology Stack

### Frontend

- **Next.js 15**
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**

The project uses the Next.js App Router structure.

### UI & Animation

- **Framer Motion** — animations and transitions
- **Lucide React** — icons
- **Radix UI** — reusable UI primitives
- **shadcn/ui configuration**
- **class-variance-authority**
- **clsx**
- **tailwind-merge**

The repository is configured for shadcn/ui using the New York style and Lucide icon library.

### Additional Libraries

The project also includes packages for:

- React Hook Form
- Zod
- Recharts
- Embla Carousel
- Date utilities
- Toast notifications
- Resizable panels
- OTP input
- Theme management

These dependencies are present in the project's `package.json`.

---

# 📁 Project Structure

```text
shubham-agri-seeds-premium-website/
│
├── .orchids/
│
├── public/
│   └── logo.png
│
├── src/
│   │
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── SplashScreen.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── WhyUsSection.tsx
│   │   │
│   │   └── ui/
│   │       └── reusable UI components
│   │
│   └── lib/
│       └── utils.ts
│
├── .gitignore
├── README.md
├── bun.lock
├── components.json
├── debug.log
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

# 🧩 Main Application Architecture

The main page is composed from independent React components.

```text
page.tsx
│
├── SplashScreen
│
└── Main Website
    │
    ├── Navbar
    │
    ├── HeroSection
    │
    ├── AboutSection
    │
    ├── ProductsSection
    │
    ├── WhyUsSection
    │
    ├── ContactSection
    │
    ├── Footer
    │
    └── WhatsAppButton
```

The main `page.tsx` controls the splash-screen state and then renders the complete landing page.

---

# 📂 Important Files

## `src/app/page.tsx`

Main entry point for the homepage.

Responsible for:

- Splash screen state
- Rendering all major website sections
- Overall page composition

---

## `src/app/layout.tsx`

Defines the global application layout and SEO metadata.

It includes:

- Page title
- Meta description
- Keywords
- Open Graph metadata
- Twitter metadata
- Robots configuration
- Canonical URL
- Business structured data
- Google font configuration
- Global CSS
- Orchids visual editing integration

The structured data describes the business as a local agricultural seed supplier.

---

## `src/app/globals.css`

Contains the global styling system.

Includes:

- Tailwind CSS imports
- CSS variables
- Theme colors
- Smooth scrolling
- Custom animations
- Seed-card hover effects
- Form styling
- WhatsApp button styling
- Scrollbar styling
- Section divider styles


---

## `src/components/HeroSection.tsx`

Responsible for the main hero/landing area.

Uses:

- Framer Motion
- Lucide icons
- CSS gradients
- Animated decorations
- Smooth-scroll buttons


---

## `src/components/AboutSection.tsx`

Responsible for:

- Company story
- Quality information
- Company pillars
- Experience
- Farmer-focused messaging


---

## `src/components/ProductsSection.tsx`

Responsible for:

- Seed catalog
- Variety information
- Benefits
- Categories
- Product cards
- Product animations

The seed catalog is currently stored as a local JavaScript/TypeScript data structure.

---

## `src/components/WhyUsSection.tsx`

Responsible for:

- Company statistics
- Reasons to choose the company
- Quality claims
- Farmer testimonials


---

## `src/components/ContactSection.tsx`

Responsible for:

- Contact information
- Seed enquiry form
- Form state
- Email enquiry generation
- `mailto:` submission flow


---

## `src/components/Navbar.tsx`

Responsible for:

- Navigation
- Responsive mobile menu
- Active section
- Scroll behavior
- Company logo


---

## `src/components/SplashScreen.tsx`

Responsible for the initial animated branding experience before the main website loads.

---

## `src/components/WhatsAppButton.tsx`

Provides the floating WhatsApp enquiry button.

---

## `src/components/Footer.tsx`

Contains:

- Google Maps
- Company information
- Quick links
- Seed varieties
- Business location
- Email contact


---

## `src/lib/utils.ts`

Provides the reusable `cn()` utility used to combine Tailwind classes using `clsx` and `tailwind-merge`.

---

# ⚙️ Configuration

## Next.js

The project uses a custom `next.config.ts`.

Important configuration includes:

- Remote image support
- TypeScript build configuration
- ESLint build configuration
- Turbopack integration
- Orchids visual editing loader

The project currently has TypeScript and ESLint build errors configured to be ignored during production builds.

---

## TypeScript

TypeScript is configured with:

- Strict mode
- Bundler module resolution
- React JSX preservation
- Path aliases

The project uses:

```text
@/* → ./src/*
```

This allows imports such as:

```tsx
import Navbar from "@/components/Navbar";
```


---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/hetbhalodi8907/shubham-agri-seeds-premium-website.git
```

Navigate into the project:

```bash
cd shubham-agri-seeds-premium-website
```

---

## 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

The repository contains a `bun.lock` file and its package scripts support Bun.

---

## 3. Start the Development Server

Using npm:

```bash
npm run dev
```

Or Bun:

```bash
bun dev
```

The project uses Turbopack during development.

Open:

```text
http://localhost:3000
```

---

# 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

These scripts are defined in `package.json`.

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

# ☁️ Deployment

This project is suitable for deployment on platforms that support Next.js.

### Recommended: Vercel

1. Push the repository to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select the project.
5. Install/build settings can normally be detected automatically.
6. Deploy.

After deployment, the website can be connected to a custom domain.

---

# 🔍 SEO

The project includes built-in SEO configuration through Next.js metadata.

Configured items include:

- Page title
- Description
- Keywords
- Open Graph metadata
- Twitter card metadata
- Canonical URL
- Robots directives
- Local business structured data

The metadata is focused on groundnut seeds, hybrid seeds, Keshod and Gujarat agriculture.

---

# 📱 Responsive Design

The website is designed for multiple screen sizes:

- 📱 Mobile
- 📱 Large mobile
- 💻 Tablet
- 🖥️ Desktop
- 🖥️ Large desktop

Responsive Tailwind utility classes are used throughout the components.

The navigation also switches between desktop and mobile layouts.

---

# 🔗 Website Sections

The website follows this structure:

```text
Home
  ↓
About
  ↓
Products
  ↓
Why Us
  ↓
Testimonials
  ↓
Contact / Enquiry
  ↓
Location / Footer
```

All sections are part of the same page and use anchor-based smooth scrolling.

---

# 📧 Contact & Enquiry Flow

The current enquiry architecture is intentionally simple.

```text
Visitor
   │
   ▼
Enquiry Form
   │
   ▼
React Form State
   │
   ▼
Generate Email Subject + Body
   │
   ▼
mailto:
   │
   ▼
Visitor's Email Application
```

There is currently:

- No database
- No API endpoint
- No authentication
- No server-side form processing
- No online payment system
- No shopping cart

The project is primarily a **business showcase and lead-generation website**.

---

# 🗃️ Data Architecture

Product information is currently maintained directly in the frontend.

Example structure:

```text
ProductsSection.tsx
       │
       └── seedVarieties[]
             ├── id
             ├── name
             ├── category
             ├── tagline
             ├── description
             ├── benefits
             ├── highlight
             └── styling information
```

This makes the current project easy to maintain for a small static catalog, but a future version could move product information into a database or CMS.

---

# 🎨 Design System

The website primarily uses a premium agricultural visual identity.

### Primary Colors

```text
Deep Teal      #093a46
Teal           #0e6578
Light Teal     #dff0f7

Orange         #df7810
Light Orange   #f5a028

Background     #f9fafb
White          #ffffff
```

These colors and design tokens are defined throughout the global styling system.

---

# 🎞️ Animation System

Animations are implemented using a combination of:

- Framer Motion
- CSS keyframes
- Hover transitions
- Scroll-based reveal animations
- Floating animations
- Pulsing effects
- Gradient animations

Examples include:

- Splash-screen logo animation
- Hero content entrance
- Floating seed decorations
- Rotating rings
- Product card reveal
- Hover elevation
- WhatsApp ripple animation
- Testimonial entrance animations


---

# 🔐 Security & Privacy Notes

This project is primarily a frontend marketing website.

There is currently no:

- User authentication
- User account system
- Database
- Payment processing
- Admin dashboard
- Server-side API

The contact form relies on the visitor's local email client through `mailto:`.

If the project is expanded into a production lead-management system, a secure backend should be introduced for storing and processing enquiries.

---

# 🔮 Possible Future Improvements

The current website can be extended with:

### Product Management

- Product detail pages
- Product search
- Product filtering
- Product images
- Product availability
- Dynamic product database

### Enquiry Management

- Backend API
- Database storage
- Admin dashboard
- Email notifications
- WhatsApp lead integration
- Enquiry tracking

### Business Features

- Online quotation system
- Dealer registration
- Farmer registration
- Order management
- Product comparison
- Downloadable product brochures

### Agriculture Tools

- Seed quantity calculator
- Crop recommendation
- Yield calculator
- Fertilizer calculator
- Seasonal crop guide

### SEO & Marketing

- Blog
- Agricultural articles
- FAQ schema
- Product schema
- Local SEO optimization
- Google Search Console integration
- Analytics

---

# 🧑‍💻 Development Notes

When modifying the website:

### Add/Edit Products

Modify the seed data inside:

```text
src/components/ProductsSection.tsx
```

### Modify Homepage Structure

Modify:

```text
src/app/page.tsx
```

### Modify SEO

Modify:

```text
src/app/layout.tsx
```

### Modify Global Styling

Modify:

```text
src/app/globals.css
```

### Modify Navigation

Modify:

```text
src/components/Navbar.tsx
```

### Modify Enquiry Form

Modify:

```text
src/components/ContactSection.tsx
```

---

# 📌 Project Status

**Status:** Completed frontend business website

**Architecture:** Single-page frontend

**Backend:** Not implemented

**Database:** Not implemented

**Authentication:** Not implemented

**Payments:** Not implemented

**Product Data:** Local/static

**Enquiries:** `mailto:` based

**Maps:** Google Maps embed

**WhatsApp:** Direct WhatsApp link

**Deployment Target:** Next.js-compatible hosting / Vercel

---

# 📄 License

This project is intended for the Shaswat Agri Seeds website.

If you plan to make this project public or reuse its source code commercially, add an explicit license such as MIT, Apache-2.0, or a proprietary license according to your requirements.

---

# 👨‍💻 Developer

Developed by **Het Bhalodi**

GitHub:

https://github.com/hetbhalodi8907

Repository:

https://github.com/hetbhalodi8907/shubham-agri-seeds-premium-website

---

## ⭐ Project Summary

**Shaswat Agri Seeds** is a modern agricultural business website designed to build trust with farmers, showcase premium groundnut and hybrid seed varieties, communicate the company's experience and quality standards, and generate customer enquiries.

The project combines a modern **Next.js + React + TypeScript** architecture with responsive Tailwind styling, Framer Motion animations, local product data, WhatsApp communication, email-based enquiries and Google Maps integration.

---

## 🌱 Built With

```text
Next.js
React
TypeScript
Tailwind CSS
Framer Motion
Lucide React
Radix UI
shadcn/ui
React Hook Form
Zod
Vercel
```

---

**Made with 🌱 for modern agriculture.**
