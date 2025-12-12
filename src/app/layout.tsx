import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import JasonBot from "@/components/ui/jason-bot";

export const metadata: Metadata = {
  title: "Aether Labs - IA clara y útil para tu negocio",
  description: "Automatización e IA para negocios reales. Sin tecnicismos. Sin complicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Google Analytics (gtag.js) */}
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
      {/* End Google Tag Manager */}
      <body className="antialiased bg-black text-white selection:bg-[#82ff1f] selection:text-black">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2K2L3NQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Analytics />
        {/* <JasonBot /> */}
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript" strategy="afterInteractive" />
        {/* @ts-ignore */}
        <elevenlabs-convai agent-id="agent_7901k85nn7wyfynsqgs4qym0h48t"></elevenlabs-convai>
      </body>
    </html>
  );
}