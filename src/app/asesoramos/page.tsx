import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Asesoramos — Aether Labs',
  description: 'Diagnóstico honesto de dónde tiene sentido aplicar IA en tu empresa y por dónde empezar.',
};

export default function AsesoramosPage() {
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
              Servicio · 01
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
              Asesoramos
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
              Antes de invertir en IA hay que saber dónde tiene sentido y dónde no.
              Analizamos tu operativa, identificamos las palancas reales y te decimos
              exactamente qué hacer primero — sin humo ni tecnicismos.
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
                { num: '01', title: 'Auditoría de procesos', desc: 'Mapeamos cómo trabaja tu equipo hoy e identificamos dónde la IA tiene impacto real.' },
                { num: '02', title: 'Hoja de ruta', desc: 'Priorizamos qué implementar primero según impacto, coste y tiempo de adopción.' },
                { num: '03', title: 'Sesión de claridad', desc: 'Una sesión estratégica de 90 minutos para que salgas con un plan concreto, no con más dudas.' },
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
