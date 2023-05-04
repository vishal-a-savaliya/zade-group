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
        gray: '#f8f8f8',
        // secondary: '#1a1a1a',
        black: '#3f4448',
        secondary: '#181D24',
        pink: '#FFFBF3',
        graytext: '#9ea0a6',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      // 'primary': ['Euclid'],
      'primary': ['Montserrat'],
      'branding': ['BankGothic'],
      'heading': ['BankGothic'],
      'style': ['Marcellus SC'],
    }
  },

  plugins: [],
}

