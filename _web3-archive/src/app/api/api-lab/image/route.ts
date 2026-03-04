import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!GEMINI_API_KEY) {
            return NextResponse.json({ error: "API Key error" }, { status: 500 });
        }

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        // Imagen 3 generation
        const response = await ai.models.generateImages({
            model: "imagen-3.0-generate-002",
            prompt: prompt,
            config: {
                numberOfImages: 1,
            }
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const img = response.generatedImages[0];
            if (img.image && img.image.imageBytes) {
                const base64 = Buffer.from(img.image.imageBytes).toString("base64");
                return NextResponse.json({ image: `data:image/png;base64,${base64}` });
            }
        }

        return NextResponse.json({ error: "No image generated" }, { status: 500 });

    } catch (error: any) {
        console.error("Image API error:", error);
        // Fallback for demo if API fails
        const fallbackImage = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="#111"><rect width="512" height="512" fill="#222"/><text x="256" y="256" text-anchor="middle" fill="#82ff1f" font-family="monospace" font-size="24">Image Generation Failed</text><text x="256" y="290" text-anchor="middle" fill="#666" font-family="monospace" font-size="14">${error.response?.status === 400 ? 'API Key/Quota Error' : 'Try again later'}</text></svg>`)}`;
        return NextResponse.json({ image: fallbackImage, error: error.message });
    }
}
