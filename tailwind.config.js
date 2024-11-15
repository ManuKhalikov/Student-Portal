/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A2342',
          coral: '#FF7F6B',
          mint: '#B4ECE3',
          sky: '#E1F6F4'
        },
        accent: {
          yellow: '#FFB800',
          blue: '#4FB8E7'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};