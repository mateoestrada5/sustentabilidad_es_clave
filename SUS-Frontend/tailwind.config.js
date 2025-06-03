/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#02523a',
        'custom-gray': '#4e5766',
        'custom-blue': '#1a2b4f',
        'custom-red' : '#ce1126'
      },
      fontFamily: {
        montserrat: "Montserrat"
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '130': '1.30',
      }
    },
  },
  darkMode: 'class',  // Agrega esta línea para habilitar el modo oscuro
  plugins: [
    require("tailwind-scrollbar")
  ],
}