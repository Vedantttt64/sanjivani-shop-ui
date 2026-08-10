# Sanjivani NGO Project Structure Map

This document maps all files, folders, pages, data files, and shared components across the Sanjivani NGO Next.js project. It serves as an internal reference to locate exact files for making updates or extensions.

---

## 📂 Project Directory Structure

```text
sanjivani-ngo-ui/
├── public/                      # Static assets, images, HTML embeds
│   ├── assets/                  # Icon and static site assets
│   ├── images/                  # Core site images (Campaigns, Explore, Travel Bloggers)
│   └── ngo-banner-next/         # Legacy HTML iframe slider assets
│       └── assets/
│           └── menu-below-slider.html # Hero slider configuration and markup
├── src/
│   ├── app/                     # Next.js App Router root
│   │   ├── components/          # React JSX/TSX Page Section components
│   │   │   ├── screens/         # Page Header helpers (Appbar, Categories)
│   │   │   ├── sections/        # Main Layout navigation components (Navbar, IconSection)
│   │   │   └── ui/              # Reusable UI Atoms and Elements (DropDown, FormInput)
│   │   ├── data/                # Data arrays (India map SVGs, Maharashtra districts, Campaigns)
│   │   ├── district/            # Route: /district (Interactive Maharashtra Map page)
│   │   ├── donation/            # Routes: /donation & /donation/[id] (Campaign portfolios)
│   │   ├── login/               # Route: /login (Auth page)
│   │   ├── urgent/              # Campaign detail overlays and inline elements
│   │   ├── globals.css          # Main stylesheet and Tailwind imports
│   │   ├── layout.tsx           # Main App layout metadata
│   │   └── page.tsx             # Root page (Conditional: India Map vs. State Homepage)
│   ├── services/                # API integration layers
│   └── store/                   # Redux global state stores
└── tsconfig.json                # TS configurations
```

---

## 🗺️ Page & Route Mapping

Next.js App Router structure defines how URLs map to page components:

| Route Path | Component File | Description |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Entrypoint. Renders `MapLandingPage.tsx` (India Map) if no state parameter is set, or `MainHomePage` (State NGO home) if `?state=...` is active. |
| `/district` | `src/app/district/page.tsx` | Maharashtra district landing page (interactive SVGs and clickable cards list). |
| `/donation` | `src/app/donation/page.tsx` | Lists all active campaigns. |
| `/donation/[id]` | `src/app/donation/[id]/page.tsx` | Details and checkout screen for a specific campaign. |
| `/login` | `src/app/login/page.tsx` | User / Volunteer / Corporate Auth page. |

---

## 🧭 Section-to-File Mappings

| Section Name | JSX / Component File | Data File | Styling |
| :--- | :--- | :--- | :--- |
| **India Map** | `src/app/components/MapLandingPage.tsx` | `src/app/data/indiaMapData.ts` | Tailwind CSS inline |
| **Hero Image Slider** | `public/ngo-banner-next/assets/menu-below-slider.html` (iframe embed) | Inline HTML markup | CSS files in `/ngo-banner-next/assets/css/` |
| **Our Journey** | `src/app/components/OurJourney.tsx` | Inline `timelineData` array | Tailwind CSS inline |
| **District Map** | `src/app/district/page.tsx` | `src/app/data/districtData.ts` & `maharashtraMapData.ts` | Tailwind CSS inline |
| **Emergency Response** | `src/app/components/Emergency-ART.tsx` | Inline contact form config | Tailwind CSS inline |
| **Weekend Social Work** | `src/app/components/OutingPlanner.tsx` | Inline form state | Tailwind CSS inline |
| **Download App** | `src/app/components/Download.tsx` | Inline layout | Tailwind CSS inline |
| **Google Reviews** | `src/app/components/Reviews.tsx` | Inline `reviews` array | Tailwind CSS inline |
| **Testimonials** | `src/app/components/Testimonial.tsx` | Inline markup | Tailwind CSS inline |
| **CSR Corporate Partners** | `src/app/components/Explore.tsx` | Inline `countries` list | Tailwind CSS inline |
| **Social Work Team** | `src/app/components/VideoTravelBlogs.tsx` | Inline `countries` list | Tailwind CSS inline |
| **SDG Carousel / Rankings** | `src/app/components/Rank.tsx` | Inline SDGs scores & targets | Tailwind CSS inline |
| **SDG Static Grid** | `src/app/components/SDGGrid.tsx` | Inline SDGs goals | Tailwind CSS inline |
| **Footer** | `src/app/components/Footer.tsx` | Inline links list | Tailwind CSS inline |

---

## 🧩 Shared & Reusable Components

The following UI components are imported across multiple sections:

### 1. **Navbar** (`src/app/components/sections/Navbar.tsx`)
*   **Where Used**: Rendered globally inside main views like state homepages and the Maharashtra district page (`/district`). 
*   **Attributes**: Features responsive toggles, dynamic logo sizing, and custom red close button layouts.

### 2. **IconSection** (`src/app/components/sections/IconSection.tsx`)
*   **Where Used**: Rendered inside the desktop navbar as the primary horizontal navigation bar.

### 3. **ShareButtons** (`src/app/components/ShareButtons.tsx`)
*   **Where Used**: Imported sitewide for sharing campaigns, specifically in:
    *   `src/app/urgent/UrgentCampaignDetail.tsx`
    *   `src/app/urgent/DonationCampaign.tsx`
    *   `src/app/donation/[id]/page.tsx`
*   **Attributes**: Standardized, premium, off-white floating popup presenting WhatsApp, Facebook, Instagram, and Twitter share targets.

### 4. **FormInput** (`src/app/components/ui/elements/FormInput.tsx`)
*   **Where Used**: Input rendering for all custom forms, including:
    *   Login, Volunteer, and Corporate Signup screens (`src/app/login/page.tsx`).
*   **Attributes**: Supports standard input variants, Heroicons decorators, and custom placeholder classes.

---

## 🎨 Styling Conventions

*   **Tailwind CSS**: The project uses **Tailwind CSS v3/v4** utility classes as the primary styling framework.
*   **Global Classes**: Core overrides and font styling are declared in `src/app/globals.css`.
*   **Color Palette**: Curated pastel shades, solid deep blues/indigos, off-white container backgrounds (`bg-[#f2f1f9]`, `bg-[#f8fafc]`), and high-contrast orange details (`bg-orange-500`).
*   **Animations**: Custom interactive sections employ **Framer Motion** (`motion.div`) for responsive micro-transitions, transitions, and hover scaling.

---

## 🖼️ Assets Storage Paths

*   **Logos**: `/images/sanjivani-logo.png`
*   **Campaigns**: `/images/medicalhelp.png`, `/images/patient.png`, `/images/foodcar.png`, `/images/birthday.png`, `/images/road.png`
*   **Explore Partners**: `/images/Explore/` (Sangli, Satara, Solapur, Mumbai, etc.)
*   **Travel Bloggers**: `/images/Travel Bloggers/`
*   **Social Icons**: `/assets/icons/social/` (WhatsApp, Facebook, Instagram, YouTube logos)
