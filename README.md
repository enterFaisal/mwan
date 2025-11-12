# MWAN Multi-App Booth Application

An interactive, touch-screen web application built for the MWAN (National Center for Waste Management) event booth. This project contains three separate, single-page applications within a unified Vite + React project.

## 🎯 Project Overview

This application is designed for large touchscreens at exhibitions and events, providing an engaging and informative experience about MWAN's role in waste management in Saudi Arabia.

### Applications

1. **Discover MWAN (اكتشف موان)** - Informational kiosk about MWAN's role, regulations, and achievements
2. **Licenses & E-Manifest (التراخيص ووثيقة النقل)** - Interactive simulation of the e-manifest system with 4 user role journeys
3. **Investment Opportunities (الفرص الاستثمارية)** - Interactive map showcasing investment opportunities across Saudi Arabia

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Features

### Design & UX
- **RTL Support**: Full right-to-left layout for Arabic content
- **Touch-Optimized**: Large buttons (min 60px) and touch-friendly interactions
- **Responsive Design**: Works on various screen sizes
- **Smooth Animations**: Professional transitions and hover effects
- **Consistent Branding**: MWAN color scheme throughout

### Technical Features
- **Vite + React**: Fast build tool and modern React setup
- **Tailwind CSS**: Utility-first CSS with custom theme
- **Component Architecture**: Reusable, modular components
- **Data Separation**: Clean separation of data and UI logic
- **Custom SVG Map**: Interactive Saudi Arabia map

## 🎨 Brand Colors

- **Primary Background**: `#0D2C3B` (Dark Teal)
- **Primary Accent**: `#1DB954` (Vibrant Green)
- **Button/Card Background**: `#D0E0D9` (Light Green)
- **Text**: White on dark, Dark teal on light

## 📁 Project Structure

```
/src
├── apps/
│   ├── MwanInfoApp/          # App 1: Discover MWAN
│   │   ├── MwanInfoApp.jsx
│   │   ├── HomeScreen.jsx
│   │   └── ContentScreen.jsx
│   ├── LicensesApp/          # App 2: Licenses & E-Manifest
│   │   ├── LicensesApp.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── LicensesSection.jsx
│   │   ├── EmanifestSection.jsx
│   │   └── journeys/
│   │       ├── ProducerJourney.jsx
│   │       ├── TransporterJourney.jsx
│   │       ├── DriverJourney.jsx
│   │       └── FacilityJourney.jsx
│   └── InvestmentApp/        # App 3: Investment Opportunities
│       ├── InvestmentApp.jsx
│       ├── HomeScreen.jsx
│       ├── OpportunitiesSection.jsx
│       ├── SaudiMap.jsx
│       ├── DataPanel.jsx
│       └── PlanSection.jsx
├── components/               # Shared components
│   ├── Header.jsx
│   ├── BackButton.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   └── LoadingSpinner.jsx
├── data/                     # Data files
│   ├── mwanInfoData.js
│   ├── licensesData.js
│   ├── emanifestData.js
│   └── investmentData.js
├── assets/                   # Images and assets
├── App.jsx                   # Main app with landing page
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## 🎮 Usage

### Navigation Flow

1. **Landing Page**: Select one of three applications
2. **Each App**: Has its own navigation and back buttons
3. **Back to Main**: Return to landing page from any app

### App 1: Discover MWAN
- Browse through 5 main topics
- View detailed content for each topic
- Navigate back to menu or main page

### App 2: Licenses & E-Manifest
- **Licenses Section**: Browse license types and processes
- **E-Manifest Simulation**: Select a role and experience the step-by-step journey

### App 3: Investment Opportunities
- **Interactive Map**: Click on cities to view opportunities
- **Strategic Plan**: Browse through planning methodology and objectives

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Tailwind RTL**: RTL support
- **Google Fonts (Poppins)**: Typography

## 📱 Touch Screen Optimization

- Minimum button size: 60px height
- Large tap targets
- No hover-only interactions
- Clear visual feedback
- Smooth transitions

## 🌍 Internationalization

- Full RTL (Right-to-Left) support
- Arabic language throughout
- Proper text alignment and spacing

## 📊 Data Structure

All content is organized in separate data files:
- `mwanInfoData.js`: Information about MWAN
- `licensesData.js`: License types and processes
- `emanifestData.js`: E-manifest journey steps for all roles
- `investmentData.js`: City-wise investment opportunities

## 🤝 Contributing

This is a custom-built application for MWAN. For modifications or improvements, please follow the existing code structure and design patterns.

## 📄 License

Proprietary - MWAN (National Center for Waste Management)

## 🙏 Acknowledgments

- MWAN for content and requirements
- Design inspired by modern kiosk applications
- Built with modern web technologies

---

**Made with ♻️ for MWAN**

