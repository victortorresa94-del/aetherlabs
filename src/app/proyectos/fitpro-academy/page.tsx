import ProjectDetail from '@/components/sections/project-detail';

export default function FitProPage() {
    return (
        <ProjectDetail
            title="FitPro Academy – Sistema Automatizado para Gimnasios"
            subtitle="Onboarding, ventas y seguimiento automatizado con IA."
            category="Automatización"
            client="FitPro Academy"
            timeline="5 Semanas"
            services={['Agentes IA', 'CRM Automation', 'Email Marketing']}
            challenge="Los gimnasios sufrían una pérdida continua de leads, procesos comerciales ineficientes y baja retención de alumnos."
            solution="Creamos una plataforma completa que automatiza el onboarding de nuevos alumnos, integra un agente IA vendedor que atiende a los leads 24/7, envía rutinas, seguimiento y mensajes motivacionales, conecta con CRM, pasarela de pagos y calendarios, y gestiona bajas, renovaciones y recordatorios."
            results={[
                '+45% en conversión de leads.',
                '+30% en retención mensual.',
                'Reducción de tareas administrativas.',
                'Nuevos ingresos recurrentes desde automatizaciones.'
            ]}
            heroImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            gallery={[
                'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop'
            ]}
        />
    );
}
