import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;
    if (!HF_TOKEN) {
      return NextResponse.json({ error: 'HUGGINGFACE_TOKEN no configurado en .env.local' }, { status: 500 });
    }

    const formData = await req.formData();
    const audioFile = formData.get('audio') as File | null;
    if (!audioFile) {
      return NextResponse.json({ error: 'No se recibió archivo de audio' }, { status: 400 });
    }

    const audioBuffer = await audioFile.arrayBuffer();

    // VibeVoice-ASR-7B via HuggingFace Inference API
    const response = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/VibeVoice-ASR',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          'Content-Type': audioFile.type || 'audio/webm',
        },
        body: audioBuffer,
      }
    );

    if (!response.ok) {
      const err = await response.text();
      if (response.status === 503) {
        return NextResponse.json({ error: 'Modelo cargando, intenta en 30 segundos.' }, { status: 503 });
      }
      return NextResponse.json({ error: `HuggingFace error: ${err}` }, { status: response.status });
    }

    const result = await response.json();

    // HF devuelve { text: "..." } o [{ generated_text: "..." }]
    const text =
      result?.text ??
      result?.[0]?.generated_text ??
      result?.[0]?.text ??
      JSON.stringify(result);

    return NextResponse.json({ text });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Error interno';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
