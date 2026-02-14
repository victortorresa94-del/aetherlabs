'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FlubyEntity = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const coreRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.4;
            meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.3;
            // Organic "Blobby" scale/breathing
            const s = 1.1 + Math.sin(time * 2.5) * 0.08;
            meshRef.current.scale.set(s, s * (1 + Math.sin(time * 4) * 0.04), s);
        }
        if (coreRef.current) {
            coreRef.current.scale.setScalar(0.6 + Math.sin(time * 5) * 0.1);
        }
    });

    return (
        <group>
            {/* 0. Internal Bio-Luminescent Core */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#82ff1f" />
            </mesh>

            {/* 1. The Jelly Body (Semi-transparent, Distorted) */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[1, 128, 128]} />
                <MeshDistortMaterial
                    color="#82ff1f"
                    speed={6}
                    distort={0.75}
                    radius={1}
                    roughness={0}
                    metalness={0.5}
                    emissive="#82ff1f"
                    emissiveIntensity={0.6} // Reduced to keep the green saturated, not white
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* 2. Glassy Shell (Reflections & Gloss) */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhysicalMaterial
                    color="#82ff1f"
                    transparent
                    opacity={0.3}
                    transmission={0.95}
                    thickness={1.5}
                    roughness={0}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    ior={1.45}
                />
            </mesh>

            {/* 3. Core Point Lights */}
            <pointLight position={[0, 0, 0]} color="#82ff1f" intensity={25} distance={5} />
            <pointLight position={[2, 2, 2]} color="#ffffff" intensity={5} distance={10} />
        </group>
    );
};

const OrbitingParticles = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 70;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const radius = 1.3 + Math.random() * 0.8;
            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.006;
            pointsRef.current.rotation.x += 0.004;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#82ff1f"
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.9}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

export const FlubyCore = () => {
    return (
        <div className="w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 4], fov: 40 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} color="#82ff1f" intensity={1} />

                <Float
                    speed={3.5}
                    rotationIntensity={1.2}
                    floatIntensity={2}
                >
                    <FlubyEntity />
                    <OrbitingParticles />
                </Float>
            </Canvas>
        </div>
    );
};
