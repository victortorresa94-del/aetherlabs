'use client';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#080808', paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.90)' }}
        src="/videos/video-hero-seedance.mp4"
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.55) 100%)'
        }}
      />

      <div className="v5-container relative z-10 w-full flex flex-col items-center justify-center text-center" style={{ padding: '0 24px' }}>
        {/* H1 */}
        <h1
          className="v5-reveal v5-serif"
          style={{
            fontFamily: "var(--v5-font-advercase, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(36px, 9vw, 96px)',
            fontWeight: 400,
            fontStyle: 'normal',
            letterSpacing: '-0.02em',
            lineHeight: 1.08,
            color: '#F5F5F0',
            transitionDelay: '80ms',
            marginBottom: '24px',
            maxWidth: '1100px',
            width: '100%',
          }}
        >
          El puente entre personas<br />
          y tecnología.
        </h1>

        {/* Subtitle */}
        <p
          className="v5-reveal"
          style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: 'clamp(15px, 4vw, 20px)',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(245,245,240,0.65)',
            maxWidth: '500px',
            transitionDelay: '160ms',
          }}
        >
          La tecnología más avanzada, para cualquier persona.
        </p>
      </div>
    </section>
  );
}
