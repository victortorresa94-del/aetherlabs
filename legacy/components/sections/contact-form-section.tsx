"use client";

import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              ¿Listo para hacer realidad tus ideas?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cuéntanos sobre tu proyecto. Respondemos rápido y sin compromisos.
              <br /><br />
              También puedes escribirnos directamente a{" "}
              <a href="mailto:hola@aetherlabs.es" className="text-white hover:text-purple-400 transition-colors">
                hola@aetherlabs.es
              </a>
            </p>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa (opcional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;