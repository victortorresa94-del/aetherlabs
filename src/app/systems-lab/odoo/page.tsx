'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Package, Calculator, FolderKanban } from 'lucide-react';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const modulos = [
  {
    icon: <ShoppingCart size={24} strokeWidth={1.5} />,
    title: 'Ventas y CRM',
    desc: 'Gestión de oportunidades, pedidos de venta, facturas y portal del cliente. Todo el ciclo comercial en un solo lugar con visibilidad completa del pipeline.',
  },
  {
    icon: <Package size={24} strokeWidth={1.5} />,
    title: 'Inventario y almacén',
    desc: 'Control de stock en tiempo real, alertas de stock mínimo, gestión de proveedores y movimientos de almacén. Nunca más quedarse sin producto sin saberlo.',
  },
  {
    icon: <Calculator size={24} strokeWidth={1.5} />,
    title: 'Contabilidad',
    desc: 'Facturas de venta y compra, conciliación bancaria automática e informes financieros. Integrado con el módulo de ventas para eliminar la doble entrada de datos.',
  },
  {
    icon: <FolderKanban size={24} strokeWidth={1.5} />,
    title: 'Proyectos',
    desc: 'Gestión de tareas, seguimiento de horas y facturación por tiempo trabajado. Conectado al módulo de ventas para cerrar el ciclo desde presupuesto hasta cobro.',
  },
];

const ejemplosClaude = [
  {
    pregunta: '"¿Cuál es el stock actual de [producto]?"',
    respuesta: 'Claude consulta Odoo en tiempo real y responde en segundos con el stock disponible, reservado y en tránsito.',
  },
  {
    pregunta: '"Genera el informe de ventas del mes."',
    respuesta: 'Claude extrae los datos de Odoo, los formatea y entrega el informe listo para presentar en la reunión de dirección.',
  },
  {
    pregunta: 'Alertas inteligentes automáticas',
    respuesta: 'Claude detecta anomalías en los datos: facturas vencidas, caídas en ventas, márgenes fuera de rango. Sin esperar a que alguien lo vea.',
  },
  {
    pregunta: 'Pedido de compra automático',
    respuesta: 'Cuando el stock de un producto baja del mínimo, Claude crea el pedido de compra al proveedor habitual y avisa al responsable para que lo apruebe.',
  },
];

const faqs = [
  {
    q: '¿Odoo es adecuado para una empresa de 5-50 personas?',
    a: 'Sí, es el ERP más adoptado por pymes europeas en ese rango. La versión Community es open source y gratuita. La versión Enterprise añade funcionalidades avanzadas y soporte oficial. En la Sesión de Claridad determinamos cuál tiene más sentido para tu caso.',
  },
  {
    q: '¿Cuánto tiempo lleva una implementación de Odoo?',
    a: 'Depende de los módulos y la complejidad de los procesos. Una implementación de 2-3 módulos para una pyme suele estar operativa en 4-8 semanas. La integración con Claude se añade en la fase final del proyecto.',
  },
  {
    q: '¿Podéis migrar los datos de nuestro sistema actual?',
    a: 'Sí. Hacemos la migración de datos desde Excel, hojas de cálculo u otros ERP. El proceso incluye limpieza de datos, mapeo de campos y validación antes de la puesta en marcha.',
  },
];

// ─── FAQ ACCORDION ─────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: '1px solid #E0E0E0' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '28px',
              paddingBottom: '28px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: '18px',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: '#111111',
                lineHeight: 1.3,
              }}
            >
              {faq.q}
            </span>
            <span
              style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '20px',
                fontWeight: 300,
                color: '#AAAAAA',
                flexShrink: 0,
                transition: 'transform 200ms ease',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#666666',
                paddingBottom: '24px',
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
      <div style={{ borderTop: '1px solid #E0E0E0' }} />
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function OdooPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '160px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <span
              className="v5-reveal"
              style={{
                display: 'block',
                marginBottom: '24px',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#999999',
              }}
            >
              SYSTEMS LAB · ERP
            </span>
            <h1
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-display)',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: '#F5F5F0',
                maxWidth: '820px',
                marginBottom: '28px',
                transitionDelay: '80ms',
              }}
            >
              Todo tu negocio<br />
              en un solo sistema.<br />
              <span style={{ color: 'rgba(245,245,240,0.38)' }}>Sin fragmentación.</span>
            </h1>
            <p
              className="v5-reveal"
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,245,240,0.45)',
                maxWidth: '540px',
                marginBottom: '40px',
                transitionDelay: '160ms',
              }}
            >
              Odoo es el ERP open source más usado por pymes en Europa. Ventas, inventario, compras, contabilidad, proyectos y RRHH en una sola plataforma. Lo implementamos, lo adaptamos a tu negocio y lo conectamos con Claude.
            </p>
            <div className="v5-reveal" style={{ transitionDelay: '240ms' }}>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Implementar Odoo →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2 — MÓDULOS ── */}
        <section className="v5-section" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '64px', maxWidth: '640px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Los módulos que más impacto tienen para pymes como la tuya.
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {modulos.map((m, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderTop: '2px solid #111111',
                    borderRadius: '16px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div style={{ color: '#111111', marginBottom: '20px' }}>{m.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'var(--v5-font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: '12px',
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: '#666666',
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3 — CLAUDE + ODOO ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#D97706',
                }}
              >
                ★ DIFERENCIAL AETHER LABS
              </span>
            </div>
            <div className="v5-reveal" style={{ maxWidth: '680px', marginBottom: '64px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                  marginBottom: '20px',
                }}
              >
                Odoo conectado a Claude. Tu ERP que responde en lenguaje natural.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.5)',
                }}
              >
                La integración de Claude con Odoo vía API es el diferencial de nuestra implementación. En lugar de navegar por menús, tu equipo puede preguntar directamente.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {ejemplosClaude.map((e, i) => (
                <div
                  key={i}
                  className="v5-reveal"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '40px',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-mono)',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: 'rgba(245,245,240,0.9)',
                      marginBottom: '16px',
                    }}
                  >
                    {e.pregunta}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--v5-font-body)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: 'rgba(245,245,240,0.5)',
                    }}
                  >
                    {e.respuesta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4 — FAQ ── */}
        <section className="v5-section" style={{ backgroundColor: '#F7F7F5', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="v5-container">
            <div className="v5-reveal" style={{ marginBottom: '56px' }}>
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#111111',
                }}
              >
                Preguntas frecuentes
              </h2>
            </div>
            <div style={{ maxWidth: '720px' }}>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 5 — CTA ── */}
        <section className="v5-section" style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="v5-container">
            <div
              className="v5-reveal"
              style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--v5-font-display)',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#F5F5F0',
                }}
              >
                ¿Tu negocio necesita un ERP que trabaje solo?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(245,245,240,0.45)',
                }}
              >
                Empieza con una Sesión de Claridad de 90 minutos.
              </p>
              <Link
                href="/systems-lab/sesion-de-claridad"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: '#F5F5F0',
                  color: '#080808',
                  fontFamily: 'var(--v5-font-body)',
                  fontSize: '15px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F5F5F0'; }}
              >
                Reservar Sesión de Claridad →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
