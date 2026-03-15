'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

export default function SchoolLabPage() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <ScrollAnimations />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

                {/* Subtle glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6 v5-reveal" style={{ color: '#999999' }}>SCHOOL LAB</span>
                    <h1 className="v5-h1 mb-6 max-w-4xl mx-auto leading-[0.95] tracking-tight text-white" style={{ fontWeight: 400 }}>
                        Aprende a usar la IA<br />
                        <span style={{ color: 'rgba(245,245,240,0.38)' }}>antes de que sea tarde.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 text-white/60">
                        El 39% de las habilidades laborales actuales serán obsoletas antes de 2030. La IA no va a esperar. Nosotros tampoco.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#programas" className="v5-btn-primary" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
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
                            <span className="v5-label mb-6" style={{ color: '#999999' }}>B2C • INDIVIDUOS</span>
                            <h2 className="font-display text-4xl font-bold mb-6 text-white">Para ti, si quieres aprender</h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                                9 programas, cada uno diseñado para un perfil concreto. Desde mujeres de 40 a 60 años hasta médicos u hosteleros. Explicado sin tecnicismos, orientado a resolver tus problemas reales desde el día 1.
                            </p>
                            <div className="mt-auto">
                                <Link href="#programas" className="inline-flex items-center gap-2 text-white/60 font-bold hover:text-white hover:underline transition-colors">
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
                                    <Link href="/school-lab/prepara-tu-equipo" className="v5-btn-primary" style={{ background: '#F5F5F0', color: '#080808', borderRadius: '0px' }}>
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
            <section id="programas" className="v5-section bg-black text-white py-24 border-t border-white/5">
                <div className="v5-container">
                    <div className="text-center mb-16 v5-reveal">
                        <span className="v5-label mb-4 text-white/40">PROGRAMAS</span>
                        <h2 className="v5-h2 mb-4">Especialización Hiper-concreta</h2>
                        <p className="v5-body-large max-w-2xl mx-auto opacity-60">No creemos en los cursos genéricos. Entrenamos habilidades reales para problemas reales.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {/* Empresas (Featured) */}
                        <Link href="/school-lab/prepara-tu-equipo" className="md:col-span-2 lg:col-span-3 p-10 border border-white/10 bg-white/[0.02] rounded-[2rem] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <span className="v5-label mb-6" style={{ color: '#999999' }}>B2B • CORPORATIVO</span>
                                    <h3 className="v5-h2" style={{ fontSize: 'clamp(1.5rem,3vw,1.875rem)' }}>Prepara tu equipo</h3>
                                    <p className="v5-body-large !text-base mb-8 opacity-60">Tu equipo puede trabajar más rápido y cometer menos errores si sabe cómo usar la IA corporativa. Casos de uso 100% reales.</p>
                                    <span className="font-mono text-xs text-white/40 tracking-widest uppercase">Ver programa corporativo →</span>
                                </div>
                                <div className="hidden lg:block relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" alt="Equipo trabajando" />
                                </div>
                            </div>
                        </Link>

                        {/* B2C Programs */}
                        {[
                            { title: 'Empodérate con IA', target: 'Mujeres 40-60', desc: 'Salud, creatividad y comunicación sin tecnicismos.', color: '#10B981', href: '/school-lab/empoderate-con-ia' },
                            { title: 'Conéctate con el mundo', target: 'Personas 65+', desc: 'IA como asistente diario para recordar y contactar.', color: '#3B82F6', href: '/school-lab/conectate-con-el-mundo' },
                            { title: 'Aprende a crear', target: 'Niños 6-12', desc: 'Cuentos y mundos potenciando la imaginación.', color: '#F97316', href: '/school-lab/aprende-a-crear' },
                            { title: 'Descubre tu futuro', target: 'Jóvenes 13-18', desc: 'Explora profesiones del futuro y crea proyectos.', color: '#8B5CF6', href: '/school-lab/descubre-tu-futuro' },
                            { title: 'Monta tu negocio', target: 'Emprendedores', desc: 'Web, logo y ventas sin saber programar.', color: '#F59E0B', href: '/school-lab/monta-tu-negocio' },
                            { title: 'Mejora tu material', target: 'Profesores', desc: 'Menos tiempo corrigiendo, más personalización.', color: '#06B6D4', href: '/school-lab/mejora-tu-material' },
                            { title: 'Más tiempo en cocina', target: 'Hostelería', desc: 'Responde reseñas y atrae clientes automáticamente.', color: '#EF4444', href: '/school-lab/mas-tiempo-para-cocina' },
                            { title: 'Dedícate a la medicina', target: 'Sanidad', desc: 'Delega la burocracia y agiliza informes.', color: '#1D4ED8', href: '/school-lab/dedicate-a-la-medicina' },
                        ].map((prog) => (
                            <Link key={prog.title} href={prog.href} className="p-8 border border-white/5 bg-white/[0.01] rounded-[1.5rem] hover:border-white/20 hover:bg-white/[0.03] transition-all group relative overflow-hidden flex flex-col">
                                <span className="v5-label" style={{ fontSize: '9px', color: '#999999' }}>{prog.target}</span>
                                <h3 className="v5-h3 !text-xl mb-2 group-hover:text-white transition-colors">{prog.title}</h3>
                                <p className="v5-body-large !text-sm opacity-40 mb-8 flex-grow">{prog.desc}</p>
                                <span className="v5-label text-white/20 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" style={{ fontSize: '9px' }}>Ver programa →</span>
                            </Link>
                        ))}

                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="v5-section bg-black text-white border-t border-white/5 py-24">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <span className="v5-label mb-4" style={{ color: '#999999' }}>NUESTRA METODOLOGÍA</span>
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
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0">🛠</div>
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
            <section className="v5-section bg-[#0C0C0C] border-t border-white/5 py-24">
                <div className="v5-container">

                    <div className="text-center mb-16 v5-reveal">
                        <span className="v5-label mb-4 text-white/40">METODOLOGÍA Y FORMATOS</span>
                        <h2 className="v5-h2">Tres formatos, el mismo ADN</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 border border-white/5 bg-white/[0.01] rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors">
                            <div>
                                <h3 className="v5-h3 !text-2xl mb-2 text-white">Taller de Descubrimiento</h3>
                                <p className="font-mono text-[10px] text-white/40 mb-6 tracking-widest uppercase">90 min • Feedback inmediato</p>
                                <p className="v5-body-large !text-sm opacity-50 mb-6">El primer paso seguro. Sales habiendo creado algo con IA directamente desde tu móvil o portátil. Sin agobios.</p>
                            </div>
                            <Link href="#contact" className="text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors pt-4 border-t border-white/5 text-center">Ver fechas →</Link>
                        </div>

                        <div className="p-8 border border-white/20 bg-white/[0.04] rounded-3xl flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-[#F5F5F0] text-[#080808] text-[9px] font-bold tracking-widest uppercase rounded-bl-xl">MÁS POPULAR</div>
                            <div>
                                <h3 className="v5-h3 !text-2xl mb-2 text-white">Programa Intensivo</h3>
                                <p className="font-mono text-[10px] text-white/40 mb-6 tracking-widest uppercase">1 semana • Desde 60€</p>
                                <p className="v5-body-large !text-sm opacity-60 mb-6">5 sesiones de 2h donde vas en serio. Desarrollas un proyecto real terminado al final de la semana, guiado paso a paso.</p>
                            </div>
                            <Link href="#contact" className="text-xs font-bold text-[#080808] bg-[#F5F5F0] hover:bg-white transition-colors py-3 px-4 rounded-xl text-center">Matricularme</Link>
                        </div>

                        <div className="p-8 border border-white/5 bg-white/[0.01] rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors">
                            <div>
                                <h3 className="v5-h3 !text-2xl mb-2 text-white">Comunidad Aether</h3>
                                <p className="font-mono text-[10px] text-white/40 mb-6 tracking-widest uppercase">Mensual • Alumni</p>
                                <p className="v5-body-large !text-sm opacity-50 mb-6">Novedades, soporte continuo, herramientas probadas y una red de personas aprendiendo igual que tú.</p>
                            </div>
                            <Link href="#contact" className="text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors pt-4 border-t border-white/5 text-center">Acceso Alumni →</Link>
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
