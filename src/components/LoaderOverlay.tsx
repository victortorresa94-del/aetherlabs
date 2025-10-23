// components/LoaderOverlay.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoaderOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1000); // 1s
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <div className="animate-pulse text-[#5BA8A0] font-semibold text-2xl tracking-widest">
        AETHER LABS
      </div>
    </motion.div>
  );
}
