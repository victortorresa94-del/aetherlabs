// components/CreativeLab.tsx
"use client";

import { motion } from "framer-motion";
import { fadeRight, fadeUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";
import Link from "next/link";


export default function CreativeLab() {
  // TUS 8 IMÁGENES - NOMBRES FÁCILES
  const images = [
    "/images/creative/producto1.png",  // Gafas
    "/images/creative/producto2.png",  // Silla
    "/images/creative/producto3.png",  // Perfume
    "/images/creative/producto4.png",  // Caja
    "/images/creative/producto5.png",  // Zapatillas
    "/images/creative/producto6.png",  // Bolsa
    "/images/creative/producto7.png",  // Vino
    "/images/creative/producto8.png"   // Tarjeta
  ];

  return (
    <section id="creative-lab" className="section bg-white">
      {/* HERO: CREATIVE LABORATORY */}
      <div className="container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <div className="inline-block">
            <span className="text-7xl md:text-8xl font-playfair block">Creative</span>
            <span className="text-5xl md:text-6xl font-inter font-bold block ml-1/2 translate-x-1/2">
              Laboratory
            </span>
          </div>
        </motion.div>
      </div>

      {/* BLOQUE 1: ANUNCIOS */}
      <div className="container grid md:grid-cols-2 gap-10 items-center mb-48">
        <motion.div variants={staggerContainer} className="grid place-items-center">
          <motion.div variants={fadeUp} className="w-full max-w-md rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <video src="/videos/anuncio.mp4" className="w-full h-80 object-cover" autoPlay muted loop playsInline preload="auto" />
          </motion.div>
        </motion.div>
        <motion.div variants={fadeRight}>
          <h2 className="text-3xl mb-3">Anuncios creados con IA listos para publicar.</h2>
          <p className="text-gray-700 mb-5">Te entregamos posts, anuncios y vídeos adaptados a tu negocio en 48 h.</p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Campañas para Instagram/Facebook desde 99 €</li>
            <li>• Textos y copies generados con IA</li>
            <li>• Vídeos que siguen tu estilo</li>
          </ul>
          <Button label="Quiero mis anuncios" href="#contacto" variant="primary" />
        </motion.div>
      </div>

      {/* BLOQUE 2: PRODUCTO - 4 IMÁGENES */}
      <div className="container grid md:grid-cols-2 gap-10 items-center mb-48">
        <motion.div variants={fadeRight}>
          <h2 className="text-3xl mb-3">Imágenes de producto para marcas sin presupuesto.</h2>
          <p className="text-gray-700 mb-5">Fotos profesionales de tus productos generadas con IA.</p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• 20 imágenes/mes desde 49 €</li>
            <li>• Fondos personalizados</li>
            <li>• Listas para e-commerce</li>
          </ul>
          <Button label="Quiero mis imágenes" href="#contacto" variant="primary" />
        </motion.div>
        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
          {images.slice(0, 4).map((img, i) => (
            <motion.div key={i} variants={fadeUp} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={img} alt="" className="w-full h-48 object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BLOQUE 3: PACKAGING - 4 IMÁGENES */}
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
          {images.slice(4, 8).map((img, i) => (
            <motion.div key={i} variants={fadeUp} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={img} alt="" className="w-full h-48 object-cover" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeRight}>
          <h2 className="text-3xl mb-3">Packaging y mockups generados con IA.</h2>
          <p className="text-gray-700 mb-5">Diseños de envases, etiquetas y mockups 3D para tus productos.</p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Diseños desde 79 €</li>
            <li>• Archivos print-ready</li>
            <li>• Mockups realistas</li>
          </ul>
          <Button label="Quiero mis mockups" href="#contacto" variant="primary" />
        </motion.div>
      </div>

       {/* CTA FINAL: Creative Lab */}
       <div className="container mt-16">
        <div className="flex justify-center">
          <Link
            href="/labs/creative"
            aria-label="Explorar Creative Lab"
            className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-6 py-3 text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
          >
            Explorar Creative Lab <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      
      {/* ESPACIO ABAJO - DOBLE */}
<div className="h-48"></div>
    </section>
    

    
  );
}