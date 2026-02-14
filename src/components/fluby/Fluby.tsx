'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fluby3D } from './Fluby3D';
import { FlubyChat } from './FlubyChat';
import { useFlubyLogic } from './FlubyLogic';
import { usePathname } from 'next/navigation';

export const Fluby = () => {
    const pathname = usePathname();
    const { currentMessage, isExpanded, setIsExpanded, state, showMessage } = useFlubyLogic();
    const [isHovered, setIsHovered] = useState(false);
    const [isCrystal, setIsCrystal] = useState(false);

    const toggleMaterial = () => setIsCrystal(!isCrystal);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <motion.div
                drag
                dragConstraints={{ left: -1200, right: 0, top: -800, bottom: 0 }}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="absolute bottom-12 right-12 w-40 h-40 pointer-events-auto cursor-grab active:cursor-grabbing"
                style={{ touchAction: 'none' }}
            >
                {/* 3D Entity - FLUBY (Toggle logic only here) */}
                <motion.div
                    className="w-full h-full relative pointer-events-auto"
                    onTap={() => setIsExpanded(!isExpanded)}
                    onDoubleClick={toggleMaterial}
                >
                    <Fluby3D
                        isCrystal={isCrystal}
                        isHovered={isHovered}
                    />
                </motion.div>

                {/* Floating Message (Small Bubble) */}
                <AnimatePresence>
                    {currentMessage && !isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -20, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute bottom-full right-0 bg-black/95 border border-white/10 px-5 py-4 rounded-[24px] w-[280px] shadow-2xl backdrop-blur-3xl mb-4 pointer-events-auto"
                        >
                            <p className="text-white text-[13px] leading-relaxed font-medium">
                                {currentMessage}
                            </p>
                            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">
                                    CORE: {state.intent.profile} ({Math.round(state.maturity.score * 100)}%)
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CHAT PANEL - Floating with Fluby */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="absolute bottom-full right-0 mb-6 pointer-events-auto"
                            onPointerDown={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                            onTap={(e: any) => e.stopPropagation()}
                        >
                            <FlubyChat
                                isOpen={isExpanded}
                                onClose={() => setIsExpanded(false)}
                                pathname={pathname}
                                state={state}
                                initialMessage={currentMessage?.includes("explique") ? "Explícame esto rápido." : undefined}
                                isRelative={true}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
