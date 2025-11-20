import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <body className="antialiased bg-black text-white">
        {/* Script de ElevenLabs (Jason) - Lo mantenemos */}
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="afterInteractive"
          type="text/javascript"
        />
        
        {children}
        
        {/* Widget del agente */}
        <elevenlabs-convai agent-id="agent_7901k85nn7wyfynsqgs4qym0h48t" />
      </body>
    </html>
  );
}