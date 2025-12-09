import ServiceDetail from '@/components/sections/service-detail';

export default function Campanas360Page() {
    return (
        <ServiceDetail
            title="Campañas 360"
            subtitle="Producción integral de campañas publicitarias con IA: Foto, Vídeo y Ads."
            description="Un servicio 'todo en uno' diseñado para marcas que necesitan impacto inmediato. Nos encargamos de absolutamente todo: desde la dirección creativa y la generación de fotos de producto y vídeos cinemáticos, hasta la creación de Reels virales y la gestión completa de tus campañas de publicidad (Ads). Es el paquete completo para lanzar o escalar tu marca."
            benefits={[
                "Solución integral llave en mano",
                "Coherencia visual total entre formatos",
                "Creatividades optimizadas específicamente para conversión",
                "Reducción drástica de tiempos de producción (días vs meses)",
                "Gestión profesional de Ads incluida"
            ]}
            process={[
                {
                    title: "Estrategia Global",
                    description: "Definimos el concepto creativo y la estrategia de medios para la campaña."
                },
                {
                    title: "Producción Multi-Formato",
                    description: "Generamos todos los assets: fotos de campaña, vídeos de producto y contenido vertical."
                },
                {
                    title: "Lanzamiento y Optimización",
                    description: "Lanzamos las campañas en Meta/TikTok Ads y optimizamos basándonos en datos reales."
                }
            ]}
            heroImage="/images/skyflex/main.jpg"
            gallery={[
                '/images/skyflex/car-scene.jpg',
                '/images/skyflex/vending-machine.jpg',
                '/images/skyflex/friends-laughing.jpg',
                '/images/skyflex/picnic.jpg',
                '/images/skyflex/stairs.jpg'
            ]}
        />
    );
}

