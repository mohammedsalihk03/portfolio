/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f3efe8',
        ink: '#111111',
      },
      fontFamily: {
        sans: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
