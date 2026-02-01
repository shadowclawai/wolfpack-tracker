/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wolf: {
          dark: '#0a0a0f',
          purple: '#7c3aed',
          red: '#ef4444',
        }
      }
    },
  },
  plugins: [],
}
