import Link from "next/link";
import { MessageSquare, Zap } from "lucide-react";

const RestaurAIBanner = () => {
    return (
        <section className="py-12 bg-black">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-[#1F1F1F]">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                                <Zap className="w-3 h-3 text-green-400" />
                                <span className="text-xs font-medium text-green-400">Nueva Herramienta</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                                Crea tu propio ChatGPT
                            </h2>
                            <p className="text-zinc-400 mb-8 max-w-md">
                                Prueba RestaurAI, nuestro asistente especializado para restaurantes. Entrénalo con tus datos y mejora la atención al cliente.
                            </p>

                            <Link
                                href="/labs/llm-lab"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition-colors"
                            >
                                <MessageSquare className="w-4 h-4" />
                                Probar RestaurAI
                            </Link>
                        </div>

                        <div className="relative h-full min-h-[200px] flex items-center justify-center">
                            {/* Chat Interface Mockup */}
                            <div className="w-full max-w-sm bg-zinc-900 rounded-xl border border-zinc-800 p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 border-b border-zinc-800 pb-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xs">R</div>
                                    <div>
                                        <p className="text-sm font-medium text-white">RestaurAI Bot</p>
                                        <p className="text-[10px] text-green-400 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            Online
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[85%]">
                                        <p className="text-xs text-zinc-300">Hola, ¿en qué puedo ayudarte con tu reserva hoy?</p>
                                    </div>
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto">
                                        <p className="text-xs text-green-100">Quisiera una mesa para dos personas a las 21:00.</p>
                                    </div>
                                    <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[85%]">
                                        <p className="text-xs text-zinc-300">¡Perfecto! Tengo disponibilidad. ¿Prefieres terraza o interior?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestaurAIBanner;
