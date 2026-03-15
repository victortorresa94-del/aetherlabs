'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import FinalCtaSection from '@/components/v5/FinalCtaSection';

const services = [
    {
        title: 'WEB CORPORATIVA Y LANDINGS',
        desc: 'Tu web que convierte, no que informa',
        link: '/creative-lab/web',
        colSpan: 'md:col-span-8',
        color: '#00E5FF', // Cyan
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Yz6EYh640hkqpiMo4N57NJwyGwewp4itTV9jryOouHbjAFrC1zHP8RK0GzwqqGnNeTH-U1TzqpMjUO47xoJOqQtRHWlkLfmQvCYDLKZ6BjpzFrY6Vxst6XA0TEL4wImq3cniIVORF1kwK4HhM5e_BDFQIQbVbE3AUSEsEyeBLokViJQ8EXjs9FvUpPqVxt--93ain9DuszPCGs4G1rNYph78_-99ZCn9ucyyf8YIFvFFzruUh9SVhFF3STEoKSTMG2WZ3ukyghw'
    },
    {
        title: 'VÍDEO CON IA',
        desc: 'Sin cámara. Sin rodaje. Sin esperas.',
        link: '/creative-lab/video',
        colSpan: 'md:col-span-4',
        color: '#7C3AED', // Violet
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBUXtxUx1h49lQ4D9UM2_WAvICuABPqHdT7__O5dWgorS40Xd0Z39-kG9LYFbZVIv2vXf00952cXyEzoyOYjfFYN4t1AWW1oBpWRdegJ3XERpi8CUzB3MeoWIvcs95dIbxxVIprsZ6AQR4I_M1eC6WYhUnPazJb10CAhZtf68SmlL9FxAjpYMl_gypbFcpbOWEMrbPA6sbuw4u83b55K4HosbByV3fvTOHLOr_RAyGJ__hUJ299eOKpwMhxyq2Ly2R_aplyquWXlc'
    },
    {
        title: 'BRANDING E IDENTIDAD',
        desc: 'Una marca que se recuerda',
        link: '/creative-lab/branding',
        colSpan: 'md:col-span-4',
        color: '#DB2777', // Pink
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsDYWqpmjXfe_qXJd_U644ce5U-ULybdWAzjmwTRXtgwqbVJrc7UDvGzdppT9a7BWNRGvtDljerQ29Ur4JjEt_rS_9bR54YS5pRxJvjVmHAMTLjrCcYQLOvxg_fxNcFCnnpAW0SjpayMtkHI-2kusO0ZOAXyOaJTP5IpNS1556X6XnHYBuykwRekKdCH0pb93ZdNeAtI-0bgKX8BhbKHZgofFN2q1DOxVXF2-W_NFIceTZRweJrLScdJoQImZvt3vG2eBm4Kh6o_M'
    },
    {
        title: 'PRESENTACIONES Y PITCH DECKS',
        desc: 'Decks que cierran reuniones',
        link: '/creative-lab/presentaciones',
        colSpan: 'md:col-span-4',
        color: '#D97706', // Amber
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdMGKFFloLFp3WQAtnrmbxPs9sStZfjFEUVMjkOTbitkUA3llGHlqjXeASwFiPfSlD7D-w8C_h5T_RKsErrjXmRiZjvXikZkbQdbSvCEjO0FPTgsMIkhCQugTQjbgrYXRTePtx5mJcDOEySVjq3KkJ6X4QzCZmdpkehoZ0Oe7i6uMRifvVJ-mwvYM8vPVNGarpjUiQhRtLiXnn6VDKK5RbUShJVAruiTiyUEvtROUjlKauUu3km6bNd4Bax6ZM0IZnO9cdVZDfq2k'
    },
    {
        title: 'MATERIAL CORPORATIVO',
        desc: 'Documentos que abren puertas',
        link: '/creative-lab/material',
        colSpan: 'md:col-span-4',
        color: '#059669', // Emerald
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Yz6EYh640hkqpiMo4N57NJwyGwewp4itTV9jryOouHbjAFrC1zHP8RK0GzwqqGnNeTH-U1TzqpMjUO47xoJOqQtRHWlkLfmQvCYDLKZ6BjpzFrY6Vxst6XA0TEL4wImq3cniIVORF1kwK4HhM5e_BDFQIQbVbE3AUSEsEyeBLokViJQ8EXjs9FvUpPqVxt--93ain9DuszPCGs4G1rNYph78_-99ZCn9ucyyf8YIFvFFzruUh9SVhFF3STEoKSTMG2WZ3ukyghw'
    },
    {
        title: 'CREATIVIDADES PARA ANUNCIOS',
        desc: 'Anuncios que paran el scroll',
        link: '/creative-lab/anuncios',
        colSpan: 'md:col-span-12',
        color: '#DC2626', // Red
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBUXtxUx1h49lQ4D9UM2_WAvICuABPqHdT7__O5dWgorS40Xd0Z39-kG9LYFbZVIv2vXf00952cXyEzoyOYjfFYN4t1AWW1oBpWRdegJ3XERpi8CUzB3MeoWIvcs95dIbxxVIprsZ6AQR4I_M1eC6WYhUnPazJb10CAhZtf68SmlL9FxAjpYMl_gypbFcpbOWEMrbPA6sbuw4u83b55K4HosbByV3fvTOHLOr_RAyGJ__hUJ299eOKpwMhxyq2Ly2R_aplyquWXlc'
    }
];

export default function CreativeLab() {
    return (
        <main className="v5-page min-h-screen bg-black text-[#F5F5F5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="v5-container relative z-10 text-center flex flex-col items-center">
                    <span className="v5-label mb-6">CREATIVE LAB</span>
                    <h1 className="v5-h1 mb-8 max-w-4xl mx-auto leading-[0.9]">
                        Haz que tu empresa<br />
                        se vea, se entienda<br />
                        <span className="text-white/40 italic">y se elija.</span>
                    </h1>
                    <p className="v5-body-large max-w-2xl mx-auto mb-10 text-white/60">
                        Producimos todo el material de marketing que necesitas.<br />
                        Web, vídeo, branding, presentaciones y anuncios.<br />
                        Con IA: más rápido, más barato, sin sacrificar calidad.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#servicios" className="v5-btn-primary bg-white text-black hover:bg-white/90">
                            Ver Servicios
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bento Grid Section */}
            <section id="servicios" className="v5-section bg-[#000000] border-t border-white/5">
                <div className="v5-container">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {services.map((service, idx) => (
                            <Link
                                href={service.link}
                                key={idx}
                                className={`group block relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-[${service.color}]/50 hover:bg-white/10 hover:-translate-y-1 ${service.colSpan}`}
                                style={{ minHeight: '320px' }}
                            >
                                {/* Background Gradient matching service color */}
                                <div
                                    className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at top right, ${service.color}, transparent 60%)` }}
                                />

                                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                    <div className="mb-8">
                                        <span
                                            className="font-mono text-[10px] tracking-[0.15em] uppercase mb-4 block"
                                            style={{ color: service.color }}
                                        >
                                            {service.title}
                                        </span>
                                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white max-w-sm">
                                            {service.desc}
                                        </h3>
                                    </div>

                                    {/* Image Placeholder */}
                                    <div className="absolute right-0 bottom-0 w-2/3 h-2/3 max-w-[300px] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover rounded-tl-xl grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700 drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="v5-section bg-white text-black">
                <div className="v5-container">
                    <div className="text-center mb-16">
                        <h2 className="v5-h2">Por qué con IA</h2>
                        <p className="v5-body-large mx-auto max-w-lg mt-4 text-black/60">
                            Transformamos la velocidad de producción y el coste, sin comprometer el estándar de calidad y estética.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-500 rounded-2xl group cursor-default">
                            <span className="text-2xl mb-4 block">⚡️</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Velocidad</h3>
                            <p className="text-black/60 group-hover:text-white/60">
                                Lo que antes tardaba 4 semanas, ahora tarda 4 días.
                            </p>
                        </div>

                        <div className="p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-500 rounded-2xl group cursor-default">
                            <span className="text-2xl mb-4 block">💎</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Coste</h3>
                            <p className="text-black/60 group-hover:text-white/60">
                                Sin productoras, fotógrafos ni estudios de diseño externos.
                            </p>
                        </div>

                        <div className="p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-500 rounded-2xl group cursor-default">
                            <span className="text-2xl mb-4 block">🔄</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Iteración</h3>
                            <p className="text-black/60 group-hover:text-white/60">
                                Cambios en horas, no en semanas. Sin coste adicional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="v5-section bg-black border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="v5-h2 mb-6">¿No sabes qué necesitas primero?</h2>
                    <p className="v5-body-large max-w-xl mx-auto mb-10 text-white/60">
                        Cuéntanos dónde estás y te decimos qué tiene más impacto para tu empresa ahora mismo.
                    </p>
                    <Link href="/contacto" className="v5-btn-primary">
                        Hablar con Víctor →
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
