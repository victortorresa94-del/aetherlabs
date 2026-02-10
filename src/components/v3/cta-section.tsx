'use client'

import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
    return (
        <section className="relative w-full py-32 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black to-black opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black opacity-60 pointer-events-none" />

            <div className="container px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                        Descubre cuánto estás perdiendo <span className="text-white font-medium">por no responder a tiempo</span>
                    </h2>

                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        En 15 minutos analizamos tu proceso y te decimos si esto tiene sentido para tu negocio. sin compromiso.
                    </p>

                    <button
                        onClick={() => document.getElementById('diagnosis-modal')?.showModal()}
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 text-lg font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <span className="mr-2">Diagnóstico Express</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>

                    <p className="mt-8 text-sm text-zinc-600">
                        * No te venderemos nada que no necesites.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
