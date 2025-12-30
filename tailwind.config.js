/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D10',
        gold: {
          DEFAULT: '#D4B15F',
          light: '#F0D488',
        },
        gas: '#2892E5',
        text: '#EAECEF',
        muted: '#9AA3AE',
      },
      fontFamily: {
        heading: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
    },
  },
  plugins: [],
}
