import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Formamos — Aether Labs',
  description: 'Formación práctica en IA para equipos. Que tu gente sepa usar la IA en su trabajo real, no en teoría.',
};

export default function FormamosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>
        <section style={{
          background: '#080808',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 32px',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '140px', paddingBottom: '120px' }}>
            <div style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: '32px',
            }}>
              Servicio · 04
            </div>

            <h1 style={{
              fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
              fontSize: 'clamp(52px, 9vw, 104px)',
              fontWeight: 400,
              color: '#F5F5F0',
              letterSpacing: '-0.025em',
              lineHeight: 1.0,
              marginBottom: '32px',
            }}>
              Formamos
            </h1>

            <p style={{
              fontFamily: 'var(--v5-font-body)',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 300,
              color: 'rgba(245,245,240,0.5)',
              lineHeight: 1.65,
              maxWidth: '540px',
              marginBottom: '48px',
            }}>
              Formación práctica en IA para equipos reales. Nada de presentaciones genéricas.
              Trabajamos con tus procesos, tus herramientas y tus casos de uso para que
              tu equipo salga usando la IA el lunes siguiente.
            </p>

            <Link
              href="/contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                backgroundColor: '#F5F5F0',
                color: '#080808',
                fontFamily: 'var(--v5-font-body)',
                fontSize: '15px',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              Hablamos →
            </Link>
          </div>
        </section>

        <section style={{
          background: '#F8F8F5',
          padding: '100px 32px',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {[
                { num: '01', title: 'Talleres prácticos', desc: 'Sesiones intensivas de medio día o día completo con casos de uso reales de tu sector.' },
                { num: '02', title: 'Formación continua', desc: 'Acompañamiento mensual para que el equipo no se quede atrás cuando la IA evoluciona.' },
                { num: '03', title: 'Programas a medida', desc: 'Diseñamos el programa según el nivel del equipo, sus roles y las herramientas que ya usan.' },
              ].map((item) => (
                <div key={item.num} style={{
                  background: '#fff',
                  border: '1px solid #e8e8e5',
                  borderRadius: '12px',
                  padding: '32px',
                }}>
                  <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#bbb', marginBottom: '16px' }}>{item.num}</div>
                  <h3 style={{
                    fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#111',
                    letterSpacing: '-0.02em',
                    marginBottom: '12px',
                  }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#666', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
