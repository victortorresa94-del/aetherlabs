import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const emailBody = `
Nueva solicitud de Ads Lab
===============================

CONTACTO:
- Nombre: ${data.contact?.name || "N/A"}
- Email: ${data.contact?.email || "N/A"}
- Teléfono: ${data.contact?.phone || "N/A"}
- Empresa: ${data.contact?.company || "N/A"}

CAMPAÑA:
- Objetivo: ${data.objective || "No definido"}
- Descripción del producto: ${data.productDescription || "N/A"}
- Creatividades seleccionadas: ${data.selectedImages?.length || 0}

---
Enviado desde Ads Lab - Aether Labs
Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}
        `.trim();

        console.log("=== ADS LAB QUOTE REQUEST ===");
        console.log(emailBody);
        console.log("=============================");

        // Send email via Resend if configured
        try {
            const resendKey = process.env.RESEND_API_KEY;
            if (resendKey) {
                await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${resendKey}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "Ads Lab <onboarding@resend.dev>",
                        to: ["victor@aetherlabs.es"],
                        subject: `[Ads Lab] Nueva solicitud de ${data.contact?.name || "cliente"}`,
                        text: emailBody,
                    }),
                });
            }
        } catch (emailError) {
            console.error("Email error (non-blocking):", emailError);
        }

        return NextResponse.json({ success: true, message: "Solicitud recibida correctamente." });
    } catch (error) {
        console.error("Ads Lab submit error:", error);
        return NextResponse.json(
            { success: false, message: "Error al procesar la solicitud." },
            { status: 500 }
        );
    }
}
