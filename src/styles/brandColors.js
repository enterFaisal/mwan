/**
 * MWAN Brand Colors - Official Brand Guide
 * Based on the National Center for Waste Management (MWAN) Brand Identity Manual
 */

export const brandColors = {
  // Primary Colors (from brand guide pages 19-20)
  primary: {
    darkBlue: {
      hex: "#002b3c",
      pantone: "303 C",
      cmyk: { c: 100, m: 28, y: 0, k: 76 },
      rgb: { r: 0, g: 43, b: 60 },
      description: "Primary Dark Blue - Main brand color",
    },
    green: {
      hex: "#009d4f",
      pantone: "3482 C",
      cmyk: { c: 100, m: 0, y: 50, k: 38 },
      rgb: { r: 0, g: 157, b: 79 },
      description: "Primary Green - Brand accent color",
    },
  },

  // Secondary Colors (from brand guide page 20)
  secondary: {
    blue: {
      hex: "#1e8eb4",
      pantone: "7689 C",
      cmyk: { c: 84, m: 24, y: 0, k: 27 },
      rgb: { r: 30, g: 142, b: 180 },
      description: "Secondary Blue",
    },
    yellow: {
      hex: "#fec824",
      pantone: "123 C",
      cmyk: { c: 0, m: 21, y: 86, k: 0 },
      rgb: { r: 254, g: 200, b: 36 },
      description: "Secondary Yellow",
    },
    orange: {
      hex: "#f07e2e",
      pantone: "1575 C",
      cmyk: { c: 0, m: 46, y: 82, k: 6 },
      rgb: { r: 240, g: 129, b: 44 },
      description: "Secondary Orange",
    },
    lightGreen: {
      hex: "#7cba58",
      pantone: "360 C",
      cmyk: { c: 33, m: 0, y: 53, k: 27 },
      rgb: { r: 124, g: 186, b: 88 },
      description: "Secondary Green",
    },
  },

  // Supporting Colors
  supporting: {
    light: "#E8F3EE", // Light mint for backgrounds/surfaces
    white: "#FFFFFF", // White
    darkVariant: "#003d52", // Darker variant of primary blue for hover states
  },
};

/**
 * Typography - IBM Plex Sans Arabic (from brand guide pages 21-22)
 * Primary: IBM Plex Sans Arabic (Light, Medium, Regular, Bold)
 * Secondary: Arial (for general office use)
 */
export const brandTypography = {
  primary: {
    fontFamily: "IBM Plex Sans Arabic",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  secondary: {
    fontFamily: "Arial",
    weights: {
      regular: 400,
      bold: 700,
      boldItalic: 700,
      italic: 400,
    },
  },
};

/**
 * Brand Graphic Elements
 * - Curved swoosh patterns (main graphic device)
 * - Geometric/geological patterns
 * - One-color icon set (green #009d4f)
 */
export const brandGraphics = {
  mainGraphic: "Curved swoosh",
  iconColor: "#009d4f",
  patternStyles: [
    "Geological network pattern",
    "Hexagonal pattern",
    "Wave patterns",
    "Organic curved patterns",
  ],
};

/**
 * Design Principles (from brand guide page 27)
 * - Healthy (صحي)
 * - Flexible (مرن)
 * - Helpful (متعاون)
 * - Friendly (ودي)
 */
export const brandPrinciples = ["Healthy", "Flexible", "Helpful", "Friendly"];

export default {
  colors: brandColors,
  typography: brandTypography,
  graphics: brandGraphics,
  principles: brandPrinciples,
};
