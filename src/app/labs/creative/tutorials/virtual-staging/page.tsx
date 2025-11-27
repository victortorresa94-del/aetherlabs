import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Home, MousePointer2, Wand2 } from 'lucide-react';

export default function VirtualStagingTutorialPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            <article className="pt-32 pb-20">
                <div className="container max-w-4xl mx-auto">
                    <Link
                        href="/labs/creative"
                        className="inline-flex items-center text-[#a0a0a0] hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver a Creative Lab
                    </Link>

                    <div className="mb-12">
                        <span className="text-[#82ff1f] text-sm font-mono uppercase tracking-wider mb-4 block">
                            Tutorial
                        </span>
                        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                            Virtual Staging en 10 minutos
                        </h1>
                        <p className="text-xl text-[#c8c8c8] leading-relaxed">
                            Cómo transformamos una habitación vacía en un espacio de lujo utilizando IA Generativa, ahorrando miles de euros en mobiliario real.
                        </p>
                    </div>

                    <div className="relative aspect-video w-full mb-16 rounded-2xl overflow-hidden border border-[#2a2a2a]">
                        <Image
                            src="/images/creative/real-estate.jpg"
                            alt="Virtual Staging Result"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid md:grid-cols-[1fr_300px] gap-12">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Home className="w-6 h-6 text-[#82ff1f]" />
                                    1. La Foto Base
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                                    Partimos de una fotografía simple de una estancia vacía. Lo importante es que tenga buena iluminación natural y las líneas verticales estén rectas. No hace falta una cámara profesional, un buen móvil es suficiente.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <MousePointer2 className="w-6 h-6 text-[#82ff1f]" />
                                    2. Inpainting Generativo
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed">
                                    Usamos la técnica de "Inpainting". Seleccionamos el área del suelo y las paredes donde queremos añadir muebles y le damos instrucciones a la IA.
                                </p>
                                <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a] mt-4">
                                    <p className="text-sm text-[#808080] mb-2 font-mono">PROMPT EJEMPLO</p>
                                    <p className="text-[#e0e0e0] italic">
                                        "Modern scandinavian beige sofa, white wool rug, minimal coffee table with books, warm sunlight, photorealistic, 4k"
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Wand2 className="w-6 h-6 text-[#82ff1f]" />
                                    3. Coherencia de Iluminación
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed">
                                    El mayor reto es que los muebles proyecten sombras realistas. Utilizamos modelos de ControlNet para respetar la geometría de la habitación y asegurar que la luz de los objetos generados coincida con la luz de la ventana original.
                                </p>
                            </section>
                        </div>

                        <aside className="space-y-8">
                            <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                <h3 className="text-white font-semibold mb-4">Ventajas</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        95% más barato que staging real
                                    </li>
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Entrega en 24 horas
                                    </li>
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Estilos ilimitados
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                <h3 className="text-white font-semibold mb-4">Herramientas</h3>
                                <ul className="space-y-3">
                                    <li className="text-[#a0a0a0]">Stable Diffusion XL</li>
                                    <li className="text-[#a0a0a0]">Adobe Firefly</li>
                                    <li className="text-[#a0a0a0]">ControlNet</li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                    <div className="mt-20 pt-12 border-t border-[#2a2a2a] text-center">
                        <h3 className="text-2xl font-light mb-6">¿Eres inmobiliaria?</h3>
                        <Link
                            href="/contacto"
                            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
                        >
                            Automatizar mis fotos
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
