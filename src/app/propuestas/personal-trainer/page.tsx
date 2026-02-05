"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Dumbbell,
    Smartphone,
    Globe,
    CreditCard,
    Bot,
    FileText,
    Mail,
    Archive,
    CheckCircle2,
    XCircle,
    X,
    ArrowRight,
    Zap,
    Layout,
    Database,
    BarChart3,
    Instagram,
    MessageSquare,
    DollarSign,
    Lock,
    ChevronDown,
    ChevronUp,
    Store,
    BrainCircuit,
    Palette,
    FileCheck,
    Users,
    RefreshCw,
    TrendingUp,
    Rocket,
    Magnet,
    Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

// DATA: Feature Details for Modals
const FEATURE_DETAILS: Record<string, { title: string, subtitle: string, description: string, benefits: string[], example: string }> = {
    // BASICO
    "Web de Ventas": {
        title: "Web de Ventas",
        subtitle: "Tu escaparate digital 24/7",
        description: "Una página web diseñada específicamente para vender tu plan mensual. Sin menús que distraigan, enfocada 100% en que el usuario entienda qué ofreces y compre.",
        benefits: ["Diseño profesional incluido", "Textos persuasivos para convencer", "Funciona perfecto en móvil"],
        example: "Tu cliente entra, ve tu video, lee lo que incluyes y solo tiene un botón gigante: 'Apuntarme ahora'."
    },
    "Pagos Automáticos": {
        title: "Pasarela de Pagos",
        subtitle: "Cobra mientras duermes",
        description: "Sistema seguro para que tus clientes paguen con tarjeta al instante. El dinero va directo a tu cuenta bancaria.",
        benefits: ["Cobro inmediato", "Sin perseguir transferencias", "Facturas automáticas"],
        example: "Nada de esperar al Bizum. El cliente paga a las 3 de la mañana y recibe su acceso al instante."
    },
    "Respuesta Insta (DM)": {
        title: "Respuesta Automática Insta",
        subtitle: "No pierdas ni una oportunidad",
        description: "Un 'robot' que detecta cuando alguien comenta tus posts y le envía la información del plan por mensaje privado al segundo.",
        benefits: ["Respuesta inmediata (3 seg)", "Más ventas pasivas", "Ahorras horas de escribir DMs"],
        example: "Subes un post: 'Comenta CAMBIO'. 50 personas comentan. El sistema envía la info a las 50 personas solo."
    },
    "Entrenador IA": {
        title: "Generador de Rutinas IA",
        subtitle: "Tu asistente de programación",
        description: "Una Inteligencia Artificial que te ayuda a redactar las rutinas y dietas. Tú marcas el objetivo y ella escribe los detalles.",
        benefits: ["Programas en minutos, no horas", "Variedad de ejercicios infinita", "Explicaciones técnicas perfectas"],
        example: "Le dices: 'Plan 3 días glúteo para María'. Y te redacta la estructura completa con series y repeticiones."
    },
    "PDF Automático": {
        title: "Creador de PDFs",
        subtitle: "Adiós al Word y Canva",
        description: "El sistema coge la rutina y la convierte en un PDF limpio y ordenado con tu nombre, listo para enviar.",
        benefits: ["Diseño limpio siempre", "Cero tiempo maquetando", "Formato profesional"],
        example: "De la rutina en texto a un archivo 'Plan_Semana1.pdf' en 2 segundos."
    },
    "Email de Entrega": {
        title: "Entrega por Email",
        subtitle: "Envío inmediato",
        description: "El sistema envía automáticamente el plan al correo de tu cliente en cuanto está listo. Sin que tengas que adjuntar nada.",
        benefits: ["El cliente recibe su plan al momento", "Trazabilidad (sabes si lo abre)", "Imagen 100% profesional"],
        example: "Tú apruebas el plan y a tu cliente le llega un email: 'Hola María, aquí tienes tu rutina de esta semana'."
    },

    // PRO
    "Cobros Mensuales": {
        title: "Suscripción Mensual",
        subtitle: "Ingresos recurrentes estables",
        description: "Como Netflix. Configuración para que el cobro se realice automáticamente cada mes a la tarjeta del cliente.",
        benefits: ["Ingresos predecibles cada mes", "Gestión de tarjetas caducadas", "El cliente se olvida de pagar manualmente"],
        example: "El día 1 se cobra la cuota solo. Si falla, el sistema avisa al cliente para que actualice su tarjeta."
    },
    "Web Pro & Funnel": {
        title: "Web Profesional Avanzada",
        subtitle: "Convence a los indecisos",
        description: "Una web más completa con testimonios, preguntas frecuentes y una estructura psicológica diseñada para aumentar tus ventas.",
        benefits: ["Mayor confianza para el cliente", "Diseño premium a medida", "Recuperación de carritos abandonados"],
        example: "Un visitante ve casos de éxito en video, entiende tu método y compra porque la web le transmite total seguridad."
    },
    "Asistente Ventas IG": {
        title: "Vendedor Inteligente en Instagram",
        subtitle: "Cualifica antes de vender",
        description: "El chat de Instagram no solo envía info, sino que hace preguntas al usuario para saber qué necesita antes de ofrecerle el plan.",
        benefits: ["Filtras curiosos de clientes reales", "Ofreces el plan ideal a cada uno", "Trato personalizado automático"],
        example: "Usuario: 'Info'. Bot: '¿Buscas perder grasa o ganar músculo?'. Usuario: 'Grasa'. Bot: 'Genial, este es tu plan ideal...'."
    },
    "Entrenador IA Pro": {
        title: "IA Contextual Avanzada",
        subtitle: "Recuerda el historial",
        description: "Un modelo más listo que tiene en cuenta las semanas anteriores y lesiones para sugerir progresiones lógicas.",
        benefits: ["Progresiones de carga coherentes", "Adaptaciones inteligentes", "Feedback automático"],
        example: "La IA sugiere bajar el volumen esta semana porque detecta que es la cuarta semana de carga (semana de descarga)."
    },
    "Diseño PDF Premium": {
        title: "Diseño Editorial Premium",
        subtitle: "Tus rutinas parecen revistas",
        description: "Plantillas de PDF ricas visualmente, con fotos de los ejercicios, tu branding completo, colores corporativos y tipografía profesional.",
        benefits: ["Valor percibido muy alto", "Diferenciación total", "Lectura fácil y visual"],
        example: "Tus clientes presumirán de sus rutinas en Stories porque el diseño es increíble."
    },
    "Panel de Control": {
        title: "Tu Centro de Mando",
        subtitle: "Control total con un clic",
        description: "Una pantalla donde ves todos los planes generados antes de enviarlos. Puedes revisar, editar o aprobar todo en bloque.",
        benefits: ["Seguridad (tú tienes la última palabra)", "Rapidez de gestión", "Vista global de tu negocio"],
        example: "El viernes revisas 50 planes en 10 minutos y le das al botón 'Aprobar y Enviar Todo'."
    },

    // PREMIUM
    "Marca e Identidad": {
        title: "Identidad Visual Completa",
        subtitle: "Tu marca fitness profesional",
        description: "Creamos tu logo, elegimos tus colores y tipografías para que todo tu negocio respire la misma profesionalidad.",
        benefits: ["Imagen de experto top", "Coherencia en redes y web", "Pack de diseño listo para usar"],
        example: "Tu Instagram, tu web y tus PDFs 'hablan' el mismo idioma visual. Te entregamos todos los editables."
    },
    "Generador Contenido": {
        title: "Fábrica de Contenido Viral",
        subtitle: "Ideas infinitas para redes",
        description: "Herramientas personalizadas para crearte guiones de Reels, carruseles y emails usando tu propio tono de voz.",
        benefits: ["Nunca te quedas en blanco", "Creación en minutos", "Mantienes tu estilo personal"],
        example: "Le pides: 'Dame 5 ideas sobre ayuno intermitente con mi estilo polémico'. Y te da los guiones listos."
    },
    "Captación de Emails": {
        title: "Sistema de Captación (Leads)",
        subtitle: "Consigue emails de futuros clientes",
        description: "Estrategia para regalar algo de valor (ej: Guía PDF) a cambio del email del usuario, para venderle después.",
        benefits: ["Creas una base de datos propia", "Vendes en automático por email", "No dependes solo de Instagram"],
        example: "Regalas una 'Guía de Desayunos'. El usuario deja su email. Durante 5 días recibe valor y al final, una oferta irresistible."
    },
    "Vendedor IA (Setter)": {
        title: "Setter Digital Automático",
        subtitle: "Vende 24/7 por chat",
        description: "Un sistema avanzado que conversa, resuelve dudas y cierra ventas o agenda llamadas por ti en Instagram.",
        benefits: ["Ventas a cualquier hora", "Conversaciones naturales", "Agenda llena de llamadas"],
        example: "El sistema charla 10 min con un interesado, resuelve sus dudas y le convence para agendar una llamada contigo."
    },
    "Upsell Automático": {
        title: "Subida de Cliente (Upsell)",
        subtitle: "Gana más por cliente",
        description: "Sistema que detecta a los mejores clientes del plan mensual y les invita automáticamente a pasar a tu asesoría 1:1 más cara.",
        benefits: ["Más ingresos con el mismo esfuerzo", "Fidelización de clientes", "Venta de servicios caros en automático"],
        example: "A los 3 meses, el sistema invita a tu cliente a una entrevista para entrar en tu programa Premium."
    },
    "App / Área Privada": {
        title: "Área Privada de Alumno",
        subtitle: "Experiencia VIP",
        description: "Tus clientes acceden con usuario y contraseña a una plataforma privada para ver sus entrenos, videos y perfil.",
        benefits: ["Experiencia de usuario brutal", "Protección de contenido", "Sentido de comunidad"],
        example: "Tus alumnos entran a 'TuMarca Academy' para ver sus videos exclusivos y descargar sus planes."
    }
};



const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function PersonalTrainerProposal() {
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
    const featureData = selectedFeature ? FEATURE_DETAILS[selectedFeature] : null;

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#82ff1f]/30 overflow-x-hidden">
            {/* Modal for Details */}
            <Dialog open={!!selectedFeature} onOpenChange={(open) => !open && setSelectedFeature(null)}>
                <DialogContent className="bg-zinc-950 border border-zinc-800 text-white sm:max-w-xl p-0 overflow-hidden gap-0 rounded-2xl">
                    <DialogHeader className="p-8 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border-b border-zinc-800/50 relative">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/5 blur-3xl rounded-full pointer-events-none -mr-10 -mt-10"></div>

                        {featureData?.subtitle && (
                            <Badge variant="outline" className="w-fit mb-3 border-[#82ff1f]/30 text-[#82ff1f] bg-[#82ff1f]/5 font-mono uppercase tracking-wider text-[10px] px-2 py-0.5">
                                {featureData.subtitle}
                            </Badge>
                        )}
                        <DialogTitle className="text-3xl font-bold text-white mb-2 tracking-tight">{featureData?.title}</DialogTitle>
                        <DialogDescription className="text-zinc-400 text-base leading-relaxed">
                            {featureData?.description}
                        </DialogDescription>
                    </DialogHeader>

                    {featureData && (
                        <div className="p-8 space-y-8 bg-zinc-950">
                            <div className="grid gap-4">
                                <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2 text-zinc-500">
                                    <Zap className="w-4 h-4 text-[#82ff1f]" />
                                    Beneficios para ti
                                </h4>
                                <div className="grid gap-3">
                                    {featureData.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50">
                                            <CheckCircle2 className="w-5 h-5 text-[#82ff1f] shrink-0 mt-0.5" />
                                            <span className="text-sm text-zinc-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative pl-6 border-l-2 border-[#82ff1f]/30">
                                <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-widest mb-2">Ejemplo Real</h4>
                                <p className="text-zinc-400 text-sm italic leading-relaxed">
                                    "{featureData.example}"
                                </p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* 1. HERO SECTION */}
            {/* ... rest of the component ... */}
            {/* Update FeatureCard calls to pass onClick */}
            <header className="min-h-screen flex items-center justify-center border-b border-zinc-900 bg-[radial-gradient(circle_at_50%_0%,rgba(64,64,64,0.1),transparent_70%)] relative overflow-hidden px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge variant="outline" className="mb-8 border-zinc-700 text-zinc-400 uppercase tracking-widest px-4 py-1">
                            Propuesta de Infraestructura Digital
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
                            Tu negocio fitness,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                                completamente automatizado.
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto">
                            Deja de maquetar PDFs manuales y perseguir pagos. Montamos la infraestructura que vende, cobra y entrega tus planes semanales sin ti.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center py-2">
                            <p className="text-[#82ff1f] font-mono text-sm tracking-wide border border-[#82ff1f]/20 bg-[#82ff1f]/5 px-6 py-2 rounded-full inline-block">
                                No gestionamos tu contenido. Montamos el sistema.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-semibold" asChild>
                                <a href="#planes">Ver planes</a>
                            </Button>
                            <Button variant="link" className="text-zinc-400 hover:text-white" asChild>
                                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">Solicitar demo</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* 2. EL PROBLEMA ACTUAL */}
            <section className="py-24 border-b border-zinc-900/50 bg-zinc-950">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Tu realidad actual
                        </h2>
                        <p className="text-zinc-400 text-lg">Te pasas más tiempo operando que entrenando.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: FileText, title: "Excel y Canva manual", desc: "Cada semana diseñas y maquetas planes uno a uno desde cero." },
                            { icon: Mail, title: "Envíos artesanales", desc: "Envías PDFs por email o WhatsApp, perdiendo horas y trazabilidad." },
                            { icon: CreditCard, title: "Cobros desordenados", desc: "Sin sistema de pagos automático. Bizum, transferencia, perseguir recibos..." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#82ff1f]/10 text-[#82ff1f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 2.5 ELEMENTOS DEL SISTEMA */}
            <section className="py-24 border-b border-zinc-900/50 bg-black">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800 mb-4">LOS COMPONENTES</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Lo que necesitamos
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Cuatro piezas clave de tecnología que reemplazarán el trabajo manual.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Chatbot de Instagram",
                                problem: "Pasas el día respondiendo DMs iguales.",
                                solution: "Asistente 24/7 que cualifica y vende por ti.",
                                image: "/images/personal-trainer/chatbot-mockup.png",
                                delay: 0
                            },
                            {
                                title: "Agente IA Contenido",
                                problem: "Diseñar rutinas te lleva horas.",
                                solution: "Generación instantánea de planes 100% personalizados.",
                                image: "/images/personal-trainer/ai-agent-mockup.png",
                                delay: 0.1
                            },
                            {
                                title: "Web de Ventas",
                                problem: "Tus clientes se pierden y no compran.",
                                solution: "Landing optimizada para conversión directa.",
                                image: "/images/personal-trainer/landing-mockup.png",
                                delay: 0.2
                            },
                            {
                                title: "Pagos & Entrega",
                                problem: "Perseguir transferencias cada mes.",
                                solution: "Cobro automático y envío de plan inmediato.",
                                image: "/images/personal-trainer/payments-mockup.png",
                                delay: 0.3
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.5 }}
                                className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all hover:scale-[1.02] duration-300"
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider text-red-500/80 font-bold flex items-center gap-1">
                                            <XCircle className="w-3 h-3" /> Problema
                                        </p>
                                        <p className="text-sm text-zinc-400 leading-snug">
                                            {item.problem}
                                        </p>
                                    </div>

                                    <div className="w-full h-px bg-zinc-800/50"></div>

                                    <div className="space-y-1">
                                        <p className="text-xs uppercase tracking-wider text-[#82ff1f] font-bold flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" /> Solución
                                        </p>
                                        <p className="text-sm text-zinc-200 leading-snug font-medium">
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LA SOLUCIÓN: UN SISTEMA */}
            <section className="py-24 border-b border-zinc-900/50 bg-black relative overflow-hidden">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-20">
                        <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800 mb-4">LA SOLUCIÓN</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Un sistema conectado
                        </h2>
                        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                            Eliminamos la dependencia de tu tiempo conectando todas las piezas.
                        </p>
                    </motion.div>

                    {/* Diagrama de flujo */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6 max-w-7xl mx-auto">
                        {[
                            { icon: Instagram, label: "Instagram" },
                            { icon: MessageSquare, label: "DM Auto" },
                            { icon: DollarSign, label: "Pago" },
                            { icon: Bot, label: "Generación IA" },
                            { icon: Palette, label: "Auto-Diseño" },
                            { icon: Mail, label: "Entrega" },
                            { icon: Archive, label: "Archivo" }
                        ].map((step, i, arr) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center gap-3 w-24 md:w-auto"
                                >
                                    <div className="w-16 h-16 rounded-full bg-zinc-900 border border-[#82ff1f]/30 flex items-center justify-center text-[#82ff1f] shadow-[0_0_15px_rgba(130,255,31,0.1)]">
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-wide">{step.label}</span>
                                </motion.div>
                                {i < arr.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, width: 0 }}
                                        whileInView={{ opacity: 1, width: "auto" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.05 }}
                                        className="hidden md:block text-zinc-700"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BLOQUE LOS PLANES (SUMMARY) */}
            <section id="planes" className="py-24 bg-zinc-950 border-b border-zinc-900/50">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Planes de Implementación</h2>
                        <p className="text-zinc-400 text-lg">Elige el nivel de automatización que tu negocio necesita.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* PLAN BÁSICO */}
                        <div className="rounded-3xl p-8 border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-all flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2">Plan Básico</h3>
                            <p className="text-sm font-mono text-zinc-500 mb-6 tracking-wide">STARTER AUTOMATIZADO</p>
                            <p className="text-zinc-400 mb-8 flex-grow">Para empezar a vender y entregar tu plan mensual sin hacerlo todo a mano. Elimina Canva y Excel manual.</p>
                            <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Landing simple de venta</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Sistema de cobro link simple</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Automatización DM básica</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> IA Generadora Plan Semanal</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> Creación PDF automática</li>
                            </ul>
                            <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 hover:text-white" asChild>
                                <a href="#detalle-basico">Ver detalles</a>
                            </Button>
                        </div>

                        {/* PLAN PRO */}
                        <div className="rounded-3xl p-8 border border-zinc-700 bg-zinc-900/50 hover:border-zinc-600 transition-all flex flex-col relative overflow-hidden">
                            <h3 className="text-2xl font-bold text-white mb-2">Plan Pro</h3>
                            <p className="text-sm font-mono text-zinc-500 mb-6 tracking-wide">SUSCRIPCIÓN RECURRENTE</p>
                            <p className="text-zinc-400 mb-8 flex-grow">Convierte tu plan en un producto digital real. Suscripción automática, diseño profesional y cualificación.</p>
                            <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Todo lo del Básico</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Suscripción mensual Stripe</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Landing optimizada conversión</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Cualificación en DMs</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Diseño PDF Profesional</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Sistema Revisión</li>
                            </ul>
                            <Button className="w-full bg-white text-black hover:bg-zinc-200" asChild>
                                <a href="#detalle-pro">Ver detalles</a>
                            </Button>
                        </div>

                        {/* PLAN PREMIUM */}
                        <div className="rounded-3xl p-8 border border-[#82ff1f] bg-[#82ff1f]/5 hover:shadow-[0_0_40px_rgba(130,255,31,0.1)] transition-all flex flex-col relative">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-[#82ff1f] text-black text-xs font-bold rounded-full">
                                RECOMENDADO
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Plan Premium</h3>
                            <p className="text-sm font-mono text-[#82ff1f] mb-6 tracking-wide">BUSINESS-IN-A-BOX</p>
                            <p className="text-zinc-400 mb-8 flex-grow">El negocio completo montado. Marca, funnels de venta, captación y entrega de valor. Escala real.</p>
                            <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Todo lo del Pro</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Brand Kit & Content System</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Lead Magnet Engine</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Funnel DM Avanzado</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Upsell a Planes 1:1</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#82ff1f]" /> Portal de Miembros</li>
                            </ul>
                            <Button className="w-full bg-[#82ff1f] text-black hover:bg-[#72e01b] font-bold" asChild>
                                <a href="#detalle-premium">Ver detalles</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DETALLE PLANES */}
            <div className="bg-black">
                {/* DETALLE BASICO */}
                <section id="detalle-basico" className="py-24 border-b border-zinc-900/50">
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-white mb-2">Plan Básico</h3>
                            <p className="text-[#82ff1f] text-xl mb-6">"Empieza a vender y entregar tu plan mensual sin hacerlo todo a mano."</p>
                            <p className="text-zinc-400 leading-relaxed max-w-3xl">
                                Este plan elimina la dependencia absoluta de tu tiempo. Pasas de crear rutinas, maquetar en Canva y enviar emails uno a uno, a un sistema que responde, cobra y entrega por ti. Un primer sistema funcional, estable y automatizado.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Features Grid */}
                            <div>
                                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                                    <div className="w-1 h-4 bg-[#82ff1f] rounded-full"></div>
                                    Qué incluye exactamente
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <FeatureCard icon={Globe} title="Web de Ventas" desc="Landing de una sola página enfocada en convertir, explicando el plan mensual." onClick={() => setSelectedFeature("Web de Ventas")} />
                                    <FeatureCard icon={CreditCard} title="Pagos Automáticos" desc="Link de pago (Gumroad/Stripe) para registro automático sin fricción." onClick={() => setSelectedFeature("Pagos Automáticos")} />
                                    <FeatureCard icon={MessageSquare} title="Respuesta Insta (DM)" desc="Respuesta automática a palabras clave en comentarios/DM y envío de link." onClick={() => setSelectedFeature("Respuesta Insta (DM)")} />
                                    <FeatureCard icon={Bot} title="Entrenador IA" desc="Tú das el tema, la IA genera rutina y nutrición con tono profesional." onClick={() => setSelectedFeature("Entrenador IA")} />
                                    <FeatureCard icon={FileText} title="PDF Automático" desc="El contenido se inserta en plantilla limpia sin abrir Canva." onClick={() => setSelectedFeature("PDF Automático")} />
                                    <FeatureCard icon={Mail} title="Email de Entrega" desc="Email de bienvenida y entrega semanal automática (Brevo/Mailchimp)." onClick={() => setSelectedFeature("Email de Entrega")} />
                                </div>
                            </div>

                            {/* NOT INCLUDED BASIC */}
                            <div className="p-6 rounded-xl border border-zinc-800/50 bg-black/40">
                                <h4 className="font-bold text-zinc-500 mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                                    <div className="w-1 h-4 bg-zinc-700 rounded-full"></div>
                                    Qué NO incluye (Disponible en PRO)
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4 opacity-50">
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Suscripción Mensual Automática</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Web Pro Avanzada</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Vendedor Inteligente en Instagram</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Diseño PDF Premium</span>
                                    </div>
                                </div>
                            </div>



                            {/* Horizontal Flow */}
                            <div className="bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800">
                                <h4 className="font-bold text-white mb-8 uppercase tracking-wider text-sm">Cómo funciona el flujo</h4>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    <FlowStepHorizontal number="1" title="Post & Comentario" desc="Subes contenido y usuario comenta palabra clave." />
                                    <FlowStepHorizontal number="2" title="Respuesta & Pago" desc="Sistema envía info y link. Usuario paga." />
                                    <FlowStepHorizontal number="3" title="Generación Semanal" desc="Tú decides el tema. El agente crea el contenido." />
                                    <FlowStepHorizontal number="4" title="Entrega Auto" desc="PDF se genera y se envía por email el día fijado." isLast={true} />
                                </div>
                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <p className="text-zinc-500 text-sm italic">Resultado: Un sistema básico que funciona solo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DETALLE PRO */}
                <section id="detalle-pro" className="py-24 border-b border-zinc-900/50 bg-zinc-950/50">
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-white mb-2">Plan Pro</h3>
                            <p className="text-[#82ff1f] text-xl mb-6">"Convierte tu plan mensual en un producto digital profesional que se vende y entrega solo."</p>
                            <p className="text-zinc-400 leading-relaxed max-w-3xl">
                                El salto de calidad. Aquí ya no hay links sueltos ni pagos manuales. Montamos una estructura de suscripción recurrente, un diseño de marca consistente y un sistema de control que te permite supervisar sin trabajar.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Features Grid */}
                            <div>
                                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                                    <div className="w-1 h-4 bg-white rounded-full"></div>
                                    Qué incluye (Nivel Pro)
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <FeatureCard icon={RefreshCw} title="Cobros Mensuales" desc="Stripe configurado para cobro mensual, gestión de fallos y renovaciones." onClick={() => setSelectedFeature("Cobros Mensuales")} />
                                    <FeatureCard icon={Rocket} title="Web Pro & Funnel" desc="Copy de ventas, estructura de conversión y manejo de objeciones." onClick={() => setSelectedFeature("Web Pro & Funnel")} />
                                    <FeatureCard icon={MessageSquare} title="Asistente Ventas IG" desc="Flujos que preguntan objetivo y nivel antes de vender. Mensajes humanos." onClick={() => setSelectedFeature("Asistente Ventas IG")} />
                                    <FeatureCard icon={BrainCircuit} title="Entrenador IA Pro" desc="Generación estructurada con enfoque, notas y bloques de hábitos." onClick={() => setSelectedFeature("Entrenador IA Pro")} />
                                    <FeatureCard icon={Palette} title="Diseño PDF Premium" desc="Renderizado automático en plantillas de diseño premium consistentes." onClick={() => setSelectedFeature("Diseño PDF Premium")} />
                                    <FeatureCard icon={CheckCircle2} title="Panel de Control" desc="Previsualizas y apruebas con un clic antes del envío masivo." onClick={() => setSelectedFeature("Panel de Control")} />
                                </div>
                            </div>

                            {/* NOT INCLUDED PRO */}
                            <div className="p-6 rounded-xl border border-zinc-800/50 bg-black/40">
                                <h4 className="font-bold text-zinc-500 mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                                    <div className="w-1 h-4 bg-zinc-700 rounded-full"></div>
                                    Qué NO incluye (Disponible en PREMIUM)
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4 opacity-50">
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Identidad Visual Completa</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Lead Magnet Engine</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Fábrica de Contenido</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Vendedor IA (Setter)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Upsell Automático</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Área Privada Alumno</span>
                                    </div>
                                </div>
                            </div>

                            {/* NOT INCLUDED PRO */}
                            <div className="p-6 rounded-xl border border-zinc-800/50 bg-black/40">
                                <h4 className="font-bold text-zinc-500 mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                                    <div className="w-1 h-4 bg-zinc-700 rounded-full"></div>
                                    Qué NO incluye (Disponible en PREMIUM)
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4 opacity-50">
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Identidad Visual Completa</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Lead Magnet Engine</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Fábrica de Contenido</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Vendedor IA (Setter)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Upsell Automático</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <X className="w-4 h-4 text-zinc-600" />
                                        <span className="text-sm line-through decoration-zinc-700">Área Privada Alumno</span>
                                    </div>
                                </div>
                            </div>

                            {/* Horizontal Flow - Architecture */}
                            <div className="bg-zinc-900/20 p-8 rounded-3xl border border-zinc-700">
                                <h4 className="font-bold text-white mb-8 uppercase tracking-wider text-sm">Arquitectura del Sistema</h4>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    <FlowStepHorizontal number="1" title="Captación" desc="Instagram + DM Auto cualifican al lead." />
                                    <FlowStepHorizontal number="2" title="Suscripción" desc="Pago recurrente mensual activo." />
                                    <FlowStepHorizontal number="3" title="Generación" desc="IA crea + Sistema renderiza diseño." />
                                    <FlowStepHorizontal number="4" title="Control" desc="Revisas, apruebas y se envía masivo." isLast={true} />
                                </div>
                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <p className="text-zinc-500 text-sm italic">Experiencia cliente: Recibe un producto cuidado, ordenado y profesional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DETALLE PREMIUM */}
                <section id="detalle-premium" className="py-24 border-b border-zinc-900/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/5 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-white mb-2">Plan Premium</h3>
                            <p className="text-[#82ff1f] text-xl mb-6">"Te dejamos el negocio fitness completamente montado para que solo tengas que entrenar y crear."</p>
                            <p className="text-zinc-400 leading-relaxed max-w-3xl">
                                Fitness Business-in-a-Box. No es una mejora incremental. Es el escenario ideal donde todo (marca, contenido, captación, venta, entrega, upsell) está conectado y funciona como una máquina.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Features Grid */}
                            <div>
                                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                                    <div className="w-1 h-4 bg-[#82ff1f] rounded-full"></div>
                                    Sistemas montados (Paquete completo)
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <FeatureCard icon={Palette} title="Marca e Identidad" desc="Paleta, tipos y assets definidos para coherencia visual total." onClick={() => setSelectedFeature("Marca e Identidad")} />
                                    <FeatureCard icon={FileText} title="Generador Contenido" desc="GPTs personalizados para estrategia, guiones, carruseles y copies." onClick={() => setSelectedFeature("Generador Contenido")} />
                                    <FeatureCard icon={Magnet} title="Captación de Emails" desc="Lead magnet, landing, entrega y secuencia de nurturing a ventas." onClick={() => setSelectedFeature("Captación de Emails")} />
                                    <FeatureCard icon={MessageSquare} title="Vendedor IA (Setter)" desc="Segmentación real, rutas personalizadas y derivación a leads o ventas." onClick={() => setSelectedFeature("Vendedor IA (Setter)")} />
                                    <FeatureCard icon={TrendingUp} title="Upsell Automático" desc="Carril automático para subir clientes del plan mensual a asesoría 1:1." onClick={() => setSelectedFeature("Upsell Automático")} />
                                    <FeatureCard icon={Users} title="App / Área Privada" desc="IA avanzada (niveles/lugares), entrega segmentada y portal de miembros." onClick={() => setSelectedFeature("App / Área Privada")} />
                                </div>
                            </div>

                            {/* Why Scale - Box */}
                            <div className="bg-[#82ff1f]/5 p-8 rounded-3xl border border-[#82ff1f]/30">
                                <h4 className="font-bold text-[#82ff1f] mb-8 uppercase tracking-wider text-sm">Por qué escala este plan</h4>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="flex flex-col gap-3">
                                        <Users className="w-8 h-8 text-[#82ff1f]" />
                                        <p className="text-zinc-300 text-sm leading-relaxed">Crea audiencia y clientes a la vez sin fricción operativa.</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <DollarSign className="w-8 h-8 text-[#82ff1f]" />
                                        <p className="text-zinc-300 text-sm leading-relaxed">Ingresos recurrentes (base) + High Ticket (1:1) en automático.</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Layout className="w-8 h-8 text-[#82ff1f]" />
                                        <p className="text-zinc-300 text-sm leading-relaxed">Infraestructura lista para lanzar nuevos productos sin rehacer nada.</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <FileCheck className="w-8 h-8 text-[#82ff1f]" />
                                        <p className="text-zinc-300 text-sm leading-relaxed">Documentación completa de uso y handoff del sistema.</p>
                                    </div>
                                </div>
                                <div className="mt-8 p-4 bg-[#82ff1f]/10 rounded-xl border border-[#82ff1f]/20 text-[#82ff1f] text-sm font-semibold text-center">
                                    No es un servicio más. Es un negocio llave en mano.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 6. TECH & FAQ (ACCORDION) */}
            <section className="py-24 bg-zinc-950 border-b border-zinc-900/50">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Detalles Técnicos & Implementación</h2>
                        <p className="text-zinc-400">Todo lo que necesitas saber antes de empezar.</p>
                    </motion.div>

                    <div className="space-y-4">
                        <AccordionItem title="Arquitectura General del Sistema">
                            <div className="space-y-4 text-zinc-400">
                                <p>El sistema funciona como un flujo lógico por capas:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><span className="text-white">Capa 1 (Captación):</span> Instagram orgánico + respuestas automáticas para convertir atención en conversación.</li>
                                    <li><span className="text-white">Capa 2 (Conversión):</span> Landing de venta + Pasarela de pago (Stripe) para cobrar sin fricción.</li>
                                    <li><span className="text-white">Capa 3 (Orquestación):</span> Sistema central que coordina cuándo generar y enviar.</li>
                                    <li><span className="text-white">Capa 4 (Generación):</span> Agente IA entrenado para crear rutinas y planes nutricionales coherentes.</li>
                                    <li><span className="text-white">Capa 5 (Diseño & Entrega):</span> Inserción automática en plantilla, creación de PDF y envío email.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Timeline de Implementación">
                            <ul className="space-y-4 text-zinc-400">
                                <li>
                                    <strong className="text-white block mb-1">Plan Básico (7-10 días):</strong>
                                    Definición mínima, montaje, pruebas y entrega.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">Plan Pro (2-3 semanas):</strong>
                                    Diseño sistema, configuración pagos recurrente, automatizaciones avanzadas y ajustes.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">Plan Premium (4-6 semanas):</strong>
                                    Definición estratégica, branding, funnels, agentes complejos, bibliotecas y documentación completa.
                                </li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title="Qué necesitamos de ti">
                            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                <li>Nombre del proyecto y enfoque principal.</li>
                                <li>Precio del plan mensual.</li>
                                <li>Ejemplos de rutinas/estilo (si tienes) para calibrar la IA.</li>
                                <li>Tono de comunicación deseado.</li>
                                <li>Acceso a cuenta de Instagram y Email principal.</li>
                                <li>Disponibilidad para validaciones puntuales.</li>
                            </ul>
                            <p className="mt-4 text-zinc-300 font-medium">No necesitas conocimientos técnicos.</p>
                        </AccordionItem>

                        <AccordionItem title="Criterios de finalización">
                            <p className="text-zinc-400 mb-2">El proyecto se considera cerrado cuando:</p>
                            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                <li>El flujo funciona completo de inicio a fin sin errores.</li>
                                <li>El pago entra correctamente en tu cuenta.</li>
                                <li>El agente genera el plan de acuerdo a las directrices.</li>
                                <li>El PDF se crea y se envía automáticamente.</li>
                            </ul>
                            <p className="mt-4 text-[#82ff1f]">El sistema funciona sin intervención manual.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

            {/* 7. PRECIOS */}
            <section className="py-24 bg-black relative">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Inversión</h2>
                        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                            No vendemos horas ni tareas sueltas. Montamos sistemas completos en propiedad listos para funcionar.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* PRICE BASICO */}
                        <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 text-center flex flex-col">
                            <h3 className="text-xl font-bold text-zinc-300 mb-2">Plan Básico</h3>
                            <div className="text-4xl font-bold text-white mb-4">Desde 1.200 €</div>
                            <p className="text-zinc-500 mb-8 flex-grow">Implementación del sistema mínimo para vender y entregar tu plan mensual de forma automática.</p>
                            <Button variant="outline" className="w-full" asChild><a href="https://wa.me/34600000000">Consultar</a></Button>
                        </div>

                        {/* PRICE PRO */}
                        <div className="p-8 rounded-3xl border border-zinc-700 bg-zinc-900/60 text-center flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2">Plan Pro</h3>
                            <div className="text-4xl font-bold text-white mb-4">Desde 2.900 €</div>
                            <p className="text-zinc-400 mb-8 flex-grow">Implementación de un sistema profesional de suscripción con diseño automático y control total.</p>
                            <Button className="w-full bg-white text-black hover:bg-zinc-200" asChild><a href="https://wa.me/34600000000">Consultar</a></Button>
                        </div>

                        {/* PRICE PREMIUM */}
                        <div className="p-8 rounded-3xl border border-[#82ff1f] bg-[#82ff1f]/5 text-center flex flex-col relative">
                            <div className="absolute top-0 right-0 left-0 bg-[#82ff1f] h-1.5"></div>
                            <h3 className="text-xl font-bold text-[#82ff1f] mb-2">Plan Premium</h3>
                            <div className="text-4xl font-bold text-white mb-4">Desde 5.900 €</div>
                            <p className="text-zinc-300 mb-8 flex-grow">Negocio fitness completo montado, con marca, funnels y sistemas listos para escalar.</p>
                            <Button className="w-full bg-[#82ff1f] text-black hover:bg-[#7dcf28]" asChild><a href="https://wa.me/34600000000">Agendar llamada</a></Button>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800">
                        <div>
                            <h4 className="font-bold text-white mb-2">¿Qué incluye el precio?</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                El precio corresponde al diseño, configuración e implementación del sistema. Incluye definición, montaje, pruebas y puesta en marcha. No es un fee mensual nuestro. El sistema queda operativo y en tu propiedad. <span className="text-white">No dependes de nosotros para que funcione.</span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-white mb-2">¿Por qué pone "desde"?</h4>
                                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-4">
                                    <li>Variaciones en versiones del plan (Gym/Casa)</li>
                                    <li>Complejidad del branding a desarrollar</li>
                                    <li>Integraciones extra específicas</li>
                                    <li>Bibliotecas avanzadas o portales a medida</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2">NO incluido en el precio</h4>
                                <ul className="text-red-400/80 text-sm space-y-1 list-disc pl-4">
                                    <li>Gestión mensual de redes sociales</li>
                                    <li>Publicación de contenido (posting)</li>
                                    <li>Atención al cliente diaria</li>
                                    <li>Creación continua de contenido manual</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-zinc-800 text-center">
                            <p className="text-zinc-500 italic text-sm">
                                "Un solo cliente de entrenamiento personalizado suele pagar entre 150-250€/mes. Este sistema está pensado para ayudarte a escalar eso sin multiplicar tu tiempo."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FOOTER */}
            <footer className="py-12 border-t border-zinc-900 bg-zinc-950 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-zinc-500 mb-6 font-medium">No vendemos promesas. Creamos sistemas que funcionan.</p>
                    <div className="flex justify-center gap-6">
                        <Button size="lg" className="bg-[#82ff1f] text-black hover:bg-[#72e01b] font-bold rounded-full px-8" asChild>
                            <a href="https://wa.me/34600000000">Empezar a trabajar</a>
                        </Button>
                    </div>
                    <div className="mt-12 text-zinc-700 text-sm">
                        Aether Labs © 2026. Todos los derechos reservados.
                    </div>
                </div>
            </footer>

        </div>
    );
}

// Subcomponents for cleaner code
function FeatureCard({ icon: Icon, title, desc, onClick }: { icon: any, title: string, desc: string, onClick?: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors h-full group ${onClick ? "cursor-pointer hover:bg-zinc-900/60" : ""}`}
        >
            <div className="w-10 h-10 rounded-lg bg-[#82ff1f]/10 flex items-center justify-center mb-4 text-[#82ff1f] group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-zinc-200 text-sm mb-2">{title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">{desc}</p>
        </div>
    );
}

function FlowStepHorizontal({ number, title, desc, isLast = false }: { number: string, title: string, desc: string, isLast?: boolean }) {
    return (
        <div className="flex flex-col relative flex-1">
            {/* Connector Line */}
            {!isLast && (
                <div className="hidden md:block absolute top-[15px] left-8 w-[calc(100%-2rem)] h-[2px] bg-zinc-800 -z-10">
                    <div className="w-full h-full bg-gradient-to-r from-[#82ff1f]/50 to-zinc-800" />
                </div>
            )}

            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-[#82ff1f]/50 flex items-center justify-center text-xs font-bold text-[#82ff1f] mb-4 z-10 relative shadow-[0_0_10px_rgba(130,255,31,0.2)]">
                {number}
            </div>
            <strong className="text-white block text-sm mb-2 pr-2">{title}</strong>
            <span className="text-zinc-500 text-xs leading-relaxed pr-2 block">{desc}</span>
        </div>
    );
}

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
            >
                <span className="text-lg font-bold text-white">{title}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-zinc-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-sm">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
// End of component
