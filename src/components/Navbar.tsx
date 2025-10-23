// components/Navbar.tsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#que-hacemos", label: "Labs" },
    { href: "#crea-tu-ia", label: "Crea tu IA" },
    { href: "#casos-reales", label: "Casos Reales" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl">
        <div className="m-4 rounded-xl border border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-soft">
          <nav className="flex items-center justify-between px-4 md:px-6 py-3">
            {/* Logo texto */}
            <a href="#" className="font-semibold text-xl tracking-tight logo-glow">
              Aether Labs
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="link text-sm">
                  {l.label}
                </a>
              ))}
              <a
                href="#crea-tu-ia"
                className="btn btn-primary text-sm hover-glow"
                style={{ backgroundColor: "#75c4af" }}
              >
                Crear mi IA
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-black/10"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="sr-only">Menú</span>
              <div className="space-y-1">
                <span className="block h-0.5 w-5 bg-black" />
                <span className="block h-0.5 w-5 bg-black" />
                <span className="block h-0.5 w-5 bg-black" />
              </div>
            </button>
          </nav>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block py-2 border-b border-black/5 link"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#crea-tu-ia"
                  className="btn btn-primary mt-2 hover-glow"
                  style={{ backgroundColor: "#75c4af" }}
                  onClick={() => setOpen(false)}
                >
                  Crear mi IA
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

