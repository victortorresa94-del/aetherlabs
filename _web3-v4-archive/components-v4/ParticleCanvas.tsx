'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const animRef = useRef<number>(0);
    const prefersReducedMotion = useRef(false);

    const initParticles = useCallback((width: number, height: number) => {
        const count = Math.min(120, Math.floor((width * height) / 12000));
        particlesRef.current = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
        }));
    }, []);

    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion.current) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles(canvas.width, canvas.height);
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement!);

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        canvas.parentElement?.addEventListener('mousemove', handleMouse);

        const CONNECT_DISTANCE = 120;
        const REPEL_DISTANCE = 100;
        const REPEL_STRENGTH = 0.8;

        const draw = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Update + draw particles
            for (const p of particles) {
                // Repel from mouse
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < REPEL_DISTANCE && dist > 0) {
                    const force = (REPEL_DISTANCE - dist) / REPEL_DISTANCE;
                    p.vx += (dx / dist) * force * REPEL_STRENGTH * 0.05;
                    p.vy += (dy / dist) * force * REPEL_STRENGTH * 0.05;
                }

                // Apply velocity damping
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Clamp speed
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 1) { p.vx /= speed; p.vy /= speed; }

                p.x += p.vx;
                p.y += p.vy;

                // Wrap edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DISTANCE) {
                        const alpha = (1 - dist / CONNECT_DISTANCE) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            ro.disconnect();
            canvas.parentElement?.removeEventListener('mousemove', handleMouse);
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        />
    );
}
