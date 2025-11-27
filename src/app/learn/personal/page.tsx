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
    BarChart3,
    Map,
    MousePointerClick,
    Filter,
    HelpCircle,
    MessageCircle,
    Layers,
    Phone,
    Mic,
    Play,
    Laptop,
    RefreshCw,
    Calendar,
    Star,
    MapPin,
    Clock,
    Award,
    ChevronDown,
    ChevronUp,
    Fingerprint,
    ListOrdered,
    PenTool,
    Download
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PersonalTrainingPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden" ref={containerRef}>
            <HeaderNavigation />

            {/* 1. Hero Principal - ANIMATED */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
                <div className="container px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight"
                        >
                            Iniciación a la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a0a0a0] to-white animate-gradient-x">
                                Inteligencia Artificial
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-[#c8c8c8] font-light leading-relaxed mb-10 max-w-3xl mx-auto"
                        >
                            Aprende a usar la IA desde cero con un plan totalmente adaptado a tu nivel, tus objetivos y tu ritmo.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="/reserva"
                                className="group inline-flex items-center justify-center bg-white text-black font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                            >
                                Quiero formarme
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 1.5 Video Section - SCROLL EFFECT */}
            <section className="w-full bg-[#0a0a0a] border-b border-[#1a1a1a] py-12 md:py-20">
                <div className="container px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-black shadow-2xl border border-[#2a2a2a]"
                    >
                        <iframe
                            src="https://play.gumlet.io/embed/692606fc3c7ed780e07e4936"
                            className="w-full h-full absolute inset-0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            title="Gumlet Video"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Banner: Tú decides cuánto aprendes - MOVED BELOW VIDEO */}
            <section className="py-12 bg-[#050505]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 py-12"
                    >
                        <h3 className="text-5xl md:text-6xl font-light text-white text-left max-w-5xl">
                            Tú decides cuánto aprendes, tú decides cuánto pagas.
                        </h3>
                    </motion.div>

                    {/* Bloque 1: Esta formación es para ti si... - MOVED BELOW BANNER */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 w-full"
                    >
                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl overflow-hidden">
                            <div className="grid lg:grid-cols-[40%_60%]">
                                {/* Columna Imagen */}
                                <div className="relative min-h-[300px] lg:h-full border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
                                    <Image
                                        src="/images/learn/tech-guy-natural.png"
                                        alt="Sesión de formación IA"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                                </div>

                                {/* Columna Texto */}
                                <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl font-light text-white mb-6">
                                        Esta formación es para ti si…
                                    </h3>
                                    <ul className="space-y-4 mb-6">
                                        {[
                                            { prefix: "Ves que la IA avanza cada semana", suffix: " y sientes que te estás quedando atrás." },
                                            { prefix: "Te interesa crear imágenes y vídeos", suffix: " profesionales con IA, pero no sabes qué herramientas usar ni cómo promptear." },
                                            { prefix: "Has probado IA alguna vez", suffix: ", pero te abruma la cantidad de funciones y no sabes por dónde empezar." },
                                            { prefix: "Quieres aprender a tu ritmo", suffix: ", sin teorías inútiles, solo lo que realmente vas a usar." },
                                            { prefix: "Te gustaría automatizar tareas básicas", suffix: ", pero todo te suena demasiado técnico." },
                                            { prefix: "Quieres mejorar tu perfil profesional", suffix: " y aprovechar la IA, pero no tienes claridad sobre qué aprender primero." },
                                            { prefix: "Buscas a alguien que te acompañe", suffix: " paso a paso y adapte la formación a tu nivel y objetivos." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#c8c8c8] text-sm md:text-base leading-relaxed">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                                <span>
                                                    <span className="text-white font-bold">{item.prefix}</span>
                                                    {item.suffix}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-white text-base font-light pt-6 border-t border-[#2a2a2a]">
                                        Si te has identificado con una sola de estas frases, esta formación te va a cambiar el juego.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Lo que incluye este curso */}
            <section className="py-12 bg-[#050505] border-b border-[#1a1a1a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-3xl font-light text-white mb-16 text-center"
                    >
                        Lo que incluye este curso
                    </motion.h3>

                    {/* Mobile: Horizontal Scroll / Desktop: Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                    >
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
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="min-w-[280px] md:min-w-0 bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl hover:border-[#82ff1f]/50 transition-colors group snap-center"
                            >
                                <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center mb-6 border border-[#333] group-hover:border-[#82ff1f]/50 transition-colors">
                                    <item.icon className="h-7 w-7 text-[#82ff1f]" />
                                </div>
                                <h4 className="text-xl text-white font-medium mb-3">{item.title}</h4>
                                <p className="text-[#a0a0a0] leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. Curso: Iniciación a la IA */}
            <section className="py-24 bg-[#050505]">
                <div className="container px-6 md:px-12 lg:px-24">

                    {/* Bloque 2: Qué aprenderás */}
                    <div className="mb-24">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-light text-white mb-12 text-center"
                        >
                            ¿Qué aprenderás exactamente?
                        </motion.h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {[
                                {
                                    icon: Brain,
                                    title: "Fundamentos de IA",
                                    desc: "Entenderás qué es realmente la IA y cómo usarla sin perderte.",
                                    items: ["Modelos modernos", "Qué es un LLM", "Razonamiento", "Expectativas vs Realidad"],
                                    image: "/images/learn/fundamentos.jpg"
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Prompting PRO",
                                    desc: "Aprenderás a pedirle cosas a la IA para que te dé exactamente lo que quieres.",
                                    items: ["Pedir correctamente", "Alta precisión", "Texto, imagen y vídeo", "Estructuras avanzadas"],
                                    image: "/images/learn/prompting.jpg"
                                },
                                {
                                    icon: ImageIcon,
                                    title: "Imágenes (NanoBanana)",
                                    desc: "Crearás imágenes realistas y profesionales para tu marca o proyectos.",
                                    items: ["Fotorealismo", "Fijar estilos", "Evitar errores", "Sets de marca"],
                                    image: "/images/learn/nano-banana-user.jpg"
                                },
                                {
                                    icon: Video,
                                    title: "Video con IA",
                                    desc: "Generarás vídeos impactantes desde cero para redes o publicidad.",
                                    items: ["Generar desde cero", "Herramientas top", "Ads / Lifestyle", "Consistencia"],
                                    image: "",
                                    video: "/videos/hero.mp4"
                                },
                                {
                                    icon: Laptop,
                                    title: "Hacer tu web con IA",
                                    desc: "Tendrás tu propia web lista y publicada en cuestión de minutos.",
                                    items: ["Crear estructura", "Generar copy", "Imágenes y assets", "Publicar en minutos"],
                                    image: "/images/learn/web.jpg"
                                },
                                {
                                    icon: Zap,
                                    title: "Tu primer Chatbot",
                                    desc: "Crearás un asistente que atienda a tus clientes automáticamente.",
                                    items: ["Arquitectura simple", "Chatbot operativo", "Uso personal/negocio", "Integración básica"],
                                    image: "/images/learn/chatbot-lifestyle.png"
                                },
                                {
                                    icon: Settings,
                                    title: "Automatización",
                                    desc: "Dejarás de hacer tareas repetitivas conectando tus apps favoritas.",
                                    items: ["Tareas reales", "n8n, Make, Zapier", "Tu primera auto", "Ahorro de tiempo"],
                                    image: "/images/learn/automatizacion.jpg"
                                },
                                {
                                    icon: Briefcase,
                                    title: "Salidas laborales",
                                    desc: "Descubrirás cómo monetizar estas nuevas habilidades en el mercado.",
                                    items: ["Nuevos trabajos", "Cómo entrar al sector", "Habilidades cotizadas", "Futuro profesional"],
                                    image: "/images/learn/trabajo.jpg"
                                }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#444] transition-colors group flex flex-col"
                                >
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
                                            {/* @ts-ignore */}
                                            <card.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6 pt-2 flex-1 flex flex-col">
                                        <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                                        {/* @ts-ignore */}
                                        <p className="text-sm text-[#a0a0a0] mb-4 leading-relaxed">{card.desc}</p>
                                        <ul className="space-y-2 mt-auto">
                                            {card.items.map((item, j) => (
                                                <li key={j} className="text-sm text-[#808080] flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-[#444]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* 2. Formación personalizada 1:1 para personas - MOVED HERE */}
                    <div className="mb-24">
                        <div className="bg-[#0a0a0a] rounded-3xl p-6 md:p-16 border border-[#2a2a2a] relative overflow-hidden">
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                >
                                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#111] text-xs font-medium tracking-wider text-[#a0a0a0] mb-6 uppercase">
                                        Mentoria 1 a 1
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                                        Lo que conseguirás después de la formación
                                    </h2>

                                    <div className="space-y-6 mb-10">
                                        {[
                                            "Crear imágenes y vídeos profesionales sin perder horas.",
                                            "Automatizar tareas que te quitan tiempo cada semana.",
                                            "Usar IA con precisión — no respuestas basura.",
                                            "Dominar herramientas modernas (NanoBanana, Sora, NotebookLM, Perplexity…).",
                                            "Multiplicar tu productividad x3.",
                                            "Tener claridad total sobre qué IA usar para tu trabajo o sector.",
                                            "Tener tu propio mini proyecto hecho (chatbot, automatización, web o contenido visual)."
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="mt-1 w-6 h-6 rounded-full bg-[#82ff1f]/10 flex items-center justify-center flex-shrink-0 border border-[#82ff1f]/20">
                                                    <CheckCircle2 className="h-4 w-4 text-[#82ff1f]" />
                                                </div>
                                                <span className="text-[#c8c8c8] text-lg leading-relaxed">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="/reserva"
                                            className="inline-flex items-center justify-center bg-white text-black font-semibold text-base py-4 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                        >
                                            Quiero conseguir esto
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative hidden lg:block"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />
                                    <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-[#2a2a2a]">
                                        <Image
                                            src="/images/learn/training-session-boho.png"
                                            alt="Resultados formación IA"
                                            fill
                                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>


                    {/* Cómo funciona la formación 1:1 - REDESIGNED */}
                    <div className="mb-24">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl font-light text-white mb-16 text-center"
                        >
                            ¿Cómo funciona la formación 1:1?
                        </motion.h3>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-5 md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                        >
                            {[
                                {
                                    step: "01",
                                    title: "Fundamentos",
                                    icon: Brain,
                                    items: ["Qué es realmente la IA moderna", "Qué puedes y no puedes hacer", "Modelos, límites y buenas prácticas"]
                                },
                                {
                                    step: "02",
                                    title: "Herramientas",
                                    icon: Settings,
                                    items: ["Revisión de apps según su caso", "NotebookLM, Perplexity, ChatGPT", "Cómo usarlas en su nicho"]
                                },
                                {
                                    step: "03",
                                    title: "Imagen + Vídeo",
                                    icon: ImageIcon,
                                    items: ["Cómo crear imágenes profesionales", "NanoBanana PRO", "Sora, Kling, Runway"]
                                },
                                {
                                    step: "04",
                                    title: "Tu Proyecto",
                                    icon: Laptop,
                                    items: ["Automatizar tareas reales", "Crear un chatbot propio", "Construir una mini web con IA"]
                                },
                                {
                                    step: "05",
                                    title: "Soporte",
                                    icon: MessageCircle,
                                    items: ["Resolución de dudas por WhatsApp", "Correcciones de ejercicios", "Guías personalizadas"]
                                }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="min-w-[280px] md:min-w-0 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 relative group hover:border-[#82ff1f]/50 transition-colors snap-center flex flex-col"
                                >
                                    <div className="absolute top-4 right-4 text-4xl font-bold text-[#1a1a1a] group-hover:text-[#82ff1f]/10 transition-colors">
                                        {card.step}
                                    </div>
                                    <div className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center mb-6 border border-[#333] group-hover:border-[#82ff1f] transition-colors relative z-10">
                                        <card.icon className="h-6 w-6 text-white group-hover:text-[#82ff1f] transition-colors" />
                                    </div>
                                    <h4 className="text-xl text-white font-medium mb-4">{card.title}</h4>
                                    <ul className="space-y-3 flex-1">
                                        {card.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-[#a0a0a0] text-sm">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-[#333] group-hover:bg-[#82ff1f] transition-colors flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Timeline Proceso - MOVED HERE */}
                    <div className="mb-24">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl font-light mb-20 text-center"
                        >
                            Cómo funciona el proceso
                        </motion.h2>

                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                            {[
                                { step: "01", title: "Reunión inicial", desc: "Hablamos 10 min para entender tu nivel." },
                                { step: "02", title: "Plan personal de aprendizaje", desc: "Defino un temario adaptado a ti." },
                                { step: "03", title: "Propuesta y Presupuesto", desc: "Te envío una propuesta económica con el plan detallado." },
                                { step: "04", title: "Sesiones", desc: "Formación práctica compartiendo pantalla o en persona." },
                                { step: "05", title: "Roadmap final", desc: "Guía para que sigas creciendo solo." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`relative flex items-center gap-8 mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-[#1a1a1a] z-10" />

                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                        <span className="text-xs font-bold text-[#82ff1f] tracking-widest mb-2 block">PASO {item.step}</span>
                                        <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                                        <p className="text-[#808080]">{item.desc}</p>
                                    </div>
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bloque 4: Por qué es personalizado - MOVED HERE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-24"
                    >
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
                    </motion.div>
                </div>
            </section>

            {/* 5. Cierre / Autoridad */}
            <section className="py-12 bg-[#050505]">
                <div className="container px-6 md:px-12 lg:px-24">

                    {/* Storytelling */}
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-32 mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
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
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-[#2a2a2a]"
                        >
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0031-1763512728087.JPG"
                                alt="Víctor Torres"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>


                    {/* Herramientas IA */}
                    <div className="mb-32">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-2xl font-light text-white mb-4 text-center"
                        >
                            Herramientas que he creado
                        </motion.h3>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-[#a0a0a0] text-center mb-12"
                        >
                            Estas herramientas algunas están en fase de desarrollo.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {[
                                {
                                    icon: ImageIcon,
                                    title: "Generador de fotos de producto",
                                    desc: "Sube una foto de tu producto y la IA genera un entorno profesional y realista para marketing.",
                                    tag: "Imagen Generativa",
                                    link: "https://generador-de-fotos-de-productos-159705655877.us-west1.run.app"
                                },
                                {
                                    icon: Users,
                                    title: "Generador de influencers",
                                    desc: "Crea modelos e influencers virtuales consistentes para campañas de publicidad y redes sociales.",
                                    tag: "IA Generativa",
                                    link: "https://creador-de-influencers-v1-159705655877.us-west1.run.app"
                                },
                                {
                                    icon: Video,
                                    title: "RestaurAI",
                                    desc: "LLM personalizado para restaurantes con múltiples capacidades: gestión, marketing y operaciones.",
                                    tag: "LLM Personalizado",
                                    link: "https://restaur-ai-159705655877.us-west1.run.app"
                                },
                                {
                                    icon: BookOpen,
                                    title: "Chleopatra",
                                    desc: "Web app educativa que narra historias históricas con vídeos generados por IA y voz en off.",
                                    tag: "Storytelling",
                                    link: "https://chleopatra-history-reimagined-159705655877.us-west1.run.app"
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Jason",
                                    desc: "El asistente inteligente que vive en esta web. Responde dudas sobre mis servicios y agenda reuniones.",
                                    tag: "Chatbot",
                                    link: "/"
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Numa (Suma Salut)",
                                    desc: "Asistente de salud y bienestar implementado en clínica médica para triaje y atención al paciente.",
                                    tag: "Chatbot Salud",
                                    link: "http://sumasalut.cat"
                                },
                                {
                                    icon: Fingerprint,
                                    title: "Skinflow",
                                    desc: "Analizador facial en tiempo real que recomienda rutinas de skincare y maquillaje personalizadas.",
                                    tag: "Visión + E-commerce",
                                    link: "#"
                                },
                                {
                                    icon: Phone,
                                    title: "Atención al cliente Rostisseria",
                                    desc: "Agente de voz (Nuria) que gestiona pedidos telefónicos, stock y dudas en una Rostisseria.",
                                    tag: "Agente de Voz",
                                    link: "https://vapi.ai?demo=true&shareKey=a3a9c14d-7879-4110-8d47-cd8c13fe516b&assistantId=cbf28b5e-d819-465c-8a4c-7bf8228b4aeb"
                                },
                                {
                                    icon: Mic,
                                    title: "Project Manager ClickUp",
                                    desc: "Agente conectado a Telegram y ClickUp para gestionar tareas y proyectos mediante notas de voz.",
                                    tag: "Productividad",
                                    link: "#"
                                }
                            ].map((project, i) => (
                                <motion.a
                                    key={i}
                                    href={project.link}
                                    target={project.link === "#" || project.link === "/" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02, borderColor: "rgba(130, 255, 31, 0.5)" }}
                                    className={`bg-[#111] p-6 rounded-2xl border border-[#2a2a2a] transition-all group block ${project.link !== "#" ? "hover:bg-[#161616]" : "opacity-80 cursor-not-allowed"}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-[#333] group-hover:border-[#82ff1f]/30 transition-colors">
                                            {/* @ts-ignore */}
                                            <project.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider bg-[#1a1a1a] text-[#808080] px-2 py-1 rounded-md border border-[#333]">
                                            {project.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-medium text-white mb-2 group-hover:text-[#82ff1f] transition-colors">{project.title}</h4>
                                    <p className="text-sm text-[#a0a0a0] leading-relaxed">{project.desc}</p>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Garantía */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-32 max-w-3xl mx-auto"
                    >
                        <div className="bg-gradient-to-b from-[#111] to-black border border-[#333] p-10 rounded-3xl text-center relative overflow-hidden group hover:border-[#82ff1f]/30 transition-colors">
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-[#82ff1f]/5 transition-colors duration-700" />
                            <ShieldCheck className="w-16 h-16 text-white mx-auto mb-6" />
                            <h3 className="text-3xl font-light text-white mb-4">Garantía sin tonterías</h3>
                            <p className="text-xl text-[#c8c8c8] leading-relaxed mb-0">
                                Si en la primera sesión no te aporto valor real, te devuelvo el dinero.
                                <br />
                                <span className="text-white font-medium">Sin preguntas. Sin historias.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Testimonios */}
                    <div className="mb-32">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-2xl font-light text-white mb-12 text-center"
                        >
                            Resultados de quienes ya se están formando
                        </motion.h3>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                        >
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
                                },
                                {
                                    name: "Marc Ribas",
                                    role: "Arquitecto",
                                    text: "La IA me ayuda a visualizar proyectos en minutos. Lo que antes tardaba días, ahora es instantáneo.",
                                    image: "/images/testimonials/marc.png"
                                },
                                {
                                    name: "Sofía Herrera",
                                    role: "Content Manager",
                                    text: "He multiplicado mi producción de contenido x3 sin bajar la calidad. Increíble.",
                                    image: "/images/testimonials/sofia.png"
                                },
                                {
                                    name: "David P.",
                                    role: "Consultor",
                                    text: "La claridad que te da Víctor sobre qué herramientas usar es impagable. Ahorras meses de prueba y error.",
                                    image: "/images/testimonials/david.png"
                                }
                            ].map((testimonio, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="min-w-[300px] md:min-w-0 bg-[#111] p-8 rounded-2xl border border-[#2a2a2a] snap-center"
                                >
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Plazas Limitadas */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 max-w-2xl mx-auto"
                    >
                        <div className="bg-[#111] border border-[#82ff1f]/30 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-[#82ff1f]/60 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f] to-transparent" />
                            <h4 className="text-2xl text-white font-medium mb-4">Plazas limitadas</h4>
                            <p className="text-[#c8c8c8] text-lg mb-6">
                                Solo <span className="text-[#82ff1f] font-bold text-xl">6 plazas</span> disponibles este mes para garantizar atención 100% personalizada.
                            </p>
                            <div className="w-full bg-[#2a2a2a] h-3 rounded-full overflow-hidden mb-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="bg-[#82ff1f] h-full shadow-[0_0_10px_#82ff1f]"
                                />
                            </div>
                            <p className="text-xs text-[#666] uppercase tracking-wider">Alta demanda</p>
                        </div>
                    </motion.div>

                    {/* CTA Final Gigante */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mt-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                            Tu futuro profesional va a depender de cómo uses la IA.
                        </h2>
                        <p className="text-xl text-[#c8c8c8] mb-12">
                            Empieza hoy, aprende bien, aprende con alguien que ya lo aplica.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href="/reserva"
                                className="inline-flex items-center justify-center bg-white text-black font-bold text-xl py-5 px-12 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                            >
                                Aprende Inteligencia Artificial HOY
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </a>
                        </div>
                        <p className="text-sm text-[#666] uppercase tracking-wider">
                            Formación 100% personalizada. Sin teoría vacía.
                        </p>
                    </motion.div>

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
        </main >
    );
}
