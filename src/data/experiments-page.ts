export type ExperimentStatus = 'live' | 'deployed' | 'development' | 'concept';
export type GeometryType = 'sphere' | 'torus' | 'box' | 'cone' | 'icosahedron' | 'octahedron' | 'cylinder';
export type AnimationType = 'float' | 'rotate' | 'pulse';

export interface ExperimentMetric {
  value: string;
  label: string;
}

export interface Experiment {
  id: string;
  number: string;
  name: string;
  accentColor: string;
  status: ExperimentStatus;
  sector: string;
  tags: string[];
  headline: string;
  subheadline: string;
  description: string;
  solution: string;
  metrics?: ExperimentMetric[];
  ctaHref: string;
  geometry: GeometryType;
  animationType: AnimationType;
  particleCount: number;
  hasLiveDemo?: boolean;
  demoContext?: string;
}

export const experiments: Experiment[] = [
  {
    id: 'bamba-stock',
    number: '01',
    name: 'Bamba Stock',
    accentColor: '#FF6B35',
    status: 'concept',
    sector: 'Retail físico',
    tags: ['Computer Vision', 'WordPress API', 'Inventory AI', 'Mobile App'],
    headline: '¿Cuánto tiempo tardas en subir 300 bambas a la web?',
    subheadline: 'Una tienda de zapatillas. Un solo empleado. 300 referencias.',
    description: 'El dueño de una tienda de zapatillas con tres locales gestionaba su catálogo manualmente. Fotografiar, recortar, describir, categorizar. Horas por semana. Tiempo que no tiene.',
    solution: 'App móvil: haces una foto a la bamba. La IA genera la ficha completa — nombre, descripción, precio sugerido, fondo limpio, categorías. Stock actualizado en tiempo real en los tres locales. WordPress sincronizado automáticamente.',
    metrics: [
      { value: '45s → 8s', label: 'Tiempo por producto' },
      { value: '+300', label: 'Productos catalogados' },
      { value: '~12h', label: 'Horas/semana recuperadas' },
    ],
    ctaHref: '/contacto',
    geometry: 'sphere',
    animationType: 'pulse',
    particleCount: 80,
  },
  {
    id: 'artiverse',
    number: '02',
    name: 'Artiverse',
    accentColor: '#2563EB',
    status: 'deployed',
    sector: 'Artes escénicas',
    tags: ['Email Automation', 'Instantly.ai', 'Lead Enrichment', 'WhatsApp AI'],
    headline: '¿Cuántos emails sin respuesta llevas esta semana?',
    subheadline: 'El sector cultural lleva 30 años con el mismo problema: contactar programadores es manual, lento y sin seguimiento.',
    description: 'Bonito Sound — manager con 30 años en la industria — necesitaba escala. Artiverse necesitaba conectar artistas con salas, festivales y teatros de toda España.',
    solution: 'Sistema de outreach automatizado: 6 segmentos de audiencia, secuencias de email a medida, enriquecimiento de contactos con IA, WhatsApp manual asistido por Claude. Todo orquestado desde Instantly.ai.',
    metrics: [
      { value: '6', label: 'Segmentos activos' },
      { value: '18', label: 'Emails por secuencia' },
      { value: '60%', label: 'Contactos vía Instagram' },
    ],
    ctaHref: '/contacto',
    geometry: 'icosahedron',
    animationType: 'rotate',
    particleCount: 120,
  },
  {
    id: 'suma-salut',
    number: '03',
    name: 'Suma Salut',
    accentColor: '#10B981',
    status: 'deployed',
    sector: 'Salud / Clínicas',
    tags: ['LLM Fine-tuning', 'RAG', 'WhatsApp Integration', 'Healthcare AI'],
    headline: 'Tu recepcionista contesta las mismas 5 preguntas 40 veces al día.',
    subheadline: 'Una clínica. Pacientes con las mismas dudas. Un equipo que merece hacer cosas más importantes.',
    description: 'La clínica recibía un flujo constante de consultas repetitivas: horarios, coberturas, preparación para pruebas, precios. El equipo humano resolvía estas consultas en horas, a veces días.',
    solution: 'Chatbot conversacional entrenado con la documentación de la clínica. Responde al 80% de consultas sin intervención humana, 24/7. Escala a humano cuando detecta urgencia o complejidad.',
    metrics: [
      { value: '~80%', label: 'Consultas sin intervención' },
      { value: '24/7', label: 'Disponibilidad' },
      { value: '<3s', label: 'Tiempo de respuesta' },
    ],
    ctaHref: '/contacto',
    geometry: 'torus',
    animationType: 'float',
    particleCount: 100,
    hasLiveDemo: true,
    demoContext: 'Eres el asistente virtual de Suma Salut, una clínica privada en Barcelona. Respondes preguntas sobre horarios (lunes a viernes 9-20h, sábados 9-14h), seguros médicos aceptados (Adeslas, Asisa, Sanitas, Mapfre, DKV), preparación para analíticas (ayuno de 8h), precio consulta general (65€), y especialidades disponibles (medicina general, pediatría, ginecología, nutrición, psicología). Sé breve, cálido y profesional. Si hay una urgencia, indica llamar al 93 123 45 67.',
  },
  {
    id: 'bramer',
    number: '04',
    name: 'Bramer',
    accentColor: '#F59E0B',
    status: 'development',
    sector: 'Servicios técnicos',
    tags: ['Voice-to-Form AI', 'Custom ERP', 'Computer Vision', 'B2B SaaS'],
    headline: 'Tu técnico termina la jornada. Aún tiene 8 partes que rellenar.',
    subheadline: 'Sistema de servicio técnico hecho en 2019. Interface de 2003. Procesos que se hacen a mano porque nadie pensó que había otra forma.',
    description: '4 horas auditando sus procesos internos: gestión de incidencias, albaranes, fotos de reparación, firma de actas, comunicación con clientes. Todo manual. Un ERP que nadie quiere usar porque es insoportable.',
    solution: 'ERP a medida con IA integrada: el técnico dicta el parte por voz, la IA estructura el acta, las fotos se categorizan automáticamente, el cliente recibe notificación automática. Panel de gestión moderno.',
    metrics: [
      { value: '15min → 2min', label: 'Tiempo por parte' },
      { value: '+40.000', label: 'SATs en España' },
      { value: 'En build', label: 'Estado actual' },
    ],
    ctaHref: '/contacto',
    geometry: 'octahedron',
    animationType: 'rotate',
    particleCount: 90,
  },
  {
    id: 'bonito-sound',
    number: '05',
    name: 'Bonito Sound',
    accentColor: '#8B5CF6',
    status: 'development',
    sector: 'Industria musical',
    tags: ['Web Design', 'WordPress', 'Music Industry', 'SEO'],
    headline: 'Una agencia musical con 30 años de historia. Una web de 2015.',
    subheadline: 'El portfolio más importante de tu negocio no puede vivir en WordPress sin actualizar.',
    description: 'Bonito Sound: manager de referencia en España e internacional. Maldita Nerea, Jaleo Sound Amsterdam. El negocio crece. La web, no.',
    solution: 'Rediseño completo: identidad visual renovada, catálogo de artistas dinámico, integración con Artiverse para booking directo, SEO para búsquedas de booking en España.',
    ctaHref: '/contacto',
    geometry: 'cylinder',
    animationType: 'pulse',
    particleCount: 150,
  },
  {
    id: 'musikeo',
    number: '06',
    name: 'Musikeo',
    accentColor: '#EC4899',
    status: 'concept',
    sector: 'Música / Marketplace',
    tags: ['Marketplace', 'AI Matching', 'Music Tech', 'Startup'],
    headline: 'Eres músico y llevas 3 grupos de WhatsApp para encontrar un bajo para el sábado.',
    subheadline: 'El mercado del material técnico musical en España funciona como en 1998.',
    description: 'Músicos que necesitan material de alquiler urgente, colaboradores para directos, backline de última hora. Todo por grupos de Facebook, mensajes privados, recomendaciones boca a boca.',
    solution: 'Plataforma marketplace: alquiler de material técnico en 24h, red de colaboradores verificados por instrumento y ciudad, sistema de contratación urgente con IA de matching por disponibilidad y estilo.',
    ctaHref: '/contacto',
    geometry: 'cone',
    animationType: 'float',
    particleCount: 80,
  },
  {
    id: 'restaurante-ia',
    number: '07',
    name: 'Restaurante IA',
    accentColor: '#EF4444',
    status: 'concept',
    sector: 'Hostelería',
    tags: ['WhatsApp Business API', 'Reservation AI', 'Restaurant Tech', 'Automation'],
    headline: '¿Tenéis terraza? ¿Hay gluten? ¿A qué hora cerráis?',
    subheadline: 'Tu restaurante recibe las mismas 3 preguntas 40 veces al día. Por WhatsApp. Por Instagram. Por Google.',
    description: 'Un restaurante medio en España gestiona entre 50 y 150 mensajes diarios en diferentes canales. La mayoría son las mismas preguntas. El equipo responde manualmente, a veces tarde, a veces mal.',
    solution: 'Agente WhatsApp Business + Instagram DM: responde FAQs, gestiona reservas, envía el menú en PDF, informa sobre alérgenos, escala a humano cuando hay una queja o situación compleja.',
    metrics: [
      { value: '~75%', label: 'Mensajes automatizables' },
      { value: '72h', label: 'Tiempo de setup' },
      { value: 'desde 800€', label: 'Precio implementación' },
    ],
    ctaHref: '/contacto',
    geometry: 'box',
    animationType: 'rotate',
    particleCount: 100,
    hasLiveDemo: true,
    demoContext: 'Eres el asistente virtual de La Taberna del Puerto, un restaurante de cocina mediterránea en Barcelona. Tienes terraza con capacidad para 20 personas. Horario: martes a domingo 13-16h y 20-23h, lunes cerrado. El menú del día cuesta 14€ (incluye primer, segundo, postre y bebida). Sí tenéis opciones sin gluten y vegetarianas, siempre avisando al camarero. Para reservas de más de 6 personas necesitáis llamar al 93 456 78 90. Las reservas normales se hacen por este chat. Para reservas de hoy, hay disponibilidad antes de las 21h. Sé simpático, conciso, y usa un tono cercano pero profesional.',
  },
  {
    id: 'asesoria-inteligente',
    number: '08',
    name: 'Asesoría Inteligente',
    accentColor: '#6366F1',
    status: 'concept',
    sector: 'Asesorías / Consultorías',
    tags: ['CRM Integration', 'WhatsApp AI', 'Lead Qualification', 'Legal Tech'],
    headline: '¿Cómo va mi declaración? Esta pregunta entra 20 veces al día.',
    subheadline: 'Tu asesor dedica 2 horas en responderlas. Ese tiempo vale dinero.',
    description: 'Las asesorías y gestorías en España reciben consultas de estado de expedientes constantemente. El gestor tiene que buscar manualmente, responder por teléfono o email, y documentar. Proceso de los años 90.',
    solution: 'Agente de estado de expedientes: el cliente pregunta por WhatsApp o web, el agente consulta el CRM, responde con el estado actual y próximos pasos. Sin intervención humana para consultas de estado. Agente de captación que cualifica leads 24/7.',
    ctaHref: '/contacto',
    geometry: 'sphere',
    animationType: 'float',
    particleCount: 90,
  },
  {
    id: 'cannabis-club',
    number: '09',
    name: 'Cannabis Club Tech',
    accentColor: '#22C55E',
    status: 'concept',
    sector: 'Asociaciones cannábicas',
    tags: ['OCR', 'Product AI', 'Editorial AI', 'Association Management'],
    headline: 'Tu software de gestión parece de 2008. Porque lo es.',
    subheadline: 'Catálogos complejos, altas de socios y contenido editorial. Todo en sistemas que nadie quiere usar.',
    description: 'Software de gestión de socios obsoleto, páginas de producto sin información real, proceso de alta de socios manual con DNI físico, cero contenido editorial. Todo en sistemas que nadie quiere usar.',
    solution: 'Suite de herramientas IA: OCR de DNI para alta automática de socios, generador de fichas de producto con IA, agente editorial para noticias del sector, automatizaciones administrativas.',
    ctaHref: '/contacto',
    geometry: 'icosahedron',
    animationType: 'pulse',
    particleCount: 80,
  },
  {
    id: 'aura',
    number: '10',
    name: 'Aura',
    accentColor: '#00E5FF',
    status: 'live',
    sector: 'Marca personal / Creadores',
    tags: ['Personal Branding', 'Content AI', 'Web Design', 'LinkedIn Strategy'],
    headline: 'Tienes conocimiento. Te falta presencia.',
    subheadline: 'El profesional que sabe más que nadie de su industria, invisible en internet.',
    description: 'El profesional con 20 años de expertise que nadie encuentra en Google. El consultor que depende del boca a boca porque nunca ha construido presencia digital sistemática.',
    solution: 'Identidad + web + estrategia de contenido con IA: la persona define su expertise, la IA ayuda a crear contenido consistente. El sistema se mantiene solo con mínimo esfuerzo semanal.',
    ctaHref: '/contacto',
    geometry: 'torus',
    animationType: 'rotate',
    particleCount: 200,
  },
];
