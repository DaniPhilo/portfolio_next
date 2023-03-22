/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#010C15",
        "main-bg": "#011627",
        "border-color": "#1E2D3D",
        "light-text": "#607B96",
        "regular-text": "#E5E9F0",
        "hover-text": "#FFFFFF",
        "orange-accent": "#FEA55F"
      },
      fontFamily: {
        fira: ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
}