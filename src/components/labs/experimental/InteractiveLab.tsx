"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, ChevronRight, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

// --- Types ---
interface Experiment {
    id: string;
    title: string;
    description: string;
    link: string;
    tag: string;
    // Position in percentage (0-100) relative to the total scrollable width
    position: { x: number; y: number };
}

// --- Data ---
const experiments: Experiment[] = [
    {
        id: 'influencer',
        title: 'Generador de Influencers IA',
        description: 'Crea modelos totalmente realistas según estilo, sector o estética de tu marca.',
        link: 'https://ugc-avatar-studio-159705655877.us-west1.run.app',
        tag: 'AVATAR',
        position: { x: 15, y: 40 }
    },
    {
        id: 'editor',
        title: 'Nano Banana Studio',
        description: 'Editor de fotos con IA. Retoca, mejora y transforma tus imágenes.',
        link: 'https://nano-banana-studio-159705655877.us-west1.run.app',
        tag: 'EDITOR',
        position: { x: 35, y: 55 }
    },
    {
        id: 'storytelling',
        title: 'Chleopatra',
        description: 'Narración de historias históricas con vídeos generados por IA.',
        link: 'https://chleopatra-history-reimagined-159705655877.us-west1.run.app',
        tag: 'STORY',
        position: { x: 55, y: 45 }
    },
    {
        id: 'product',
        title: 'Generador de Fotos',
        description: 'Transforma fotos de producto en contenido profesional.',
        link: 'https://generador-de-fotos-de-productos-159705655877.us-west1.run.app',
        tag: 'IMAGE',
        position: { x: 75, y: 60 }
    },
    {
        id: 'vision',
        title: 'Skinflow',
        description: 'Analizador facial y recomendador de skincare.',
        link: '#',
        tag: 'VISION',
        position: { x: 85, y: 50 }
    },
    {
        id: 'copywriter',
        title: 'AI Copywriter',
        description: 'Asistente de redacción inteligente.',
        link: '#',
        tag: 'TEXT',
        position: { x: 25, y: 70 }
    },
    {
        id: 'audio',
        title: 'Audio Lab',
        description: 'Síntesis de voz y efectos.',
        link: '#',
        tag: 'AUDIO',
        position: { x: 45, y: 35 }
    },
    {
        id: 'knowledge',
        title: 'Knowledge Base',
        description: 'Base de conocimiento semántica.',
        link: '#',
        tag: 'RAG',
        position: { x: 65, y: 30 }
    },
    {
        id: 'mystery',
        title: 'Mystery Box',
        description: 'Experimentos beta.',
        link: '#',
        tag: 'BETA',
        position: { x: 5, y: 80 }
    },
    {
        id: 'system',
        title: 'Core System',
        description: 'Control central del laboratorio.',
        link: '#',
        tag: 'SYS',
        position: { x: 50, y: 20 }
    }
];

// --- Components ---

const Hotspot = ({
    experiment,
    isSelected,
    onSelect,
    onHover,
    isHovered
}: {
    experiment: Experiment;
    isSelected: boolean;
    onSelect: () => void;
    onHover: (id: string | null) => void;
    isHovered: boolean;
}) => (
    <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
        style={{ left: `${experiment.position.x}%`, top: `${experiment.position.y}%` }}
        onClick={onSelect}
        onMouseEnter={() => onHover(experiment.id)}
        onMouseLeave={() => onHover(null)}
    >
        {/* Drake-style Pulsing Dot */}
        <div className="relative">
            {/* Outer Glow Ring */}
            <div className={`absolute -inset-2 rounded-full border border-white/30 transition-all duration-500 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />

            {/* Core Dot */}
            <div className={`w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] transition-transform duration-300 ${isHovered ? 'scale-125' : 'animate-pulse'}`} />

            {/* Ping Animation */}
            <div className={`absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-50 ${isHovered ? 'hidden' : 'block'}`} />
        </div>

        {/* Label - Appears on Hover */}
        <AnimatePresence>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 25 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none"
                >
                    <div className="h-[1px] w-12 bg-white/60" />
                    <div className="bg-black/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-sm text-white text-xs font-bold tracking-[0.2em] whitespace-nowrap uppercase shadow-2xl">
                        {experiment.title}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function InteractiveLab() {
    const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
    const [hoveredExperiment, setHoveredExperiment] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Drag State
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const currentX = useRef(0);

    // Configuration
    // We use a wider container but not infinite to avoid pixelation issues with a single image
    // 150vw allows for some movement without extreme stretching
    const CONTAINER_WIDTH_VW = 150;

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startX.current = e.clientX;
        currentX.current = dragX;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const delta = e.clientX - startX.current;
        // Limit the drag range
        const maxDrag = (window.innerWidth * (CONTAINER_WIDTH_VW / 100 - 1)) / 2;
        const newX = Math.max(Math.min(currentX.current + delta, maxDrag), -maxDrag);
        setDragX(newX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, []);

    return (
        <div
            className="relative w-full h-screen bg-[#050505] overflow-hidden select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            {/* --- Draggable Container --- */}
            <motion.div
                className="absolute inset-0 h-full flex items-center justify-center"
                style={{
                    width: `${CONTAINER_WIDTH_VW}vw`,
                    x: dragX,
                    left: `${50 - (CONTAINER_WIDTH_VW / 2)}%` // Center initial position
                }}
                {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

                {/* Hotspots Layer */ }
    <div className="absolute inset-0 w-full h-full">
        {experiments.map((exp) => (
            <Hotspot
                key={exp.id}
                experiment={exp}
                isSelected={selectedExperiment?.id === exp.id}
                onSelect={() => setSelectedExperiment(exp)}
                onHover={setHoveredExperiment}
                isHovered={hoveredExperiment === exp.id}
            />
        ))}
    </div>
            </motion.div >

        {/* --- UI Overlay (Drake Style) --- */ }
        < div className = "absolute inset-0 pointer-events-none z-30" >
            {/* Top Bar */ }
            < div className = "absolute top-0 left-0 w-full p-8 flex justify-between items-start" >
                    <div className="flex flex-col gap-1">
                        <div className="text-white font-bold tracking-widest text-sm">AETHER LABS</div>
                        <div className="text-[#82ff1f] text-[10px] font-mono tracking-[0.2em]">EXPERIMENTAL_UNIT_01</div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 border border-white/20 rounded-full bg-black/20 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#82ff1f] rounded-full animate-pulse" />
                                <span className="text-[10px] text-white font-mono tracking-wider">LIVE FEED</span>
                            </div>
                        </div>
                    </div>
                </div >

        {/* Bottom Controls */ }
        < div className = "absolute bottom-0 left-0 w-full p-8 flex justify-between items-end" >
            <div className="hidden md:block text-white/40 text-[10px] font-mono max-w-[200px] leading-relaxed">
                COORDINATES: 43.3452° N, 3.8921° W<br />
                SECTOR: ALPHA-9<br />
                STATUS: OPERATIONAL
            </div>

    {/* Drag Indicator */ }
                    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
                        <div className="flex items-center gap-4">
                            <MousePointer2 size={20} className="text-white" />
                        </div>
                        <span className="text-[10px] text-white tracking-[0.3em] uppercase font-light">Drag to Explore</span>
                    </div>

                    <div className="text-right">
                        <div className="text-white/40 text-[10px] font-mono mb-1">AVAILABLE EXPERIMENTS</div>
                        <div className="text-white text-xl font-light">
                            {experiments.length.toString().padStart(2, '0')}
                        </div>
                    </div>
                </div >
            </div >

        {/* --- Modal (Side Panel) --- */ }
        <AnimatePresence>
    {
        selectedExperiment && (
            <div className="fixed inset-0 z-50 flex justify-end">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedExperiment(null)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="relative w-full max-w-[500px] h-full bg-[#0a0a0a] border-l border-[#333] shadow-2xl z-50 flex flex-col"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedExperiment(null)}
                        className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition-colors z-10 hover:rotate-90 duration-300"
                    >
                        <X size={24} />
                    </button>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-10 md:p-14 flex flex-col">
                        <div className="mt-12 mb-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono tracking-widest uppercase">
                                    {selectedExperiment.tag}
                                </span>
                                <div className="h-[1px] flex-1 bg-white/10" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                                {selectedExperiment.title}
                            </h2>

                            <p className="text-zinc-400 text-lg font-light leading-relaxed">
                                {selectedExperiment.description}
                            </p>
                        </div>

                        <div className="space-y-6 mt-12">
                            <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-zinc-500 uppercase tracking-wider">System Status</span>
                                    <div className={`w-2 h-2 rounded-full ${selectedExperiment.link === '#' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                </div>
                                <div className="text-white font-mono text-sm">
                                    {selectedExperiment.link === '#' ? 'UNDER_CONSTRUCTION' : 'SYSTEM_ONLINE'}
                                </div>
                            </div>

                            <Link
                                href={selectedExperiment.link}
                                target={selectedExperiment.link === '#' ? '_self' : '_blank'}
                                className={`group flex items-center justify-between w-full p-6 rounded-xl transition-all duration-300 ${selectedExperiment.link === '#'
                                    ? 'bg-zinc-900 text-zinc-500 cursor-not-allowed border border-zinc-800'
                                    : 'bg-white text-black hover:bg-[#82ff1f] hover:shadow-[0_0_30px_rgba(130,255,31,0.3)]'
                                    }`}
                            >
                                <span className="font-bold tracking-widest text-sm uppercase">
                                    {selectedExperiment.link === '#' ? 'Próximamente' : 'Iniciar Experimento'}
                                </span>
                                {selectedExperiment.link !== '#' && (
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                )}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }
            </AnimatePresence >
        </div >
    );
}
