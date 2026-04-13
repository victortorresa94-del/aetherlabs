import { hexToRgba } from '@/lib/colors';

interface ExperimentTagProps {
  label: string;
  accentColor: string;
}

export default function ExperimentTag({ label, accentColor }: ExperimentTagProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--v5-font-mono)',
        fontSize: '9px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: accentColor,
        padding: '3px 8px',
        border: `1px solid ${hexToRgba(accentColor, 0.25)}`,
        borderRadius: '3px',
        backgroundColor: hexToRgba(accentColor, 0.08),
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}
