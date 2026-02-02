"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    PlusCircle,
    Box,
    Camera,
    Check,
    ChevronRight,
    Search,
    Bell,
    TrendingUp,
    Settings,
    Minus,
    Plus,
    Info,
    Footprints
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BronsonAppDemo() {
    const [activeTab, setActiveTab] = useState<"home" | "upload" | "stock">("home");

    return (
        <div className="relative mx-auto border-zinc-900 bg-white border-[14px] rounded-[3rem] h-[720px] w-[360px] shadow-2xl flex flex-col overflow-hidden">
            {/* Dynamic Status Bar - Light Mode */}
            <div className="h-[32px] w-full bg-white absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 pt-2">
                <span className="text-[12px] font-semibold text-black">9:41</span>
                <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
                    <div className="h-2.5 w-4 rounded-full bg-black"></div>
                </div>
            </div>

            {/* Notch Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28px] w-[120px] bg-black rounded-b-3xl z-30"></div>

            {/* Main Content Area - Light Mode Background */}
            <div className="flex-1 bg-white text-black pt-12 pb-20 overflow-y-auto overflow-x-hidden relative font-sans">
                {/* Header Logo Area */}
                <div className="flex flex-col items-center mb-6 pt-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-extrabold text-xl tracking-tighter text-black">BRONSON</span>
                        <Settings className="w-5 h-5 text-[#00c2cb] absolute right-6 top-14" />
                    </div>
                    <div className="flex items-center gap-1 -mt-2">
                        <span className="font-bold text-sm tracking-widest text-black">WLB</span>
                        <Footprints className="w-4 h-4 text-black transform -rotate-12" />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "home" && <HomeScreen key="home" />}
                    {activeTab === "upload" && <UploadScreen key="upload" setTab={setActiveTab} />}
                    {activeTab === "stock" && <StockScreen key="stock" />}
                </AnimatePresence>
            </div>

            {/* Bottom Navigation - Light Mode */}
            <div className="h-[80px] bg-white border-t border-gray-100 absolute bottom-0 w-full flex items-center justify-around px-4 z-20 pb-4 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
                <NavButton
                    icon={Home}
                    label="Inicio"
                    isActive={activeTab === "home"}
                    onClick={() => setActiveTab("home")}
                />
                <NavButton
                    icon={PlusCircle}
                    label=""
                    isActive={activeTab === "upload"}
                    onClick={() => setActiveTab("upload")}
                    isMain={true}
                />
                <NavButton
                    icon={Box}
                    label="Stock"
                    isActive={activeTab === "stock"}
                    onClick={() => setActiveTab("stock")}
                />
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-black rounded-full z-30"></div>
        </div>
    );
}

function NavButton({ icon: Icon, label, isActive, onClick, isMain = false }: any) {
    if (isMain) {
        return (
            <button
                onClick={onClick}
                className={`flex items-center justify-center -mt-8 transition-transform hover:scale-105 active:scale-95`}
            >
                <div className={`h-16 w-16 rounded-full flex items-center justify-center shadow-lg bg-[#00c2cb] text-white`}>
                    <Icon className="w-8 h-8" />
                </div>
            </button>
        );
    }
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors ${isActive ? 'text-[#00c2cb]' : 'text-gray-400 hover:text-gray-600'}`}
        >
            <Icon className="w-6 h-6" />
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}

function HomeScreen() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-6 space-y-6"
        >
            {/* Welcome */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Hola, Admin 👋</h2>
                <p className="text-gray-500 text-sm">Resumen de tu tienda hoy</p>
            </div>

            {/* Main Stats Card */}
            <div className="bg-gradient-to-br from-[#00c2cb] to-[#00a8b0] p-6 rounded-3xl shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                            <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium opacity-90">Ventas Totales</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl font-bold">485€</span>
                    </div>
                    <div className="flex items-center text-xs opacity-80 gap-2">
                        <span className="bg-white/20 px-2 py-0.5 rounded text-white font-bold">+12%</span>
                        <span>vs. ayer</span>
                    </div>
                </div>
            </div>

            {/* Alerts */}
            <div>
                <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Avisos</h3>
                <div className="space-y-3">
                    {[
                        { title: "Air Jordan 1", msg: "Stock bajo (2 un.)", color: "text-amber-500", bg: "bg-amber-50" },
                        { title: "Nike Dunk Low", msg: "Agotado", color: "text-red-500", bg: "bg-red-50" }
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between p-4 ${item.bg} rounded-2xl border border-transparent hover:border-gray-200 transition-all`}>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-gray-700">{item.title}</span>
                            </div>
                            <span className={`text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white shadow-sm ${item.color}`}>{item.msg}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function UploadScreen({ setTab }: { setTab: any }) {
    const [step, setStep] = useState(1);
    const [stock, setStock] = useState(10);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="px-6 h-full flex flex-col"
        >
            <h2 className="text-[22px] font-bold text-[#00c2cb] mb-6 text-center">Subir Nuevo Producto</h2>

            {step === 1 ? (
                <div className="flex-1 flex flex-col gap-5">

                    {/* Name Input */}
                    <div className="relative group">
                        <label className="text-xs font-bold text-gray-400 absolute -top-2 left-3 bg-white px-1">Nombre producto</label>
                        <div className="h-12 w-full rounded-2xl border-2 border-[#00c2cb]/30 flex items-center px-4 bg-gray-50 focus-within:border-[#00c2cb] focus-within:bg-white transition-all">
                            <input type="text" placeholder="Ej: Nike Air Max" className="bg-transparent border-none outline-none w-full text-gray-700 placeholder:text-gray-300 font-medium" />
                            <Info className="w-4 h-4 text-[#00c2cb]/50" />
                        </div>
                    </div>

                    {/* Price Input */}
                    <div className="relative group">
                        <label className="text-xs font-bold text-gray-400 absolute -top-2 left-3 bg-white px-1">Precio</label>
                        <div className="h-12 w-full rounded-2xl border-2 border-[#00c2cb]/30 flex items-center px-1 bg-gray-50 focus-within:border-[#00c2cb] focus-within:bg-white transition-all overflow-hidden">
                            <div className="h-full px-4 bg-[#00c2cb] flex items-center justify-center text-white font-bold rounded-l-lg mr-2">
                                €
                            </div>
                            <input type="text" placeholder="0.00" className="bg-transparent border-none outline-none w-full text-gray-700 placeholder:text-gray-300 font-medium" />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1 ml-2">Imp. incl.</p>
                    </div>

                    {/* Photo Area */}
                    <div className="h-32 rounded-3xl border-2 border-dashed border-[#00c2cb]/40 bg-[#00c2cb]/5 flex items-center justify-center gap-4 cursor-pointer hover:bg-[#00c2cb]/10 transition-colors relative overflow-hidden" onClick={() => setStep(2)}>
                        <Image
                            src="/images/bronson/sneaker-after.png"
                            alt="Sneaker Preview"
                            width={100}
                            height={60}
                            className="object-contain drop-shadow-md opacity-50 grayscale group-hover:grayscale-0 transition-all"
                        />
                        <div className="flex flex-col items-center z-10">
                            <div className="bg-[#00c2cb] p-2 rounded-full mb-1 shadow-md">
                                <Camera className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-bold text-[#00c2cb]">Añadir foto</span>
                            <span className="text-[9px] text-gray-400">Toca para seleccionar o tomar</span>
                        </div>
                    </div>

                    {/* Stock Control */}
                    <div>
                        <label className="text-sm font-bold text-gray-600 mb-2 block">Stock disponible</label>
                        <div className="flex items-center gap-3">
                            <button className="w-12 h-10 rounded-l-full rounded-r-xl bg-[#00c2cb] text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all" onClick={() => setStock(Math.max(0, stock - 1))}>
                                <Minus className="w-6 h-6" />
                            </button>
                            <div className="flex-1 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-xl text-gray-800 border border-gray-200">
                                {stock}
                            </div>
                            <button className="w-12 h-10 rounded-r-full rounded-l-xl bg-[#00c2cb] text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all" onClick={() => setStock(stock + 1)}>
                                <Plus className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Size Selector */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Talla / Size selector</label>
                            <span className="text-[10px] text-gray-400">Talla EU</span>
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                            {["38", "39", "40", "41", "42", "43", "44", "45"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all border ${selectedSize === size ? 'bg-[#00c2cb] text-white border-[#00c2cb] shadow-md scale-110' : 'bg-white text-gray-400 border-gray-200 hover:border-[#00c2cb]'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button className="w-full bg-[#1e9e58] hover:bg-[#188548] text-white font-bold h-14 rounded-2xl mt-auto shadow-lg shadow-[#1e9e58]/20 text-lg tracking-wide uppercase" onClick={() => setStep(2)}>
                        SUBIR PRODUCTO
                    </Button>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="w-24 h-24 bg-[#00c2cb]/10 rounded-full flex items-center justify-center text-[#00c2cb] mb-4">
                        <Check className="w-12 h-12" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Echo!</h3>
                        <p className="text-gray-500 text-sm max-w-[200px] mx-auto">Tu producto ya está publicado y listo para venderse.</p>
                    </div>
                    <Button variant="outline" className="border-gray-200 text-gray-500 hover:text-[#00c2cb] hover:bg-gray-50 h-12 px-8 rounded-xl font-medium" onClick={() => { setStep(1); setTab("stock"); }}>
                        Ver en catálogo
                    </Button>
                </div>
            )}
        </motion.div>
    );
}

function StockScreen() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="px-6 h-full flex flex-col"
        >
            <div className="flex items-center gap-3 mb-6 bg-gray-100 p-3 rounded-2xl border border-transparent focus-within:border-[#00c2cb] focus-within:bg-white transition-all shadow-sm">
                <Search className="w-5 h-5 text-gray-400 ml-1" />
                <input type="text" placeholder="Buscar producto..." className="bg-transparent border-none outline-none text-sm text-gray-700 w-full placeholder:text-gray-400" />
            </div>

            <div className="space-y-4 overflow-y-auto pb-24 scrollbar-none">
                {[
                    { name: "Nike Air Max 90", price: "140€", stock: 4 },
                    { name: "Adidas Forum Low", price: "110€", stock: 12 },
                    { name: "New Balance 550", price: "130€", stock: 1 },
                    { name: "Vans Old Skool", price: "75€", stock: 8 },
                    { name: "Converse Chuck 70", price: "90€", stock: 15 },
                    { name: "Jordan 1 Retro", price: "180€", stock: 3 },
                    { name: "Reebok Club C", price: "85€", stock: 9 }
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00c2cb]/30 transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center p-2 overflow-hidden relative border border-gray-100">
                                <Image
                                    src="/images/bronson/sneaker-after.png"
                                    alt="Sneaker"
                                    width={56}
                                    height={56}
                                    className="object-cover w-full h-full mix-blend-multiply"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800 group-hover:text-[#00c2cb] transition-colors">{item.name}</p>
                                <p className="text-xs text-gray-500 font-medium bg-gray-100/50 inline-block px-2 py-0.5 rounded-md mt-1">{item.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-end">
                                <span className={`text-base font-bold ${item.stock < 3 ? 'text-red-500' : 'text-gray-800'}`}>{item.stock}</span>
                                <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Stock</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#00c2cb] group-hover:text-white transition-colors">
                                <ChevronRight className="w-4 h-4 ml-0.5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
