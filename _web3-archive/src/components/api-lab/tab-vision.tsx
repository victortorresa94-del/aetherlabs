'use client';

import React, { useState } from 'react';

const TabVision = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('Describe this image in detail');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const handleAnalyze = async () => {
        if (!image || !prompt || loading) return;
        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append('image', image);
        formData.append('prompt', prompt);

        try {
            const response = await fetch('/api/api-lab/vision', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            setResult(data.text);
        } catch (error) {
            console.error(error);
            setResult("Error analyzing image.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Input Side */}
            <div className="flex flex-col gap-4">
                <div
                    className={`
                        border-2 border-dashed border-white/10 rounded-xl h-64 flex flex-col items-center justify-center
                        cursor-pointer hover:border-[#82ff1f]/50 transition-colors bg-black/20 relative overflow-hidden
                    `}
                    onClick={() => document.getElementById('vision-upload')?.click()}
                >
                    {preview ? (
                        <img src={preview} alt="Preview" className="w-full h-full object-contain p-2" />
                    ) : (
                        <div className="text-zinc-500 text-center">
                            <span className="text-4xl block mb-2">📷</span>
                            <span className="text-sm font-mono">Upload Image</span>
                        </div>
                    )}
                    <input
                        id="vision-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs text-zinc-400 font-mono uppercase">Prompt / Question</label>
                    <textarea
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        className="bg-black/40 border border-white/10 rounded-lg p-3 text-white text-sm font-mono h-24 focus:ring-1 focus:ring-[#82ff1f] outline-none resize-none"
                    />
                </div>

                <button
                    onClick={handleAnalyze}
                    disabled={loading || !image}
                    className="bg-[#82ff1f] text-black py-3 rounded-lg font-bold hover:bg-[#72e01b] disabled:opacity-50 transition-colors font-mono uppercase tracking-wide"
                >
                    {loading ? 'Analyzing...' : 'Analyze with Gemini Pro'}
                </button>
            </div>

            {/* Output Side */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 overflow-y-auto font-mono text-sm text-zinc-300">
                {result ? (
                    <div className="whitespace-pre-wrap">{result}</div>
                ) : (
                    <div className="h-full flex items-center justify-center text-zinc-600 italic">
                        Result will appear here...
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabVision;
