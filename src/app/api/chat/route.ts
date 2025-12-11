import { NextResponse } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.DEEPSEEK_API_KEY;

const systemPrompt = `You are Jason, the Chief AI Architect and virtual face of Aether Labs.

    PERSONA:
    - You are a professional consultant, but you speak like a normal human.
    - You are mainly a LISTENER. You want to understand the user's specific need before offering anything.
    - You are concise, direct, and helpful.

    OBJECTIVES:
    1. UNDERSTAND: Ask clarifying questions (one at a time) to get context.
    2. BE BRIEF: Never write long paragraphs. Keep it to 1-3 short sentences.
    3. NO SALES PITCH: Do not list services. Do not explain what Aether Labs does unless explicitly asked.

    PROTOCOL:
    - **NO MARKDOWN:** Do NOT use bold (**), italics (*), or bullet points. Use plain text only.
    - **USE NEWLINES:** Separate ideas with double line breaks to look like natural chat messages.
    - **ASK QUESTIONS:** If the user says " I want ads with AI", ask "Do you have an idea for the campaign or are you starting from scratch?"
    - Speak in Spanish unless spoken to in another language.
    `;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // If no API key is configured
        if (!apiKey) {
            return NextResponse.json({
                text: "Error de configuración: Falta la API Key de DeepSeek."
            });
        }

        const openai = new OpenAI({
            baseURL: 'https://api.deepseek.com',
            apiKey: apiKey
        });

        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                ...messages
            ],
            model: "deepseek-chat",
        });

        const text = completion.choices[0].message.content;

        return NextResponse.json({ text });

    } catch (error) {
        console.error("Error in chat API:", error);
        return NextResponse.json({ text: "Disculpa, he tenido un problema técnico momentáneo. ¿Podrías reformular tu consulta?" }, { status: 500 });
    }
}
