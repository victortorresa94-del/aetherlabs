'use client';

import Link from 'next/link';

const includes = [
  '90 min de diagnóstico real',
  'Documento con hallazgos',
  'Mapa de herramientas recomendadas',
  'Hoja de ruta de 90 días',
  'Grabación de la sesión',
];

export default function ClaritySessionSection() {
  return (
    <section id="sesion-claridad" className="v5-section bg-black">
      <div className="v5-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="v5-label mb-5 block">
              El primer paso
            </span>
            <h2 className="v5-h2">
              Sesión de Claridad
            </h2>
            <p className="v5-reveal font-display font-medium text-xl md:text-2xl text-white/60 leading-tight mt-4 mb-6">
              Una sola sesión para saber exactamente dónde estás y dónde necesitas llegar.
            </p>
            <p className="v5-reveal font-body text-base text-white/40 leading-relaxed">
              90 minutos contigo. Sin presentación de ventas. Sin decks de PowerPoint.
              Solo una conversación donde mapeamos tus procesos, identificamos dónde la IA
              puede ayudarte de verdad, y te entregamos un documento con todo lo que encontramos
              y lo que recomendamos.
            </p>
          </div>

          {/* Right: Product card */}
          <div className="v5-reveal">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden backdrop-blur-sm">
              {/* Glow top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />

              {/* Badge */}
              <span className="inline-block px-3 py-1 bg-[#00E5FF]/15 border border-[#00E5FF]/30 rounded-full font-mono text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase mb-5">
                Sesiones de lanzamiento
              </span>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-display font-extrabold text-6xl text-white tracking-tighter leading-none">
                  150€
                </span>
                <span className="font-body text-xl text-white/30 line-through">
                  300€
                </span>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 mb-7">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00E5FF]/15 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="font-body text-xs text-white/40 mb-6 leading-relaxed">
                Si decides contratar algo después: el precio de la sesión se descuenta del proyecto.
              </p>

              {/* CTA */}
              <Link href="/systems-lab/sesion-de-claridad" className="v5-btn-primary w-full justify-center !text-base py-4">
                Reservar mi sesión →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .v5-clarity-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
