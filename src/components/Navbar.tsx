// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#que-hacemos", label: "Labs" },
    { href: "#crea-tu-ia", label: "Crea tu IA" },
    { href: "#casos-reales", label: "Casos" },
    { href: "#consultoria", label: "Servicios" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl">
        {/* Fondo blanco clásico */}
        <div className="m-4 rounded-xl border border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-soft">
          <nav className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
            {/* Logo tamaño mediano (igual que antes) */}
            <Link href="/" className="flex items-center group" aria-label="Ir al inicio">
              <Image
                src="/images/logo.png"
                alt="Aether Labs logo"
                width={256}
                height={256}
                priority
                className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02] drop-shadow-sm"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="link text-sm text-black/80 hover:text-black transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="btn btn-primary text-sm hover-glow text-white font-medium"
                style={{ backgroundColor: "#75c4af" }}
              >
                Contacto
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-black/10"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
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
            <div id="mobile-menu" className="md:hidden px-4 pb-4 bg-white/90 border-t border-black/5">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block py-2 border-b border-black/5 link text-black/90"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  className="btn btn-primary mt-2 hover-glow text-white"
                  style={{ backgroundColor: "#75c4af" }}
                  onClick={() => setOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
