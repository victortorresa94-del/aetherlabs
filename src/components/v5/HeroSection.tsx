'use client';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section-mobile"
      style={{ backgroundColor: '#080808', paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(1.0)' }}
        src="/videos/video-hero-seedance.mp4"
      />
      {/* Gradient Overlay — subtle, less dark */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.22) 100%)'
        }}
      />

      <div className="v5-container relative z-10 w-full flex flex-col items-center justify-center text-center" style={{ padding: '0 24px' }}>
        <h1
          className="v5-reveal v5-serif"
          style={{
            fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            fontWeight: 400,
            fontStyle: 'normal',
            letterSpacing: '-0.02em',
            lineHeight: 1.12,
            color: '#F5F5F0',
            transitionDelay: '80ms',
            marginBottom: 0,
            maxWidth: '900px',
            width: '100%',
          }}
        >
          El puente entre personas<br />y tecnolog&iacute;a.
        </h1>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section-mobile {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
