import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Use GOOGLE_AI_API_KEY first (Google AI Studio key), fallback to GEMINI_API_KEY
const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const objective = formData.get("objective") as string || "leads";
        const description = formData.get("description") as string || "Un producto innovador";
        const imageFile = formData.get("image") as File | null;

        if (!GEMINI_API_KEY) {
            return NextResponse.json(
                { error: "Gemini API key not configured" },
                { status: 500 }
            );
        }

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const objectiveMap: Record<string, string> = {
            leads: "generación de leads y captación de datos",
            whatsapp: "tráfico a WhatsApp y conversación directa",
            sales: "ventas directas y conversión inmediata",
        };

        const objectiveText = objectiveMap[objective] || objectiveMap.leads;

        // Build image parts if user uploaded an image
        let imagePartForPrompt = "";
        const parts: Array<{ text: string } | { inlineData: { mimeType: string; data: string } }> = [];

        if (imageFile) {
            const arrayBuffer = await imageFile.arrayBuffer();
            const base64 = Buffer.from(arrayBuffer).toString("base64");
            parts.push({
                inlineData: {
                    mimeType: imageFile.type,
                    data: base64,
                },
            });
            imagePartForPrompt = " Based on the product image provided,";
        }

        // Generate 3 ad variants using Gemini Imagen
        const images: Array<{ url: string; engine: string; caption: string }> = [];

        const prompts = [
            `Create a stunning, premium vertical ad (9:16 aspect ratio) for social media.${imagePartForPrompt} product: ${description}. Goal: ${objectiveText}. Style: Clean, modern, minimal with bold typography overlay. Vibrant yet sophisticated color palette. Professional studio lighting.`,
            `Design a visually striking vertical social media ad (9:16 aspect ratio).${imagePartForPrompt} product: ${description}. Goal: ${objectiveText}. Style: Urban, dynamic, high contrast with neon accent lighting. Dark background with product prominently featured. Trendy and youthful aesthetic.`,
            `Generate a high-end vertical advertisement (9:16 aspect ratio).${imagePartForPrompt} product: ${description}. Goal: ${objectiveText}. Style: Luxury, warm tones, elegant composition with golden hour lighting. Premium feel with subtle textures and refined typography space.`,
        ];

        const engines = ["Gemini Imagen", "Gemini Imagen", "Gemini Imagen"];
        const captions = [
            "Estilo limpio y moderno",
            "Estilo urbano y dinámico",
            "Estilo premium y elegante",
        ];

        // Generate images in parallel
        const results = await Promise.allSettled(
            prompts.map(async (prompt) => {
                try {
                    const response = await ai.models.generateImages({
                        model: "imagen-3.0-generate-002",
                        prompt: prompt,
                        config: {
                            numberOfImages: 1,
                            aspectRatio: "9:16",
                        },
                    });

                    if (response.generatedImages && response.generatedImages.length > 0) {
                        const img = response.generatedImages[0];
                        if (img.image && img.image.imageBytes) {
                            const base64 = Buffer.from(img.image.imageBytes).toString("base64");
                            return `data:image/png;base64,${base64}`;
                        }
                    }
                    return null;
                } catch (err: unknown) {
                    const errorMsg = err instanceof Error ? err.message : String(err);
                    console.error("Image generation error:", errorMsg);
                    return null;
                }
            })
        );

        results.forEach((result, i) => {
            if (result.status === "fulfilled" && result.value) {
                images.push({
                    url: result.value,
                    engine: engines[i],
                    caption: captions[i],
                });
            }
        });

        // If no images were generated, return a placeholder result
        if (images.length === 0) {
            // Fallback: generate text descriptions as placeholders
            images.push(
                {
                    url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" fill="#111"><rect width="360" height="640" fill="#1a1a2e"/><text x="180" y="300" text-anchor="middle" fill="#82ff1f" font-size="20" font-family="sans-serif">Variante A</text><text x="180" y="330" text-anchor="middle" fill="#888" font-size="14" font-family="sans-serif">${description.slice(0, 40)}</text></svg>`)}`,
                    engine: "Fallback",
                    caption: "No se pudo generar — intenta de nuevo",
                },
                {
                    url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" fill="#111"><rect width="360" height="640" fill="#162e1d"/><text x="180" y="300" text-anchor="middle" fill="#82ff1f" font-size="20" font-family="sans-serif">Variante B</text><text x="180" y="330" text-anchor="middle" fill="#888" font-size="14" font-family="sans-serif">${description.slice(0, 40)}</text></svg>`)}`,
                    engine: "Fallback",
                    caption: "No se pudo generar — intenta de nuevo",
                },
                {
                    url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" fill="#111"><rect width="360" height="640" fill="#2e1d16"/><text x="180" y="300" text-anchor="middle" fill="#82ff1f" font-size="20" font-family="sans-serif">Variante C</text><text x="180" y="330" text-anchor="middle" fill="#888" font-size="14" font-family="sans-serif">${description.slice(0, 40)}</text></svg>`)}`,
                    engine: "Fallback",
                    caption: "No se pudo generar — intenta de nuevo",
                }
            );
        }

        return NextResponse.json({ images });
    } catch (error) {
        console.error("Generate API error:", error);
        return NextResponse.json({
            images: [
                {
                    url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" fill="#111"><rect width="360" height="640" fill="#1a1a2e"/><text x="180" y="300" text-anchor="middle" fill="#82ff1f" font-size="20" font-family="sans-serif">Error Generación</text><text x="180" y="330" text-anchor="middle" fill="#888" font-size="14" font-family="sans-serif">Revisa la API Key</text></svg>`)}`,
                    engine: "Fallback",
                    caption: "Error en la generación",
                },
                {
                    url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" fill="#111"><rect width="360" height="640" fill="#162e1d"/><text x="180" y="300" text-anchor="middle" fill="#82ff1f" font-size="20" font-family="sans-serif">Error Generación</text><text x="180" y="330" text-anchor="middle" fill="#888" font-size="14" font-family="sans-serif">Intenta de nuevo</text></svg>`)}`,
                    engine: "Fallback",
                    caption: "Error en la generación",
                },
                {
                    url: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" fill="#111"><rect width="360" height="640" fill="#2e1d16"/><text x="180" y="300" text-anchor="middle" fill="#82ff1f" font-size="20" font-family="sans-serif">Error Generación</text><text x="180" y="330" text-anchor="middle" fill="#888" font-size="14" font-family="sans-serif">Posible cuota excedida</text></svg>`)}`,
                    engine: "Fallback",
                    caption: "Error en la generación",
                }
            ]
        });
    }
}
