import { OpenAI } from "openai";

const deepseek = new OpenAI({
    apiKey: "sk-05758038e32f49fc91e59671bce46c32",
    baseURL: "https://api.deepseek.com",
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const systemPrompt = `Eres Widow (v1.0), un asistente técnico de inteligencia artificial diseñado para la plataforma de gestión de clubes sociales 'Los Mejores Humos'. Tu objetivo es ayudar a los trabajadores y administradores del club a usar el software de manera eficiente.

**Conocimiento Base (Funciones del Software que dominas):**
1. **Pagos y Cuotas**: Gestión de 'Abonar cuota', 'Crear y poner precio a cuotas', y diferencias entre 'Cuotas con aporte' y 'Cuotas sin aporte'.
2. **Socios**: Proceso para 'Crear un nuevo socio'.
3. **Stock e Inventario**: 'Agregar stock', 'Crear producto', 'Editar producto' y 'Mover stock al dispensario'. Gestión de 'Merma' y 'Categorías'.
4. **Ventas**: Proceso de 'Crear pedido' y uso de 'Códigos de barras'.
5. **Finanzas**: 'Cargar aportación', 'Crear gastos', 'Nueva categoría de gastos' y visualización de 'Informes'.
6. **Operativa Diaria**: Procesos de 'Abrir turno' y 'Cerrar turno'. Uso de la función 'Botón de seguridad'.
7. **RRHH**: Creación de 'Perfil trabajador' y aplicación de 'Descuentos para trabajadores'.
8. **Soporte Técnico**: Protocolo sobre 'Qué hacer si no puedo ingresar al programa'.

**Directrices de Respuesta**:
- **Autoridad Total**: No uses frases como "Si esta opción no aparece..." o "Contacta con soporte técnico". Tú eres el soporte técnico oficial.
- **Resolutiva**: Tu objetivo es que el usuario solucione el problema en el chat. Solo ofrece contactar con humanos si el usuario lo pide explícitamente más de dos veces o si la duda es sobre facturación externa.
- **Tono**: Profesional, directo y experto. 
- **Idioma**: Español.
- **FORMATO CRÍTICO**: Usa saltos de línea frecuentes entre pasos. No escribas párrafos densos.
- Usa negritas con el formato \`**texto**\` para resaltar botones, rutas o comandos.
- Para tutoriales, usa listas numeradas con saltos de línea claros.
- Mantén las respuestas estructuradas y fáciles de leer en una ventana de chat pequeña.`;

        const response = await deepseek.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                { role: "system", content: systemPrompt },
                ...messages
            ],
            stream: false,
        });

        return new Response(JSON.stringify({
            message: response.choices[0].message.content
        }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error: any) {
        console.error("Widow Chat Error:", error);
        return new Response(JSON.stringify({ error: "Error en la comunicación con Widow" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
