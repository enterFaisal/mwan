/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // MWAN Brand Primary Colors (from brand guide)
        "mwan-dark": "#002b3c", // Primary Dark Blue (Pantone 303 C)
        "mwan-green": "#009d4f", // Primary Green (Pantone 3482 C)

        // MWAN Brand Secondary Colors
        "mwan-blue": "#1e8eb4", // Secondary Blue (Pantone 7689 C)
        "mwan-yellow": "#fec824", // Secondary Yellow (Pantone 123 C)
        "mwan-orange": "#f07e2e", // Secondary Orange (Pantone 1575 C)
        "mwan-light-green": "#7cba58", // Secondary Green (Pantone 360 C)

        // Supporting tones
        "mwan-light": "#E8F3EE", // Light mint surface
        "mwan-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["IBM Plex Sans Arabic", "Arial", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "sans-serif"],
        secondary: ["Arial", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
