/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1260px',
        },
      },
    },
  },
  plugins: [],
}
