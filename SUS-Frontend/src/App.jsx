import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage.jsx';
import NavbarLP from "./components/NavbarLP.jsx";

function App() {

  return (
    <Router>
      {/* Aplicar clase para el fondo dependiendo del tema */}
      <NavbarLP />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;