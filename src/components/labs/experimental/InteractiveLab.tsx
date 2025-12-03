"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, ChevronRight, MousePointer2, Users, Wand2, Image as ImageIcon, BookOpen, Fingerprint, Check } from 'lucide-react';
import Link from 'next/link';

// --- Types ---
interface Experiment {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    image: string;
    icon: React.ElementType;
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
        longDescription: 'Nuestra tecnología de generación de avatares permite crear influencers virtuales indistinguibles de la realidad. Define sus rasgos, estilo y personalidad para que representen a tu marca las 24 horas del día.',
        features: ['Avatares fotorrealistas', 'Personalización total', 'Generación de vídeo', 'Lip-sync automático'],
        image: '/images/avatars/woman-mic.jpg',
        icon: Users,
        link: 'https://ugc-avatar-studio-159705655877.us-west1.run.app',
        tag: 'BIO-PRINTER',
        position: { x: 18, y: 45 }
    },
    {
        id: 'product',
        title: 'Generador de Fotos de Producto',
        description: 'Transforma fotos de producto en contenido profesional.',
        longDescription: 'Sube una foto simple de tu producto y colócala en cualquier escenario imaginable. Ideal para e-commerce, redes sociales y campañas publicitarias sin necesidad de sesiones de fotos costosas.',
        features: ['Fondos infinitos', 'Iluminación adaptativa', 'Alta resolución', 'Preservación de detalles'],
        image: '/images/creative/skyflex-fence.jpg',
        icon: ImageIcon,
        link: 'https://generador-de-fotos-de-productos-159705655877.us-west1.run.app',
        tag: 'HOLO-TABLE',
        position: { x: 50, y: 75 }
    },
    {
        id: 'editor',
        title: 'Editor de fotos con IA',
        description: 'Retoca, mejora y transforma tus imágenes con herramientas de última generación.',
        longDescription: 'Un estudio de edición completo potenciado por IA. Elimina objetos, cambia fondos, mejora la calidad y aplica estilos artísticos con un solo clic.',
        features: ['Inpainting avanzado', 'Upscaling 4K', 'Eliminación de fondo', 'Filtros de estilo'],
        image: '/images/learn/nano-banana-user.jpg',
        icon: Wand2,
        link: 'https://nano-banana-studio-159705655877.us-west1.run.app',
        tag: 'MAIN CONSOLE',
        position: { x: 82, y: 45 }
    },
    {
        id: 'storytelling',
        title: 'Generador de cuentos e historias',
        description: 'Narración de historias históricas con vídeos generados por IA.',
        longDescription: 'Da vida a la historia o a tus propias narrativas. Esta herramienta genera guiones, voces en off y secuencias de vídeo coherentes para crear contenido educativo o de entretenimiento.',
        features: ['Guiones automáticos', 'Voces neuronales', 'Generación de escenas', 'Edición automática'],
        image: '/images/creative/chleopatra-egypt.png',
        icon: BookOpen,
        link: 'https://chleopatra-history-reimagined-159705655877.us-west1.run.app',
        tag: 'ARCHIVE',
        position: { x: 62, y: 28 }
    },
    {
        id: 'vision',
        title: 'Analizador de skin care en directo',
        description: 'Analizador facial y recomendador de skincare.',
        longDescription: 'Utiliza visión por computadora para analizar la piel en tiempo real. Detecta imperfecciones, tipo de piel y recomienda productos personalizados basados en el diagnóstico.',
        features: ['Análisis en tiempo real', 'Detección de imperfecciones', 'Recomendación de productos', 'Seguimiento de progreso'],
        image: '/images/creative/cosmetica.png',
        icon: Fingerprint,
        link: '#',
        tag: 'DIAGNOSTIC SCREEN',
        position: { x: 88, y: 35 }
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

    // Drag State
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const currentX = useRef(0);

    // Configuration
    // We use a slightly wider container to allow for subtle movement without excessive zooming/pixelation
    const CONTAINER_WIDTH_VW = 110;

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

    // Mobile Orientation Check
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            setIsPortrait(window.innerHeight > window.innerWidth && window.innerWidth < 768);
        };

        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    return (
        <div
            className="relative w-full h-screen bg-[#050505] overflow-hidden select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => {
                setIsDragging(true);
                startX.current = e.touches[0].clientX;
                currentX.current = dragX;
            }}
            onTouchMove={(e) => {
                if (!isDragging) return;
                const delta = e.touches[0].clientX - startX.current;
                const maxDrag = (window.innerWidth * (CONTAINER_WIDTH_VW / 100 - 1)) / 2;
                const newX = Math.max(Math.min(currentX.current + delta, maxDrag), -maxDrag);
                setDragX(newX);
            }}
            onTouchEnd={() => setIsDragging(false)}
        >
            {/* --- Mobile Orientation Warning --- */}
            <AnimatePresence>
                {isPortrait && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center"
                    >
                        <div className="w-16 h-16 mb-6 border-2 border-[#82ff1f] rounded-lg flex items-center justify-center animate-pulse">
                            <div className="w-10 h-14 border-2 border-white/30 rounded flex items-center justify-center rotate-90">
                                <div className="w-1 h-1 bg-white rounded-full mt-1" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-light text-white mb-4">Mejor experiencia en horizontal</h2>
                        <p className="text-zinc-400 max-w-xs">
                            Para explorar el laboratorio experimental, por favor gira tu dispositivo.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Draggable Container --- */}
            <motion.div
                className="absolute inset-0 h-full flex items-center justify-center"
                style={{
                    width: `${CONTAINER_WIDTH_VW}vw`,
                    x: dragX,
                    left: `${50 - (CONTAINER_WIDTH_VW / 2)}%` // Center initial position
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/experimental-lab-bg-final.jpg"
                        alt="Lab Background"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    {/* Cinematic Overlay - Removed for clarity as requested */}
                    {/* <div className="absolute inset-0 bg-black/30" /> */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" /> */}
                </div>

                {/* Hotspots Layer */}
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
            </motion.div>

            {/* --- UI Overlay (Drake Style) --- */}
            <div className="absolute inset-0 pointer-events-none z-30">
                {/* Top Bar */}
                <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <div className="text-white font-bold tracking-widest text-xs md:text-sm">AETHER LABS</div>
                        <div className="text-[#82ff1f] text-[8px] md:text-[10px] font-mono tracking-[0.2em]">EXPERIMENTAL_UNIT_01</div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 border border-white/20 rounded-full bg-black/20 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#82ff1f] rounded-full animate-pulse" />
                                <span className="text-[8px] md:text-[10px] text-white font-mono tracking-wider">LIVE FEED</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex justify-between items-end">
                    <div className="hidden md:block text-white/40 text-[10px] font-mono max-w-[200px] leading-relaxed">
                        COORDINATES: 43.3452° N, 3.8921° W<br />
                        SECTOR: ALPHA-9<br />
                        STATUS: OPERATIONAL
                    </div>

                    {/* Drag Indicator */}
                    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
                        <div className="flex items-center gap-4">
                            <MousePointer2 size={20} className="text-white animate-bounce-x" />
                        </div>
                        <span className="text-[8px] md:text-[10px] text-white tracking-[0.3em] uppercase font-light whitespace-nowrap">
                            {isPortrait ? 'Gira para explorar' : 'Drag to Explore'}
                        </span>
                    </div>

                    <div className="text-right">
                        <div className="text-white/40 text-[8px] md:text-[10px] font-mono mb-1">AVAILABLE EXPERIMENTS</div>
                        <div className="text-white text-lg md:text-xl font-light">
                            {experiments.length.toString().padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Modal (Side Panel) --- */}
            <AnimatePresence>
                {selectedExperiment && (
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
                            className="relative w-full max-w-[600px] h-full bg-[#0a0a0a] border-l border-[#333] shadow-2xl z-50 flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedExperiment(null)}
                                className="absolute top-6 right-6 p-2 bg-black/50 rounded-full text-white/70 hover:text-white transition-colors z-20 hover:rotate-90 duration-300 border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* Hero Image */}
                            <div className="relative w-full h-48 md:h-64 shrink-0">
                                <Image
                                    src={selectedExperiment.image}
                                    alt={selectedExperiment.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-2 py-1 bg-[#82ff1f]/10 border border-[#82ff1f]/30 text-[#82ff1f] text-[10px] font-mono tracking-widest uppercase rounded">
                                            {selectedExperiment.tag}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-light text-white leading-tight flex items-center gap-3">
                                        <selectedExperiment.icon className="w-6 h-6 md:w-8 md:h-8 text-[#82ff1f]" />
                                        {selectedExperiment.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col">
                                <div className="mb-8">
                                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                                        {selectedExperiment.longDescription}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedExperiment.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                                                <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                                    <Check size={12} className="text-[#82ff1f]" />
                                                </div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-zinc-900">
                                    <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl mb-6">
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
                                            {selectedExperiment.link === '#' ? 'Próximamente' : 'Probar Experimento'}
                                        </span>
                                        {selectedExperiment.link !== '#' && (
                                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        )}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
