import ProjectDetail from '@/components/sections/project-detail';

export default function NovaBurgerPage() {
    return (
        <ProjectDetail
            title="NovaBurger – Sistema Creativo IA para Restauración"
            subtitle="Generación de cartelería, fotos de producto y contenido social con IA."
            category="IA Generativa"
            client="NovaBurger"
            timeline="2 Semanas"
            services={['IA Generativa', 'Food Photography', 'Motion']}
            challenge="NovaBurger necesitaba actualizar su contenido visual constantemente (carteles, ofertas, lanzamientos, fotos de producto) sin depender de estudios de fotografía ni tiempos de producción largos."
            solution="Creamos un sistema IA a medida que permite generar fotos de producto ultra realistas desde una sola imagen base, crear cartelería promocional en segundos con plantillas brand-safe, producir contenido social listo para Instagram y TikTok, mantener coherencia visual con el branding original y crear variaciones ilimitadas de campañas en segundos."
            results={[
                'Costes de producción visual reducidos un 90%.',
                'Actualización de campañas en minutos.',
                'Imagen de marca más homogénea y profesional.',
                '+40% de engagement en redes.'
            ]}
            heroImage="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop"
            gallery={[
                'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop'
            ]}
        />
    );
}
