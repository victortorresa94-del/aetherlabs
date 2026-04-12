import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/creative-lab', destination: '/gen-ai-lab', permanent: true },
      { source: '/creative-lab/:path*', destination: '/gen-ai-lab/:path*', permanent: true },
      { source: '/school-lab', destination: '/learn-lab', permanent: true },
      { source: '/school-lab/:path*', destination: '/learn-lab/:path*', permanent: true },
      { source: '/systems-lab', destination: '/claude-lab', permanent: false },
    ];
  },
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
};

export default nextConfig;