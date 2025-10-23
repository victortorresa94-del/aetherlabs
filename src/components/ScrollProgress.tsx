// components/ScrollProgress.tsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra superior que indica el progreso de scroll.
 * Importar en layout principal para que esté en todas las páginas.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#75c4af] origin-left z-50"
      style={{ scaleX }}
    />
  );
}
