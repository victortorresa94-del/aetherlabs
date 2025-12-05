"use client";

import React, { useEffect, useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FilesetResolver, HandLandmarker, DrawingUtils } from '@mediapipe/tasks-vision';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Camera,
    Hand,
    Palette,
    Sparkles,
    Heart,
    Globe,
    Flower2,
    Loader2,
    Maximize2,
    Minimize2,
    RefreshCw
} from 'lucide-react';

// --- Types ---

type HandState = {
    detected: boolean;
    isOpen: boolean;
    position: { x: number; y: number; z: number };
    pinchDistance: number;
};

type ParticleTemplate = 'galaxy' | 'heart' | 'flower' | 'saturn' | 'fireworks';

interface ParticleSystemProps {
    handState: HandState;
    color: string;
    template: ParticleTemplate;
}

// --- Particle Systems ---

function Particles({ handState, color, template }: ParticleSystemProps) {
    const points = useRef<THREE.Points>(null!);
    const [count, setCount] = useState(5000);

    // Generate initial positions based on template
    const initialPositions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const baseColor = new THREE.Color(color);

        for (let i = 0; i < count; i++) {
            let x = 0, y = 0, z = 0;

            if (template === 'galaxy') {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 5;
                const spiral = 2;
                x = Math.cos(angle * spiral) * radius;
                y = (Math.random() - 0.5) * 2;
                z = Math.sin(angle * spiral) * radius;
            } else if (template === 'heart') {
                // Heart shape formula
                const t = Math.random() * Math.PI * 2;
                const r = Math.sqrt(Math.random()); // Uniform distribution in circle, modified for heart
                // x = 16sin^3(t)
                // y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)
                const scale = 0.15;
                x = 16 * Math.pow(Math.sin(t), 3) * scale * r;
                y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale * r;
                z = (Math.random() - 0.5) * 2;
            } else if (template === 'saturn') {
                if (Math.random() > 0.3) {
                    // Ring
                    const angle = Math.random() * Math.PI * 2;
                    const radius = 3 + Math.random() * 2;
                    x = Math.cos(angle) * radius;
                    z = Math.sin(angle) * radius;
                    y = (Math.random() - 0.5) * 0.2;
                } else {
                    // Planet
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    const radius = 1.5;
                    x = radius * Math.sin(phi) * Math.cos(theta);
                    y = radius * Math.sin(phi) * Math.sin(theta);
                    z = radius * Math.cos(phi);
                }
            } else if (template === 'flower') {
                const k = 5; // petals
                const theta = Math.random() * Math.PI * 2;
                const r = Math.cos(k * theta) + 2;
                x = r * Math.cos(theta);
                y = r * Math.sin(theta);
                z = (Math.random() - 0.5) * 2;
            } else {
                // Random / Fireworks
                x = (Math.random() - 0.5) * 10;
                y = (Math.random() - 0.5) * 10;
                z = (Math.random() - 0.5) * 10;
            }

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            colors[i * 3] = baseColor.r;
            colors[i * 3 + 1] = baseColor.g;
            colors[i * 3 + 2] = baseColor.b;
        }
        return { positions, colors };
    }, [count, template, color]);

    // Update positions in real-time
    useFrame((state) => {
        if (!points.current) return;

        const time = state.clock.getElapsedTime();
        const positions = points.current.geometry.attributes.position.array as Float32Array;

        // Interaction Logic
        const targetScale = handState.detected ? (handState.isOpen ? 2.0 : 0.5) : 1.0;
        const targetX = handState.detected ? (handState.position.x - 0.5) * 10 : 0;
        const targetY = handState.detected ? -(handState.position.y - 0.5) * 10 : 0; // Invert Y

        // Lerp logic could go here for smooth transitions of the whole group
        points.current.rotation.y = time * 0.1;

        // Individual particle movement
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Original positions (we should store them to return to shape)
            const ox = initialPositions.positions[i3];
            const oy = initialPositions.positions[i3 + 1];
            const oz = initialPositions.positions[i3 + 2];

            // Apply scale based on hand state (open = expand, closed = contract)
            let x = ox * targetScale;
            let y = oy * targetScale;
            let z = oz * targetScale;

            // Add some noise/movement
            if (handState.detected && !handState.isOpen) {
                // Jitter when closed (high energy)
                x += (Math.random() - 0.5) * 0.2;
                y += (Math.random() - 0.5) * 0.2;
                z += (Math.random() - 0.5) * 0.2;
            } else {
                // Flow when open
                y += Math.sin(time + x) * 0.05;
            }

            // Follow hand position slightly
            if (handState.detected) {
                x += targetX * 0.2;
                y += targetY * 0.2;
            }

            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;
        }

        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={points} positions={initialPositions.positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

// --- Main Component ---

export default function ComputerVisionLab() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [handLandmarker, setHandLandmarker] = useState<HandLandmarker | null>(null);
    const [webcamRunning, setWebcamRunning] = useState(false);
    const [loading, setLoading] = useState(true);

    // State
    const [handState, setHandState] = useState<HandState>({
        detected: false,
        isOpen: true,
        position: { x: 0.5, y: 0.5, z: 0 },
        pinchDistance: 0
    });

    const [template, setTemplate] = useState<ParticleTemplate>('galaxy');
    const [color, setColor] = useState('#82ff1f'); // Default neon green
    const [showControls, setShowControls] = useState(true);

    // Initialize Mediapipe
    useEffect(() => {
        const initHandLandmarker = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
                );
                const landmarker = await HandLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                });
                setHandLandmarker(landmarker);
                setLoading(false);
            } catch (error) {
                console.error("Error initializing hand landmarker:", error);
                setLoading(false);
            }
        };
        initHandLandmarker();
    }, []);

    // Start Webcam
    const enableCam = async () => {
        if (!handLandmarker) return;

        if (webcamRunning) {
            setWebcamRunning(false);
            return;
        }

        const constraints = { video: true };
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.addEventListener("loadeddata", predictWebcam);
                setWebcamRunning(true);
            }
        } catch (err) {
            console.error("Error accessing webcam:", err);
        }
    };

    // Prediction Loop
    const lastVideoTime = useRef(-1);
    const requestRef = useRef<number>(0);

    const predictWebcam = () => {
        if (videoRef.current && handLandmarker) {
            let startTimeMs = performance.now();
            if (lastVideoTime.current !== videoRef.current.currentTime) {
                lastVideoTime.current = videoRef.current.currentTime;
                const results = handLandmarker.detectForVideo(videoRef.current, startTimeMs);

                if (results.landmarks && results.landmarks.length > 0) {
                    const landmarks = results.landmarks[0];

                    // Calculate if hand is open or closed
                    // Simple heuristic: distance between wrist (0) and finger tips (8, 12, 16, 20)
                    const wrist = landmarks[0];
                    const indexTip = landmarks[8];
                    const middleTip = landmarks[12];
                    const ringTip = landmarks[16];
                    const pinkyTip = landmarks[20];

                    const tips = [indexTip, middleTip, ringTip, pinkyTip];
                    let avgDist = 0;
                    tips.forEach(tip => {
                        const d = Math.sqrt(
                            Math.pow(tip.x - wrist.x, 2) +
                            Math.pow(tip.y - wrist.y, 2) +
                            Math.pow(tip.z - wrist.z, 2)
                        );
                        avgDist += d;
                    });
                    avgDist /= 4;

                    // Threshold for open/closed (needs tuning)
                    const isOpen = avgDist > 0.3; // Normalized coordinates

                    setHandState({
                        detected: true,
                        isOpen,
                        position: { x: landmarks[9].x, y: landmarks[9].y, z: landmarks[9].z }, // Use middle finger knuckle as center
                        pinchDistance: avgDist
                    });

                } else {
                    setHandState(prev => ({ ...prev, detected: false }));
                }
            }
            requestRef.current = requestAnimationFrame(predictWebcam);
        }
    };

    useEffect(() => {
        if (webcamRunning) {
            requestRef.current = requestAnimationFrame(predictWebcam);
        } else {
            cancelAnimationFrame(requestRef.current);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [webcamRunning, handLandmarker]);


    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans">

            {/* --- 3D Scene --- */}
            <div className="absolute inset-0 z-10">
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                    <color attach="background" args={['#050505']} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                        <Particles handState={handState} color={color} template={template} />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
            </div>

            {/* --- Webcam Preview (Hidden or Small) --- */}
            <div className="absolute top-4 right-4 z-50 w-32 h-24 bg-black/50 rounded-lg overflow-hidden border border-white/10">
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className={`w-full h-full object-cover transform -scale-x-100 ${webcamRunning ? 'opacity-100' : 'opacity-0'}`}
                />
                {!webcamRunning && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xs">
                        Camera Off
                    </div>
                )}
            </div>

            {/* --- UI Overlay --- */}
            <div className="absolute inset-0 z-40 pointer-events-none">
                {/* Header */}
                <div className="absolute top-0 left-0 p-8">
                    <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                        <Sparkles className="text-[#82ff1f]" />
                        Computer Vision Lab
                    </h1>
                    <p className="text-white/50 text-sm mt-1 max-w-md">
                        Controla las partículas con tus manos. Abre tu mano para expandir, cierra para contraer.
                    </p>
                </div>

                {/* Controls Panel */}
                <div className="absolute bottom-8 left-8 pointer-events-auto">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-[320px] shadow-2xl">

                        {/* Camera Toggle */}
                        <button
                            onClick={enableCam}
                            disabled={loading}
                            className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide mb-6 transition-all flex items-center justify-center gap-2
                     ${webcamRunning
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30'
                                    : 'bg-[#82ff1f] text-black hover:bg-[#6ed61a] shadow-[0_0_20px_rgba(130,255,31,0.3)]'
                                }
                     ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                   `}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Camera size={18} />}
                            {loading ? 'INITIALIZING...' : (webcamRunning ? 'DETENER CÁMARA' : 'ACTIVAR CÁMARA')}
                        </button>

                        {/* Templates */}
                        <div className="mb-6">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 block">Plantillas</label>
                            <div className="grid grid-cols-5 gap-2">
                                {[
                                    { id: 'galaxy', icon: Sparkles },
                                    { id: 'heart', icon: Heart },
                                    { id: 'flower', icon: Flower2 },
                                    { id: 'saturn', icon: Globe },
                                    { id: 'fireworks', icon: RefreshCw },
                                ].map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTemplate(t.id as ParticleTemplate)}
                                        className={`aspect-square rounded-lg flex items-center justify-center transition-all border
                              ${template === t.id
                                                ? 'bg-white/10 border-white text-white'
                                                : 'bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white'
                                            }
                            `}
                                    >
                                        <t.icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Colors */}
                        <div>
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 block">Color</label>
                            <div className="flex gap-2">
                                {['#82ff1f', '#ff0055', '#00ccff', '#ffcc00', '#ffffff'].map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setColor(c)}
                                        className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110
                              ${color === c ? 'border-white scale-110' : 'border-transparent'}
                            `}
                                        style={{ backgroundColor: c }}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
                    <div className={`px-4 py-2 rounded-full border backdrop-blur-md flex items-center gap-3 transition-colors
                ${handState.detected
                            ? 'bg-green-500/20 border-green-500/50 text-green-400'
                            : 'bg-white/5 border-white/10 text-white/40'
                        }
             `}>
                        <Hand size={16} />
                        <span className="text-xs font-bold tracking-wider">
                            {handState.detected ? 'MANO DETECTADA' : 'ESPERANDO MANO...'}
                        </span>
                    </div>

                    {handState.detected && (
                        <div className="text-white/30 text-[10px] font-mono">
                            {handState.isOpen ? 'ESTADO: ABIERTO' : 'ESTADO: CERRADO'}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
