import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, Sparkles, Code, Brain, Mic, Database, MessageSquare } from 'lucide-react';

export default function ExperimentosPage() {
    const categories = [
        {
            id: 'agentes',
            title: 'Agentes IA & Voz',
            icon: <Mic className="w-6 h-6" />,
            description: 'Asistentes inteligentes capaces de mantener conversaciones, cerrar ventas y gestionar tareas.'
        },
        {
            id: 'generativa',
            title: 'IA Generativa & Visual',
            icon: <Sparkles className="w-6 h-6" />,
            description: 'Creación de imágenes, vídeo y experiencias visuales impactantes con inteligencia artificial.'
        },
        {
            id: 'automatizacion',
            title: 'Automatización & Herramientas',
            icon: <Bot className="w-6 h-6" />,
            description: 'Sistemas que optimizan flujos de trabajo, procesan documentos y analizan datos.'
        }
    ];

    const projects = [
        // AGENTES
        {
            title: 'Jason - Asistente Web Aether Labs',
            category: 'agentes',
            description: 'Nuestro asistente oficial. Jason utiliza tecnología de voz avanzada (ElevenLabs + OpenAI) para interactuar con los visitantes de la web. Entrenado con toda nuestra base de conocimientos, es capaz de presentar servicios, cualificar leads y agendar reuniones automáticamente en nuestro CRM.',
            tags: ['Voz IA', 'CRM Integration', 'Conversion'],
            image: '/images/agents/voice-interface.png',
            status: 'Live',
        },
        {
            title: 'Laura - Agente Rostisseria',
            category: 'agentes',
            description: 'Agente telefónico diseñado para el sector retail. Laura gestiona pedidos de pollos asados y comida preparada, consulta el stock disponible en tiempo real y registra los pedidos directamente en un Excel o base de datos, eliminando el caos de las llamadas en hora punta.',
            tags: ['Voz IA', 'Pedidos', 'Retail Automático'],
            image: '/images/agents/inventory-manager.png',
            status: 'Demo',
        },
        {
            title: 'Angy - Comercial Aether Labs',
            category: 'agentes',
            description: 'Agente de ventas outbound proactivo. Angy contacta con empresas potenciales para presentar los servicios de Aether Labs, maneja objeciones básicas y detecta oportunidades de negocio, pasando los contactos calientes al equipo humano.',
            tags: ['Outbound Sales', 'Voz IA', 'Prospección'],
            image: '/images/agents/angy-sales.png',
            status: 'Internal',
        },
        {
            title: 'Medical Coach App',
            category: 'agentes',
            description: 'Un "super-GPT" de salud absolutamente personalizado. Entrenado con mi historial médico completo y papers clínicos recientes. Actúa como mentor de salud 24/7: sugiere dietas, ajusta rutinas de sueño y responde dudas médicas basándose en datos reales y personales.',
            tags: ['Health Tech', 'RAG', 'Personalización Extrema'],
            image: '/images/projects/medical-app.jpg', // Placeholder kept as user didn't specific new image for this one, or I can use generic
            status: 'Private',
        },

        // IA GENERATIVA
        {
            title: "Munch's Burger Club",
            category: 'generativa',
            description: 'Branding integral generado con IA para una smash burger. Desde el naming y logotipo hasta sesiones de fotos de producto hiperrealistas generadas con Midjourney, eliminando la necesidad de fotógrafos y cocina real para la campaña.',
            tags: ['Branding', 'Midjourney', 'Food Styling'],
            image: '/images/munchs/burger-closeup.jpg',
            link: '/proyectos/munchs-burger-club',
            status: 'Case Study',
        },
        {
            title: 'Skyflex Shoes',
            category: 'generativa',
            description: 'Producción publicitaria completa sin cámaras. Creamos el producto 3D y generamos campañas visuales en entornos imposibles (espacio, desierto, ciudad futurista) y vídeos promocionales dinámicos.',
            tags: ['Moda', 'Product Placement', 'Video AI'],
            image: '/images/creative/skyflex-fence.jpg',
            link: '/proyectos/skyflex',
            status: 'Case Study',
        },
        {
            title: 'LuxHome Staging',
            category: 'generativa',
            description: 'Servicio para inmobiliarias que amuebla digitalmente propiedades vacías. Aumenta el interés del comprador al mostrar el potencial del espacio con estilos de decoración modernos y realistas.',
            tags: ['Real Estate', 'Virtual Staging', 'Ventas'],
            image: '/images/creative/real-estate.jpg',
            link: '/proyectos/luxhome',
            status: 'Case Study',
        },
        {
            title: "Victor's Image Studio",
            category: 'generativa',
            description: 'Modelo de IA (LoRA) entrenado específicamente con mi rostro. Permite generar fotos profesionales mías en cualquier situación (dando una charla, en la oficina, de viaje) sin necesidad de hacerme la foto real.',
            tags: ['Stable Diffusion', 'Fine-tuning', 'Personal Brand'],
            image: '/images/learn/nano-banana-user.jpg',
            link: 'https://ai-image-edition-159705655877.us-west1.run.app',
            status: 'Tool',
        },
        {
            title: 'UGC Avatar Studio',
            category: 'generativa',
            description: 'Plataforma para crear contenido UGC (User Generated Content) con avatares de IA. Ideal para anuncios de TikTok y Reels donde presentadores virtuales explican productos con naturalidad sorprendente.',
            tags: ['Avatares', 'Video Marketing', 'HeyGen'],
            image: '/images/avatars/woman-mic.jpg',
            link: 'https://ugc-avatar-studio-159705655877.us-west1.run.app',
            status: 'Tool',
        },
        {
            title: 'Editor de Fotos IA',
            category: 'generativa',
            description: 'Suite de edición de imágenes potenciada por IA en la web. Permite eliminar objetos no deseados, cambiar fondos automáticamente y mejorar la calidad de las fotos con un solo clic.',
            tags: ['Inpainting', 'Image Editing', 'Web Tool'],
            image: '/images/projects/restoreai.png',
            link: 'https://ai-image-edition-159705655877.us-west1.run.app',
            status: 'Live Tool',
        },
        {
            title: 'Gestor de Partículas 3D',
            category: 'generativa',
            description: 'Experiencia interactiva en el navegador que utiliza Vision Tech para permitirte controlar miles de partículas con el movimiento de tus manos a través de la webcam.',
            tags: ['WebGazer', 'Creative Coding', 'Interactive'],
            image: '/images/labs/computer-vision-card.png',
            link: 'https://gesture-particles-3d-159705655877.us-west1.run.app/',
            status: 'Demo',
        },
        {
            title: 'SkinFlow',
            category: 'generativa',
            description: 'Analizador de piel mediante visión por computador. Detecta características faciales y simula texturas o efectos de productos cosméticos en tiempo real sobre el rostro del usuario.',
            tags: ['Computer Vision', 'Beauty Tech', 'Simulación'],
            image: '/images/creative/cosmetica.png',
            link: '#', // User said link is in web but I found # in vision lab pagte. Keeping # or maybe empty. User implied existing.
            status: 'Concept',
        },
        {
            title: 'Chleopatra - Historias IA',
            category: 'generativa',
            description: 'Plataforma educativa que genera historias visuales sobre figuras históricas. Narra los hechos con voces clonadas y vídeos generados, haciendo la historia entretenida e inmersiva.',
            tags: ['Storytelling', 'EdTech', 'Video AI'],
            image: '/images/creative/chleopatra-egypt.png',
            link: 'https://chleopatra-history-reimagined-159705655877.us-west1.run.app',
            status: 'Tool',
        },
        {
            title: 'RestaurAI - Restaurant Brain',
            category: 'generativa',
            description: 'El cerebro completo para restaurantes: genera cartas, gestiona reservas, crea fotos de platos, redacta anuncios y más. Un LLM entrenado específicamente para la industria hostelera.',
            tags: ['Restaurant Tech', 'LLM', 'Hospitality'],
            image: '/images/agents/inventory-manager.png', // Temporary placeholder until specific image is chosen
            status: 'Live Tool',
        },

        // AUTOMATIZACIÓN
        {
            title: 'Jason ClickUp Manager',
            category: 'automatizacion',
            description: 'Agente de productividad conectado a la API de ClickUp. Le hablas natural ("Oye, crea tarea para revisar web mañana") y él se encarga de crearla, asignarla y ponerle fecha sin que toques la app.',
            tags: ['Productividad', 'API Automation', 'NLP'],
            image: '/images/projects/json-clickup.png',
            status: 'Internal',
        },
        {
            title: '94Music Prospecting Agent',
            category: 'automatizacion',
            description: 'Bot autónomo que prospecta clientes para mi empresa de eventos. Navega por internet buscando Wedding Planners, extrae sus datos de contacto y envía propuestas personalizadas por email.',
            tags: ['Web Scraping', 'Cold Email', 'B2B'],
            image: '/images/projects/94music-bot.png',
            status: 'Internal',
        },
        {
            title: 'Traductor PDF Masivo',
            category: 'automatizacion',
            description: 'Herramienta potente para traducir grandes volúmenes de documentación técnica. Sube un PDF de 100 páginas y recibe una versión traducida manteniendo maquetación y formato.',
            tags: ['NLP', 'Translation', 'Document Processing'],
            image: '/images/tools/pdf_translator.png',
            status: 'Tool',
        },
        {
            title: 'Aether Business Consultant',
            category: 'automatizacion',
            description: 'Consultor estratégico IA. Le das la URL de tu negocio y analiza tu sector y presencia digital para generarte un informe gratuito con oportunidades reales de automatización.',
            tags: ['Consultoría', 'Web Analysis', 'Lead Magnet'],
            image: '/images/projects/business-consultant.jpg',
            link: '/servicios/consultoria',
            status: 'Tool',
        },
        {
            title: 'Instagram News Auto-Agent',
            category: 'automatizacion',
            description: 'Agente redactor y diseñador. Monitoriza fuentes de noticias de mi nicho, redacta guiones resumidos y genera automáticamente carruseles de Instagram listos para publicar.',
            tags: ['Social Media', 'Content Automation', 'Canva/Design'],
            image: '/images/agents/news-carousel.png',
            status: 'In Progress',
        },
        {
            title: 'Melissa - Influencer Reels Agent',
            category: 'automatizacion',
            description: 'Agente que controla a "Melissa", nuestra influencer IA. Genera guiones de vídeo basados en tendencias y crea el vìdeo final (Reel) con su avatar hablando y gesticulando.',
            tags: ['Avatar Video', 'Viral Content', 'Influencer Marketing'],
            image: '/images/agents/melissa-influencer.png',
            status: 'In Progress',
        },

    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <HeaderNavigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Laboratorio & Portfolio</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">experimentos</span>
                    </h1>
                    <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed">
                        Aquí es donde "cacharreamos". Una colección de proyectos para clientes, herramientas internas que usamos a diario y experimentos locos de fin de semana.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat) => (
                            <div key={cat.id} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                                <p className="text-[#a0a0a0] text-sm">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Feed */}
            <section className="py-24">
                <div className="container">
                    <div className="space-y-32">
                        {categories.map((category) => {
                            const categoryProjects = projects.filter(p => p.category === category.id);
                            if (categoryProjects.length === 0) return null;

                            return (
                                <div key={category.id} className="relative">
                                    <div className="flex items-end gap-4 mb-12 border-b border-white/10 pb-4">
                                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                                            {category.icon}
                                            {category.title}
                                        </h2>
                                        <span className="text-[#a0a0a0] text-lg font-mono mb-1">
                                            / 0{projects.filter(p => p.category === category.id).length}
                                        </span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {categoryProjects.map((project, idx) => (
                                            <div
                                                key={idx}
                                                className="group relative bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
                                            >
                                                {/* Status Badge */}
                                                <div className="absolute top-4 left-4 z-20">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md
                            ${project.status === 'Live' || project.status === 'Live Tool' ? 'bg-[#82ff1f]/10 border-[#82ff1f]/20 text-[#82ff1f]' :
                                                            project.status === 'Case Study' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                                                                project.status === 'In Progress' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                                                                    'bg-white/10 border-white/10 text-white'}`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                </div>

                                                {/* Image Area (Placeholder effect if no real image) */}
                                                <div className="relative h-[300px] bg-[#151515] group-hover:bg-[#1a1a1a] transition-colors overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
                                                    {project.image.startsWith('/') ? (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                        />
                                                    ) : (
                                                        // Fallback for external URLs or broken paths
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                        />
                                                    )}
                                                    {/* Overlay Gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                                                </div>

                                                {/* Content Area */}
                                                <div className="p-8 flex-1 flex flex-col relative z-20">
                                                    <div className="mb-4">
                                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-[#a0a0a0] leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tags.map((tag, tIdx) => (
                                                                <span key={tIdx} className="text-xs px-2 py-1 rounded-md bg-white/5 text-[#d0d0d0] border border-white/5">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {project.link && (
                                                            <Link
                                                                href={project.link}
                                                                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                                                            >
                                                                Ver Detalles <ArrowRight className="w-4 h-4" />
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
