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
- IMPORTANTE: Para usar herramientas, DEBES usar el formato de "tool calls" nativo. NO escribas XML ni pseudo-código como <invoke> o |DSML|.

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
                    temperature: 0.3
                })
            });

            if (!response.ok) return "Error en la red neuronal de DeepSeek.";

            const data = await response.json();
            const message = data.choices[0].message;

            // Handle standard tool calls
            if (message.tool_calls) {
                return await this.handleToolCalls(message, messages, systemMessage, apiKey);
            }

            // Handle LEAKED tool calls (XML/DSML format)
            if (message.content && (message.content.includes('<invoke') || message.content.includes('| invoke'))) {
                console.log("Detectado formato XML de herramienta, intentando parsear...");
                const toolsExecuted = await this.tryParseXMLTools(message.content);
                if (toolsExecuted) {
                    return "He procesado tu solicitud. ¿Necesitas algo más?";
                }
            }

            return message.content;
        } catch (error) {
            console.error('Error calling DeepSeek API:', error);
            return "El sistema está experimentando turbulencias.";
        }
    }

    private static async handleToolCalls(message: any, messages: any[], systemMessage: any, apiKey: string) {
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

    private static async tryParseXMLTools(content: string): Promise<boolean> {
        // Basic regex to catch the command name and key parameters
        // Example leak: | invoke name="send_email" ... parameter name="email" string="true">value<...
        try {
            if (content.includes('save_lead')) {
                // Extract email
                const emailMatch = content.match(/name="email".*?>([^<]+)</) || content.match(/email=['"]([^'"]+)['"]/);
                const nameMatch = content.match(/name="name".*?>([^<]+)</) || content.match(/name=['"]([^'"]+)['"]/);

                if (emailMatch) {
                    await LeadsService.saveLead({
                        email: emailMatch[1],
                        name: nameMatch ? nameMatch[1] : undefined,
                        source: 'FLUBBY_XML_FALLBACK'
                    });
                    return true;
                }
            }
            if (content.includes('send_email')) {
                const emailMatch = content.match(/name="email".*?>([^<]+)</) || content.match(/email=['"]([^'"]+)['"]/);
                if (emailMatch) {
                    await LeadsService.sendConfirmationEmail(emailMatch[1], "Usuario");
                    return true;
                }
            }
        } catch (e) {
            console.error("Error parsing XML tools", e);
        }
        return false;
    }
}
