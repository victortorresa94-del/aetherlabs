'use client';

import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Calendar, Clock, Video } from 'lucide-react';

export default function ReservaTuSesionPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="container px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
                            Reserva tu sesión inicial
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a0a0a0] mt-4">
                                gratuita
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#c8c8c8] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                            Una conversación de 30 minutos para conocernos, entender tus objetivos y diseñar un plan de formación totalmente personalizado.
                        </p>
                    </div>
                </div>
            </section>

            {/* Qué esperar de la sesión */}
            <section className="py-20 bg-black">
                <div className="container px-6 md:px-12 lg:px-24">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">¿Qué vamos a hacer en esta sesión?</h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            {[
                                {
                                    icon: Video,
                                    title: "Videollamada 1:1",
                                    description: "Nos conocemos cara a cara. Sin presión, sin compromiso. Solo una conversación honesta sobre lo que quieres aprender."
                                },
                                {
                                    icon: Clock,
                                    title: "30 minutos",
                                    description: "El tiempo justo para entender tu nivel actual, tus objetivos y diseñar un plan de formación adaptado a ti."
                                },
                                {
                                    icon: Calendar,
                                    title: "Totalmente gratis",
                                    description: "Esta sesión es gratuita y sin compromiso. Si después decides que no es para ti, no pasa nada."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-2xl hover:border-[#82ff1f]/50 transition-colors">
                                    <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center mb-6 border border-[#333]">
                                        <item.icon className="h-7 w-7 text-[#82ff1f]" />
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                                    <p className="text-[#a0a0a0] leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Calendly Embed */}
                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl p-8 md:p-12">
                            <h3 className="text-2xl font-light text-white mb-8 text-center">Elige el día y hora que mejor te venga</h3>
                            <div className="calendly-inline-widget"
                                data-url="https://calendly.com/aetherlabs1986/30min?hide_gdpr_banner=1&primary_color=82ff1f"
                                style={{ minWidth: '320px', height: '700px' }}>
                            </div>
                            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                        </div>

                        {/* Nota final */}
                        <div className="mt-12 text-center">
                            <p className="text-[#808080] text-lg">
                                Después de reservar, recibirás un email de confirmación con el enlace de la videollamada.
                                <br />
                                <span className="text-[#a0a0a0]">Nos vemos pronto 👋</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
