// components/ConsultoriaEstrategica.tsx
"use client";

export default function ConsultoriaEstrategica() {
  return (
    <section id="crea-tu-ia" className="bg-[#0f1722] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título + descripción */}
        <div className="text-center mb-18">
          <h2 className="text-4xl md:text-5xl tracking-tight">
            Consultoría <i className="font-playfair">estratégica</i>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-white/80 leading-relaxed">
            Analizamos tu negocio para detectar procesos automatizables y dónde la IA realmente te aporta.
            Seleccionamos herramientas concretas, priorizamos acciones y te entregamos una propuesta clara para
            que puedas hacerlo tú mismo, formar a tu equipo o contratarnos la implementación más adelante.
          </p>
        </div>

        {/* Grid 6/6 equilibrado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-20 xl:gap-x-24 items-center">
          {/* Imagen a la izquierda */}
          <div className="lg:col-span-6 self-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl -ml-6 md:-ml-12">
              <img
                src="/images/consulting.png"
                alt="Consultoría estratégica en IA"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Acordeones a la derecha */}
          <div className="lg:col-span-6 mt-10 lg:mt-0 pr-2">
            <div className="max-w-[90%]">
              <ul className="space-y-5">

                {/* Detectamos oportunidades */}
                <li>
                  <details className="group rounded-2xl bg-white/05 backdrop-blur border border-white/10">
                    <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between">
                      <span className="text-lg md:text-xl font-normal">
                        Detectamos oportunidades reales
                      </span>
                      <svg className="w-4 h-4 shrink-0 opacity-70 transition-transform group-open:rotate-90" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 text-white/80 text-sm leading-relaxed">
                      <p>Analizamos tus procesos para detectar dónde la IA puede ser tu mejor aliada.</p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Análisis de procesos internos y customer journey.",
                          "Auditoría de tareas repetitivas y cuellos de botella.",
                          "Entrevistas 1:1 con responsables y líderes de área.",
                          "Estimación de ahorro de tiempo/coste e impacto.",
                          "Priorización con matriz esfuerzo/impacto."
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* Selección de herramientas */}
                <li>
                  <details className="group rounded-2xl bg-white/05 backdrop-blur border border-white/10">
                    <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between">
                      <span className="text-lg md:text-xl font-normal">
                        Selección de herramientas adecuadas
                      </span>
                      <svg className="w-4 h-4 shrink-0 opacity-70 transition-transform group-open:rotate-90" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 text-white/80 text-sm leading-relaxed">
                      <p>Elegimos tecnología que encaja con tu equipo, presupuesto y forma de trabajar.</p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Mapeo de tu stack actual y licencias.",
                          "Comparativa de alternativas (coste, curva de aprendizaje, seguridad).",
                          "Recomendaciones por caso de uso: marketing, ventas, operaciones, soporte.",
                          "Diseño de flujos con las herramientas propuestas.",
                          "Checklist de requisitos técnicos y compliance."
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* Roadmap y prioridades */}
                <li>
                  <details className="group rounded-2xl bg-white/05 backdrop-blur border border-white/10">
                    <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between">
                      <span className="text-lg md:text-xl font-normal">
                        Roadmap y prioridades
                      </span>
                      <svg className="w-4 h-4 shrink-0 opacity-70 transition-transform group-open:rotate-90" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 text-white/80 text-sm leading-relaxed">
                      <p>Ordenamos el plan para que avances con seguridad y resultados rápidos.</p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Plan por fases (0, 3, 6 y 12 semanas).",
                          "Hitos, dependencias y responsables.",
                          "Quick wins y backlog priorizado.",
                          "Indicadores de éxito operativos (no vanity metrics).",
                          "Estimación de tiempos y esfuerzo por tarea."
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* Formación y adopción */}
                <li>
                  <details className="group rounded-2xl bg-white/05 backdrop-blur border border-white/10">
                    <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between">
                      <span className="text-lg md:text-xl font-normal">
                        Formación y adopción (opcional)
                      </span>
                      <svg className="w-4 h-4 shrink-0 opacity-70 transition-transform group-open:rotate-90" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 text-white/80 text-sm leading-relaxed">
                      <p>Si lo necesitas, te ayudamos a que el equipo lo integre de verdad en su día a día.</p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Sesiones prácticas por rol con casos reales.",
                          "Manuales rápidos y guías paso a paso.",
                          "Playbooks y prompts listos para usar.",
                          "Soporte de dudas durante un periodo acordado.",
                          "Medición de adopción y feedback de mejora."
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>

                {/* Entregable final */}
                <li>
                  <details className="group rounded-2xl bg-white/05 backdrop-blur border border-white/10">
                    <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between">
                      <span className="text-lg md:text-xl font-normal">
                        Entregable final de consultoría
                      </span>
                      <svg className="w-4 h-4 shrink-0 opacity-70 transition-transform group-open:rotate-90" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 text-white/80 text-sm leading-relaxed">
                      <p>Te llevas una guía clara para ejecutar o decidir cómo avanzar.</p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Resumen ejecutivo para decisión directiva.",
                          "Mapa de procesos y oportunidades detectadas.",
                          "Lista de herramientas recomendadas y costes estimados.",
                          "Roadmap priorizado con hitos y responsables sugeridos.",
                          "Siguientes pasos y opciones de acompañamiento."
                        ].map((t, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>
              </ul>

              {/* CTA principal con turquesa de marca */}
              <div className="mt-10">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#75c4af] text-black font-medium hover:brightness-95 transition shadow-lg"
                  aria-label="Pedir mi consultoría"
                >
                  Pedir mi consultoría
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Icono check minimal (turquesa de marca) */
function Check() {
  return (
    <svg className="mt-0.5 w-4 h-4 flex-shrink-0 text-[#75c4af]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16 6l-7.5 8L4 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
