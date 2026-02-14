'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlubyCore } from './FlubyCore';
import { FlubyChat } from './FlubyChat';
import { useFlubyLogic } from './FlubyLogic';
import { usePathname } from 'next/navigation';

export const Fluby = () => {
    const pathname = usePathname();
    const { currentMessage, isExpanded, setIsExpanded, state, showMessage } = useFlubyLogic();
    const [isHovered, setIsHovered] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Natural floating movement
    const yFloat = Math.sin(Date.now() * 0.002) * 15;

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-2 pointer-events-none">

            {/* Float Message Bubble (Floating over Fluby) */}
            <AnimatePresence>
                {currentMessage && !isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-black/95 border border-white/10 px-5 py-4 rounded-[24px] max-w-[260px] shadow-2xl backdrop-blur-2xl pointer-events-auto mb-4 relative z-10"
                    >
                        <p className="text-white text-[13px] leading-relaxed font-medium">
                            {currentMessage}
                        </p>
                        {currentMessage === "¿Quieres que te lo explique rápido?" && (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="mt-3 text-[#82ff1f] text-[11px] font-bold uppercase tracking-widest hover:brightness-125 block"
                            >
                                Sí, explícame
                            </button>
                        )}
                        {/* Little indicator of intention awareness */}
                        <div className="mt-3 pt-3 border-t border-white/5 flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] opacity-50" />
                            <span className="text-[9px] text-zinc-500 uppercase font-black">Modo: {state.intent.profile}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3D Entity - DRAGGABLE FLUBY */}
            <motion.div
                drag
                dragConstraints={{ left: -1400, right: 0, top: -800, bottom: 0 }}
                dragElastic={0.15}
                className="w-32 h-32 pointer-events-auto cursor-grab active:cursor-grabbing relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsExpanded(!isExpanded)}
                animate={{
                    scale: isHovered ? 1.25 : 1,
                    y: yFloat,
                    rotateX: isHovered ? 10 : 0,
                }}
                transition={{ type: 'spring', damping: 12, stiffness: 120 }}
            >
                <FlubyCore />

                {/* Interaction glow */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.4 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#82ff1f]/15 rounded-full blur-3xl -z-10"
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Floating Chat Panel */}
            <FlubyChat
                isOpen={isExpanded}
                onClose={() => setIsExpanded(false)}
                pathname={pathname}
                state={state}
                initialMessage={currentMessage === "¿Quieres que te lo explique rápido?" ? "Resúmeme esta sección rápido, canalla." : undefined}
            />
        </div>
    );
};
