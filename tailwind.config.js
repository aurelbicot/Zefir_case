/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zefir: {
          DEFAULT: '#6C2EA8',
          dark: '#5D2997',
          light: '#8B5CBF',
          muted: 'rgba(108, 46, 168, 0.08)',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
