import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { experiments } from "@/data/experiments-page";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY || process.env.GOOGLE_API_KEY;

const FALLBACK_RESPONSES: Record<string, string[]> = {
  "suma-salut": [
    "¡Hola! Soy el asistente de Suma Salut. Estamos abiertos de lunes a viernes de 9h a 20h y los sábados de 9h a 14h. ¿En qué puedo ayudarte?",
    "Aceptamos Adeslas, Asisa, Sanitas, Mapfre y DKV. ¿Tienes alguno de estos seguros?",
    "La consulta general tiene un precio de 65€. Si necesitas especialista, dime qué área te interesa.",
    "Para analíticas necesitas ayuno de 8 horas. ¿Quieres que te indique cómo pedir cita?",
    "Contamos con medicina general, pediatría, ginecología, nutrición y psicología. ¿Cuál necesitas?",
    "Para urgencias puedes llamar directamente al 93 123 45 67.",
  ],
  "restaurante-ia": [
    "¡Hola! Bienvenido a La Taberna del Puerto 🌊 ¿En qué te puedo ayudar?",
    "Sí, tenemos terraza con capacidad para 20 personas. ¿Te gustaría reservar?",
    "Abrimos martes a domingo: mediodía de 13h a 16h y noche de 20h a 23h. Los lunes cerramos.",
    "El menú del día está a 14€ e incluye primero, segundo, postre y bebida. ¡Una pasada de relación calidad-precio!",
    "Sí tenemos opciones sin gluten y vegetarianas, solo avisa al camarero al llegar.",
    "Para grupos de más de 6 personas necesitamos que llaméis al 93 456 78 90. Para el resto, reserva por aquí sin problema.",
  ],
};

function getFallbackReply(experimentId: string, messageCount: number): string {
  const responses = FALLBACK_RESPONSES[experimentId];
  if (!responses) return "Hola, ¿en qué puedo ayudarte?";
  return responses[messageCount % responses.length];
}

export async function POST(req: Request) {
  let experimentId = "";
  let history: { role: string; content: string }[] = [];

  try {
    const body = await req.json();
    const { message } = body;
    experimentId = body.experimentId ?? "";
    history = body.history ?? [];

    const experiment = experiments.find((e) => e.id === experimentId);
    const systemPrompt = experiment?.demoContext;

    if (!systemPrompt) {
      return NextResponse.json({ error: "Experiment not found or has no demo" }, { status: 404 });
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json({
        reply: getFallbackReply(experimentId, history.length),
        fallback: true,
      });
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: systemPrompt,
    });

    const chatHistory = history.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Experimentos chat API error:", error);
    return NextResponse.json({
      reply: getFallbackReply(experimentId, history.length),
      fallback: true,
    });
  }
}
