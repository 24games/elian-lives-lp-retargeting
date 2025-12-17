/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'telegram-blue': '#229ED9',
        'neon-cyan': '#00FFFF',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sheen': 'sheen 3s ease-in-out infinite',
      },
      keyframes: {
        sheen: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(200%) translateY(200%) rotate(45deg)' },
        },
      },
    },
  },
  plugins: [],
}

