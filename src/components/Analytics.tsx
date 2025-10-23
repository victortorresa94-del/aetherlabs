// components/Analytics.tsx
"use client";

import Script from "next/script";

/**
 * GA4 básico. Sustituye G-XXXXXXX por tu ID real cuando lo tengas.
 * Para desactivar en local, puedes comprobar process.env.NEXT_PUBLIC_GA_ID.
 */
export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXX";
  if (!GA_ID || GA_ID === "G-XXXXXXX") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
