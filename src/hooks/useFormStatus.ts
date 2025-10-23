// hooks/useFormStatus.ts
// Maneja estados de formulario y resetea a "idle" tras 3s.

import { useState } from "react";

export const useFormStatus = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendForm = async (fn: () => Promise<void>) => {
    try {
      setStatus("loading");
      await fn();
      setStatus("success");
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return { status, sendForm, setStatus };
};
