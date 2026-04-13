'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const LETTERS = 'EXPERIMENTOS'.split('');

const letterVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.7 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.2, staggerChildren: 0.04 },
  },
};

export default function ExperimentosHero() {
  const [particlesReady, setParticlesReady] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ParticlesComponent = useRef<React.ComponentType<any> | null>(null);

  useEffect(() => {
    // Hide scroll indicator after first scroll
    const onScroll = () => setShowScroll(false);
    window.addEventListener('scroll', onScroll, { once: true });

    // Animate counter 0 → 10
    const controls = animate(count, 10, { duration: 1.8, delay: 0.8, ease: 'easeOut' });

    // Load tsParticles lazily
    (async () => {
      const [{ default: Particles, initParticlesEngine }, { loadSlim }] = await Promise.all([
        import('@tsparticles/react'),
        import('@tsparticles/slim'),
      ]);
      await initParticlesEngine(async (engine: any) => {
        await loadSlim(engine);
      });
      ParticlesComponent.current = Particles;
      setParticlesReady(true);
    })();

    return () => {
      window.removeEventListener('scroll', onScroll);
      controls.stop();
    };
  }, []);

  // GSAP scroll indicator bounce
  useEffect(() => {
    if (!showScroll) return;
    let cleanup: (() => void) | undefined;
    (async () => {
      const { gsap } = await import('gsap');
      const tween = gsap.to('.exp-hero-scroll', {
        y: 8,
        duration: 0.9,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
      cleanup = () => tween.kill();
    })();
    return () => cleanup?.();
  }, [showScroll]);

  const Particles = ParticlesComponent.current;

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* White ambient particles */}
      {particlesReady && Particles && (
        <>
          <Particles
            id="exp-hero-particles-ambient"
            options={{
              fullScreen: false,
              background: { color: { value: 'transparent' } },
              particles: {
                number: { value: 2000, density: { enable: true } },
                color: { value: '#ffffff' },
                opacity: { value: { min: 0.05, max: 0.25 }, animation: { enable: true, speed: 0.5 } },
                size: { value: { min: 0.5, max: 1.5 } },
                move: { enable: true, speed: 0.3, random: true, outModes: 'out' },
              },
              detectRetina: true,
            }}
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          />
          {/* Cyan hot points */}
          <Particles
            id="exp-hero-particles-hot"
            options={{
              fullScreen: false,
              background: { color: { value: 'transparent' } },
              particles: {
                number: { value: 5 },
                color: { value: '#00E5FF' },
                opacity: { value: { min: 0.4, max: 0.9 } },
                size: { value: { min: 2, max: 4 } },
                move: { enable: true, speed: 1.2, random: true, outModes: 'bounce' },
                glow: { enable: true, color: '#00E5FF', radius: 6 },
              },
              detectRetina: true,
            }}
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          />
        </>
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#444',
            marginBottom: '32px',
          }}
        >
          Aether Labs
        </div>

        {/* Main title — letter stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflow: 'hidden',
            marginBottom: '40px',
          }}
          aria-label="EXPERIMENTOS"
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(52px, 10vw, 140px)',
                fontWeight: 700,
                color: '#F5F5F0',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '16px' }}
        >
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 600,
              color: '#00E5FF',
              letterSpacing: '-0.02em',
            }}
          >
            <motion.span>{rounded}</motion.span>
          </span>
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '14px',
              fontWeight: 400,
              color: '#444',
              marginLeft: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            experimentos activos
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            fontWeight: 300,
            color: '#555',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Problemas reales. Soluciones de IA a medida. Sin relleno.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <div
          className="exp-hero-scroll"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--v5-font-mono)',
              fontSize: '9px',
              color: '#333',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="#333" strokeWidth="1.5" />
            <rect x="6" y="5" width="2" height="4" rx="1" fill="#444" />
          </svg>
        </div>
      )}
    </section>
  );
}
