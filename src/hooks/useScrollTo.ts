// hooks/useScrollTo.ts
// Hook para scroll suave a un id de sección. Úsalo en botones/enlaces.

import { useCallback } from "react";

export const useScrollTo = () => {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);
};
