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
      typography: {
        DEFAULT: {
          css: {
            color: '#94a3b8',
            h1: {
              color: '#e2e8f0',
            },
            h2: {
              color: '#e2e8f0',
            },
            h3: {
              color: '#e2e8f0',
            },
            h4: {
              color: '#e2e8f0',
            },
            strong: {
              color: '#e2e8f0',
            },
            code: {
              color: '#64ffda',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            a: {
              color: '#64ffda',
              '&:hover': {
                color: '#4fa',
              },
            },
            pre: {
              backgroundColor: '#0a192f',
              color: '#94a3b8',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
