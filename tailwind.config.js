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
      fontSize: {
        headline: "68px",
        subheadline: "32px"
      },
      colors: {
        "background-fill": "#010C15",
        "background-darker-fill": "#011221",
        "primary": "#011627",
        "primary-text": "#607B96",
        "highlight-text": "#FFFFFF",
        "line-color": "#1E2D3D",
        "secondary-gray": "#607B96",
        "secondary-turquoise": "#3C9D93",
        "secondary-purple": "#4D5BCE",
        "accent-orange": "#FEA55F",
        "accent-turquoise": "#43D9AD",
        "accent-red": "#E99287",
        "accent-purple": "#C98BDF"
      },
      gridTemplateColumns: {
        'about-layout': '300px, repeat(2, 1fr)',
        'text-display-layout': "1fr, 20px"
      },
      spacing: {},
    },
  },
  plugins: [],
}
