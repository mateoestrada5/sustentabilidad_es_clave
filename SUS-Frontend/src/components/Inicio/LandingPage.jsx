import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLP from "./NavbarLP";
import { HiUserGroup } from "react-icons/hi";
import { ImBriefcase } from "react-icons/im";
import {
  FaKey,
  FaLightbulb,
  FaTools,
  FaBrain,
  FaChartLine,
  FaMoneyBillWave,
  FaLock,
} from "react-icons/fa";
import { RiContactsLine, RiStarLine } from "react-icons/ri";
import { BiQuestionMark, BiSupport } from "react-icons/bi";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null); // Estado para controlar qué tarjeta está activa

  // colores:
  // white
  // verde = #004d29
  // gris = #f3f4f6

  // SVG Divisores
  // Predeterminado
  // M0,160L80,181.3C160,203,320,245,480,261.3C640,277,800,267,960,234.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z

  // M0,160C80,120,160,80,240,64C320,48,400,64,480,96C560,128,640,176,720,192C800,208,880,176,960,160C1040,144,1120,128,1200,160C1280,192,1360,256,1440,320L1440,320L0,320Z
  // M0,128L80,106.7C160,85,320,43,480,64C640,85,800,181,960,170.7C1120,160,1280,64,1360,42.7L1440,21L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z
  // M0,192L40,186.7C80,181,160,171,240,154.7C320,139,400,117,480,128C560,139,640,181,720,192C800,203,880,181,960,154.7C1040,128,1120,96,1200,96C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z

  const adminActions1 = [
    {
      id: 1,
      title: "Comunicación",
      description: (
        <>
          Mantén una comunicación efectiva
          <br />
          tanto con propietarios como inquilinos.
        </>
      ),
      icon: <FaLightbulb style={{ color: "#004d29" }} />,
    },
    {
      id: 2,
      title: "Eficiencia",
      description: (
        <>
          Resuelve los problemas
          <br />
          de manera eficiente.
        </>
      ),
      icon: <FaTools style={{ color: "#004d29" }} />,
    },
    {
      id: 3,
      title: "Organización",
      description: (
        <>
          Administra tus edificios y<br />
          gestiona unidades fácilmente.
        </>
      ),
      icon: <FaBrain style={{ color: "#004d29" }} />,
    },
  ];

  const adminActions2 = [
    {
      id: 4,
      title: "Beneficio",
      description: (
        <>
          Lleva un control detallado
          <br />
          de los gastos comunes.
        </>
      ),
      icon: <FaChartLine style={{ color: "#004d29" }} />,
    },
    {
      id: 5,
      title: "Expensas",
      description: (
        <>
          Genera la liquidación de las expensas de forma clara
          <br />y precisa para tus propietarios e inquilinos.
        </>
      ),
      icon: <FaMoneyBillWave style={{ color: "#004d29" }} />,
    },
  ];

  const cardData = [
    {
      id: 1,
      title: "Administrador",
      description:
        "Gestiona todo el sistema y coordina las actividades de los propietarios e inquilinos.",
      icon: <ImBriefcase className="w-16 h-16 mb-4" />,
      functions: [
        "📢 Comunicación",
        "🏢 Organización de Departamentos",
        "⚠️ Atención de Reclamos",
        "💰 Registro de Gastos",
        "📑 Liquidación de Expensas",
      ],
    },
    {
      id: 2,
      title: "Propietario",
      description:
        "Visualiza sus propiedades, expensas, y se mantiene informado sobre su estado.",
      icon: <HiUserGroup className="w-16 h-16 mb-4" />,
      functions: [
        "🏡 Visualización de Propiedades",
        "💬 Comunicación con Administrador",
        "📊 Consulta de Expensas",
      ],
    },
    {
      id: 3,
      title: "Inquilino",
      description:
        "Consulta reclamos y mantiene comunicación directa con el administrador y propietarios.",
      icon: <FaKey className="w-16 h-16 mb-4" />,
      functions: [
        "💬 Comunicación de Necesidades",
        "📝 Consulta de Expensas",
        "📞 Reporte de Problemas",
      ],
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white font-montserrat text-gray-800">
      <NavbarLP />

      <div className="flex justify-center mt-20 botones-landing">
        <div className="relative w-full max-w-[70%] mx-auto h-auto bg-gray-100 rounded-lg shadow-lg flex items-center justify-center p-4 mb-8 sm:mb-10">
          {/* Contenedor de botones */}
          <div className="flex justify-center w-full space-x-2 lg:space-x-7 flex-wrap">
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("easydept")}
            >
              ¿Qué es EasyDept?
            </button>

            <button
              onClick={() => scrollToSection("usuarios")}
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
            >
              Usuarios de EasyDept
            </button>

            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("acciones")}
            >
              Acciones del Administrador
            </button>

            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("seguridad")}
            >
              Seguridad
            </button>

            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("contacto")}
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      <header
        className="min-h-[76vh] bg-white flex items-center justify-center mt-5"
        id="top"
      >
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-opacity-100 bg-custom-green rounded-xl flex flex-col lg:flex-row items-center justify-center p-4 min-h-[50vh] max-w-[75%] xl:px-2">
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-white order-2 lg:order-1">
            <p className="text-4xl text-porcentaje transition duration-300 transform hover:scale-105 font-semibold text-center">
              Gestión simplificada para Administradores de Edificios
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4 order-1 lg:order-2">
            <img
              src="logo.png"
              alt="Logo"
              className="max-w-[90%] h-auto transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </header>

      <WaveDivider color={["white"]} backgroundColor="#004d29" rotate={true} />

      <section
        id="easydept"
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-custom-green text-center relative"
        style={{
          backgroundImage: 'url("/edificio.png")',
          backgroundSize: "87%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-white">
          ¿Qué es EasyDept?
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl">
          EasyDept es un sistema de software diseñado para optimizar la gestión
          de consorcios y propiedades, proporcionando una plataforma con
          herramientas personalizadas que facilitan la comunicación entre
          administradores, propietarios e inquilinos.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-white">
          ¿Cuál es nuestra misión?
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl">
        Nuestra misión es optimizar la gestión de edificios, 
        facilitando la comunicación entre administradores, 
        propietarios e inquilinos a través de una plataforma 
        sencilla y eficiente. Proporcionamos herramientas que 
        agilizan procesos clave como la gestión de reclamos, 
        documentación y cálculo de expensas, destacándonos por 
        nuestra facilidad de uso y efectividad.
        </p>
      </section>

      <WaveDivider
        color={["#c6d7cf", "#004d29"]}
        rotate={true}
        svgPaths={[
          "M1440,128L1360,106.7C1280,85,1120,43,960,64C800,85,640,181,480,170.7C320,160,160,64,80,42.7L0,21L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z",
          "M0,160C80,120,160,80,240,64C320,48,400,64,480,96C560,128,640,176,720,192C800,208,880,176,960,160C1040,144,1120,128,1200,160C1280,192,1360,256,1440,320L1440,320L0,320Z",
        ]}
      />

      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center"
        id="usuarios"
      >
        <h2 className="text-3xl font-semibold mb-6">Usuarios en EasyDept</h2>
        <p className="text-lg mb-10">
          EasyDept ofrece un sistema de gestión donde interactúan tres tipos de
          usuarios:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative bg-custom-green text-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
              onClick={() =>
                setActiveCard(activeCard === card.id ? null : card.id)
              }
            >
              <div className="flex flex-col items-center justify-center h-full">
                {activeCard === card.id ? (
                  <>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-lg text-center">{card.description}</p>
                    <ul className="mt-4 text-left">
                      {card.functions.map((func, index) => (
                        <li key={index}>{func}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    {card.icon}
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-lg text-center">Haz clic para ver más</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider color={["#f3f4f6"]} backgroundColor="white" rotate={false} />

      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center"
        id="acciones"
      >
        <h2 className="text-3xl font-semibold mb-6">
          Acciones del Administrador
        </h2>
        <p className="text-lg mb-6">
          Como administrador, puedes realizar múltiples tareas para facilitar la
          gestión de edificios:
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminActions1.map((action) => (
              <div
                key={action.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 min-h-[200px] flex flex-col justify-between"
                style={{
                  border: "2px solid #004d29",
                  borderRadius: "8px",
                }}
              >
                <div className="flex justify-center items-center mb-4 text-4xl">
                  {action.icon}
                </div>
                <h3 className="font-semibold text-lg">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {adminActions2.map((action) => (
              <div
                key={action.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 min-h-[200px] flex flex-col justify-between"
                style={{
                  border: "2px solid #004d29",
                  borderRadius: "8px",
                }}
              >
                <div className="flex justify-center items-center mb-4 text-4xl">
                  {action.icon}
                </div>
                <h3 className="font-semibold text-lg">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider backgroundColor="#f3f4f6" />

      <section
        className="py-16 px-8 bg-custom-green flex flex-col md:flex-row"
        id="seguridad"
      >
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0 md:pr-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Seguridad
            </h2>
            <p className="text-gray-700 mb-8 text-white">
              En EasyDept, tu seguridad es nuestra prioridad. Hemos creado un
              sistema robusto que protege tu información personal y la de tus
              inquilinos, manteniéndola segura frente a accesos no deseados.
              Gracias a nuestras prácticas de seguridad y gestión de datos,
              tanto tú como tus inquilinos estarán protegidos de riesgos
              innecesarios. Con un acceso seguro y controlado, podrás gestionar
              todo con total confianza, sabiendo que la privacidad y seguridad
              de cada persona en tu consorcio están garantizadas en cada
              interacción.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="bg-white border-2 border-gray-500 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Gestión de Información
              </h3>
              <p className="text-gray-600">
                Implementamos protocolos de gestión de datos para garantizar que
                la información de inquilinos y propietarios se maneje de forma
                segura y responsable.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-500 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Acceso Controlado</h3>
              <p className="text-gray-600">
                Proporcionamos acceso restringido a la plataforma, asegurando
                que solo las personas autorizadas puedan acceder a la
                información sensible.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-500 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Confianza y Transparencia
              </h3>
              <p className="text-gray-600">
                Nuestro compromiso es fomentar la confianza entre propietarios e
                inquilinos, asegurando una comunicación abierta y transparente
                en la gestión.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider
        color={["#c6d7cf", "#004d29"]}
        backgroundColor="white"
        rotate={true}
        svgPaths={[
          "M1440,128L1360,106.7C1280,85,1120,43,960,64C800,85,640,181,480,170.7C320,160,160,64,80,42.7L0,21L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z",
          "M0,160C80,120,160,80,240,64C320,48,400,64,480,96C560,128,640,176,720,192C800,208,880,176,960,160C1040,144,1120,128,1200,160C1280,192,1360,256,1440,320L1440,320L0,320Z",
        ]}
      />

      <section
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-16 px-8 bg-white text-center"
        id="contacto"
      >
        <div className="flex-1 flex justify-center mt-8">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto bg-custom-green rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
            <img
              src="logo.png"
              alt="Logo"
              className="w-full max-w-[90%] h-auto mb-4 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => scrollToSection("top")}
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=easydept.utn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiContactsLine className="w-16 h-16 text-white transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex-1 mb-8 lg:mb-0 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contáctanos</h2>
          <p className="text-lg text-gray-700 mb-4">
            ¿Necesitas comunicarte con nosotros? Puedes contáctarnos para:
          </p>
          <div className="flex justify-center">
            <ul className="list-disc list-inside text-start text-lg text-gray-700 mb-4">
              <li className="flex items-center">
                <BiQuestionMark className="mr-2 w-5 h-5" /> Consultas
              </li>
              <li className="flex items-center">
                <RiStarLine className="mr-2 w-5 h-5" /> Recomendaciones
              </li>
              <li className="flex items-center">
                <BiSupport className="mr-2 w-5 h-5" /> Ayuda y Soporte
              </li>
            </ul>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=easydept.utn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-custom-green font-bold"
          >
            easydept.utn@gmail.com
          </a>
        </div>
      </section>

      <MountainDivider color={["#c6d7cf", "#397559", "#004d29"]} />
    </div>
  );
};

const WaveDivider = ({ color, backgroundColor, rotate = false, svgPaths }) => {
  const defaultPaths = [
    "M0,160L80,181.3C160,203,320,245,480,261.3C640,277,800,267,960,234.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
    "M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
  ];

  const pathsToUse = svgPaths && svgPaths.length > 0 ? svgPaths : defaultPaths;

  return (
    <div
      style={{
        overflow: "hidden", // Evita posibles líneas no deseadas
        backgroundColor: backgroundColor || "transparent", // Fondo opcional
      }}
    >
      <svg
        className="wave-divider"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "auto",
          display: "block", // Elimina posibles espacios blancos
          transform: rotate ? "rotate(180deg)" : "none",
        }}
      >
        {pathsToUse.map((path, index) => (
          <path key={index} fill={color[index] || "transparent"} d={path} />
        ))}
      </svg>
    </div>
  );
};

const MountainDivider = ({
  color = ["#c6d7cf", "#397559", "#004d29"],
  rotate = false,
  backgroundColor,
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor || "transparent", // Fondo opcional
        transform: rotate ? "rotate(180deg)" : "none",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "auto" }}
      >
        <path
          fill={color[0]}
          d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,160C672,139,768,117,864,101.3C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill={color[1]}
          d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,213.3C672,224,768,192,864,186.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill={color[2]}
          d="M0,320L48,309.3C96,299,192,277,288,277.3C384,277,480,299,576,298.7C672,299,768,277,864,256C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default LandingPage;
