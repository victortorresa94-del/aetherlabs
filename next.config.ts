import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite imágenes externas para tus demos/placeholders
      },
    ],
  },
  // Eliminamos la configuración de 'turbopack' con loaders de Orchids
  typescript: {
    ignoreBuildErrors: true, // Mantenemos esto por ahora para agilizar
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;