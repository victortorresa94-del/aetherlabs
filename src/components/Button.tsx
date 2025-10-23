// components/Button.tsx
"use client";

/**
 * Botón reutilizable con variantes:
 * - primary: verde #5BA8A0
 * - secondary: contorno gris
 * - dark: fondo negro
 *
 * Uso:
 * <Button label="Crear mi IA" variant="primary" href="#crea-tu-ia" />
 * <Button label="Ver más" variant="secondary" onClick={() => ...} />
 */

import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  variant?: "primary" | "secondary" | "dark";
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
};

export const Button: React.FC<Props> = ({
  label,
  variant = "primary",
  onClick,
  href,
  className,
  ariaLabel
}) => {
  const base = "px-5 py-3 rounded-lg font-semibold text-center transition text-sm focus:outline-none focus:ring-2 focus:ring-black/30";
  const variants = {
    primary: clsx(base, "bg-[#75c4af] text-black hover:scale-[1.03] hover-glow"),
    secondary: clsx(base, "border border-gray-300 text-gray-800 hover:bg-gray-100"),
    dark: clsx(base, "bg-black text-white hover:bg-gray-800")
  };

  const classes = clsx(variants[variant], className);

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel || label} className={classes}>
        {label}
      </a>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel || label} className={classes}>
      {label}
    </button>
  );
};

export default Button;
