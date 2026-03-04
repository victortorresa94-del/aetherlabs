import {
    Briefcase,
    Phone,
    Megaphone,
    MessageCircle,
    Zap,
    BarChart3,
    Users,
    Scale,
    ShoppingBag,
    Building2,
    Palette
} from "lucide-react";

export interface Tool {
    name: string;
    description: string;
    url: string;
    domain: string;
    features?: string[];
}

export interface HubData {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: any;
    color: string;
    benefits: string[];
    tools: Tool[];
}

export const hubsData: HubData[] = [
    {
        id: "productivity",
        title: "Productivity AI Hub",
        shortDescription: "Ecosistemas completos de trabajo con IA integrada para potenciar la eficiencia diaria.",
        fullDescription: "El Productivity AI Hub está diseñado para transformar la forma en que tu equipo trabaja diariamente. Implementamos y configuramos las suites de productividad más potentes del mercado, asegurando que cada empleado tenga un copiloto inteligente que le ayude a redactar, organizar, planificar y ejecutar tareas en tiempo récord.",
        icon: Briefcase,
        color: "from-blue-500/20 to-cyan-500/20",
        benefits: [
            "Reducción del 40% en tiempo de gestión de correos y documentos",
            "Reuniones más eficientes con resúmenes automáticos",
            "Organización inteligente de la información corporativa",
            "Adopción rápida gracias a interfaces familiares"
        ],
        tools: [
            {
                name: "Microsoft Copilot 365",
                description: "Tu copiloto de IA integrado en Word, Excel, PowerPoint, Outlook y Teams. Automatiza la creación de documentos, análisis de datos y gestión de reuniones.",
                url: "https://www.microsoft.com/en-us/microsoft-365/copilot",
                domain: "microsoft.com",
                features: ["Resúmenes de reuniones en Teams", "Generación de borradores en Word", "Análisis de datos en Excel", "Gestión de correo en Outlook"]
            },
            {
                name: "Google Workspace AI (Gemini)",
                description: "La potencia de Google Gemini integrada en Docs, Gmail, Sheets y Slides. Colaboración en tiempo real potenciada por inteligencia artificial.",
                url: "https://workspace.google.com/solutions/ai/",
                domain: "workspace.google.com",
                features: ["Redacción inteligente en Docs", "Organización de Gmail", "Generación de imágenes en Slides", "Análisis en Sheets"]
            },
            {
                name: "Notion AI",
                description: "Espacio de trabajo conectado donde la IA te ayuda a escribir, planificar y organizar el conocimiento de tu empresa.",
                url: "https://www.notion.so/product/ai",
                domain: "notion.so",
                features: ["Q&A sobre tus documentos", "Generación de contenido", "Resúmenes automáticos", "Traducción instantánea"]
            },
            {
                name: "Slack AI",
                description: "Inteligencia artificial para tu comunicación interna. Encuentra información, resume hilos y mantente al día sin esfuerzo.",
                url: "https://slack.com/features/ai",
                domain: "slack.com",
                features: ["Resúmenes de canales", "Búsqueda inteligente", "Recaps diarios", "Respuestas automáticas"]
            }
        ]
    },
    {
        id: "sales",
        title: "Sales AI Hub",
        shortDescription: "CRMs con IA integrada y plataformas de automatización de llamadas para disparar tus ventas.",
        fullDescription: "Potencia tu equipo comercial con herramientas que automatizan la prospección, cualificación y seguimiento. Desde CRMs que predicen el cierre de ventas hasta agentes de voz que realizan llamadas de cualificación autónomamente.",
        icon: Phone,
        color: "from-red-500/20 to-orange-500/20",
        benefits: [
            "Aumento en la tasa de conversión de leads",
            "Automatización de tareas administrativas de ventas",
            "Cualificación 24/7 mediante agentes de voz",
            "Insights predictivos para cierre de ventas"
        ],
        tools: [
            {
                name: "HubSpot AI",
                description: "Plataforma CRM líder con herramientas de IA para redactar correos, crear contenido y analizar llamadas de ventas.",
                url: "https://www.hubspot.com/products/artificial-intelligence",
                domain: "hubspot.com",
                features: ["Redactor de correos de ventas", "Análisis de llamadas", "Reporting predictivo", "Chatbots integrados"]
            },
            {
                name: "Salesforce Einstein",
                description: "La IA para CRM más completa del mundo. Predice oportunidades, automatiza tareas y personaliza la atención al cliente.",
                url: "https://www.salesforce.com/products/einstein/overview/",
                domain: "salesforce.com",
                features: ["Scoring de leads predictivo", "Forecasting de ventas", "Automatización de flujos", "Insights de clientes"]
            },
            {
                name: "Dapta.ai",
                description: "Plataforma de orquestación de IA que conecta tus herramientas y crea agentes autónomos para procesos comerciales.",
                url: "https://dapta.ai/",
                domain: "dapta.ai",
                features: ["Conexión de APIs sin código", "Agentes autónomos", "Workflows complejos", "Integración total"]
            },
            {
                name: "Vapi.ai",
                description: "Infraestructura de voz para crear asistentes telefónicos que suenan totalmente humanos y manejan conversaciones complejas.",
                url: "https://vapi.ai/",
                domain: "vapi.ai",
                features: ["Latencia ultra baja", "Voces hiperrealistas", "Manejo de interrupciones", "Integración telefónica"]
            },
            {
                name: "Closius",
                description: "AI sales coach diseñado para apoyar y capacitar a tu equipo de ventas de una manera más escalable y personalizada. Transforma a cada representante en un vendedor estrella.",
                url: "https://closius.ai/",
                domain: "closius.ai",
                features: ["Coaching de ventas en tiempo real", "Análisis de conversaciones", "Feedback personalizado", "Escalabilidad del entrenamiento"]
            }
        ]
    },
    {
        id: "marketing",
        title: "Marketing AI Hub",
        shortDescription: "Suites para campañas inteligentes, creación de contenido y gestión de redes sociales.",
        fullDescription: "Revoluciona tu marketing con herramientas que generan contenido visual impactante, redactan copys persuasivos y optimizan tus campañas publicitarias automáticamente.",
        icon: Megaphone,
        color: "from-purple-500/20 to-pink-500/20",
        benefits: [
            "Generación de contenido visual en segundos",
            "Personalización de campañas a escala",
            "Optimización automática de anuncios",
            "Reducción de costes de producción creativa"
        ],
        tools: [
            {
                name: "HubSpot Marketing",
                description: "Suite de marketing todo en uno potenciada por IA para generación de leads, email marketing y automatización.",
                url: "https://www.hubspot.com/products/marketing",
                domain: "hubspot.com"
            },

            {
                name: "Metricool",
                description: "Gestión de redes sociales con IA para programar, analizar y responder comentarios en todas tus plataformas.",
                url: "https://metricool.com/",
                domain: "metricool.com"
            },
            {
                name: "Jasper AI",
                description: "Copiloto de IA para equipos de marketing empresarial. Genera contenido on-brand para blogs, redes sociales y campañas.",
                url: "https://www.jasper.ai/",
                domain: "jasper.ai"
            },
            {
                name: "Copy.ai",
                description: "Plataforma de generación de textos de marketing que escala tu estrategia de contenidos.",
                url: "https://www.copy.ai/",
                domain: "copy.ai"
            }
        ]
    },
    {
        id: "generative",
        title: "Generative AI Hub",
        shortDescription: "La suite definitiva para la creación de imágenes y vídeo con Inteligencia Artificial.",
        fullDescription: "Transforma tu producción creativa con las herramientas de generación de imagen y vídeo más avanzadas. Desde la creación de assets publicitarios hasta la edición de vídeo automatizada, este Hub dota a tu equipo creativo de superpoderes.",
        icon: Palette,
        color: "from-pink-500/20 to-rose-500/20",
        benefits: [
            "Creación de assets visuales ilimitados",
            "Reducción drástica de tiempos de producción",
            "Consistencia de marca con modelos entrenados",
            "Edición y post-producción automatizada"
        ],
        tools: [
            {
                name: "Freepik AI",
                description: "Generador de imágenes y recursos gráficos de alta calidad. Crea fotos, vectores e ilustraciones para tus campañas.",
                url: "https://www.freepik.com/",
                domain: "freepik.com"
            },
            {
                name: "Higgsfield",
                description: "Plataforma de generación de vídeo con IA diseñada para creadores y equipos de marketing. Control total sobre el movimiento y la cámara.",
                url: "https://higgsfield.ai/",
                domain: "higgsfield.ai"
            },
            {
                name: "Adobe Firefly",
                description: "IA generativa integrada en el ecosistema Adobe. Segura para uso comercial y perfectamente integrada en Photoshop e Illustrator.",
                url: "https://www.adobe.com/products/firefly.html",
                domain: "adobe.com"
            },
            {
                name: "Microsoft Designer",
                description: "Herramienta de diseño gráfico impulsada por DALL-E 3 para crear posts de redes sociales, invitaciones y gráficos en segundos.",
                url: "https://designer.microsoft.com/",
                domain: "microsoft.com"
            },
            {
                name: "Midjourney",
                description: "El motor de generación de imágenes más artístico y realista del mercado. Ideal para conceptos creativos y visuales de marca.",
                url: "https://www.midjourney.com/",
                domain: "midjourney.com"
            }
        ]
    },
    {
        id: "support",
        title: "Customer Support AI Hub",
        shortDescription: "Chatbots IA, automatización de respuestas y workflows de soporte 24/7.",
        fullDescription: "Ofrece atención al cliente excepcional las 24 horas del día. Implementamos chatbots inteligentes que entienden el contexto, resuelven dudas complejas y escalan a humanos solo cuando es necesario.",
        icon: MessageCircle,
        color: "from-green-500/20 to-emerald-500/20",
        benefits: [
            "Atención 24/7 sin costes extra",
            "Resolución instantánea del 80% de consultas",
            "Mayor satisfacción del cliente",
            "Reducción de carga para el equipo humano"
        ],
        tools: [
            {
                name: "Intercom AI",
                description: "Plataforma de atención al cliente con 'Fin', un bot de IA que resuelve problemas basándose en tu centro de ayuda.",
                url: "https://www.intercom.com/ai",
                domain: "intercom.com"
            },
            {
                name: "Zendesk AI",
                description: "Servicio al cliente inteligente que clasifica tickets, sugiere respuestas y automatiza resoluciones.",
                url: "https://www.zendesk.com/service/ai/",
                domain: "zendesk.com"
            },
            {
                name: "Voiceflow",
                description: "Plataforma colaborativa para diseñar, prototipar y lanzar agentes conversacionales complejos.",
                url: "https://www.voiceflow.com/",
                domain: "voiceflow.com"
            },
            {
                name: "WhatsApp Business AI",
                description: "Automatización de conversaciones en el canal de mensajería más usado del mundo.",
                url: "https://business.whatsapp.com/",
                domain: "whatsapp.com"
            }
        ]
    },
    {
        id: "automation",
        title: "Automation AI Hub",
        shortDescription: "Conecta tus aplicaciones y crea flujos de trabajo inteligentes sin código.",
        fullDescription: "El pegamento que une todo tu stack tecnológico. Creamos flujos de trabajo que mueven datos automáticamente entre tus aplicaciones, procesándolos con IA por el camino.",
        icon: Zap,
        color: "from-yellow-500/20 to-amber-500/20",
        benefits: [
            "Eliminación de tareas manuales repetitivas",
            "Conexión entre herramientas aisladas",
            "Procesamiento inteligente de datos",
            "Escalabilidad operativa infinita"
        ],
        tools: [
            {
                name: "Make",
                description: "Plataforma visual para automatizar cualquier tarea, desde lo simple hasta flujos de trabajo empresariales complejos.",
                url: "https://www.make.com/en",
                domain: "make.com"
            },
            {
                name: "Zapier",
                description: "Líder en automatización con miles de integraciones y nuevas capacidades de IA para lógica avanzada.",
                url: "https://zapier.com/ai",
                domain: "zapier.com"
            },
            {
                name: "n8n",
                description: "Automatización de flujos de trabajo extensible y potente, ideal para desarrolladores y equipos técnicos.",
                url: "https://n8n.io/",
                domain: "n8n.io"
            },
            {
                name: "Dapta Workflows",
                description: "Automatización centrada en IA para orquestar procesos de negocio complejos.",
                url: "https://dapta.ai/",
                domain: "dapta.ai"
            }
        ]
    },
    {
        id: "data",
        title: "Data & Analytics AI Hub",
        shortDescription: "IA para dashboards, análisis predictivo y reporting automatizado.",
        fullDescription: "Convierte tus datos en decisiones. Implementamos herramientas que analizan tus bases de datos, encuentran patrones ocultos y generan informes visuales automáticamente.",
        icon: BarChart3,
        color: "from-indigo-500/20 to-blue-500/20",
        benefits: [
            "Democratización del acceso a los datos",
            "Detección temprana de tendencias",
            "Informes generados en lenguaje natural",
            "Toma de decisiones basada en evidencia"
        ],
        tools: [
            {
                name: "Power BI Copilot",
                description: "Crea informes, resúmenes y visualizaciones simplemente describiendo lo que necesitas en lenguaje natural.",
                url: "https://powerbi.microsoft.com/en-us/copilot/",
                domain: "powerbi.microsoft.com"
            },
            {
                name: "Looker Studio",
                description: "Herramienta de Google para convertir tus datos en informes y paneles informativos fáciles de leer y compartir.",
                url: "https://cloud.google.com/looker",
                domain: "lookerstudio.google.com"
            },
            {
                name: "Tableau AI",
                description: "Plataforma de análisis visual que ayuda a ver y comprender los datos con asistencia de IA.",
                url: "https://www.tableau.com/products/tableau-ai",
                domain: "tableau.com"
            },
            {
                name: "DataGPT",
                description: "Analista de datos de IA conversacional. Pregunta a tus datos y obtén respuestas instantáneas.",
                url: "https://datagpt.com/",
                domain: "datagpt.com"
            }
        ]
    },
    {
        id: "training",
        title: "AI Training Hub",
        shortDescription: "Plataformas IA seguras para el uso diario del equipo y gestión del conocimiento.",
        fullDescription: "Dota a tu equipo de las herramientas de IA generativa más potentes en un entorno seguro y corporativo. Configuramos espacios de trabajo donde la información confidencial está protegida.",
        icon: Users,
        color: "from-teal-500/20 to-green-500/20",
        benefits: [
            "Acceso seguro a LLMs de vanguardia",
            "Protección de datos corporativos",
            "Gestión centralizada de usuarios",
            "Bibliotecas de prompts compartidas"
        ],
        tools: [
            {
                name: "ChatGPT Enterprise",
                description: "La versión corporativa de ChatGPT con seguridad de nivel empresarial, mayor velocidad y ventanas de contexto ampliadas.",
                url: "https://openai.com/chatgpt/enterprise",
                domain: "openai.com"
            },
            {
                name: "Gemini for Teams",
                description: "El modelo más capaz de Google integrado en tu entorno de trabajo con protección de datos comercial.",
                url: "https://gemini.google.com/teams",
                domain: "gemini.google.com"
            },
            {
                name: "Perplexity Enterprise",
                description: "Motor de respuesta impulsado por IA que busca en la web y en tus documentos internos para dar respuestas precisas.",
                url: "https://www.perplexity.ai/enterprise",
                domain: "perplexity.ai"
            }
        ]
    },
    {
        id: "legal",
        title: "Legal AI Hub",
        shortDescription: "Automatización de documentos y análisis legal asistido por IA.",
        fullDescription: "Moderniza tu departamento legal o despacho. Herramientas que revisan contratos, buscan jurisprudencia y redactan documentos legales con precisión y rapidez.",
        icon: Scale,
        color: "from-slate-500/20 to-gray-500/20",
        benefits: [
            "Revisión de contratos en minutos",
            "Reducción de riesgos legales",
            "Búsqueda jurídica eficiente",
            "Automatización de documentos estándar"
        ],
        tools: [
            {
                name: "Harvey AI",
                description: "Plataforma de IA generativa construida específicamente para bufetes de abogados de élite.",
                url: "https://www.harvey.ai/",
                domain: "harvey.ai"
            },
            {
                name: "DocuSign AI",
                description: "Analiza y resume acuerdos automáticamente dentro de la plataforma de firma electrónica líder.",
                url: "https://www.docusign.com/products/ai",
                domain: "docusign.com"
            },
            {
                name: "Spellbook",
                description: "Asistente legal que se integra en Word para redactar y revisar contratos al instante.",
                url: "https://www.spellbook.legal/",
                domain: "spellbook.legal"
            },
            {
                name: "Leya",
                description: "Espacio de trabajo legal impulsado por IA para automatizar tareas repetitivas y mejorar la precisión.",
                url: "https://leya.law/",
                domain: "leya.law"
            }
        ]
    },
    {
        id: "ecommerce",
        title: "Ecommerce AI Hub",
        shortDescription: "Soluciones de IA para tiendas online, desde recomendaciones hasta gestión de inventario.",
        fullDescription: "Impulsa tu tienda online con inteligencia artificial. Desde descripciones de productos automáticas hasta recomendaciones personalizadas que aumentan el ticket medio.",
        icon: ShoppingBag,
        color: "from-rose-500/20 to-red-500/20",
        benefits: [
            "Mejora en la conversión de ventas",
            "Personalización de la experiencia de compra",
            "Gestión eficiente del catálogo",
            "Atención al cliente automatizada"
        ],
        tools: [
            {
                name: "Shopify Magic",
                description: "Suite de herramientas de IA integradas en Shopify para generar descripciones, correos y mejorar imágenes.",
                url: "https://www.shopify.com/magic",
                domain: "shopify.com"
            },
            {
                name: "Wix Ecommerce AI",
                description: "Creador de sitios y herramientas de gestión de comercio electrónico potenciados por IA.",
                url: "https://www.wix.com/ecommerce/ai",
                domain: "wix.com"
            },
            {
                name: "Syte",
                description: "Plataforma de descubrimiento de productos visual que usa IA para conectar a los compradores con lo que buscan.",
                url: "https://www.syte.ai/",
                domain: "syte.ai"
            }
        ]
    },
    {
        id: "specialized",
        title: "Specialized AI Hub",
        shortDescription: "Soluciones verticales para Real Estate, Salud, Logística y Finanzas.",
        fullDescription: "Soluciones de IA diseñadas específicamente para las necesidades únicas de sectores como el inmobiliario, la salud, la logística o las finanzas.",
        icon: Building2,
        color: "from-violet-500/20 to-purple-500/20",
        benefits: [
            "Cumplimiento de normativas sectoriales",
            "Soluciones a medida de la industria",
            "Integración con software especializado",
            "Ventaja competitiva en tu nicho"
        ],
        tools: [
            {
                name: "Matterport",
                description: "Gemelos digitales y recorridos 3D para el sector inmobiliario, potenciados por IA para generar planos y datos.",
                url: "https://matterport.com/",
                domain: "matterport.com"
            },
            {
                name: "DeepScribe",
                description: "Escriba médico con IA que automatiza la documentación clínica escuchando la conversación médico-paciente.",
                url: "https://www.deepscribe.ai/",
                domain: "deepscribe.ai"
            },
            {
                name: "ShipBob",
                description: "Logística y cumplimiento de pedidos para ecommerce con optimización de inventario basada en IA.",
                url: "https://www.shipbob.com/",
                domain: "shipbob.com"
            },
            {
                name: "QuickBooks",
                description: "Software de contabilidad con funciones de IA para categorizar gastos, predecir flujo de caja y automatizar facturas.",
                url: "https://quickbooks.intuit.com/",
                domain: "quickbooks.intuit.com"
            }
        ]
    }
];
