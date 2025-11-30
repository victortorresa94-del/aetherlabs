import ServiceDetail from '@/components/sections/service-detail';

export default function UGCPage() {
    return (
        <ServiceDetail
            title="Contenido UGC con IA"
            subtitle="Vídeos virales 'Done-for-you' sin que tengas que grabar nada."
            description="Nos encargamos de todo el proceso de creación de contenido. Tú nos das el tema o el guion, y nosotros producimos el vídeo completo utilizando avatares IA (como Melissa, en la imagen), influencers generados o perfiles anónimos. Es la solución perfecta para marcas que necesitan volumen de contenido UGC sin gestionar creadores reales."
            benefits={[
                "Servicio 100% 'Done-for-you'",
                "Sin necesidad de grabar ni editar",
                "Variedad de perfiles y estilos (como Melissa)",
                "Escalabilidad para campañas de Ads",
                "Entrega rápida de creatividades listas para publicar"
            ]}
            process={[
                {
                    title: "Briefing y Guion",
                    description: "Definimos el objetivo del vídeo y preparamos los guiones optimizados para retención."
                },
                {
                    title: "Selección de Avatar",
                    description: "Elegimos el perfil de IA (propio o stock) que mejor encaje con tu marca."
                },
                {
                    title: "Producción y Edición",
                    description: "Generamos el vídeo y añadimos edición dinámica estilo TikTok/Reels."
                }
            ]}
            heroImage="/images/avatars/woman-mic.jpg"
        />
    );
}
