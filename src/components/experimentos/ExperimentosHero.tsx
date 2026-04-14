'use client';

import { useEffect, useState } from 'react';
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
  const [showScroll, setShowScroll] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    // Hide scroll indicator after first scroll
    const onScroll = () => setShowScroll(false);
    window.addEventListener('scroll', onScroll, { once: true });

    // Animate counter 0 → 10
    const controls = animate(count, 10, { duration: 1.8, delay: 0.8, ease: 'easeOut' });

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

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* CSS Starfield Background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <div className="starfield" />
      </div>

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
            color: 'rgba(255,255,255,0.4)',
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
              fontSize: '14px',
              fontWeight: 700,
              color: '#00E5FF',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            <motion.span>{rounded}</motion.span> experimentos activos
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
            color: 'rgba(255,255,255,0.4)',
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
              color: 'rgba(255,255,255,0.2)',
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

      <style jsx>{`
        .starfield {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 
            24vw 15vh 1px 0px #fff,
            88vw 42vh 0px 1px #fff,
            15vw 68vh 1px 1px #fff,
            55vw 22vh 0px 0px #fff,
            33vw 85vh 1px 0px #fff,
            72vw 12vh 0px 1px #fff,
            91vw 77vh 1px 1px #fff,
            44vw 48vh 0px 0px #fff,
            6vw 33vh 1px 0px #fff,
            82vw 92vh 0px 1px #fff,
            27vw 55vh 1px 1px #fff,
            64vw 2vh 0px 0px #fff,
            12vw 19vh 1px 0px #fff,
            95vw 61vh 0px 1px #fff,
            48vw 89vh 1px 1px #fff,
            3vw 72vh 0px 0px #fff,
            77vw 25vh 1px 0px #fff,
            59vw 53vh 0px 1px #fff,
            18vw 41vh 1px 1px #fff,
            85vw 8vh 0px 0px #fff,
            39vw 65vh 1px 0px #fff,
            71vw 94vh 0px 1px #fff,
            22vw 4vh 1px 1px #fff,
            98vw 38vh 0px 0px #fff,
            52vw 76vh 1px 0px #fff,
            9vw 12vh 0px 1px #fff,
            67vw 82vh 1px 1px #fff,
            41vw 28vh 0px 0px #fff,
            8vw 96vh 1px 0px #fff,
            93vw 15vh 0px 1px #fff,
            36vw 59vh 1px 1px #fff,
            81vw 48vh 0px 0px #fff,
            57vw 11vh 1px 0px #fff,
            14vw 44vh 0px 1px #fff,
            76vw 67vh 1px 1px #fff,
            45vw 2vh 0px 0px #fff,
            2vw 52vh 1px 0px #fff,
            89vw 88vh 0px 1px #fff,
            25vw 25vh 1px 1px #fff,
            66vw 74vh 0px 0px #fff,
            19vw 9vh 1px 0px #fff,
            97vw 54vh 0px 1px #fff,
            51vw 32vh 1px 1px #fff,
            31vw 61vh 0px 0px #fff,
            84vw 18vh 1px 0px #fff,
            43vw 93vh 0px 1px #fff,
            11vw 79vh 1px 1px #fff,
            74vw 41vh 0px 0px #fff,
            5vw 21vh 1px 0px #fff,
            92vw 69vh 0px 1px #fff,
            38vw 84vh 1px 1px #fff,
            79vw 33vh 0px 0px #fff,
            62vw 58vh 1px 0px #fff,
            13vw 47vh 0px 1px #fff,
            87vw 2vh 1px 1px #fff,
            49vw 14vh 0px 0px #fff,
            28vw 71vh 1px 0px #fff,
            96vw 86vh 0px 1px #fff,
            53vw 44vh 1px 1px #fff,
            7vw 9vh 0px 0px #fff,
            80vw 65vh 1px 0px #fff,
            34vw 12vh 0px 1px #fff,
            73vw 87vh 1px 1px #fff,
            46vw 39vh 0px 0px #fff,
            21vw 52vh 1px 0px #fff,
            94vw 25vh 0px 1px #fff,
            55vw 61vh 1px 1px #fff,
            10vw 81vh 0px 0px #fff,
            86vw 42vh 1px 0px #fff,
            40vw 18vh 0px 1px #fff,
            69vw 73vh 1px 1px #fff,
            32vw 29vh 0px 0px #fff,
            16vw 95vh 1px 0px #fff,
            90vw 51vh 0px 1px #fff,
            58vw 84vh 1px 1px #fff,
            26vw 11vh 0px 0px #fff,
            83vw 37vh 1px 0px #fff,
            47vw 64vh 0px 1px #fff,
            15vw 41vh 1px 1px #fff,
            75vw 8vh 0px 0px #fff,
            61vw 92vh 1px 0px #fff,
            23vw 56vh 0px 1px #fff,
            99vw 19vh 1px 1px #fff,
            50vw 88vh 0px 0px #fff,
            30vw 3vh 1px 0px #fff,
            87vw 72vh 0px 1px #fff,
            44vw 46vh 1px 1px #fff,
            12vw 61vh 0px 0px #fff,
            78vw 98vh 1px 0px #fff,
            35vw 22vh 0px 1px #fff,
            70vw 54vh 1px 1px #fff,
            56vw 4vh 0px 0px #fff;
        }
      `}</style>
    </section>
  );
}
