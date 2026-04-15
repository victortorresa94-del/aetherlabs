import type { ExperimentStatus } from '@/data/experiments-page';

const STATUS_CONFIG: Record<ExperimentStatus, { label: string; color: string }> = {
  live:        { label: 'Live',           color: '#FF6B35' },
  deployed:    { label: 'Deployed',       color: '#D97706' },
  development: { label: 'En desarrollo',  color: '#F59E0B' },
  concept:     { label: 'Concepto',       color: '#888888' },
};

export default function StatusBadge({ status }: { status: ExperimentStatus }) {
  const { label, color } = STATUS_CONFIG[status];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--v5-font-mono)',
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color,
        padding: '4px 10px',
        border: `1px solid ${color}33`,
        borderRadius: '4px',
        backgroundColor: `${color}12`,
      }}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: color,
          flexShrink: 0,
          animation: status === 'live' ? 'statusPulse 2s ease-in-out infinite' : undefined,
        }}
      />
      {label}
      <style>{`
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </span>
  );
}
