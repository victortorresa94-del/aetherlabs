import type { ExperimentMetric } from '@/data/experiments-page';

interface ExperimentMetricsProps {
  metrics: ExperimentMetric[];
  accentColor: string;
}

// Icon mapping for common metric labels
const METRIC_ICONS: Record<string, string> = {
  'Tiempo por producto': '⏱',
  'Productos catalogados': '📦',
  'Horas/semana recuperadas': '♻',
  'Segmentos activos': '◈',
  'Emails por secuencia': '✉',
  'Contactos vía Instagram': '◎',
  'Consultas sin intervención': '✓',
  'Disponibilidad': '◷',
  'Tiempo de respuesta': '⚡',
  'Tiempo por parte': '⏱',
  'SATs en España': '◈',
  'Estado actual': '◎',
  'Mensajes automatizables': '✓',
  'Tiempo de setup': '⏱',
  'Precio implementación': '◈',
};

const getIcon = (label: string) => {
  for (const key of Object.keys(METRIC_ICONS)) {
    if (label.toLowerCase().includes(key.toLowerCase())) return METRIC_ICONS[key];
  }
  return '—';
};

export default function ExperimentMetrics({ metrics, accentColor }: ExperimentMetricsProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {metrics.map((metric, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '20px',
            padding: '14px 0',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Icon */}
          <span
            style={{
              fontSize: '13px',
              color: accentColor,
              width: '18px',
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            {getIcon(metric.label)}
          </span>

          {/* Label */}
          <span
            style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: '13px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              flex: 1,
              letterSpacing: '0.01em',
            }}
          >
            {metric.label}
          </span>

          {/* Value */}
          <span
            style={{
              fontFamily: 'var(--v5-font-advercase)',
              fontSize: '15px',
              fontWeight: 700,
              color: '#F5F5F0',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  );
}
