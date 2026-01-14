"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Monitor, Zap, ArrowRight, Server, Shield, FileText, BarChart3, Coins, MessageSquare } from "lucide-react";

export default function ArchitectureDiagram() {
    return (
        <div className="w-full overflow-x-auto py-6">
            <div className="flex items-start gap-6 min-w-max px-4">

                {/* 1. Client Software (PHP) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 flex items-center gap-4"
                >
                    <div className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-5 w-48">
                        <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                            <Monitor className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="font-bold text-white text-sm mb-1">Software Cliente (PHP)</h3>
                        <p className="text-xs text-zinc-500">Sin cambios en core</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 flex-shrink-0" />
                </motion.div>

                {/* 2. Widget Widow */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-shrink-0 flex items-center gap-4"
                >
                    <div className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-5 w-48">
                        <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center mb-4">
                            <MessageSquare className="w-5 h-5 text-green-400" />
                        </div>
                        <h3 className="font-bold text-white text-sm mb-1">Widget Widow (React)</h3>
                        <p className="text-xs text-zinc-500">Interfaz de Chat / UI</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 flex-shrink-0" />
                </motion.div>

                {/* 3. Backend IA (CENTRAL - Full Detail) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-shrink-0 flex items-center gap-4"
                >
                    <div className="bg-[#0a0a0a] border-2 border-[#82ff1f]/30 rounded-2xl p-6 w-[420px] relative overflow-hidden shadow-[0_0_60px_rgba(130,255,31,0.08)]">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#82ff1f]/10 blur-[80px] rounded-full" />

                        <div className="flex items-center gap-3 mb-5 border-b border-zinc-800 pb-4 relative z-10">
                            <div className="w-9 h-9 rounded-lg bg-[#82ff1f] flex items-center justify-center text-black">
                                <Server className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-base">Backend IA (Node.js)</h3>
                                <p className="text-xs text-zinc-500">Vercel / Antigravity</p>
                            </div>
                        </div>

                        {/* CEREBRO CORE */}
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-4 relative z-10">
                            <div className="flex items-center gap-2 text-[#82ff1f] font-bold text-xs uppercase tracking-wider mb-3">
                                <Zap className="w-4 h-4" /> CEREBRO (Widow Core)
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
                                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Detecta intención</div>
                                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Decide info necesaria</div>
                                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Consulta Vector DB</div>
                                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Consulta Modelo IA</div>
                                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Construye respuesta</div>
                                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full" />Aplica formatos</div>
                            </div>
                        </div>

                        {/* Sub-modules */}
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                            <div className="bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50">
                                <div className="flex items-center gap-2 text-[#82ff1f] text-xs font-bold mb-2">
                                    <Shield className="w-3 h-3" /> SEGURIDAD
                                </div>
                                <ul className="text-[10px] text-zinc-500 space-y-1">
                                    <li>• Validación de input</li>
                                    <li>• Control de permisos</li>
                                    <li>• Sanitización respuesta</li>
                                </ul>
                            </div>
                            <div className="bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50">
                                <div className="flex items-center gap-2 text-[#82ff1f] text-xs font-bold mb-2">
                                    <Coins className="w-3 h-3" /> CONTROL DE COSTE
                                </div>
                                <ul className="text-[10px] text-zinc-500 space-y-1">
                                    <li>• Contador de tokens</li>
                                    <li>• Límites mensuales</li>
                                    <li>• Modelos eficientes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 flex-shrink-0" />
                </motion.div>

                {/* 4. External Services */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex-shrink-0 grid grid-cols-2 gap-4 w-[380px]"
                >
                    {/* Supabase Vectors */}
                    <div className="bg-zinc-900/80 border border-emerald-900/30 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-950/40 flex items-center justify-center">
                                <Database className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Supabase</h4>
                                <p className="text-[10px] text-emerald-500">Vector Database</p>
                                <p className="text-[9px] text-zinc-500 mt-1">Memoria semántica (Embeddings)</p>
                            </div>
                        </div>
                    </div>

                    {/* Supabase SQL (NEW) */}
                    <div className="bg-zinc-900/80 border border-emerald-900/30 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-950/40 flex items-center justify-center">
                                <Database className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">PostgreSQL</h4>
                                <p className="text-[10px] text-emerald-500">Supabase SQL</p>
                                <p className="text-[9px] text-zinc-500 mt-1">Usuarios y configuración</p>
                            </div>
                        </div>
                    </div>

                    {/* DeepSeek */}
                    <div className="bg-zinc-900/80 border border-indigo-900/30 rounded-xl p-4 text-left">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-indigo-950/40 flex items-center justify-center">
                                <Cpu className="w-4 h-4 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">DeepSeek API</h4>
                                <p className="text-[10px] text-indigo-400">LLM Engine</p>
                                <p className="text-[9px] text-zinc-500 mt-1">Razonamiento y generación</p>
                            </div>
                        </div>
                    </div>

                    {/* Knowledge & Logs combined or separate? Keeping original Sources logic */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
                        <h5 className="text-xs text-zinc-400 font-bold uppercase mb-3 flex items-center gap-2">
                            <FileText className="w-3 h-3" /> Fuentes
                        </h5>
                        <div className="grid grid-cols-2 gap-2">
                            {["Docs", "FAQs", "Manuales", "Videos"].map((src, i) => (
                                <div key={i} className="bg-black border border-zinc-800 p-1.5 rounded text-[9px] text-zinc-500 text-center">
                                    {src}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
