/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nakshatra: {
          50: '#fdf8f0',
          100: '#f9edd9',
          200: '#f2d7b0',
          300: '#e9ba7d',
          400: '#df9649',
          500: '#d67d2a',
          600: '#c86520',
          700: '#a64d1c',
          800: '#853e1e',
          900: '#6c341b',
          950: '#3a190c',
        },
        cosmic: {
          900: '#0f0c29',
          800: '#1a1442',
          700: '#242055',
          600: '#302b69',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(214, 125, 42, 0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(214, 125, 42, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
