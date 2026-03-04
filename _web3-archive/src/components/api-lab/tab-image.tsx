'use client';

import React, { useState } from 'react';

const TabImage = () => {
    const [prompt, setPrompt] = useState('A futuristic city with flying cars, neon lights, cyberpunk style, high detail, 8k');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt || loading) return;
        setLoading(true);
        setImage(null);

        try {
            const response = await fetch('/api/api-lab/image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            if (data.image) setImage(data.image);
        } catch (error) {
            console.error(error);
            alert("Error generating image");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-zinc-400 font-mono uppercase">Image Prompt</label>
                    <textarea
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        className="bg-black/40 border border-white/10 rounded-lg p-3 text-white text-sm font-mono h-32 focus:ring-1 focus:ring-[#82ff1f] outline-none resize-none"
                    />
                </div>
                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="bg-[#82ff1f] text-black py-3 rounded-lg font-bold hover:bg-[#72e01b] disabled:opacity-50 transition-colors font-mono uppercase tracking-wide"
                >
                    {loading ? 'Generating...' : 'Generate with Imagen 3'}
                </button>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl flex items-center justify-center p-4 relative overflow-hidden min-h-[300px]">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                        <div className="w-8 h-8 border-4 border-[#82ff1f] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                {image ? (
                    <img src={image} alt="Generated" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                ) : (
                    <div className="text-zinc-600 font-mono text-sm italic">
                        Generated image will appear here
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabImage;
