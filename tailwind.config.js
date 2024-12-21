/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reverdece': {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
        'accent': {
          100: '#fad1e8',
          200: '#f8b4d9',
          300: '#f687b3',
          400: '#ed64a6',
          500: '#d53f8c',
          600: '#b83280',
          700: '#97266d',
          800: '#702459',
          900: '#521B41',
        }
      },
    },
  },
  plugins: [],
}