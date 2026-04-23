import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Implementamos — IA que funciona en tu empresa real | Aether Labs',
  description: 'No demos, no pilotos eternos. Integramos IA en tus procesos reales y nos aseguramos de que funcione en producción.',
};

export default function ImplementamosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '140px', paddingBottom: '120px' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '40px' }}>
              Servicio · 03
            </div>
            <h1 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(56px, 9vw, 112px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '40px' }}>
              Implementamos.
              <br />
              <span style={{ color: 'rgba(245,240,232,0.4)' }}>No prometemos.</span>
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 300, color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '48px' }}>
              Tienes la herramienta. Tienes el equipo. Pero la IA no está funcionando en tu operativa real. Ese es exactamente nuestro trabajo.
            </p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', backgroundColor: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
              Implementamos en tu empresa →
            </Link>
          </div>
        </section>

        {/* EL PROBLEMA REAL */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="impl-grid">
              <div>
                <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>El problema</div>
                <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '28px' }}>
                  El piloto fue bien. El día a día, no.
                </h2>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
                  Las demos de IA siempre funcionan. El problema es cuando tus empleados intentan usarla con tus datos reales, tus procesos reales y las presiones del día a día. Ahí es donde todo se cae.
                </p>
                <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '16px', fontWeight: 300, color: '#555', lineHeight: 1.7 }}>
                  Nosotros no hacemos demos. Entramos en tu empresa, configuramos todo con contexto real, y no nos vamos hasta que funciona de verdad.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>Por qué falla casi siempre</div>
                {[
                  { x: 'Implementaron la herramienta, no el proceso', desc: 'La IA es el vehículo. Si el proceso es caótico, la IA acelera el caos.' },
                  { x: 'Nadie formó al equipo en el contexto real', desc: 'Ver un tutorial de YouTube no es lo mismo que aprender a usarlo en tu caso específico.' },
                  { x: 'Sin seguimiento post-lanzamiento', desc: 'La IA evoluciona. Si nadie la mantiene, en 60 días está obsoleta.' },
                  { x: 'El que lo implementó no conoce tu negocio', desc: 'Un técnico puede configurar la herramienta. Entender tu operativa es otra cosa.' },
                ].map((item) => (
                  <div key={item.x} style={{ padding: '20px 0', borderBottom: '1px solid #e8e8e5' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#ccc', flexShrink: 0, fontFamily: 'var(--v5-font-mono)', fontSize: '12px', paddingTop: '2px' }}>✕</span>
                      <div>
                        <div style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 400, color: '#333', marginBottom: '4px' }}>{item.x}</div>
                        <div style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, color: '#999', lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO LO HACEMOS */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '24px' }}>
              Cómo lo hacemos
            </div>
            <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '64px', maxWidth: '560px' }}>
              Entramos. Configuramos. Formamos. Medimos. Mejoramos.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
              {[
                { week: 'Semana 1', title: 'Inmersión', desc: 'Estudiamos tus procesos, tus herramientas actuales y dónde la IA tiene más impacto. Sin supuestos.' },
                { week: 'Semana 2', title: 'Configuración', desc: 'Configuramos las herramientas con contexto real: tus datos, tus prompts, tu tono, tus reglas de negocio.' },
                { week: 'Semana 3', title: 'Lanzamiento', desc: 'Tu equipo empieza a usarlo con soporte directo nuestro. Resolvemos dudas en tiempo real.' },
                { week: 'Mes 2+', title: 'Mejora continua', desc: 'Medimos resultados, ajustamos lo que no funciona y evolucionamos según cómo cambia tu negocio.' },
              ].map((item) => (
                <div key={item.week} style={{ padding: '36px 32px', border: '1px solid rgba(245,240,232,0.08)' }}>
                  <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.2)', marginBottom: '16px' }}>{item.week}</div>
                  <h3 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: '20px', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.01em', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '13px', fontWeight: 300, color: 'rgba(245,240,232,0.4)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HERRAMIENTAS */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(60px, 8vw, 100px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '32px' }}>
              Herramientas con las que trabajamos
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Claude (Anthropic)', 'ChatGPT / GPT-4o', 'HubSpot', 'Notion', 'ClickUp', 'Make / Zapier', 'Google Workspace', 'Slack', 'Airtable', 'Apollo.io', 'N8n', 'Odoo'].map((tool) => (
                <span key={tool} style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', letterSpacing: '0.05em', color: '#555', border: '1px solid #ddd', padding: '6px 14px', borderRadius: '4px' }}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '16px' }}>
                ¿Tienes algo implementado
                <br /><span style={{ color: 'rgba(245,240,232,0.35)' }}>que no está funcionando?</span>
              </h2>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: 'rgba(245,240,232,0.4)', lineHeight: 1.7 }}>
                Cuéntanos dónde está el problema. Lo analizamos sin coste.
              </p>
            </div>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Hablamos →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) { .impl-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </div>
  );
}
