# MWAN Brand Implementation Guide

## Overview

This document details the implementation of the MWAN (National Center for Waste Management) brand identity based on the official brand guide (Version 04, 2022).

---

## 🎨 Color Palette

### Primary Colors

Based on brand guide pages 19-20:

| Color         | Hex       | Pantone | CMYK                | RGB            | Usage                     |
| ------------- | --------- | ------- | ------------------- | -------------- | ------------------------- |
| **Dark Blue** | `#002b3c` | 303 C   | C:100 M:28 Y:0 K:76 | R:0 G:43 B:60  | Main backgrounds, headers |
| **Green**     | `#009d4f` | 3482 C  | C:100 M:0 Y:50 K:38 | R:0 G:157 B:79 | Primary accents, CTAs     |

### Secondary Colors

Based on brand guide page 20:

| Color           | Hex       | Pantone | CMYK               | RGB              | Usage                  |
| --------------- | --------- | ------- | ------------------ | ---------------- | ---------------------- |
| **Blue**        | `#1e8eb4` | 7689 C  | C:84 M:24 Y:0 K:27 | R:30 G:142 B:180 | Secondary accent       |
| **Yellow**      | `#fec824` | 123 C   | C:0 M:21 Y:86 K:0  | R:254 G:200 B:36 | Highlights, warnings   |
| **Orange**      | `#f07e2e` | 1575 C  | C:0 M:46 Y:82 K:6  | R:240 G:129 B:44 | Energy, action items   |
| **Light Green** | `#7cba58` | 360 C   | C:33 M:0 Y:53 K:27 | R:124 G:186 B:88 | Nature, sustainability |

### Supporting Colors

| Color            | Hex       | Usage                                    |
| ---------------- | --------- | ---------------------------------------- |
| **Light Mint**   | `#E8F3EE` | Card backgrounds, light surfaces         |
| **White**        | `#FFFFFF` | Text on dark backgrounds, clean surfaces |
| **Dark Variant** | `#003d52` | Hover states on dark blue                |

---

## 📝 Typography

### Primary Font: IBM Plex Sans Arabic

Based on brand guide pages 21-22

- **Light** (300): Subtle text, secondary information
- **Regular** (400): Body text, general content
- **Medium** (500): Emphasis, semi-bold headings
- **Bold** (700): Headings, strong emphasis

**Implementation:**

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap");

font-family: "IBM Plex Sans Arabic", "Arial", sans-serif;
```

### Secondary Font: Arial

Used for general office applications and when IBM Plex Sans Arabic is unavailable.

**Tailwind Classes:**

- `font-arabic` - IBM Plex Sans Arabic
- `font-secondary` - Arial

---

## 🎨 Design Principles

Based on brand guide page 27, MWAN's brand is built on four core principles:

1. **Healthy (صحي)** - Promoting environmental health
2. **Flexible (مرن)** - Adaptable solutions
3. **Helpful (متعاون)** - Collaborative approach
4. **Friendly (ودي)** - Approachable and welcoming

---

## 🎭 Graphic Elements

### Main Graphic System

Based on brand guide pages 27-30:

1. **Curved Swoosh** - The primary brand graphic element

   - Represents flow, movement, and sustainability
   - Used in backgrounds and decorative elements
   - Implemented via `BrandBackdrop.jsx` component

2. **Patterns**

   - Geological/geophysical inspired patterns
   - Hexagonal patterns
   - Wave patterns
   - Used sparingly for texture and depth

3. **Icon Set**
   - One-color icons in green (#009d4f)
   - 50px canvas size recommended
   - Simple, clean outlines

---

## 🎯 Component Styling

### Brand Block (`.brand-block`)

Used for interactive cards and buttons:

```css
.brand-block {
  background-color: #e8f3ee; /* mwan-light */
  color: #002b3c; /* mwan-dark */
  border: 2px solid rgba(0, 157, 79, 0.3);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.brand-block:hover {
  border-color: #009d4f;
  box-shadow: 0 0 20px rgba(0, 157, 79, 0.3);
  transform: scale(1.05);
}
```

### Accent Classes

Apply color-specific hover effects:

- `.accent-green` - Primary green accent
- `.accent-blue` - Secondary blue accent
- `.accent-yellow` - Secondary yellow accent
- `.accent-orange` - Secondary orange accent
- `.accent-light-green` - Secondary light green accent

**Usage:**

```jsx
<button className="brand-block accent-green">Primary Action</button>
```

---

## 📐 Layout Guidelines

### Spacing

- Use generous white space (brand principle: clean and modern)
- Maintain consistent padding: `p-6`, `p-8`, `p-12` for different scales
- Gap between elements: `gap-4`, `gap-6`, `gap-8`

### Border Radius

- Small elements: `rounded-xl` (0.75rem)
- Medium elements: `rounded-2xl` (1rem)
- Large cards: `rounded-3xl` (1.5rem)

### Shadows

- Subtle: `shadow-md`
- Standard: `shadow-lg`
- Dramatic: `shadow-2xl`
- Hover effects: Add glow with color-specific shadows

---

## 🎬 Animations

### Transitions

All interactive elements should have smooth transitions:

```css
transition: all 0.3s ease;
```

### Hover States

- **Scale up:** `transform: scale(1.05)`
- **Translate up:** `transform: translateY(-8px)`
- **Glow:** Add color-specific box-shadow

### Page Animations

- `animate-fade-in` - Fade in on load
- `animate-slide-up` - Slide up on load
- `animate-scale-in` - Scale in on load

---

## 📱 Responsive Design

### Breakpoints

- **Mobile:** Default (< 768px)
- **Tablet:** `md:` (≥ 768px)
- **Desktop:** `lg:` (≥ 1024px)
- **Large Desktop:** `xl:` (≥ 1280px)

### Grid Layouts

```jsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

---

## 🔧 Implementation Checklist

### Files Updated

- ✅ `tailwind.config.js` - Updated color palette and fonts
- ✅ `src/index.css` - Global styles, brand utilities, accent classes
- ✅ `src/App.jsx` - Main landing page with brand styling
- ✅ `src/styles/brandColors.js` - Brand color constants

### Components to Review

- ✅ `Header.jsx` - Logo positioning
- ✅ `BrandBackdrop.jsx` - Swoosh background
- ✅ `Card.jsx` - Card component styling
- ✅ `Button.jsx` - Button variants
- ⚠️ App-specific components (MwanInfoApp, LicensesApp, InvestmentApp)

---

## 🎨 Color Usage Examples

### Backgrounds

```jsx
// Dark background (primary)
className = "bg-mwan-dark";

// Light surface
className = "bg-mwan-light";

// Transparent overlay
className = "bg-white/10 backdrop-blur-sm";
```

### Text

```jsx
// White on dark
className = "text-white";

// Dark on light
className = "text-mwan-dark";

// Green accent
className = "text-mwan-green";
```

### Borders

```jsx
// Subtle border
className = "border-2 border-mwan-green/30";

// Solid border
className = "border-2 border-mwan-green";
```

---

## 📚 Reference Pages

Based on the MWAN Brand Guide (الدليل الإرشادي للهوية البصرية):

- **Page 10:** Logo horizontal lockup
- **Pages 18-20:** Color palette (primary and secondary)
- **Pages 21-22:** Typography specifications
- **Page 23:** Photography principles
- **Page 25:** Icon set specifications
- **Page 27:** Main graphic system
- **Pages 39-50:** Stationery applications
- **Pages 60-64:** Digital platform guidelines

---

## 🚀 Quick Start

1. **Colors:** Use Tailwind classes like `bg-mwan-dark`, `text-mwan-green`
2. **Typography:** Apply `font-arabic` class for Arabic content
3. **Cards:** Use `brand-block` with accent classes
4. **Buttons:** Use `btn-primary`, `btn-secondary`, `btn-back` utilities
5. **Animations:** Add `hover:scale-105` and smooth transitions

---

## 💡 Best Practices

1. **Always use brand colors** - No arbitrary colors
2. **Maintain hierarchy** - Dark blue for primary, green for accents
3. **Use IBM Plex Sans Arabic** for all Arabic text
4. **Apply generous spacing** - Don't crowd elements
5. **Add smooth transitions** - All interactions should be fluid
6. **Respect the swoosh** - Use the curved graphic element tastefully
7. **Keep it clean** - Embrace white space and simplicity

---

## 📞 Contact

For questions about brand implementation:

- Marketing Team: branding@mwan.com
- Design System: design-system@mwan.com

---

_Last Updated: November 2025_
_Based on MWAN Brand Guide Version 04 (2022)_
