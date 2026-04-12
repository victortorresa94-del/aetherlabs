---
name: drizzle-pro
description: Drizzle ORM + LibSQL/Turso patterns — schema definition, migrations, CRUD queries, relations, transactions, indexes. Use when working with the database, creating schemas, writing queries, running migrations, or optimizing DB performance.
version: 1.0.0
---

# Drizzle ORM + LibSQL — Database Patterns

## Setup (already configured in this project)
```ts
// lib/db.ts
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN
})

export const db = drizzle(client, { schema })
```

## Schema Definition

```ts
// lib/schema.ts
import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  role: text('role', { enum: ['admin', 'user'] }).default('user'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
})

export const leads = sqliteTable('leads', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text('email').notNull(),
  name: text('name').notNull(),
  company: text('company'),
  message: text('message'),
  status: text('status', { enum: ['new', 'contacted', 'qualified', 'closed'] }).default('new'),
  source: text('source'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
})

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  leads: many(leads)
}))
```

## Core CRUD Operations

```ts
import { db } from '@/lib/db'
import { users, leads } from '@/lib/schema'
import { eq, and, desc, like, count, sql } from 'drizzle-orm'

// SELECT
const allLeads = await db.select().from(leads)
const lead = await db.select().from(leads).where(eq(leads.id, id)).get()
const userLeads = await db.query.leads.findMany({
  where: eq(leads.status, 'new'),
  orderBy: desc(leads.createdAt),
  limit: 20
})

// INSERT
const newLead = await db.insert(leads).values({
  id: crypto.randomUUID(),
  email: 'user@example.com',
  name: 'John Doe',
  source: 'contact-form'
}).returning()

// UPDATE
await db.update(leads)
  .set({ status: 'contacted', updatedAt: new Date() })
  .where(eq(leads.id, leadId))

// DELETE
await db.delete(leads).where(eq(leads.id, leadId))

// COUNT
const [{ total }] = await db.select({ total: count() }).from(leads)
```

## Advanced Queries

```ts
// With relations (using query API)
const leadsWithUser = await db.query.leads.findMany({
  with: { user: true },
  where: eq(leads.status, 'qualified'),
  orderBy: desc(leads.createdAt),
  limit: 10,
  offset: (page - 1) * 10
})

// Multiple conditions
const filtered = await db.select()
  .from(leads)
  .where(
    and(
      eq(leads.status, 'new'),
      like(leads.email, '%@gmail.com')
    )
  )
  .orderBy(desc(leads.createdAt))

// Join
const result = await db
  .select({ lead: leads, userName: users.name })
  .from(leads)
  .leftJoin(users, eq(leads.userId, users.id))
```

## Transactions

```ts
const result = await db.transaction(async (tx) => {
  const lead = await tx.insert(leads).values({ ... }).returning().get()
  await tx.insert(notifications).values({ leadId: lead.id, ... })
  return lead
})
```

## Migrations

```bash
# drizzle.config.ts must exist
# Generate migration
npx drizzle-kit generate

# Push schema directly (dev only)
npx drizzle-kit push

# Run migrations
npx drizzle-kit migrate

# Inspect DB
npx drizzle-kit studio
```

```ts
// drizzle.config.ts
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
})
```

## Performance Tips
- Add indexes for frequently queried columns
- Use `.get()` for single row (more efficient than `[0]`)
- Use `db.query.*` API for relations (generates optimal JOIN)
- Avoid N+1: use `with` relations or batch queries
- Use transactions for multi-step writes
