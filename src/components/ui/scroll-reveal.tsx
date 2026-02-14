"use client";

import { motion, useInView, UseInViewOptions, Variant } from "framer-motion";
import { useRef } from "react";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "zoom-in" | "zoom-out";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    offset?: number;
    staggerChildren?: number;
}

export function ScrollReveal({
    children,
    className = "",
    variant = "fade-up",
    delay = 0,
    duration = 0.5,
    threshold = 0.1,
    once = true,
    offset = 20,
    staggerChildren = 0
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: threshold, once });

    const getVariants = (): { hidden: any; visible: any } => {
        const baseTransition = {
            duration,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98] as any, // Custom spring-like cubic-bezier
        };

        switch (variant) {
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: offset },
                    visible: { opacity: 1, y: 0, transition: baseTransition },
                };
            case "fade-down":
                return {
                    hidden: { opacity: 0, y: -offset },
                    visible: { opacity: 1, y: 0, transition: baseTransition },
                };
            case "fade-left":
                return {
                    hidden: { opacity: 0, x: -offset },
                    visible: { opacity: 1, x: 0, transition: baseTransition },
                };
            case "fade-right":
                return {
                    hidden: { opacity: 0, x: offset },
                    visible: { opacity: 1, x: 0, transition: baseTransition },
                };
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: baseTransition },
                };
            case "zoom-in":
                return {
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1, transition: baseTransition },
                };
            case "zoom-out":
                return {
                    hidden: { opacity: 0, scale: 1.05 },
                    visible: { opacity: 1, scale: 1, transition: baseTransition },
                };
            default:
                return {
                    hidden: { opacity: 0, y: offset },
                    visible: { opacity: 1, y: 0, transition: baseTransition },
                };
        }
    };

    const variants = getVariants();

    // If staggerChildren is set, we use a container variant logic
    if (staggerChildren > 0) {
        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: staggerChildren,
                            delayChildren: delay
                        }
                    }
                }}
                className={className}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Child component for staggered lists
export function ScrollRevealItem({ children, className = "", variant = "fade-up", offset = 20 }: { children: React.ReactNode, className?: string, variant?: AnimationVariant, offset?: number }) {

    const getVariants = () => {
        const transition = { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as any };

        switch (variant) {
            case "fade-up": return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0, transition } };
            case "fade-in": return { hidden: { opacity: 0 }, visible: { opacity: 1, transition } };
            // Add others as needed, simplified for list items
            default: return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0, transition } };
        }
    }

    return (
        <motion.div variants={getVariants()} className={className}>
            {children}
        </motion.div>
    );
}

