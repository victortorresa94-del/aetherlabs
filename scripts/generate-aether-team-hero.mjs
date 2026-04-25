/**
 * Genera la imagen hero de Aether Team con fal.ai (flux-pro) o GPT-4o image.
 * Ejecutar: node scripts/generate-aether-team-hero.mjs
 *
 * Requiere internet. Correr desde tu máquina local, no desde el sandbox.
 */

import { fal } from '@fal-ai/client';
import { writeFileSync } from 'fs';
import { createWriteStream } from 'fs';
import https from 'https';
import path from 'path';

// ─── CONFIG ────────────────────────────────────────────────────────────────
const FAL_KEY = '78c10ccc-7a55-413f-9af3-474dd2dc0504:2e9f9088a65f0b3119bc8eedf9c4b827';
const OUTPUT_PATH = './public/images/aether-team-hero.jpg';

const PROMPT = `
Editorial web hero section right panel, ultra-luxury photography.

Architectural still life: a rough-hewn raw travertine stone block
resting on a pale concrete floor, leaning against a warm limestone wall.
A single dark oxidized steel plate stands upright behind it.
Dramatic single-source natural light from upper right, casting long soft shadows.
The composition is asymmetric, architectural, minimal.

Color palette: warm cream walls (#D4C8B4), deep charcoal stone (#3A3530),
pale travertine floor (#E8E0D4). No pure white, no pure black.
Film grain texture overlay. Cinematic color grade — warm shadows, cool highlights.
Shot like Axel Vervoordt interiors or Vincenzo Dascanio still life photography.

IMPORTANT: No text, no logos, no UI elements. Pure photographic image only.
Ratio 9:16 vertical panel. Hyper-detailed, museum quality.
`;

// ─── DOWNLOAD HELPER ───────────────────────────────────────────────────────
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { reject(err); });
  });
}

// ─── MAIN ──────────────────────────────────────────────────────────────────
async function main() {
  console.log('🎨 Generando imagen hero Aether Team con fal.ai flux-pro...\n');

  fal.config({ credentials: FAL_KEY });

  try {
    const result = await fal.subscribe('fal-ai/flux-pro/v1.1-ultra', {
      input: {
        prompt: PROMPT.trim(),
        image_size: 'portrait_16_9',
        num_inference_steps: 50,
        guidance_scale: 3.5,
        num_images: 1,
        output_format: 'jpeg',
        safety_tolerance: '2',
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === 'IN_PROGRESS') {
          const last = update.logs?.at(-1)?.message;
          if (last) process.stdout.write(`\r  ${last}          `);
        }
      },
    });

    const imageUrl = result.data?.images?.[0]?.url;
    if (!imageUrl) throw new Error('No image URL in response');

    console.log('\n\n✅ Imagen generada. Descargando...');
    await downloadImage(imageUrl, OUTPUT_PATH);
    console.log(`✅ Guardada en: ${OUTPUT_PATH}`);
    console.log('\n👉 Ahora haz commit del archivo y haz push. El hero la usará automáticamente.');

  } catch (err) {
    console.error('\n❌ Error:', err.message);

    // Fallback: intentar con flux-schnell (más barato/rápido)
    console.log('\n🔄 Intentando con flux-schnell como fallback...');
    try {
      const result2 = await fal.subscribe('fal-ai/flux/schnell', {
        input: {
          prompt: PROMPT.trim(),
          image_size: 'portrait_4_3',
          num_inference_steps: 4,
          num_images: 1,
        },
      });
      const imageUrl2 = result2.data?.images?.[0]?.url;
      if (!imageUrl2) throw new Error('No image URL');
      await downloadImage(imageUrl2, OUTPUT_PATH);
      console.log(`✅ Guardada en: ${OUTPUT_PATH} (via flux-schnell)`);
    } catch (err2) {
      console.error('❌ Fallback también falló:', err2.message);
      process.exit(1);
    }
  }
}

main();
