
import { Mic, Sparkles, Bot, Palette, Wrench, Smartphone, Brain } from 'lucide-react';

export const categories = [
    {
        id: 'agentes',
        title: 'Asistentes IA texto y voz',
        icon: Mic,
        description: 'Asistentes inteligentes capaces de mantener conversaciones, cerrar ventas y gestionar tareas.'
    },
    {
        id: 'llms',
        title: 'LLMs Personalizados',
        icon: Brain,
        description: 'Modelos de lenguaje entrenados específicamente con conocimiento vertical de negocio.'
    },
    {
        id: 'generativa_tools',
        title: 'Creatividad & IA Generativa',
        icon: Wrench,
        description: 'Herramientas interactivas, campañas visuales y experimentos creativos.'
    },
    {
        id: 'apps',
        title: 'Apps Propias',
        icon: Smartphone,
        description: 'Plataformas completas y aplicaciones móviles desarrolladas in-house.'
    },
    {
        id: 'automatizacion',
        title: 'Automatización & Herramientas',
        icon: Bot,
        description: 'Sistemas que optimizan flujos de trabajo, procesan documentos y analizan datos.'
    }
];

export const experiments = [
    // AGENTES
    {
        slug: 'jason-voice-agent',
        title: 'Jason - Asistente Web Aether Labs',
        type: 'Agente de Voz & Texto',
        category: 'agentes',
        description: [
            'Tecnología de voz ElevenLabs + OpenAI.',
            'Cualifica leads y agenda reuniones en CRM.',
            'Entrenado con toda la base de conocimiento de la empresa.'
        ],
        longDescription: 'Jason es nuestro asistente virtual insignia. No es un simple chatbot; es una entidad con voz propia capaz de interactuar en tiempo real. Vive en nuestra web y su misión es guiar a los visitantes, responder dudas complejas sobre nuestros servicios y, lo más importante, cualificar leads y cerrar reuniones en nuestro calendario automáticamente.',
        problem: 'La atención al usuario 24/7 con personal humano es costosa y difícil de escalar. Los formularios de contacto tradicionales tienen baja conversión.',
        solution: 'Un agente de voz empático y conocedor que atiende al instante, resuelve dudas y convierte visitantes en reuniones agendadas sin intervención humana.',
        tags: ['Voz IA', 'CRM Integration', 'Conversion'],
        image: '/images/agents/jason-agent.jpg',
        imagePosition: 'object-[50%_25%]',
        link: '/experimentos/jason-voice-agent',
        demoLink: '#',
        status: 'Live',
    },
    {
        slug: 'nuria-rostisseria',
        title: 'Núria - Agente Rostisseria',
        type: 'Agente Telefónico Retail',
        category: 'agentes',
        description: [
            'Gestiona pedidos telefónicos automáticos.',
            'Consulta stock de productos en tiempo real.',
            'Registra pedidos en Excel/Base de datos.'
        ],
        longDescription: 'Núria es una agente telefónica diseñada específicamente para el caótico entorno de una rosticería en hora punta. Atiende llamadas concurrentes, entiende pedidos complejos ("ponme medio de esto y quita aquello"), consulta el stock real y anota el pedido perfectamente en el sistema de gestión.',
        problem: 'Pérdida de pedidos por no poder atender el teléfono en horas pico. Errores en la toma de notas manual y estrés del personal.',
        solution: 'Automatización total de la entrada de pedidos telefónicos. Núria nunca comunica, siempre es amable y no comete errores al anotar.',
        tags: ['Voz IA', 'Pedidos', 'Retail Automático'],
        image: '/images/agents/laura-rostisseria.png',
        imagePosition: 'object-top',
        link: '/experimentos/nuria-rostisseria',
        demoLink: 'https://vapi.ai?demo=true&shareKey=a3a9c14d-7879-4110-8d47-cd8c13fe516b&assistantId=cbf28b5e-d819-465c-8a4c-7bf8228b4aeb',
        status: 'Demo',
    },
    {
        slug: 'angy-sales',
        title: 'Angy - Comercial Aether Labs',
        type: 'Agente de Ventas Outbound',
        category: 'agentes',
        description: [
            'Realiza llamadas en frío a empresas potenciales.',
            'Maneja objeciones y presenta servicios.',
            'Detecta oportunidades y deriva a humanos.'
        ],
        longDescription: 'Angy es nuestra SDR (Sales Development Representative) incansable. Se encarga de la prospección saliente (outbound), llamando a listas de clientes potenciales para presentar nuestros servicios. Está entrenada para manejar el rechazo, argumentar valor y pasar la llamada a un humano solo cuando detecta interés real.',
        problem: 'La prospección en frío es dura, repetitiva y quema a los comerciales humanos. El coste de oportunidad de un senior haciendo llamadas en frío es altísimo.',
        solution: 'Angy escala la prospección infinitamente, filtrando el mercado y entregando al equipo de ventas solo leads cualificados y calientes.',
        tags: ['Outbound Sales', 'Voz IA', 'Prospección'],
        image: '/images/agents/angy-sales.jpg',
        imagePosition: 'object-[50%_25%]',
        link: '/experimentos/angy-sales',
        status: 'Internal',
    },
    {
        slug: 'medical-coach',
        title: 'Medical Coach App',
        type: 'LLM Personalizado de Salud',
        category: 'apps',
        description: [
            'Entrenado con historial médico personal.',
            'Sugiere dietas y rutinas basadas en datos reales.',
            'Mentor de salud 24/7 con papers clínicos.'
        ],
        longDescription: 'Un experimento de "Quantified Self" extremo. Entrenamos un LLM con años de historiales médicos, analíticas de sangre y datos de wearables. El resultado es un coach de salud que no da consejos genéricos, sino basados estrictamente en mi biología y mis objetivos.',
        problem: 'La medicina preventiva y el coaching de salud suelen ser genéricos o desconectados de los datos clínicos reales del paciente.',
        solution: 'Hiper-personalización de la salud. Un asistente que conoce tus niveles de hierro antes de recomendarte una dieta.',
        tags: ['Health Tech', 'RAG', 'Personalización Extrema'],
        image: '/images/projects/medical-app.png',
        imagePosition: 'object-top',
        link: '/experimentos/medical-coach',
        status: 'Private',
    },
    {
        slug: 'numa-suma-salut',
        title: 'Numa - Asistente Suma Salut',
        type: 'Agente de Atención al Paciente',
        category: 'agentes',
        description: [
            'Atención al paciente 24/7 y gestión de citas.',
            'Resolución de dudas sobre tratamientos y logística.',
            'Triaje inteligente y derivación.'
        ],
        longDescription: 'Numa es el asistente de voz e IA de Suma Salut. Se encarga de recibir a los pacientes digitalmente, resolver sus dudas frecuentes ("¿tengo que ir en ayunas?") y gestionar su agenda de citas. Su tono es cercano y profesional, diseñado para transmitir confianza en un entorno médico.',
        problem: 'Saturación de líneas telefónicas en clínicas y pérdida de citas por mala gestión o falta de confirmación.',
        solution: 'Un recepcionista virtual infinito que asegura que ningún paciente se quede sin atender y optimiza la ocupación de los doctores.',
        tags: ['Health Tech', 'Chatbot IA', 'Citas Automáticas'],
        image: '/images/agents/numa-physio.png',
        imagePosition: 'object-center',
        link: '/proyectos/suma-salut', // Linking to existing project page
        demoLink: 'https://sumasalut.com',
        status: 'Live',
    },

    // CAMPAÑAS GENERATIVAS (Se mantienen links internos existentes si los hay)
    {
        slug: 'munchs-burger',
        title: "Munch's Burger Club",
        type: 'Branding & Fotografía IA',
        category: 'generativa_tools',
        description: [
            'Identidad visual y naming generados por IA.',
            'Fotografía de producto hiperrealista (Midjourney).',
            'Cero sesiones de fotos físicas necesarias.'
        ],
        longDescription: 'Creamos una marca de hamburguesas completa desde cero sin cocinar una sola burger. Naming, logo, branding y, lo más impresionante, toda la fotografía de producto "food porn" generada sintéticamente con Midjourney.',
        problem: 'Los costes de lanzamiento de una marca ghost kitchen son altos, especialmente en fotografía y branding profesional.',
        solution: 'Generación de activos visuales de alton nivel con coste marginal cero, permitiendo validar la marca antes de abrir cocina.',
        tags: ['Branding', 'Midjourney', 'Food Styling'],
        image: '/images/munchs/burger-closeup.jpg',
        link: '/proyectos/munchs-burger-club',
        status: 'Case Study',
    },
    {
        slug: 'skyflex-shoes',
        title: 'Skyflex Shoes',
        type: 'Campaña Publicitaria Full AI',
        category: 'generativa_tools',
        description: [
            'Producto 3D integrado en entornos generados.',
            'Vídeos dinámicos promocionales.',
            'Campañas visuales en localizaciones imposibles.'
        ],
        longDescription: 'Llevamos unas zapatillas 3D a Marte, al desierto y a ciudades cyberpunk. Skyflex es una demostración de cómo la IA Generativa puede sustituir producciones publicitarias millonarias.',
        problem: 'Las campañas de moda requieren viajes, modelos, fotógrafos y logística compleja.',
        solution: 'Entornos virtuales fotorrealistas generados por IA donde integramos el producto 3D perfectamente.',
        tags: ['Moda', 'Product Placement', 'Video AI'],
        image: '/images/creative/skyflex-fence.jpg',
        link: '/proyectos/skyflex',
        status: 'Case Study',
    },
    {
        slug: 'luxhome-staging',
        title: 'LuxHome Staging',
        type: 'Virtual Staging Inmobiliario',
        category: 'generativa_tools',
        description: [
            'Amueblado digital de espacios vacíos.',
            'Estilos de decoración fotorrealistas.',
            'Aumenta el valor percibido de propiedades.'
        ],
        longDescription: 'Transformamos fotos de pisos vacíos y fríos en hogares acogedores y de diseño. Utilizando controlnets y generadores de imagen, amueblamos digitalmente cualquier espacio respetando su geometría.',
        problem: 'Vender pisos vacíos es difícil porque los compradores no visualizan el potencial. El Home Staging físico es caro.',
        solution: 'Virtual Staging rápido, barato y con múltiples estilos decorativos para seducir a diferentes perfiles de comprador.',
        tags: ['Real Estate', 'Virtual Staging', 'Ventas'],
        image: '/images/creative/real-estate.jpg',
        link: '/experimentos/luxhome-staging',
        status: 'Case Study',
    },

    // APPS PROPIAS
    {
        slug: 'aura-tasks',
        title: 'Aura Tasks AI',
        type: 'Productivity Super App',
        category: 'apps',
        description: [
            'Gestión de tareas con NLP avanzado.',
            'CTAs inteligentes (Llamar, Ubicación, Links).',
            'Planificación automática por IA.'
        ],
        longDescription: 'La app de tareas definitiva. Aura no solo guarda tus "to-dos", los entiende. Escribe "Llamar a mamá mañana" y Aura creará la tarea con fecha para mañana y un botón interactivo para llamar directamente. Si pones "Ir a Mercadona", te mostrará la ubicación. Además, organiza tu día automáticamente basándose en tu energía y plazos.',
        problem: 'Las listas de tareas son pasivas. Apuntas cosas pero la app no te ayuda a hacerlas, solo las lista. Requieren mucha configuración manual de fechas y etiquetas.',
        solution: 'Una lista de tareas activa e inteligente que reduce la fricción. Entiende el contexto (lugares, personas, fechas) y te da las herramientas para completar la acción con un clic.',
        tags: ['Productivity', 'NLP', 'Mobile App'],
        image: '/images/apps/aura-tasks.jpg',
        imagePosition: 'object-top',
        link: '/experimentos/aura-tasks',
        demoLink: 'https://aura-tasks-155010442763.us-west1.run.app',
        status: 'Live',
    },
    {
        slug: 'musikeeo',
        title: 'Musikeeo',
        type: 'Marketplace Musical',
        category: 'apps',
        description: [
            'Red social vertical para músicos.',
            'Marketplace de segunda mano y servicios.',
            'Pedidos a domicilio para conciertos (cuerdas, cables...).'
        ],
        longDescription: 'El ecosistema completo para el músico moderno. Musikeeo conecta a artistas para formar bandas, permite vender instrumentos de segunda mano con seguridad y ofrece un servicio único de "Delivery" de urgencia para necesidades en conciertos (cuerdas rotas, cables, baterías...).',
        problem: 'La industria musical está fragmentada: Wallapop para venta, foros para buscar banda, y nada para urgencias en bolos.',
        solution: 'Todo lo que un músico necesita en una sola app comunitaria. Networking, comercio y soluciones logísticas en tiempo real.',
        tags: ['Social Network', 'Marketplace', 'Music Tech'],
        image: '/images/apps/musikeeo-logo.jpg',
        link: '/experimentos/musikeeo',
        status: 'Concept',
    },

    // HERRAMIENTAS GENERATIVAS
    {
        slug: 'victors-image-studio',
        title: "Victor's Image Studio",
        type: 'Modelo LoRA Personalizado',
        category: 'generativa_tools',
        description: [
            'Generador de fotos profesionales de una persona.',
            'Entrenado con 20 fotos reales (Fine-tuning).',
            'Crea contenido en cualquier escenario.'
        ],
        longDescription: 'Entrenamos un modelo de IA (LoRA) con la cara de Víctor. Ahora podemos generar fotos suyas dando charlas TED, escalando el Everest o trabajando en oficinas futuristas. Es la herramienta definitiva de marca personal.',
        problem: 'Mantener un feed de redes sociales con fotos profesionales constantes requiere tiempo y fotógrafos.',
        solution: 'Un fotógrafo virtual que vive en la nube y puede generarte fotos perfectas en cualquier situación al instante.',
        tags: ['Stable Diffusion', 'Fine-tuning', 'Personal Brand'],
        image: '/images/learn/nano-banana-user.jpg',
        imagePosition: 'object-center',
        link: '/experimentos/victors-image-studio',
        demoLink: 'https://ai-image-edition-159705655877.us-west1.run.app',
        status: 'Tool',
    },
    {
        slug: 'ugc-avatar-studio',
        title: 'UGC Avatar Studio',
        type: 'Generador de Imágenes Avatar',
        category: 'generativa_tools',
        description: [
            'Crea avatares consistentes para marcas.',
            'Generación de personajes fotorrealistas.',
            'Ideal para thumbnails y creatividades estáticas.'
        ],
        longDescription: 'Herramienta diseñada para marcas que necesitan una cara visible pero no quieren depender de un influencer humano. Generamos personajes consistentes (siempre la misma cara) en diferentes poses, situaciones y vestuarios para usar en toda la comunicación gráfica.',
        problem: 'Depender de la imagen de una persona real es un riesgo para las marcas (se van, piden más dinero, polémicas).',
        solution: 'Un embajador de marca virtual, propiedad de la empresa, siempre disponible y adaptable a cualquier campaña.',
        tags: ['Avatares', 'Imagen Generativa', 'Branding'],
        image: '/images/avatars/woman-mic.jpg',
        imagePosition: 'object-center',
        link: '/experimentos/ugc-avatar-studio',
        demoLink: 'https://ugc-avatar-studio-159705655877.us-west1.run.app',
        status: 'Tool',
    },
    {
        slug: 'editor-fotos-ia',
        title: 'Editor de Fotos IA',
        type: 'Web App de Edición',
        category: 'generativa_tools',
        description: [
            'Eliminación de objetos y fondos (Inpainting).',
            'Restauración y mejora de calidad.',
            'Procesamiento en la nube en segundos.'
        ],
        longDescription: 'Una suite de herramientas de edición mágica en el navegador. Selecciona lo que quieres borrar y la IA rellenará el hueco coherentemente (Inpainting). O sube una foto antigua y restaúrala automáticamente.',
        problem: 'Editar fotos requiere Photoshop y conocimientos avanzados. Las herramientas online suelen ser caras o malas.',
        solution: 'Edición profesional accesible con un clic, potenciada por modelos de difusión open source optimizados.',
        tags: ['Inpainting', 'Image Editing', 'Web Tool'],
        image: '/images/projects/restoreai.png',
        link: '/experimentos/editor-fotos-ia',
        demoLink: 'https://ai-image-edition-159705655877.us-west1.run.app',
        status: 'Live Tool',
    },
    {
        slug: 'gestor-particulas-3d',
        title: 'Gestor de Partículas 3D',
        type: 'Experimento Interactivo',
        category: 'generativa_tools',
        description: [
            'Control de partículas con las manos (Webcam).',
            'Tecnología Vision Tech en el navegador.',
            'Experiencia visual reactiva en tiempo real.'
        ],
        longDescription: 'Un experimento de Creative Coding que mezcla visión por computador y gráficos 3D. Tu webcam detecta la posición de tus manos y crea campos de fuerza que afectan a miles de partículas en la pantalla. Magia en el navegador.',
        problem: 'Las webs suelen ser estáticas y aburridas. Falta interactividad real y sorprendente.',
        solution: 'Experiencias inmersivas o "wow moments" que retienen al usuario y demuestran capacidad tecnológica.',
        tags: ['WebGazer', 'Creative Coding', 'Interactive'],
        image: '/images/labs/particle-gesture.png',
        link: '/experimentos/gestor-particulas-3d',
        demoLink: 'https://gesture-particles-3d-159705655877.us-west1.run.app/',
        status: 'Demo',
    },
    {
        slug: 'skinflow',
        title: 'SkinFlow',
        type: 'Simulador Cosmético',
        category: 'generativa_tools',
        description: [
            'Analiza la piel mediante visión por computador.',
            'Simula efectos de cremas y texturas.',
            'Visualización en tiempo real sobre el rostro.'
        ],
        longDescription: 'Tecnología para e-commerce de cosmética. Analiza el rostro del usuario a través de la webcam, detecta arrugas, manchas o tono, y simula en tiempo real cómo quedaría un producto aplicado.',
        problem: 'Comprar cosmética online es difícil porque no sabes cómo te quedará o qué necesitas realmente.',
        solution: 'Un espejo virtual inteligente que diagnostica y demuestra el producto, aumentando la confianza y la conversión.',
        tags: ['Computer Vision', 'Beauty Tech', 'Simulación'],
        image: '/images/creative/cosmetica.png',
        link: '/experimentos/skinflow',
        demoLink: '#',
        status: 'Concept',
    },
    {
        slug: 'chleopatra-historias',
        title: 'Chleopatra - Historias IA',
        type: 'Plataforma EdTech',
        category: 'generativa_tools',
        description: [
            'Genera historias visuales educativas.',
            'Voces clonadas y vídeos sintéticos.',
            'Narrativa histórica inmersiva.'
        ],
        longDescription: 'Reinaginando la educación. Chleopatra genera documentales cortos sobre figuras históricas automáticamente. Escribe el guion, clona la voz del narrador, genera las imágenes y las anima.',
        problem: 'El contenido educativo histórico a veces es seco y poco atractivo para las nuevas generaciones.',
        solution: 'Storytelling visual inmersivo generado bajo demanda para hacer la historia fascinante.',
        tags: ['Storytelling', 'EdTech', 'Video AI'],
        image: '/images/creative/chleopatra-egypt.png',
        link: '/experimentos/chleopatra-historias',
        demoLink: 'https://chleopatra-history-reimagined-159705655877.us-west1.run.app',
        status: 'Tool',
    },
    {
        slug: 'restaurai',
        title: 'RestaurAI - Restaurant Brain',
        type: 'LLM Vertical de Hostelería',
        category: 'llms',
        description: [
            'Genera cartas y descripciones de platos.',
            'Gestiona reservas y atención al cliente.',
            'LLM especializado en el sector food.'
        ],
        longDescription: 'El cerebro digital para restaurantes. Un modelo de lenguaje (LLM) fine-tuneado con conocimiento gastronómico y de gestión hostelera. Ayuda a los dueños a crear menús atractivos, responder reseñas y gestionar la operativa.',
        problem: 'Los dueños de restaurantes saben de comida, no de copywriting, marketing digital o gestión de reservas online.',
        solution: 'Un experto en marketing y gestión hostelera disponible 24/7 para ayudar en las tareas digitales.',
        tags: ['Restaurant Tech', 'LLM', 'Hospitality'],
        image: '/images/projects/restoreai-real.png',
        link: '/experimentos/restaurai',
        status: 'Live Tool',
    },
    {
        slug: 'talent-brain',
        title: 'Talent Brain',
        type: 'LLM para Recursos Humanos',
        category: 'llms',
        description: [
            'Screening automático de currículums.',
            'Generador de ofertas de trabajo optimizadas.',
            'Análisis de compatibilidad cultural.'
        ],
        longDescription: 'Talent Brain es un asistente estratégico para departamentos de Recursos Humanos. Analiza cientos de CVs en segundos para encontrar los mejores perfiles, redacta descripciones de puesto libres de sesgos y ayuda a preparar preguntas de entrevista personalizadas.',
        problem: 'El cribado de CVs es la tarea más tediosa de RRHH. Se pierden buenos candidatos por fatiga o falta de tiempo.',
        solution: 'Inteligencia Artificial que lee y entiene perfiles a escala humana pero velocidad de máquina, liberando a los recruiters para la parte humana de la entrevista.',
        tags: ['HR Tech', 'Recruiting', 'LLM'],
        image: '/images/projects/talent-brain.png',
        imagePosition: 'object-center',
        link: '/experimentos/talent-brain',
        status: 'Concept',
    },

    // AUTOMATIZACIÓN
    {
        slug: 'jason-clickup',
        title: 'Jason ClickUp Manager',
        type: 'Agente de Productividad',
        category: 'automatizacion',
        description: [
            'Crea tareas en ClickUp mediante voz/texto.',
            'Asigna responsables y fechas inteligentemente.',
            'Automatiza la gestión de proyectos interna.'
        ],
        longDescription: 'Simplificando la burocracia interna. Jason ClickUp Manager vive en nuestro chat de empresa. Le dices "Recuérdame revisar el servidor mañana" y él interactúa con la API de ClickUp para crear la tarea, asignarla y ponerle fecha.',
        problem: 'Gestionar herramientas de Project Management suele llevar más tiempo que hacer el trabajo real. La fricción de abrir la app y rellenar campos mata la productividad.',
        solution: 'Gestión invisible. Interfaz de lenguaje natural para controlar herramientas complejas.',
        tags: ['Productividad', 'API Automation', 'NLP'],
        image: '/images/projects/json-clickup.png',
        link: '/experimentos/jason-clickup',
        status: 'Internal',
    },
    {
        slug: '94music-bot',
        title: '94Music Prospecting Agent',
        type: 'Bot de Scraping & Outreach',
        category: 'automatizacion',
        description: [
            'Busca clientes potenciales (Wedding Planners).',
            'Extrae emails y datos de contacto.',
            'Envía secuencias de correos personalizados.'
        ],
        longDescription: 'Un ejército de un solo bot. Este agente navega incansablemente por directorios de bodas y redes sociales, identifica Wedding Planners activos, consigue su contacto y lanza campañas de email marketing ultra-personalizadas.',
        problem: 'Encontrar clientes en el sector eventos es manual y tedioso.',
        solution: 'Prospección automatizada 24/7 que llena el pipeline de ventas mientras duermes.',
        tags: ['Web Scraping', 'Cold Email', 'B2B'],
        image: '/images/projects/94music-bot.png',
        link: '/experimentos/94music-bot',
        status: 'Internal',
    },
    {
        slug: 'traductor-pdf',
        title: 'Traductor PDF Masivo',
        type: 'Herramienta NLP',
        category: 'automatizacion',
        description: [
            'Traduce documentos de +100 páginas.',
            'Mantiene el formato original del PDF.',
            'Procesamiento masivo de documentación.'
        ],
        longDescription: 'Rompiendo barreras de idioma en documentos técnicos. Esta herramienta ingesta PDFs complejos, extrae el texto manteniendo la estructura, lo traduce con modelos neuronales de alta calidad y reconstruye el PDF idéntico al original.',
        problem: 'Traducir manuales o contratos manteniendo el diseño es una pesadilla de copiar-pegar.',
        solution: 'Traducción de documentos completos con un clic, preservando tablas, imágenes y maquetación.',
        tags: ['NLP', 'Translation', 'Document Processing'],
        image: '/images/tools/pdf_translator.png',
        link: '/experimentos/traductor-pdf',
        status: 'Tool',
    },
    {
        slug: 'business-consultant',
        title: 'Aether Business Consultant',
        type: 'Consultor Estratégico IA',
        category: 'automatizacion',
        description: [
            'Analiza URLs de negocios automáticamente.',
            'Detecta oportunidades de automatización.',
            'Genera informes estratégicos gratuitos.'
        ],
        longDescription: 'Nuestro Lead Magnet más potente. Introduce tu web y nuestra IA la analiza: tecnología, SEO, copy... y cruza esos datos con posibilidades de IA. Te entrega un PDF personalizado con ideas para mejorar tu negocio.',
        problem: 'Las empresas no saben por dónde empezar con la IA. Las consultoras tradicionales son lentas y caras.',
        solution: 'Consultoría preliminar instantánea y gratuita que aporta valor real y educa al cliente.',
        tags: ['Consultoría', 'Web Analysis', 'Lead Magnet'],
        image: '/images/projects/business-consultant.png',
        link: '/experimentos/business-consultant',
        status: 'Tool',
    },
    {
        slug: 'instagram-auto-agent',
        title: 'Instagram News Auto-Agent',
        type: 'Generador de Contenido Social',
        category: 'automatizacion',
        description: [
            'Monitoriza noticias del sector.',
            'Redacta guiones y diseña carruseles.',
            'Automatiza la publicación en Instagram.'
        ],
        longDescription: 'El Community Manager que nunca duerme. Escanea fuentes de noticias RSS, selecciona las relevantes para nuestro nicho, resume la info, e incluso genera el diseño gráfico del carrusel y el texto del post.',
        problem: 'Mantenerse relevante en redes sociales exige publicar diariamente, lo cual consume mucho tiempo de investigación y diseño.',
        solution: 'Automatización "End-to-End" de la estrategia de contenidos de actualidad.',
        tags: ['Social Media', 'Content Automation', 'Canva/Design'],
        image: '/images/agents/news-carousel.png',
        link: '/experimentos/instagram-auto-agent',
        status: 'In Progress',
    },
    {
        slug: 'melissa-influencer',
        title: 'Melissa - Influencer Reels Agent',
        type: 'Avatar Influencer Automático',
        category: 'automatizacion',
        description: [
            'Controla a nuestra influencer virtual "Melissa".',
            'Genera guiones basados en tendencias.',
            'Produce Reels completos hablando a cámara.'
        ],
        longDescription: 'Melissa es nuestra cara en redes. Este agente detecta audios en tendencia en TikTok/Reels, escribe un guion adaptado a la personalidad de Melissa y genera el vídeo final con su avatar hablando y gesticulando.',
        problem: 'Estar delante de la cámara es agotador y requiere habilidades de actuación y edición.',
        solution: 'Influencers virtuales que generan contenido viral programáticamente.',
        tags: ['Avatar Video', 'Viral Content', 'Influencer Marketing'],
        image: '/images/agents/melissa-influencer.png',
        imagePosition: 'object-top',
        link: '/experimentos/melissa-influencer',
        status: 'In Progress',
    },
];
