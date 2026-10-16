/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#172B3A',
          dark: '#0F1E28',
          light: '#1E3A4F',
        },
        graphite: '#252A2E',
        orange: {
          DEFAULT: '#E87532',
          hover: '#D4611D',
          light: '#F5944E',
        },
        confirm: '#27845A',
        warning: '#B7791F',
        danger: '#C63D3D',
        surface: {
          light: '#F3F5F6',
          DEFAULT: '#FFFFFF',
        },
        muted: '#68737D',
      },
      fontFamily: {
        heading: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
