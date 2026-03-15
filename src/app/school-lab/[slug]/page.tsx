'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/v5/Navbar';
import Footer from '@/components/v5/Footer';

interface ProgramInfo {
    audience: string;
    color: string;
    twColorClass: string;
    bgGlowClass: string;
    h1: string;
    subtitle: string;
    pain: string;
    learnings: string[];
}

const programsData: Record<string, ProgramInfo> = {
    'empoderate-con-ia': {
        audience: 'MUJERES 40-60',
        color: '#059669',
        twColorClass: 'text-[#059669]',
        bgGlowClass: 'bg-[#059669]/10',
        h1: 'Usa la IA para lo que más te importa',
        subtitle: 'Salud, creatividad, recuerdos, comunicación. Sin necesitar saber nada de tecnología.',
        pain: 'La tecnología avanza rápido y a veces parece que el mundo digital no está diseñado para ti ni para tus necesidades reales.',
        learnings: [
            'Crear imágenes y vídeos personales con IA generativa',
            'Organizar información de salud y crear GPTs personalizados',
            'Comunicarse mejor (redactar emails, mensajes, resúmenes)',
            'Recuperar y organizar recuerdos y fotos antiguas',
            'Aprender a preguntar bien a la IA para obtener lo que necesitan'
        ]
    },
    'conectate-con-el-mundo': {
        audience: 'PERSONAS MAYORES 65+',
        color: '#2563EB',
        twColorClass: 'text-blue-600',
        bgGlowClass: 'bg-blue-600/10',
        h1: 'La IA puede ayudarte a estar más cerca de tu familia',
        subtitle: 'A sentirte acompañada y a vivir mejor el día a día.',
        pain: 'La tecnología avanza y parece que te deja atrás. Las pantallas son confusas y depender siempre de los demás para entenderlas frustra.',
        learnings: [
            'Usar el móvil con asistentes de IA vocalmente (preguntar, buscar, recordar)',
            'Videollamar con facilidad y estar en contacto constante con la familia',
            'Pedir recetas, consejos de salud y actividades adaptadas a tu edad',
            'Entender noticias complejas y contenidos largos con resúmenes fáciles',
            'Crear fotos y revivir recuerdos con herramientas visuales simples'
        ]
    },
    'aprende-a-crear': {
        audience: 'NIÑOS 6-12',
        color: '#F97316',
        twColorClass: 'text-orange-500',
        bgGlowClass: 'bg-orange-500/10',
        h1: 'Los niños tienen ideas increíbles. La IA les da las herramientas.',
        subtitle: 'Cuentos, personajes, música, mundos inventados. Potencia su creatividad, no su pasividad.',
        pain: 'Pasan horas en pantallas consumiendo contenido pasivamente en lugar de usar su tremenda imaginación para crear.',
        learnings: [
            'Crear cuentos ilustrados completos desde cero con herramientas visuales',
            'Inventar personajes únicos y darles voz propia',
            'Componer música simple e intuitiva con IA',
            'Construir mundos completos e historias visuales coherentes',
            'Aprender a usar la IA como herramienta de creación, no de atajo o sustitución'
        ]
    },
    'descubre-tu-futuro': {
        audience: 'JÓVENES 13-18',
        color: '#9333EA',
        twColorClass: 'text-purple-600',
        bgGlowClass: 'bg-purple-600/10',
        h1: 'El sistema educativo no te enseña las profesiones del futuro. Nosotros sí.',
        subtitle: 'Descubre qué se te da bien, qué salidas tiene, y cómo la IA puede llevarte más lejos.',
        pain: 'Siguen existiendo carreras y currículums que ya no garantizan un empleo real en el mercado actual dominado por la IA.',
        learnings: [
            'Entender qué profesiones y habilidades tienen futuro real e inminente',
            'Usar herramientas de IA para potenciar lo que ya se te da bien de forma natural',
            'Diseñar y crear proyectos propios reales (apps, webs, negocios pequeños)',
            'Descubrir cómo emprender proyectos desde tu habitación con bajo coste',
            'Aprender a separar el "hype" de las redes del valor real de la tecnología'
        ]
    },
    'monta-tu-negocio': {
        audience: 'EMPRENDEDORES',
        color: '#F59E0B',
        twColorClass: 'text-amber-500',
        bgGlowClass: 'bg-amber-500/10',
        h1: 'Crea tu logo, tu web, tus vídeos y tus textos con IA.',
        subtitle: 'Sin contratar a nadie. Sin saber diseño avanzado ni programación. El proyecto en tus manos.',
        pain: 'Arrancar una idea cuesta miles de euros en agencias, diseñadores y programadores, creando barreras para validar tu negocio.',
        learnings: [
            'Crear tu propia identidad visual iterativa (logo, paleta, tipografías)',
            'Construir una landing page funcional de alta conversión sin tocar código',
            'Generar vídeos promocionales y contenido para redes sociales sin cámara',
            'Escribir textos persuasivos y de ventas usando modelos entrenados',
            'Automatizar procesos básicos (emails, captación) del negocio digital'
        ]
    },
    'mejora-tu-material': {
        audience: 'PROFESORES',
        color: '#06B6D4',
        twColorClass: 'text-cyan-600',
        bgGlowClass: 'bg-cyan-600/10',
        h1: 'Menos tiempo preparando y corrigiendo. Más tiempo enseñando.',
        subtitle: 'La IA te ayuda a crear mejores materiales, personalizar el contenido y reducir drásticamente la carga burocrática.',
        pain: 'Los docentes dedican incontables horas a preparar clases, corregir y adaptar, robándole tiempo a la enseñanza humana real.',
        learnings: [
            'Generar materiales didácticos completos adaptados a diferentes niveles',
            'Crear ejercicios interactivos, exámenes diversos y rúbricas al instante',
            'Reducir hasta el 80% el tiempo de corrección estructural usando asistentes',
            'Personalizar contenido concreto para alumnos con necesidades especiales',
            'Usar LLMs en el aula con estudiantes de forma ética, pautada y segura'
        ]
    },
    'mas-tiempo-para-cocina': {
        audience: 'HOSTELERÍA',
        color: '#EF4444',
        twColorClass: 'text-red-500',
        bgGlowClass: 'bg-red-500/10',
        h1: 'Gestiona reseñas, crea contenido y atrae más clientes en piloto automático.',
        subtitle: 'Sin agencias. Sin presupuestos fijos grandes. Con la IA haciendo el trabajo pesado por detrás.',
        pain: 'Gestionar el local exige el 100% de tu tiempo, dejando el marketing digital, las redes y las respuestas al cliente abandonadas.',
        learnings: [
            'Formular respuestas perfectas, cálidas o defensivas a reseñas de Google',
            'Generar copys atractivos y planificar posts de Instagram para tu menú',
            'Gestionar y estructurar la carta digital y actualizarla fácilmente con fotos',
            'Idear promociones virales y ofertas cruzadas con inteligencia de mercado',
            'Establecer auto-respuestas para dudas como horarios, alérgenos o reservas'
        ]
    },
    'dedicate-a-la-medicina': {
        audience: 'MÉDICOS Y SANIDAD',
        color: '#1D4ED8',
        twColorClass: 'text-blue-700',
        bgGlowClass: 'bg-blue-700/10',
        h1: 'La burocracia clínica te roba tiempo de medicina real.',
        subtitle: 'La IA transcribe, organiza y filtra para que tú vuelvas a centrarte en diagnosticar al paciente.',
        pain: 'Los profesionales sanitarios pasan la mitad de la consulta tecleando en historiales ineficientes y no mirando al paciente a los ojos.',
        learnings: [
            'Sistemas de transcripción de historial clínico semi-automáticos',
            'Organización inteligente y resumen masivo de historiales extensos urgentes',
            'Asistencia estructural para buscar evidencia médica en papers rápidamente',
            'Redacción plantillada de informes de descarga y documentación repetitiva',
            'Aclaración fundamental de conceptos de privacidad y normativa médica con IA'
        ]
    }
};

export default function B2CProgramPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Guard against non-existent slugs or B2B static routes
    if (!slug || !programsData[slug]) {
        return notFound();
    }

    const data = programsData[slug];

    return (
        <main className="v5-page min-h-screen bg-white text-black selection:bg-black selection:text-white">
            <Navbar theme="light" />

            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-black text-[#F5F5F5] border-b border-white/5">
                <div className={`absolute top-0 right-1/4 w-[400px] h-[400px] ${data.bgGlowClass} blur-[120px] rounded-full pointer-events-none`}></div>

                <div className="v5-container relative z-10 max-w-4xl mx-auto flex flex-col items-start pt-10">
                    <Link href="/school-lab" className="text-white/40 hover:text-white text-sm mb-12 flex items-center transition-colors">
                        ← Volver a todos los programas
                    </Link>

                    <span className="v5-label mb-6 text-white border-white/30 bg-white/10 uppercase tracking-widest">{data.audience}</span>
                    <h1 className="v5-h1 mb-6 leading-[0.95] tracking-tight text-white font-medium" style={{ fontWeight: 400 }}>
                        {data.h1}
                    </h1>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="v5-section bg-zinc-50 border-t border-black/5 py-24 min-h-[500px]">
                <div className="v5-container grid lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-4">
                        <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm sticky top-32">
                            <span className="text-red-500 font-bold mb-2 block">El Problema ✕</span>
                            <p className="font-medium text-lg text-black/80">{data.pain}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <h2 className="font-display font-bold text-3xl mb-8">Qué aprenderás en este programa</h2>
                        <div className="space-y-4">
                            {data.learnings.map((learning, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-black/5 flex gap-4 shadow-sm">
                                    <span className={`font-bold ${data.twColorClass}`}>✓</span>
                                    <p className="text-lg font-medium">{learning}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
                            <h3 className="font-display font-bold text-2xl mb-6">Formatos y Metodología</h3>
                            <p className="text-black/60 mb-6">Todos nuestros programas B2C se ofrecen en dos modalidades escalonadas para adaptarse a tu nivel de adopción tecnológica.</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-zinc-50 rounded-2xl border border-black/5">
                                    <h4 className="font-bold mb-2">Taller de Descubrimiento</h4>
                                    <p className="text-sm text-black/50">90 minutos presenciales para tomar contacto sin riesgo ni barreras técnicas.</p>
                                </div>
                                <div className="p-6 bg-zinc-50 rounded-2xl border border-black/5">
                                    <h4 className="font-bold mb-2">Intensivo Práctico</h4>
                                    <p className="text-sm text-black/50">10 horas hiper-enfocadas guiadas por tutores para automatizar tareas reales.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-black/10">
                                <button className={`v5-btn-primary w-full sm:w-auto flex justify-center py-4 text-white !border-none ${data.bgGlowClass.replace('/10', '')} ${data.bgGlowClass.replace('bg-', 'hover:bg-')}`} style={{ backgroundColor: data.color }}>
                                    Reservar o pedir más información
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
