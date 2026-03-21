import type { Metadata } from "next";
import "./globals.css"; // V5 Design System Optimized
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherlabs.es"),
  title: "Aether Labs — Implementación de IA para empresas | Barcelona",
  description:
    "Ayudamos a empresas con buen producto a conseguir clientes con IA. Implementación, contenido y presencia digital. Primera sesión gratis.",
  keywords: [
    "agencia IA empresas España",
    "implementar IA empresa",
    "producción contenido IA",
    "diseño web IA",
    "consultoría inteligencia artificial Barcelona",
    "Aether Labs",
    "sistemas IA empresas",
  ],
  openGraph: {
    title: "Aether Labs — El puente entre personas y tecnología",
    description:
      "Implementamos IA, producimos contenido y construimos presencia digital.",
    images: [
      {
        url: "/og-image-black.png",
        width: 1200,
        height: 630,
        alt: "Aether Labs — Barcelona 2025",
      },
    ],
    locale: "es_ES",
    type: "website",
    siteName: "Aether Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether Labs — El puente entre personas y tecnología",
    description:
      "Ayudamos a empresas con buen producto a conseguir clientes con IA. Implementación, contenido y presencia digital.",
    images: ["/og-image-black.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MFFHMKJR8Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MFFHMKJR8Q');
        `}
      </Script>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T2K2L3NQ');`}
      </Script>
      {/* Kill any stale service workers from previous Vite/Antigravity builds */}
      <Script id="sw-cleanup" strategy="afterInteractive">
        {`if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(regs){regs.forEach(function(r){r.unregister();});});}`}
      </Script>
      <body className="antialiased bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2K2L3NQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}