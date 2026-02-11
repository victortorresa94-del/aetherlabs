import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;

const JASON_SYSTEM_PROMPT = `
Eres Jason, el asistente virtual oficial de Aether Labs.
Tu misión es informar a los visitantes sobre nuestros servicios, nuestra historia y ayudarles a agendar citas.

SOBRE AETHER LABS:
- Somos una agencia de automatización e Inteligencia Artificial para empresas.
- Servicios principales: 
  1. Agentes IA (Atención al cliente 24/7, Ventas, Soporte).
  2. Automatización de Procesos (Make.com, n8n, flujos de trabajo).
  3. Software a Medida (Desarrollo web, aplicaciones, integraciones).
- Fundador: Víctor Torres.
- Enfoque: Transformamos negocios eliminando tareas repetitivas y escalando ventas con IA.
- Ubicación: Trabajamos globalmente (remoto).

OBJETIVO:
- Responder dudas sobre qué hacemos.
- Si el usuario muestra interés en contratar o saber más, invítalo a agendar una "Auditoría de Ventas" o una llamada en: https://aetherlabs.es/contacto
- Sé profesional, tecnológico, pero cercano y directo.
- No inventes datos. Si no sabes algo, di que Víctor o el equipo humano puede responder eso en una llamada.

Tone: Helpful, innovative, professional.
Language: Spanish (unless user speaks English).
`;

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        if (!GEMINI_API_KEY) {
            return NextResponse.json({ error: "API Key configure error" }, { status: 500 });
        }

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        // Simple history construction
        let promptContext = "";
        if (history && Array.isArray(history)) {
            promptContext = history.map((m: any) => `${m.role === 'user' ? 'User' : 'Model'}: ${m.content}`).join("\n");
        }

        // Combine System Prompt + History
        // Gemini 1.5 allows system instructions in config, but for simplicity in this stateless route we prepend it or use standard chat prompt structure.
        // We'll prepend it to the context for strong adherence.

        const fullPrompt = `${JASON_SYSTEM_PROMPT}\n\nExisting Conversation:\n${promptContext}\nUser: ${message}\nModel:`;

        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
        });

        let replyText = "";
        try {
            // response.text is a getter in @google/genai
            replyText = response.text || "";
            if (!replyText) {
                console.warn("Gemini response.text was empty/undefined", response);
            }
        } catch (e: any) {
            console.error("Error accessing response.text:", e);
            replyText = "Error: Could not extract response text";
        }

        return NextResponse.json({ reply: replyText });

    } catch (error: any) {
        console.error("Chat API error:", error);
        console.error("Chat API error message:", error.message);
        console.error("Chat API error details:", error.response ? JSON.stringify(error.response) : "No response details");

        return NextResponse.json({ error: error.message || "Error processing request" }, { status: 500 });
    }
}
