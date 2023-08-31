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
        gray: '#171717',
        // secondary: '#1a1a1a',
        black: '#171717',
        lightBlack: '#201f1f',
        secondary: '#181D24',
        gold: '#d3a05d',
        goldHover: '#c8924c',
        tomato: '#d3815d',
        tomatoHover: '#BE6944',
        textBlackLight: '#A5A6AA',
        textBlackDark: '#0F0F0F',
        textWhiteLight: '#D2D3D5',
        textWhiteDark: '#FCFCFC',
        pink: '#FFFBF3',
        graytext: '#9ea0a6',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ["Open Sans"],
      // 'primary': ['Euclid'],
      'primary': ['Poppins'],
      'branding': ['BankGothic'],
      'heading': ['BankGothic'],
      'style': ['Syne'],
      'script': ['wonder garden script'],
    }
  },

  plugins: [],
}
