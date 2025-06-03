import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx'; // Importa el hook useTheme

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Accede al estado y la función de alternancia de tema

  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-2 text-gray-800 dark:text-white">{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</span>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme} // Cambia el tema cuando se hace clic
        className="hidden"
      />
      <div className="relative">
        <div
          className={`w-12 h-6 bg-gray-300 rounded-full transition-all duration-300 ease-in-out ${
            isDarkMode ? 'bg-blue-600' : ''
          }`}
        >
          <div
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
              isDarkMode ? 'translate-x-6' : ''
            }`}
          />
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;