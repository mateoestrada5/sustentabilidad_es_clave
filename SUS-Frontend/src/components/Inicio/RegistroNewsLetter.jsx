import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaArrowLeft, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const RegistroNewsLetter = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    dni: ''
  });

  const [edificio, setEdificio] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    pais: '',
    numPisos: '',
    numDepartamentos: '',
  });

  const [alert, setAlert] = useState(null); // Estado para manejar alertas
  const navigate = useNavigate();

  const handleUsuarioChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleEdificioChange = (e) => {
    const { name, value } = e.target;
    setEdificio({ ...edificio, [name]: value });
  };

  const isAdult = (fechaNacimiento) => {
    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age > 18;
    }
    return age >= 18;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de fecha de nacimiento (mayoría de edad)
    if (!isAdult(usuario.fechaNacimiento)) {
      setAlert({
        type: 'error',
        message: 'Debes ser mayor de edad para registrarte.',
      });
      return;
    }

    // Validación de campos
    if (!usuario.nombre || !usuario.apellido || !usuario.email) {
      setAlert({
        type: 'error',
        message: 'Todos los campos son obligatorios.',
      });
      return;
    }

    // Validación de teléfono
    if (!usuario.telefono) {
      setAlert({
        type: 'error',
        message: 'El número de teléfono es obligatorio.',
      });
      return;
    }

    // Validación de números de departamentos y pisos
    if (edificio.numDepartamentos <= 1 || edificio.numPisos <= 0) {
      setAlert({
        type: 'error',
        message: 'Los números de departamentos y pisos deben ser mayores que uno y cero respectivamente.',
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(usuario.email)) {
      setAlert({
        type: 'error',
        message: 'Por favor, introduce un email válido.',
      });
      return;
    }

    // Aquí es donde agregas tus credenciales de EmailJS
    const serviceID = 'service_vm9pgk2';   // Reemplaza con tu SERVICE_ID
    const templateID = 'template_86uzg4q'; // Reemplaza con tu TEMPLATE_ID
    const userID = 'Qq6nKv0nrBN5eaER2';      // Reemplaza con tu Public Key (USER_ID)

    let formData = {
      nombreUsuario: usuario.nombre,
      apellidoUsuario: usuario.apellido,
      email: usuario.email,
      telefono: usuario.telefono,
      fechaNacimiento: usuario.fechaNacimiento,
      dni: usuario.dni,
      nombreEdificio: edificio.nombre,
      direccionEdificio: edificio.direccion,
      ciudad: edificio.ciudad,
      pais: edificio.pais,
      numPisos: edificio.numPisos,
      numDepartamentos: edificio.numDepartamentos
    };

    emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
            setAlert({
              type: 'success',
              message: 'Correo enviado con éxito! El equipo de Easydept se pondrá en contacto con usted.',
            });
        }, (error) => {
            setAlert({
              type: 'error',
              message: 'Error al enviar el correo: ' + JSON.stringify(error),
            });
        });

    // Limpiar formulario
    formData = {
      nombreUsuario: '',
      apellidoUsuario: '',
      email: '',
      telefono: '',
      fechaNacimiento: '',
      dni: '',
      nombreEdificio: '',
      direccionEdificio: '',
      ciudad: '',
      pais: '',
      numPisos: '',
      numDepartamentos: ''
    };

  };

  return (
    <div className="bg-custom-green min-h-screen flex items-center justify-center font-montserrat relative">
      {/* Botón de volver */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-6 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition duration-200"
      >
        <FaArrowLeft className="text-custom-green" size={20} />
      </button>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-[90%] md:max-w-[7xl] lg:max-w-[8xl]">
        <h1 className="text-4xl text-center text-custom-green mb-6">Únete a EasyDept</h1>

        {/* Alerta */}
        {alert && (
          <div className={`flex items-center p-4 mb-4 rounded-lg ${alert.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {alert.type === 'error' ? (
              <FaTimesCircle className="mr-3" />
            ) : (
              <FaCheckCircle className="mr-3" />
            )}
            <p>{alert.message}</p>
          </div>
        )}

        <p className="text-lg text-center mt-6 mb-4">
          Para ser administrador, completa este formulario con tus datos y la información básica del edificio que deseas registrar. EasyDept analizará tu solicitud y se pondrá en contacto contigo. Una vez aceptado, podrás iniciar sesión con tu usuario y contraseña.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tarjeta Usuario */}
            <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 w-full md:w-1/2">
              <h2 className="w-full text-2xl text-center leading-snug text-custom-green mb-4">Datos del Usuario</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={usuario.telefono}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={usuario.fechaNacimiento}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Numero de Documento</label>
                  <input
                    type="number"
                    name="dni"
                    value={usuario.dni}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Tarjeta Edificio */}
            <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 w-full md:w-1/2">
              <h2 className="w-full text-2xl text-center leading-snug text-custom-green mb-4">Datos del Edificio</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre del Edificio</label>
                  <input
                    type="text"
                    name="nombre"
                    value={edificio.nombre}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dirección del Edificio</label>
                  <input
                    type="text"
                    name="direccion"
                    value={edificio.direccion}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                  <input
                    type="text"
                    name="ciudad"
                    value={edificio.ciudad}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">País</label>
                  <input
                    type="text"
                    name="pais"
                    value={edificio.pais}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número de Pisos</label>
                  <input
                    type="number"
                    name="numPisos"
                    value={edificio.numPisos}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Departamentos por Piso</label>
                  <input
                    type="number"
                    name="numDepartamentos"
                    value={edificio.numDepartamentos}
                    onChange={handleEdificioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                    min="1"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-custom-green text-white p-3 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroNewsLetter;
