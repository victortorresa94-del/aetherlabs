import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Camera, Layers, Wand2 } from 'lucide-react';

export default function SkyflexTutorialPage() {
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
                            Case Study
                        </span>
                        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                            Cómo creamos la campaña Skyflex Shoes
                        </h1>
                        <p className="text-xl text-[#c8c8c8] leading-relaxed">
                            De un concepto abstracto a una campaña publicitaria completa sin realizar ni una sola fotografía física.
                        </p>
                    </div>

                    <div className="relative aspect-video w-full mb-16 rounded-2xl overflow-hidden border border-[#2a2a2a]">
                        <Image
                            src="/images/creative/skyflex.png"
                            alt="Skyflex Campaign Final Result"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-[#82ff1f]" />
                                    1. El Concepto
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                                    El objetivo era crear una imagen de marca para "Skyflex", una línea de zapatillas futuristas que no existen físicamente. Buscábamos una estética "cyberpunk urbano" con iluminación de neón y materiales técnicos.
                                </p>
                                <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                    <p className="text-sm text-[#808080] mb-2 font-mono">PROMPT INICIAL</p>
                                    <p className="text-[#e0e0e0] italic">
                                        "Futuristic athletic sneakers floating in a neon-lit urban night scene, wet asphalt reflections, dramatic blue and pink lighting, high detail product photography, 8k resolution, cinematic composition"
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Camera className="w-6 h-6 text-[#82ff1f]" />
                                    2. Generación y Refinado
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed">
                                    Utilizamos Midjourney v6 para la generación base. Las primeras iteraciones capturaron la atmósfera pero fallaron en la coherencia del diseño de la zapatilla.
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-[#a0a0a0]">
                                    <li>Iteración 1: Ajuste de iluminación y fondo.</li>
                                    <li>Iteración 2: Definición de materiales (malla técnica, suela de gel).</li>
                                    <li>Iteración 3: Upscaling y corrección de artefactos.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-[#82ff1f]" />
                                    3. Post-Procesado y Branding
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed">
                                    Una vez obtenida la imagen base perfecta, pasamos a Photoshop. Aquí integramos el logotipo de "Skyflex" en la lengüeta y el lateral de la zapatilla utilizando técnicas de deformación para respetar la perspectiva y la iluminación. Finalmente, aplicamos un color grading para unificar los tonos.
                                </p>
                            </section>
                        </div>

                        <aside className="space-y-8">
                            <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                <h3 className="text-white font-semibold mb-4">Herramientas</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Midjourney v6
                                    </li>
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Adobe Photoshop
                                    </li>
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Magnific AI (Upscaling)
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                <h3 className="text-white font-semibold mb-4">Resultados</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-2xl font-light text-white">2h</p>
                                        <p className="text-xs text-[#808080] uppercase">Tiempo total</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-light text-white">0€</p>
                                        <p className="text-xs text-[#808080] uppercase">Coste producción</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="mt-20 pt-12 border-t border-[#2a2a2a] text-center">
                        <h3 className="text-2xl font-light mb-6">¿Quieres resultados similares?</h3>
                        <Link
                            href="/contacto"
                            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
                        >
                            Empezar proyecto
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
