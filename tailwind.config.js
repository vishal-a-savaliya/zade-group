/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./*/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cda24b',
        gray: '#f7f7f7',
        secondary: '#1a1a1a',
      },
    },
  },

  plugins: [],
}

