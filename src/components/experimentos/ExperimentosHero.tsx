'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.15, staggerChildren: 0.035 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.7 },
  },
};

// Capital E + rest lowercase
const WORD = 'Experimentos';
const LETTERS = WORD.split('');

export default function ExperimentosHero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScroll(false);
    window.addEventListener('scroll', onScroll, { once: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  return (
    <section
      id="exp-hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.38,
          filter: 'grayscale(0.4) contrast(1.05)',
          zIndex: 0,
        }}
      >
        <source src="/videos/video-hero-web-1.mp4" type="video/mp4" />
      </video>

      {/* Dark vignette overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(ellipse at center, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.75) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* Main title — letter stagger, capital E, no bold */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflow: 'hidden',
            marginBottom: '36px',
          }}
          aria-label={WORD}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{
                fontFamily: 'var(--v5-font-advercase)',
                fontSize: 'clamp(52px, 10vw, 140px)',
                fontWeight: 400,
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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--v5-font-body)',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          Aquí te dejamos ejemplos de lo que hacemos en nuestros laboratorios,
          tanto para nuestros clientes, como para inventar cosas nuevas.
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
            zIndex: 3,
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
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <rect x="6" y="5" width="2" height="4" rx="1" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>
      )}
    </section>
  );
}
