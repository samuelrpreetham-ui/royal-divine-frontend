/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rdbRoyal: "#5C1A1B",   // Deep maroon (Royal)
        rdbGold: "#D4AF37",    // Gold accent
        rdbIvory: "#F8F4E3",   // Light ivory background
        rdbBlush: "#F2C6C6",   // Soft blush pink
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        gold: "0 0 10px rgba(212, 175, 55, 0.4)",
      },
    },
  },
  plugins: [],
};
