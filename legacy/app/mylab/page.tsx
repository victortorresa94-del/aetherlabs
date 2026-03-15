'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import HeaderNavigation from '@/components/sections/header-navigation';

const GlassBox = ({ children, label }: { children: React.ReactNode, label: string }) => {
    return (
        <div className="relative group bg-white p-4 h-[400px] flex flex-col">
            <div className="flex-1 w-full relative">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <Suspense fallback={null}>
                        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                            {children}
                        </Float>
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>
            <div className="bg-black text-white p-4 mt-auto">
                <span className="text-xs font-mono uppercase tracking-widest">{label}</span>
            </div>
        </div>
    );
};

const RotatingSphere = () => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.5;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    });
    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshDistortMaterial
                color="#82ff1f"
                speed={2}
                distort={0.4}
                radius={1}
            />
        </mesh>
    );
};

const GlassDiamond = () => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.8;
    });
    return (
        <mesh ref={mesh} rotation={[0.5, 0.5, 0]}>
            <octahedronGeometry args={[1.8, 0]} />
            <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={3}
                chromaticAberration={0.02}
                anisotropy={0.1}
                distortion={0}
                distortionScale={0}
                temporalDistortion={0}
                color="#ffffff"
            />
        </mesh>
    );
};

const GlossyCube = () => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.4;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    });
    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhysicalMaterial
                color="#111"
                roughness={0.1}
                metalness={0.8}
                reflectivity={1}
                clearcoat={1}
            />
        </mesh>
    );
};

const AbstractFluid = () => {
    return (
        <mesh>
            <torusKnotGeometry args={[1, 0.4, 256, 32]} />
            <MeshDistortMaterial
                color="#fff"
                speed={5}
                distort={0.5}
                radius={1}
            />
        </mesh>
    );
};

export default function MyLab() {
    return (
        <main className="min-h-screen bg-[#f5f5f5] selection:bg-[#82ff1f] selection:text-black">
            <HeaderNavigation />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase">
                            Services
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        <GlassBox label="Brand">
                            <RotatingSphere />
                        </GlassBox>

                        <GlassBox label="Website">
                            <GlossyCube />
                        </GlassBox>

                        <GlassBox label="Product">
                            <GlassDiamond />
                        </GlassBox>

                        <GlassBox label="Creative">
                            <AbstractFluid />
                        </GlassBox>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-500">
                        Aether Labs // Kinetic Experiments v1.0
                    </p>
                </div>
            </section>
        </main>
    );
}
