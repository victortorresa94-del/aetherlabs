import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, voice, speed } = await req.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: 'Texto vacío' }, { status: 400 });
    }

    const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;
    if (!HF_TOKEN) {
      return NextResponse.json({ error: 'HUGGINGFACE_TOKEN no configurado en .env.local' }, { status: 500 });
    }

    // VibeVoice-Realtime-0.5B via HuggingFace Inference API
    const response = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/VibeVoice-Realtime-0.5B',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            voice: voice !== 'default' ? voice : undefined,
            speed: speed ?? 1.0,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      // Si el modelo está cargando
      if (response.status === 503) {
        return NextResponse.json({ error: 'Modelo cargando, intenta en 20 segundos.' }, { status: 503 });
      }
      return NextResponse.json({ error: `HuggingFace error: ${err}` }, { status: response.status });
    }

    const audioBuffer = await response.arrayBuffer();
    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Disposition': 'attachment; filename="vibevoice.wav"',
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Error interno';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
