'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COUNT = 2000;
    const CONNECT_DIST = 80;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 600,
      z: Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', handleMouse);

    let rotY = 0;
    let rotX = 0;

    const draw = () => {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const fov = 600;

      ctx.clearRect(0, 0, W, H);

      // Lerp mouse
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      rotY += 0.0003 + m.x * 0.001;
      rotX += 0.0001 + m.y * 0.0005;

      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

      const projected: { sx: number; sy: number; scale: number }[] = [];

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x > 600) p.x = -600;
        if (p.x < -600) p.x = 600;
        if (p.y > 300) p.y = -300;
        if (p.y < -300) p.y = 300;

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        // Rotate X
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const scale = fov / (fov + z2 + 300);
        const sx = cx + x1 * scale;
        const sy = cy + y1 * scale;
        projected.push({ sx, sy, scale });
      }

      // Draw connections first
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of projected) {
        const alpha = Math.min(0.6, p.scale * 0.8);
        ctx.fillStyle = `rgba(99,102,241,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.scale * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '640px',
      backgroundColor: 'var(--v5-bg-base)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Radial gradient for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10,15,30,0.85) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '800px',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Label */}
        <span className="v5-label v5-reveal">
          El puente entre personas y tecnología
        </span>

        {/* H1 */}
        <h1 className="v5-h1 v5-reveal" style={{ textAlign: 'center' }}>
          Haz que tu empresa<br />
          <span className="v5-gradient-text">se mueva con IA</span>
        </h1>

        {/* Subtitle */}
        <p className="v5-body-large v5-reveal" style={{ maxWidth: '580px', textAlign: 'center' }}>
          Implementamos IA, producimos contenido y construimos presencia digital
          para empresas que quieren crecer antes que el mercado.
        </p>

        {/* CTAs */}
        <div className="v5-reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
          <Link href="#sesion-claridad" className="v5-btn-primary" style={{ fontSize: '17px', padding: '16px 32px' }}>
            Reservar sesión gratuita →
          </Link>
          <Link href="#como-funciona" className="v5-btn-ghost" style={{ fontSize: '17px', padding: '16px 32px' }}>
            Ver cómo funciona
          </Link>
        </div>

        {/* Trust logos */}
        <div className="v5-reveal" style={{
          marginTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}>
          <span style={{
            fontFamily: 'var(--v5-font-mono)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--v5-text-muted)',
          }}>
            Empresas que confían en nosotros
          </span>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', filter: 'grayscale(1)', opacity: 0.35 }}>
            {['KMeleon.Tech', 'Microsoft', 'Tech Barcelona', 'Closius'].map((name) => (
              <span key={name} style={{
                fontFamily: 'var(--v5-font-display)',
                fontWeight: 700,
                fontSize: '14px',
                color: 'var(--v5-text-primary)',
                letterSpacing: '-0.01em',
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.4,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--v5-accent)" strokeWidth={1.5}>
          <rect x="5" y="2" width="14" height="20" rx="7" />
          <path d="M12 6v4" strokeLinecap="round" />
        </svg>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--v5-accent), transparent)',
          animation: 'v5ScrollDrop 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
