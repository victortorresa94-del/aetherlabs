'use client';

const steps = [
  {
    number: '01',
    title: 'Sesión de Claridad (gratuita)',
    description: '90 minutos. Te decimos exactamente qué necesitas y qué no necesitas. Sin compromiso.',
  },
  {
    number: '02',
    title: 'Propuesta a medida',
    description: 'Un plan concreto con entregables, plazos y precio. Sin letra pequeña.',
  },
  {
    number: '03',
    title: 'Ejecución y entrega',
    description: 'Construimos, implementamos y te entregamos algo que funciona desde el día 1.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="v5-section relative overflow-hidden bg-black pb-32">
      <div className="v5-container">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="v5-label mb-5 block">
            Cómo funciona
          </span>
          <h2 className="v5-h2">
            En tres pasos, de donde estás<br />
            a donde quieres ir
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start gap-0 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start flex-1 w-full md:w-auto flex-col md:flex-row"
            >
              {/* Step */}
              <div
                className="v5-reveal flex-1 flex flex-col items-center text-center relative pt-5"
              >
                {/* Background number */}
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-display font-extrabold text-[80px] md:text-[140px] text-white/5 leading-none select-none pointer-events-none tracking-tighter">
                  {step.number}
                </span>

                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center font-mono text-xs font-bold text-[#00E5FF] mb-5 relative z-10">
                  {step.number}
                </div>

                <h3 className="font-display font-semibold text-xl text-white mb-3 tracking-tight relative z-10 max-w-[260px]">
                  {step.title}
                </h3>

                <p className="font-body text-sm text-white/50 leading-relaxed max-w-[260px] relative z-10">
                  {step.description}
                </p>
              </div>

              {/* Connector line (not after last) */}
              {i < steps.length - 1 && (
                <div
                  className="w-[1px] h-10 md:w-20 md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-[#00E5FF]/40 to-[#00E5FF]/10 mt-5 md:mt-11 flex-shrink-0 mx-auto md:mx-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
