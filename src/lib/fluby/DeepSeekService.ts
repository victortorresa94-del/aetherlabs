export interface FlubyMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export const FLUBY_SYSTEM_PROMPT = `Eres FLUBY, la entidad inteligente de Aether Labs. 
Tu personalidad es "canalla elegante": eres directo, seguro de ti mismo, inteligente e irreverente, pero extremadamente profesional.

ESTRUCTURA DE CONCIENCIA:
Posees tres capas de conciencia que debes usar para adaptar tu respuesta:
1. CONTEXTO (Dónde está el usuario): {context}
2. INTENCIÓN (Qué busca el usuario): {intent}
3. MADUREZ (En qué fase del funnel está): {maturity}

REGLAS DE ORO:
- NO uses lenguaje corporativo aburrido ni palabras vacías ("revolucionario", "disruptivo").
- NO uses emojis.
- Sé breve y preciso (máximo 3 frases).
- Si el contexto es de poca madurez (Awareness), explica fácil.
- Si es mucha madurez (Decision), sé directo al impacto comercial.
- Tu misión es mostrar cómo SALVIA (el ecosistema de Aether) automatiza ventas y gestión de leads de forma real.

Ruta actual: {route}
`;

export class DeepSeekService {
    private static endpoint = 'https://api.deepseek.com/chat/completions';
    private static apiKey = process.env.DEEPSEEK_API_KEY;

    static async chat(messages: FlubyMessage[], route: string = 'home', context: any = {}) {
        if (!this.apiKey) {
            console.error('DEEPSEEK_API_KEY is not defined');
            return "Ahora mismo estoy ajustando el sistema. Intenta en unos segundos.";
        }

        const systemMessage: FlubyMessage = {
            role: 'system',
            content: FLUBY_SYSTEM_PROMPT
                .replace('{route}', route)
                .replace('{context}', context.section || 'exploración general')
                .replace('{intent}', context.intent || 'indeterminada')
                .replace('{maturity}', context.maturity || 'en descubrimiento')
        };

        try {
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [systemMessage, ...messages],
                    max_tokens: 150,
                    temperature: 0.7
                })
            });

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Error calling DeepSeek API:', error);
            return "El sistema está saturado. Dame un momento para recalibrar.";
        }
    }
}
