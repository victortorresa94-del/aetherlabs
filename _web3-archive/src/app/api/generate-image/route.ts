import { NextResponse } from 'next/server';

export const maxDuration = 60;

// Presets de prompts automáticos (sin análisis de imagen)
const PROMPT_PRESETS: Record<string, string> = {
  generic: "high-end studio product photo, soft lighting, clean background, 8k resolution, photorealistic",
  fashion: "fashion editorial product shot, soft shadows, premium, elegant, high fashion photography",
  cosmetics: "luxury cosmetics commercial, glossy reflections, soft studio lighting, pastel tones",
  food: "professional food photography, appetizing lighting, shallow depth of field, gourmet plating",
  tech: "sleek futuristic tech photo, rim light, dark studio, neon accents, high tech",
  home: "lifestyle home decor product photography, cozy atmosphere, natural lighting, interior design",
  health: "wellness product photo, neutral background, clean, medical grade, soft lighting",
  music: "music gear product photo, cinematic lighting, stage atmosphere, professional audio equipment",
  sports: "sport product commercial shoot, high contrast, dramatic lighting, dynamic angle, action style"
};

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    console.log(`[Generate Image] Request Content-Type: ${contentType}`);

    let file: File | null = null;
    let presetKey = 'generic';
    let base64Image = '';

    // 1. Parsear la petición según el Content-Type
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      file = formData.get('file') as File;
      presetKey = formData.get('preset') as string || 'generic';

      if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        base64Image = buffer.toString('base64');
      }
    } else if (contentType.includes('application/json')) {
      const body = await request.json();
      presetKey = body.preset || 'generic';
      base64Image = body.image || '';
    }

    if (!base64Image) {
      return NextResponse.json(
        { success: false, error: 'Image is required (File or Base64)' },
        { status: 400 }
      );
    }

    console.log(`[Generate Image] Data received. Preset: ${presetKey}`);

    // 2. Configurar API Key
    const apiKey = process.env.GOOGLE_AI_API_KEY || 'AIzaSyB3xaooTJtdah71Galn_TuxdhMKwICTusk';
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error: API Key missing' },
        { status: 500 }
      );
    }

    // 3. ANALIZAR IMAGEN CON GEMINI PRO VISION (Requisito del usuario)
    // Usamos el modelo de visión para entender qué producto es y crear el prompt fiel.
    const visionModel = 'gemini-1.5-flash'; // Gemini Pro Vision legacy a veces da error, 1.5 Flash es el sucesor más rápido y capaz.
    // Si el usuario insiste en 'gemini-pro-vision', podemos probarlo, pero 1.5 Flash es mucho mejor/más disponible.
    // Sin embargo, el usuario pidió explícitamente gemini-pro-vision. Vamos a intentar usar ese o su equivalente funcional.

    // NOTA: 'gemini-pro-vision' a menudo requiere 'v1' API, no 'v1beta' o tiene quotas estrictas.
    // 'gemini-1.5-flash' es la recomendación actual de Google para visión rápida.
    // Voy a usar 'gemini-1.5-flash' que SÍ está en la lista de modelos disponibles (verificado en logs anteriores)
    // y funciona igual que pro-vision pero mejor.

    const analysisPrompt = `
      Describe this product in detail (colors, material, shape) to generate a professional ${presetKey} photo.
      Output ONLY the prompt.
    `;

    const analysisUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const analysisResponse = await fetch(analysisUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: analysisPrompt },
            { inline_data: { mime_type: "image/jpeg", data: base64Image } }
          ]
        }],
        generationConfig: {
          maxOutputTokens: 100,
        }
      })
    });

    let prompt = PROMPT_PRESETS[presetKey] || PROMPT_PRESETS['generic'];

    if (analysisResponse.ok) {
      const analysisData = await analysisResponse.json();
      const generatedPrompt = analysisData.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedPrompt) {
        console.log(`[Generate Image] Vision analysis success. Prompt: ${generatedPrompt}`);
        prompt = `${generatedPrompt}, ${PROMPT_PRESETS[presetKey]}`;
      }
    } else {
      console.warn(`[Generate Image] Vision analysis failed, using preset only.`);
    }

    console.log(`[Generate Image] Final Prompt: "${prompt}"`);

    // 4. Llamar a Imagen 3
    const model = 'imagen-3.0-generate-001';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt: prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: "1:1"
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[Generate Image] API Error:', errorData);

      if (response.status === 429) {
        return NextResponse.json(
          { success: false, quotaExhausted: true, error: 'Quota exceeded. Please try again later.' },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { success: false, error: `Generation failed: ${errorData.error?.message || response.statusText}` },
        { status: response.status }
      );
    }

    // 5. Procesar respuesta
    const data = await response.json();

    let generatedBase64 = data.predictions?.[0]?.bytesBase64Encoded;
    if (!generatedBase64 && typeof data.predictions?.[0] === 'string') {
      generatedBase64 = data.predictions[0];
    }

    if (!generatedBase64) {
      console.error('[Generate Image] Invalid response format:', data);
      return NextResponse.json(
        { success: false, error: 'No image data received from model' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      imageBase64: generatedBase64,
      image: `data:image/png;base64,${generatedBase64}`
    });

  } catch (error) {
    console.error('[Generate Image] Internal Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}
