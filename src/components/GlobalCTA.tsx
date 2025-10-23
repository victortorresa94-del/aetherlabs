// components/GlobalCTA.tsx
"use client";

/**
 * CTA global fijo:
 * - Desktop: burbuja rectangular con texto y botón.
 * - Mobile: solo botón circular (flotante).
 * Accesible y no intrusivo. Ajusta z-index si tienes modales.
 */

import Button from "./Button";

const WA_NUMBER = "34627281459"; // España (+34) + 627281459 → sin '+'
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20crear%20mi%20IA.`;

export default function GlobalCTA() {
  return (
    <>
      {/* Desktop / md+ */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 bg-white border border-gray-200 shadow-lg rounded-2xl p-4 items-center gap-3">
        <span className="text-2xl" aria-hidden>💬</span>
        <div className="text-sm text-gray-700">¿Necesitas ayuda? Hablemos por WhatsApp.</div>
        <Button
          label="Abrir chat"
          href={WA_URL}
          ariaLabel="Hablar por WhatsApp"
          variant="primary"
          className="!px-4 !py-2"
        />
      </div>

      {/* Mobile */}
      <a
        href={WA_URL}
        aria-label="Hablar por WhatsApp"
        className="md:hidden fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 flex items-center justify-center bg-[#75c4af] text-black shadow-lg hover:scale-[1.05] transition"
      >
        💬
      </a>
    </>
  );
}
