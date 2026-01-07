"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Monitor, Zap, ArrowDown, Server, Shield, FileText, BarChart3, Coins, MessageSquare } from "lucide-react";

export default function ArchitectureDiagram() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

                {/* Main Vertical Flow (Columns 2-3) */}
                <div className="md:col-span-4 flex flex-col items-center gap-10 relative">

                    {/* 1. Client Software (PHP) */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-sm relative z-20"
                    >
                        <div className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-4 flex items-center gap-4 relative">
                            <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                                <Monitor className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Software Cliente (PHP)</h3>
                                <p className="text-xs text-zinc-500">Sin cambios en core</p>
                            </div>
                        </div>
                        {/* Arrow Down */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-[1px] h-10 bg-zinc-700" />
                            <ArrowDown className="w-3 h-3 text-zinc-700 -mt-2" />
                        </div>
                    </motion.div>

                    {/* 2. Widget Widow (React) */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="w-full max-w-sm relative z-20"
                    >
                        <div className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-4 flex items-center gap-4 relative">
                            <div className="w-10 h-10 rounded-lg bg-green-900/20 flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-5 h-5 text-green-400" /> {/* Fixed import usage */}
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Widget Widow (React)</h3>
                                <p className="text-xs text-zinc-500">Interfaz de Chat / UI</p>
                            </div>
                        </div>
                        {/* Arrow Down */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-[1px] h-10 bg-zinc-700" />
                            <ArrowDown className="w-3 h-3 text-zinc-700 -mt-2" />
                        </div>
                    </motion.div>

                    {/* 3. Backend IA Node.js (NEW LAYER) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-2xl bg-[#0a0a0a] border border-[#82ff1f]/30 rounded-2xl p-6 relative overflow-hidden z-10"
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/5 blur-[80px] rounded-full" />

                        <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                            <div className="w-8 h-8 rounded-lg bg-[#82ff1f] flex items-center justify-center text-black font-bold">
                                <Server className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Backend IA (Node.js)</h3>
                            <span className="text-xs text-zinc-500 ml-auto font-mono">Vercel / Antigravity</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* CEREBRO CORE */}
                            <div className="col-span-1 md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3 text-[#82ff1f] font-bold text-sm uppercase tracking-wider">
                                    <Zap className="w-4 h-4" /> CEREBRO (Widow Core)
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Detecta intención</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Decide info necesaria</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Consulta Vector DB</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Consulta Modelo IA</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Construye respuesta</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Aplica formatos</div>
                                </div>
                            </div>

                            {/* Submodules */}
                            <div className="bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold mb-2">
                                    <Shield className="w-3 h-3" /> SEGURIDAD
                                </div>
                                <ul className="text-[10px] text-zinc-500 space-y-1">
                                    <li>• Validación de input</li>
                                    <li>• Control de permisos</li>
                                    <li>• Sanitización respuesta</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold mb-2">
                                    <Coins className="w-3 h-3" /> CONTROL DE COSTE
                                </div>
                                <ul className="text-[10px] text-zinc-500 space-y-1">
                                    <li>• Contador de tokens</li>
                                    <li>• Límites mensuales</li>
                                    <li>• Modelos eficientes</li>
                                </ul>
                            </div>

                        </div>

                        {/* Outbound Lines */}
                        <div className="absolute bottom-0 left-[25%] w-[1px] h-6 bg-zinc-800" />
                        <div className="absolute bottom-0 right-[25%] w-[1px] h-6 bg-zinc-800" />
                    </motion.div>


                    {/* 4. External Services Row */}
                    <div className="w-full max-w-2xl grid grid-cols-2 gap-8 relative z-20">

                        {/* Supabase Side */}
                        <div className="flex flex-col gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-900/80 border border-emerald-900/30 rounded-xl p-4 relative"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-zinc-800" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                                        <Database className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Supabase</h4>
                                        <p className="text-[10px] text-emerald-500">Vector Database</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Knowledge Sources */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="border-t border-zinc-800 pt-4 relative"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-zinc-800" />
                                <h5 className="text-xs text-zinc-500 font-bold uppercase mb-3 text-center">Fuente de Conocimiento</h5>
                                <div className="space-y-2">
                                    {["Docs Software", "FAQs", "Manuales Internos", "Info Cannabis"].map((src, i) => (
                                        <div key={i} className="bg-black border border-zinc-800 p-2 rounded text-[10px] text-zinc-400 text-center flex items-center justify-center gap-2">
                                            <FileText className="w-3 h-3" /> {src}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* DeepSeek Side */}
                        <div className="flex flex-col gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-900/80 border border-indigo-900/30 rounded-xl p-4 relative h-fit"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-zinc-800" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-950/30 flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">DeepSeek API</h4>
                                        <p className="text-[10px] text-indigo-400">LLM Engine</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Logs / Metrics (Lateral Equivalent on Right) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 mt-auto"
                            >
                                <h5 className="text-xs text-zinc-400 font-bold uppercase mb-2 flex items-center gap-2">
                                    <BarChart3 className="w-3 h-3" /> Logs & Mejora
                                </h5>
                                <ul className="text-[10px] text-zinc-600 space-y-1">
                                    <li>• Historial Conversaciones</li>
                                    <li>• Métricas de Calidad</li>
                                    <li>• Ajuste continuo de prompts</li>
                                </ul>
                            </motion.div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}


