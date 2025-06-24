import React, { useState } from "react";
import { MdForest, MdOutlineContactSupport, MdOutlineContactless, MdCastForEducation } from "react-icons/md";
import { GiRecycle, GiFactory } from "react-icons/gi";
import { FaLightbulb, FaTools, FaHandHoldingHeart, FaFlagCheckered, FaChartLine, FaSchool } from "react-icons/fa";
import { FaPeopleGroup, FaPerson } from "react-icons/fa6";
import { RiContactsLine, RiStarLine, RiGovernmentLine } from "react-icons/ri";
import { BiQuestionMark, BiSupport } from "react-icons/bi";
import { GoArrowDown } from "react-icons/go";
import { PiNutBold } from "react-icons/pi";
import { IoMegaphoneOutline, IoPeople, IoNewspaperOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { LiaUtensilsSolid } from "react-icons/lia";
import { IoMdBusiness } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { MdWork, MdLocationCity } from "react-icons/md";
import { FaUsers } from "react-icons/fa";




const LandingPage = () => {
  const [activeCard, setActiveCard] = useState(null); // Estado para controlar qué tarjeta está activa

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Informe-Sustentabilidad-2025.pdf';
    link.download = 'Informe-Sustentabilidad-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const paraQueActions = [
    {
      id: 1,
      title: "Propósito",
      description: (
        <>
          Promover un modelo de desarrollo humano que asegure el bienestar de las personas sin agotar los recursos del planeta ni causar daños irreversibles al medio ambiente.
        </>
      ),
      icon: <FaLightbulb style={{ color: "#02523a" }} />,
    },
    {
      id: 2,
      title: "Objetivo",
      description: (
        <>
          Satisfacer las necesidades actuales de la sociedad sin comprometer las posibilidades de las futuras generaciones, manteniendo un equilibrio
        </>
      ),
      icon: <FaTools style={{ color: "#02523a" }} />,
    },
    {
      id: 3,
      title: "Finalidad",
      description: (
        <>
          Construir un futuro justo, equitativo y saludable a través del uso racional de los recursos, la conservación de los ecosistemas, y la promoción de prácticas responsables e inclusivas.
        </>
      ),
      icon: <FaFlagCheckered style={{ color: "#02523a" }} />,
    },
    {
      id: 4,
      title: "Intencion",
      description: (
        <>
          Impulsar un cambio que transforme la manera en que producimos, consumimos y convivimos,promoviendo una cultura de responsabilidad intergeneracional y de respeto hacia el entorno natural
        </>
      ),
      icon: <FaHandHoldingHeart style={{ color: "#02523a" }} />,
    },
  ];

  const costosSustentabilidad = [
    {
      id: 1,
      title: "Inversión Inicial",
      description: (
        <>
          5-20%
          <br />
          Capital anual operativo
          <br />
          de la empresa
        </>

      ),
      icon: <FaChartLine style={{ color: "#004d29" }} />,
    },
    {
      id: 2,
      title: "Reducción de Productividad",
      description: (
        <>
          5-15%
          <br />
          Durante la transición
        </>
      ),
      icon: <GoArrowDown style={{ color: "#02523a" }} />,
    },
    {
      id: 3,
      title: "Reducción de Contaminación",
      description: (
        <>
          Hasta un 80% del C02
          <br />
          en algunos casos
        </>

      ),
      icon: <GiRecycle style={{ color: "#004d29" }} />,
    },

  ];
  const costosSustentabilidad2 = [
    {
      id: 4,
      title: "Impacto Social",
      description: (
        <>
          Influencia en
          <br />
          miles de personas

        </>
      ),
      icon: <FaPeopleGroup style={{ color: "#02523a" }} />,
    },
    {
      id: 5,
      title: "Contaminación Actual",
      description: (
        <>
          150-400 tn de CO2 al año
          <br />
          emitida por una planta de producción

        </>

      ),
      icon: <GiFactory style={{ color: "#004d29" }} />,
    },

  ];
  const recursos = [
    {
      id: 9,
      title: "Instrumentos",
      description:
        "",
      icon: <IoNewspaperOutline className="w-16 h-16 mb-4" />,
      functions: [
        "• Normas y certificaciones",
        "• Protocolos de gestión ambiental",
        "• Sistemas de medición de impactos",
      ],
    },
    {
      id: 10,
      title: "Objetos",
      description:
        "",
      icon: <PiNutBold className="w-16 h-16 mb-4" />,
      functions: [
        "• Separación de residuos",
        "• Dispositivos de ahorro energético",
        "• Utensilios reutilizables",
      ],
    },
    {
      id: 11,
      title: "Recursos",
      description:
        "",
      icon: <FaPerson className="w-16 h-16 mb-4" />,
      functions: [
        "• Conocimientos técnicos",
        "• Información ambiental",
        "• Capital para inversiones verdes",
        "• Recursos humanos",
      ],
    },
    {
      id: 12,
      title: "Elementos",
      description:
        "",
      icon: <MdCastForEducation className="w-16 h-16 mb-4" />,
      functions: [
        "• Educación ambiental",
        "• Tecnologías limpias",
        "• Plataformas de comunicación",
        "• Marcos legales",
      ],
    },
    {
      id: 13,
      title: "Medios",
      description:
        "",
      icon: <IoMegaphoneOutline className="w-16 h-16 mb-4" />,
      functions: [
        "• Campañas educativas",
        "• Talleres",
        "• Medios de comunicación",
        "• Movimientos sociales",
      ],
    },
    {
      id: 14,
      title: "Herramientas",
      description:
        "",
      icon: <VscTools className="w-16 h-16 mb-4" />,
      functions: [
        "• Aplicaciones para monitorear el consumo energético",
        "• Softwares para gestión ambiental",
        "• Instrumentos de medición y control ambiental",
      ],
    },
  ];

  const recursos2 = [{
    id: 15,
    title: "Utensilios",
    description:
      "",
    icon: <LiaUtensilsSolid className="w-16 h-16 mb-4" />,
    functions: [
      "• Recipientes para reciclaje",
      "• Sistemas para compostaje",
      "• Kits de ahorro de agua",
      "• Productos ecológicos certificados",
    ],
  },]

  const cardDataPorQue = [
    {
      id: 1,
      title: "Causa",
      description:
        "El desarrollo histórico ha sido insostenible, generando impactos negativos en el medio ambiente, agotando recursos naturales y creando desigualdades sociales.",
      icon: <MdOutlineContactSupport className="w-16 h-16 mb-4" />,
      functions: [],
    },
    {
      id: 2,
      title: "Motivo",
      description:
        "Responder a los desafíos ambientales, sociales y económicos que amenazan la estabilidad del planeta y la vida de las futuras generaciones.",
      icon: <MdOutlineContactless className="w-16 h-16 mb-4" />,
      functions: [],
    },
    {
      id: 3,
      title: "Razón",
      description:
        "Necesitamos urgentemente  replantear la forma en que producimos, consumimos y nos relacionamos con el entorno, para garantizar un equilibrio entre el desarrollo humano y la conservación de los recursos.",
      icon: <MdForest className="w-16 h-16 mb-4" />,
      functions: [],
    },
  ];

  const cardDataQuien1 = [
    {
      id: 4,
      title: "Gobiernos",
      description:
        "Crean y aplican marcos legales y políticas públicas ambientales que regulan una sociedad.",
      icon: <RiGovernmentLine className="w-16 h-16 mb-4" />,
    },
    {
      id: 5,
      title: "Empresas",
      description:
        "Responden y adaptan sus procesos para respetar las normas ambientales. Innovan en tecnologías limpias, realizan reportes de su impacto, y buscan reducir la huella ecológica.",
      icon: <IoMdBusiness className="w-16 h-16 mb-4" />,
    },
    {
      id: 6,
      title: "Ciudadanos",
      description:
        "Practican el consumo consciente, participan activamente en la defensa ambiental, y exigen transparencia de consumo a los gobiernos y empresas.",
      icon: <IoPeople className="w-16 h-16 mb-4" />,
    },
  ]

  const cardDataQuien2 = [{
    id: 7,
    title: "ONGs y Activistas",
    description:
      "Denuncian ecocidios, educan comunidades y presionan a los tomadores de decisiones mediante campañas y litigios.",
    icon: <MdForest className="w-16 h-16 mb-4" />,
  },
  {
    id: 8,
    title: "Educadores y Medios de Comunicación",
    description:
      "Transmiten buenas prácticas y alertan sobre problemas ambientales para generar conciencia en la sociedad.",
    icon: <FaSchool className="w-16 h-16 mb-4" />,
  },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const comoItems = [
    {
      title: "Manera",
      desc: "Adoptar prácticas sostenibles en la vida y empresas.",
    },
    {
      title: "Método",
      desc: "Implementar normas como ISO 14001 y la regla de las 3R.",
    },
    {
      title: "Proceso",
      desc: "Educar y concientizar sobre huella de carbono y economía circular.",
    },
    {
      title: "Forma",
      desc: "Participar en comunidades con limpieza y reforestación.",
    },
    {
      title: "Procedimiento",
      desc: "Adoptar consumo responsable y ahorrar recursos.",
    },
    {
      title: "Modo",
      desc: "Usar tecnologías verdes como energías limpias e innovadoras.",
    },
    {
      title: "Técnicas",
      desc: "Separar residuos, reparar fugas y usar electrodomésticos eficientes.",
    },
    {
      title: "Instrucciones",
      desc: "Informar, educar y participar activamente en sustentabilidad.",
    },
  ];

  return (
    <div className="bg-white font-montserrat text-gray-800">
      

      <div className="flex justify-center mt-20 botones-landing">
        <div className="relative w-full max-w-[70%] mx-auto h-auto bg-gray-100 rounded-lg shadow-lg flex items-center justify-center p-4 mb-8 sm:mb-10">
          {/* Contenedor de botones */}
          <div className="flex justify-center w-full space-x-2 lg:space-x-7 flex-wrap">
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("que_es")}
            >
              ¿Qué es?
            </button>

            <button
              onClick={() => scrollToSection("por_que")}
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
            >
              ¿Por Qué?
            </button>

            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("para_que")}
            >
              ¿Para Qué?
            </button>

            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("quien")}
            >
              ¿Quién?
            </button>
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("cuando")}
            >
              ¿Cuándo?
            </button>
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("donde")}
            >
              ¿Dónde?
            </button>
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("como")}
            >
              ¿Cómo?
            </button>
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("con_que")}
            >
              ¿Con Qué?
            </button>
            <button
              className="bg-transparent text-gray-700 rounded px-4 py-1 transition duration-200 hover:bg-gray-200 w-full sm:w-auto mb-2 sm:mb-0"
              onClick={() => scrollToSection("cuanto")}
            >
              ¿Cuánto?
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
              ¡Comprendamos la Sustentabilidad!
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4 order-1 lg:order-2">
            <img
              src="sustentable.png"
              alt="Logo"
              className="max-w-[50%] h-auto transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </header>

      <WaveDivider color={["white"]} backgroundColor="#02523a" rotate={true} />

      {/* Que es */}
      <section
        id="que_es"
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-custom-green text-center relative"
        style={{
          backgroundImage: "url(/mundoSustentable.png)",
          backgroundSize: "87%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-gradient-to-b from-custom-green/60 to-custom-green/90 rounded-xl p-4 shadow-xl gradiant-white">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            ¿Qué es la Sustentabilidad?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl">
            Es la capacidad de un sistema para mantenerse a lo largo del tiempo sin agotar los recursos naturales ni dañar el entorno.
            <br /><br />
            La sustentabilidad implica ver el mundo desde una perspectiva solidaria y responsable, donde el bienestar colectivo y el cuidado del planeta están por encima del interés individual.
          </p>
        </div>
      </section>

      <WaveDivider
        color={["#c6d7cf", "#02523a"]}
        rotate={true}
        svgPaths={[
          "M1440,128L1360,106.7C1280,85,1120,43,960,64C800,85,640,181,480,170.7C320,160,160,64,80,42.7L0,21L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z",
          "M0,160C80,120,160,80,240,64C320,48,400,64,480,96C560,128,640,176,720,192C800,208,880,176,960,160C1040,144,1120,128,1200,160C1280,192,1360,256,1440,320L1440,320L0,320Z",
        ]}
      />


      {/* Por que */}
      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center"
        id="por_que"
      >
        <h2 className="text-3xl font-semibold mb-6">¿Por qué surge la sustentabilidad?</h2>
        <p className="text-lg mb-10">
          Es una reacción a los efectos perjudiciales del desarrollo insostenible.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {cardDataPorQue.map((card) => (
            <div
              key={card.id}
              className="relative bg-gradient-to-t from-custom-green/90 to-custom-green/100 gradiant-white text-slate-200 rounded-lg shadow-xl p-6 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
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
        <hr class="border-t-2 border-gray-300 my-6 w-[90%] mx-auto mt-10" />
        <p className="text-lg  italic">La sustentabilidad no es una opción, sino una necesidad urgente para asegurar un futuro habitable, protegiendo el planeta y garantizando bienestar para las próximas generaciones.</p>
        <hr class="border-t-2 border-gray-300 my-6 w-[90%] mx-auto" />
      </section>

      <WaveDivider color={["#f3f4f6"]} backgroundColor="white" rotate={false} />

      {/* Para que */}
      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center"
        id="para_que"
      >
        <h2 className="text-3xl font-semibold mb-6">
          ¿Para qué sirve la sustentabilidad?
        </h2>
        <p className="text-lg mb-6">
          La sustentabilidad no es solo una meta, sino una necesidad urgente y compartida
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-10">
            {paraQueActions.map((action) => (
              <div
                key={action.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 min-h-[200px] flex flex-col justify-between border-2 border-custom-green"
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
      </section>

      <MountainDivider backgroundColor="#f3f4f6" />

      {/* quien */}
      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center bg-custom-green text-white"
        id="quien"
      >
        <h2 className="text-3xl font-semibold mb-6">¿Quién es responsable de la sustentabilidad?</h2>
        <p className="text-lg mb-10">
          La responsabilidad es colectiva y compartida. Todos en la socidad participan y asumen un rol para preservar el planeta.
        </p>
        <div className="grid grid-cols-3 gap-8 w-full max-w-[1200px]">
          {cardDataQuien1.map((card) => (
            <div
              key={card.id}
              className="relative bg-slate-100 text-black rounded-xl shadow-lg p-2 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
              onClick={() =>
                setActiveCard(activeCard === card.id ? null : card.id)
              }
            >
              <div className="border-2 border-custom-green h-full rounded-xl">
                <div className="flex flex-col items-center justify-center h-full p-4">
                  {activeCard === card.id ? (
                    <>
                      <h3 className="text-xl font-semibold ">{card.title}</h3>
                      <p className="text-lg text-center">{card.description}</p>
                    </>
                  ) : (
                    <>
                      {card.icon}
                      <h3 className="text-xl font-semibold ">{card.title}</h3>
                      <p className="text-lg text-center">Haz clic para ver más</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 max-w-[870px] p-6">
          {cardDataQuien2.map((card) => (
            <div
              key={card.id}
              className="relative bg-slate-100 text-black rounded-xl shadow-lg p-2 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
              onClick={() =>
                setActiveCard(activeCard === card.id ? null : card.id)
              }
            >
              <div className="border-2 border-custom-green h-full rounded-xl">
                <div className="flex flex-col items-center justify-center h-full p-4">
                  {activeCard === card.id ? (
                    <>
                      <h3 className="text-xl font-semibold ">{card.title}</h3>
                      <p className="text-lg text-center">{card.description}</p>
                    </>
                  ) : (
                    <>
                      {card.icon}
                      <h3 className="text-xl font-semibold ">{card.title}</h3>
                      <p className="text-lg text-center">Haz clic para ver más</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr class="border-t-2 border-gray-300 my-6 w-[90%] mx-auto mt-10" />
        <p className="text-lg  italic">Toda la sociedad está afectada por las decisiones y acciones relacionadas con la sustentabilidad. El impacto es global y abarca a las generaciones presentes y futuras.</p>
        <hr class="border-t-2 border-gray-300 my-6 w-[90%] mx-auto" />
      </section>

      <WaveDivider
        color={["#c6d7cf", "#02523a"]}
        backgroundColor="white"
        rotate={true}
        svgPaths={[
          "M1440,128L1360,106.7C1280,85,1120,43,960,64C800,85,640,181,480,170.7C320,160,160,64,80,42.7L0,21L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z",
          "M0,160C80,120,160,80,240,64C320,48,400,64,480,96C560,128,640,176,720,192C800,208,880,176,960,160C1040,144,1120,128,1200,160C1280,192,1360,256,1440,320L1440,320L0,320Z",
        ]}
      />

      {/* cuando */}
      <section
        className="px-8 bg-white flex flex-col justify-center min-h-screen"
        id="cuando"
      >
        <div className="grid grid-cols-2">
          <div className="flex-1 flex items-center justify-center m-20">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-black mb-6">
                ¿Cuándo hay que ser sustentable?
              </h2>
              <p className="mb-8 text-black">
                Involucrarse en la sustentabilidad debe ser <span className="font-bold">una acción proactiva y oportuna</span>, no una reacción tardía. La clave está en actuar desde el primer indicio de un problema, participar en las decisiones ambientales y acompañar a quienes ya están comprometidos con el cuidado del planeta.
              </p>
              <p className="mb-8 text-black">
                Cuanto más temprano y constante sea el compromiso, mayores serán las posibilidades de <span className="font-bold">proteger el entorno y asegurar un futuro sostenible</span> para todos.
              </p>

            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-6 mr-9">
              <div className="bg-custom-green border-2 rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-slate-100">
                  Momento
                </h3>
                <p className="text-slate-100">
                  Es necesario actuar cuando se detecta un problema ambiental o cuando una decisión podría afectar al entorno. También es valioso involucrarse al aportar ideas, educación o acciones que fomenten el desarrollo sostenible, y al apoyar a quienes ya están tomando iniciativas.
                </p>
              </div>
              <div className="bg-custom-green border-2 rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-slate-100">
                  Tiempo
                </h3>
                <p className="text-slate-100">
                  El momento ideal para involucrarse es desde el principio: en la etapa de prevención o al inicio de un conflicto ambiental. Participar desde temprano permite influir en las decisiones y maximiza el impacto positivo, evitando consecuencias irreversibles.
                </p>

              </div>
              <div className="bg-custom-green border-2 rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-slate-100">
                  Ocasión
                </h3>
                <p className="text-slate-100">
                  Las mejores oportunidades para involucrarse surgen cuando aparecen señales tempranas de deterioro ambiental, durante procesos de planificación, o cuando la comunidad se moviliza para proteger su entorno. Cada instancia para prevenir daños es una ocasión valiosa para actuar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider
        color={["#397559", "#02523a"]}
        backgroundColor="white"
        rotate={false}
        svgPaths={[
          "M0,128L80,106.7C160,85,320,43,480,64C640,85,800,181,960,170.7C1120,160,1280,64,1360,42.7L1440,21L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
          "M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
        ]}
      />


      {/* donde */}
      <section
        className="px-8 bg-custom-green flex flex-col justify-center min-h-screen"
        id="donde"
      >
        <div className="grid grid-cols-2">
          {/* Lado izquierdo: título e introducción */}
          <div className="flex-1 flex items-center justify-center m-20">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-100 mb-6">
                ¿Dónde hay que ser sustentable?
              </h2>
              <p className="mb-8 text-slate-100">
                La sustentabilidad no tiene un único lugar: <span className="font-bold">debe practicarse en todos los espacios</span> de nuestra vida diaria. Desde el hogar hasta los entornos naturales, cada sitio ofrece oportunidades concretas para cuidar el ambiente y construir un futuro responsable.
              </p>
              <p className="mb-8 text-slate-100">
                Adaptar nuestras acciones a cada contexto y sumar esfuerzos individuales y colectivos <span className="font-bold">multiplica el impacto positivo</span> en el planeta.
              </p>
            </div>
          </div>

          {/* Lado derecho: tarjetas por lugar */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6 mr-9">
              {/* Hogar */}
              <div className="bg-white rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-row items-center justify-center gap-2 mb-3">
                  <FiHome size={32} className="text-scale-100" />
                  <h3 className="text-xl font-semibold text-black">
                    Hogar
                  </h3>
                </div>
                <p className="text-custom-gray">
                  El primer espacio para actuar. Separar residuos, ahorrar energía y agua, y elegir productos responsables son hábitos que inician el cambio desde casa.
                </p>
              </div>

              {/* Trabajo */}
              <div className="bg-white rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-row items-center justify-center gap-2 mb-3">
                  <MdWork size={32} className="text-scale-100" />
                  <h3 className="text-xl font-semibold text-black">
                    Trabajo
                  </h3>
                </div>
                <p className="text-custom-gray">
                  Un espacio clave para impulsar prácticas sustentables: optimizar procesos, reducir el consumo y promover una cultura ambiental desde lo profesional.
                </p>
              </div>

              {/* Comunidad */}
              <div className="bg-white rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-row items-center justify-center gap-2 mb-3">
                  <FaUsers size={32} className="text-scale-100" />
                  <h3 className="text-xl font-semibold text-black">
                    Comunidad
                  </h3>
                </div>
                <p className="text-custom-gray">
                  Participar en campañas barriales, talleres ambientales o redes locales fortalece el impacto colectivo y mejora la calidad de vida del entorno.
                </p>
              </div>

              {/* Naturaleza */}
              <div className="bg-white rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-row items-center justify-center gap-2 mb-3">
                  <MdForest size={32} className="text-scale-100" />
                  <h3 className="text-lg font-semibold text-black">
                    Entornos Naturales
                  </h3>
                </div>
                <p className="text-custom-gray">
                  Playas, parques y áreas protegidas necesitan cuidados especiales. Preservar la biodiversidad y apoyar economías locales responsables es esencial.
                </p>
              </div>

              {/* Ciudad */}
              <div className="bg-white rounded-lg shadow-xl p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex flex-row items-center justify-center gap-2 mb-3">
                  <MdLocationCity size={32} className="text-scale-100" />
                  <h3 className="text-xl font-semibold text-black">
                    Ciudad
                  </h3>
                </div>
                <p className="text-custom-gray">
                  La calle es un espacio cotidiano donde nuestras decisiones, como la movilidad o el consumo, generan impactos reales y duraderos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <WaveDivider
        color={["#c6d7cf", "#02523a"]}
        backgroundColor={"#f3f4f6"}
        rotate={true}
        svgPaths={[
          "M1440,128L1360,106.7C1280,85,1120,43,960,64C800,85,640,181,480,170.7C320,160,160,64,80,42.7L0,21L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z",
          "M0,160C80,120,160,80,240,64C320,48,400,64,480,96C560,128,640,176,720,192C800,208,880,176,960,160C1040,144,1120,128,1200,160C1280,192,1360,256,1440,320L1440,320L0,320Z",
        ]}
      />

      {/* como */}
      <section
        id="como"
        className="relative w-full min-h-screen flex justify-center items-center bg-gray-100 z-20"
        style={{
          backgroundImage: "url(/mundoSustentableGris.png)",
          backgroundSize: "87%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Título central */}
        <h2 className="absolute text-4xl font-bold text-black bg-white/80 rounded-xl p-3 shadow-xl text-center justify-center">
          ¿Cómo ser sustentable?
        </h2>

        {/* Contenedor circular */}
        <div className="relative w-96 h-96 rounded-full flex justify-center items-center">
          {/* Los 8 items, cada uno dentro de un div rotado */}
          {comoItems.map((item, i) => {
            const angleDeg = (360 / comoItems.length) * i;
            const angleRad = (angleDeg * Math.PI) / 180;

            // Coordenadas relativas al centro
            const x = 50 + Math.cos(angleRad) * (2800 / window.innerWidth * 100);
            const y = 50 + Math.sin(angleRad) * (800 / window.innerHeight * 100);

            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center absolute w-80 min-h-[34%] p-4 
                  bg-custom-green/90 text-slate-200 rounded-lg shadow-lg border-2 border-white
                  transition-all duration-100 ease-in-out hover:scale-110 hover:shadow-2xl -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                }}
              >
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-center">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>



      <WaveDivider color={["#f3f4f6"]} backgroundColor="white" rotate={true} />

      {/* con que */}
      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 text-center"
        id="con_que"
      >
        <h2 className="text-3xl font-semibold mb-6">¿Con qué recursos se logra?</h2>
        <br />
        <div className="grid grid-cols-3 gap-8 w-full max-w-[1200px]">
          {recursos.map((card) => (
            <div
              key={card.id}
              className="relative bg-gradient-to-t from-custom-green/90 to-custom-green/100 gradiant-white text-slate-200 rounded-lg shadow-xl p-6 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
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
        <div className="grid grid-cols-1 gap-8 w-full max-w-[380px] m-6">
          {recursos2.map((card) => (
            <div
              key={card.id}
              className="relative bg-gradient-to-t from-custom-green/90 to-custom-green/100 gradiant-white text-slate-200 rounded-lg shadow-xl p-6 transition-transform duration-300 transform hover:scale-105 cursor-pointer h-72"
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

      {/* cuanto */}
      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 px-8 bg-gray-100 text-center"
        id="cuanto"
      >
        <h2 className="text-3xl font-semibold mb-6">
          ¿Cuánto cuesta y se gana siendo sustentable?
        </h2>
        <br />
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10">
            {costosSustentabilidad.map((action) => (
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
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-10 m-6">
            {costosSustentabilidad2.map((action) => (
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
      </section>


      <WaveDivider
        color={["#f3f4f6"]}
        backgroundColor="white"
        rotate={true}
        svgPaths={[
          "M0,160C80,140,160,130,240,140C320,150,400,160,480,165C560,170,640,180,720,185C800,190,880,180,960,170C1040,160,1120,150,1200,160C1280,170,1360,190,1440,200L1440,320L0,320Z", ,
        ]}
      />

      {/* Boton de descarga */}
      <section
        className="min-h-[30%] py-16 px-8 bg-white text-center"
        id="contacto">
        <hr class="border-t-2 border-gray-300 mb-20 w-[90%] mx-auto" />

        <div className="items-center justify-center p-30">
          <p className="text-lg italic pb-5">¿Querés profundizar en alguna de estas preguntas? Te invitamos a explorar el siguiente informe sobre la sustentabilidad, donde desarrollamos cada tema con más detalle.</p>
          <button
            className="bg-custom-green p-7 m-2 text-white text-lg font-bold rounded-full shadow-2xl hover:scale-[1.2] transition transition-duration-200"
            onClick={handleDownload}>
            Descarga el informe completo</button>
        </div>

        <hr class="border-t-2 border-gray-300 mt-[5%] mx-auto w-[90%] " />
      </section>


      <section
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white text-center"
        id="contacto"
      >
        <div className="flex-1 flex justify-center mt-8">
          <div className="w-full max-w-[60%] h-auto bg-custom-green rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
            <img
              src="logoBlanco.png"
              alt="Logo"
              className="w-full max-w-[60%] h-auto mb-4 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => scrollToSection("top")}
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sustentabilidad.vida@gmail.com"
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sustentabilidad.vida@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-custom-green font-bold"
          >
            sustentabilidad.vida@gmail.com
          </a>
        </div>
      </section>

      <MountainDivider color={["#c6d7cf", "#397559", "#02523a"]} />
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
  color = ["#c6d7cf", "#397559", "#02523a"],
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
