import { NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`;

export async function POST(req: Request) {
    let data: any = {};
    try {
        data = await req.json();

        // Fallback if no API key is configured
        if (!GEMINI_API_KEY) {
            console.warn("GEMINI_API_KEY is missing. Returning mock data.");
            return NextResponse.json(generateMockProposal(data));
        }

        const prompt = `
      Act as an expert AI Solutions Architect at Aether Labs.
      Analyze the following user request and generate a detailed technical proposal JSON.
      
      User Data:
      - Name: ${data.name}
      - Level: ${data.level}
      - Sector: ${data.sector}
      - Type: ${data.creationType}
      - Specific Need: ${data.specificNeed}
      - Use Cases: ${data.useCase.join(', ')}
      - Budget: ${data.budget}
      - Urgency: ${data.urgency}
      - Detailed Description (User's words): "${data.detailedDescription}"

      Based strictly on the "Detailed Description" (if provided) and the other parameters, create a personalized solution.
      
      CRITICAL INSTRUCTIONS:
      1. **Tech Stack**: Be impressive and complete. Don't just say "Python". Include infrastructure and specific libraries. E.g., "AWS Lambda", "Pinecone Vector DB", "LangChain", "Next.js", "Supabase", "OpenAI GPT-4o", "Vercel", "Twilio", "Bland AI". Show a robust architecture.
      2. **Timeline**: Be aggressive but realistic. Simple automations = 3-7 days. Standard Chatbots = 1-2 weeks. Complex Systems = 3-4 weeks. Do not overestimate.
      3. **Capabilities**: Use PRACTICAL, action-oriented language. Do NOT use generic terms like "NLP" or "Machine Learning". Instead say: "Reads and classifies emails by urgency", "Automatically generates invoices from PDFs", "Detects sentiment in customer calls".
      4. **Benefits**: MUST be quantitative. Use numbers. E.g., "Saves 15h/week", "Reduces response time by 80%", "0% manual data entry errors".

      Return ONLY valid JSON with this structure:
      {
        "title": "Short, impressive title for the solution",
        "summary": "2-3 sentences describing the solution tailored to their specific problem.",
        "capabilities": ["Action-oriented capability 1", "Action-oriented capability 2", "Action-oriented capability 3", "Action-oriented capability 4"],
        "integrations": ["Integration 1", "Integration 2", "Integration 3", "Integration 4"],
        "benefits": ["Quantitative Benefit 1", "Quantitative Benefit 2", "Quantitative Benefit 3", "Quantitative Benefit 4"],
        "estimatedTimeline": "e.g. 1 Week",
        "complexity": "Baja" | "Media" | "Alta",
        "recommendedStack": ["Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5", "Tech 6"]
      }
    `;

        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`Gemini API Error: ${response.statusText}`);
        }

        const result = await response.json();
        const text = result.candidates[0].content.parts[0].text;

        // Clean markdown code blocks if present
        const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const proposal = JSON.parse(jsonString);

        return NextResponse.json(proposal);

    } catch (error) {
        console.error("Error generating proposal:", error);
        // Fallback to mock data on error
        return NextResponse.json(generateMockProposal(data));
    }
}

// Fallback Mock Generator (Same as client-side logic but server-side)
function generateMockProposal(data: any) {
    const sector = data.sector || "General";
    const desc = data.detailedDescription?.toLowerCase() || "";

    // Default: Automation/Admin
    let proposal = {
        title: `Automatización Inteligente para ${sector}`,
        summary: `Un sistema centralizado para optimizar tus flujos de trabajo en ${sector}, reduciendo carga manual y errores.`,
        capabilities: [
            "Clasifica información automáticamente",
            "Genera reportes de estado en tiempo real",
            "Notifica alertas críticas al equipo",
            "Sincroniza datos entre plataformas"
        ],
        integrations: ["Excel / Sheets", "Email", "Slack", "Drive"],
        benefits: [
            "Ahorra 10h/semana en tareas manuales",
            "Reducción del 90% en errores de datos",
            "Mayor visibilidad del estado del negocio",
            "Respuesta más rápida a incidencias"
        ],
        estimatedTimeline: "1-2 Semanas",
        complexity: "Media",
        recommendedStack: ["n8n", "Python", "Supabase", "OpenAI GPT-4o", "AWS Lambda"]
    };

    // Case 1: Voice / Calls / Restaurants / Appointments
    if (desc.includes("llamada") || desc.includes("voz") || desc.includes("teléfono") || desc.includes("restaurante") || desc.includes("pedido") || desc.includes("reserva") || desc.includes("cita")) {
        proposal = {
            title: "Asistente de Voz IA para Gestión de Pedidos",
            summary: "Una recepcionista virtual inteligente disponible 24/7 capaz de atender llamadas, gestionar reservas y anotar pedidos directamente en tu sistema, con voz humana natural.",
            capabilities: [
                "Atiende múltiples llamadas simultáneas",
                "Entiende el menú y modificaciones de pedidos",
                "Gestiona reservas en el calendario en tiempo real",
                "Detecta el tono y urgencia del cliente"
            ],
            integrations: ["Teléfono / VoIP", "Sistema de Reservas", "POS / TPV", "WhatsApp Business"],
            benefits: [
                "Atención 24/7 sin costes extra",
                "0 llamadas perdidas en horas punta",
                "Aumento del 20% en ticket medio (upselling)",
                "Registro automático de clientes"
            ],
            estimatedTimeline: "2-3 Semanas",
            complexity: "Alta",
            recommendedStack: ["Bland AI", "Twilio", "Python", "FastAPI", "OpenAI Whisper", "Supabase"]
        };
    }
    // Case 2: Content / Marketing / Social
    else if (desc.includes("redes") || desc.includes("post") || desc.includes("instagram") || desc.includes("contenido") || desc.includes("marketing") || desc.includes("video")) {
        proposal = {
            title: "Motor de Generación de Contenido Viral",
            summary: "Una suite creativa impulsada por IA que planifica, redacta y diseña contenido para tus redes sociales, manteniendo tu voz de marca y optimizando para engagement.",
            capabilities: [
                "Genera calendarios de contenido mensuales",
                "Crea copys y guiones optimizados para SEO",
                "Diseña imágenes y miniaturas automáticamente",
                "Analiza tendencias virales en tiempo real"
            ],
            integrations: ["Instagram / TikTok", "Canva", "Notion", "Metricool"],
            benefits: [
                "Producción de contenido 10x más rápida",
                "Presencia constante en todas las redes",
                "Aumento del engagement orgánico",
                "Consistencia de marca garantizada"
            ],
            estimatedTimeline: "1 Semana",
            complexity: "Media",
            recommendedStack: ["Midjourney API", "Claude 3.5 Sonnet", "Make.com", "Airtable", "Buffer"]
        };
    }
    // Case 3: Data / Analysis / Finance
    else if (desc.includes("dato") || desc.includes("análisis") || desc.includes("financiero") || desc.includes("excel") || desc.includes("dashboard") || desc.includes("kpi")) {
        proposal = {
            title: "Analista de Datos Financiero IA",
            summary: "Un cerebro analítico que procesa tus datos brutos en tiempo real, detectando anomalías, tendencias y oportunidades de ahorro sin que tengas que abrir un Excel.",
            capabilities: [
                "Unifica fuentes de datos dispersas",
                "Detecta anomalías en gastos automáticamente",
                "Predice flujos de caja futuros",
                "Genera informes ejecutivos visuales"
            ],
            integrations: ["Xero / QuickBooks", "Excel / CSV", "PowerBI", "Bancos"],
            benefits: [
                "Visibilidad financiera en tiempo real",
                "Detección temprana de fugas de dinero",
                "Ahorro de 20h/mes en reporting",
                "Toma de decisiones basada en datos"
            ],
            estimatedTimeline: "2-3 Semanas",
            complexity: "Alta",
            recommendedStack: ["Python Pandas", "Snowflake", "Streamlit", "LangChain", "OpenAI Data Analysis"]
        };
    }
    // Case 4: Email / Support (The original fallback, refined)
    else if (desc.includes("mail") || desc.includes("correo") || desc.includes("soporte") || desc.includes("cliente")) {
        proposal = {
            title: "Automatización de Atención al Cliente",
            summary: "Un sistema inteligente que lee, clasifica y redacta borradores de respuesta para tus emails, resolviendo dudas frecuentes automáticamente y escalando lo importante.",
            capabilities: [
                "Clasifica emails por intención y urgencia",
                "Responde preguntas frecuentes (FAQ) al instante",
                "Extrae datos clave de las consultas",
                "Aprende de tu historial de respuestas"
            ],
            integrations: ["Gmail / Outlook", "Zendesk / HelpScout", "Slack", "CRM"],
            benefits: [
                "Bandeja de entrada vacía (Inbox Zero)",
                "Reducción del 80% en tiempo de respuesta",
                "Satisfacción del cliente mejorada",
                "Liberación del equipo de soporte"
            ],
            estimatedTimeline: "1-2 Semanas",
            complexity: "Media",
            recommendedStack: ["n8n", "OpenAI GPT-4o", "Pinecone", "Gmail API", "Slack API"]
        };
    }

    return proposal;
}
