/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        projectLight: {
          primary: '#3378FF',
          neutral: '#545F7',
          accent: '#5A1846',
          'base-100': '#FCFCFC',
        },
        projectDark: {
          primary: '#3378FF',
          neutral: '#2B2D42',
          accent: '#5A1846',
          'base-100': '#343B4E',
          'base-900': '#14142',
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend'],
      },
    },
  },
  plugins: [require('daisyui')],
};
