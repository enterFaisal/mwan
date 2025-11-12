# MWAN Multi-App Interactive Booth Project

## Project Setup & Configuration

1. **Initialize Vite + React project** with JavaScript

- Install Tailwind CSS and configure for RTL support
- Set up Google Fonts (Poppins or Inter)
- Configure custom theme colors matching brand guidelines
- Create project structure with `src/apps/`, `src/data/`, `src/assets/`

2. **Configure Tailwind for RTL**

- Add RTL plugin and directives
- Set `dir="rtl"` in HTML
- Configure custom colors: `#0D2C3B` (dark teal), `#1DB954` (vibrant green), `#D0E0D9` (light green)

## Application 1: Discover MWAN (المركز الوطني)

Location: [`src/apps/MwanInfoApp/`](src/apps/MwanInfoApp/)

**Components:**

- `MwanInfoApp.jsx` - Main component with screen routing
- `HomeScreen.jsx` - Landing page with 5 menu buttons
- `ContentScreen.jsx` - Reusable content display with back button
- `AdillahSection.jsx` - Special multi-column layout for technical guides

**Data Source:** [`src/data/mwanInfoData.js`](src/data/mwanInfoData.js)

- Extract from slides 4-14 (content.md lines 16-140)
- Include: Role & Tasks, Regulations, Udeem Program, Strategic Achievements, Contact Info

## Application 2: Licenses & E-Manifest

Location: [`src/apps/LicensesApp/`](src/apps/LicensesApp/)

**Components:**

- `LicensesApp.jsx` - Main router
- `HomeScreen.jsx` - Two-button selector
- `LicensesSection.jsx` - License information browser with submenu
- `EmanifestSection.jsx` - Interactive simulation hub
- Journey components for 4 roles:
- `ProducerJourney.jsx` - Producer's 7-step flow
- `TransporterJourney.jsx` - Transporter's 7-step flow
- `DriverJourney.jsx` - Driver's 6-step flow
- `FacilityJourney.jsx` - Reception facility's 8-step flow

**Data Sources:**

- [`src/data/licensesData.js`](src/data/licensesData.js) - Extracted from slides 19-25
- [`src/data/emanifestData.js`](src/data/emanifestData.js) - Journey tables from slides 31-34 (content.md lines 366-431)

## Application 3: Investment Opportunities

Location: [`src/apps/InvestmentApp/`](src/apps/InvestmentApp/)

**Components:**

- `InvestmentApp.jsx` - Main router
- `HomeScreen.jsx` - Two-button selector
- `OpportunitiesSection.jsx` - Interactive map + data panel layout
- `SaudiMap.jsx` - Custom SVG map with clickable regions
- `DataPanel.jsx` - Display stats and opportunities table
- `PlanSection.jsx` - Strategic plan information display

**Data Source:** [`src/data/investmentData.js`](src/data/investmentData.js)

- Map data for major cities (Riyadh, Jeddah, Dammam, Madinah, Makkah, etc.)
- Investment opportunities from slides 40-43
- Strategic plan content from slides 45-49

## Root Components & Navigation

- [`src/main.jsx`](src/main.jsx) - Entry point with root component
- [`src/App.jsx`](src/App.jsx) - Landing page with 3 app selector buttons
- [`src/components/Header.jsx`](src/components/Header.jsx) - Reusable MWAN header with logo
- [`src/components/BackButton.jsx`](src/components/BackButton.jsx) - Reusable navigation component

## Styling & Assets

- Custom Tailwind configuration for RTL, Arabic typography, and brand colors
- Logo assets from slides
- Consistent button styles: rounded corners, hover effects, shadow depth
- Touch-friendly sizing (min 60px height for buttons)
- High contrast for readability on large screens

## Key Features

- **Full RTL Support:** All text, layouts, and navigation flows right-to-left
- **Touch Optimized:** Large buttons, clear visual feedback, gesture-friendly
- **Consistent Branding:** Dark teal backgrounds, vibrant green accents throughout
- **Interactive Simulations:** Step-by-step e-manifest journey for 4 user roles
- **Data Visualization:** Interactive Saudi Arabia map with regional data
- **Smooth Transitions:** Professional animations between screens
