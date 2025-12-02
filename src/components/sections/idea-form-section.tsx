"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

const IdeaFormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        idea: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Idea submitted:", formData);
        setIsSubmitting(false);
        // Reset form or show success message
    };

    return (
        <section className="bg-black text-white py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="container max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-white/80">Hacemos realidad tus ideas</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                        Cuéntanos tu Idea
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        ¿Tienes un proyecto en mente? Déjanos ayudarte a llevarlo al siguiente nivel con el poder de la Inteligencia Artificial.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Nombre</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="idea" className="text-sm font-medium text-white/80 ml-1">Tu Idea</label>
                        <textarea
                            id="idea"
                            rows={4}
                            placeholder="Cuéntanos brevemente qué quieres construir..."
                            value={formData.idea}
                            onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                            required
                            className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black font-semibold text-lg py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                        {isSubmitting ? (
                            "Enviando..."
                        ) : (
                            <>
                                Enviar Propuesta
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default IdeaFormSection;
