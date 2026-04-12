---
name: ai-apis
description: AI API integration patterns — Claude (Anthropic), OpenAI GPT-4o, Google Gemini, image generation, speech-to-text, streaming, system prompts, tool use, structured output. Use when building or fixing any AI feature, chatbot, agent, image generation, or voice in this project.
version: 1.0.0
---

# AI APIs — Complete Integration Guide

## This Project's AI Stack
- `openai` — GPT-4o, DALL-E 3, Whisper
- `@google/generative-ai` + `@google/genai` — Gemini 2.0
- Anthropic Claude — via fetch or SDK
- VoiceNote/VoiceAI — `@mediapipe/tasks-vision`

## Claude (Anthropic) — Best for Complex Reasoning

```ts
// src/app/api/claude/route.ts
const CLAUDE_API_KEY = process.env.ANTHROPIC_API_KEY!

export async function POST(req: Request) {
  const { messages, system } = await req.json()

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': CLAUDE_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-6',
      max_tokens: 2048,
      system: system || 'You are a helpful AI assistant.',
      messages,
    }),
  })

  const data = await response.json()
  return Response.json({ content: data.content[0].text })
}
```

## OpenAI GPT-4o — Chat + Streaming

```ts
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Streaming chat
export async function POST(req: Request) {
  const { messages, systemPrompt } = await req.json()

  const stream = openai.beta.chat.completions.stream({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages
    ],
    temperature: 0.7,
    max_tokens: 1000,
  })

  return new Response(
    new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder()
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || ''
          if (text) controller.enqueue(enc.encode(text))
        }
        controller.close()
      }
    }),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  )
}
```

## Structured Output (OpenAI)

```ts
import { z } from 'zod'
import { zodResponseFormat } from 'openai/helpers/zod'

const ProposalSchema = z.object({
  title: z.string(),
  services: z.array(z.string()),
  budget: z.number(),
  timeline: z.string(),
  keyPoints: z.array(z.string()),
})

const completion = await openai.beta.chat.completions.parse({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: prompt }],
  response_format: zodResponseFormat(ProposalSchema, 'proposal'),
})

const proposal = completion.choices[0].message.parsed // fully typed!
```

## Google Gemini 2.0 Flash

```ts
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!)

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: 'You are a helpful assistant.',
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
      responseMimeType: 'application/json', // structured output
    }
  })

  const result = await model.generateContent(prompt)
  return Response.json({ text: result.response.text() })
}
```

## DALL-E 3 Image Generation

```ts
// src/app/api/generate-image/route.ts
export async function POST(req: Request) {
  const { prompt, size = '1024x1024' } = await req.json()

  const image = await openai.images.generate({
    model: 'dall-e-3',
    prompt,
    n: 1,
    size,
    quality: 'hd',
    style: 'vivid',
  })

  return Response.json({ url: image.data[0].url })
}
```

## Whisper Speech-to-Text

```ts
// src/app/api/vibevoice/asr/route.ts — already exists in this project
export async function POST(req: Request) {
  const formData = await req.formData()
  const audio = formData.get('audio') as File

  const transcription = await openai.audio.transcriptions.create({
    file: audio,
    model: 'whisper-1',
    language: 'es',
    response_format: 'text',
  })

  return Response.json({ text: transcription })
}
```

## Client-side Streaming Hook

```tsx
'use client'

async function streamChat(messages: Message[], onChunk: (text: string) => void) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  })

  if (!res.body) throw new Error('No response body')

  const reader = res.body.getReader()
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    onChunk(decoder.decode(value, { stream: true }))
  }
}

// Usage in component
const [response, setResponse] = useState('')

await streamChat(messages, (chunk) => {
  setResponse(prev => prev + chunk)
})
```

## System Prompt Engineering

```ts
// Aether Labs agents follow this structure:
const SYSTEM_PROMPT = `
Eres [nombre], asistente de IA de Aether Labs.

## Tu rol
[descripción específica]

## Lo que puedes hacer
- [capability 1]
- [capability 2]

## Restricciones
- Responde siempre en español
- Mantén respuestas concisas (max 3 párrafos)
- No inventes datos específicos de la empresa

## Formato
Usa markdown para estructurar respuestas largas.
`
```

## Cost Optimization
- GPT-4o-mini for simple tasks, GPT-4o for complex reasoning
- Gemini Flash for high-volume, low-latency tasks
- Claude Opus for deepest reasoning, Haiku for speed
- Cache responses for common queries
- Limit max_tokens to what you actually need
