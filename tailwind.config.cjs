/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  safelist: ["dark"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          dark: "#2E4374",
          DEFAULT: "#4B527E",
          light: "#7C81AD"
        },
        secondaryLight: "#E5C3A6"        
      }
    },
    fontFamily: {
      signature: ["Broadcast Matter"],
    },
  },  
  plugins: [],
}