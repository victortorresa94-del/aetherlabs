// src/pages/api/lead.ts
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Endpoint /api/lead
 * - Recibe { payload }
 * - Si existe process.env.N8N_WEBHOOK_URL hace POST allí (n8n)
 * - Si no existe, responde 200 y escribe en logs (útil en free plan/test).
 *
 * TODO:
 * - Añadir reCAPTCHA, validaciones y autenticación si lo expones públicamente.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { payload } = req.body;
    if (!payload) return res.status(400).json({ error: "Missing payload" });

    const webhook = process.env.N8N_WEBHOOK_URL;

    if (webhook) {
      // Envío a n8n
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!r.ok) {
        const text = await r.text();
        console.error("Error sending to n8n:", r.status, text);
        return res.status(500).json({ ok: false, reason: "n8n error" });
      }

      return res.status(200).json({ ok: true, sentTo: "n8n" });
    } else {
      // No webhook configurado => log local y devolver OK
      console.log("Lead (no n8n configured):", JSON.stringify(payload, null, 2));
      return res.status(200).json({ ok: true, note: "no webhook configured - logged locally" });
    }
  } catch (err) {
    console.error("lead handler error:", err);
    return res.status(500).json({ ok: false, error: "server error" });
  }
}
