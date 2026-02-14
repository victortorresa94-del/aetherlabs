import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import {
    ArrowDown,
    Stethoscope,
    Building2,
    GraduationCap,
    Wrench,
    CheckCircle,
    ArrowRight,
    Gauge,
    ShieldCheck,
    Workflow
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aether Labs: SALVIA Industry Matrix",
};

export default function IndustriesPage() {
    return (
        <main className="bg-[#f7f8f5] dark:bg-[#19230f] font-sans text-gray-900 antialiased selection:bg-[#80ff00] selection:text-black min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                .dot-matrix {
                    background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                .dark .dot-matrix {
                    background-image: radial-gradient(circle, #262626 1px, transparent 1px);
                }
                @keyframes pulse-dot {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.15); opacity: 0.8; }
                }
                .animate-dot {
                    animation: pulse-dot 3s ease-in-out infinite;
                }
            `}} />
            <HeaderNavigation />

            {/* Section 1: Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#19230f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80ff00]/10 border border-[#80ff00]/20 text-xs font-semibold uppercase tracking-wider text-green-800 dark:text-[#80ff00]">
                                <span className="w-2 h-2 rounded-full bg-[#80ff00] animate-pulse"></span>
                                Soluciones Verticales
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance dark:text-white">
                                SALVIA adaptado <br />
                                <span className="text-gray-400 font-light">a tu industria</span>
                            </h1>
                            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                                Cada sector vende diferente. Hemos entrenado a SALVIA para entender los matices de tu mercado, desde la captación hasta el cierre.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="#matrix"
                                    className="inline-flex items-center text-sm font-semibold border-b-2 border-black dark:border-white pb-1 hover:text-[#80ff00] hover:border-[#80ff00] transition-all dark:text-white"
                                >
                                    Explorar sectores <ArrowDown className="ml-1 w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Hero Illustration */}
                        <div className="relative h-[500px] w-full flex items-center justify-center">
                            <div className="absolute inset-0 dot-matrix opacity-40"></div>
                            <div className="relative w-full h-full max-w-md">
                                <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 400 500">
                                    <g className="dark:stroke-gray-800" fill="none" stroke="#e2e8f0" strokeWidth="0.5">
                                        <path d="M200 450 L200 100"></path>
                                        <path d="M200 380 L140 340"></path>
                                        <path d="M200 380 L260 340"></path>
                                        <path d="M200 300 L120 250"></path>
                                        <path d="M200 300 L280 250"></path>
                                        <path d="M200 220 L150 160"></path>
                                        <path d="M200 220 L250 160"></path>
                                    </g>
                                    <g className="dots">
                                        <circle className="animate-dot" cx="200" cy="450" fill="#7CFF00" r="4"></circle>
                                        <circle className="dark:fill-gray-700" cx="200" cy="420" fill="#cbd5e1" r="3"></circle>
                                        <circle className="animate-dot" cx="200" cy="380" fill="#7CFF00" r="3"></circle>
                                        <circle className="dark:fill-gray-700" cx="200" cy="300" fill="#cbd5e1" r="3"></circle>
                                        <circle className="dark:fill-gray-700" cx="200" cy="220" fill="#cbd5e1" r="3"></circle>
                                        <circle className="animate-dot" cx="200" cy="150" fill="#7CFF00" r="3"></circle>
                                        <circle className="animate-dot" cx="200" cy="100" fill="#7CFF00" r="5"></circle>
                                        <circle cx="140" cy="340" fill="#7CFF00" r="3"></circle>
                                        <circle cx="120" cy="350" fill="#cbd5e1" r="2"></circle>
                                        <circle cx="130" cy="320" fill="#cbd5e1" r="2"></circle>
                                        <circle cx="260" cy="340" fill="#cbd5e1" r="3"></circle>
                                        <circle cx="280" cy="350" fill="#cbd5e1" r="2"></circle>
                                        <circle cx="270" cy="320" fill="#7CFF00" r="2"></circle>
                                        <circle className="animate-dot" cx="120" cy="250" fill="#7CFF00" r="4"></circle>
                                        <circle cx="100" cy="260" fill="#cbd5e1" r="2.5"></circle>
                                        <circle cx="90" cy="240" fill="#cbd5e1" r="2.5"></circle>
                                        <circle cx="110" cy="220" fill="#cbd5e1" r="2.5"></circle>
                                        <circle cx="280" cy="250" fill="#cbd5e1" r="4"></circle>
                                        <circle cx="300" cy="260" fill="#7CFF00" r="2.5"></circle>
                                        <circle cx="310" cy="240" fill="#cbd5e1" r="2.5"></circle>
                                        <circle cx="290" cy="220" fill="#cbd5e1" r="2.5"></circle>
                                        <circle cx="150" cy="160" fill="#7CFF00" r="3"></circle>
                                        <circle cx="250" cy="160" fill="#7CFF00" r="3"></circle>
                                    </g>
                                    <g className="dark:fill-gray-500" fill="#94a3b8" fontFamily="Manrope" fontSize="10" fontWeight="700">
                                        <text textAnchor="end" x="70" y="245">CLINICS</text>
                                        <text textAnchor="start" x="330" y="245">REAL ESTATE</text>
                                        <text textAnchor="end" x="90" y="345">EDUCATION</text>
                                        <text textAnchor="start" x="310" y="345">SERVICES</text>
                                    </g>
                                </svg>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-2xl rounded-full z-20">
                                    <span className="text-xs font-bold tracking-widest dark:text-white">SALVIA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Context */}
            <section className="py-24 px-6 bg-[#f7f8f5] dark:bg-[#19230f]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-black rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 max-w-3xl">
                                No todas las industrias pierden ventas por el mismo motivo.
                            </h2>
                            <div className="grid md:grid-cols-3 gap-12">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-full border border-[#80ff00]/40 flex items-center justify-center mb-6">
                                        <Gauge className="text-[#80ff00] w-6 h-6" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold">Fricción de Tiempo</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">En Home Services, el retraso de 5 minutos en responder reduce la conversión un 80%.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-full border border-[#80ff00]/40 flex items-center justify-center mb-6">
                                        <ShieldCheck className="text-[#80ff00] w-6 h-6" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold">Falta de Confianza</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">En Clinics, la ausencia de validación médica instantánea detiene el proceso de agendamiento.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-full border border-[#80ff00]/40 flex items-center justify-center mb-6">
                                        <Workflow className="text-[#80ff00] w-6 h-6" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold">Complejidad Técnica</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">En Real Estate, la incapacidad de filtrar por variables financieras complejas satura a los agentes.</p>
                                </div>
                            </div>
                        </div>
                        {/* Abstract detail */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#80ff00]/10 blur-[100px]"></div>
                    </div>
                </div>
            </section>

            {/* Section 3: Main Grid */}
            <section className="pt-48 pb-32 bg-white dark:bg-[#19230f]" id="matrix">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            IA en todo el ciclo de ventas, adaptado a tu industria.
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                            Creamos packs de agentes, acciones y soluciones que mejor funcionan en cada campo. No necesita lo mismo una academia que una clínica.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: Clinics */}
                        <div className="group bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] flex flex-col border border-slate-100 dark:border-slate-800 hover:border-[#80ff00]/30 transition-all duration-500">
                            <div className="h-48 lg:h-56 overflow-hidden relative">
                                <img
                                    alt="Minimalist boutique clinic interior"
                                    className="w-full h-full object-cover grayscale contrast-[1.1] transition-[filter] duration-500 group-hover:filter-none"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqNTO6BiD-CJLHSjrv6KPxO9tn125e0BzeZpIHOHzxOMELWWylS7C1_9xPW11GCAs2RnaxwGu-gf4CT40NMfDhgOQUs8NpW0mWq2dTTb26h8TicLfeSb6kPSyQHf6BqaC2LTyK_tB91x6wdgTRZZPkxtzPVFsrNRUBR-xKnpaxkNzVapP2aYLKQzJctL-C4w5TODx-dPriVLiPUyG02Plm8_nE6wfY9BZ0zMA9oe-1Wovbx7Lxm8de0bFaz37sI_Fc210btnaVZubP"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-slate-900/40 to-transparent"></div>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                <span className="text-[#80ff00] font-bold text-xs tracking-widest uppercase mb-4">Sector Médico</span>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-3 dark:text-white">SALVIA Clinics</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                    Sistema de captación, agenda y seguimiento automatizado para clínicas y centros de salud.
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {["Confirmación automática de citas por WhatsApp", "Filtro inicial según motivo de consulta", "Reagendamiento automático de huecos cancelados", "Recordatorios previos y seguimiento post-consulta", "Registro automático en CRM"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-[#80ff00] text-xl mt-0.5" />
                                            <span className="text-sm lg:text-base text-slate-600 dark:text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/salvia-clinics" className="inline-flex items-center text-sm font-bold group/link hover:text-[#80ff00] transition-colors mt-auto dark:text-white">
                                    Ver sistema para clínicas
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Real Estate */}
                        <div className="group bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] flex flex-col border border-slate-100 dark:border-slate-800 hover:border-[#80ff00]/30 transition-all duration-500">
                            <div className="h-48 lg:h-56 overflow-hidden relative">
                                <img
                                    alt="Contemporary living room design"
                                    className="w-full h-full object-cover grayscale contrast-[1.1] transition-[filter] duration-500 group-hover:filter-none"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD7Cel7vVULO_E60ehDviJFSLfjOTXfVi8QPbK8yAc5j-E5dk-dVssWLW3j7r1FXycJwgj6DQsHw7zh4NGHMmgYjxAutvjm2EFsE68Sp34lzkg6-F4Rc0gZ1Zn-1UT24Z-TFb2GICYN673Qxq1sxHsqZZpjGedMKxqjsRii-HeBUKsexQeeyEKS5Flq3syeNnvXutmXLaBcYXYLEMzKfqN3VQEZMlRdOc30SIzifaMWA4d4kpwS8r1YuctiQHCX8AWtl3qyswHSH00"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-slate-900/40 to-transparent"></div>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                <span className="text-[#80ff00] font-bold text-xs tracking-widest uppercase mb-4">Real Estate</span>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-3 dark:text-white">SALVIA Real Estate</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                    Captación y cualificación automatizada de compradores y propietarios.
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {["Filtrado automático por presupuesto e intención", "Clasificación de leads por nivel de interés", "Seguimiento inteligente en el tiempo", "Coordinación automática de visitas", "Registro completo en CRM"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-[#80ff00] text-xl mt-0.5" />
                                            <span className="text-sm lg:text-base text-slate-600 dark:text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/salvia-estates" className="inline-flex items-center text-sm font-bold group/link hover:text-[#80ff00] transition-colors mt-auto dark:text-white">
                                    Ver sistema inmobiliario
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Education */}
                        <div className="group bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] flex flex-col border border-slate-100 dark:border-slate-800 hover:border-[#80ff00]/30 transition-all duration-500">
                            <div className="h-48 lg:h-56 overflow-hidden relative">
                                <img
                                    alt="Modern technological study space"
                                    className="w-full h-full object-cover grayscale contrast-[1.1] transition-[filter] duration-500 group-hover:filter-none"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDziKhI50m2C9aMTRCFO_69n2bjOJrqJI3BblE_eHaBN8O_uni4_eaKCd-3D2LWdlFhqmSdxq-S5WI9QiIkUz4F7uy7NgzY8_M6QuS0d6KCgPnKo57x2UA11jlaFG6jGsjOOdQACvc51on0-UDXFIlKLUJqN2hPj8DcBlNyIDdw1I7UzNc93wnDkpymNTtqx5kb7VyM0FKkpzFffA-Pdlrgt9kkKKjO2z0V2uJ7J3bqetMVagFySY-u7v-r6gummzI2hWBh1YKWcsiY"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-slate-900/40 to-transparent"></div>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                <span className="text-[#80ff00] font-bold text-xs tracking-widest uppercase mb-4">Educación</span>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-3 dark:text-white">SALVIA Education</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                    Sistema de admisiones, seguimiento y reactivación automatizada.
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {["Respuesta inmediata a solicitudes de información", "Gestión automatizada de documentación", "Recordatorios de fechas clave", "Seguimiento estructurado hasta matrícula", "Reactivación de interesados inactivos"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-[#80ff00] text-xl mt-0.5" />
                                            <span className="text-sm lg:text-base text-slate-600 dark:text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="#" className="inline-flex items-center text-sm font-bold group/link hover:text-[#80ff00] transition-colors mt-auto dark:text-white">
                                    Ver sistema educativo
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 4: Home Services */}
                        <div className="group bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] flex flex-col border border-slate-100 dark:border-slate-800 hover:border-[#80ff00]/30 transition-all duration-500">
                            <div className="h-48 lg:h-56 overflow-hidden relative">
                                <img
                                    alt="Professional technical detail"
                                    className="w-full h-full object-cover grayscale contrast-[1.1] transition-[filter] duration-500 group-hover:filter-none"
                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-slate-900/40 to-transparent"></div>
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                <span className="text-[#80ff00] font-bold text-xs tracking-widest uppercase mb-4">Servicios</span>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-3 dark:text-white">SALVIA Technical Services</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                    Captación y gestión automatizada para servicios técnicos y operativos.
                                </p>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {["Respuesta inmediata a solicitudes", "Filtro según urgencia", "Solicitud automática de información técnica", "Generación de presupuesto base", "Asignación y coordinación de técnicos"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-[#80ff00] text-xl mt-0.5" />
                                            <span className="text-sm lg:text-base text-slate-600 dark:text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="#" className="inline-flex items-center text-sm font-bold group/link hover:text-[#80ff00] transition-colors mt-auto dark:text-white">
                                    Ver sistema para servicios técnicos
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Comparison Matrix */}
            <section className="bg-[#0a0a0a] py-32 border-y border-white/5 font-mono">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <span className="text-[#80ff00] text-xs tracking-widest uppercase mb-4 block underline">Matriz de Integración</span>
                        <h2 className="text-white font-sans font-extrabold text-5xl md:text-6xl tracking-tighter">Qué cambia en <span className="italic text-[#80ff00]">cada sector</span></h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-6 px-4 text-white/40 uppercase text-xs tracking-wider font-medium">Industria</th>
                                    <th className="py-6 px-4 text-white/40 uppercase text-xs tracking-wider font-medium">Canal Principal</th>
                                    <th className="py-6 px-4 text-[#80ff00] uppercase text-xs tracking-wider font-medium italic">Tipo de Decisión</th>
                                    <th className="py-6 px-4 text-white/40 uppercase text-xs tracking-wider font-medium">Rol del Agente AI</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-8 px-4 text-white font-bold">Clínicas & Salud</td>
                                    <td className="py-8 px-4 text-white/60">WhatsApp / Teléfono</td>
                                    <td className="py-8 px-4 text-[#80ff00] font-bold">Urgente / Emocional</td>
                                    <td className="py-8 px-4 text-[#80ff00]">Coordinador Empático</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-8 px-4 text-white font-bold">Real Estate</td>
                                    <td className="py-8 px-4 text-white/60">Email / WhatsApp</td>
                                    <td className="py-8 px-4 text-[#80ff00] font-bold">Largo Plazo / Racional</td>
                                    <td className="py-8 px-4 text-[#80ff00]">Consultor Financiero</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-8 px-4 text-white font-bold">Educación</td>
                                    <td className="py-8 px-4 text-white/60">Redes Sociales / Form</td>
                                    <td className="py-8 px-4 text-[#80ff00] font-bold">Estacional / Familiar</td>
                                    <td className="py-8 px-4 text-[#80ff00]">Consejero Académico</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-8 px-4 text-white font-bold">Home Services</td>
                                    <td className="py-8 px-4 text-white/60">Google Ads / Llamada</td>
                                    <td className="py-8 px-4 text-[#80ff00] font-bold">Inmediata / Necesidad</td>
                                    <td className="py-8 px-4 text-[#80ff00]">Despachador Rápido</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                        <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                            <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">[ Protocolo 01 ]</p>
                            <p className="text-white font-sans italic">"La infraestructura de Aether no reemplaza, amplifica lo existente mediante capas de abstracción neuronal."</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                            <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">[ Protocolo 02 ]</p>
                            <p className="text-white font-sans italic">"Despliegue garantizado en menos de 14 días mediante contenedores atómicos SALVIA."</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                            <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">[ Protocolo 03 ]</p>
                            <p className="text-white font-sans italic">"Cifrado cuántico end-to-end en todas las transacciones de datos industriales."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Final CTA */}
            <section className="py-32 bg-white dark:bg-[#19230f]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 dark:text-white">
                        Descubre cómo se vería <br /> <span className="text-[#80ff00]">SALVIA</span> en tu negocio
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        No usamos plantillas genéricas. Construimos el cerebro de ventas que tu industria exige.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#80ff00] text-black font-bold rounded-lg hover:bg-[#66cc00] transition-colors shadow-lg shadow-[#80ff00]/20">
                            Agendar Demo Personalizada
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 transition-colors">
                            Ver Casos de Éxito
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
