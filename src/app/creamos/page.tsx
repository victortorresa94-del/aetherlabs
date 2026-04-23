import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import Link from 'next/link';

export const metadata = {
  title: 'Creamos — Software, contenido y soluciones con IA | Aether Labs',
  description: 'Construimos lo que necesitas con IA: software a medida, agentes, contenido generativo. Sin meses de espera ni presupuestos de agencia.',
};

export default function CreamosPage() {
  return (
    <div className="v5-page">
      <ScrollAnimations />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '140px', paddingBottom: '120px' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '40px' }}>
              Servicio · 02
            </div>
            <h1 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(56px, 9vw, 112px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '40px' }}>
              Lo que necesitas,
              <br />
              <span style={{ color: 'rgba(245,240,232,0.4)' }}>construido ya.</span>
            </h1>
            <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 300, color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '48px' }}>
              Software a medida, agentes autónomos, contenido a escala. Cosas que antes requerían meses y un presupuesto de agencia. Ahora, no.
            </p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', backgroundColor: '#F5F0E8', color: '#080808', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
              Cuéntanos qué necesitas →
            </Link>
          </div>
        </section>

        {/* QUÉ CREAMOS */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '24px' }}>
              Qué construimos
            </div>
            <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '64px', maxWidth: '600px' }}>
              Si lo puedes imaginar y tiene sentido, lo construimos.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px' }}>
              {[
                {
                  num: '01',
                  title: 'Software a medida',
                  desc: 'Aplicaciones internas, dashboards, herramientas de gestión. Construidas con IA como motor de desarrollo — lo que antes tardaba 3 meses, ahora tarda 3 semanas.',
                  examples: ['Panel de gestión de clientes', 'Herramienta de reporting automático', 'Sistema de onboarding interno'],
                },
                {
                  num: '02',
                  title: 'Agentes autónomos',
                  desc: 'Flujos que trabajan solos. Captación de leads, cualificación, seguimiento, reporting. Tu equipo lo supervisa, no lo ejecuta.',
                  examples: ['Agente de captación B2B', 'Bot de atención al cliente 24/7', 'Agente de análisis de competencia'],
                },
                {
                  num: '03',
                  title: 'Contenido generativo',
                  desc: 'Imágenes, vídeos, creatividades y textos producidos con IA a escala. Para redes sociales, campañas, catálogos o lo que necesites.',
                  examples: ['50 creatividades para Meta Ads', 'Vídeos de producto con IA', 'Copy para email sequences'],
                },
                {
                  num: '04',
                  title: 'Integraciones y automatismos',
                  desc: 'Conectamos tus herramientas (CRM, email, Slack, Drive...) con IA para que la información fluya sola y tu equipo no pierda tiempo replicando datos.',
                  examples: ['HubSpot + Claude + Notion', 'Gmail → Resumen diario IA', 'Slack + tareas automáticas'],
                },
              ].map((item) => (
                <div key={item.num} style={{ background: '#fff', border: '1px solid #e8e8e5', padding: '36px 32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <h3 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: '22px', fontWeight: 400, color: '#111', letterSpacing: '-0.02em' }}>{item.title}</h3>
                    <span style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: '#bbb' }}>{item.num}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: '#666', lineHeight: 1.65, marginBottom: '24px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.examples.map((ex) => (
                      <div key={ex} style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '11px', color: '#aaa', letterSpacing: '0.05em' }}>— {ex}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="v5-reveal" style={{ background: '#080808', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)', marginBottom: '24px' }}>
              Cómo trabajamos
            </div>
            <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '64px', maxWidth: '540px' }}>
              Sin fases interminables. Sin reuniones de avance cada semana.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="creamos-steps">
              {[
                { step: '01', title: 'Defines qué necesitas', desc: 'Una llamada de 30 minutos para entender el problema, el contexto y lo que ya tienes.' },
                { step: '02', title: 'Entregamos un prototipo', desc: 'En menos de dos semanas tienes algo real para probar. No un mockup — algo que funciona.' },
                { step: '03', title: 'Iteramos hasta que funciona', desc: 'Ajustamos con feedback real hasta que encaje en tu operativa. Sin costes extra por cambios.' },
              ].map((item) => (
                <div key={item.step} style={{ padding: '40px 36px', border: '1px solid rgba(245,240,232,0.08)' }}>
                  <div style={{ fontFamily: 'var(--v5-font-mono)', fontSize: '10px', color: 'rgba(245,240,232,0.2)', marginBottom: '20px' }}>{item.step}</div>
                  <h3 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: '20px', fontWeight: 400, color: '#F5F0E8', letterSpacing: '-0.01em', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '14px', fontWeight: 300, color: 'rgba(245,240,232,0.4)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v5-reveal" style={{ background: '#F8F8F5', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#111', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '16px' }}>
                ¿Tienes algo en mente?
              </h2>
              <p style={{ fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 300, color: '#888', lineHeight: 1.7, maxWidth: '400px' }}>
                Cuéntanoslo aunque no esté del todo definido. A veces la mejor idea surge en la primera conversación.
              </p>
            </div>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: '#111', color: '#F5F0E8', fontFamily: 'var(--v5-font-body)', fontSize: '15px', fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Hablamos →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) { .creamos-steps { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
