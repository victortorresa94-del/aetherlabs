'use client';

import React, { useState, useRef } from 'react';

const TabSpeech = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [loading, setLoading] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = async () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                await handleTranscribe(blob);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Mic error:", error);
            alert("Could not access microphone");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }
    };

    const handleTranscribe = async (audioBlob: Blob) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', audioBlob);

            const response = await fetch('/api/api-lab/speech', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            setTranscript(data.transcription);
        } catch (error) {
            console.error(error);
            setTranscript("Error transcribing audio.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-[500px] gap-8">
            <div className={`
                w-32 h-32 rounded-full flex items-center justify-center border-4 transition-all duration-300
                ${isRecording
                    ? 'border-red-500 bg-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.5)]'
                    : 'border-zinc-700 bg-zinc-800 hover:border-[#82ff1f] hover:bg-[#82ff1f]/10 cursor-pointer'}
            `}
                onClick={isRecording ? stopRecording : startRecording}
            >
                <div className={`text-4xl ${isRecording ? 'text-red-500 animate-pulse' : 'text-zinc-400'}`}>
                    {isRecording ? '⏹' : '🎙'}
                </div>
            </div>

            <p className="text-zinc-500 font-mono text-sm">
                {isRecording ? 'Listening... Tap to stop' : 'Tap mic to record'}
            </p>

            {loading && <p className="text-[#82ff1f] font-mono text-xs animate-pulse">Transcribing...</p>}

            {transcript && (
                <div className="w-full max-w-xl bg-black/40 border border-white/10 rounded-xl p-6 text-center">
                    <p className="text-white font-serif text-lg italic">"{transcript}"</p>
                </div>
            )}
        </div>
    );
};

export default TabSpeech;
