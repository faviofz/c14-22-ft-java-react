/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        projectLight: {
          primary: '#3378FF',
          neutral: '#2B2D42',
          accent: '#545F71',
          'base-100': '#EDF2F4', // background
          'base-200': '#FCFCFC', // panel background
        },
        projectDark: {
          primary: '#3378FF',
          neutral: '#FCFCFC',
          accent: '#14142A',
          'base-100': '#343B4E',
          'base-200': '#2B2D42',
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
