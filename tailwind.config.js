/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        surface: '#0F172A',
        text: '#E5E7EB',
        primary: '#22C55E',
      },
      borderColor: {
        soft: 'rgba(148,163,184,0.18)',
      },
      boxShadow: {
        glow: '0 12px 40px rgba(34,197,94,0.2)',
      },
    },
  },
  plugins: [],
};
