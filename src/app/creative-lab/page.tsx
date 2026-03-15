'use client';

import React from 'react';
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
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Yz6EYh640hkqpiMo4N57NJwyGwewp4itTV9jryOouHbjAFrC1zHP8RK0GzwqqGnNeTH-U1TzqpMjUO47xoJOqQtRHWlkLfmQvCYDLKZ6BjpzFrY6Vxst6XA0TEL4wImq3cniIVORF1kwK4HhM5e_BDFQIQbVbE3AUSEsEyeBLokViJQ8EXjs9FvUpPqVxt--93ain9DuszPCGs4G1rNYph78_-99ZCn9ucyyf8YIFvFFzruUh9SVhFF3STEoKSTMG2WZ3ukyghw'
    },
    {
        title: 'VÍDEO CON IA',
        desc: 'Sin cámara. Sin rodaje. Sin esperas.',
        link: '/creative-lab/video',
        colSpan: 'md:col-span-4',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBUXtxUx1h49lQ4D9UM2_WAvICuABPqHdT7__O5dWgorS40Xd0Z39-kG9LYFbZVIv2vXf00952cXyEzoyOYjfFYN4t1AWW1oBpWRdegJ3XERpi8CUzB3MeoWIvcs95dIbxxVIprsZ6AQR4I_M1eC6WYhUnPazJb10CAhZtf68SmlL9FxAjpYMl_gypbFcpbOWEMrbPA6sbuw4u83b55K4HosbByV3fvTOHLOr_RAyGJ__hUJ299eOKpwMhxyq2Ly2R_aplyquWXlc'
    },
    {
        title: 'BRANDING',
        desc: 'Una marca que se recuerda',
        link: '/creative-lab/branding',
        colSpan: 'md:col-span-4',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsDYWqpmjXfe_qXJd_U644ce5U-ULybdWAzjmwTRXtgwqbVJrc7UDvGzdppT9a7BWNRGvtDljerQ29Ur4JjEt_rS_9bR54YS5pRxJvjVmHAMTLjrCcYQLOvxg_fxNcFCnnpAW0SjpayMtkHI-2kusO0ZOAXyOaJTP5IpNS1556X6XnHYBuykwRekKdCH0pb93ZdNeAtI-0bgKX8BhbKHZgofFN2q1DOxVXF2-W_NFIceTZRweJrLScdJoQImZvt3vG2eBm4Kh6o_M'
    },
    {
        title: 'PITCH DECKS',
        desc: 'Decks que cierran reuniones',
        link: '/creative-lab/presentaciones',
        colSpan: 'md:col-span-4',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdMGKFFloLFp3WQAtnrmbxPs9sStZfjFEUVMjkOTbitkUA3llGHlqjXeASwFiPfSlD7D-w8C_h5T_RKsErrjXmRiZjvXikZkbQdbSvCEjO0FPTgsMIkhCQugTQjbgrYXRTePtx5mJcDOEySVjq3KkJ6X4QzCZmdpkehoZ0Oe7i6uMRifvVJ-mwvYM8vPVNGarpjUiQhRtLiXnn6VDKK5RbUShJVAruiTiyUEvtROUjlKauUu3km6bNd4Bax6ZM0IZnO9cdVZDfq2k'
    },
    {
        title: 'LITERATURA',
        desc: 'Documentos que abren puertas',
        link: '/creative-lab/material',
        colSpan: 'md:col-span-4',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Yz6EYh640hkqpiMo4N57NJwyGwewp4itTV9jryOouHbjAFrC1zHP8RK0GzwqqGnNeTH-U1TzqpMjUO47xoJOqQtRHWlkLfmQvCYDLKZ6BjpzFrY6Vxst6XA0TEL4wImq3cniIVORF1kwK4HhM5e_BDFQIQbVbE3AUSEsEyeBLokViJQ8EXjs9FvUpPqVxt--93ain9DuszPCGs4G1rNYph78_-99ZCn9ucyyf8YIFvFFzruUh9SVhFF3STEoKSTMG2WZ3ukyghw'
    },
    {
        title: 'ANUNCIOS CREATIVOS',
        desc: 'Anuncios que paran el scroll',
        link: '/creative-lab/anuncios',
        colSpan: 'md:col-span-12',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBUXtxUx1h49lQ4D9UM2_WAvICuABPqHdT7__O5dWgorS40Xd0Z39-kG9LYFbZVIv2vXf00952cXyEzoyOYjfFYN4t1AWW1oBpWRdegJ3XERpi8CUzB3MeoWIvcs95dIbxxVIprsZ6AQR4I_M1eC6WYhUnPazJb10CAhZtf68SmlL9FxAjpYMl_gypbFcpbOWEMrbPA6sbuw4u83b55K4HosbByV3fvTOHLOr_RAyGJ__hUJ299eOKpwMhxyq2Ly2R_aplyquWXlc'
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
                                    style={{ borderRadius: '0px' }}
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
                                        minHeight: '400px',
                                        background: '#F8F8F8',
                                        border: '1px solid #EBEBEB',
                                        borderRadius: '16px',
                                        transitionDelay: `${idx * 60}ms`,
                                        textDecoration: 'none'
                                    }}
                                >
                                    <div className="p-8 h-full flex flex-col justify-between relative z-10 transition-colors duration-500 group-hover:bg-[#F2F2F2]">
                                        <div className="mb-8">
                                            <span className="v5-label mb-4" style={{ color: '#AAAAAA' }}>
                                                {service.title}
                                            </span>
                                            <h3
                                                style={{
                                                    fontFamily: 'var(--v5-font-display)',
                                                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                                                    fontWeight: 400,
                                                    letterSpacing: '-0.02em',
                                                    lineHeight: 1.15,
                                                    color: '#111111',
                                                    maxWidth: '320px',
                                                }}
                                            >
                                                {service.desc}
                                            </h3>
                                        </div>

                                        {/* Image handling with strict positioning and grayscale */}
                                        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 max-w-[320px] pointer-events-none transition-transform duration-700 translate-x-12 translate-y-12 group-hover:translate-x-6 group-hover:translate-y-6">
                                            <img
                                                src={service.img}
                                                alt={service.title}
                                                className="w-full h-full object-cover rounded-tl-2xl opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                                                style={{}}
                                            />
                                        </div>
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
