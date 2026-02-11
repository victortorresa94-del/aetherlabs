import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const audioFile = formData.get("audio") as File;

        if (!audioFile) {
            return NextResponse.json({ text: "" }, { status: 400 });
        }

        if (!GOOGLE_API_KEY) {
            return NextResponse.json({ text: "Error: Google API key no configurada." }, { status: 500 });
        }

        // Convert audio to base64
        const arrayBuffer = await audioFile.arrayBuffer();
        const base64Audio = Buffer.from(arrayBuffer).toString("base64");

        // Call Google Cloud Speech-to-Text v1 API
        const response = await fetch(
            `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    config: {
                        encoding: "WEBM_OPUS",
                        sampleRateHertz: 48000,
                        languageCode: "es-ES",
                        model: "latest_long",
                        enableAutomaticPunctuation: true,
                    },
                    audio: {
                        content: base64Audio,
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.text();
            console.error("Google Speech API error:", errorData);
            return NextResponse.json({ text: "Error al transcribir el audio." }, { status: 500 });
        }

        const data = await response.json();
        const transcription = data.results
            ?.map((result: { alternatives: Array<{ transcript: string }> }) =>
                result.alternatives?.[0]?.transcript
            )
            .filter(Boolean)
            .join(" ") || "";

        return NextResponse.json({ text: transcription });
    } catch (error) {
        console.error("Transcription error:", error);
        return NextResponse.json({ text: "Error al procesar el audio." }, { status: 500 });
    }
}
