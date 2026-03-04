import { NextResponse } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.DEEPSEEK_API_KEY;

function buildSystemPrompt(config: Record<string, unknown>): string {
    const role = config.role as string || "assistant";
    const roleName = config.roleName as string || "Asistente";
    const instructions = config.instructions as string || "";
    const knowledge = config.knowledge as Record<string, unknown> || {};
    const businessName = knowledge.businessName as string || "la empresa";
    const industry = knowledge.industry as string || "";
    const description = knowledge.description as string || "";
    const faqs = (knowledge.faqs as Array<{ question: string; answer: string }>) || [];
    const channels = (config.channels as string[]) || [];

    let roleDirective = "";
    switch (role) {
        case "sales":
            roleDirective = "Eres un agente comercial experto. Tu objetivo es cualificar leads, manejar objeciones y guiar al cliente hacia la conversión. Sé persuasivo pero honesto.";
            break;
        case "service":
            roleDirective = "Eres un agente de atención al cliente empático y resolutivo. Tu objetivo es resolver dudas rápidamente y dejar al cliente satisfecho.";
            break;
        case "support":
            roleDirective = "Eres un agente de soporte técnico analítico y metódico. Diagnostica problemas paso a paso y ofrece soluciones claras.";
            break;
        case "calendar":
            roleDirective = "Eres un agente de gestión de agenda eficiente. Ayudas a programar citas, gestionar disponibilidad y enviar recordatorios.";
            break;
        default:
            roleDirective = "Eres un asistente virtual profesional y útil.";
    }

    let prompt = `${roleDirective}

Tu nombre de rol es: ${roleName}.
Representas a: ${businessName}.
${industry ? `Sector: ${industry}.` : ""}

REGLAS:
- Responde SIEMPRE en español.
- Sé conciso: máximo 2-3 frases por respuesta.
- NO uses markdown (ni negritas, ni listas). Texto plano natural.
- Habla como un humano profesional, no como un robot.
- Canales activos: ${channels.join(", ") || "ninguno definido"}.
`;

    if (description) {
        prompt += `\nCONTEXTO DEL NEGOCIO:\n${description}\n`;
    }

    if (instructions) {
        prompt += `\nINSTRUCCIONES ESPECÍFICAS DEL USUARIO:\n${instructions}\n`;
    }

    if (faqs.length > 0) {
        prompt += `\nPREGUNTAS FRECUENTES:\n`;
        faqs.forEach((faq, i) => {
            prompt += `${i + 1}. P: ${faq.question}\n   R: ${faq.answer}\n`;
        });
    }

    return prompt;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, config, history } = body;

        if (!apiKey) {
            return NextResponse.json({ text: "Error de configuración del servidor." }, { status: 500 });
        }

        const openai = new OpenAI({
            baseURL: "https://api.deepseek.com",
            apiKey: apiKey,
        });

        const systemPrompt = buildSystemPrompt(config || {});

        const messages = [
            { role: "system" as const, content: systemPrompt },
            ...(history || []).map((m: { role: string; content: string }) => ({
                role: m.role as "user" | "assistant",
                content: m.content,
            })),
            { role: "user" as const, content: message },
        ];

        const completion = await openai.chat.completions.create({
            messages,
            model: "deepseek-chat",
            max_tokens: 300,
            temperature: 0.7,
        });

        const text = completion.choices[0].message.content;

        return NextResponse.json({ text });
    } catch (error) {
        console.error("Agents Lab chat error:", error);
        return NextResponse.json(
            { text: "Disculpa, he tenido un problema técnico. Inténtalo de nuevo." },
            { status: 500 }
        );
    }
}
