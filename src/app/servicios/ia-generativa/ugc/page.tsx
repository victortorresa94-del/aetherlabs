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
        >
            <section className="py-20 bg-black">
                <div className="container">
                    <h2 className="text-3xl font-light mb-12 text-center text-white">Ejemplos de Campañas Reales</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Video 1 */}
                        <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#111] border border-[#222]">
                            <iframe
                                src="https://play.gumlet.io/embed/69400555ad648471cb071641"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title="UGC Example 1"
                            />
                        </div>
                        {/* Video 2 */}
                        <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#111] border border-[#222]">
                            <iframe
                                src="https://play.gumlet.io/embed/694005559c03c66ee7a5b9f2"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title="UGC Example 2"
                            />
                        </div>
                    </div>
                    <p className="text-center text-[#808080] mt-8 text-sm">
                        * Vídeos generados 100% con Inteligencia Artificial.
                    </p>
                </div>
            </section>
        </ServiceDetail>
    );
}

