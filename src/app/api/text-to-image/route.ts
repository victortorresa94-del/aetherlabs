import { NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const { prompt, width = 1024, height = 1024, model = 'flux' } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const encoded = encodeURIComponent(prompt);
    const seed = Math.floor(Math.random() * 999999);
    const url = `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&model=${model}&nologo=true&seed=${seed}`;

    const imageRes = await fetch(url, {
      headers: { 'User-Agent': 'AetherLabs/1.0' }
    });

    if (!imageRes.ok) {
      return NextResponse.json({ error: 'Image generation failed' }, { status: 500 });
    }

    const buffer = await imageRes.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');

    return NextResponse.json({
      success: true,
      image: `data:image/jpeg;base64,${base64}`,
      url,
      prompt
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get('prompt');
  if (!prompt) return NextResponse.json({ error: 'Prompt required' }, { status: 400 });

  const encoded = encodeURIComponent(prompt);
  const url = `https://image.pollinations.ai/prompt/${encoded}?width=1024&height=1024&nologo=true`;
  return NextResponse.redirect(url);
}
