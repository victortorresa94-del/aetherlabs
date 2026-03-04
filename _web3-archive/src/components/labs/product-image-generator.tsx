'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Wand2, Loader2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function ProductImageGenerator() {
    const [image, setImage] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
                setGeneratedImage(null);
                setError(null);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
        },
        maxFiles: 1,
    });

    const handleGenerate = async () => {
        if (!image) return;

        setLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            // Extract base64 data (remove "data:image/xxx;base64," prefix)
            const base64Data = image.split(',')[1];

            const response = await fetch('/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image: base64Data,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al generar la imagen');
            }

            if (data.success && data.image) {
                setGeneratedImage(`data:image/png;base64,${data.image}`);
            } else {
                throw new Error('No se recibió ninguna imagen');
            }
        } catch (err) {
            console.error('Error:', err);
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    const clearImage = () => {
        setImage(null);
        setGeneratedImage(null);
        setError(null);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-light text-white mb-2">Estudio de Producto IA</h3>
                            <p className="text-[#a0a0a0]">Sube una foto de tu producto y deja que la IA cree una escena profesional.</p>
                        </div>
                        {image && !loading && (
                            <button
                                onClick={clearImage}
                                className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors text-[#808080] hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Input Section */}
                        <div className="space-y-6">
                            {!image ? (
                                <div
                                    {...getRootProps()}
                                    className={`
                    aspect-square rounded-xl border-2 border-dashed transition-all duration-200 flex flex-col items-center justify-center cursor-pointer
                    ${isDragActive
                                            ? 'border-white bg-white/5'
                                            : 'border-[#2a2a2a] hover:border-[#4a4a4a] hover:bg-[#1a1a1a]'
                                        }
                  `}
                                >
                                    <input {...getInputProps()} />
                                    <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4">
                                        <Upload className="w-8 h-8 text-[#808080]" />
                                    </div>
                                    <p className="text-white font-medium mb-1">Arrastra tu imagen aquí</p>
                                    <p className="text-sm text-[#666]">o haz clic para seleccionar</p>
                                </div>
                            ) : (
                                <div className="relative aspect-square rounded-xl overflow-hidden border border-[#2a2a2a] group">
                                    <Image
                                        src={image}
                                        alt="Original"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <p className="text-white font-medium">Imagen Original</p>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleGenerate}
                                disabled={!image || loading}
                                className={`
                  w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2
                  ${!image || loading
                                        ? 'bg-[#1a1a1a] text-[#4a4a4a] cursor-not-allowed'
                                        : 'bg-white text-black hover:scale-[1.02]'
                                    }
                `}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Generando magia...
                                    </>
                                ) : (
                                    <>
                                        <Wand2 className="w-4 h-4" />
                                        Generar Escena
                                    </>
                                )}
                            </button>

                            {error && (
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                    {error}
                                </div>
                            )}
                        </div>

                        {/* Output Section */}
                        <div className="relative aspect-square rounded-xl border border-[#2a2a2a] bg-[#050505] overflow-hidden flex items-center justify-center">
                            {generatedImage ? (
                                <div className="relative w-full h-full group">
                                    <Image
                                        src={generatedImage}
                                        alt="Generated"
                                        fill
                                        className="object-cover"
                                    />
                                    <a
                                        href={generatedImage}
                                        download="generated-product.png"
                                        className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                                    >
                                        Descargar
                                    </a>
                                </div>
                            ) : (
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mx-auto mb-4">
                                        <ImageIcon className="w-8 h-8 text-[#2a2a2a]" />
                                    </div>
                                    <p className="text-[#4a4a4a] text-sm">
                                        La imagen generada aparecerá aquí
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
