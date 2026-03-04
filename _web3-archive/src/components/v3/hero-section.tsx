'use client'

import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import WordRotate from "@/components/ui/word-rotate";
import { motion, useAnimationFrame } from "framer-motion";

// ─── Aurora Canvas ────────────────────────────────────────────────────────────
function AuroraCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const t = useRef(0);

    useAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        t.current += 0.003;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const draw = (
            cx: number, cy: number,
            rx: number, ry: number,
            color1: string, color2: string,
            phase: number
        ) => {
            const x = cx + Math.sin(t.current + phase) * rx * 0.35;
            const y = cy + Math.cos(t.current * 0.7 + phase) * ry * 0.25;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
            grad.addColorStop(0, color1);
            grad.addColorStop(1, color2);
            ctx.globalCompositeOperation = "screen";
            ctx.beginPath();
            ctx.ellipse(x, y, rx, ry, t.current * 0.1, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
        };

        const w = canvas.width, h = canvas.height;

        draw(w * 0.25, h * 0.4, w * 0.42, h * 0.55, "rgba(130,60,255,0.18)", "rgba(0,0,0,0)", 0);
        draw(w * 0.72, h * 0.35, w * 0.38, h * 0.5, "rgba(0,180,255,0.13)", "rgba(0,0,0,0)", 2.1);
        draw(w * 0.5, h * 0.6, w * 0.5, h * 0.45, "rgba(180,40,220,0.09)", "rgba(0,0,0,0)", 4.2);
        draw(w * 0.15, h * 0.65, w * 0.3, h * 0.35, "rgba(50,120,255,0.1)", "rgba(0,0,0,0)", 1.5);
        draw(w * 0.85, h * 0.55, w * 0.28, h * 0.38, "rgba(20,220,180,0.07)", "rgba(0,0,0,0)", 3.3);
    });

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        />
    );
}

// ─── Floating Particles ───────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.4,
    dur: 8 + Math.random() * 14,
    delay: Math.random() * 8,
    dx: (Math.random() - 0.5) * 6,
    dy: -(4 + Math.random() * 8),
    opacity: 0.15 + Math.random() * 0.35,
}));

function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {PARTICLES.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                    }}
                    animate={{
                        x: [0, p.dx, -p.dx * 0.5, 0],
                        y: [0, p.dy, p.dy * 1.6, p.dy * 0.3, 0],
                        opacity: [p.opacity, p.opacity * 1.5, 0, 0, p.opacity],
                    }}
                    transition={{
                        duration: p.dur,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// ─── Grid lines ───────────────────────────────────────────────────────────────
function Grid() {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
                backgroundSize: "80px 80px",
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)",
            }}
        />
    );
}

// ─── Central Glow ─────────────────────────────────────────────────────────────
function CentralGlow() {
    return (
        <>
            {/* Deep purple core */}
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: "70vw",
                    height: "55vh",
                    top: "12%",
                    left: "50%",
                    translateX: "-50%",
                    background: "radial-gradient(ellipse at center, rgba(120,40,255,0.12) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Blue accent */}
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: "50vw",
                    height: "35vh",
                    top: "5%",
                    left: "60%",
                    background: "radial-gradient(ellipse at center, rgba(0,160,255,0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* Subtle bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, #000000 0%, transparent 100%)",
                }}
            />
        </>
    );
}

// ─── Noise texture overlay ────────────────────────────────────────────────────
function Noise() {
    return (
        <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "200px 200px",
            }}
        />
    );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[115dvh] flex flex-col items-center justify-center bg-black py-24 md:py-40 overflow-hidden">

            {/* ── Background layers ── */}
            <Grid />
            <AuroraCanvas />
            <CentralGlow />
            <Particles />
            <Noise />

            {/* ── Subtle radial vignette ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 120% 100% at 50% 0%, transparent 40%, rgba(0,0,0,0.6) 100%)",
                }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-12 px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">AI SALES FRAMEWORK</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-display font-normal text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white"
                    >
                        Convertimos <br className="hidden md:block" />
                        conversaciones en{" "}
                        <WordRotate
                            words={["sistemas escalables", "negocios felices", "clientes fieles", "ventas predecibles", "citas cualificadas", "relaciones reales"]}
                            className="font-instrument italic text-white inline-flex pl-3 font-normal text-[1.05em]"
                            duration={2500}
                        />
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
                        className="font-light text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Automatiza todo tu proceso comercial con IA, desde la captación hasta la atención postventa.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.34, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                    >
                        <Link
                            href="/contacto"
                            className="group relative px-8 py-3.5 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span>Solicitar diagnóstico</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
