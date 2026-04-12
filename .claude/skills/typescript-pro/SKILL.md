---
name: typescript-pro
description: TypeScript strict mode patterns for Next.js — generics, utility types, discriminated unions, type guards, Zod infer, React component typing, API response types, satisfies operator. Use when fixing TypeScript errors, designing type-safe APIs, or strengthening types.
version: 1.0.0
---

# TypeScript — Strict Mode Mastery

## tsconfig Setup (this project)
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## React Component Typing

```tsx
// Props with children
interface CardProps {
  title: string
  description?: string
  variant?: 'default' | 'featured' | 'minimal'
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

// With forwardRef
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn('base', className)} {...props} />
  )
)
Input.displayName = 'Input'

// Polymorphic component (as prop)
type AsProp<C extends React.ElementType> = { as?: C }
type PropsWithAs<C extends React.ElementType, P = {}> = P & AsProp<C> &
  Omit<React.ComponentPropsWithRef<C>, keyof (P & AsProp<C>)>
```

## Discriminated Unions

```ts
// API responses
type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; code?: number }

// Handle safely
function handleResult<T>(result: ApiResult<T>) {
  if (result.success) {
    return result.data  // TypeScript knows T here
  }
  console.error(result.error)  // TypeScript knows error exists here
}

// UI states
type LoadState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string }
```

## Utility Types

```ts
// Common built-ins
type Partial<T>          // all optional
type Required<T>         // all required
type Readonly<T>         // immutable
type Pick<T, K>          // pick keys
type Omit<T, K>          // omit keys
type Record<K, V>        // map type
type NonNullable<T>      // remove null/undefined
type ReturnType<F>       // function return type
type Parameters<F>       // function params

// Custom utilities
type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }
type Nullable<T> = T | null
type Optional<T> = T | undefined
type ValueOf<T> = T[keyof T]
```

## Zod + TypeScript Integration

```ts
import { z } from 'zod'

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(['admin', 'user']),
  createdAt: z.date(),
})

// Infer type from schema — single source of truth
type User = z.infer<typeof UserSchema>

// Use everywhere
function processUser(user: User) { ... }
const validated = UserSchema.parse(rawData) // throws on error
const safe = UserSchema.safeParse(rawData)  // returns Result
```

## Type Guards

```ts
// Custom type guard
function isUser(value: unknown): value is User {
  return UserSchema.safeParse(value).success
}

// Narrowing with instanceof
function handleError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'Unknown error'
}

// Exhaustive check
function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}`)
}

function handleVariant(variant: 'a' | 'b' | 'c') {
  switch (variant) {
    case 'a': return 'A'
    case 'b': return 'B'
    case 'c': return 'C'
    default: return assertNever(variant) // compile error if new variant added
  }
}
```

## Generic Functions

```ts
// Fetch with type safety
async function fetchApi<T>(url: string, schema: z.ZodSchema<T>): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  return schema.parse(data)
}

// Usage
const user = await fetchApi('/api/user', UserSchema)
// user is fully typed as User

// Generic hook
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })
  // ...
  return [value, setValue] as const
}
```

## satisfies Operator (TS 4.9+)

```ts
// Validates type without widening
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
} satisfies Record<string, string | number[]>

// palette.red is number[] (not string | number[])
palette.red.map(...)  // works!
```

## Common TypeScript Errors & Fixes

```ts
// "possibly undefined" — use optional chaining + nullish coalescing
const name = user?.profile?.name ?? 'Anonymous'

// "Object is possibly null" — use non-null assertion (only when certain)
const el = document.getElementById('app')!

// "Type 'string' is not assignable" — use as const or enum
const STATUS = ['active', 'inactive'] as const
type Status = typeof STATUS[number]  // 'active' | 'inactive'

// Index signature issues
const obj: Record<string, string> = {}
const val = obj['key']  // string | undefined with noUncheckedIndexedAccess
const safeVal = obj['key'] ?? 'default'
```
