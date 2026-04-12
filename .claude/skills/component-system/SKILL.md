---
name: component-system
description: React component architecture for Next.js — composition patterns, compound components, custom hooks, context, shadcn/ui extension, Radix UI, accessibility, reusable patterns. Use when designing new components, refactoring component structure, or building a design system.
version: 1.0.0
---

# React Component Architecture

## File Structure Convention (this project)

```
src/components/
├── v5/                    # Current design system (V5)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── [Section]Section.tsx
│   └── ...
├── ui/                    # shadcn/ui base components
│   ├── button.tsx
│   ├── dialog.tsx
│   └── ...
└── shared/                # Cross-version shared
```

## Component Template

```tsx
'use client' // Only add if using hooks/events/browser APIs

import { cn } from '@/lib/utils'

interface SectionProps {
  className?: string
  children?: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={cn('w-full py-20 md:py-32 px-6', className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
```

## Composition Patterns

### Compound Components
```tsx
// Card compound component
const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('rounded-2xl bg-white/5 border border-white/10 p-6', className)} {...props}>
    {children}
  </div>
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-semibold', className)} {...props} />
)

Card.Header = CardHeader
Card.Title = CardTitle

// Usage
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
</Card>
```

### Render Props / Slot Pattern
```tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  emptyState?: React.ReactNode
  className?: string
}

function List<T>({ items, renderItem, emptyState, className }: ListProps<T>) {
  if (items.length === 0) return emptyState || null
  return (
    <ul className={cn('space-y-4', className)}>
      {items.map((item, i) => (
        <li key={i}>{renderItem(item, i)}</li>
      ))}
    </ul>
  )
}
```

## Custom Hooks

```tsx
// Debounced value
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}

// Media query
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])
  return matches
}

// Scroll direction
function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setDirection(y > lastY.current ? 'down' : 'up')
      lastY.current = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return direction
}
```

## shadcn/ui Extension Pattern

```tsx
// Extend shadcn Button with custom variants
import { Button as BaseButton, buttonVariants } from '@/components/ui/button'
import { cva } from 'class-variance-authority'

const aetherButtonVariants = cva(
  'font-medium transition-all duration-200 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-white text-black hover:bg-white/90',
        secondary: 'bg-white/10 text-white hover:bg-white/15 border border-white/20',
        ghost: 'text-white/60 hover:text-white hover:bg-white/5',
        cta: 'bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:opacity-90 shadow-lg',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
)
```

## Context Pattern (global state)

```tsx
// contexts/ThemeContext.tsx
interface ThemeContextType {
  theme: 'dark' | 'light'
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
```

## Performance Patterns

```tsx
// Memoize expensive components
const HeavyChart = memo(({ data }: { data: ChartData[] }) => (
  <Chart data={data} />
))

// Memoize callbacks and computations
const handleSubmit = useCallback((e: FormEvent) => {
  // ...
}, [dependency])

const processedData = useMemo(() => (
  rawData.filter(d => d.active).sort((a, b) => b.date - a.date)
), [rawData])

// Lazy load components
const Chart = lazy(() => import('./Chart'))
```
