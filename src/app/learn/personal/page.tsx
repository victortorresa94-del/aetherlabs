'use client';

import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import {
    CheckCircle2,
    ArrowRight,
    Brain,
    Zap,
    Image as ImageIcon,
    Video,
    BookOpen,
    MessageSquare,
    Settings,
    Briefcase,
    Target,
    Users,
    TrendingUp,
    ShieldCheck,
    Building,
    Laptop,
    RefreshCw,
    Calendar,
    Star,
    MapPin,
    Clock,
    Award,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    BarChart3,
    Map,
    MousePointerClick,
    Filter,
    MessageCircle,
    Fingerprint,
    ListOrdered,
    Layers,
    PenTool,
    Download
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PersonalTrainingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* 1. Hero Principal - AJUSTE 8 */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
                            Iniciación a la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a0a0a0]">
                                Inteligencia Artificial
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#c8c8c8] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                            Aprende a usar la IA desde cero con un plan totalmente adaptado a tu nivel, tus objetivos y tu ritmo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/reserva"
                                className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg py-4 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                Quiero formarme
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Video Section */}
            <section className="w-full bg-[#0a0a0a] border-b border-[#1a1a1a]">
                <div className="w-full max-w-[1920px] mx-auto">
                    <div className="relative aspect-video w-full max-h-[80vh] overflow-hidden bg-black">
                        <video
                            src="/videos/landing-intro.mp4"
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Formación personalizada 1:1 para personas */}
            <section className="py-24 bg-black border-t border-[#1a1a1a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <div className="bg-[#0a0a0a] rounded-3xl p-6 md:p-16 border border-[#2a2a2a]">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#111] text-xs font-medium tracking-wider text-[#a0a0a0] mb-6 uppercase">
                                    Mentoria 1 a 1
                                </div>
                                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                                    Formación personalizada <br /> 1:1
                                </h2>
                                <p className="text-xl text-[#c8c8c8] font-light mb-8">
                                    Aprende IA desde cero con un plan creado exclusivamente para ti.
                                </p>

                                <div className="space-y-6 text-[#a0a0a0] mb-10">
                                    <p className="leading-relaxed">
                                        La mayoría de personas no saben por dónde empezar en IA:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                            <span>Quieren crear imágenes profesionales, pero no saben prompting.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                            <span>Quieren usar NanoBanana, pero no saben cómo sacarle partido.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                            <span>Quieren crear vídeos con IA, pero no saben qué herramientas usar.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                            <span>Quieren usar NotebookLM, pero no saben ni configurarlo.</span>
                                        </li>
                                    </ul>
                                    <p className="text-white font-medium text-lg pt-4">
                                        Mi formación resuelve exactamente eso.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/reserva"
                                        className="inline-flex items-center justify-center bg-white text-black font-semibold text-base py-3 px-8 rounded-full transition-all hover:scale-105"
                                    >
                                        Reserva tu formación
                                    </a>
                                    <a
                                        href="https://wa.me/34627281459"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-transparent text-white border border-[#333] font-medium text-base py-3 px-8 rounded-full transition-all hover:bg-[#1a1a1a]"
                                    >
                                        Hablar conmigo
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />
                                <div className="relative bg-[#111] rounded-2xl p-6 md:p-8 border border-[#2a2a2a]">
                                    <h3 className="text-xl font-semibold text-white mb-6">
                                        Plan 100% personalizado
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            "Si quieres aprender prompting → te lo enseño desde cero.",
                                            "Si quieres generar imágenes pro → te enseño flujos reales.",
                                            "Si quieres crear vídeos con IA → te explico herramientas.",
                                            "Si quieres automatizar tu negocio → te enseño los pasos.",
                                            "Si quieres crear tu primer chatbot → lo construimos juntos."
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
                                                <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                                                <span className="text-[#c8c8c8] text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Curso: Iniciación a la IA */}
            <section className="py-24 bg-[#050505]">
                <div className="container px-6 md:px-12 lg:px-24">

                    {/* Bloque 2: Qué aprenderás */}
                    <div className="mb-24">
                        <h3 className="text-3xl font-light text-white mb-12 text-center">¿Qué aprenderás exactamente?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Brain,
                                    title: "Fundamentos de IA",
                                    items: ["Modelos modernos", "Qué es un LLM", "Razonamiento", "Expectativas vs Realidad"],
                                    image: "/images/learn/fundamentos.jpg"
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Prompting PRO",
                                    items: ["Pedir correctamente", "Alta precisión", "Texto, imagen y vídeo", "Estructuras avanzadas"],
                                    image: "/images/learn/prompting.jpg"
                                },
                                {
                                    icon: ImageIcon,
                                    title: "Imágenes (NanoBanana)",
                                    items: ["Fotorealismo", "Fijar estilos", "Evitar errores", "Sets de marca"],
                                    image: "/images/learn/nano-banana-user.jpg"
                                },
                                {
                                    icon: Video,
                                    title: "Video con IA",
                                    items: ["Generar desde cero", "Herramientas top", "Ads / Lifestyle", "Consistencia"],
                                    image: "",
                                    video: "/videos/hero.mp4"
                                },
                                {
                                    icon: Laptop,
                                    title: "Hacer tu web con IA",
                                    items: ["Crear estructura", "Generar copy", "Imágenes y assets", "Publicar en minutos"],
                                    image: "/images/learn/web.jpg"
                                },
                                {
                                    icon: Zap,
                                    title: "Tu primer Chatbot",
                                    items: ["Arquitectura simple", "Chatbot operativo", "Uso personal/negocio", "Integración básica"],
                                    image: "/images/learn/chatbot-lifestyle.png"
                                },
                                {
                                    icon: Settings,
                                    title: "Automatización",
                                    items: ["Tareas reales", "n8n, Make, Zapier", "Tu primera auto", "Ahorro de tiempo"],
                                    image: "/images/learn/automatizacion.jpg"
                                },
                                {
                                    icon: Briefcase,
                                    title: "Salidas laborales",
                                    items: ["Nuevos trabajos", "Cómo entrar al sector", "Habilidades cotizadas", "Futuro profesional"],
                                    image: "/images/learn/trabajo.jpg"
                                }
                            ].map((card, i) => (
                                <div key={i} className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#444] transition-colors group flex flex-col">
                                    <div className="h-40 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                                        {/* @ts-ignore */}
                                        {card.video ? (
                                            <video
                                                src={card.video}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                        <div className="absolute bottom-4 left-6 z-20 bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                                            <card.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6 pt-2 flex-1 flex flex-col">
                                        <h4 className="text-lg font-semibold text-white mb-4">{card.title}</h4>
                                        <ul className="space-y-2 mt-auto">
                                            {card.items.map((item, j) => (
                                                <li key={j} className="text-sm text-[#808080] flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-[#444]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Banner: Tú decides cuánto aprendes - AJUSTE 4 */}
                    <div className="mb-24 py-20">
                        <h3 className="text-5xl md:text-6xl font-light text-white text-left max-w-5xl">
                            Tú decides cuánto aprendes, tú decides cuánto pagas.
                        </h3>
                    </div>

                    {/* Bloque 1: Esta formación es para ti si... */}
                    <div className="mb-24 w-full">
                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl overflow-hidden">
                            <div className="grid lg:grid-cols-[40%_60%]">
                                {/* Columna Imagen */}
                                <div className="relative min-h-[300px] lg:h-full border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
                                    <Image
                                        src="/images/learn/learning-session-elegant.png"
                                        alt="Sesión de formación IA"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                                </div>

                                {/* Columna Texto */}
                                <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                                    <h3 className="text-3xl font-light text-white mb-8">
                                        Esta formación es para ti si…
                                    </h3>
                                    <ul className="space-y-6 mb-8">
                                        {[
                                            { prefix: "Ves que la IA avanza cada semana", suffix: " y sientes que te estás quedando atrás." },
                                            { prefix: "Te interesa crear imágenes y vídeos", suffix: " profesionales con IA, pero no sabes qué herramientas usar ni cómo promptear." },
                                            { prefix: "Has probado IA alguna vez", suffix: ", pero te abruma la cantidad de funciones y no sabes por dónde empezar." },
                                            { prefix: "Quieres aprender a tu ritmo", suffix: ", sin teorías inútiles, solo lo que realmente vas a usar." },
                                            { prefix: "Te gustaría automatizar tareas básicas", suffix: ", pero todo te suena demasiado técnico." },
                                            { prefix: "Quieres mejorar tu perfil profesional", suffix: " y aprovechar la IA, pero no tienes claridad sobre qué aprender primero." },
                                            { prefix: "Buscas a alguien que te acompañe", suffix: " paso a paso y adapte la formación a tu nivel y objetivos." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-[#c8c8c8] text-base md:text-lg leading-relaxed">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                                <span>
                                                    <span className="text-white font-bold">{item.prefix}</span>
                                                    {item.suffix}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-white text-lg font-light pt-8 border-t border-[#2a2a2a]">
                                        Si te has identificado con una sola de estas frases, esta formación te va a cambiar el juego.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-24">
                        <h3 className="text-3xl font-light text-white mb-16 text-center">Lo que incluye este curso</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Users, title: "1 a 1 conmigo", text: "Formación directa, sin grabaciones ni intermediarios." },
                                { icon: Fingerprint, title: "100% Personalizado", text: "No hay temario fijo: se adapta a tus metas y ritmo." },
                                { icon: MapPin, title: "Diagnóstico inicial", text: "Analizo tu nivel y necesidades para crear un plan." },
                                { icon: Settings, title: "Herramientas esenciales", text: "Gemini, ChatGPT, NotebookLM, automatizaciones..." },
                                { icon: ImageIcon, title: "Creación de contenido", text: "Imágenes, vídeos, guiones, prompts, branding." },
                                { icon: Layers, title: "Casos prácticos reales", text: "Ejercicios guiados aplicados a tu proyecto personal." },
                                { icon: MessageSquare, title: "Tu primer chatbot", text: "Creamos uno juntos si lo deseas." },
                                { icon: HelpCircle, title: "Soporte continuo", text: "Resolución de dudas y acompañamiento durante el proceso." },
                                { icon: TrendingUp, title: "Asesoría profesional", text: "Cómo monetizar tus nuevas habilidades." }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl hover:border-[#82ff1f]/50 transition-colors group">
                                    <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center mb-6 border border-[#333] group-hover:border-[#82ff1f]/50 transition-colors">
                                        <item.icon className="h-7 w-7 text-[#82ff1f]" />
                                    </div>
                                    <h4 className="text-xl text-white font-medium mb-3">{item.title}</h4>
                                    <p className="text-[#a0a0a0] leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bloque 4: Por qué es personalizado */}
                    <div className="mb-24">
                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-10 md:p-14 rounded-3xl">
                            <h3 className="text-3xl font-light text-white mb-12 text-center">¿Por qué es <span className="text-[#82ff1f]">personalizado</span>?</h3>
                            <ul className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                                {[
                                    { icon: BarChart3, text: "Me adapto a tu nivel real" },
                                    { icon: Map, text: "Creamos un plan específico para tus objetivos" },
                                    { icon: MousePointerClick, text: "Tú eliges si quieres aprender contenido, automatización o todo" },
                                    { icon: Filter, text: "Aprendemos solo lo que necesitas, nada de relleno" },
                                    { icon: Briefcase, text: "Ejercicios prácticos basados en tu proyecto personal" },
                                    { icon: MessageCircle, text: "Correcciones y acompañamiento en tiempo real" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-6 group">
                                        <div className="mt-1 w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center flex-shrink-0 group-hover:border-white transition-colors">
                                            <item.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <span className="text-[#c8c8c8] text-xl pt-2">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Cierre / Autoridad */}
            <section className="py-24 bg-[#050505]">
                <div className="container px-6 md:px-12 lg:px-24">

                    {/* Storytelling - AJUSTE 9 */}
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-32">
                        <div>
                            <h2 className="text-3xl font-light text-white mb-8">Por qué formarte conmigo</h2>
                            <div className="prose prose-invert text-[#a0a0a0] leading-relaxed mb-8 space-y-4">
                                <p className="text-lg text-white font-medium">
                                    Soy Víctor Torres, consultor y desarrollador de soluciones de IA para empresas y particulares.
                                </p>
                                <p>
                                    Llevo más de 10 años en marketing y ventas, 5 liderando proyectos y equipos y 3 con Inteligencia artificial. No soy el mayor experto del mundo, no voy a venderte humo, pero si he aprendido mucho estos años y trabajado con la IA.
                                </p>
                                <p>
                                    Durante estos últimos años he trabajado con starups de IA ayudándoles a crecer, y también he implementado servicios de IA a negocios locales como clínicas o academias.
                                </p>
                                <p>
                                    Nunca me he llevado bien con los profesores. Me aburrían, siempre me han enseñado lo que ellos querían, no lo que yo necesitaba. Así que aquí no vas a tomar apuntes. Aquí vas a aprender a hacer cosas desde el minuto 1, mediante la práctica y los resultados reales.
                                </p>
                                <p className="text-white font-medium">
                                    Y totalmente adaptado a tí.
                                </p>
                                <p>
                                    Enseño lo que uso cada día con negocios de verdad: automatizaciones, agentes IA, generación de contenido, workflows y modelos personalizados, pero también te enseñaré lo que más me gusta de la IA, que es pasarmelo bien creando vídeos, imágenes y apps.
                                </p>
                                <p>
                                    Lo que enseño es exactamente lo que aplico, y lo que pretendo es que sepas usar la IA para tú mismo decidir por qué camino optar, porque es un mundo gigante.
                                </p>
                                <p className="text-xl text-white font-medium">
                                    Literalmente la mayor oportunidad del siglo.
                                </p>
                                <p className="text-xl text-white font-medium">
                                    La aprovechamos?
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "+40 proyectos digitales",
                                    "Especializado en asistentes",
                                    "Experto en automatizaciones",
                                    "0% humo — 100% práctica"
                                ].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-[#111] border border-[#2a2a2a] rounded-full text-xs text-white uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-[#2a2a2a]">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0031-1763512728087.JPG"
                                alt="Víctor Torres"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Bloque 5: CTA Premium (MOVED) */}
                    <div className="mb-32 text-center bg-[#111] border border-[#2a2a2a] rounded-3xl p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-8">
                            ¿Quieres aprender IA de verdad, <br /> sin humo y adaptado a ti?
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/34627281459"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg py-4 px-10 rounded-full transition-all hover:scale-105"
                            >
                                Quiero empezar
                            </a>
                            <a
                                href="/reserva"
                                className="inline-flex items-center justify-center bg-transparent text-white border border-[#333] font-medium text-lg py-4 px-10 rounded-full transition-all hover:bg-[#1a1a1a]"
                            >
                                Hablar contigo
                            </a>
                        </div>
                    </div>

                    {/* Timeline Proceso */}
                    <section className="py-12 bg-black">
                        <div className="container px-6">
                            <h2 className="text-3xl md:text-4xl font-light mb-20 text-center">Cómo funciona el proceso</h2>

                            <div className="relative max-w-4xl mx-auto">
                                <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                                {[
                                    { step: "01", title: "Reunión inicial", desc: "Hablamos 10 min para entender tu nivel." },
                                    { step: "02", title: "Plan personal de aprendizaje", desc: "Defino un temario adaptado a ti." },
                                    { step: "03", title: "Propuesta y Presupuesto", desc: "Te envío una propuesta económica con el plan detallado." },
                                    { step: "04", title: "Sesiones", desc: "Formación práctica compartiendo pantalla o en persona." },
                                    { step: "05", title: "Roadmap final", desc: "Guía para que sigas creciendo solo." }
                                ].map((item, i) => (
                                    <div key={i} className={`relative flex items-center gap-8 mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-[#1a1a1a] z-10" />

                                        <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                            <span className="text-xs font-bold text-[#82ff1f] tracking-widest mb-2 block">PASO {item.step}</span>
                                            <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                                            <p className="text-[#808080]">{item.desc}</p>
                                        </div>
                                        <div className="hidden md:block md:w-1/2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonios */}
                    <div className="mb-32">
                        <h3 className="text-2xl font-light text-white mb-12 text-center">Resultados de quienes ya se están formando</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    name: "Elena Martín",
                                    role: "Diseñadora Freelance",
                                    text: "En dos sesiones aprendí a usar IA para todo mi contenido. Ahora tardo 4 horas menos por proyecto.",
                                    image: "/images/testimonials/elena.png"
                                },
                                {
                                    name: "Carlos Suárez",
                                    role: "Dueño de restaurante",
                                    text: "Víctor nos enseñó a automatizar reservas. Hemos reducido llamadas y mejorado el servicio al cliente.",
                                    image: "/images/testimonials/carlos.png"
                                },
                                {
                                    name: "Laura Díaz",
                                    role: "Estudiante de Marketing",
                                    text: "No sabía nada de IA. Ahora hago imágenes profesionales, vídeos y automatizaciones básicas.",
                                    image: "/images/testimonials/laura.png"
                                }
                            ].map((testimonio, i) => (
                                <div key={i} className="bg-[#111] p-8 rounded-2xl border border-[#2a2a2a]">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#333]">
                                            <Image
                                                src={testimonio.image}
                                                alt={testimonio.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{testimonio.name}</p>
                                            <p className="text-xs text-[#808080]">{testimonio.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-[#c8c8c8] italic">"{testimonio.text}"</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Final Gigante */}
                    <div className="text-center max-w-4xl mx-auto mt-24">
                        <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                            Tu futuro profesional va a depender de cómo uses la IA.
                        </h2>
                        <p className="text-xl text-[#c8c8c8] mb-12">
                            Empieza hoy, aprende bien, aprende con alguien que ya lo aplica.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href="https://wa.me/34627281459"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-black font-semibold text-lg py-4 px-12 rounded-full transition-all hover:scale-105"
                            >
                                Quiero formarme
                            </a>
                            <a
                                href="/reserva"
                                className="inline-flex items-center justify-center bg-transparent text-white border border-[#333] font-medium text-lg py-4 px-12 rounded-full transition-all hover:bg-[#1a1a1a]"
                            >
                                Dudas
                            </a>
                        </div>
                        <p className="text-sm text-[#666] uppercase tracking-wider">
                            Formación 100% personalizada. Sin teoría vacía.
                        </p>
                    </div>

                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-24 bg-black border-t border-[#1a1a1a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <h3 className="text-2xl font-light text-white mb-12 text-center">Preguntas Frecuentes</h3>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { q: "¿Necesito saber algo antes de empezar?", a: "No. La formación se adapta a tu nivel, ya sea cero absoluto o avanzado." },
                            { q: "¿La formación sirve aunque no tenga experiencia en tecnología?", a: "Sí. Mi enfoque es práctico y sin tecnicismos innecesarios. Aprenderás a usar herramientas, no a programar." },
                            { q: "¿Qué pasa si quiero aprender algo muy específico?", a: "Perfecto. Al ser 1 a 1, diseñamos el temario solo con lo que te interesa." },
                            { q: "¿Cuánto dura la formación?", a: "Depende de tus objetivos. Puede ser desde una sesión intensiva hasta un acompañamiento de varias semanas." },
                            { q: "¿Es con Víctor directamente?", a: "Sí, todas las sesiones son conmigo, en directo y 1 a 1." }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#111] transition-colors">
                                    <span className="text-white font-medium">{faq.q}</span>
                                    <ChevronDown className="h-5 w-5 text-[#808080] group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 pt-0 text-[#a0a0a0] leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
