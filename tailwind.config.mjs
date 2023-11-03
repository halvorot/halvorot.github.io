const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'bounce-left': 'bounce-left 1s ease-in-out 2',
      },
      keyframes: {
        'bounce-left': {
          '0%, 100%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(-25%)'}
        }
      },  
    },
  },
  plugins: [],
};
