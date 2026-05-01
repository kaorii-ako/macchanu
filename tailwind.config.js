/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mac-teal': '#569b9e',
        'mac-teal-dark': '#3c7177',
        'mac-gold': '#d6b747',
        'mac-gold-light': '#e8c85f',
        'mac-red': '#a7362f',
        'mac-green': '#78b57b',
        'mac-green-dark': '#488a4a',
        'mac-blue': '#2d6493',
        'mac-teal-light': '#8acac7',
        'mac-black': '#000000',
        'mac-surface': '#0a0a0a',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(214, 183, 71, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(214, 183, 71, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}