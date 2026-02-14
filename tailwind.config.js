/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx}', './src/components/**/*.{js,jsx}', './src/data/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: 'var(--shadow)',
        hover: 'var(--shadowHover)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
