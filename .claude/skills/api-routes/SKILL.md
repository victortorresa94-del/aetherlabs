---
name: api-routes
description: Next.js 16 API routes — App Router route handlers, Zod validation, error handling, streaming, middleware, rate limiting, HubSpot/OpenAI/Gemini integrations. Use when building or fixing any API route, server action, or backend endpoint in this project.
version: 1.0.0
---

# Next.js API Routes — Production Patterns

## Route Handler Structure (App Router)

```ts
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const RequestSchema = z.object({
  message: z.string().min(1).max(4000),
  sessionId: z.string().optional()
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = RequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { message } = parsed.data
    // ... process
    return NextResponse.json({ success: true, data: result })

  } catch (error) {
    console.error('[API] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

## Streaming Response (AI chat)

```ts
// src/app/api/chat/route.ts
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    stream: true
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || ''
        if (text) controller.enqueue(encoder.encode(text))
      }
      controller.close()
    }
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    }
  })
}
```

## AI Integrations (all in this project)

### Claude (Anthropic)
```ts
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const message = await client.messages.create({
  model: 'claude-opus-4-6',
  max_tokens: 1024,
  messages: [{ role: 'user', content: prompt }]
})
```

### OpenAI
```ts
import OpenAI from 'openai'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const completion = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: prompt }]
})
```

### Google Gemini (in this project)
```ts
import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
const result = await model.generateContent(prompt)
```

## Form Submission with HubSpot (in this project)
```ts
// src/app/api/contacto/route.ts
import { Client } from '@hubspot/api-client'

const hubspot = new Client({ accessToken: process.env.HUBSPOT_TOKEN })

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json()

  await hubspot.crm.contacts.basicApi.create({
    properties: {
      email,
      firstname: name.split(' ')[0],
      lastname: name.split(' ')[1] || '',
      message
    }
  })

  return NextResponse.json({ success: true })
}
```

## Rate Limiting (simple in-memory)
```ts
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function rateLimit(ip: string, limit = 10, windowMs = 60_000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (record.count >= limit) return false
  record.count++
  return true
}

// In route handler:
const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
if (!rateLimit(ip)) {
  return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
}
```

## Environment Variables
```ts
// Always validate env vars at startup
const requiredEnvVars = ['OPENAI_API_KEY', 'HUBSPOT_TOKEN'] as const
for (const key of requiredEnvVars) {
  if (!process.env[key]) throw new Error(`Missing env: ${key}`)
}
```

## CORS Headers
```ts
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production'
    ? 'https://aetherlabs.es'
    : '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders })
}
```

## Server Actions (alternative to API routes)
```ts
'use server'
import { revalidatePath } from 'next/cache'

export async function submitForm(formData: FormData) {
  const email = formData.get('email') as string
  // validate, save, etc.
  revalidatePath('/contacto')
  return { success: true }
}
```
