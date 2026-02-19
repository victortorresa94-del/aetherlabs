'use client';


import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    Environment,
    MeshDistortMaterial,
    PointMaterial,
    Points,
    useGLTF
} from '@react-three/drei';
import * as THREE from 'three';

const FlubyEyes = ({ isHovered = false }) => {
    const eyesRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (eyesRef.current) {
            const t = state.clock.getElapsedTime();
            // Subtle eye blinking or movement
            eyesRef.current.scale.y = 0.8 + Math.sin(t * 2) * 0.1;
        }
    });

    return (
        <group ref={eyesRef} position={[0, 0.2, 0.8]}>
            {/* Left Eye */}
            <mesh position={[-0.3, 0, 0]}>
                <sphereGeometry args={[0.08, 32, 32]} />
                <meshStandardMaterial color="#000" roughness={0} />
            </mesh>
            {/* Right Eye */}
            <mesh position={[0.3, 0, 0]}>
                <sphereGeometry args={[0.08, 32, 32]} />
                <meshStandardMaterial color="#000" roughness={0} />
            </mesh>
            {/* Glow for eyes */}
            <pointLight position={[0, 0, 0.2]} intensity={0.5} color="#82ff1f" />
        </group>
    );
};

// Original Flubby Design (Green Ball) - Preserved
const FlubyBody = ({ isCrystal = false, isHovered = false }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();

            // Interaction: Rotate slightly towards mouse
            const hoverFactor = isHovered ? 1.0 : 0.2;
            const targetRotY = mouse.current.x * 0.4 * hoverFactor;
            const targetRotX = -mouse.current.y * 0.3 * hoverFactor;

            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.08);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.08);

            // Dynamic scale for "breathing" effect
            const s = (isHovered ? 1.3 : 1.15) + Math.sin(time * 2) * 0.04;
            meshRef.current.scale.set(s, s, s);
        }
    });

    return (
        <mesh ref={meshRef} position={[0, -0.3, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color="#82ff1f"
                emissive="#0a1a02"
                emissiveIntensity={1}
                roughness={0.05}
                metalness={0.1}
                distort={isHovered ? 0.25 : 0.1}
                speed={isHovered ? 2 : 1.0}
                transparent
                opacity={0.95}
                side={THREE.DoubleSide}
            />
            <FlubyEyes isHovered={isHovered} />
        </mesh>
    );
};

// New Weebo Design (3D Model)
const WeeboModel = ({ isHovered = false }) => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/weebo-3d.glb');
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            const time = state.clock.getElapsedTime();

            // Interaction: Rotate slightly towards mouse
            const hoverFactor = isHovered ? 1.0 : 0.3;
            // Adjust rotation intensity as needed for the model
            const targetRotY = mouse.current.x * 0.5 * hoverFactor;
            const targetRotX = -mouse.current.y * 0.3 * hoverFactor;

            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.08);

            // Breathing effect (scale)
            const baseScale = 2.0; // Adjust base scale if model is too small/big
            const s = (isHovered ? baseScale * 1.1 : baseScale) + Math.sin(time * 2) * 0.05;
            groupRef.current.scale.set(s, s, s);
        }
    });

    return (
        <group ref={groupRef} position={[0, -0.5, 0]}> {/* Adjusted position to center it */}
            <primitive object={scene} />
        </group>
    );
}

const ParticleSystem = ({ isHovered = false }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 150;

    const [positions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 2.0 + Math.random() * 2.0;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return [pos];
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#82ff1f"
                size={0.05}
                sizeAttenuation
                depthWrite={false}
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};


// Error Boundary to handle missing or broken 3D models gracefully
class ModelErrorBoundary extends React.Component<{ fallback: React.ReactNode, children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error("3D Model failed to load:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export const Fluby3D = ({ isCrystal = false, isHovered = false, onClick = () => { } }) => {
    return (
        <div className="w-full h-full pointer-events-auto">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 35 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} color="#82ff1f" intensity={1} />
                <pointLight position={[0, 5, 5]} intensity={0.8} />

                <React.Suspense fallback={null}>
                    <Environment preset="night" />
                    <Float speed={3} rotationIntensity={0.6} floatIntensity={0.6}>
                        <group onClick={(e) => { e.stopPropagation(); onClick(); }}>
                            <ModelErrorBoundary fallback={<FlubyBody isCrystal={isCrystal} isHovered={isHovered} />}>
                                <WeeboModel isHovered={isHovered} />
                            </ModelErrorBoundary>
                            <ParticleSystem isHovered={isHovered} />
                        </group>
                    </Float>
                </React.Suspense>
            </Canvas>
        </div >
    );
};
