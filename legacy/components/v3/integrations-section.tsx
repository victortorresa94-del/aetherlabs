'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Database, MessageSquare, Globe, Zap, Webhook, Mail, MessageCircle, Bolt, Settings, Code } from 'lucide-react';

/* --- Integration Item Component --- */
interface IntegrationCardProps {
    name: string;
    desc: string;
    icon?: React.ReactNode;
    image?: string;
    highlight?: boolean;
}

const IntegrationCard = ({ name, desc, icon, image, highlight = false }: IntegrationCardProps) => (
    <div className={`
        relative group p-6 rounded-3xl border transition-all duration-500 h-full overflow-hidden
        ${highlight
            ? 'bg-zinc-900/80 border-[#82ff1f]/30 shadow-[0_0_30px_-10px_rgba(130,255,31,0.3)]'
            : 'bg-zinc-900/40 border-white/5 hover:border-white/20 hover:bg-zinc-800/60 shadow-xl'
        }
        backdrop-blur-xl
    `}>
        {/* 3D Lighting/Glass Effect Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                {/* Icon Box - Larger and Transparent "No background" as requested */}
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    {image ? (
                        <div className="w-full h-full relative">
                            <Image
                                src={image}
                                alt={`${name} Logo`}
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                    ) : (
                        <div className={`${highlight ? 'text-[#82ff1f]' : 'text-zinc-300 group-hover:text-white transition-colors'}`}>
                            {icon && React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
                        </div>
                    )}
                </div>

                <h3 className={`text-lg font-semibold tracking-tight ${highlight ? 'text-white' : 'text-zinc-100 group-hover:text-white transition-colors'}`}>
                    {name}
                </h3>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors mt-auto">
                {desc}
            </p>
        </div>
    </div>
);


const IntegrationsSection = () => {
    return (
        <section className="w-full py-32 bg-black relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[128px] pointer-events-none"></div>

            {/* Background Grid Pattern - Very subtle */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 text-xs font-mono font-medium tracking-widest uppercase text-[#82ff1f] bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-full mb-6 shadow-[0_0_15px_-5px_rgba(130,255,31,0.3)]">
                        Ecosistema
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight leading-none">
                        Conectado a <span className="font-instrument italic font-normal text-[1.05em] text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">tu ecosistema</span> actual.
                    </h2>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                        SALVIA se integra con las herramientas que ya usas para optimizar cada etapa de tu flujo de trabajo. Sin fricción.
                    </p>
                </div>

                {/* Integrations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">

                    {/* CRM */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 px-2 mb-2">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                <Database className="text-zinc-400 w-4 h-4" />
                            </div>
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">CRM</h2>
                        </div>
                        <div className="grid gap-4">
                            <IntegrationCard
                                name="HubSpot"
                                desc={`Sincroniza contactos y negocios automáticamente.\nBase de datos actualizada en tiempo real.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/HubSpot_Logo.png/1200px-HubSpot_Logo.png"
                            />
                            <IntegrationCard
                                name="Odoo"
                                desc={`Gestiona todas las operaciones desde un solo lugar.\nControl total de CRM, ventas y facturación.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Odoo_logo.png/640px-Odoo_logo.png"
                            />
                            <IntegrationCard
                                name="Pipedrive"
                                desc={`Visualiza tu embudo de ventas con claridad.\nSeguimiento preciso de cada oportunidad.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pipedrive_logo.png/640px-Pipedrive_logo.png"
                            />
                            <IntegrationCard
                                name="Achieve Apex"
                                desc={`Integración nativa diseñada a medida.\nMáximo rendimiento para tu infraestructura.`}
                                image="/images/Achieve Apex Logo.avif"
                                highlight
                            />
                        </div>
                    </div>

                    {/* Comunicación */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 px-2 mb-2">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                <MessageSquare className="text-zinc-400 w-4 h-4" />
                            </div>
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">Comunicación</h2>
                        </div>
                        <div className="grid gap-4">
                            <IntegrationCard
                                name="WhatsApp"
                                desc={`Atiende y cierra ventas por chat directo.\nConecta con clientes donde más activos están.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                            />
                            <IntegrationCard
                                name="Email"
                                desc={`Automatiza el seguimiento y nurturing de leads.\nEnvía correos personalizados por comportamiento.`}
                                icon={<Mail />}
                            />
                            <IntegrationCard
                                name="Webchat"
                                desc={`Captura visitas web con un chat inteligente.\nResuelve dudas y convierte en tiempo real.`}
                                icon={<MessageCircle />}
                            />
                            <IntegrationCard
                                name="Telegram"
                                desc={`Notificaciones instantáneas para tu equipo.\nAlertas de alta prioridad directo al móvil.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png"
                            />
                        </div>
                    </div>

                    {/* Publicidad */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 px-2 mb-2">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                <Globe className="text-zinc-400 w-4 h-4" />
                            </div>
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">Publicidad</h2>
                        </div>
                        <div className="grid gap-4">
                            <IntegrationCard
                                name="Meta Ads"
                                desc={`Cualifica leads de Facebook e Instagram.\nOptimiza campañas con datos de conversión reales.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
                            />
                            <IntegrationCard
                                name="Google Ads"
                                desc={`Mejora tu ROAS con conversiones offline.\nEntrena al algoritmo con ventas verificadas.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                            />
                            <IntegrationCard
                                name="TikTok Ads"
                                desc={`Aprovecha la viralidad con captación automática.\nSincroniza eventos para campañas de vídeo.`}
                                image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png" // Fixed TikTok URL fallback
                            />
                            <IntegrationCard
                                name="LinkedIn Ads"
                                desc={`Sincroniza leads B2B de alta calidad.\nConecta directamente con decisores corporativos.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                            />
                        </div>
                    </div>

                    {/* Automatización */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3 px-2 mb-2">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                <Zap className="text-zinc-400 w-4 h-4" />
                            </div>
                            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">Automatización</h2>
                        </div>
                        <div className="grid gap-4">
                            <IntegrationCard
                                name="n8n"
                                desc={`Diseña workflows complejos sin restricciones.\nControl total y privacidad de tus datos.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/N8n-logo.svg/800px-N8n-logo.svg.png" // Fixed n8n URL
                            />
                            <IntegrationCard
                                name="Webhooks"
                                desc={`Conecta sistemas externos en tiempo real.\nDispara acciones inmediatas basadas en eventos.`}
                                icon={<Webhook />}
                            />
                            <IntegrationCard
                                name="Make"
                                desc={`Automatiza procesos visualmente y sin código.\nIntegra miles de apps con lógica condicional.`}
                                image="https://upload.wikimedia.org/wikipedia/commons/e/ee/Make.svg" // Found reliable SVG
                            />
                            <IntegrationCard
                                name="API Custom"
                                desc={`Conectamos tu software propietario o legacy.\nSi tiene datos, podemos integrarlo sin límites.`}
                                icon={<Code />}
                            />
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="text-center flex flex-col items-center gap-8">
                    <p className="text-2xl md:text-3xl text-white font-light leading-snug">
                        No necesitas cambiar tu sistema. <br />
                        <span className="text-zinc-500">Lo conectamos y lo organizamos.</span>
                    </p>

                    <Link
                        href="/contacto"
                        className="group inline-flex items-center text-sm font-medium text-[#82ff1f] hover:text-white transition-colors duration-300 backdrop-blur-md bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10"
                    >
                        Ver cómo se integra SALVIA
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
