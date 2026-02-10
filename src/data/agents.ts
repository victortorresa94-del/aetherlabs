export interface AgentData {
    id: string;
    name: string;
    role: string;
    roleShort: string;
    model: string;
    image: string;
    badge?: string;
    idealFor: string;
    description: string;
    heroDescription: string;
    checklist: string[];
    capabilities: { icon: string; title: string; desc: string }[];
    useCases: { emoji: string; title: string; desc: string }[];
    personality: { title: string; desc: string }[];
    workflow: { step: string; title: string; desc: string }[];
    stats: { value: string; label: string }[];
}

export const agentsData: AgentData[] = [
    {
        id: "maria",
        name: "María",
        role: "Ventas / Sales",
        roleShort: "Cierre de Ventas y Negociación",
        model: "AH-700",
        image: "/images/agentes/Maria.png",
        badge: "TOP VENTAS",
        idealFor: "Inmobiliarias y Servicios High-Ticket",
        description: "Agente comercial IA especializada en cualificación, seguimiento y cierre de ventas. María gestiona tu pipeline 24/7 y solo te pasa oportunidades listas para cerrar.",
        heroDescription: "Diseñada para ser tu mejor comercial. María cualifica leads, gestiona objeciones de precio, agenda reuniones de alto valor y sincroniza todo con tu CRM automáticamente.",
        checklist: [
            "Cualificación y filtrado 24/7.",
            "Agenda reuniones de alto valor.",
            "Sincronización con CRM.",
        ],
        capabilities: [
            { icon: "🎯", title: "Cualificación Inteligente", desc: "Filtra leads automáticamente según criterios de valor, descartando curiosos y priorizando oportunidades reales." },
            { icon: "💰", title: "Gestión de Objeciones", desc: "Maneja objeciones de precio y competencia en tiempo real con argumentos personalizados." },
            { icon: "📅", title: "Agendamiento Directo", desc: "Sincronización bidireccional con tu calendario. María encuentra huecos y confirma reuniones de alto valor." },
            { icon: "📊", title: "Pipeline Automatizado", desc: "Cada lead avanza por tu pipeline sin intervención manual. Tu CRM siempre actualizado." },
        ],
        useCases: [
            { emoji: "🏠", title: "Inmobiliarias", desc: "Cualificación de compradores y agendamiento de visitas." },
            { emoji: "💼", title: "Consultoría B2B", desc: "Filtrado de empresas y agendamiento de discovery calls." },
            { emoji: "🚗", title: "Concesionarios", desc: "Gestión de interesados y pruebas de conducción." },
        ],
        personality: [
            { title: "Persuasiva pero honesta", desc: "Argumenta con datos reales, nunca promete lo que no puede cumplir." },
            { title: "Persistente sin ser invasiva", desc: "Follow-up inteligente que respeta los tiempos del cliente." },
            { title: "Orientada a resultados", desc: "Cada conversación tiene un objetivo claro: avanzar el lead en el pipeline." },
        ],
        workflow: [
            { step: "1", title: "Captación", desc: "María recibe el lead desde WhatsApp, web o formulario." },
            { step: "2", title: "Cualificación", desc: "Hace preguntas estratégicas para evaluar presupuesto e intención real." },
            { step: "3", title: "Negociación", desc: "Presenta propuestas, gestiona objeciones y genera urgencia." },
            { step: "4", title: "Cierre", desc: "Agenda la reunión final o cierra directamente. Tu equipo solo interviene para firmar." },
        ],
        stats: [
            { value: "0.3s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN", label: "Idiomas" },
        ],
    },
    {
        id: "laura",
        name: "Laura",
        role: "Atención al Cliente",
        roleShort: "Atención al Cliente 24/7",
        model: "AH-900",
        image: "/images/agentes/Laura.png",
        idealFor: "Clínicas, Despachos y Servicios",
        description: "Agente de atención y citas. Laura atiende clientes, resuelve dudas y agenda citas sin saturar a tu equipo.",
        heroDescription: "Diseñada meticulosamente para ser la primera línea de tu negocio. Laura atiende clientes, resuelve dudas complejas y gestiona tu agenda en tiempo real, sin pausas ni esperas.",
        checklist: [
            "Resolución de tickets L1.",
            "Aprendizaje continuo.",
            "Escalado inteligente a humanos.",
        ],
        capabilities: [
            { icon: "⚡", title: "Respuesta Inmediata", desc: "Atención instantánea a cualquier hora. Laura nunca duerme y escala infinitamente según la demanda." },
            { icon: "📅", title: "Gestión de Calendario", desc: "Sincronización bidireccional con tu agenda. Laura encuentra huecos y confirma citas automáticamente." },
            { icon: "🔍", title: "Cualificación de Leads", desc: "Filtra curiosos de clientes potenciales reales mediante preguntas estratégicas antes de pasártelos." },
            { icon: "🎧", title: "Soporte Nivel 1", desc: "Resuelve el 80% de las dudas frecuentes sin intervención humana, liberando a tu equipo." },
        ],
        useCases: [
            { emoji: "🦷", title: "Clínicas Dentales y de Salud", desc: "Gestión de pacientes recurrentes y recordatorios de citas." },
            { emoji: "⚖️", title: "Despachos Legales", desc: "Recepción de casos y filtrado inicial de clientes." },
            { emoji: "💇‍♀️", title: "Centros de Estética y Bienestar", desc: "Reservas automáticas y gestión de cancelaciones." },
        ],
        personality: [
            { title: "Tono cercano y profesional", desc: "Se adapta a la voz de tu marca. Puede ser formal para un despacho o relajada para un gimnasio." },
            { title: "Empática pero eficiente", desc: "Entiende frustraciones y responde con paciencia, pero siempre con el objetivo de resolver el problema rápido." },
            { title: "Proactiva", desc: "No solo responde; sugiere huecos libres o recuerda documentos pendientes." },
        ],
        workflow: [
            { step: "1", title: "Recepción", desc: "Laura recibe el mensaje vía WhatsApp o WebChat al instante." },
            { step: "2", title: "Análisis", desc: "Interpreta la intención, tono y necesidad específica del usuario." },
            { step: "3", title: "Acción", desc: "Consulta tu CRM/Calendario en tiempo real para verificar datos." },
            { step: "4", title: "Resolución", desc: "Confirma la cita, responde la duda o escala si es necesario." },
        ],
        stats: [
            { value: "0.2s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN", label: "Idiomas" },
        ],
    },
    {
        id: "diego",
        name: "Diego",
        role: "Cualificación de Leads (SDR)",
        roleShort: "Cualificación de Leads (SDR)",
        model: "AH-500",
        image: "/images/agentes/Diego.png",
        idealFor: "B2B y Consultoría",
        description: "Agente SDR especializado en cualificación y filtrado de leads. Diego separa curiosos de compradores reales antes de que lleguen a tu equipo.",
        heroDescription: "Tu SDR incansable. Diego filtra leads basura, recopila datos clave antes de la llamada y mantiene el seguimiento persistente por WhatsApp hasta conseguir la respuesta.",
        checklist: [
            "Interacciones de voz naturales.",
            "Soporte multilingüe real.",
            "Análisis de sentimiento.",
        ],
        capabilities: [
            { icon: "🔬", title: "Filtrado Inteligente", desc: "Separa leads cualificados de curiosos con preguntas estratégicas calibradas para tu negocio." },
            { icon: "📋", title: "Recolección de Datos", desc: "Recopila toda la información que tu equipo necesita antes de la primera llamada humana." },
            { icon: "🔄", title: "Follow-up Persistente", desc: "Seguimiento automático por WhatsApp hasta obtener respuesta, sin ser invasivo." },
            { icon: "📊", title: "Scoring Automático", desc: "Puntúa cada lead según su intención de compra y capacidad de decisión." },
        ],
        useCases: [
            { emoji: "🏢", title: "Consultorías B2B", desc: "Filtrado de empresas según facturación, sector y necesidad real." },
            { emoji: "💻", title: "SaaS y Tecnología", desc: "Cualificación de trials y demo requests antes de asignar comercial." },
            { emoji: "📈", title: "Agencias de Marketing", desc: "Evaluación de presupuesto y expectativas antes de la propuesta." },
        ],
        personality: [
            { title: "Directo y eficiente", desc: "Va al grano sin rodeos, respetando el tiempo del prospecto." },
            { title: "Investigador nato", desc: "Hace las preguntas correctas para extraer la información que necesitas." },
            { title: "Persistente con tacto", desc: "No deja que un lead se enfríe, pero nunca cruza la línea del spam." },
        ],
        workflow: [
            { step: "1", title: "Contacto Inicial", desc: "Diego responde al lead en menos de 5 segundos tras el formulario." },
            { step: "2", title: "Cualificación", desc: "Realiza preguntas BANT (Budget, Authority, Need, Timeline)." },
            { step: "3", title: "Scoring", desc: "Asigna puntuación y etiquetas al lead según sus respuestas." },
            { step: "4", title: "Handoff", desc: "Pasa el lead cualificado a tu equipo con toda la información lista." },
        ],
        stats: [
            { value: "0.4s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN", label: "Idiomas" },
        ],
    },
    {
        id: "alvaro",
        name: "Álvaro",
        role: "Soporte Técnico N1",
        roleShort: "Soporte Técnico Nivel 1",
        model: "AH-600",
        image: "/images/agentes/Álvaro.png",
        idealFor: "SaaS y Tecnología",
        description: "Agente de soporte técnico de primer nivel. Álvaro diagnostica problemas, guía paso a paso y solo escala lo que realmente necesita un humano.",
        heroDescription: "Tu primer nivel de soporte perfecto. Álvaro diagnostica problemas técnicos, proporciona guías paso a paso y se integra con tu sistema de ticketing para resolver incidencias sin demora.",
        checklist: [
            "Diagnóstico de problemas técnicos.",
            "Guías paso a paso.",
            "Integración con ticketing.",
        ],
        capabilities: [
            { icon: "🔧", title: "Diagnóstico Rápido", desc: "Identifica la causa raíz del problema técnico con preguntas estructuradas en menos de 2 minutos." },
            { icon: "📖", title: "Guías Interactivas", desc: "Proporciona instrucciones paso a paso adaptadas al nivel técnico del usuario." },
            { icon: "🎫", title: "Gestión de Tickets", desc: "Crea, actualiza y cierra tickets automáticamente en tu sistema de soporte." },
            { icon: "⬆️", title: "Escalado Inteligente", desc: "Solo escala a humanos los casos que realmente lo necesitan, con todo el contexto documentado." },
        ],
        useCases: [
            { emoji: "💻", title: "Empresas SaaS", desc: "Resolución de dudas técnicas y onboarding de usuarios." },
            { emoji: "🛒", title: "E-commerce", desc: "Problemas con pedidos, pagos y acceso a cuentas." },
            { emoji: "📱", title: "Apps Móviles", desc: "Soporte técnico para instalación, configuración y bugs." },
        ],
        personality: [
            { title: "Paciente y didáctico", desc: "Explica conceptos técnicos de forma sencilla, sin jerga innecesaria." },
            { title: "Metódico", desc: "Sigue protocolos de diagnóstico probados para no dejar cabos sueltos." },
            { title: "Resolutivo", desc: "Su objetivo es cerrar el ticket en la primera interacción siempre que sea posible." },
        ],
        workflow: [
            { step: "1", title: "Recepción", desc: "Álvaro recibe el ticket o mensaje de soporte al instante." },
            { step: "2", title: "Diagnóstico", desc: "Realiza preguntas técnicas para identificar la causa raíz." },
            { step: "3", title: "Resolución", desc: "Proporciona la solución paso a paso o aplica la corrección." },
            { step: "4", title: "Verificación", desc: "Confirma que el problema está resuelto y cierra el ticket." },
        ],
        stats: [
            { value: "0.3s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN", label: "Idiomas" },
        ],
    },
    {
        id: "clara",
        name: "Clara",
        role: "Atención Masiva",
        roleShort: "Gestión de Alto Volumen",
        model: "AH-800",
        image: "/images/agentes/Clara.png",
        idealFor: "E-commerce y Retail",
        description: "Agente diseñada para gestionar picos masivos de tráfico. Clara mantiene respuestas consistentes y recopila datos a escala sin perder calidad.",
        heroDescription: "Construida para la escala. Clara gestiona cientos de conversaciones simultáneas sin degradar la calidad, manteniendo respuestas consistentes y recopilando datos valiosos de cada interacción.",
        checklist: [
            "Gestión de picos de tráfico.",
            "Respuestas consistentes.",
            "Recopilación de datos masiva.",
        ],
        capabilities: [
            { icon: "📈", title: "Escalabilidad Infinita", desc: "Gestiona 10 o 10.000 conversaciones simultáneas sin perder calidad ni velocidad." },
            { icon: "🎯", title: "Consistencia Total", desc: "Cada cliente recibe la misma calidad de atención, independientemente del volumen." },
            { icon: "📊", title: "Recopilación Masiva", desc: "Extrae datos y patrones de miles de conversaciones para optimizar tu negocio." },
            { icon: "🔥", title: "Gestión de Crisis", desc: "Preparada para picos de demanda en Black Friday, lanzamientos y eventos." },
        ],
        useCases: [
            { emoji: "🛒", title: "E-commerce", desc: "Atención masiva durante campañas y eventos de venta." },
            { emoji: "🏬", title: "Retail", desc: "Gestión de consultas de stock, envíos y devoluciones a escala." },
            { emoji: "🎫", title: "Eventos", desc: "Venta de entradas y atención a asistentes en tiempo real." },
        ],
        personality: [
            { title: "Eficiente y directa", desc: "Resuelve consultas rápidamente sin perder tiempo en conversación innecesaria." },
            { title: "Consistente", desc: "Mantiene el mismo estándar de calidad en la conversación 1 y en la 10.000." },
            { title: "Data-driven", desc: "Cada interacción genera datos accionables para tu equipo de marketing." },
        ],
        workflow: [
            { step: "1", title: "Recepción Masiva", desc: "Clara recibe cientos de mensajes simultáneos sin cola de espera." },
            { step: "2", title: "Clasificación", desc: "Categoriza cada consulta por tipo, urgencia y valor potencial." },
            { step: "3", title: "Resolución Paralela", desc: "Gestiona todas las conversaciones en paralelo con calidad uniforme." },
            { step: "4", title: "Reporting", desc: "Genera informes en tiempo real de patrones, quejas y oportunidades." },
        ],
        stats: [
            { value: "0.1s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN/PT", label: "Idiomas" },
        ],
    },
    {
        id: "daniela",
        name: "Daniela",
        role: "Expansión Latam",
        roleShort: "Expansión Mercado Latam",
        model: "AH-1000",
        image: "/images/agentes/Latina.png",
        idealFor: "Empresas con mercado Latam",
        description: "Agente especializada en mercados latinoamericanos. Daniela adapta guiones, maneja modismos locales y opera en horario extendido para cubrir todas las zonas horarias.",
        heroDescription: "Tu puerta de entrada a Latinoamérica. Daniela domina los matices culturales de cada país, adapta tu mensaje al mercado local y opera en horario extendido para cubrir México, Colombia, Argentina y más.",
        checklist: [
            "Adaptación cultural de guiones.",
            "Modismos y jerga local.",
            "Horario extendido.",
        ],
        capabilities: [
            { icon: "🌎", title: "Adaptación Cultural", desc: "Adapta el tono y vocabulario según el país: México, Colombia, Argentina, Chile y más." },
            { icon: "🗣️", title: "Modismos Locales", desc: "Habla como un local. Entiende y usa expresiones propias de cada región." },
            { icon: "🕐", title: "Cobertura Horaria Total", desc: "Opera en todas las zonas horarias de Latam sin interrupciones." },
            { icon: "📋", title: "Localización de Procesos", desc: "Adapta flujos de venta y soporte a las particularidades de cada mercado." },
        ],
        useCases: [
            { emoji: "🏢", title: "Empresas en Expansión", desc: "Primer punto de contacto en nuevos mercados latinoamericanos." },
            { emoji: "🛍️", title: "E-commerce Cross-Border", desc: "Atención al cliente en español neutro o localizado por país." },
            { emoji: "📚", title: "EdTech", desc: "Soporte y ventas para plataformas educativas en toda Latam." },
        ],
        personality: [
            { title: "Cálida y cercana", desc: "Genera confianza rápidamente con un trato amable y natural." },
            { title: "Culturalmente sensible", desc: "Nunca usa expresiones que puedan ser malinterpretadas en otro país." },
            { title: "Bilingüe nativa", desc: "Maneja español e inglés con fluidez total y sin traducciones forzadas." },
        ],
        workflow: [
            { step: "1", title: "Detección de Origen", desc: "Daniela identifica el país del lead por IP, prefijo o contexto." },
            { step: "2", title: "Localización", desc: "Adapta vocabulario, tono y referencias culturales al país detectado." },
            { step: "3", title: "Gestión", desc: "Cualifica, atiende o agenda según el flujo definido para ese mercado." },
            { step: "4", title: "Reporting Regional", desc: "Genera métricas separadas por país para optimizar la estrategia Latam." },
        ],
        stats: [
            { value: "0.3s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN/PT", label: "Idiomas" },
        ],
    },
];
