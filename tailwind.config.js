/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orbital: {
          DEFAULT: "#3B8EA5",
          light: "#5BA3C5",
          dark: "#2A6B7A",
        },
        deep: {
          DEFAULT: "#0c0f16",
          light: "#11141d",
          lighter: "#161a26",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
