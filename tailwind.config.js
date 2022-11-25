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
          green: '#1DB954',
          footer: '#303030',
        },
      },

      maxWidth: {
        '8xl': '1366px',
      },

      backgroundColor: {
        'web-color-light-gray': '#F4F4F4',
        'web-color-dark-gray': '#303030',

        dot: {
          red: '#ED6A5E',
          yellow: '#F6BE4F',
          green: '#62C554',
        },
      },

      backgroundImage: {
        'web-color-orange-gradient':
          'linear-gradient(100.48deg, rgba(253, 112, 57, 0.7) 0%, rgba(255, 60, 61, 0.7) 100%, rgba(255, 60, 61, 0.7) 100%);',
        'web-color-red-gradient':
          'linear-gradient(100.48deg, #FD7039 0%, #FF3C3D 100%)',
      },

      borderColor: {
        dot: {
          red: '#EC6D62',
          yellow: '#F5C451',
          green: '#68CC58',
        },
      },
    },
  },
  plugins: [],
};
