import fs from 'fs';
import path from 'path';
import { HubspotService } from '../integrations/HubspotService';

export interface Lead {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    notes?: string;
    timestamp: string;
    source: string;
}

export class LeadsService {
    private static leadsPath = path.join(process.cwd(), 'leads.jsonl');
    private static csvPath = path.join(process.cwd(), 'leads.csv');

    static async saveLead(leadData: Partial<Lead>) {
        const lead: Lead = {
            ...leadData,
            timestamp: new Date().toISOString(),
            source: 'FLUBY_AI_CHAT'
        };

        try {
            // JSONL logging
            const entry = JSON.stringify(lead) + '\n';
            fs.appendFileSync(this.leadsPath, entry);

            // CSV logging (Excel friendly)
            const csvExists = fs.existsSync(this.csvPath);
            const headers = "timestamp,name,email,phone,company,source\n";
            const row = `${lead.timestamp},"${lead.name || ''}","${lead.email || ''}","${lead.phone || ''}","${lead.company || ''}",${lead.source}\n`;

            if (!csvExists) {
                fs.writeFileSync(this.csvPath, headers + row);
            } else {
                fs.appendFileSync(this.csvPath, row);
            }

            console.log('Lead saved successfully to JSONL and CSV:', lead.email);

            // HubSpot Integration
            if (process.env.HUBSPOT_ACCESS_TOKEN) {
                console.log('Syncing lead to HubSpot...');
                await HubspotService.createContact({
                    name: lead.name,
                    email: lead.email,
                    phone: lead.phone,
                    company: lead.company,
                    notes: lead.notes,
                    source: lead.source
                });
            }

            return { success: true, lead };
        } catch (error) {
            console.error('Error saving lead:', error);
            return { success: false, error };
        }
    }

    static async sendConfirmationEmail(email: string, name: string) {
        const resendKey = process.env.RESEND_API_KEY;

        const emailBody = `
Hola ${name},

Soy Fluby, la entidad inteligente de Aether Labs.

He procesado tu solicitud y quería confirmarte que ya estamos revisando tu caso. Si has solicitado una cita o diagnóstico, uno de nuestros humanos (o yo mismo, si me dejan) se pondrá en contacto contigo pronto.

Mientras tanto, puedes seguir explorando nuestro ecosistema en: https://aetherlabs.es

Saludos canallas,
Fluby
        `.trim();

        if (resendKey) {
            try {
                const response = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${resendKey}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "Fluby <fluby@resend.dev>",
                        to: [email],
                        subject: `Confirmación de sistema - Aether Labs`,
                        text: emailBody,
                    }),
                });
                return response.ok;
            } catch (error) {
                console.error('Error sending email:', error);
                return false;
            }
        } else {
            console.log('No RESEND_API_KEY. Mocking email to:', email);
            console.log('--- EMAIL CONTENT ---');
            console.log(emailBody);
            console.log('---------------------');
            return true;
        }
    }
}
