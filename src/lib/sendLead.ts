// lib/sendLead.ts
// Envío de leads a n8n (placeholder). Conéctalo cuando tengas el webhook.
// TODO: reemplazar URL por tu endpoint real en producción.

export type LeadPayload = {
    nombre: string;
    sector: string;
    necesidad: string;
    email: string;
    telefono?: string;
    origen?: string; // por ejemplo: "Contact Form" o "CreateYourAI"
  };
  
  export const sendLead = async (payload: LeadPayload) => {
    try {
      await fetch("https://n8n.tu-dominio.com/webhook/aetherlabs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Error al enviar lead:", error);
      // No romper UI si falla; el hook useFormStatus ya maneja estados
    }
  };
  