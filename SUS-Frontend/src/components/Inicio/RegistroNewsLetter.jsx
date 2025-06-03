import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import emailjs from "emailjs-com"
import { FaArrowLeft, FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const RegistroNewsLetter = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    especialidad: "",
    facultadRegional: "",
  })

  const [alert, setAlert] = useState(null) // Estado para manejar alertas
  const navigate = useNavigate()

  const handleUsuarioChange = (e) => {
    const { name, value } = e.target
    setUsuario({ ...usuario, [name]: value })
  }

  const facultadesUTN = [
    "Avellaneda",
    "Bahía Blanca",
    "Buenos Aires",
    "Chaco",
    "Córdoba",
    "Concepción del Uruguay",
    "Delta",
    "General Pacheco",
    "Haedo",
    "La Plata",
    "La Rioja",
    "Mendoza",
    "Neuquén",
    "Paraná",
    "Reconquista",
    "Resistencia",
    "Río Grande",
    "Rosario",
    "San Francisco",
    "San Nicolás",
    "San Rafael",
    "Santa Cruz",
    "Santa Fe",
    "Tierra del Fuego",
    "Tucumán",
    "Venado Tuerto",
    "Villa María",
    "Villa Mercedes"
  ];

  const especialidadesUTN = [
    "Ingeniería Civil",
    "Ingeniería Eléctrica",
    "Ingeniería Electrónica",
    "Ingeniería Electromecánica",
    "Ingeniería en Sistemas de Información",
    "Ingeniería Industrial",
    "Ingeniería Mecánica",
    "Ingeniería Química",
    "Ingeniería Textil",
    "Ingeniería Naval",
    "Ingeniería Ferroviaria",
    "Ingeniería Aeronáutica",
    "Ingeniería en Agrimensura",
    "Ingeniería Biomédica",
    "Licenciatura en Administración Rural",
    "Licenciatura en Organización Industrial",
    "Tecnicatura Universitaria en Programación",
    "Tecnicatura Universitaria en Sistemas Informáticos",
    "Tecnicatura Universitaria en Mantenimiento Industrial",
    "Tecnicatura Universitaria en Mecatrónica",
    "Tecnicatura Universitaria en Seguridad e Higiene",
    "Tecnicatura Universitaria en Logística",
    "Tecnicatura Universitaria en Administración",
    "Tecnicatura Universitaria en Química"
  ];


  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación de campos
    if (
      !usuario.nombre ||
      !usuario.apellido ||
      !usuario.email ||
      !usuario.especialidad ||
      !usuario.facultadRegional
    ) {
      setAlert({
        type: "error",
        message: "Todos los campos son obligatorios.",
      })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(usuario.email)) {
      setAlert({
        type: "error",
        message: "Por favor, introduce un email válido.",
      })
      return
    }

    // Aquí es donde agregas tus credenciales de EmailJS
    const serviceID = "service_d0trz5b" // Reemplaza con tu SERVICE_ID
    const templateID = "template_5rbmbia" // Reemplaza con tu TEMPLATE_ID
    const userID = "sjuNEcRCjk6nPPw6q" // Reemplaza con tu Public Key (USER_ID)

    let formData = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      especialidad: usuario.especialidad,
      facultadRegional: usuario.facultadRegional,
    }

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        setAlert({
          type: "success",
          message:
            "Correo enviado con éxito! Pronto te llegaran nuevas noticias.",
        })
      },
      (error) => {
        setAlert({
          type: "error",
          message: "Error al enviar el correo: " + JSON.stringify(error),
        })
      }
    )

    // Limpiar formulario
    formData = {
      nombre: "",
      apellido: "",
      email: "",
      especialidad: "",
      facultadRegional: "",
    }
  }

  return (
    <div className="bg-custom-green min-h-screen flex items-center justify-center font-montserrat relative">
      {/* Botón de volver */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-6 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 transition duration-200"
      >
        <FaArrowLeft className="text-custom-green" size={20} />
      </button>

      <div className="bg-white shadow-lg rounded-xl p-8  max-w-[90%] md:max-w-[7xl] lg:max-w-[8xl]">
        <h1 className="text-4xl text-center text-custom-green mb-6">
          Suscríbete a nuestro Newsletter
        </h1>

        {/* Alerta */}
        {alert && (
          <div
            className={`flex items-center p-4 mb-4 rounded-lg ${alert.type === "error"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
              }`}
          >
            {alert.type === "error" ? (
              <FaTimesCircle className="mr-3" />
            ) : (
              <FaCheckCircle className="mr-3" />
            )}
            <p>{alert.message}</p>
          </div>
        )}

        <p className="text-lg text-center mt-6 mb-4">
          Completa este formulario con tus datos:
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-8">
            {/* Tarjeta Usuario */}
            <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 m-auto w-full ">
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700">
                    Apellido
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Carrera / Especialidad
                  </label>
                  <select
                    name="especialidad"
                    value={usuario.especialidad}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  >
                    <option value="">Seleccioná una carrera</option>
                    {especialidadesUTN.map((carrera) => (
                      <option key={carrera} value={carrera}>
                        {carrera}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Facultad Regional
                  </label>
                  <select
                    name="facultadRegional"
                    value={usuario.facultadRegional}
                    onChange={handleUsuarioChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green"
                    required
                  >
                    <option value="">Seleccioná una facultad</option>
                    {facultadesUTN.map((facultad) => (
                      <option key={facultad} value={facultad}>
                        Facultad Regional {facultad}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-custom-green text-white p-3 rounded-lg hover:bg-custom-green/90 transition duration-200"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegistroNewsLetter
