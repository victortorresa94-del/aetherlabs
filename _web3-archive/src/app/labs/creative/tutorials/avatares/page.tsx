import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, User, Video, Mic2 } from 'lucide-react';

export default function AvataresTutorialPage() {
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
                            Avatares realistas paso a paso
                        </h1>
                        <p className="text-xl text-[#c8c8c8] leading-relaxed">
                            Creando un portavoz digital indistinguible de la realidad para vídeos de formación y marketing.
                        </p>
                    </div>

                    <div className="relative aspect-video w-full mb-16 rounded-2xl overflow-hidden border border-[#2a2a2a]">
                        {/* Usamos la imagen de testimonios como ejemplo de avatar generado */}
                        <Image
                            src="/images/testimonials/sofia.png"
                            alt="AI Avatar Result"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <User className="w-6 h-6 text-[#82ff1f]" />
                                    1. Generación del Personaje
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed mb-6">
                                    Lo primero es definir la "persona". ¿Quién es? ¿Qué edad tiene? ¿Qué transmite? Generamos múltiples variaciones de su rostro hasta encontrar la que encaja perfectamente con la marca. Es crucial generar al personaje en diferentes ángulos y con fondo transparente o croma.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Mic2 className="w-6 h-6 text-[#82ff1f]" />
                                    2. Clonación de Voz
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed">
                                    Utilizamos ElevenLabs para clonar una voz profesional o crear una sintética nueva. Ajustamos la entonación, la velocidad y la estabilidad para que suene natural y no robótica.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                                    <Video className="w-6 h-6 text-[#82ff1f]" />
                                    3. Animación y Lip-Sync
                                </h2>
                                <p className="text-[#a0a0a0] leading-relaxed">
                                    Finalmente, usamos HeyGen o herramientas similares para animar la foto estática. El software mapea los movimientos faciales y sincroniza los labios con el audio generado en el paso anterior. El resultado es un vídeo fluido de un presentador que nunca existió.
                                </p>
                            </section>
                        </div>

                        <aside className="space-y-8">
                            <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                <h3 className="text-white font-semibold mb-4">Usos Comunes</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Vídeos de Onboarding
                                    </li>
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Atención al Cliente 24/7
                                    </li>
                                    <li className="flex items-center gap-3 text-[#a0a0a0]">
                                        <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                        Contenido Redes Sociales
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#111] p-6 rounded-xl border border-[#2a2a2a]">
                                <h3 className="text-white font-semibold mb-4">Stack Tecnológico</h3>
                                <ul className="space-y-3">
                                    <li className="text-[#a0a0a0]">Midjourney (Imagen)</li>
                                    <li className="text-[#a0a0a0]">ElevenLabs (Audio)</li>
                                    <li className="text-[#a0a0a0]">HeyGen (Video)</li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                    <div className="mt-20 pt-12 border-t border-[#2a2a2a] text-center">
                        <h3 className="text-2xl font-light mb-6">¿Necesitas un portavoz digital?</h3>
                        <Link
                            href="/contacto"
                            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
                        >
                            Crear mi avatar
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
