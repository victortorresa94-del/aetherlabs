// components/Toast.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";

type ToastType = "success" | "error" | "info";

type Props = {
  message: string | null;
  type?: ToastType;
  open: boolean;
  onClose?: () => void;
};

const styles: Record<ToastType, string> = {
  success: "bg-green-100 border border-green-400 text-green-800",
  error: "bg-red-100 border border-red-400 text-red-800",
  info: "bg-blue-100 border border-blue-400 text-blue-800"
};

export default function Toast({ message, type = "info", open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && message && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-6 right-6 z-50 max-w-xs rounded-lg px-4 py-3 shadow-lg ${styles[type]}`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="text-sm leading-5">{message}</span>
            <button
              onClick={onClose}
              aria-label="Cerrar notificación"
              className="ml-auto text-xs underline"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
