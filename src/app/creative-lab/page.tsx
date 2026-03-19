'use client';

import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

const services = [
    {
        title: 'WEB CORPORATIVA',
        desc: 'Tu web que convierte, no que informa',
        link: '/creative-lab/web',
        colSpan: 'md:col-span-8',
        img: '/images/3d/web corporativa.jpeg'
    },
    {
        title: 'VÍDEO CON IA',
        desc: 'Sin cámara. Sin rodaje. Sin esperas.',
        link: '/creative-lab/video',
        colSpan: 'md:col-span-4',
        img: '/images/creative-lab/video.jpg'
    },
    {
        title: 'BRANDING',
        desc: 'Una marca que se recuerda',
        link: '/creative-lab/branding',
        colSpan: 'md:col-span-4',
        img: '/images/3d/branding.jpeg'
    },
    {
        title: 'PITCH DECKS',
        desc: 'Decks que cierran reuniones',
        link: '/creative-lab/presentaciones',
        colSpan: 'md:col-span-4',
        img: '/images/3d/presentaciones.jpeg'
    },
    {
        title: 'MATERIAL CORPORATIVO',
        desc: 'Documentos que abren puertas',
        link: '/creative-lab/material',
        colSpan: 'md:col-span-4',
        img: '/images/3d/material corporativo.jpeg'
    },
    {
        title: 'ANUNCIOS CREATIVOS',
        desc: 'Anuncios que paran el scroll',
        link: '/creative-lab/anuncios',
        colSpan: 'md:col-span-12',
        img: '/images/3d/anucnios.png'
    }
];

export default function CreativeLab() {
    return (
        <div className="v5-page">
            <ScrollAnimations />
            <Navbar />

            <main>
                {/* HERO SECTION */}
                <section
                    className="relative flex items-center overflow-hidden"
                    style={{ backgroundColor: '#080808', paddingTop: '140px', paddingBottom: '100px' }}
                >
                    <div className="v5-container relative z-10 w-full">
                        <div className="flex flex-col items-center text-center">
                            <span className="v5-label mb-6 v5-reveal">CREATIVE LAB</span>

                            <h1 className="v5-h1 mb-8 max-w-4xl mx-auto v5-reveal" style={{ transitionDelay: '80ms' }}>
                                Haz que tu empresa<br />
                                se vea, se entienda<br />
                                <span style={{ color: 'rgba(245,245,240,0.38)' }}>y se elija.</span>
                            </h1>

                            <p className="v5-body-large max-w-2xl mx-auto mb-12 v5-reveal" style={{ transitionDelay: '160ms' }}>
                                Producimos todo el material de marketing que necesitas.<br />
                                Web, vídeo, branding, presentaciones y anuncios.<br />
                                Con IA: más rápido, más barato, sin sacrificar calidad.
                            </p>

                            <div className="v5-reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '220ms' }}>
                                <Link
                                    href="#servicios"
                                    className="v5-btn-primary"
                                    style={{
                                        background: '#F5F5F0',
                                        color: '#080808',
                                        borderRadius: '0px'
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                                    }}
                                >
                                    Ver Servicios
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="v5-btn-ghost"
                                    style={{ borderRadius: '0px', color: 'rgba(245,245,240,0.5)', borderColor: 'rgba(245,245,240,0.15)' }}
                                >
                                    Contactar ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENTO GRID SECTION */}
                <section id="servicios" className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="v5-container">
                        <div className="text-center mb-16 v5-reveal">
                            <span className="v5-label mb-4" style={{ color: '#999999' }}>NUESTROS SERVICIOS</span>
                            <h2 className="v5-h2" style={{ color: '#111111' }}>Todo lo que necesitas, bajo un mismo techo</h2>
                            <p className="v5-body-large mx-auto max-w-lg mt-6" style={{ color: '#666666' }}>
                                Producción creativa integral potenciada por IA. Más rápido, más barato, sin compromisos.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {services.map((service, idx) => (
                                <Link
                                    href={service.link}
                                    key={idx}
                                    className={`group block relative overflow-hidden v5-reveal ${service.colSpan}`}
                                    style={{
                                        background: '#F8F8F8',
                                        border: '1px solid #EBEBEB',
                                        borderRadius: '16px',
                                        transitionDelay: `${idx * 60}ms`,
                                        textDecoration: 'none',
                                        transition: 'border-color 200ms ease, transform 200ms ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = '#111111';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = '#EBEBEB';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    }}
                                >
                                    {/* Image on top */}
                                    <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 600ms ease' }}
                                            className="group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Text below */}
                                    <div style={{ padding: '24px 28px 28px' }}>
                                        <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#AAAAAA', display: 'block', marginBottom: '10px' }}>
                                            {service.title}
                                        </span>
                                        <h3 style={{ fontFamily: 'var(--v5-font-display)', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#111111', marginBottom: '16px' }}>
                                            {service.desc}
                                        </h3>
                                        <span style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', color: '#999999', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            Ver más →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="v5-section" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="v5-container">
                        <div className="text-center mb-16 v5-reveal">
                            <span className="v5-label mb-4">Proceso Creativo</span>
                            <h2 className="v5-h2" style={{ color: '#111111' }}>Por qué con IA</h2>
                            <p className="v5-body-large mx-auto max-w-lg mt-6" style={{ color: '#666666' }}>
                                Transformamos la velocidad de producción y el coste, sin comprometer el estándar de calidad y estética.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 v5-section-gap">
                            <div className="p-8 md:p-10 border border-[#EBEBEB] bg-[#F8F8F8] rounded-[16px] v5-reveal">
                                <span className="v5-label mb-6" style={{ color: '#CCCCCC' }}>01</span>
                                <h3 className="v5-h3 mb-4" style={{ color: '#111111' }}>Velocidad real</h3>
                                <p className="v5-body-large !text-[15px]" style={{ color: '#666666' }}>
                                    Lo que antes tardaba 4 semanas, ahora tarda 4 días. Iteración continua sin esperas de producción.
                                </p>
                            </div>

                            <div className="p-8 md:p-10 border border-[#EBEBEB] bg-[#F8F8F8] rounded-[16px] v5-reveal" style={{ transitionDelay: '80ms' }}>
                                <span className="v5-label mb-6" style={{ color: '#CCCCCC' }}>02</span>
                                <h3 className="v5-h3 mb-4" style={{ color: '#111111' }}>Coste optimizado</h3>
                                <p className="v5-body-large !text-[15px]" style={{ color: '#666666' }}>
                                    Sin productoras, fotógrafos ni estudios externos. La IA es nuestro taller y tú eres el arquitecto.
                                </p>
                            </div>

                            <div className="p-8 md:p-10 border border-[#EBEBEB] bg-[#F8F8F8] rounded-[16px] v5-reveal" style={{ transitionDelay: '160ms' }}>
                                <span className="v5-label mb-6" style={{ color: '#CCCCCC' }}>03</span>
                                <h3 className="v5-h3 mb-4" style={{ color: '#111111' }}>Flexibilidad total</h3>
                                <p className="v5-body-large !text-[15px]" style={{ color: '#666666' }}>
                                    Cambios en horas, no en semanas. Adaptamos el material a cada canal sin costes adicionales por versión.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="v5-section" style={{ backgroundColor: '#080808' }}>
                    <div className="v5-container text-center v5-reveal">
                        <span className="v5-label mb-6">Elige tu camino</span>
                        <h2 className="v5-h2 mb-6" style={{ color: '#F5F5F0' }}>¿No sabes qué necesitas primero?</h2>
                        <p className="v5-body-large max-w-xl mx-auto mb-12">
                            Cuéntanos dónde estás y te decimos qué tiene más impacto para tu empresa ahora mismo.
                        </p>
                        <Link
                            href="/contacto"
                            className="v5-btn-primary"
                            style={{
                                background: '#F5F5F0',
                                color: '#080808',
                                borderRadius: '0px'
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = '#F5F5F0';
                            }}
                        >
                            Hablar con nuestro equipo
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
