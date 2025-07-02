import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaLeaf,
    FaBalanceScale,
    FaRegSmile,
    FaFileAlt,
    FaArrowRight,
    FaSearch,
    FaLightbulb,
    FaHandshake,
    FaTwitter,
    FaLinkedin,
    FaEnvelope,
    FaChartLine,
    FaIndustry,
} from "react-icons/fa";



const LandingGreenOps = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    const handleDownloadReport = () => {
        window.open("/Entendamos-Sustentabilidad-GreenOpsConsulting.pdf", "_blank");
    };

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="bg-custom-blue text-white" data-aos="fade-up">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-end justify-between gap-10 lg:min-h-[70vh]">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Transformá tu empresa hacia un futuro más sustentable
                        </h1>
                        <p className="text-lg mb-8">
                            En <span className="font-semibold">Green.Ops Consulting</span> te ayudamos a adoptar prácticas sostenibles que reducen tu impacto ambiental y mejoran tu rentabilidad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-custom-blue font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
                                Solicitar asesoría
                            </button>
                            <button
                                onClick={handleDownloadReport}
                                className="flex items-center gap-2 bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-teal-500 transition"
                            >
                                <FaFileAlt className="text-xl" />
                                Ver informe sobre sustentabilidad
                                <FaArrowRight className="ml-1" />
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2" data-aos="zoom-in">
                        <img
                            src="hero-sustentabilidad.jpg"
                            alt="Consultoría en sustentabilidad"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Introducción a la sustentabilidad */}
            <section className="bg-gray-100 py-20 px-6" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-custom-blue mb-4">
                        ¿Por qué integrar la sustentabilidad en tu negocio?
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        La sustentabilidad ya no es una opción, sino un necesidad estratégica. Responde a desafíos urgentes (como el cambio climático, la pérdida de recursos y las desigualdades sociales) y abre el camino hacia una gestión más eficiente, responsable y resiliente.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                        <div className="flex items-start gap-4">
                            <FaChartLine className="text-blue-500 text-3xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-custom-blue mb-1">Un nuevo modelo de valor</h4>
                                <p className="text-sm">
                                    Incorporar prácticas sostenibles te permite transformar la eficiencia en rentabilidad, reducir desperdicios y anticiparte a regulaciones futuras.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaBalanceScale className="text-yellow-500 text-3xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-custom-blue mb-1">Gestión de riesgos inteligentes</h4>
                                <p className="text-sm">
                                    Al adoptar criterios sustentables, tu empresa se prepara para enfrentar crisis ambientales, sociales y económicas con mayor solidez.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaRegSmile className="text-green-500 text-3xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-custom-blue mb-1">Una misión que inspira</h4>
                                <p className="text-sm">
                                    Las empresas con propósito atraen y retienen talento, fortalecen su reputación y generan vínculos más sólidos con sus comunidades.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-md mt-10 max-w-3xl mx-auto">
                        Integrar la sustentabilidad es integrar el futuro. Es avanzar hacia una cultura organizacional que equilibra el impacto económico, social y ambiental para lograr un desarrollo duradero y consciente.
                    </p>
                </div>
            </section>

            {/* Beneficios */}
            <section className="bg-white py-20 px-6" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-custom-blue mb-4">
                        Lo que tu empresa gana al trabajar con Green.Ops
                    </h2>
                    <p className="text-gray-500 mb-12">
                        Ayudamos a transformar tu compromiso ambiental en resultados concretos.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        {[
                            {
                                icon: <FaLeaf className="text-green-500 text-4xl mb-4" />,
                                title: "Reducí costos operativos",
                                desc: "Optimizamos el uso de recursos y energía, generando ahorros sostenibles.",
                            },
                            {
                                icon: <FaBalanceScale className="text-blue-400 text-4xl mb-4" />,
                                title: "Evitá sanciones",
                                desc: "Te alineamos con normativas locales e internacionales en tiempo y forma.",
                            },
                            {
                                icon: <FaRegSmile className="text-yellow-400 text-4xl mb-4" />,
                                title: "Aumentá tu reputación",
                                desc: "Una empresa comprometida con el ambiente atrae clientes e inversores.",
                            },
                        ].map((b, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
                                data-aos="zoom-in"
                                data-aos-delay={i * 150}
                            >
                                {b.icon}
                                <h3 className="text-xl font-semibold mb-3 text-custom-blue">{b.title}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metodología */}
            <section className="bg-gray-100 py-20 px-6" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-custom-blue mb-4">Cómo logramos resultados reales</h2>
                    <p className="text-gray-500 mb-12">
                        Nuestro enfoque paso a paso garantiza acciones sostenibles, medibles y efectivas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        {[
                            {
                                icon: <FaSearch className="text-4xl text-custom-blue mb-4" />,
                                title: "Analizamos",
                                desc: "Evaluamos tus procesos y detectamos oportunidades de mejora ambiental y de eficiencia.",
                            },
                            {
                                icon: <FaLightbulb className="text-4xl text-yellow-400 mb-4" />,
                                title: "Diseñamos",
                                desc: "Proponemos estrategias a medida según tus necesidades, recursos y objetivos.",
                            },
                            {
                                icon: <FaHandshake className="text-4xl text-green-500 mb-4" />,
                                title: "Implementamos",
                                desc: "Acompañamos la puesta en marcha, medimos resultados y ajustamos para lograr impacto real.",
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                {step.icon}
                                <h3 className="text-xl font-semibold mb-3 text-custom-blue">{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Impact */}
            <section className="bg-white py-20" data-aos="fade-right">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                    <div className="md:w-1/2">
                        <img
                            src="impacto-visual.jpg"
                            alt="Impacto positivo ambiental"
                            className="rounded-xl shadow w-full object-cover"
                        />
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left">
                        <h2 className="text-3xl font-bold text-custom-blue mb-4">Tu impacto importa</h2>
                        <p className="mb-6 text-lg">
                            Al implementar estrategias sostenibles, no solo contribuís al planeta, también generás valor económico a largo plazo.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Reducción de costos operativos</li>
                            <li>Acceso a nuevos mercados sostenibles</li>
                            <li>Mejor clima organizacional</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="bg-gray-100 py-20 px-6" data-aos="fade-up">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-custom-blue mb-12">Testimonios de empresas</h2>
                    <div className="space-y-10">
                        {[
                            {
                                quote:
                                    "Gracias a Green.Ops logramos reducir un 30% nuestro consumo energético y mejorar nuestra imagen ante clientes internacionales.",
                                client: "Carlos Méndez - CEO de AgroTech",
                                img: "https://randomuser.me/api/portraits/men/32.jpg",
                            },
                            {
                                quote:
                                    "La asesoría fue clara, profesional y aplicable. Nos ayudaron a cumplir con nuevas normativas y evitamos sanciones.",
                                client: "Mariana López - Gerente de Operaciones, Industricorp",
                                img: "https://randomuser.me/api/portraits/women/44.jpg",
                            },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center"
                                data-aos="zoom-in"
                                data-aos-delay={i * 200}
                            >
                                <img
                                    src={t.img}
                                    alt={t.client}
                                    className="w-16 h-16 rounded-full object-cover mb-4"
                                />
                                <p className="text-lg italic mb-4">“{t.quote}”</p>
                                <p className="font-semibold text-custom-blue">{t.client}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-custom-blue text-white py-20 text-center px-6" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-6">
                    ¿Listo para convertir tu impacto en oportunidad?
                </h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto">
                    Da el primer paso hacia un modelo de negocio más responsable y rentable. Te ayudamos a transformar tu gestión ambiental en valor real.
                </p>
                <button className="bg-white text-custom-blue font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                    Agendá una consulta gratuita
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-200 py-14 px-6" data-aos="fade-up">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Green.Ops Consulting</h3>
                        <p>
                            Impulsamos a las empresas a liderar la transformación hacia una economía más sustentable y consciente.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-white">Contacto</h4>
                        <p>Email: asesoria@greenops.com</p>
                        <p>Teléfono: +54 351 000 0000</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-white">Últimos artículos</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <FaLeaf className="text-green-400" />
                                ¿Qué es una estrategia de sustentabilidad?
                            </li>
                            <li className="flex items-center gap-2">
                                <FaChartLine className="text-blue-400" />
                                Tendencias ESG 2025
                            </li>
                            <li className="flex items-center gap-2">
                                <FaIndustry className="text-yellow-400" />
                                Casos de éxito: industria y medioambiente
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-white">Seguinos</h4>
                        <div className="flex justify-center md:justify-start gap-4 mt-2">
                            <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
                            <FaLinkedin className="text-xl hover:text-blue-300 cursor-pointer" />
                            <FaEnvelope className="text-xl hover:text-red-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm mt-10 text-gray-500">
                    © {new Date().getFullYear()} Green.Ops Consulting. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default LandingGreenOps;
