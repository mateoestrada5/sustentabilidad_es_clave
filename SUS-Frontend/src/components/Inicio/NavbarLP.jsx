import React, { useState } from "react";
import logo from "/edificiosVerde.png";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Icono de hamburguesa

const NavbarLP = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Controlar si el menú está abierto

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar estado del menú
  };

  // Función para redirigir a la misma página y recargarla
  const reloadPage = () => {
    navigate(0); // Recarga la página actual
  };

  return (
    <nav className="bg-white font-montserrat fixed top-0 left-0 right-0 z-10 px-4 py-2 shadow-md">
      {/* Contenedor del logo y título */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center sm:justify-start">
          {/* Logo y texto EasyDept, con evento de redirección para recargar */}
          <button onClick={reloadPage} className="flex items-center">
            <img src={logo} alt="Logo EasyDept" className="h-6 sm:h-8 mr-3" />
            <h1 className="text-2xl font-bold text-custom-green">EasyDept</h1>
          </button>
        </div>

        {/* Icono de hamburguesa, alineado a la derecha en pantallas pequeñas (menos de 910px) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-custom-green p-2 ml-auto" // Alineación a la derecha y visible en pantallas pequeñas
        >
          <FaBars className="w-6 h-6" />
        </button>
        
        {/* Botones en la parte derecha para pantallas grandes (a partir de 910px) */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <button
            onClick={() => navigate("/registro_newsletter")}
            className="bg-custom-green text-white rounded px-6 py-2 transition duration-200 hover:bg-green-700"
          >
            Unirse a EasyDept
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas (menos de 910px) */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-3">
            <button
              onClick={() => navigate("/inicio")}
              className="w-full text-center bg-transparent text-custom-green rounded px-6 py-1 transition duration-200 hover:bg-gray-200"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => navigate("/registro")}
              className="w-full text-center bg-transparent text-custom-green rounded px-6 py-1 transition duration-200 hover:bg-gray-200"
            >
              Crear una Cuenta
            </button>
            <button
              onClick={() => navigate("/registro/admin")}
              className="w-full text-center bg-custom-green text-white rounded px-6 py-1 transition duration-200 hover:bg-green-700"
            >
              Unirse a EasyDept
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarLP;
