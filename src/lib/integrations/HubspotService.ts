import { Client } from "@hubspot/api-client";

export class HubspotService {
    private static client: Client | null = null;

    private static getClient() {
        if (!process.env.HUBSPOT_ACCESS_TOKEN) {
            console.warn("HUBSPOT_ACCESS_TOKEN is not defined");
            return null;
        }

        if (!this.client) {
            this.client = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });
        }
        return this.client;
    }

    static async createContact(lead: {
        name?: string;
        email?: string;
        phone?: string;
        company?: string;
        notes?: string;
        source?: string;
    }) {
        const hubspot = this.getClient();
        if (!hubspot) return { success: false, error: "No HubSpot configuration" };

        if (!lead.email) {
            return { success: false, error: "Email is required for HubSpot contact creation" };
        }

        try {
            // Split name into firstname and lastname if possible
            let firstname = lead.name || "";
            let lastname = "";

            if (firstname.includes(" ")) {
                const parts = firstname.split(" ");
                lastname = parts.pop() || "";
                firstname = parts.join(" ");
            }

            const properties: any = {
                email: lead.email,
                firstname: firstname,
                lastname: lastname,
                phone: lead.phone,
                company: lead.company,
                message: lead.notes, // Custom property or standard 'message' if available, often 'notes' is complex
                lifecyclestage: "lead",
                lead_source: "Flubby AI Agent"
            };

            // Remove undefined keys
            Object.keys(properties).forEach(key => properties[key] === undefined && delete properties[key]);

            const response = await hubspot.crm.contacts.basicApi.create({
                properties,
                associations: []
            });

            console.log(`Lead created in HubSpot: ${response.id}`);
            return { success: true, id: response.id };
        } catch (error: any) {
            if (error.code === 409) {
                console.log("Contact already exists in HubSpot");
                return { success: true, message: "Contact already exists" };
            }
            console.error("Error creating HubSpot contact:", error.message || error);
            return { success: false, error: error.message || error };
        }
    }
}
