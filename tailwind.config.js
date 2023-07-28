/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-fira-code)'],
      },
      colors: {
        "background-fill": "#010C15",
        "primary": "#011627",
        "primary-text": "#607B96",
        "highlight-text": "#FFFFFF",
        "line-color": "#1E2D3D",
        "accent-orange": "#FEA55F",
        "accent-blue": "#43D9AD",
        "accent-red": "#E99287",
        "accent-purple": "#C98BDF"
      }
    },
  },
  plugins: [],
}
