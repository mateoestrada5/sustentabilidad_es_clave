import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/Inicio/LandingPage.jsx';
import RegistroNewsLetter from "./components/Inicio/RegistroNewsLetter.jsx";

function App() {

  return (
    <Router>
      {/* Aplicar clase para el fondo dependiendo del tema */}
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registro_newsletter" element={<RegistroNewsLetter />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;