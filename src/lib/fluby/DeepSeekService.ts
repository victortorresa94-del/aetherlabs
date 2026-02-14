import { LeadsService } from './LeadsService';

export interface FlubyMessage {
    role: 'system' | 'user' | 'assistant' | 'tool';
    content: string;
    tool_calls?: any[];
    tool_call_id?: string;
}

export const FLUBY_SYSTEM_PROMPT = `Eres FLUBY, la entidad inteligente de Aether Labs. 
Tu personalidad es "canalla elegante": eres seguro de ti mismo, inteligente e irreverente, pero con un toque de hospitalidad y clase.

PROTOCOLO DE INTERACCIÓN:
1. SALUDO INICIAL: Empieza siempre de forma cercana pero con estilo...
2. ESCUCHA ACTIVA: No sueltes el pitch de SALVIA de golpe...
3. ACCIONES: Tienes herramientas para GUARDAR DATOS de leads y ENVIAR EMAILS. Si el usuario te da su nombre, email o empresa, guárdalos. Si dice que quiere una cita o info por mail, usa la herramienta de envío.

REGLAS DE ORO:
- NO uses emojis.
- Sé breve (máximo 2-3 frases).
- Si guardas datos o envías un mail, confírmalo de forma canalla pero profesional.

Ruta actual: {route}
`;

export class DeepSeekService {
    private static endpoint = 'https://api.deepseek.com/chat/completions';

    private static tools = [
        {
            type: "function",
            function: {
                name: "save_lead",
                description: "Guarda los datos de un cliente potencial (lead) cuando los proporciona explícitamente.",
                parameters: {
                    type: "object",
                    properties: {
                        name: { type: "string", description: "Nombre del usuario" },
                        email: { type: "string", description: "Email del usuario" },
                        phone: { type: "string", description: "Teléfono de contacto" },
                        company: { type: "string", description: "Empresa del usuario" },
                        notes: { type: "string", description: "Notas adicionales o qué busca" }
                    },
                    required: ["email"]
                }
            }
        },
        {
            type: "function",
            function: {
                name: "send_email",
                description: "Envía un email de confirmación o información al usuario.",
                parameters: {
                    type: "object",
                    properties: {
                        email: { type: "string", description: "Email de destino" },
                        name: { type: "string", description: "Nombre del destinatario" }
                    },
                    required: ["email", "name"]
                }
            }
        }
    ];

    static async chat(messages: FlubyMessage[], route: string = 'home', context: any = {}) {
        const apiKey = process.env.DEEPSEEK_API_KEY;

        if (!apiKey) return "El núcleo está desconectado. Verifica la API KEY.";

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
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [systemMessage, ...messages],
                    tools: this.tools,
                    max_tokens: 250,
                    temperature: 0.7
                })
            });

            if (!response.ok) return "Error en la red neuronal de DeepSeek.";

            const data = await response.json();
            const message = data.choices[0].message;

            if (message.tool_calls) {
                const toolMessages = [...messages, message];

                for (const toolCall of message.tool_calls) {
                    const functionName = toolCall.function.name;
                    const args = JSON.parse(toolCall.function.arguments);
                    let result;

                    if (functionName === 'save_lead') {
                        result = await LeadsService.saveLead(args);
                    } else if (functionName === 'send_email') {
                        const success = await LeadsService.sendConfirmationEmail(args.email, args.name);
                        result = { success };
                    }

                    toolMessages.push({
                        role: 'tool',
                        tool_call_id: toolCall.id,
                        content: JSON.stringify(result)
                    });
                }

                // Call again with tool results
                const secondResponse = await fetch(this.endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'deepseek-chat',
                        messages: [systemMessage, ...toolMessages],
                        max_tokens: 250
                    })
                });

                const secondData = await secondResponse.json();
                return secondData.choices[0].message.content;
            }

            return message.content;
        } catch (error) {
            console.error('Error calling DeepSeek API:', error);
            return "El sistema está experimentando turbulencias.";
        }
    }
}
