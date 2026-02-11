export interface AgentData {
    id: string;
    name: string;
    role: string;
    roleShort: string;
    model: string;
    image: string;
    badge?: string;
    idealFor: string[]; // Changed to array for bullet points
    description: string; // Used for "Beneficio" or short description in card
    benefit: string; // New field for "Beneficio"
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
        role: "VENTAS / SALES",
        roleShort: "Cierre de Ventas",
        model: "AH-700",
        image: "/images/agentes/Maria.png",
        badge: "TOP VENTAS",
        checklist: [
            "Filtra leads por presupuesto y urgencia.",
            "Detecta si hay decisor real.",
            "Empuja a llamada, visita o presupuesto."
        ],
        benefit: "👉 Menos llamadas inútiles. Más leads listos para cerrar.",
        idealFor: [
            "Servicios +1.000€ con muchos leads poco serios.",
            "Empresas con comerciales saturados.",
            "Negocios donde el chat se llena de \"solo miro\"."
        ],
        description: "Agente comercial IA especializada en cualificación, seguimiento y cierre de ventas.",
        heroDescription: "Diseñada para ser tu mejor comercial. María cualifica leads, gestiona objeciones de precio, agenda reuniones de alto valor y sincroniza todo con tu CRM automáticamente.",
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
        role: "ATENCIÓN AL CLIENTE",
        roleShort: "Atención 24/7",
        model: "AH-900",
        image: "/images/agentes/Laura.png",
        checklist: [
            "Atiende WhatsApp y llamadas 24/7.",
            "Agenda y confirma citas automáticamente.",
            "Responde dudas frecuentes al instante."
        ],
        benefit: "👉 Recupera llamadas y mensajes que hoy se pierden.",
        idealFor: [
            "Clínicas con muchas consultas diarias.",
            "Centros con llamadas fuera de horario.",
            "Negocios con no-shows frecuentes."
        ],
        description: "Agente de atención y citas. Laura atiende clientes, resuelve dudas y agenda citas sin saturar a tu equipo.",
        heroDescription: "Diseñada meticulosamente para ser la primera línea de tu negocio. Laura atiende clientes, resuelve dudas complejas y gestiona tu agenda en tiempo real, sin pausas ni esperas.",
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
        role: "TÉCNICO-COMERCIAL",
        roleShort: "Cualificación Técnica",
        model: "AH-500",
        image: "/images/agentes/Diego.png",
        checklist: [
            "Pide fotos, medidas y ubicación.",
            "Filtra presupuestos irreales.",
            "Prepara visitas técnicas con contexto."
        ],
        benefit: "👉 Menos “¿cuánto cuesta?” sin datos. Más presupuestos viables.",
        idealFor: [
            "Reformas y obra.",
            "Instaladores (clima, solar, calderas).",
            "Servicios técnicos con consultas caóticas."
        ],
        description: "Agente SDR especializado en cualificación y filtrado de leads.",
        heroDescription: "Tu SDR incansable. Diego filtra leads basura, recopila datos clave antes de la llamada y mantiene el seguimiento persistente por WhatsApp hasta conseguir la respuesta.",
        capabilities: [
            { icon: "🔬", title: "Filtrado Inteligente", desc: "Separa leads cualificados de curiosos con preguntas estratégicas calibradas para tu negocio." },
            { icon: "📋", title: "Recolección de Datos", desc: "Recopila toda la información que tu equipo necesita antes de la primera llamada humana." },
            { icon: "🔄", title: "Follow-up Persistente", desc: "Seguimiento automático por WhatsApp hasta obtener respuesta, sin ser invasivo." },
            { icon: "📊", title: "Scoring Automático", desc: "Puntúa cada lead según su intención de compra y capacidad de decisión." },
        ],
        useCases: [
            { emoji: "🔨", title: "Reformas", desc: "Solicitud de medidas y fotos previas a presupuesto." },
            { emoji: "⚡", title: "Instalaciones", desc: "Verificación de viabilidad técnica básica." },
            { emoji: "🚒", title: "Urgencias", desc: "Clasificación de averías por gravedad y tipo." },
        ],
        personality: [
            { title: "Directo y eficiente", desc: "Va al grano sin rodeos, respetando el tiempo del prospecto." },
            { title: "Investigador nato", desc: "Hace las preguntas correctas para extraer la información que necesitas." },
            { title: "Persistente con tacto", desc: "No deja que un lead se enfríe, pero nunca cruza la línea del spam." },
        ],
        workflow: [
            { step: "1", title: "Contacto Inicial", desc: "Diego responde al lead en menos de 5 segundos tras el formulario." },
            { step: "2", title: "Cualificación", desc: "Realiza preguntas técnicas (medidas, fotos, ubicación)." },
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
        role: "INMOBILIARIA & VISITAS",
        roleShort: "Gestión de Visitas",
        model: "AH-600",
        image: "/images/agentes/Álvaro.png",
        checklist: [
            "Filtra por zona y presupuesto.",
            "Distingue compra vs alquiler.",
            "Agenda solo visitas con encaje."
        ],
        benefit: "👉 Menos visitas perdidas. Más operaciones reales.",
        idealFor: [
            "Inmobiliarias con mucho lead curioso.",
            "Alquiler y compraventa urbana.",
            "Equipos que pierden tiempo en visitas inútiles."
        ],
        description: "Agente inmobiliario para filtrado y visitas.",
        heroDescription: "Tu primer nivel de soporte perfecto. Álvaro diagnostica problemas técnicos, proporciona guías paso a paso y se integra con tu sistema de ticketing para resolver incidencias sin demora.",
        capabilities: [
            { icon: "🏠", title: "Filtrado Inmobiliario", desc: "Pregunta zona, presupuesto y requisitos antes de agendar nada." },
            { icon: "📅", title: "Gestión de Visitas", desc: "Coordina agendas de compradores y agentes automáticamente." },
            { icon: "🔔", title: "Alertas de Stock", desc: "Avisa a leads antiguos cuando entra una propiedad que les encaja." },
            { icon: "📄", title: "Documentación", desc: "Solicita nóminas o garantías antes de la visita si es necesario." },
        ],
        useCases: [
            { emoji: "🏙️", title: "Agencias Inmobiliarias", desc: "Cualificación de portales inmobiliarios." },
            { emoji: "🏘️", title: "Promotoras", desc: "Gestión de leads de obra nueva." },
            { emoji: "🔑", title: "Alquileres", desc: "Filtrado masivo de candidatos inquilinos." },
        ],
        personality: [
            { title: "Empático y profesional", desc: "Entiende que buscar casa es emocional, pero mantiene el foco en el cierre." },
            { title: "Organizado", desc: "No deja que ninguna visita se solape o se olvide." },
            { title: "Proactivo", desc: "Propone alternativas si la propiedad solicitada ya no está disponible." },
        ],
        workflow: [
            { step: "1", title: "Recepción", desc: "Álvaro recibe el lead desde Idealista, Fotocasa o web." },
            { step: "2", title: "Filtrado", desc: "Verifica si el lead tiene presupuesto y requisitos reales." },
            { step: "3", title: "Agendamiento", desc: "Ofrece huecos de visita solo a leads cualificados." },
            { step: "4", title: "Confirmación", desc: "Envía recordatorios para minimizar no-shows." },
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
        role: "SOPORTE & OPERACIONES",
        roleShort: "Soporte Operativo",
        model: "AH-800",
        image: "/images/agentes/Clara.png",
        checklist: [
            "Gestiona incidencias y FAQs.",
            "Recoge datos mínimos por proceso.",
            "Escala a humano con todo preparado."
        ],
        benefit: "👉 Menos tickets repetidos. Soporte más rápido y ordenado.",
        idealFor: [
            "E-commerce con alto volumen.",
            "Academias y membresías.",
            "Negocios con WhatsApp saturado."
        ],
        description: "Agente de soporte y operaciones para gestión masiva.",
        heroDescription: "Construida para la escala. Clara gestiona cientos de conversaciones simultáneas sin degradar la calidad, manteniendo respuestas consistentes y recopilando datos valiosos de cada interacción.",
        capabilities: [
            { icon: "🎫", title: "Gestión de Incidencias", desc: "Clasifica y resuelve problemas comunes automáticamente." },
            { icon: "📦", title: "Estado de Pedidos", desc: "Informa sobre envíos y devoluciones conectada a tu ERP." },
            { icon: "🔄", title: "Procesos Recurrentes", desc: "Automatiza cambios de datos, bajas o renovaciones." },
            { icon: "⚡", title: "Respuesta Masiva", desc: "Atiende picos de miles de mensajes sin latencia." },
        ],
        useCases: [
            { emoji: "🛒", title: "E-commerce", desc: "Atención post-venta y logística." },
            { emoji: "🎓", title: "Formación", desc: "Soporte a alumnos y acceso a plataformas." },
            { emoji: "🚚", title: "Logística", desc: "Gestión de incidencias de entrega." },
        ],
        personality: [
            { title: "Eficiente y directa", desc: "Resuelve consultas rápidamente sin perder tiempo en conversación innecesaria." },
            { title: "Consistente", desc: "Mantiene el mismo estándar de calidad en la conversación 1 y en la 10.000." },
            { title: "Resolutiva", desc: "Se enfoca en cerrar el ticket con solución, no solo en responder." },
        ],
        workflow: [
            { step: "1", title: "Recepción", desc: "Clara recibe la incidencia por cualquier canal." },
            { step: "2", title: "Identificación", desc: "Solicita número de pedido o ID de cliente automáticamente." },
            { step: "3", title: "Resolución", desc: "Consulta el estado y da la información o ejecuta el cambio." },
            { step: "4", title: "Cierre", desc: "Confirma satisfacción y cierra el ticket." },
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
        role: "ATENCIÓN & FIDELIZACIÓN",
        roleShort: "Fidelización de Clientes",
        model: "AH-1000",
        image: "/images/agentes/Latina.png",
        checklist: [
            "Resuelve dudas sensibles.",
            "Da seguimiento post-venta.",
            "Evita abandonos silenciosos."
        ],
        benefit: "👉 Menos quejas. Más clientes que se quedan.",
        idealFor: [
            "Servicios recurrentes.",
            "Clínicas y centros con seguimiento.",
            "Negocios donde la experiencia importa."
        ],
        description: "Agente de fidelización y calidad.",
        heroDescription: "Tu experta en fidelización. Daniela se asegura de que tus clientes estén felices, resuelve dudas sensibles con empatía y detecta riesgos de baja antes de que ocurran.",
        capabilities: [
            { icon: "❤️", title: "Empatía Digital", desc: "Detecta frustración y adapta su tono para calmar y resolver." },
            { icon: "⭐", title: "Encuestas de Calidad", desc: "Recoge feedback real justo después del servicio." },
            { icon: "🎁", title: "Reactivación", desc: "Contacta con clientes inactivos para ofrecerles volver." },
            { icon: "🛡️", title: "Retención", desc: "Detecta intención de baja y ofrece alternativas para quedarse." },
        ],
        useCases: [
            { emoji: "🧘‍♀️", title: "Centros Wellness", desc: "Seguimiento de tratamientos y satisfacción." },
            { emoji: "💳", title: "Suscripciones", desc: "Gestión de bajas y upgrades." },
            { emoji: "🏨", title: "Hospitality", desc: "Atención al huésped y feedback post-estancia." },
        ],
        personality: [
            { title: "Cálida y cercana", desc: "Genera confianza rápidamente con un trato amable y natural." },
            { title: "Proactiva", desc: "Se anticipa a los problemas antes de que el cliente se queje." },
            { title: "Detallista", desc: "Recuerda preferencias y detalles de conversaciones pasadas." },
        ],
        workflow: [
            { step: "1", title: "Seguimiento", desc: "Daniela contacta al cliente tras la venta o servicio." },
            { step: "2", title: "Feedback", desc: "Pregunta qué tal ha ido todo y escucha activamente." },
            { step: "3", title: "Solución", desc: "Si hay un problema, lo resuelve o compensa al momento." },
            { step: "4", title: "Loyalty", desc: "Agradece y refuerza la relación para la próxima compra." },
        ],
        stats: [
            { value: "0.3s", label: "Latencia" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "ES/EN/PT", label: "Idiomas" },
        ],
    },
];
