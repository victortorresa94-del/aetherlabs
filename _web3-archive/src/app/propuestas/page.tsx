"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Building2,
    ArrowRight,
    Calendar,
    Lock,
    Plus,
    Store,
    Dumbbell
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const proposals = [
    {
        id: "los-mejores-humos",
        client: "Los Mejores Humos",
        title: "Chatbot IA Widow (Fase 1)",
        status: "active", // active, draft, archived
        date: "Enero 2026",
        link: "/propuestas/los-mejores-humos",
        icon: Building2,
        gradient: "from-[#82ff1f] to-green-600"
    },
    {
        id: "bronson-wlb",
        client: "Bronson WLB",
        title: "Mini App Gestión (Presentación Privada)",
        status: "active",
        date: "Febrero 2026",
        link: "/propuestas/bronson-wlb",
        icon: Store,
        gradient: "from-[#82ff1f] to-emerald-500"
    },
    {
        id: "personal-trainer",
        client: "Personal Trainer",
        title: "Infraestructura Digital Fitness",
        status: "active",
        date: "Marzo 2026",
        link: "/propuestas/personal-trainer",
        icon: Dumbbell,
        gradient: "from-zinc-100 to-zinc-400"
    },
    // Placeholders for future proposals
    {
        id: "draft-1",
        client: "Nuevo Cliente",
        title: "Propuesta Pendiente",
        status: "draft",
        date: "---",
        link: "#",
        icon: Plus,
        gradient: "from-zinc-700 to-zinc-900"
    }
];

export default function ProposalsIndex() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#82ff1f] selection:text-black font-sans p-8 md:p-12">

            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-900 pb-8"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-zinc-500 mb-2">
                            <Lock className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-widest font-semibold">Acceso Confidencial</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Propuestas Comerciales
                        </h1>
                        <p className="text-zinc-400 max-w-xl">
                            Hub central de presentaciones y documentación estratégica para clientes.
                        </p>
                    </div>

                    <Badge variant="outline" className="border-zinc-800 text-zinc-500 font-mono">
                        v 1.0.0
                    </Badge>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proposals.map((prop, i) => (
                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={prop.link} className={prop.status === 'draft' ? 'pointer-events-none' : ''}>
                                <div className={`group relative h-full rounded-2xl border bg-black transition-all duration-300 overflow-hidden
                  ${prop.status === 'active'
                                        ? 'border-zinc-800 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                                        : 'border-dashed border-zinc-900 opacity-60'
                                    }`}
                                >
                                    {/* Hover Gradient Overlay */}
                                    {prop.status === 'active' && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    )}

                                    <div className="p-6 h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800
                        ${prop.status === 'active' ? 'group-hover:bg-[#82ff1f]/10 group-hover:text-[#82ff1f] transition-colors' : ''}
                      `}>
                                                <prop.icon className="w-6 h-6" />
                                            </div>
                                            <Badge variant="secondary" className={`
                        ${prop.status === 'active' ? 'bg-[#82ff1f] text-black hover:bg-[#82ff1f]' : 'bg-zinc-900 text-zinc-500'}
                      `}>
                                                {prop.status === 'active' ? 'Activa' : 'Borrador'}
                                            </Badge>
                                        </div>

                                        <div className="space-y-1 mb-8">
                                            <h4 className="text-zinc-500 text-sm font-medium uppercase tracking-wide">
                                                {prop.client}
                                            </h4>
                                            <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                                                {prop.title}
                                            </h3>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-900/50 group-hover:border-zinc-800 transition-colors">
                                            <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{prop.date}</span>
                                            </div>

                                            {prop.status === 'active' && (
                                                <div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                                                    Ver Propuesta
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
