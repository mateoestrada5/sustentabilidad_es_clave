import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLP = () => {
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(0);
  };

  return (
    <nav className="bg-white font-montserrat fixed top-0 left-0 right-0 z-10 px-4 py-2 shadow-md">
      <div className="flex items-center justify-center w-full ">
        {/* Logo + Título alineados a la izquierda */}
        <button onClick={reloadPage} className="flex items-center border-2 px-6 py-1 rounded-full border-custom-green/70">
          <img src={"/logo.png"} className="h-6 sm:h-8 mr-3" />
          <h1 className="text-2xl font-bold text-custom-green whitespace-nowrap">GreenOps Consulting</h1>
        </button>
      </div>
    </nav >
  );
};

export default NavbarLP;
