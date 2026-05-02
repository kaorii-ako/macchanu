/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mac-black': '#0a0a0f',
        'mac-gold': '#d6b747',
        'mac-gold-light': '#f0d15c',
        'mac-gold-dark': '#b89a33',
        'mac-teal': '#19757e',
        'mac-teal-light': '#2ba7b3',
        'mac-blue': '#2574a7',
        'mac-red': '#8a1c1c',
        'mac-green': '#1dd169',
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
