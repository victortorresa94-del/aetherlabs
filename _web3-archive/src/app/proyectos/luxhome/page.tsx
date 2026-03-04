import ProjectDetail from '@/components/sections/project-detail';

export default function LuxHomePage() {
    return (
        <ProjectDetail
            title="LuxHome Real Estate – Virtual Staging y Tour IA"
            subtitle="Transformación visual de propiedades premium con IA."
            category="IA Generativa"
            client="LuxHome Real Estate"
            timeline="3 Semanas"
            services={['Virtual Staging', 'Tours 360', 'Fotografía']}
            challenge="La agencia necesitaba mostrar propiedades de lujo en su mejor versión sin hacer sesiones fotográficas repetidas ni staging físico costoso."
            solution="Desarrollamos un sistema IA capaz de realizar virtual staging hiperrealista en segundos, añadir estilos decorativos coherentes con el nicho luxury, crear tours 360 con interiores generados, exportar imágenes listas para portales inmobiliarios y reducir tiempos de producción de 3 semanas a 24 horas."
            results={[
                '85% ahorro en costes de staging.',
                'Propiedades anunciadas antes y con mejor presencia.',
                'Hasta 4× más solicitudes por anuncio.',
                'Staging ilimitado por propiedad.'
            ]}
            heroImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
            gallery={[
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
            ]}
        />
    );
}
