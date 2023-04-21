/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./*/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cda24b',
        primaryHover: '#c7ac70',
        gray: '#f7f7f7',
        secondary: '#1a1a1a',
        // secondary: '#181D24',
        pink: '#FFFBF3'
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'primary': ['Euclid'],
      'branding': ['BankGothic'],
      'heading': ['BankGothic']
    }
  },

  plugins: [],
}

