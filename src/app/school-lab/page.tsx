'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

export default function SchoolLabPage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5] selection:bg-[#00FF41] selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

                {/* Green glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF41]/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 text-[#059669]">SCHOOL LAB</span>
                    <h1 className="v5-h1 mb-6 max-w-4xl mx-auto leading-[0.95] tracking-tight text-white" style={{ fontWeight: 400 }}>
                        Aprende a usar la IA<br />
                        <span className="text-white/40 italic">antes de que sea tarde.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 text-white/60">
                        El 39% de las habilidades laborales actuales serán obsoletas antes de 2030. La IA no va a esperar. Nosotros tampoco.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#programas" className="v5-btn-primary !bg-[#00FF41] !text-black hover:!bg-[#00D436] font-bold">
                            Ver Programas
                        </Link>
                        <Link href="#b2b" className="v5-btn-ghost">
                            Soy empresa o institución
                        </Link>
                    </div>
                </div>
            </section>

            {/* Para Quién Es (Split Section) */}
            <section className="v5-section bg-black border-t border-white/5 py-24">
                <div className="v5-container">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
                        {/* B2C Half */}
                        <div className="p-12 lg:pr-16 lg:border-r border-white/10 flex flex-col h-full bg-white/[0.02] lg:bg-transparent rounded-3xl lg:rounded-none">
                            <span className="text-[#059669] text-sm font-mono tracking-widest mb-6">B2C • INDIVIDUOS</span>
                            <h2 className="font-display text-4xl font-bold mb-6 text-white">Para ti, si quieres aprender</h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                                9 programas, cada uno diseñado para un perfil concreto. Desde mujeres de 40 a 60 años hasta médicos u hosteleros. Explicado sin tecnicismos, orientado a resolver tus problemas reales desde el día 1.
                            </p>
                            <div className="mt-auto">
                                <Link href="#programas" className="inline-flex items-center gap-2 text-[#00FF41] font-bold hover:underline">
                                    Ver todos los programas →
                                </Link>
                            </div>
                        </div>

                        {/* B2B Half */}
                        <div id="b2b" className="p-12 lg:pl-16 flex flex-col h-full bg-white/[0.02] lg:bg-transparent rounded-3xl lg:rounded-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
                            <div className="relative z-10">
                                <span className="text-white/40 text-sm font-mono tracking-widest mb-6 block">B2B • CORPORATIVO</span>
                                <h2 className="font-display text-4xl font-bold mb-6 text-white">Para tu empresa o institución</h2>
                                <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                                    Formamos equipos en inteligencia artificial aplicada directamente a los flujos de su trabajo real. También colaboramos con fundaciones, colegios y ayuntamientos para llevar la IA a sus colectivos.
                                </p>
                                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                    <Link href="/school-lab/prepara-tu-equipo" className="v5-btn-primary !bg-white !text-black">
                                        Formar a mi equipo
                                    </Link>
                                    <Link href="/school-lab/instituciones" className="v5-btn-ghost">
                                        Área Instituciones
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Grid */}
            <section id="programas" className="v5-section bg-white text-black py-24 rounded-t-[3rem]">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2 mb-4">9 Programas Especializados</h2>
                        <p className="text-black/60 max-w-2xl mx-auto">No creemos en los cursos genéricos. Ofrecemos formación hiper-específica para los problemas reales de tu día a día.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Empresas (Featured) */}
                        <Link href="/school-lab/prepara-tu-equipo" className="md:col-span-2 lg:col-span-3 p-8 border-2 border-green-600 bg-green-50 rounded-3xl hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <span className="inline-block bg-green-600 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4 rounded-full">B2B • Empresas y PyMEs</span>
                                    <h3 className="font-display text-3xl font-bold mb-3 text-green-900 group-hover:text-green-700 transition-colors">Prepara tu equipo</h3>
                                    <p className="text-green-800/70 mb-6 font-medium">Tu equipo puede trabajar más rápido y cometer menos errores si sabe cómo usar la IA corporativa. Casos de uso 100% reales.</p>
                                    <span className="font-bold text-green-700 underline decoration-2 underline-offset-4">Ver programa corporativo →</span>
                                </div>
                                <div className="hidden lg:block relative h-full min-h-[160px]">
                                    <div className="absolute inset-0 bg-white/60 rounded-2xl border border-green-200 shadow-sm flex items-center justify-center overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="Equipo trabajando" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* B2C Programs */}
                        <Link href="/school-lab/empoderate-con-ia" className="p-8 border border-black/10 rounded-3xl hover:border-emerald-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-emerald-600 text-[10px] font-bold tracking-widest uppercase mb-3 block">Mujeres 40-60</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">Empodérate con IA</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Usa la IA para salud, creatividad y comunicación sin necesitar saber de tecnología.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-emerald-600">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/conectate-con-el-mundo" className="p-8 border border-black/10 rounded-3xl hover:border-blue-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-3 block">Personas mayores 65+</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Conéctate con el mundo</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">La IA como asistente diario para recordar, contactar familiares y estar activo.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-blue-600">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/aprende-a-crear" className="p-8 border border-black/10 rounded-3xl hover:border-orange-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-3 block">Niños 6-12</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">Aprende a crear</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Cuentos, mundos e historias potenciando la imaginación infantil con IA segura.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-orange-500">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/descubre-tu-futuro" className="p-8 border border-black/10 rounded-3xl hover:border-purple-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-purple-600 text-[10px] font-bold tracking-widest uppercase mb-3 block">Jóvenes 13-18</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Descubre tu futuro</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Descubre las profesiones del futuro y crea proyectos propios desde cero.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-purple-600">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/monta-tu-negocio" className="p-8 border border-black/10 rounded-3xl hover:border-amber-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-3 block">Emprendedores</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors">Monta tu negocio</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Web, logo, copies y ventas sin contratar a nadie ni saber programar.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-amber-500">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/mejora-tu-material" className="p-8 border border-black/10 rounded-3xl hover:border-cyan-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-cyan-600 text-[10px] font-bold tracking-widest uppercase mb-3 block">Profesores</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-cyan-600 transition-colors">Mejora tu material</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Menos tiempo corrigiendo, rúbricas automáticas y materiales hiper-personalizados.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-cyan-600">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/mas-tiempo-para-cocina" className="p-8 border border-black/10 rounded-3xl hover:border-red-500 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase mb-3 block">Hostelería</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">Más tiempo para tu cocina</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Responde reseñas, crea contenido para redes y atrae clientes automáticamente.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-red-500">Ver programa →</span>
                        </Link>

                        <Link href="/school-lab/dedicate-a-la-medicina" className="p-8 border border-black/10 rounded-3xl hover:border-blue-700 hover:shadow-lg transition-all group bg-white relative overflow-hidden flex flex-col">
                            <span className="text-blue-700 text-[10px] font-bold tracking-widest uppercase mb-3 block">Médicos / Sanidad</span>
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-blue-700 transition-colors">Dedícate a la medicina</h3>
                            <p className="text-sm text-black/60 mb-8 flex-grow">Delega la burocracia: transcripciones, informes y resúmenes de historiales al instante.</p>
                            <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-blue-700">Ver programa →</span>
                        </Link>

                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="v5-section bg-black text-white border-t border-white/5 py-24">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <span className="text-[#059669] text-sm font-mono tracking-widest mb-4 block">NUESTRA METODOLOGÍA</span>
                        <h2 className="v5-h2 max-w-2xl mx-auto">Basada en evidencia, <br />diseñada para humanos</h2>
                        <p className="text-white/50 mt-4 max-w-lg mx-auto">Aprobada en base al meta-análisis SAGA 2025 y orientada 90% a la práctica empírica para vencer la curva del olvido.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0">🪞</div>
                            <h3 className="font-display text-xl font-bold mb-3">01. Descúbrete</h3>
                            <p className="text-white/60 text-sm leading-relaxed">La tecnología no tiene sentido si no sabes qué quieres amplificar. Empezamos por romper el muro del "yo no puedo".</p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-[#00FF41]/10 border border-[#00FF41]/20 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0">🛠</div>
                            <h3 className="font-display text-xl font-bold mb-3">02. Aprende lo que importa</h3>
                            <p className="text-white/60 text-sm leading-relaxed">No teoría de libro. Habilidades reales de vida. Aprenderás resolviendo tus propios problemas, no ejercicios inventados.</p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0">🚀</div>
                            <h3 className="font-display text-xl font-bold mb-3">03. Expándete con tecnología</h3>
                            <p className="text-white/60 text-sm leading-relaxed">La IA no te reemplaza. Multiplica lo que ya eres. Aquí aprendes a usarla como un superpoder, no como una muleta.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Los 3 Formatos */}
            <section className="v5-section bg-zinc-900 border-t border-white/5 py-24">
                <div className="v5-container">

                    <div className="text-center mb-16">
                        <h2 className="v5-h2">Tres formatos, el mismo ADN</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-white/5 bg-black rounded-3xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-2">Taller de Descubrimiento</h3>
                                <p className="text-[#00FF41] font-mono text-sm mb-6">90 min • Gratuito o Simbólico</p>
                                <p className="text-white/60 text-sm mb-6">El primer paso seguro. Sales habiendo creado algo con IA directamente desde tu móvil o portátil. Sin agobios.</p>
                            </div>
                            <Link href="#contact" className="text-sm font-bold text-white hover:text-[#00FF41] transition-colors border-t border-white/10 pt-4 block text-center">Ver fechas →</Link>
                        </div>

                        <div className="p-8 border border-[#059669]/30 bg-black/50 backdrop-blur-sm rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(5,150,105,0.1)]">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-[#059669] text-white text-[10px] font-bold tracking-widest uppercase rounded-bl-xl">MÁS POPULAR</div>
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-2">Programa Intensivo</h3>
                                <p className="text-[#00FF41] font-mono text-sm mb-6">1 semana (10h) • Desde 60€</p>
                                <p className="text-white/60 text-sm mb-6">5 sesiones de 2h donde vas en serio. Desarrollas un proyecto real terminado al final de la semana, guiado paso a paso.</p>
                            </div>
                            <Link href="#contact" className="text-sm font-bold text-white bg-white/10 hover:bg-white/20 transition-colors py-3 px-4 rounded-xl text-center">Matricularme</Link>
                        </div>

                        <div className="p-8 border border-white/5 bg-black rounded-3xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-2">Comunidad Aether</h3>
                                <p className="text-[#00FF41] font-mono text-sm mb-6">Mensual • Precio Reducido</p>
                                <p className="text-white/60 text-sm mb-6">Para alumni del Intensivo. Novedades, soporte continuo, herramientas probadas y una red de personas aprendiendo igual que tú.</p>
                            </div>
                            <Link href="#contact" className="text-sm font-bold text-white/50 hover:text-white transition-colors border-t border-white/10 pt-4 block text-center">Acceso Alumni →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust */}
            <section className="v5-section bg-black border-t border-white/5 py-16">
                <div className="v5-container flex flex-col items-center">
                    <span className="text-white/30 text-xs font-mono tracking-widest uppercase mb-8">Ya confían en Aether School</span>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
                        <span className="font-display font-bold text-xl">UAB</span>
                        <span className="font-display font-bold text-xl">Colegio Virolai</span>
                        <span className="font-display font-bold text-xl">Fundació Pere Tarrés</span>
                        <span className="font-display font-bold text-xl">Ajuntament de Badalona</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
