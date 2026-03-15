'use client';

import React from 'react';

export default function InfluencerGenerator() {
    return (
        <div className="w-full h-full min-h-[900px] bg-black rounded-xl border border-[#333] overflow-hidden relative">
            <iframe
                src="https://creador-de-influencers-v1-159705655877.us-west1.run.app"
                className="w-full h-full min-h-[900px] border-0"
                title="Creador de Influencers IA"
                sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
                referrerPolicy="no-referrer"
                loading="lazy"
            />
        </div>
    );
}
