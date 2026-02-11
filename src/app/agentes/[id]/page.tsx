"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { agentsData } from "@/data/agents";
import { use, useState, useEffect } from "react";
import Script from "next/script";
import LauraChatWidget from "@/components/laura-chat-widget";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AgentPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const agent = agentsData.find((a) => a.id === id);
    const [widgetMode, setWidgetMode] = useState<'call' | null>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showCallCTA, setShowCallCTA] = useState(false);

    useEffect(() => {
        if (widgetMode === 'call' && agent?.id === 'laura') {
            const timer = setTimeout(() => setShowCallCTA(true), 1500);
            return () => clearTimeout(timer);
        } else {
            setShowCallCTA(false);
        }
    }, [widgetMode, agent?.id]);

    useEffect(() => {
        if (!widgetMode || agent?.id !== 'laura') return;
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
    }, [widgetMode, agent?.id]);

    if (!agent) return notFound();

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
                        <div className="bg-white text-black px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-zinc-200 text-sm font-bold relative mb-2 max-w-[220px] text-center pointer-events-auto animate-bounce-subtle">
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

            {/* ═══════════════════════════════════════
                SECTION 1 — HERO (Split Layout)
            ═══════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex flex-col lg:flex-row border-b border-white/10 pt-20 lg:pt-0">
                {/* Left: Portrait */}
                <div className="w-full lg:w-[40%] relative bg-zinc-950 overflow-hidden group min-h-[50vh] lg:min-h-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80 lg:opacity-40" />
                    <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover object-[50%_20%] grayscale contrast-[1.1] brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                    />
                    {/* Status Indicator */}
                    <div className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#82ff1f] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#82ff1f]" />
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#82ff1f]">Activo ahora</span>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-20 bg-black relative">
                    <div className="absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
                        <span className="text-[#82ff1f] font-mono text-sm tracking-[0.2em] mb-4 uppercase block">
                            Modelo {agent.model}
                        </span>
                        <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-2">
                            {agent.name}
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-light text-zinc-400 mb-8 border-l-2 border-[#82ff1f] pl-4">
                            {agent.role}
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-12">
                            {agent.heroDescription}
                        </p>

                        {agent.id === 'laura' ? (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        console.log("Start Call clicked");
                                        setWidgetMode(null);
                                        setTimeout(() => setWidgetMode('call'), 50);
                                    }}
                                    className="bg-[#82ff1f] text-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(130,255,31,0.3)] flex items-center justify-center gap-2 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    Llamar a Laura
                                </button>
                                <button
                                    onClick={() => {
                                        console.log("Start Chat clicked");
                                        setIsChatOpen(true);
                                    }}
                                    className="border border-white/20 text-white font-medium text-lg px-8 py-4 rounded-lg hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                    Chatear con Laura
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contacto"
                                    className="bg-[#82ff1f] text-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(130,255,31,0.3)] flex items-center justify-center gap-2 group"
                                >
                                    Solicitar demo
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                                <Link
                                    href="/agentes"
                                    className="border border-white/20 text-white font-medium text-lg px-8 py-4 rounded-lg hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    Ver otros agentes
                                </Link>
                            </div>
                        )}

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            {agent.stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 2 — CAPABILITIES
            ═══════════════════════════════════════ */}
            <section className="py-24 px-6 bg-zinc-950 border-b border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <h3 className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-2">Capacidades</h3>
                            <h2 className="text-4xl font-bold text-white">Lo que {agent.name} hace por ti</h2>
                        </div>
                        <div className="hidden md:block w-32 h-px bg-white/20 mb-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {agent.capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group p-8 bg-black border border-white/10 rounded-lg hover:border-[#82ff1f]/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-[#82ff1f]/10 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-[#82ff1f] group-hover:grayscale transition-colors">
                                    {cap.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-white">{cap.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 3 — IDEAL FOR
            ═══════════════════════════════════════ */}
            <section className="py-24 bg-black border-b border-white/10 overflow-hidden relative">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-zinc-950 to-transparent opacity-30 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/3"
                    >
                        <h3 className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-4">Casos de Uso</h3>
                        <h2 className="text-5xl font-bold leading-tight">
                            Ideal para negocios con{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
                                alto volumen.
                            </span>
                        </h2>
                    </motion.div>
                    <div className="md:w-2/3 grid gap-6">
                        {agent.useCases.map((uc, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group flex items-center gap-6 p-6 border-b border-white/10 hover:border-[#82ff1f] transition-colors cursor-default"
                            >
                                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                    {uc.emoji}
                                </span>
                                <div>
                                    <h4 className="text-2xl font-bold text-white group-hover:text-[#82ff1f] transition-colors">
                                        {uc.title}
                                    </h4>
                                    <p className="text-zinc-500 mt-1">{uc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 4 — WORKFLOW
            ═══════════════════════════════════════ */}
            <section className="py-24 px-6 bg-zinc-950 border-b border-white/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h3 className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-4">Workflow</h3>
                        <h2 className="text-3xl md:text-4xl font-bold">Cómo gestiona {agent.name} una solicitud</h2>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {agent.workflow.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="bg-black p-6 rounded-lg border border-white/10 text-center group hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="w-10 h-10 bg-zinc-950 border border-white/20 text-white font-mono font-bold rounded flex items-center justify-center mx-auto mb-6 group-hover:border-[#82ff1f] group-hover:text-[#82ff1f] transition-colors">
                                        {step.step}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm text-zinc-500">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 5 — PERSONALITY
            ═══════════════════════════════════════ */}
            <section className="py-24 bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    {/* Chat example card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-xl overflow-hidden border border-white/10">
                            <div className="relative h-80">
                                <Image
                                    src={agent.image}
                                    alt={agent.name}
                                    fill
                                    className="object-cover object-top grayscale opacity-60 hover:opacity-80 transition-opacity duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-zinc-950/80 backdrop-blur border border-white/10 p-4 rounded-lg">
                                    <p className="text-sm italic text-zinc-300">
                                        &quot;Hola, veo que estás interesado en nuestros servicios. ¿Te gustaría agendar una consulta personalizada para esta semana?&quot;
                                    </p>
                                    <p className="text-xs text-[#82ff1f] mt-2 font-bold uppercase">— {agent.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-full h-full border border-[#82ff1f]/20 rounded-xl z-0" />
                    </motion.div>

                    {/* Personality traits */}
                    <div>
                        <h3 className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-4">Personalidad</h3>
                        <h2 className="text-4xl font-bold mb-8">Humana en el trato, máquina en la ejecución.</h2>
                        <ul className="space-y-6">
                            {agent.personality.map((trait, i) => (
                                <motion.li
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4"
                                >
                                    <span className="text-[#82ff1f] mt-1 text-lg">✓</span>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{trait.title}</h4>
                                        <p className="text-zinc-500 text-sm mt-1">{trait.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 6 — INTEGRATIONS MARQUEE
            ═══════════════════════════════════════ */}
            <section className="py-16 bg-zinc-950 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-zinc-500 text-sm uppercase tracking-widest mb-10">
                        {agent.name} se conecta con tus herramientas favoritas
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-marquee-agent whitespace-nowrap">
                            {[...Array(2)].map((_, setIdx) => (
                                <div key={setIdx} className="flex items-center gap-12 mx-6 shrink-0">
                                    {[
                                        { name: "WhatsApp", slug: "whatsapp" },
                                        { name: "Google Calendar", slug: "googlecalendar" },
                                        { name: "HubSpot", slug: "hubspot" },
                                        { name: "Salesforce", slug: "salesforce" },
                                        { name: "Slack", slug: "slack" },
                                        { name: "Zapier", slug: "zapier" },
                                        { name: "Calendly", slug: "calendly" },
                                        { name: "Stripe", slug: "stripe" },
                                        { name: "Meta", slug: "meta" },
                                        { name: "OpenAI", slug: "openai" },
                                        { name: "Notion", slug: "notion" },
                                        { name: "Zendesk", slug: "zendesk" },
                                    ].map((logo) => (
                                        <div
                                            key={logo.slug}
                                            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-90 transition-opacity duration-300"
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={`https://cdn.simpleicons.org/${logo.slug}/white`}
                                                alt={logo.name}
                                                className="h-8 w-auto"
                                                loading="lazy"
                                            />
                                            <span className="text-[10px] text-zinc-600 font-medium tracking-wide">
                                                {logo.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes marquee-agent {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee-agent {
                            animation: marquee-agent 30s linear infinite;
                        }
                    `}</style>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 7 — FINAL CTA
            ═══════════════════════════════════════ */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[40rem] h-[40rem] bg-[#82ff1f]/5 rounded-full blur-[128px]" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                            ¿Quieres que <span className="text-[#82ff1f]">{agent.name}</span> trabaje en tu negocio?
                        </h2>
                        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                            Configuración en menos de 24 horas. Entrena a {agent.name} con tus datos y empieza a automatizar hoy mismo.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link
                                href="/contacto"
                                className="bg-[#82ff1f] text-black font-bold text-lg px-10 py-5 rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(130,255,31,0.4)] transform hover:scale-105"
                            >
                                Contratar a {agent.name}
                            </Link>
                            <Link
                                href="/agentes"
                                className="bg-transparent border border-white/20 text-white font-medium text-lg px-10 py-5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                            >
                                Ver otros agentes
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-zinc-600">
                            Sin compromiso • Implementación en 7 días
                        </p>
                    </motion.div>
                </div>
            </section>



            <Footer />
            <LauraChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </main>
    );
}
