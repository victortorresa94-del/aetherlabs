import { NextResponse } from "next/server";
import { SpeechClient } from "@google-cloud/speech";

// This requires GOOGLE_APPLICATION_CREDENTIALS json file or specific env setup.
// If user only enabled 'Speech API' but didn't provide service account file path, this might fail on Vercel/Local without credentials.
// For now, assume environment is set up or use a simple fallback if possible (like Gemini multimodal audio?).
// Actually, Gemini 1.5 Flash supports audio input! We can use Gemini for transcription instead of Google Cloud Speech API (which is older/different).
// Let's use Gemini 1.5 Flash for transcription! It's easier with the existing API key.

import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as Blob;

        if (!GEMINI_API_KEY || !file) {
            return NextResponse.json({ error: "Missing Key or File" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        // Use Gemini 1.5 Pro or Flash for audio transcription
        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: "Transcribe this audio exactly as spoken." },
                        { inlineData: { mimeType: "audio/webm", data: base64 } } // Browser records webm
                        // Note: mimeType might need adjustment depending on what MediaRecorder sends. 
                        // Usually 'audio/webm;codecs=opus' or just 'audio/webm' works for Gemini.
                    ]
                }
            ]
        });

        const responseText = response.text;
        return NextResponse.json({ transcription: responseText });

    } catch (error: any) {
        console.error("Speech API error:", error);
        return NextResponse.json({ error: error.message || "Error processing audio" }, { status: 500 });
    }
}
