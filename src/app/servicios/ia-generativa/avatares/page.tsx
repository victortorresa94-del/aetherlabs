import ServiceDetail from '@/components/sections/service-detail';

export default function AvataresPage() {
    return (
        <ServiceDetail
            title="Avatares y Portavoces IA"
            subtitle="Tu propio clon digital para crear contenido sin límites."
            description="Creamos tu avatar digital hiperrealista (como Daniel, en la imagen) y te entregamos las llaves para que lo uses. Este es un servicio de 'Pack Completo': clonamos tu imagen y voz, y te formamos para que tú mismo puedas generar cientos de vídeos en minutos, sin cámaras, sin micros y sin perder tiempo grabando."
            benefits={[
                "Clonación profesional de imagen y voz",
                "Formación completa para uso autónomo",
                "Generación de contenido ilimitado",
                "Ahorro masivo de tiempo de grabación",
                "Consistencia de marca personal"
            ]}
            process={[
                {
                    title: "Grabación del Dataset",
                    description: "Te guiamos para grabar un vídeo corto de 2 minutos que servirá de base."
                },
                {
                    title: "Entrenamiento y Clonación",
                    description: "Procesamos tu imagen y voz para crear un avatar idéntico a ti."
                },
                {
                    title: "Entrega y Formación",
                    description: "Te entregamos tu avatar y te enseñamos a usar la plataforma para crear vídeos."
                }
            ]}
            heroImage="/images/avatars/man-hoodie.jpg"
        />
    );
}

