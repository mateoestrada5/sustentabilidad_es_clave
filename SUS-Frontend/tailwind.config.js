/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#107570',
        
        'custom-blue': '#107570',
        
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