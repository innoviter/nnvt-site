/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lime: '#a3e635',
      },
      fontFamily: {
        heading: ['Poppins', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        body: ['Consolas', 'Menlo', '"DejaVu Sans Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
