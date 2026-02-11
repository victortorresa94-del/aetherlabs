"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { useState, useEffect } from "react";
import LauraChatWidget from "@/components/laura-chat-widget";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function LauraAgentPage() {
    const [widgetMode, setWidgetMode] = useState<'call' | null>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showCallCTA, setShowCallCTA] = useState(false);

    useEffect(() => {
        if (widgetMode === 'call') {
            const timer = setTimeout(() => setShowCallCTA(true), 1500);
            return () => clearTimeout(timer);
        } else {
            setShowCallCTA(false);
        }
    }, [widgetMode]);

    useEffect(() => {
        if (!widgetMode) return;
        console.log("Activating Retell widget mode:", widgetMode);

        const cleanupWidget = () => {
            const scriptId = 'retell-widget';
            const existingScript = document.getElementById(scriptId);
            if (existingScript) existingScript.remove();

            const iframes = document.querySelectorAll('iframe[src*="retellai.com"]');
            iframes.forEach(iframe => iframe.remove());

            const containers = document.querySelectorAll('div[class*="retell"]');
            containers.forEach(div => div.remove());
        };

        cleanupWidget();

        const script = document.createElement('script');
        script.id = 'retell-widget';
        script.src = 'https://dashboard.retellai.com/retell-widget.js';
        script.async = true;

        script.setAttribute('data-public-key', 'public_key_29e6f793020ea429cdd0d');
        script.setAttribute('data-agent-id', 'agent_a9a331075e3b72c616cded5bbc');
        script.setAttribute('data-auto-open', 'true');
        script.setAttribute('data-widget', 'callback');
        script.setAttribute('data-title', 'Habla con Laura');
        script.setAttribute('data-phone-number', '+17759241199');
        script.setAttribute('data-countries', 'ES');
        script.setAttribute('data-color', '#000000'); // We will invert this in CSS to get white/black
        script.setAttribute('data-title', 'Habla con Laura');

        script.onload = () => console.log("Retell script loaded successfully");
        script.onerror = (e) => console.error("Retell script failed to load", e);

        document.head.appendChild(script);

        return cleanupWidget;
    }, [widgetMode]);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black overflow-x-hidden">
            <HeaderNavigation />

            {/* Retell Call CTA Bubble - Bottom Left */}
            <AnimatePresence>
                {showCallCTA && widgetMode === 'call' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed bottom-24 left-6 z-[9999] flex flex-col items-start pointer-events-none md:pointer-events-auto"
                    >
                        <div className="bg-white text-black px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-zinc-200 text-sm font-bold relative mb-2 max-w-[220px] text-center pointer-events-auto">
                            <span className="block mb-1">¡Hola! Soy Laura 👋</span>
                            <span className="text-zinc-500 font-medium">Haz clic aquí para hablar conmigo</span>
                            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-l border-b border-zinc-200 rotate-45"></div>
                        </div>
                        <button
                            onClick={() => setShowCallCTA(false)}
                            className="text-[10px] text-zinc-500 hover:text-white ml-2 pointer-events-auto bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm"
                        >
                            Cerrar
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <LauraChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto">
                        {/* Text */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-[60%]"
                        >
                            <div className="inline-flex items-center space-x-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#82ff1f] shadow-[0_0_10px_rgba(130,255,31,0.6)]" />
                                <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase">
                                    Agente IA
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                                Laura
                            </h1>
                            <p className="text-xl lg:text-2xl text-zinc-400 font-light mb-6">
                                Agente de atención y citas
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-10">
                                Diseñada para atender clientes, resolver dudas y agendar citas
                                sin saturar a tu equipo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => { setWidgetMode(null); setTimeout(() => setWidgetMode('call'), 50); }}
                                    className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#82ff1f] text-black font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(130,255,31,0.3)] gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    Llamar a Laura
                                </button>
                                <button
                                    onClick={() => setIsChatOpen(true)}
                                    className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-zinc-700 text-white font-medium text-base transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900 gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                    Chatear con Laura
                                </button>
                            </div>
                        </motion.div>

                        {/* Agent Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex justify-center lg:justify-end w-full lg:w-[40%]"
                        >
                            <div className="relative w-[340px] h-[460px] lg:w-[400px] lg:h-[540px] rounded-3xl overflow-hidden border border-zinc-800">
                                <Image
                                    src="/images/agentes/Laura.png"
                                    alt="Laura — Agente de atención y citas"
                                    fill
                                    className="object-cover object-[50%_20%] grayscale contrast-[1.1] brightness-90"
                                    priority
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.9) 100%)",
                                    }}
                                />
                                <div className="absolute bottom-6 left-6 z-10">
                                    <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase">
                                        Atención al Cliente
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* ═══════════════════════════════════════════════════
          SECTION 2 — WHAT THIS AGENT DOES
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 border-t border-zinc-900">
                <div className="container px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-4 block">
                                Funcionalidades
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-12">
                                Qué hace Laura
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Atiende clientes multicanal",
                                    desc: "Atiende clientes por WhatsApp, web y llamadas de forma natural y fluida.",
                                    icon: "💬",
                                },
                                {
                                    title: "Agenda citas automáticamente",
                                    desc: "Agenda citas directamente en tu sistema sin intervención humana.",
                                    icon: "📅",
                                },
                                {
                                    title: "Responde preguntas frecuentes",
                                    desc: "Responde preguntas frecuentes de forma clara y humana, como lo haría tu mejor empleado.",
                                    icon: "🎯",
                                },
                                {
                                    title: "Filtra consultas inteligentemente",
                                    desc: "Filtra consultas antes de llegar a tu equipo para que solo reciban lo importante.",
                                    icon: "🔍",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-[#82ff1f]/30 transition-all duration-500"
                                >
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 3 — IDEAL FOR
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 border-t border-zinc-900">
                <div className="container px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-4 block">
                                ¿Es para ti?
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-12">
                                Ideal para negocios que…
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Reciben muchas consultas diarias",
                                "Tienen citas o reservas",
                                "Necesitan atención rápida y constante",
                                "Quieren mejorar la experiencia del cliente",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4 p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50"
                                >
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#82ff1f]/10 flex items-center justify-center">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#82ff1f]" />
                                    </span>
                                    <span className="text-lg text-white">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 4 — HOW IT WORKS
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 border-t border-zinc-900 relative overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(130, 255, 31, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(130, 255, 31, 0.02) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="container px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-4 block">
                                Proceso
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-16">
                                Cómo trabaja en tu negocio
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "El cliente escribe o llama",
                                    desc: "Laura recibe el mensaje o la llamada y entiende la intención del cliente.",
                                },
                                {
                                    step: "02",
                                    title: "Atiende y recopila información",
                                    desc: "Hace las preguntas correctas para entender la necesidad real.",
                                },
                                {
                                    step: "03",
                                    title: "Agenda, responde o deriva",
                                    desc: "Según el caso: agenda una cita, resuelve la duda o escala a un humano.",
                                },
                                {
                                    step: "04",
                                    title: "Tu equipo solo recibe lo importante",
                                    desc: "Sin ruido, sin consultas repetitivas. Solo oportunidades reales.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="text-5xl font-bold text-[#82ff1f]/15 mb-4 font-mono">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-8 -right-4 text-zinc-700 text-2xl">
                                            →
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 5 — PERSONALITY & COMMUNICATION STYLE
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 border-t border-zinc-900">
                <div className="container px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-4 block">
                                    Personalidad
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                    Cómo se comunica
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    Laura no suena a robot. Se adapta a tu marca y habla como lo
                                    haría un miembro más de tu equipo.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {[
                                    {
                                        trait: "Tono cercano y profesional",
                                        desc: "Genera confianza desde el primer mensaje.",
                                    },
                                    {
                                        trait: "Lenguaje claro y sin tecnicismos",
                                        desc: "Cualquier persona la entiende a la primera.",
                                    },
                                    {
                                        trait: "Empática pero eficiente",
                                        desc: "Entiende al cliente pero va al grano.",
                                    },
                                    {
                                        trait: "Adaptable a tu marca",
                                        desc: "Aprende tu tono, tus productos y tu forma de hablar.",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeIn}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/50"
                                    >
                                        <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        <div>
                                            <p className="text-white font-semibold">{item.trait}</p>
                                            <p className="text-sm text-zinc-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 6 — INTEGRATIONS
      ═══════════════════════════════════════════════════ */}
            <section className="py-24 border-t border-zinc-900">
                <div className="container px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[#82ff1f] text-xs font-bold tracking-widest uppercase mb-4 block">
                                Compatibilidad
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Integraciones habituales
                            </h2>
                            <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto">
                                Laura se conecta con las herramientas que ya usas, sin
                                complicaciones.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "WhatsApp Business", icon: "📱" },
                                { name: "Formularios web", icon: "📋" },
                                { name: "Agenda / Citas", icon: "📅" },
                                { name: "CRM", icon: "🗂️" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-[#82ff1f]/30 transition-all duration-500"
                                >
                                    <div className="text-4xl">{item.icon}</div>
                                    <p className="text-white font-medium text-sm">{item.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
          SECTION 7 — CTA
      ═══════════════════════════════════════════════════ */}
            <section className="py-32 border-t border-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-black to-black pointer-events-none" />
                <div className="container px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            ¿Quieres que Laura trabaje en tu negocio?
                        </h2>
                        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                            Solicita una demo y te mostramos cómo Laura puede mejorar tu
                            atención al cliente desde el día uno.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#82ff1f] text-black font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(130,255,31,0.3)]"
                            >
                                Hablar con Laura
                            </button>
                            <Link
                                href="/#agentes"
                                className="inline-flex items-center justify-center h-14 px-10 rounded-full border border-zinc-700 text-white font-medium text-base transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900"
                            >
                                Ver otros agentes
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            <LauraChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </main>
    );
}
