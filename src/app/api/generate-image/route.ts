import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt, style } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // API Key segura desde variable de entorno (backend)
    const apiKey = process.env.GOOGLE_AI_API_KEY || 'AIzaSyDdYW_nvpx7kAcplthfVKFUWO9j5T287gQ';

    // Construir el prompt con el estilo
    let fullPrompt = prompt;
    if (style && style !== 'default') {
      fullPrompt = `${prompt}, ${style} style photography`;
    }

    // Llamada a la API de Google Imagen (Gemini)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: fullPrompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Failed to generate image', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
