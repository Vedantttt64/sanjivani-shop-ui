# Sanjivani NGO — Complete Project Structure & Reference Map

> **Internal Reference**: Consult this map before making ANY codebase edit to identify exact file paths, dependencies, shared components, routing, and styling conventions.

---

## 1. 📂 Complete Directory & File Manifest

### `src/app/` (Next.js App Router & Pages)
- **`src/app/page.tsx`**: Main entrypoint. Evaluates `?state=` search param. Renders `MapLandingPage.tsx` if no state param, or `MainHomePage` (full NGO site with all sections) if state is set.
- **`src/app/layout.tsx`**: Root layout wrapper. Applies `globals.css` and Redux provider.
- **`src/app/globals.css`**: Global Tailwind imports (`@import "tailwindcss"`), scrollbar hide utilities, custom theme variables, and global resets.
- **`src/app/ReduxProviderWrapper.tsx`**: Client wrapper providing the Redux store (`src/store/index.ts`).
- **`src/app/district/page.tsx`**: Route `/district`. Interactive Maharashtra Map page with SVG district paths and filterable district card grid.
- **`src/app/donation/page.tsx`**: Route `/donation`. All-campaigns listing page with search, filters (All, Medical, Community, Urgent), and featured stories.
- **`src/app/donation/[id]/page.tsx`**: Route `/donation/[id]`. Dynamic campaign detail page. Switches between `UrgentCampaignDetail.tsx` (desktop) and `CampaignDetailMobile.tsx` (mobile).
- **`src/app/login/page.tsx`**: Route `/login`. Centered authentication form card (Login, Volunteer Signup, Corporate Signup).

---

### `src/app/components/` (Page Section Components)
- **`src/app/components/MapLandingPage.tsx`**: India Map landing page with Sanjivani logo, state hover callouts, and SVG paths.
- **`src/app/components/OurJourney.tsx`**: Timeline of NGO milestones (2007–2025) with year selection pill buttons and image transitions.
- **`src/app/components/Rank.tsx`**: India Global Rankings section — SDG sliding horizontal carousel using UN SDG tiles.
- **`src/app/components/Portfo.tsx`**: Our Portfolios grid (Medical, Education, Hunger, Environment, Water, Solar, etc.).
- **`src/app/components/Donation.tsx`**: "Our Projects" horizontal campaign card carousel on homepage.
- **`src/app/components/VideoTravelBlogs.tsx`**: "Join Social Work Enthusiast Team" horizontal card carousel.
- **`src/app/components/Emergency-ART.tsx`**: "Emergency Response Team" contact form section.
- **`src/app/components/SDGGrid.tsx`**: UN Sustainable Development Goals static 17-tile grid section.
- **`src/app/components/OutingPlanner.tsx`**: "Weekend Social Work" interactive plan submission form section.
- **`src/app/components/Explore.tsx`**: "Corporate CSR Partners" horizontal image carousel.
- **`src/app/components/Testimonial.tsx`**: "What people say about us" testimonial highlight card.
- **`src/app/components/Reviews.tsx`**: Google Reviews rating section and user reviews carousel.
- **`src/app/components/FaqSection.tsx`**: Frequently Asked Questions accordion section.
- **`src/app/components/Download.tsx`**: Mobile App Download card section with Google Play / App Store badges.
- **`src/app/components/ChatBot.tsx`**: Interactive floating AI chatbot widget.
- **`src/app/components/Footer.tsx`**: Sitewide footer with navigation links, contact details, social links, and legal notice.
- **`src/app/components/ShareButtons.tsx`**: Reusable floating Share Campaign trigger dropdown (WhatsApp, Facebook, Twitter, Instagram).

#### `src/app/components/sections/`
- **`src/app/components/sections/Navbar.tsx`**: Main sticky header bar with logo, state badge, desktop `IconSection`, and mobile drawer with iOS Safari dynamic height handling (`max-h-[90dvh]`).
- **`src/app/components/sections/IconSection.tsx`**: Desktop menu icon items row (Home, District, Air, Water, Food, Cloths, Shelter, Solar, Education, Work, Medical, Legal, Login).

#### `src/app/components/screens/`
- **`src/app/components/screens/Appbar.tsx`**: Wrapper header component rendering `Navbar`.
- **`src/app/components/screens/Categories.tsx`**: Helper categories row component.

#### `src/app/components/ui/elements/`
- **`src/app/components/ui/elements/FormInput.tsx`**: Reusable form input with Heroicons decorators (`email`, `phone`, `password`, `user`, `location`).
- **`src/app/components/ui/elements/DropDown.tsx`**: Reusable dropdown selector.
- **`src/app/components/ui/elements/ResponsiveText.tsx`**: Dynamic text size container element.

---

### `src/app/urgent/` (Campaign Details & Overlays)
- **`src/app/urgent/UrgentCampaignDetail.tsx`**: Desktop campaign detail layout (story, progress, hospital details, donor list, share popup).
- **`src/app/urgent/CampaignDetailMobile.tsx`**: Mobile campaign detail layout (full-width media, sticky bottom donate action bar).
- **`src/app/urgent/DonationPopup.tsx`**: Fast donation selection modal (custom amount, monthly/one-time option).
- **`src/app/urgent/DonationCampaign.tsx`**: Campaign overview card component.
- **`src/app/urgent/DonationStoryPage.tsx`**: Full story content reader.
- **`src/app/urgent/DocumentsGallery.tsx`**: Medical & verification documents gallery popup modal.
- **`src/app/urgent/CommentBox.tsx`**: Supporter comments form and list.
- **`src/app/urgent/Banner.tsx`**: Urgent campaign banner badge.
- **`src/app/urgent/WaiverNotice.tsx`**: Section 80G tax benefit notice badge.
- **`src/app/urgent/StartFundraiserSection.jsx`**: Fundraiser prompt section.

---

### `src/app/data/` (Centralized Data Source Files)
- **`src/app/data/campaigns.ts`**: Contains `campaigns` array (6 items: `urgent-medical-emergency`, `chest-pain-patient`, `food-distribution-vehicle`, `free-medical-help`, `birthday-celebration`, `village-road`) and `campaignCategories`.
- **`src/app/data/districtData.ts`**: Contains `maharashtraDistrictsData` array (36 districts of Maharashtra with centroids, Marathi names, headquarters, image paths).
- **`src/app/data/indiaMapData.ts`**: SVG path definitions and centroid coordinates for all Indian states and Union Territories.
- **`src/app/data/maharashtraMapData.ts`**: SVG path definitions for all 36 Maharashtra districts.

---

### `src/services/` (API & Backend Services)
- **`src/services/auth.ts`**: Login authentication API handler.
- **`src/services/baseApi.ts`**: Base Axios / Fetch API client configuration.
- **`src/services/vendor/registerVendor.ts`**: Volunteer / Vendor signup API.
- **`src/services/corporate/registerCorporate.ts`**: Corporate partner signup API.

---

### `public/` (Static Public Assets)
- **`public/images/`**: All site images including campaign photos, district images (`/images/Explore/`), bloggers (`/images/Travel Bloggers/`), and logos (`sanjivani-logo.png`).
- **`public/assets/icons/social/`**: Social platform icons (WhatsApp, Facebook, Instagram, YouTube).
- **`public/ngo-banner-next/assets/menu-below-slider.html`**: HTML iframe file containing the LayerSlider hero banner configuration.

---

## 2. 🗺️ Section-to-File Lookup Table

| Section Name | Component File Path | Styling Approach | Data Source File |
| :--- | :--- | :--- | :--- |
| **India Map Landing Page** | `src/app/components/MapLandingPage.tsx` | Tailwind CSS | `src/app/data/indiaMapData.ts` |
| **Hero Photo Slider** | `public/ngo-banner-next/assets/menu-below-slider.html` | LayerSlider CSS in iframe | Embedded HTML markup |
| **Navbar (Desktop)** | `src/app/components/sections/Navbar.tsx` & `IconSection.tsx` | Tailwind CSS | Hardcoded items array |
| **Navbar (Mobile Menu)** | `src/app/components/sections/Navbar.tsx` | Tailwind CSS (`max-h-[90dvh]`) | Hardcoded items array |
| **Our Journey** | `src/app/components/OurJourney.tsx` | Tailwind + Framer Motion | Inline `timelineData` array |
| **SDG Rankings (Carousel)** | `src/app/components/Rank.tsx` | Tailwind CSS | Inline SDG score data |
| **Our Portfolios** | `src/app/components/Portfo.tsx` | Tailwind CSS | Inline portfolio cards |
| **Donate Cards (Homepage)** | `src/app/components/Donation.tsx` | Tailwind CSS | `src/app/data/campaigns.ts` |
| **Donate Cards (All Page)** | `src/app/donation/page.tsx` | Tailwind CSS | `src/app/data/campaigns.ts` |
| **Campaign Detail Page** | `src/app/donation/[id]/page.tsx` | Tailwind CSS | `src/app/data/campaigns.ts` |
| **Social Work Team** | `src/app/components/VideoTravelBlogs.tsx` | Tailwind CSS | Inline `countries` list |
| **Emergency Response Team** | `src/app/components/Emergency-ART.tsx` | Tailwind CSS | Form state |
| **SDG Goals (Static Grid)** | `src/app/components/SDGGrid.tsx` | Tailwind CSS | Inline 17 UN SDG items |
| **Weekend Social Work** | `src/app/components/OutingPlanner.tsx` | Tailwind CSS | Form state |
| **CSR Corporate Partners** | `src/app/components/Explore.tsx` | Tailwind CSS | Inline `countries` list |
| **Testimonials** | `src/app/components/Testimonial.tsx` | Tailwind + Framer Motion | Inline content |
| **Google Reviews** | `src/app/components/Reviews.tsx` | Tailwind CSS | Inline `reviews` list |
| **FAQ Section** | `src/app/components/FaqSection.tsx` | Tailwind CSS | Inline Q&A list |
| **Download App Section** | `src/app/components/Download.tsx` | Tailwind CSS | Store badge links |
| **Floating ChatBot** | `src/app/components/ChatBot.tsx` | Tailwind CSS | Chat state |
| **Footer** | `src/app/components/Footer.tsx` | Tailwind CSS | Social & navigation links |
| **Login Page** | `src/app/login/page.tsx` | Tailwind CSS | Auth services |
| **Maharashtra District Page**| `src/app/district/page.tsx` | Tailwind CSS | `src/app/data/districtData.ts` & `maharashtraMapData.ts` |

---

## 3. 🧩 Shared & Reusable Components Index

| Shared Component | File Path | Imported & Used In | Configurable Props / Behavioral Notes |
| :--- | :--- | :--- | :--- |
| **`Navbar`** | `src/app/components/sections/Navbar.tsx` | `src/app/components/screens/Appbar.tsx`, `src/app/district/page.tsx` | Handles state query params, active logo redirect, mobile menu drawer toggle. |
| **`IconSection`** | `src/app/components/sections/IconSection.tsx` | `src/app/components/sections/Navbar.tsx` | Renders desktop header icon row with routing triggers. |
| **`ShareButtons`** | `src/app/components/ShareButtons.tsx` | `src/app/urgent/UrgentCampaignDetail.tsx`, `src/app/urgent/CampaignDetailMobile.tsx`, `src/app/urgent/DonationCampaign.tsx` | Props: `url`, `title`, `className`. Renders off-white pill share trigger & popup menu. |
| **`FormInput`** | `src/app/components/ui/elements/FormInput.tsx` | `src/app/login/page.tsx` | Props: `label`, `type`, `icon`, `placeholder`, `helperText`, `labelStyle`, `inputStyle`, `onChange`, `value`. Input element with Heroicons. |
| **`DonationPopup`** | `src/app/urgent/DonationPopup.tsx` | `src/app/components/Donation.tsx`, `src/app/urgent/UrgentCampaignDetail.tsx`, `src/app/urgent/CampaignDetailMobile.tsx` | Props: `isOpen`, `onClose`, `onDonate`. Modal dialog for donation amount selection. |
| **`DocumentsGallery`**| `src/app/urgent/DocumentsGallery.tsx` | `src/app/urgent/UrgentCampaignDetail.tsx`, `src/app/urgent/CampaignDetailMobile.tsx` | Props: `documents`. Medical verification popup lightbox. |
| **`CommentBox`** | `src/app/urgent/CommentBox.tsx` | `src/app/urgent/UrgentCampaignDetail.tsx`, `src/app/urgent/CampaignDetailMobile.tsx` | Renders campaign comments list and new comment submission. |

---

## 4. 🎨 Styling System & Conventions

- **Framework**: Tailwind CSS v3/v4 utility classes applied directly on JSX elements.
- **Global Stylesheet**: `src/app/globals.css`
  - Global scrollbar hiding (`.scrollbar-hide`)
  - Body resets (`bg-[#f2f1f9]` theme background)
- **Color Palette Conventions**:
  - Main Background: Off-white light purple `bg-[#f2f1f9]` / Slate `bg-[#f8fafc]`
  - Primary Action / Buttons: High-contrast Orange `bg-[#E87B35]`, `hover:bg-[#D96B26]` or Blue `bg-blue-600`
  - Text Highlights: Indigo `text-indigo-800`, Deep Slate `text-slate-900`
  - Badges: Emerald Green `bg-[#16836A]` (Verified), Red `bg-[#DC2626]` (Urgent)
- **Button Styling Patterns**:
  - Primary CTA Buttons: Pill shape (`rounded-full`), `font-bold`, uppercase, tracking-wide with hover scale animation (`hover:scale-105 transition-transform`).
- **Card Spacing & Layout**:
  - Mobile Carousels: `w-full flex-shrink-0 snap-center` inside `px-12` wrapper containers to prevent side peeking and ensure symmetrical centering between scroll arrows.

---

## 5. 🔀 Routing & State Propagation Setup

- **Router Engine**: Next.js App Router (`next/navigation` -> `useRouter`, `useSearchParams`).
- **State Selection Flow**:
  1. User selects a state on the India map (`MapLandingPage.tsx`).
  2. Clicking a state triggers `router.push('/?state=' + encodeURIComponent(stateName))` and stores `selectedState` in `sessionStorage`.
  3. `src/app/page.tsx` detects `searchParams.get('state')`:
     - **If state parameter exists**: Renders `MainHomePage` (full website).
     - **If no state parameter**: Renders `MapLandingPage` (India SVG map).
  4. Clicking the Sanjivani logo triggers `redirectToStartPage()`, clearing `selectedState` from `sessionStorage` and returning to `/` (India map).

---

## 💡 Guidelines for Future Edits

1. **Check `PROJECT_MAP.md` First**: Identify the exact file path(s) for the section being modified before taking any action.
2. **Inspect Shared Dependencies**: If modifying a component listed in Section 3 (Shared Components), check all invocation sites before saving changes.
3. **Preserve Layout Patterns**: Keep carousel sizing (`w-full` + `px-12` wrappers), button pill styling (`rounded-full`), and iOS Safari height guards (`max-h-[90dvh]`) intact during layout adjustments.
