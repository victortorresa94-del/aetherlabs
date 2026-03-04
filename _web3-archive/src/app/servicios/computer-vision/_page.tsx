'use client';

import React from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import {
    Camera,
    Shield,
    BarChart3,
    CheckCircle2,
    Video,
    Users,
    Car,
    Eye,
    ArrowRight,
    Zap,
    Lock,
    Smartphone,
    Database,
    Mail,
    LayoutDashboard
} from 'lucide-react';

export default function ComputerVisionPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
            <HeaderNavigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/services/computer-vision/hero.png"
                            alt="Computer Vision AI Overlay"
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black" />
                    </div>

                    <div className="container relative z-10 px-6">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
                                <Eye className="w-4 h-4 text-[#82ff1f]" />
                                <span className="text-sm font-medium tracking-wide text-[#e0e0e0]">Nueva Tecnología de Visión IA</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
                                Computer Vision <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#808080]">para negocios reales</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-[#a0a0a0] mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                                La inteligencia artificial puede ver lo que pasa en tu empresa y ayudarte a tomar mejores decisiones.
                                Convertimos cualquier cámara —incluso la de seguridad que ya tienes— en un sistema inteligente.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                                <Link
                                    href="/contacto"
                                    className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    Quiero mi demo de Computer Vision
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. INTRO & WHAT WE DO */}
                <section className="py-24 bg-[#050505] border-t border-white/5">
                    <div className="container px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                                    Sin hardware caro. <br />
                                    <span className="text-[#82ff1f]">Sin complicaciones técnicas.</span>
                                </h2>
                                <p className="text-lg text-[#a0a0a0] font-light leading-relaxed mb-6">
                                    Analizamos vídeo e imágenes en tiempo real usando IA avanzada (Google Gemini + procesamiento propio) para automatizar tareas, mejorar la seguridad y obtener datos útiles de tu empresa.
                                </p>
                                <p className="text-xl text-white font-medium">
                                    Usamos tus cámaras actuales y convertimos cada escena en información clara.
                                </p>
                            </div>
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
                                {/* Placeholder for a demo video or another image if available, using the hero for now or a generic pattern */}
                                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                                    <Camera className="w-16 h-16 text-white/20" />
                                </div>
                                <Image
                                    src="/images/services/computer-vision/hero.png"
                                    alt="Computer Vision Analysis"
                                    fill
                                    className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SERVICES GRID */}
                <section className="py-32 bg-black relative">
                    <div className="container px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-light mb-6">Servicios que ofrecemos</h2>
                            <p className="text-[#a0a0a0] text-xl max-w-2xl mx-auto">
                                Soluciones específicas para problemas reales de tu negocio.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <ServiceCard
                                icon={Users}
                                title="Control de entradas y salidas"
                                description="Detectamos personas que entran y salen, registramos horarios y generamos informes automáticos."
                                details={[
                                    "Registro de horarios",
                                    "Detección de llegadas tarde",
                                    "Conteo por empleado (QR/Panel)",
                                    "Informe diario automático"
                                ]}
                            />

                            {/* Service 2 */}
                            <ServiceCard
                                icon={Shield}
                                title="Seguridad inteligente"
                                description="Alertas automáticas en situaciones importantes sin necesidad de vigilancia humana constante."
                                details={[
                                    "Accesos a zonas restringidas",
                                    "Objetos sospechosos",
                                    "Comportamientos anómalos",
                                    "Caídas o emergencias"
                                ]}
                            />

                            {/* Service 3 */}
                            <ServiceCard
                                icon={BarChart3}
                                title="Analytics para negocios físicos"
                                description="Convierte tus cámaras en un Google Analytics de tu local."
                                details={[
                                    "Conteo de clientes por hora",
                                    "Mapas de calor (zonas calientes)",
                                    "Ratio de conversión real",
                                    "Optimización de escaparate"
                                ]}
                            />

                            {/* Service 4 */}
                            <ServiceCard
                                icon={CheckCircle2}
                                title="Control de calidad y operación"
                                description="La cámara detecta si las cosas están como deben en tiempo real."
                                details={[
                                    "Estanterías vacías",
                                    "Productos fuera de lugar",
                                    "Bandejas sucias / Mesas sin limpiar",
                                    "EPIs mal utilizados"
                                ]}
                            />

                            {/* Service 5 */}
                            <ServiceCard
                                icon={Video}
                                title="Marketing automático"
                                description="Usamos la cámara para crear contenido automáticamente o detectar momentos importantes."
                                details={[
                                    "Identificar platos más fotografiados",
                                    "Capturar clips para reels",
                                    "Detección de producto en acción",
                                    "Señalización de eventos"
                                ]}
                            />

                            {/* Service 6 */}
                            <ServiceCard
                                icon={Users}
                                title="Gestión de aforo y eventos"
                                description="Control en tiempo real sin sensores adicionales."
                                details={[
                                    "Aforo actual en tiempo real",
                                    "Alertas por exceso",
                                    "Tiempo medio de estancia",
                                    "Picos por horas"
                                ]}
                            />

                            {/* Service 7 - Full width or centered */}
                            <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                                <div className="w-full max-w-md">
                                    <ServiceCard
                                        icon={Car}
                                        title="LPR — Lectura de matrículas"
                                        description="Para parkings, logística y flotas. Control total de vehículos."
                                        details={[
                                            "Registro de entrada/salida",
                                            "Control de vehículos permitidos",
                                            "Informes automáticos",
                                            "Sin tickets físicos"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. HOW IT WORKS */}
                <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
                    <div className="container px-6">
                        <h2 className="text-3xl md:text-4xl font-light mb-20 text-center">Cómo funciona</h2>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Conexión", desc: "Conectamos tu cámara o sistema de vídeo (IP, CCTV o móvil)." },
                                { step: "02", title: "Análisis IA", desc: "Analizamos las imágenes con IA avanzada (Gemini Vision)." },
                                { step: "03", title: "Procesamiento", desc: "Generamos avisos, dashboards y automatizaciones en tiempo real." },
                                { step: "04", title: "Resultados", desc: "Accedes a un panel simple o recibes alertas en tu móvil." },
                            ].map((item, i) => (
                                <div key={i} className="relative p-8 rounded-2xl bg-black border border-white/10 hover:border-[#82ff1f]/50 transition-colors group">
                                    <div className="text-5xl font-light text-[#1a1a1a] group-hover:text-[#82ff1f]/20 mb-6 transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. BENEFITS & TARGET AUDIENCE */}
                <section className="py-32 bg-black">
                    <div className="container px-6">
                        <div className="grid lg:grid-cols-2 gap-20">
                            {/* Benefits */}
                            <div>
                                <h2 className="text-3xl font-light mb-10">Ventajas para tu negocio</h2>
                                <ul className="space-y-6">
                                    {[
                                        "No necesitas nuevos dispositivos (usamos tus cámaras)",
                                        "Legal y seguro (sin biometría innecesaria)",
                                        "Alertas y reportes automáticos 24/7",
                                        "Datos reales para mejorar la toma de decisiones",
                                        "Más seguridad y menos carga manual para el equipo",
                                        "Tecnología empresarial a precio pyme"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-[#82ff1f]/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#82ff1f]" />
                                            </div>
                                            <span className="text-[#c8c8c8] text-lg">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Target Audience */}
                            <div className="bg-[#111] rounded-3xl p-10 border border-white/5">
                                <h2 className="text-3xl font-light mb-8">¿Para quién es este servicio?</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Restaurantes y cafeterías",
                                        "Tiendas y comercios",
                                        "Oficinas y coworkings",
                                        "Gimnasios y centros deportivos",
                                        "Clínicas y estudios",
                                        "Almacenes y logística",
                                        "Eventos y discotecas",
                                        "Parkings y flotas"
                                    ].map((sector, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                            <span className="text-white font-medium">{sector}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. INTEGRATIONS */}
                <section className="py-24 bg-[#050505] border-t border-white/5">
                    <div className="container px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-light mb-12 text-[#a0a0a0]">
                            Integraciones disponibles
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                            {[
                                { icon: "LayoutDashboard", label: "Google Sheets" },
                                { icon: "Smartphone", label: "WhatsApp" },
                                { icon: "CheckCircle2", label: "ClickUp" },
                                { icon: "Database", label: "Notion" },
                                { icon: "Mail", label: "Gmail" },
                                { icon: "Database", label: "SQL / APIs" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-[#808080] group-hover:text-white transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-32 bg-black">
                    <div className="container px-6">
                        <div className="max-w-4xl mx-auto p-12 rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#111] to-black text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f]/50 to-transparent" />

                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                                ¿Quieres que tu negocio <span className="text-[#82ff1f]">“vea”</span> con IA?
                            </h2>
                            <p className="text-xl text-[#a0a0a0] mb-10 max-w-2xl mx-auto">
                                Solicita una demo y te enseñamos lo que la cámara puede detectar en tu empresa.
                            </p>

                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#e0e0e0] transition-colors hover:scale-105"
                            >
                                Quiero mi demo de Computer Vision
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Helper Component for Service Cards
function ServiceCard({ icon: Icon, title, description, details }: { icon: any, title: string, description: string, details: string[] }) {
    return (
        <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-[#82ff1f]/30 transition-all hover:shadow-[0_0_30px_rgba(130,255,31,0.05)] group h-full flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#82ff1f]/10 transition-colors">
                <Icon className="w-6 h-6 text-white group-hover:text-[#82ff1f] transition-colors" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-white">{title}</h3>
            <p className="text-[#a0a0a0] mb-6 text-sm leading-relaxed flex-grow">
                {description}
            </p>
            <ul className="space-y-2 pt-6 border-t border-white/5">
                {details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#808080]">
                        <div className="w-1 h-1 rounded-full bg-[#82ff1f] mt-2 shrink-0" />
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

