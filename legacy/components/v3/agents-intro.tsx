'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Phone, Globe, Instagram, Mic, Target, Zap, Brain, Layers } from "lucide-react";

// Animation variants for icons
const iconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } as any }
};

const AgentsIntro = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 lg:px-12 overflow-hidden bg-white text-zinc-900 border-t border-zinc-200">
            <div className="w-full max-w-[100vw] overflow-hidden relative">
                {/* Tech Grid Background (Light Mode) */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                ></div>

                {/* Ambient Background Glow (Subtle Green) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#82ff1f]/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Left Column: Narrative (Sticky) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5 flex flex-col justify-center h-full pt-8 lg:sticky lg:top-32"
                        >
                            <div className="inline-flex items-center space-x-2 mb-6 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 w-fit">
                                <span className="w-2 h-2 rounded-full bg-[#82ff1f]"></span>
                                <span className="text-zinc-600 text-sm font-bold tracking-widest uppercase">AETHER AI Agents</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-8 text-black tracking-tight">
                                <span className="font-medium">Agentes de IA:</span> <br />
                                Tu equipo de ventas que{" "}
                                <span className="relative inline-block">
                                    nunca duerme.
                                    <svg className="absolute w-full h-2 bottom-1 left-0 text-[#82ff1f] opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                            </h2>

                            <p className="text-lg text-zinc-600 leading-relaxed font-light mb-10 max-w-md">
                                Los agentes son sistemas inteligentes diseñados para automatizar la captación, cualificación y cierre de oportunidades comerciales en tiempo real. Deja de perder leads fuera del horario laboral.
                            </p>

                            <div className="flex items-center space-x-4 group cursor-pointer w-fit">
                                <Link href="/agentes" className="text-black font-medium border-b border-[#82ff1f] pb-0.5 hover:text-[#82ff1f] transition-colors duration-300">
                                    Explorar agentes
                                </Link>
                                <span className="text-[#82ff1f] group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </motion.div>

                        {/* Right Column: Capabilities Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid gap-6">

                                {/* Capability Card 1: Multicanalidad */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    className="group relative p-6 rounded-xl bg-white border border-zinc-200 hover:border-[#82ff1f] transition-all duration-500 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                                        <div className="flex-shrink-0 p-2.5 rounded-lg bg-zinc-100 text-zinc-600 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-1">Multicanalidad</h3>
                                            <p className="text-zinc-500 font-light leading-relaxed text-sm mb-3">Conectados a WhatsApp, Instagram, Web y Telefonía. Un solo cerebro gestionando todas tus puertas de entrada.</p>

                                            {/* Animated Icons */}
                                            <div className="flex items-center gap-4 mt-2 pt-3 border-t border-zinc-100">
                                                {[
                                                    { icon: MessageCircle, label: "Mensajería" },
                                                    { icon: Instagram, label: "Redes Sociales" },
                                                    { icon: Globe, label: "Website" },
                                                    { icon: Phone, label: "Telefonía" }
                                                ].map((Item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        whileHover="hover"
                                                        initial="initial"
                                                        variants={iconVariants}
                                                        className="text-zinc-400 hover:text-[#82ff1f] cursor-pointer"
                                                        title={Item.label}
                                                    >
                                                        <Item.icon className="w-5 h-5" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Capability Card 2: Inteligencia Estratégica (Merged) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="group relative p-6 rounded-xl bg-white border border-zinc-200 hover:border-[#82ff1f] transition-all duration-500 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                                        <div className="flex-shrink-0 p-2.5 rounded-lg bg-zinc-100 text-zinc-600 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                            <Brain className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-black mb-1">Inteligencia Estratégica</h3>
                                            <p className="text-zinc-500 font-light leading-relaxed text-sm">
                                                Entienden contexto, resuelven dudas complejas y hablan como humanos. Cada uno está entrenado con su propia personalidad y objetivos específicos como venta, atención empática o soporte técnico.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Capability Card 3: Integración Total */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="group relative p-6 rounded-xl bg-white border border-zinc-200 hover:border-[#82ff1f] transition-all duration-500 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                                        <div className="flex-shrink-0 p-2.5 rounded-lg bg-zinc-100 text-zinc-600 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                            <Layers className="w-6 h-6" />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="text-lg font-medium text-black mb-1">Integración Total</h3>
                                            <p className="text-zinc-500 font-light leading-relaxed text-sm mb-3">Sincronización instantánea con tu CRM, ERP y flujos de trabajo existentes.</p>
                                            {/* Integration Icons */}
                                            <div className="flex items-center gap-4 flex-wrap">
                                                {[
                                                    { name: "WordPress", svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.34.308-2.607.856-3.738l4.71 12.906C5.447 19.527 3.009 16.036 3.009 12zm8.991 8.99c-.96 0-1.886-.146-2.76-.414l2.93-8.513 3.003 8.227c.02.048.042.093.067.137-1.024.363-2.12.563-3.24.563zm1.33-13.216c.588-.031 1.117-.094 1.117-.094.526-.062.464-.837-.063-.806 0 0-1.583.125-2.602.125-.953 0-2.556-.125-2.556-.125-.527-.031-.59.775-.063.806 0 0 .499.063 1.025.094l1.522 4.17-2.137 6.407L6.86 5.774c.588-.031 1.117-.094 1.117-.094.526-.062.464-.837-.063-.806 0 0-1.583.125-2.556.125-.18 0-.392-.004-.614-.013C6.348 3.484 9.015 2.01 12 2.01c2.221 0 4.244.847 5.766 2.235-.037-.002-.072-.008-.11-.008-1.004 0-1.714.872-1.714 1.81 0 .84.485 1.55 1.002 2.39.389.672.842 1.533.842 2.778 0 .862-.331 1.862-.767 3.256l-1.005 3.356-3.683-10.953z" /></svg> },
                                                    { name: "HubSpot", svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.002 8.044V5.209a2.08 2.08 0 001.2-1.876v-.062a2.085 2.085 0 00-2.082-2.082h-.063a2.085 2.085 0 00-2.082 2.082v.062c0 .78.436 1.453 1.075 1.808v2.903a5.278 5.278 0 00-2.408 1.107l-6.373-4.96a2.03 2.03 0 00.058-.463 2.032 2.032 0 10-2.032 2.032c.34 0 .656-.088.938-.235l6.26 4.872a5.298 5.298 0 00-.627 2.504 5.31 5.31 0 00.72 2.678l-1.89 1.89a1.822 1.822 0 00-.537-.088 1.84 1.84 0 101.84 1.84 1.82 1.82 0 00-.088-.537l1.862-1.862a5.305 5.305 0 103.229-9.793zm-1.012 7.677a2.572 2.572 0 110-5.144 2.572 2.572 0 010 5.144z" /></svg> },
                                                    { name: "Shopify", svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.337 3.415c-.022-.165-.174-.247-.288-.259-.114-.013-2.48-.182-2.48-.182s-1.644-1.631-1.83-1.817c-.186-.186-.55-.13-.69-.087-.003.001-.376.116-.97.299A5.607 5.607 0 007.564.47C6.972.018 6.28-.157 5.717.127c-.01.005-.018.01-.027.015-.613.314-.893 1.08-1.02 1.727-.17.86-.214 1.664-.228 1.836-1.035.32-1.756.543-1.846.573-.559.172-.576.19-.649.717C1.877 5.5.5 15.875.5 15.875l11.5 2.125 6-1.5s-2.64-12.919-2.663-13.085zM10.65 2.073l-1.57.486c0-.017.002-.032.002-.05 0-.686-.095-1.236-.253-1.664.63.113 1.1.762 1.82 1.228zm-2.91-1.072c.17.395.28.955.28 1.72 0 .025-.002.045-.002.068l-2.045.633c.394-1.508.962-2.185 1.767-2.421zm-.906-.39c.123 0 .243.04.362.118-.996.47-2.064 1.654-2.518 4.014l-1.622.502c.45-2.39 1.95-4.542 3.778-4.634z" /></svg> },
                                                    { name: "Slack", svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" /></svg> },
                                                    { name: "Salesforce", svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.925.87 3.636 2.148a5.003 5.003 0 012.11-.464C21.122 5.793 23 7.677 23 10c0 2.322-1.878 4.207-4.203 4.207-.268 0-.53-.027-.784-.076a3.636 3.636 0 01-3.242 1.998 3.64 3.64 0 01-1.333-.253 4.343 4.343 0 01-3.942 2.524c-2.106 0-3.856-1.49-4.27-3.477a3.775 3.775 0 01-.678.062C2.103 14.985 0 12.879 0 10.331s2.103-4.65 4.548-4.65c.68 0 1.325.157 1.9.431a4.725 4.725 0 013.558-1.697z" /></svg> },
                                                    { name: "Zapier", svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 13h-3.086l2.182 2.182-1.414 1.414L13 14.414V17.5h-2v-3.086l-2.182 2.182-1.414-1.414L9.586 13H6.5v-2h3.086L7.404 8.818l1.414-1.414L11 9.586V6.5h2v3.086l2.182-2.182 1.414 1.414L14.414 11H17.5v2z" /></svg> },
                                                ].map((integration, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover="hover"
                                                        initial="initial"
                                                        variants={iconVariants}
                                                        className="text-zinc-400 hover:text-[#82ff1f] cursor-pointer"
                                                        title={integration.name}
                                                    >
                                                        {integration.svg}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Capability Card 4: Chat y Voz */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="group relative p-6 rounded-xl bg-white border border-zinc-200 hover:border-[#82ff1f] transition-all duration-500 shadow-sm hover:shadow-md"
                                >
                                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                                        <div className="flex-shrink-0 p-2.5 rounded-lg bg-zinc-100 text-zinc-600 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors duration-300">
                                            <Mic className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-black mb-1">Chat y Voz</h3>
                                            <p className="text-zinc-500 font-light leading-relaxed text-sm">
                                                Los agentes son capaces de responder mediante chat o voz en chatbots o llamadas, siendo siempre la misma persona y teniendo todos los datos unificados, como un humano real.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>

                            {/* Human vs AI Comparison */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
                            >
                                {/* Human Commercial */}
                                <div className="relative p-6 rounded-xl bg-zinc-50 border border-zinc-200 transition-all duration-300">
                                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">1 Comercial Humano</h4>
                                    <div className="mb-2">
                                        <span className="text-3xl md:text-4xl font-bold text-zinc-400 tracking-tighter">
                                            20-40
                                        </span>
                                        <span className="text-base font-normal text-zinc-400 ml-1">conv./día</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                        puede gestionar sin perder calidad.
                                    </p>
                                </div>

                                {/* AI Agent */}
                                <div className="relative p-6 rounded-xl bg-black border border-zinc-800 transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-[#82ff1f]/5 pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <h4 className="text-sm font-medium text-white uppercase tracking-wider">1 Agente IA</h4>
                                            <span className="px-2 py-0.5 rounded bg-[#82ff1f]/20 text-[#82ff1f] text-[10px] font-bold tracking-wider uppercase">Recomendado</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-3xl md:text-4xl font-bold text-[#82ff1f] tracking-tighter drop-shadow-[0_0_10px_rgba(130,255,31,0.3)]">
                                                +1.000
                                            </span>
                                            <span className="text-base font-normal text-[#82ff1f]/70 ml-1">simultáneas</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                            gestiona conversaciones 24/7, sin fatiga.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentsIntro;
