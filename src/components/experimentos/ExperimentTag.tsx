interface ExperimentTagProps {
  label: string;
  accentColor: string;
}

// Map tech labels to a representative SVG or emoji for more visual interest
const TECH_ICONS: Record<string, string> = {
  'computer vision': '◉',
  'wordpress': '●',
  'inventory ai': '◈',
  'mobile app': '▣',
  'email automation': '✉',
  'instantly.ai': '▶',
  'lead enrichment': '◎',
  'whatsapp': '◈',
  'llm': '⬡',
  'rag': '⬡',
  'healthcare': '♥',
  'chatbot': '◎',
  'voice': '◉',
  'erp': '◈',
  'computer': '▣',
  'marketplace': '◈',
  'ai matching': '⬡',
  'startup': '▶',
  'web design': '▣',
  'seo': '●',
  'music': '♪',
  'reservation': '◷',
  'restaurant': '◎',
  'crm': '◈',
  'legal': '◎',
  'ocr': '◉',
  'editorial': '▣',
  'personal branding': '◎',
  'content ai': '⬡',
  'linkedin': '◈',
};

const getIcon = (label: string) => {
  const lower = label.toLowerCase();
  for (const key of Object.keys(TECH_ICONS)) {
    if (lower.includes(key)) return TECH_ICONS[key];
  }
  return '·';
};

export default function ExperimentTag({ label, accentColor }: ExperimentTagProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--v5-font-body)',
        fontSize: '11px',
        fontWeight: 300,
        letterSpacing: '0.01em',
        color: 'rgba(255,255,255,0.45)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ color: accentColor, fontSize: '9px' }}>{getIcon(label)}</span>
      {label}
    </span>
  );
}
