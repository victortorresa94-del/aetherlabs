// Aether Labs — Footer
// Mirrors Web-Aether-3.0/src/components/v5/Footer.tsx

function ALFooter({ onContactClick }) {
  const labLinks = [
    { label: 'Claude Lab', href: '#' }, { label: 'Marketing Lab', href: '#' },
    { label: 'Software Lab', href: '#' }, { label: 'Learn Lab', href: '#' },
    { label: 'Agents Lab', href: '#' }, { label: 'Open Lab', href: '#' },
    { label: 'Gen AI Lab', href: '#' }, { label: 'AI Team Lab', href: '#' },
  ];

  const LinkStyle = { fontFamily: 'var(--al-font-body)', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.32)', textDecoration: 'none', marginBottom: 8, display: 'block', transition: 'color 200ms', cursor: 'pointer' };

  function HoverLink({ label }) {
    const [hov, setHov] = React.useState(false);
    return <div style={{ ...LinkStyle, color: hov ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.32)' }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{label}</div>;
  }

  function SocialIcon({ children }) {
    const [hov, setHov] = React.useState(false);
    return (
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        border: `1px solid ${hov ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.30)',
        transition: 'all 200ms', cursor: 'pointer',
      }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      >{children}</div>
    );
  }

  return (
    <footer style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 80, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* CTA Row */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 60, marginBottom: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
          <h2 style={{ fontFamily: "var(--al-font-advercase,'Playfair Display',serif)", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 400, color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0, maxWidth: 560 }}>
            ¿Listo para implementar IA en tu empresa?
          </h2>
          <button onClick={onContactClick} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', background: '#F5F5F0', color: '#080808',
            fontFamily: 'var(--al-font-body)', fontSize: 14, fontWeight: 400,
            textDecoration: 'none', borderRadius: 0, flexShrink: 0,
            transition: 'background 200ms', border: 'none', cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#E8E8E3'}
            onMouseLeave={e => e.currentTarget.style.background = '#F5F5F0'}
          >Auditoría gratuita →</button>
        </div>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          {/* Col 1 */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src="../../assets/aether-logo-white.png" alt="Aether Labs" height={23} style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ fontFamily: 'var(--al-font-body)', fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.28)', maxWidth: 220, margin: '0 0 20px 0' }}>
              Implementamos IA en empresas. Resultados reales, sin humo.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <SocialIcon><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></SocialIcon>
              <SocialIcon><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg></SocialIcon>
            </div>
          </div>

          {/* Col 2 — Labs */}
          <div>
            <h4 style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555', margin: '0 0 16px 0' }}>Labs</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 24px' }}>
              {labLinks.map(l => <HoverLink key={l.label} label={l.label} />)}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontFamily: 'var(--al-font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555', margin: '0 0 16px 0' }}>Empresa</h4>
            {['Casos', 'Nosotros', 'Contacto'].map(l => <HoverLink key={l} label={l} />)}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--al-font-body)', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.16)' }}>© 2026 Aether Labs · Barcelona</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacidad', 'Términos'].map(l => (
              <span key={l} style={{ fontFamily: 'var(--al-font-body)', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.16)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ALFooter });
