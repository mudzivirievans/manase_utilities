/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-green) / <alpha-value>)',
        accent: 'rgb(var(--accent-yellow) / <alpha-value>)',
        neutral: 'rgb(var(--neutral-bg) / <alpha-value>)',
        agri: {
          green: '#4B7339', // deep green
          brown: '#7C5C36', // earthy brown
          gold: '#F5A623',  // gold
          sky: '#2BA6CB',   // sky blue
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
} 