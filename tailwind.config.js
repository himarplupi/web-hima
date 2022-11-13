/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#DE754C',
          secondary: '#9E2A2B',
          gray: '#D9D9D6',
          green: '1DB954',
        },
      },
    },
  },
  plugins: [],
};
