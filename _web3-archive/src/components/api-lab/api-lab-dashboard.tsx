'use client'

import React, { useState } from 'react';
import TabChat from './tab-chat';
import TabVision from './tab-vision';
import TabImage from './tab-image';
import TabVideo from './tab-video';
import TabSpeech from './tab-speech';

type Tab = 'chat' | 'vision' | 'image' | 'video' | 'speech';

const ApiLabDashboard = () => {
    const [activeTab, setActiveTab] = useState<Tab>('chat');

    const tabs: { id: Tab; label: string; icon: string }[] = [
        { id: 'chat', label: 'Chat (Gemini)', icon: '💬' },
        { id: 'vision', label: 'Vision (OCR/Analyze)', icon: '👁️' },
        { id: 'image', label: 'Imagen (Gen)', icon: '🎨' },
        { id: 'video', label: 'Video (Veo)', icon: '🎥' },
        { id: 'speech', label: 'Speech (Audio)', icon: '🎙️' },
    ];

    return (
        <div className="flex flex-col h-full max-w-[1600px] mx-auto w-full p-6 md:p-8 gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#82ff1f] flex items-center justify-center text-black font-mono font-bold">
                        API
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white font-mono">LABORATORY</h1>
                </div>
                <p className="text-zinc-400 text-sm font-mono max-w-2xl">
                    Internal tool testing environment. Connected to Google Cloud Vertex AI & Gemini APIs.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 overflow-x-auto pb-1">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            px-4 py-2 rounded-t-lg text-sm font-mono font-medium transition-all flex items-center gap-2
                            ${activeTab === tab.id
                                ? 'bg-[#82ff1f] text-black border-t-2 border-[#82ff1f]'
                                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'}
                        `}
                    >
                        <span>{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/10 p-6 overflow-hidden flex flex-col relative backdrop-blur-sm">
                {activeTab === 'chat' && <TabChat />}
                {activeTab === 'vision' && <TabVision />}
                {activeTab === 'image' && <TabImage />}
                {activeTab === 'video' && <TabVideo />}
                {activeTab === 'speech' && <TabSpeech />}
            </div>
        </div>
    );
};

export default ApiLabDashboard;
