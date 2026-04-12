---
name: stripe-integration
description: Stripe v19 payment integration for Next.js — checkout sessions, webhooks, subscriptions, payment intents, customer portal, Autumn.js billing. Use when adding payments, subscriptions, billing, or working with Stripe webhooks in this project.
version: 1.0.0
---

# Stripe + Next.js — Payment Integration

## Setup (Stripe already in this project)
```ts
// lib/stripe.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})
```

## Checkout Session

```ts
// src/app/api/checkout/route.ts
import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { priceId, email, metadata } = await req.json()

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription', // or 'payment' for one-time
    payment_method_types: ['card'],
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    metadata,
    locale: 'es',
    allow_promotion_codes: true,
  })

  return NextResponse.json({ url: session.url })
}
```

## Webhook Handler

```ts
// src/app/api/stripe/webhook/route.ts
import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleCheckoutComplete(session)
      break
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      await handleSubscriptionCanceled(subscription)
      break
    }
    case 'invoice.payment_failed': {
      // Handle failed payment — notify user
      break
    }
  }

  return NextResponse.json({ received: true })
}

// IMPORTANT: Disable body parsing for webhooks
export const config = { api: { bodyParser: false } }
```

## Customer Portal

```ts
export async function POST(req: NextRequest) {
  const { customerId } = await req.json()

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_URL}/account`,
  })

  return NextResponse.json({ url: session.url })
}
```

## Autumn.js (billing layer — already in this project)
```ts
import { Autumn } from 'autumn-js'

const autumn = new Autumn({
  secretKey: process.env.AUTUMN_SECRET_KEY!,
})

// Check if customer has access to a feature
const { allowed } = await autumn.check({
  customerId: userId,
  featureId: 'agents-lab',
})
```

## Client-side Checkout Button
```tsx
'use client'

async function handleCheckout(priceId: string) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, email: user.email }),
  })
  const { url } = await res.json()
  window.location.href = url
}

<button onClick={() => handleCheckout('price_xxx')}>
  Suscribirse
</button>
```

## Testing Webhooks Locally
```bash
# Install Stripe CLI
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger test events
stripe trigger checkout.session.completed
```

## Environment Variables Needed
```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_URL=https://aetherlabs.es
```

## Price IDs Setup
```ts
// lib/stripe-prices.ts
export const PRICES = {
  starter: process.env.STRIPE_PRICE_STARTER!,
  pro: process.env.STRIPE_PRICE_PRO!,
  enterprise: process.env.STRIPE_PRICE_ENTERPRISE!,
} as const
```
