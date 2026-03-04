"use client";

import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      console.log("Newsletter signup:", email);
      // Aquí iría la lógica de suscripción
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-32">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-8 leading-tight">
          Mantente al día con las últimas novedades en IA
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Recibe consejos prácticos, casos de uso y novedades sobre inteligencia artificial 
          explicadas de forma simple. Sin spam, solo contenido útil.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 text-center border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all duration-200"
            />
          </div>

          <div className="flex items-start justify-center gap-3">
            <input
              type="checkbox"
              id="newsletter-agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="mt-1 transition-all duration-150"
            />
            <label htmlFor="newsletter-agree" className="text-sm text-gray-600 text-left leading-relaxed">
              Sí, quiero recibir el boletín de noticias de Aether Labs.
            </label>
          </div>

          <button
            type="submit"
            disabled={!agreed}
            className="w-full max-w-sm mx-auto block bg-black text-white font-semibold text-sm tracking-wide py-4 px-8 rounded-full hover:bg-gray-900 transition-all duration-200 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            SUSCRIBIRSE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;