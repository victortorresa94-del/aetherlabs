// hooks/useAnimateOnScroll.ts
// Controla animaciones con Framer Motion al entrar en viewport.

import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useAnimateOnScroll = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return { ref, controls };
};
