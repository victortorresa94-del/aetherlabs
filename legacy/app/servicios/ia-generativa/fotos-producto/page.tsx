import ServiceDetail from '@/components/sections/service-detail';

export default function FotosProductoPage() {
    return (
        <ServiceDetail
            title="Fotos de Producto IA"
            subtitle="Fotografía de estudio profesional sin cámara ni estudio."
            description="Generamos imágenes de producto hiperrealistas en cualquier entorno imaginable. Ideal para e-commerce, catálogos y redes sociales. Olvídate de organizar sesiones fotográficas costosas, contratar modelos o buscar localizaciones. Con nuestra tecnología, tu producto puede estar en cualquier lugar del mundo (o fuera de él) en cuestión de minutos."
            benefits={[
                "Sin costes de estudio, viajes ni modelos",
                "Control total sobre iluminación y entorno",
                "Consistencia visual perfecta en todo el catálogo",
                "Escalabilidad infinita: 10 o 10.000 fotos",
                "Iteración rápida de estilos y conceptos"
            ]}
            process={[
                {
                    title: "Entrenamiento del Modelo",
                    description: "Entrenamos una IA específica con unas pocas fotos reales de tu producto para aprender sus detalles."
                },
                {
                    title: "Definición de Estilo",
                    description: "Creamos los 'prompts' y configuraciones para situar tu producto en los entornos deseados."
                },
                {
                    title: "Generación y Upscaling",
                    description: "Generamos cientos de opciones, seleccionamos las mejores y las escalamos a ultra-alta resolución."
                }
            ]}
            heroImage="/images/skyflex/gallery-1.jpg"
            gallery={[
                '/images/skyflex/gallery-1.jpg',
                '/images/skyflex/gallery-2.jpg',
                '/images/skyflex/gallery-3.jpg',
                '/images/skyflex/gallery-4.jpg',
                '/images/skyflex/gallery-5.jpg'
            ]}
        />
    );
}

