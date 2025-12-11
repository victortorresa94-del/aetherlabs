'use client'

import React, { useEffect, useMemo, useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const HeroVideoSection = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["tecnología", "ahorro", "automatización", "inteligencia artificial", "resultados", "futuro"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex flex-col md:flex-row">

            <div className="container h-full flex flex-col md:flex-row items-center justify-end md:justify-center px-4 sm:px-6 lg:px-8 z-20 pb-24 md:pb-0 md:pt-28 pointer-events-none">
                {/* Left content (Text) */}
                <div className="flex-1 flex flex-col justify-center w-full pointer-events-auto relative z-20">
                    <div className="max-w-2xl">
                        <h1 className="font-light text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.1] tracking-[-0.02em] mb-6 text-white text-left drop-shadow-lg md:drop-shadow-none">
                            <span className="block text-white/90">Donde las ideas</span>
                            <span className="block text-white/90">se convierten en</span>
                            <span className="relative flex w-full overflow-hidden text-left pb-2 md:pb-4 md:pt-1 h-[1.2em]">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    <motion.span
                                        key={titleNumber}
                                        className="absolute font-semibold text-white left-0"
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                    >
                                        {titles[titleNumber]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-normal max-w-xl text-zinc-400 leading-relaxed mb-8 md:mb-0 drop-shadow-md md:drop-shadow-none">
                            Combinamos la creatividad y la tecnología para crear soluciones IA entendibles, seguras y accesibles para cualquier negocio.
                        </p>
                        <Link
                            href="#servicios"
                            className="inline-block bg-white text-black font-semibold text-sm tracking-wide py-3.5 px-9 rounded-full transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg mt-8 md:mt-10"
                        >
                            Mira cómo
                        </Link>
                    </div>
                </div>

                {/* Right content (3D Spline) */}
                {/* Mobile: Absolute Background. Desktop: Relative Flex Item. */}
                <div className="absolute inset-0 z-0 md:relative md:z-auto md:flex-1 md:w-full md:h-full md:inset-auto pointer-events-none md:pointer-events-auto">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                    {/* Mobile Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent md:hidden pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default HeroVideoSection;