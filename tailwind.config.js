/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#124673',
        secondary: '#D95E32',
        tertiary: '#F2F2F2',
        accent: '#EACEA0',
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
