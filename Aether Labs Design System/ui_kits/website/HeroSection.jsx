// Aether Labs — HeroSection
// Mirrors Web-Aether-3.0/src/components/v5/HeroSection.tsx

function ALHeroSection({ onLabsClick }) {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      backgroundColor: '#080808', paddingTop: 80, paddingBottom: 80,
    }}>
      {/* Gradient orb background (video placeholder) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 70%, rgba(0,255,65,0.03) 0%, transparent 60%)',
      }} />
      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.4) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 32px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Barcelona · 2026</span>
          <span style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Implementación de IA</span>
        </div>

        <h1 style={{
          fontFamily: "var(--al-font-advercase, 'Playfair Display', Georgia, serif)",
          fontSize: 'clamp(36px, 5.5vw, 72px)', fontWeight: 400, fontStyle: 'normal',
          letterSpacing: '-0.02em', lineHeight: 1.12, color: '#F5F5F0',
          maxWidth: 900, marginBottom: 40,
        }}>
          El puente entre personas<br />y tecnología.
        </h1>

        <button onClick={onLabsClick} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 32px', background: '#F5F5F0', color: '#080808',
          fontFamily: 'var(--al-font-body)', fontSize: 14, fontWeight: 400,
          border: 'none', borderRadius: 0, cursor: 'pointer', transition: 'background 200ms',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#E8E8E3'}
          onMouseLeave={e => e.currentTarget.style.background = '#F5F5F0'}
        >
          Ver laboratorios →
        </button>
      </div>

      {/* Floating pills */}
      <div style={{ position: 'absolute', bottom: 48, left: 64, zIndex: 3 }}>
        <div style={{
          background: 'rgba(12,12,12,0.70)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10,
          padding: '8px 14px', fontFamily: 'var(--al-font-mono)', fontSize: 10,
          fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.58)',
        }}>Claude · Partner oficial</div>
      </div>
      <div style={{ position: 'absolute', bottom: 48, right: 64, zIndex: 3 }}>
        <div style={{
          background: 'rgba(12,12,12,0.70)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10,
          padding: '8px 14px', fontFamily: 'var(--al-font-mono)', fontSize: 10,
          fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.58)',
        }}>8 Labs activos</div>
      </div>
    </section>
  );
}

Object.assign(window, { ALHeroSection });
