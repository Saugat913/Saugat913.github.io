/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#3A65D4"
      },
      fontFamily: {
        'Montagu-Slab': ['Montagu Slab', 'serif']
      },
      screens: {
        'tab': { 'min': '1170px' }
      }
    },
  },
  plugins: [],
}

