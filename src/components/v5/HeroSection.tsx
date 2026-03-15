'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--v5-bg-base)' }}>
      {/* CSS for specific animations */}
      <style>{`
        @keyframes float-hero {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="v5-container relative z-10 w-full mt-10 lg:mt-0">
        <div className="v5-hero-grid items-center">
          {/* Left Side: Text */}
          <div className="flex flex-col items-start text-left">
            <span className="v5-label mb-6 text-white/40 border-white/20 bg-white/5 uppercase tracking-widest text-xs px-3 py-1 rounded-full border inline-block">WEB 4.0 ENGINEERING</span>
            <h1 className="mb-10 leading-[1.1] tracking-tight text-white font-medium text-4xl lg:text-6xl xl:text-[4.5rem]" style={{ fontFamily: 'var(--v5-font-display)' }}>
              El puente <br />
              entre personas<br />
              <span className="text-white/40 italic font-serif">y tecnología.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg mb-10 text-white/60 font-body">
              Construimos software que define categorías. Un estudio de diseño y desarrollo enfocado en la precisión técnica y estética editorial.
            </p>
            <div className="v5-hero-buttons">
              {/* Ensure buttons don't stretch on desktop by defining max-width or self-start */}
              <Link href="#sesion-claridad" className="v5-btn-primary flex justify-center self-start">
                Agendar Consultoría
              </Link>
              <Link href="#proyectos" className="v5-btn-ghost flex justify-center self-start">
                Ver Portfolio
              </Link>
            </div>

            {/* Trust logos */}
            <div className="mt-16 sm:mt-24 flex flex-col items-start gap-5">
              <span style={{
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--v5-text-muted)',
              }}>
                Empresas que confían en nosotros
              </span>
              <div className="flex gap-8 items-center flex-wrap grayscale opacity-30">
                {['KMeleon.Tech', 'Microsoft', 'Tech Barcelona', 'Closius'].map((name) => (
                  <span key={name} style={{
                    fontFamily: 'var(--v5-font-display)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--v5-text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Ethereal 3D Image */}
          <div className="v5-hide-on-mobile w-full">
            <div style={{ animation: 'float-hero 6s ease-in-out infinite' }}>
              <div className="relative w-full aspect-square max-w-[500px] ml-auto">
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/ethereal_3d_shape.png"
                    alt="Ethereal 3D Abstract Shape"
                    width={600}
                    height={600}
                    className="w-[120%] h-[120%] object-cover rounded-2xl grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                    style={{ filter: 'brightness(1.2) contrast(1.1) saturate(0)' }}
                    priority
                  />

                  {/* Floating little UI details */}
                  <div className="absolute -left-6 top-16 bg-white/[0.04] backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>
                    <span className="text-[10px] font-mono text-white/50 tracking-wider">SYSTEM NOMINAL</span>
                  </div>

                  <div className="absolute -right-6 bottom-16 bg-white/[0.04] backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl">
                    <div className="h-1 w-12 bg-white/40 mb-2 rounded-full"></div>
                    <div className="h-1 w-8 bg-white/20 mb-3 rounded-full"></div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">PERFORMANCE OPTIMIZED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
