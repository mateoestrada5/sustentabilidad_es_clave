import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { useTheme } from "./contexts/ThemeContext.jsx"; // Asegúrate de importar el contexto
import LandingPage from './components/Inicio/LandingPage.jsx';
import RegistroNewsLetter from "./components/Inicio/RegistroNewsLetter.jsx";

function App() {
  const { isDarkMode } = useTheme(); // Usar el estado del contexto para saber si es oscuro

  return (
    <Router>
      {/* Aplicar clase para el fondo dependiendo del tema */}
      <div className={isDarkMode ? "dark:bg-gray-900" : "bg-white"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registro_newsletter" element={<RegistroNewsLetter />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;