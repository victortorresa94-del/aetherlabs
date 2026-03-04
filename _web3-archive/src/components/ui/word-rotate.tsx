"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

interface WordRotateProps {
    words: string[];
    duration?: number;
    framerProps?: HTMLMotionProps<"h1">;
    className?: string; // Add className prop
}

export default function WordRotate({
    words,
    duration = 2500,
    framerProps = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.25, ease: "easeOut" },
    },
    className,
}: WordRotateProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <div className={`overflow-hidden inline-flex ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={className}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
