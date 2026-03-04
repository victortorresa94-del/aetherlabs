# Aether Business Consultant - UI Kit & Design System

## 1. Design Tokens

### Colors
- **Background**: `#000000` (Black)
- **Primary Accent**: `#00ff88` (Neon Green)
- **Secondary Accent**: `#0a0a0a` (Dark Gray / Cards)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#a1a1aa` (Muted Gray)
- **Border**: `#27272a` (Subtle Gray)

### Typography
- **Family**: Inter (via Google Fonts / Project Defaults)
- **Headings**: Bold / ExtraBold, Tracking Tighter
- **Labels**: Uppercase, Tracking Widest, Semibold

### Effects
- **Glow**: `box-shadow: 0 0 20px rgba(0, 255, 136, 0.4)`
- **Glassmorphism**: `backdrop-filter: blur(4px)` (in inputs/panels)
- **Micro-animations**: Scale on hover, Smooth width transitions, Opacity fades.

## 2. Icon Set (Lucide React Mappings)

To export these as SVGs, you can use the following mappings or render them and copy the SVG output.

| Icon Name | Lucide Component | Description |
|-----------|------------------|-------------|
| **Search** | `<Search />` | For "Analizando web" |
| **Reviews** | `<Star />` | For "Opiniones" / Reputation |
| **Instagram** | `<Instagram />` | For Social Media analysis |
| **Automation** | `<Zap />` | For Opportunities detection |
| **Chatbot** | `<MessageSquare />` | For Conversational AI |
| **Voicebot** | `<Mic />` | For Voice Agents |

## 3. Component Structure

### Container (`BusinessConsultant`)
- Full-width black section (`bg-black`).
- Central container with max-width.
- Background glow effect (absolute positioned div with blur).

### Cards (`Card`)
- `bg-[#0a0a0a]`
- `border-color: #27272a`
- Hover state: `border-[#00ff88]`, `scale-1.05`.

### Buttons (`NeonButton`)
- **Primary**: `bg-[#00ff88] text-black`.
- **Secondary**: `bg-transparent border-white text-white`.
- Animation: `transition-all duration-300`.

## 4. CSS Utility Classes (Tailwind Reference)

```css
/* Neon Glow Text */
.text-neon {
  color: #00ff88;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

/* Neon Border */
.border-neon {
  border-color: #00ff88;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
}

/* Glass Input */
.input-glass {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
}
```
