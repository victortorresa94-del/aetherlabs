import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';
import ScrollAnimations from '@/components/v5/ScrollAnimations';
import ExperimentosHero from '@/components/experimentos/ExperimentosHero';
import ExperimentosNav from '@/components/experimentos/ExperimentosNav';
import ExperimentCard from '@/components/experimentos/ExperimentCard';
import ExperimentScrollFX from '@/components/experimentos/ExperimentScrollFX';
import { experiments } from '@/data/experiments-page';

export default function ExperimentosPage() {
  return (
    <div className="v5-page" style={{ backgroundColor: '#080808' }}>
      <ScrollAnimations />
      <Navbar />
      <ExperimentosNav />

      {/* Page-level scroll FX: progress bar, counter, dots, marquee, hero effects */}
      <ExperimentScrollFX />

      <main>
        {/* Hero */}
        <div id="exp-hero">
          <ExperimentosHero />
        </div>

        {/* Experiment sections */}
        <div className="exp-sections-wrapper">
          {experiments.map((experiment, index) => (
            <ExperimentCard key={experiment.id} experiment={experiment} index={index} />
          ))}
        </div>

        {/* Final CTA */}
        <section
          style={{
            backgroundColor: '#080808',
            paddingTop: '120px',
            paddingBottom: '140px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            textAlign: 'center',
          }}
        >
          <div className="v5-container">
            <h2
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 400,
                color: '#F5F5F0',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              ¿Ves algo parecido a lo que necesitas?
            </h2>

            <p
              style={{
                fontFamily: 'var(--v5-font-body)',
                fontSize: '17px',
                fontWeight: 300,
                color: '#555',
                maxWidth: '480px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}
            >
              O tienes algo completamente diferente en mente. Da igual. Hablamos.
            </p>

            <a
              href="/contacto"
              style={{
                display: 'inline-block',
                backgroundColor: '#F5F5F0',
                color: '#080808',
                fontFamily: 'var(--v5-font-mono)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                padding: '14px 28px',
                textDecoration: 'none',
              }}
            >
              Cuéntanos tu experimento →
            </a>

            <div style={{ marginTop: '20px' }}>
              <span
                style={{
                  fontFamily: 'var(--v5-font-mono)',
                  fontSize: '11px',
                  color: '#333',
                  letterSpacing: '0.06em',
                }}
              >
                Primera conversación: sin coste. Sin compromiso.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
