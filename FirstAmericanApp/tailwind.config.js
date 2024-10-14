/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        "dark" :  '#232A3C', 
        "meduim" :  '#293245'
      }
    },
  },
  plugins: [],
}

