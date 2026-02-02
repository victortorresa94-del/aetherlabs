import React, { useState } from "react";
import { Check, Edit, Image as ImageIcon, Ruler, Search, ArrowRight, BrainCircuit, Smartphone, Globe, Sparkles, ChevronLeft, Info, AlertCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmailTicketMockup() {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* The Mockup Frame */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px]">

                {selectedItem === null ? (
                    <>
                        {/* Header mimicking the app */}
                        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
                            <h3 className="font-bold text-lg text-black">Borradores pendientes</h3>
                            <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                6 Pendientes de revisión
                            </div>
                        </div>

                        {/* Content List */}
                        <div className="bg-white min-h-[400px] p-6 space-y-4">

                            {/* Item 1 */}
                            <div
                                onClick={() => setSelectedItem(1)}
                                className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-start md:items-center hover:border-[#00c2cb] transition-colors group shadow-sm cursor-pointer"
                            >
                                {/* Image Placeholder */}
                                <div className="w-20 h-20 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 shrink-0 relative overflow-hidden">
                                    <ImageIcon className="w-6 h-6 mb-1" />
                                    <span className="text-[9px]">Sin foto</span>
                                    <div className="absolute inset-x-0 bottom-0 bg-red-500/10 text-red-500 text-[8px] font-bold text-center py-0.5">
                                        FALTA
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-900 truncate">Nike Air Jordan 1 Travis</h4>
                                        <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded border border-gray-200 uppercase tracking-wide">Borrador</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                                        <span className="flex items-center gap-1 bg-green-50 text-green-700 px-1.5 py-0.5 rounded border border-green-100">
                                            <Check className="w-3 h-3" /> Precio detectado
                                        </span>
                                        <span className="flex items-center gap-1 bg-red-50 text-red-600 px-1.5 py-0.5 rounded border border-red-100">
                                            <Ruler className="w-3 h-3" /> Falta talla
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-[#00c2cb] font-medium flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        Detectado desde ticket #FEB-024
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-2 w-full md:w-auto mt-2 md:mt-0">
                                    <button onClick={(e) => { e.stopPropagation(); setSelectedItem(1); }} className="flex-1 bg-black text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
                                        Revisar
                                    </button>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div
                                onClick={() => setSelectedItem(2)}
                                className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-start md:items-center hover:border-[#00c2cb] transition-colors group shadow-sm bg-gradient-to-r from-white to-[#00c2cb]/5 cursor-pointer"
                            >
                                {/* Image Placeholder */}
                                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/images/bronson/sneaker-after.png" alt="Sneaker" className="w-16 h-16 object-cover mix-blend-multiply opacity-80" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-900 truncate">Nike Dunk Low Panda</h4>
                                        <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded border border-gray-200 uppercase tracking-wide">Borrador</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                                        <span className="flex items-center gap-1 bg-green-50 text-green-700 px-1.5 py-0.5 rounded border border-green-100">
                                            <Check className="w-3 h-3" /> Datos completos
                                        </span>
                                        <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100">
                                            <ImageIcon className="w-3 h-3" /> Foto extraída
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-[#00c2cb] font-medium flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        Detectado desde ticket #FEB-024
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-2 w-full md:w-auto mt-2 md:mt-0">
                                    <button onClick={(e) => { e.stopPropagation(); setSelectedItem(2); }} className="flex-1 bg-black text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
                                        Revisar
                                    </button>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-start md:items-center hover:border-[#00c2cb] transition-colors group shadow-sm opacity-60">
                                {/* Info */}
                                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-gray-300">
                                    <ImageIcon className="w-8 h-8" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-900 truncate">Nike Air Jordan 4 Bred</h4>
                                        <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded border border-gray-200 uppercase tracking-wide">Borrador</span>
                                    </div>
                                    <p className="text-xs text-gray-400">Procesando datos...</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-[#00c2cb] border-t-transparent animate-spin"></div>
                            </div>

                        </div>

                        {/* Overlay Hint */}
                        <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-800 shadow-2xl scale-0 group-hover:scale-100 transition-all cursor-default pointer-events-none z-10 w-max">
                            <p className="text-white font-medium text-sm">Prueba a hacer click en un producto para ver el detalle</p>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 rotate-45 border-b border-r border-zinc-800"></div>
                        </div>
                    </>
                ) : (
                    <div className="bg-white h-full min-h-[500px] flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                        {/* Detail Header */}
                        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
                            <button onClick={() => setSelectedItem(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-sm font-medium text-gray-600">
                                <ChevronLeft className="w-5 h-5" />
                                Volver
                            </button>
                            <h3 className="font-bold text-lg text-black">Revisar Producto</h3>
                            <div className="w-8"></div> {/* Spacer */}
                        </div>

                        {/* Detail Content */}
                        <div className="p-6 md:p-10 flex-1 overflow-y-auto">
                            <div className="max-w-2xl mx-auto space-y-8">

                                {/* AI Header Analysis */}
                                <div className="bg-[#00c2cb]/5 border border-[#00c2cb]/20 rounded-2xl p-4 flex items-start gap-3">
                                    <div className="bg-[#00c2cb]/10 p-2 rounded-lg text-[#00c2cb] shrink-0">
                                        <BrainCircuit className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">Datos extraídos del ticket #FEB-024</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Hemos detectado el modelo, precio y stock automáticamente. Falta confirmar tallas e imágenes.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Left Column: Images */}
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Imágenes del producto</label>

                                        {selectedItem === 1 ? (
                                            <div className="aspect-square bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-6 hover:border-[#00c2cb] hover:bg-[#00c2cb]/5 transition-colors cursor-pointer group">
                                                <div className="bg-gray-200 rounded-full p-4 mb-3 group-hover:scale-110 transition-transform">
                                                    <Camera className="w-8 h-8 text-gray-400 group-hover:text-[#00c2cb]" />
                                                </div>
                                                <p className="text-sm font-bold text-gray-900 mb-1">Falta imagen</p>
                                                <p className="text-xs text-gray-500 max-w-[200px]">El ticket no incluía imagen válida. Toca para subir o buscar.</p>
                                            </div>
                                        ) : (
                                            <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden relative group border border-gray-100">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src="/images/bronson/sneaker-after.png" alt="Sneaker" className="w-full h-full object-cover mix-blend-multiply" />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <Button variant="secondary" size="sm" className="font-bold">Cambiar foto</Button>
                                                </div>
                                                <div className="absolute top-3 left-3 bg-[#00c2cb] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                                    Foto extraída
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column: Form Data */}
                                    <div className="space-y-6">
                                        {/* Name Field - Auto Filled */}
                                        <div className="relative group">
                                            <div className="absolute -top-2.5 left-2 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100 flex items-center gap-1">
                                                <Check className="w-3 h-3" /> Extraído del ticket
                                            </div>
                                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl group-hover:border-gray-300 transition-colors">
                                                <label className="text-xs text-gray-400 font-bold mb-1 block">Nombre del modelo</label>
                                                <input type="text" value={selectedItem === 1 ? "Nike Air Jordan 1 Travis" : "Nike Dunk Low Panda"} readOnly className="w-full bg-transparent font-bold text-gray-900 outline-none text-lg" />
                                            </div>
                                        </div>

                                        {/* Price Analysis Block */}
                                        <div className="relative group p-4 bg-gray-50 border border-gray-200 rounded-2xl group-hover:border-gray-300 transition-colors">
                                            <div className="absolute -top-2.5 left-2 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100 flex items-center gap-1">
                                                <Check className="w-3 h-3" /> Precio compra detectado
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-4 border-b border-gray-200 pb-4">
                                                <div>
                                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1 block">Precio Compra</label>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-xl font-bold text-gray-900">{selectedItem === 1 ? "75.00" : "60.00"}</span>
                                                        <span className="text-sm text-gray-400 font-bold">€</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1 block">Margen Est.</label>
                                                    <div className="flex items-baseline gap-1 text-green-600">
                                                        <span className="text-xl font-bold">+{selectedItem === 1 ? "54.00" : "50.00"}</span>
                                                        <span className="text-sm font-bold">€</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-[10px] text-[#00c2cb] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                                    <Sparkles className="w-3 h-3" />
                                                    Precio Venta Recomendado
                                                </label>
                                                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-2xl font-bold text-gray-900">{selectedItem === 1 ? "129.00" : "110.00"}</span>
                                                        <span className="text-sm text-gray-400 font-bold">€</span>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">Editable</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Size Field - NEEDS ATTENTION */}
                                        <div className="relative group">
                                            {selectedItem === 1 ? (
                                                <div className="absolute -top-2.5 left-2 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded border border-red-100 flex items-center gap-1 animate-pulse">
                                                    <AlertCircle className="w-3 h-3" /> Requiere atención
                                                </div>
                                            ) : (
                                                <div className="absolute -top-2.5 left-2 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100 flex items-center gap-1">
                                                    <Check className="w-3 h-3" /> Tallas detectadas
                                                </div>
                                            )}

                                            <div className={`p-4 rounded-2xl border transition-colors ${selectedItem === 1 ? 'bg-red-50/30 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                                                <label className={`text-xs font-bold mb-3 block ${selectedItem === 1 ? 'text-red-500' : 'text-gray-400'}`}>
                                                    {selectedItem === 1 ? "Selecciona Tallas (No detectadas)" : "Stock por Talla"}
                                                </label>

                                                <div className="flex flex-wrap gap-2">
                                                    {["38", "39", "40", "41", "42", "43", "44"].map((size) => (
                                                        <button
                                                            key={size}
                                                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${(selectedItem === 2 && ["40", "41", "42"].includes(size))
                                                                ? 'bg-[#00c2cb] text-white shadow-md shadow-[#00c2cb]/20'
                                                                : 'bg-white border border-gray-200 text-gray-400 hover:border-[#00c2cb] hover:text-[#00c2cb]'
                                                                }`}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                                {selectedItem === 1 && (
                                                    <p className="text-[10px] text-red-500 mt-2 font-medium flex items-center gap-1">
                                                        <Info className="w-3 h-3" />
                                                        El ticket no especifica tallas. Selecciónalas para continuar.
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100 flex gap-4">
                                    <Button className="flex-1 bg-black hover:bg-zinc-800 text-white font-bold h-12 rounded-xl">
                                        Publicar en Web
                                    </Button>
                                    <Button variant="outline" className="flex-1 border-gray-200 text-gray-500 h-12 rounded-xl">
                                        Guardar cambios
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Connection Lines & Hints below mockup */}
            <div className="grid grid-cols-2 gap-4 mt-6 opacity-60 hover:opacity-100 transition-opacity">
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 flex items-start gap-3">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500 mt-1">
                        <Ruler className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-zinc-300 text-sm font-bold mb-1">Avisos inteligentes</p>
                        <p className="text-zinc-500 text-xs">Te avisa si el ticket no especificaba talla o color.</p>
                    </div>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 flex items-start gap-3">
                    <div className="p-2 bg-[#00c2cb]/10 rounded-lg text-[#00c2cb] mt-1">
                        <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-zinc-300 text-sm font-bold mb-1">Fotos automáticas</p>
                        <p className="text-zinc-500 text-xs">Intenta recortar la foto del ticket o busca referencia.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
