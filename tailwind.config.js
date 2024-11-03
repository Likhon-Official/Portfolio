/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
        'sans': ['Space Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        'xxs': '0.625rem',
        'tiny': '0.75rem',
        'base-mobile': '0.875rem',
        'base': '1rem',
      },
      maxWidth: {
        'screen-xs': '320px',
        'screen-sm': '375px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1440px',
        'screen-2xl': '1920px',
      },
      padding: {
        'safe': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
