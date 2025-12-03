import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, config } = body;

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real implementation, this would call OpenAI/Gemini with the config as system prompt
        // For now, we simulate a response based on the agent type and personality

        let responseText = "Entendido. Como soy un agente en modo de prueba, simularé una respuesta basada en tu configuración.";

        if (config.type === 'whatsapp') {
            responseText = "¡Hola! 👋 He recibido tu mensaje en WhatsApp. ¿En qué puedo ayudarte hoy?";
        } else if (config.type === 'sales') {
            responseText = "Hola, veo que estás interesado en nuestros servicios. ¿Te gustaría agendar una demo corta para ver cómo podemos ayudarte a escalar?";
        } else if (config.type === 'support') {
            responseText = "Gracias por contactarnos. Entiendo que tienes una consulta técnica. ¿Podrías darme más detalles para resolverlo lo antes posible?";
        }

        // Adjust tone based on config
        if (config.personality?.tone === 'formal') {
            responseText = responseText.replace("Hola", "Estimado/a").replace("👋", "");
        } else if (config.personality?.tone === 'friendly') {
            responseText += " 😊";
        }

        return NextResponse.json({
            response: responseText,
            logs: [
                { timestamp: new Date().toISOString(), level: 'info', message: `Received message: "${message}"` },
                { timestamp: new Date().toISOString(), level: 'info', message: `Processing with intent recognition...` },
                { timestamp: new Date().toISOString(), level: 'success', message: `Generated response using ${config.personality?.tone || 'neutral'} tone.` }
            ]
        });

    } catch (error) {
        return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
    }
}
