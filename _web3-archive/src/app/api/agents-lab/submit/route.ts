import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const config = await req.json();

        const channelLabels: Record<string, string> = {
            whatsapp: "WhatsApp Business",
            webchat: "Web Chat",
            voice: "Voz / Llamadas",
            instagram: "Instagram Direct",
        };

        const channelsText = (config.channels || []).map((c: string) => channelLabels[c] || c).join(", ");

        // Backup to local file
        try {
            const fs = require('fs');
            const path = require('path');
            const logPath = path.join(process.cwd(), 'agents-lab-requests.jsonl');
            const logEntry = JSON.stringify({ timestamp: new Date().toISOString(), config }) + '\n';
            fs.appendFileSync(logPath, logEntry);
        } catch (err) {
            console.error("Failed to write to log file:", err);
        }

        // Build email body
        const emailBody = `
Nueva solicitud de Agents Lab
===============================

CONTACTO:
- Nombre: ${config.contact?.name || "N/A"}
- Email: ${config.contact?.email || "N/A"}
- Teléfono: ${config.contact?.phone || "N/A"}
- Empresa: ${config.contact?.company || "N/A"}

CONFIGURACIÓN DEL AGENTE:
- Canales: ${channelsText || "Ninguno"}
- Rol: ${config.roleName || "No definido"}
- Instrucciones: ${config.instructions || "Ninguna"}

CONOCIMIENTO:
- Negocio: ${config.knowledge?.businessName || "N/A"}
- Sector: ${config.knowledge?.industry || "N/A"}
- Descripción: ${config.knowledge?.description || "N/A"}
- FAQs: ${config.knowledge?.faqs?.length || 0} pregunta(s)

${config.knowledge?.faqs?.map((f: { question: string; answer: string }, i: number) =>
            `FAQ ${i + 1}:\n  P: ${f.question}\n  R: ${f.answer}`
        ).join("\n\n") || ""}

---
Enviado desde Agents Lab - Aether Labs
Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
        `.trim();

        // Send email via Resend or log (using a simple fetch to a mail API)
        // For now, we'll use a simple approach with the Web API
        console.log("=== AGENTS LAB QUOTE REQUEST ===");
        console.log(emailBody);
        console.log("================================");

        // Try to send via email using a POST to an email service
        // Using Brevo/Sendinblue free SMTP or a simple approach
        try {
            // Simple email via SMTP relay - using fetch to Resend API if key exists
            const resendKey = process.env.RESEND_API_KEY;
            if (resendKey) {
                const response = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${resendKey}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "Agents Lab <onboarding@resend.dev>",
                        to: ["victor@aetherlabs.es", "hola@aetherlabs.es"],
                        subject: `[Agents Lab] Nueva solicitud de ${config.contact?.name || "cliente"}`,
                        html: `<pre>${emailBody}</pre>`,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("Resend API Error:", errorData);
                }
            } else {
                console.log("No RESEND_API_KEY found. Email logged but not sent.");
                console.log(`Would send to: victor@aetherlabs.es, hola@aetherlabs.es`);
            }
        } catch (emailError) {
            console.error("Email send error (non-blocking):", emailError);
        }

        return NextResponse.json({ success: true, message: "Solicitud recibida correctamente." });
    } catch (error) {
        console.error("Submit error:", error);
        return NextResponse.json(
            { success: false, message: "Error al procesar la solicitud." },
            { status: 500 }
        );
    }
}
