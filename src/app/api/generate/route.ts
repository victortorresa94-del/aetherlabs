// app/api/generate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

/** ===== Rate limit simple en memoria (3 intentos / 24h por IP) ===== */
type Hit = { count: number; resetAt: number };
const HITS = new Map<string, Hit>();
const WINDOW_MS = 24 * 60 * 60 * 1000;
const LIMIT = 3;

function getIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    (req as any).ip ||
    "0.0.0.0"
  );
}
function takeHit(ip: string) {
  const now = Date.now();
  const hit = HITS.get(ip);
  if (!hit || now > hit.resetAt) {
    HITS.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: LIMIT - 1, resetAt: now + WINDOW_MS };
  }
  if (hit.count >= LIMIT) return { allowed: false, remaining: 0, resetAt: hit.resetAt };
  hit.count += 1;
  return { allowed: true, remaining: LIMIT - hit.count, resetAt: hit.resetAt };
}
function resetIp(ip: string) { HITS.delete(ip); }

/** ===== Prompts PRO por categoría (nueva escena + cambio de cámara obligado) ===== */
function genericGodPrompt() {
  return `
You will receive ONE user-supplied product photo. Produce ONE NEW photorealistic, high-end commercial image suitable for brand campaign and e-commerce hero.

OBJECTIVE
- Create a completely NEW scene and camera composition that is clearly different from the source image while preserving the product identity and readability.

HARD CONSTRAINTS
- Preserve identity: same model/design, geometry, color, materials, logos/branding intact.
- DO NOT reuse the original background, shadows or camera. Build a NEW set and a NEW angle.
- DIFFERENT CAMERA: change the vantage point by ≥30° in yaw and/or ≥15° in pitch versus the input. If the result still resembles the input, internally regenerate with a clearly different angle (e.g., switch between: hero 3/4, low angle, slight top-down, close-up macro).
- CINEMATIC LENS: use a realistic focal length (50–85mm equivalent for products; 28–50mm for wider lifestyle scenes) with gentle perspective.
- LIGHTING: professional key+fill+rim; realistic, physically plausible soft shadows; control speculars; avoid blown highlights.
- DEPTH OF FIELD: shallow but keep product edges crisp (no mushy borders).
- CLEAN OUTPUT: no borders, no collage, no text, no watermarks, no duplicates of the product.
- If the category is wearable or makes sense with a human, you MAY use a model or body part (hand/foot/face) to contextually present it, ensuring the product remains the hero.

SCENE DIRECTION (pick what best fits the product category inferred from the photo)
- Premium studio sweep with gradient; or minimal lifestyle vignette relevant to the product’s use.
- Surfaces: acrylic, stone, wood, concrete — choose one that enhances materials.
- Props: only minimal, category-appropriate accents (never distract from the product).
- Background colorways should harmonize with the product/brand.

QUALITY CHECKS (perform internally before returning)
- Is the camera angle clearly different from the input? If not, regenerate with a stronger difference (low angle, top-down, or a 3/4 from the opposite side).
- Is the label/branding readable (if present) and undistorted? If not, fix and regenerate.
- Are shadows/reflections plausible? If not, refine light rig and regenerate.

DELIVERABLE
- Return ONE single high-quality image that meets all the above.
`;
}

function getPromptForPreset(preset: string) {
  const base = genericGodPrompt();

  if (preset === "fashion") {
    return base + `
CATEGORY: Fashion (footwear, apparel, accessories)
SCENE: premium studio or minimal urban/lifestyle. If wearable, optionally on a model (on-foot, hand close-up, torso).
CAMERA: hero 3/4 different from input, or low-angle street-style; emphasize silhouette and textures.
LIGHTING: soft key at 45°, controlled rim; manage fabric/leather speculars.
PROPS: minimal (pedestals, steps) only if they enhance the hero.
`;
  }

  if (preset === "cosmetics") {
    return base + `
CATEGORY: Cosmetics (bottle/tube/compact/applicator)
SCENE: beauty set on glossy acrylic or stone; chromatic harmony with packaging.
CAMERA: hero close-up or refined 3/4; label must be crisp and legible.
LIGHTING: beauty soft boxes; refined reflections; gentle bloom; clean edges.
PROPS: minimal (acrylic blocks, droplets, petals) and never distract.
`;
  }

  if (preset === "food") {
    return base + `
CATEGORY: Food & Beverage (packaged or plated)
SCENE: professional food studio; if drink, realistic condensation; if plated food, appetizing styling on wood/stone.
CAMERA: hero 3/4 or top-down aesthetic (choose different from input); label legible when applicable.
LIGHTING: crisp highlights; controlled reflections; natural color fidelity.
PROPS: minimal utensils/ingredients to support the story; no clutter.
`;
  }

  if (preset === "tech") {
    return base + `
CATEGORY: Consumer Tech (phones, earbuds, wearables, peripherals)
SCENE: clean studio gradient or precise hard-light pattern; emphasize machining and materials.
CAMERA: dynamic hero 3/4 or macro close-up from a different side; ports/seams clean.
LIGHTING: soft key + rim; manage speculars on glass/metal; avoid fingerprints.
`;
  }

  if (preset === "home") {
    return base + `
CATEGORY: Home & Decor (furniture, lamps, homeware)
SCENE: styled interior corner or tasteful studio vignette (floor/wall sweep).
CAMERA: hero 3/4 or slight top-down (different from input); accurate scale and proportions.
LIGHTING: soft daylight-like; plausible shadows; warm, inviting mood.
PROPS: minimal complementary decor that clarifies use without stealing focus.
`;
  }

  if (preset === "health") {
    return base + `
CATEGORY: Health & Wellness (supplements, wearables, devices)
SCENE: clean clinical or spa-like set; hygienic and trustworthy.
CAMERA: hero 3/4 or top-down kit-layout; ensure labels/instructions (if any) are readable.
LIGHTING: soft, even; minimal glare; calm color palette (whites, soft greens/blues).
PROPS: subtle towels, glass water, leaf; never distract from the product.
`;
  }

  if (preset === "music") {
    return base + `
CATEGORY: Music (instruments, audio gear, accessories)
SCENE: professional studio or stage-like vignette; cables tidy; stands realistic.
CAMERA: strong 3/4 different from input or low-angle hero; show depth and form.
LIGHTING: key + rim with controlled speculars on lacquer/metal; optional moody backlight.
PROPS: minimal (amp, stand, mic) only if coherent; no clutter.
`;
  }

  if (preset === "sports") {
    return base + `
CATEGORY: Sports & Outdoors (footwear, apparel, gear, equipment)
SCENE: premium performance studio or minimal outdoor vibe.
CAMERA: dynamic 3/4 or low-angle action-ready composition (different from input); show durability and form.
LIGHTING: crisp key + rim; sense of energy; realistic shadows.
PROPS: minimal context (court/track/turf texture) without distraction.
`;
  }

  // GENÉRICO “nivel dios”
  return base + `
CATEGORY: Auto-inferred from the user photo (generic rules apply).
`;
}

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

/** DEV: resetear rate-limit (no disponible en prod) */
export async function DELETE(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Reset no disponible en producción." }, { status: 403 });
  }
  resetIp(getIp(req));
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    if (!apiKey) {
      return NextResponse.json({ error: "Falta GEMINI_API_KEY en el servidor." }, { status: 500 });
    }

    const ip = getIp(req);
    const devBypass = process.env.NODE_ENV !== "production" && req.headers.get("x-aether-dev") === "1";
    const rl = devBypass ? { allowed: true, remaining: LIMIT, resetAt: Date.now() + WINDOW_MS } : takeHit(ip);
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Has alcanzado el máximo de 3 pruebas gratuitas en este dispositivo. Vuelve mañana o reserva una sesión completa.", rateLimit: { remaining: rl.remaining, resetAt: rl.resetAt } },
        { status: 429 }
      );
    }

    const form = await req.formData();
    const file = form.get("image") as File | null;
    const preset = (form.get("preset") as string) || "generic";
    if (!file) return NextResponse.json({ error: "No image" }, { status: 400 });

    const mime = file.type || "image/png";
    if (!/^image\/(png|jpe?g|webp)$/i.test(mime)) {
      return NextResponse.json({ error: "Formato no soportado. Usa PNG/JPG/WEBP." }, { status: 415 });
    }
    if (file.size > 7 * 1024 * 1024) {
      return NextResponse.json({ error: "La imagen supera 7MB." }, { status: 413 });
    }

    const b64 = Buffer.from(await file.arrayBuffer()).toString("base64");
    const prompt = getPromptForPreset(preset);

    // Prompt + imagen en la MISMA interacción + systemInstruction fuerte
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image-preview",
      systemInstruction: {
        role: "system",
        parts: [{ text: "You are a top-tier commercial photographer and art director. Always build a NEW scene and a DIFFERENT camera than the user photo while preserving product identity." }],
      },
      contents: [{
        role: "user",
        parts: [
          { text: prompt },
          { inlineData: { mimeType: mime, data: b64 } },
        ],
      }],
      generationConfig: {
        temperature: 1.0, // un poco más creativo para que se mueva de ángulo
      },
      config: { responseModalities: ["Image"] },
    });

    const parts = response?.candidates?.[0]?.content?.parts || [];
    const imgPart = parts.find((p: any) => p?.inlineData?.data);
    if (!imgPart) {
      const txtPart = parts.find((p: any) => typeof p?.text === "string");
      if (txtPart?.text?.toLowerCase?.().includes("quota")) {
        return NextResponse.json(
          { error: "Nos quedamos sin cuota gratuita por hoy. Déjanos tu email y te avisamos cuando se recargue.", quotaExhausted: true },
          { status: 429 }
        );
      }
      return NextResponse.json({ error: "No image in response" }, { status: 502 });
    }

    return NextResponse.json({
      imageBase64: (imgPart as any).inlineData.data as string,
      meta: { model: "gemini-2.5-flash-image-preview", preset, rateLimit: { remaining: rl.remaining, resetAt: rl.resetAt } },
    });
  } catch (err: any) {
    const msg = String(err?.message || "");
    if (msg.includes("RESOURCE_EXHAUSTED") || msg.includes("429")) {
      return NextResponse.json(
        { error: "Límite de uso alcanzado temporalmente. Intenta de nuevo en unos minutos.", quotaExhausted: true },
        { status: 429 }
      );
    }
    console.error(err);
    return NextResponse.json({ error: err?.message || "Generation failed" }, { status: 500 });
  }
}
