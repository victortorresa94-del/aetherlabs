import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const image = formData.get("image") as File;
        const prompt = formData.get("prompt") as string;

        if (!GEMINI_API_KEY || !image) {
            return NextResponse.json({ error: "Missing API Key or Image" }, { status: 400 });
        }

        const arrayBuffer = await image.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        { inlineData: { mimeType: image.type, data: base64 } }
                    ]
                }
            ]
        });

        const responseText = response.text;
        return NextResponse.json({ text: responseText });

    } catch (error) {
        console.error("Vision API error:", error);
        return NextResponse.json({ error: "Error processing image" }, { status: 500 });
    }
}
