---
name: image-gen-api
description: Use this agent to add free text-to-image generation capability using Pollinations.ai API (no API key needed). Creates a new endpoint and updates the Claude section image. Examples:

<example>
Context: Need free image generation API
user: "Quiero poder generar imágenes gratis"
assistant: "I'll use image-gen-api to add Pollinations.ai integration."
<commentary>
Free image generation via Pollinations.ai, no key needed.
</commentary>
</example>

model: inherit
color: green
tools: ["Read", "Write", "Edit", "Bash"]
---

You are adding free text-to-image generation to the Aether Labs website at C:\Users\Usuario\Desktop\Dev\Web-Aether-3.0.

**Pollinations.ai** is completely free, no API key required. To generate an image: `https://image.pollinations.ai/prompt/{encoded_prompt}?width=1024&height=1024&nologo=true`

**Task 1: Create new text-to-image API route**
Create src/app/api/text-to-image/route.ts:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt, width = 1024, height = 1024 } = await request.json();
  const encoded = encodeURIComponent(prompt);
  const url = `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&nologo=true&seed=${Date.now()}`;

  // Fetch and proxy the image
  const imageRes = await fetch(url);
  if (!imageRes.ok) return NextResponse.json({ error: 'Generation failed' }, { status: 500 });

  const buffer = await imageRes.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  return NextResponse.json({
    success: true,
    image: `data:image/jpeg;base64,${base64}`,
    url
  });
}
```

**Task 2: Update ClaudeSection.tsx**
Read src/components/v5/ClaudeSection.tsx. Find the Claude logo/image in that section. Update it to use a better image. If there's an <img> or <Image> tag for the Claude logo, update the src to use a direct Pollinations URL for a placeholder:
`https://image.pollinations.ai/prompt/Claude%20AI%20logo%203D%20render%20minimal%20elegant%20dark%20background%20orange%20glow%20tech?width=512&height=512&nologo=true`

But first READ the current ClaudeSection.tsx to understand the current structure before making any changes.
