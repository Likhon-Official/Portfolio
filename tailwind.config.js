/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
        'sans': ['Space Mono', 'monospace'],
      },
      aspectRatio: {
        'square': '1 / 1',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
