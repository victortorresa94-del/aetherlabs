'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, PhoneMissed, Users, Archive, Flame } from "lucide-react";

const problems = [
    {
        id: "01",
        text: "Leads que escriben por WhatsApp o IG y reciben respuesta horas\u00A0después.",
        weight: "font-normal",
        textColor: "text-zinc-300",
        icon: MessageCircle
    },
    {
        id: "02",
        text: "Llamadas perdidas fuera de horario que nunca se recuperan.",
        weight: "font-medium",
        textColor: "text-zinc-200",
        icon: PhoneMissed
    },
    {
        id: "03",
        text: "Equipos saturados respondiendo las mismas dudas una y otra vez.",
        weight: "font-medium",
        textColor: "text-zinc-100",
        icon: Users
    },
    {
        id: "04",
        text: "Conversaciones sin seguimiento que se enfrían y se olvidan.",
        weight: "font-semibold",
        textColor: "text-white",
        icon: Archive
    }
];

const ProblemSection = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-black text-white flex flex-col items-center overflow-hidden">

            {/* Abstract Background Element */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#82ff1f]/5 to-transparent pointer-events-none opacity-20"></div>

            <div className="w-full max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <header className="mb-24 text-center">
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs tracking-[0.2em] uppercase text-zinc-400 mb-8">
                        Diagnóstico de Ventas
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
                        Si esto te suena,<br />
                        <span className="text-white font-medium">estás perdiendo ventas</span>
                    </h1>
                </header>

                {/* Problems List */}
                <div className="flex flex-col border-t border-white/10 max-w-3xl mx-auto w-full">
                    {problems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative border-b border-white/10 py-8 md:py-10 flex items-center cursor-default transition-all duration-400 hover:pl-4"
                        >
                            {/* Hover Indicator */}
                            <div className="absolute left-0 w-1 h-8 bg-[#82ff1f] opacity-0 -translate-x-4 transition-all duration-300 rounded-r group-hover:opacity-100 group-hover:translate-x-0"></div>

                            {/* Icon */}
                            <div className="w-12 flex-shrink-0 flex items-center justify-start text-[#82ff1f] opacity-70 group-hover:opacity-100 transition-opacity">
                                <item.icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>

                            {/* Text */}
                            <p className={cn(
                                "text-lg md:text-xl lg:text-2xl transition-colors tracking-wide group-hover:text-white flex-1",
                                item.weight,
                                item.textColor
                            )}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Insight */}
                <div className="mt-24 text-center">
                    <p className="font-serif italic text-xl md:text-2xl text-zinc-400 leading-relaxed">
                        "El problema no es tener leads. Es no tener un sistema que los&nbsp;gestione<span className="text-[#82ff1f] not-italic font-sans">.</span>"
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProblemSection;
