import type { ExperimentMetric } from '@/data/experiments-page';
import { hexToRgba } from '@/lib/colors';

interface ExperimentMetricsProps {
  metrics: ExperimentMetric[];
  accentColor: string;
}

export default function ExperimentMetrics({ metrics, accentColor }: ExperimentMetricsProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
        gap: '1px',
        border: `1px solid ${hexToRgba(accentColor, 0.15)}`,
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: hexToRgba(accentColor, 0.08),
      }}
    >
      {metrics.map((metric, i) => (
        <div
          key={i}
          style={{
            padding: '16px 20px',
            backgroundColor: '#0D0D0D',
            borderRight: i < metrics.length - 1 ? `1px solid ${hexToRgba(accentColor, 0.12)}` : undefined,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '20px',
              fontWeight: 600,
              color: accentColor,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            {metric.value}
          </div>
          <div
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '11px',
              fontWeight: 300,
              color: '#666',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
