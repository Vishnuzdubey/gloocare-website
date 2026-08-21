# GlooCare — Landing & Marketing Frontend

This repository houses the public-facing marketing and landing website for **GlooCare**. It serves to introduce prospective customers and salon partners to the platform, catalog our services, and drive app downloads.

---

## Technical Architecture Overview

| Page / Route | Description | Key Components |
|:---|:---|:---|
| Homepage (`/`) | Main landing page highlighting features, stats, and app CTAs. | `QueueHero`, `StoryStrip`, `CostOfChaos`, `CapabilityShowcase`, `ServicesRail`, `AppHandoff` |
| Services (`/services`) | Full customer catalog of available hair, beard, skin, and spa treatments. | Filter Tabs (Swipeable/Horizontal scroll on mobile), Service Cards |
| How It Works (`/how-it-works`) | Interactive walkthrough detailing the user booking journey. | Step Cards, Workflow Timeline |
| For Partners (`/for-partners`) | Dashboard previews and lead generation forms for salon operators. | `LeadForm`, `PartnerDashboardPreview` |
| About (`/about`) | Narrative detailing company values and the founding mission. | Story blocks, Video embed |
| Contact (`/contact`) | Customer and partner inquiry forms. | Support contact details, email/subject selector form |

---

## Frontend Tech Stack

- **Framework:** Next.js 15 (App Router) — Selected for Server-Side Rendering (SSR), built-in image optimization, and optimized page routing.
- **Language:** TypeScript — Provides static typing and safety across layouts and component parameters.
- **Styling:** Tailwind CSS — Provides atomic utility classes and a centralized brand theme configuration.
- **Animations:** Framer Motion — Drives scroll-linked state, hover-based interactive widgets (like the radial clock dials), and page entrance transitions.
- **Iconography:** Lucide React — Clean, uniform vector icons.
- **Typography:** Inter (body text) and Sora (headings/buttons) loaded natively via `next/font` to eliminate layout shift (CLS).

*Note: dependencies like `three`, `@react-three/fiber`, `@react-three/drei`, and `gsap` are currently defined in `package.json` for prospective components but are not utilized in production layouts. They can be pruned if needed to shrink bundle sizes.*

---

## Local Development & Setup

### Requirements
- Node.js 18+ 
- npm 9+

### Execution
```bash
# Install dependencies
npm install

# Run hot-reloading development server
npm run dev
```

The application runs locally at `http://localhost:3000`.


## Integration Action Items (Backend Connection Required)

| Feature | Files | Technical Status | Action Needed |
|:---|:---|:---|:---|
| Lead Capture Form | `src/components/LeadForm.tsx` | Simulated submit handler (`setTimeout`) | Wire up POST handler to CRM or DB |
| Contact Messages | `src/app/contact/page.tsx` | UI-only client form with local states | Hook up SMTP or mail dispatcher endpoint |
| Newsletter Signups | `src/components/Footer.tsx` | Static submit handler with `preventDefault()` | Connect to subscription service list API |
| Store Badge CTAs | `src/components/AppHandoff.tsx` | Hardcoded href `#` links | Swap out with official app store listing URLs |
| Live QR Code | `src/components/AppHandoff.tsx` | Decorative vector placeholder | Swap vector with generated scannable listing QR |

---

## Production Checks & Build Validation

Run these commands to lint and compile before submitting pull requests:

```bash
# Check code style & configuration
npm run lint

# Build production artifact
npm run build
```
