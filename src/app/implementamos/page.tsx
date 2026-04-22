import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Implementamos — Aether Labs',
  description: 'Integramos sistemas de IA en tu operativa real. No demos, no pilotos. Producción.',
};

export default function ImplementamosPage() {
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
              Servicio · 03
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
              Implementamos
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
              Integramos la IA en tus procesos reales. No hacemos demos ni pilotos eternos.
              Entramos, configuramos, conectamos con tus herramientas y nos aseguramos
              de que funciona en producción.
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
                { num: '01', title: 'Integración con tus herramientas', desc: 'Conectamos la IA con tu CRM, ERP, correo, Slack o cualquier sistema que ya uses.' },
                { num: '02', title: 'Claude en tu empresa', desc: 'Desplegamos Claude adaptado a tus procesos, con contexto de tu negocio y permisos correctos.' },
                { num: '03', title: 'Seguimiento y mejora continua', desc: 'No desaparecemos tras el lanzamiento. Medimos, ajustamos y mejoramos con datos reales.' },
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
