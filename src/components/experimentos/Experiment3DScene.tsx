'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float, Environment, RoundedBox,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import * as THREE from 'three';

const ORANGE = '#FF6B35';

// ─── Shared lights ────────────────────────────────────────────────────────────

function Lights() {
  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 4]}  intensity={2.4} color="#FFF0E0" />
      <directionalLight position={[-4, 1, -3]} intensity={0.7} color="#D0DFFF" />
    </>
  );
}

// ─── 01 Bamba Stock ───────────────────────────────────────────────────────────
// Phone mockup. App móvil para catálogo de zapatillas.

function BambaScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.45) * 0.55;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.28) * 0.09;
  });

  return (
    <>
      <Lights />
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Phone body */}
          <RoundedBox args={[1.35, 2.7, 0.18]} radius={0.14} smoothness={8}>
            <meshPhysicalMaterial
              color={ORANGE}
              metalness={0.92}
              roughness={0.04}
              clearcoat={1}
              clearcoatRoughness={0.01}
            />
          </RoundedBox>
          {/* Screen */}
          <RoundedBox args={[1.02, 2.22, 0.02]} radius={0.09} smoothness={6} position={[0, 0.06, 0.1]}>
            <meshPhysicalMaterial color="#080808" roughness={0.08} metalness={0.15} />
          </RoundedBox>
          {/* App grid — 4 icons */}
          {[[-0.28, 0.55], [0.28, 0.55], [-0.28, 0.0], [0.28, 0.0]].map(([x, y], i) => (
            <RoundedBox key={i} args={[0.34, 0.34, 0.015]} radius={0.06} smoothness={4} position={[x, y, 0.12]}>
              <meshPhysicalMaterial color={ORANGE} metalness={0.1} roughness={0.3} transparent opacity={0.55} />
            </RoundedBox>
          ))}
          {/* Camera dot */}
          <mesh position={[0, 1.2, 0.11]}>
            <circleGeometry args={[0.055, 20]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Home bar */}
          <RoundedBox args={[0.38, 0.045, 0.01]} radius={0.02} smoothness={4} position={[0, -1.15, 0.11]}>
            <meshStandardMaterial color="#2a2a2a" />
          </RoundedBox>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 02 Artiverse ─────────────────────────────────────────────────────────────
// Laptop. Email outreach, automatización de contactos.

function LaptopScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.38) * 0.42;
  });

  return (
    <>
      <Lights />
      <Float speed={1.1} floatIntensity={0.3} rotationIntensity={0}>
        <group ref={groupRef} position={[0, -0.3, 0]}>
          {/* Base / teclado */}
          <RoundedBox args={[2.6, 0.12, 1.75]} radius={0.06} smoothness={6} position={[0, 0, 0]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.9} roughness={0.06} clearcoat={1} clearcoatRoughness={0.02} />
          </RoundedBox>
          {/* Teclado lines */}
          {[-0.5, 0, 0.5].map((z, i) => (
            <mesh key={i} position={[0, 0.07, z]}>
              <boxGeometry args={[1.9, 0.008, 0.06]} />
              <meshBasicMaterial color="#2a1800" transparent opacity={0.5} />
            </mesh>
          ))}
          {/* Trackpad */}
          <RoundedBox args={[0.7, 0.008, 0.48]} radius={0.04} smoothness={4} position={[0, 0.065, 0.6]}>
            <meshPhysicalMaterial color="#2a1800" roughness={0.2} metalness={0.2} transparent opacity={0.55} />
          </RoundedBox>
          {/* Pantalla — bisagra en parte trasera */}
          <group position={[0, 0.06, -0.875]} rotation={[-1.15, 0, 0]}>
            {/* Lid */}
            <RoundedBox args={[2.6, 1.7, 0.1]} radius={0.08} smoothness={6} position={[0, 0.85, 0]}>
              <meshPhysicalMaterial color={ORANGE} metalness={0.9} roughness={0.06} clearcoat={1} clearcoatRoughness={0.02} />
            </RoundedBox>
            {/* Screen glass */}
            <RoundedBox args={[2.28, 1.42, 0.02]} radius={0.06} smoothness={6} position={[0, 0.85, 0.055]}>
              <meshPhysicalMaterial color="#050505" roughness={0.05} metalness={0.1} />
            </RoundedBox>
            {/* Email rows */}
            {[1.32, 1.08, 0.84, 0.60, 0.36].map((y, i) => (
              <mesh key={i} position={[i % 2 === 0 ? -0.15 : 0.1, y, 0.068]}>
                <boxGeometry args={[i % 3 === 0 ? 1.6 : 0.9, 0.042, 0.005]} />
                <meshBasicMaterial color={ORANGE} transparent opacity={0.28} />
              </mesh>
            ))}
            {/* Unread dot */}
            <mesh position={[-0.88, 1.32, 0.068]}>
              <circleGeometry args={[0.055, 16]} />
              <meshBasicMaterial color={ORANGE} transparent opacity={0.9} />
            </mesh>
          </group>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 03 Suma Salut ────────────────────────────────────────────────────────────
// Phone con burbujas de chat. Chatbot clínica 24/7.

function SumaScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.5;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.25) * 0.07;
  });

  // chat bubble positions [x, y, isUser, width]
  const bubbles: [number, number, boolean, number][] = [
    [-0.12, 0.82, false, 0.72],
    [ 0.14, 0.46, true,  0.58],
    [-0.08, 0.10, false, 0.80],
    [ 0.18, -0.26, true, 0.52],
  ];

  return (
    <>
      <Lights />
      <Float speed={1.3} floatIntensity={0.38} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Phone body */}
          <RoundedBox args={[1.28, 2.6, 0.17]} radius={0.13} smoothness={8}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.9} roughness={0.05} clearcoat={1} clearcoatRoughness={0.01} />
          </RoundedBox>
          {/* Screen */}
          <RoundedBox args={[0.98, 2.14, 0.02]} radius={0.08} smoothness={6} position={[0, 0.05, 0.095]}>
            <meshPhysicalMaterial color="#080808" roughness={0.08} metalness={0.12} />
          </RoundedBox>
          {/* Chat bubbles */}
          {bubbles.map(([x, y, isUser, w], i) => (
            <RoundedBox key={i} args={[w, 0.2, 0.018]} radius={0.08} smoothness={4}
              position={[x + (isUser ? 0.12 : -0.12), y, 0.108]}>
              <meshPhysicalMaterial
                color={isUser ? ORANGE : '#1e1e1e'}
                metalness={0.05} roughness={0.35}
                transparent opacity={isUser ? 0.85 : 0.7}
              />
            </RoundedBox>
          ))}
          {/* Camera */}
          <mesh position={[0, 1.15, 0.1]}>
            <circleGeometry args={[0.05, 16]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Home bar */}
          <RoundedBox args={[0.35, 0.04, 0.01]} radius={0.02} smoothness={4} position={[0, -1.1, 0.1]}>
            <meshStandardMaterial color="#2a2a2a" />
          </RoundedBox>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 04 Bramer ────────────────────────────────────────────────────────────────
// Tablet horizontal. ERP técnico, partes por voz.

function TabletScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.42) * 0.5;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.27) * 0.08;
  });

  return (
    <>
      <Lights />
      <Float speed={1.1} floatIntensity={0.32} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Tablet body */}
          <RoundedBox args={[2.9, 2.05, 0.16]} radius={0.1} smoothness={8}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.9} roughness={0.05} clearcoat={1} clearcoatRoughness={0.015} />
          </RoundedBox>
          {/* Screen */}
          <RoundedBox args={[2.52, 1.72, 0.02]} radius={0.07} smoothness={6} position={[0, 0, 0.09]}>
            <meshPhysicalMaterial color="#060606" roughness={0.07} metalness={0.1} />
          </RoundedBox>
          {/* Form rows — partes de servicio */}
          {[0.58, 0.28, -0.02, -0.32, -0.62].map((y, i) => (
            <group key={i} position={[0, y, 0.102]}>
              {/* Label */}
              <mesh position={[-0.9, 0, 0]}>
                <boxGeometry args={[0.55, 0.055, 0.004]} />
                <meshBasicMaterial color={ORANGE} transparent opacity={0.3} />
              </mesh>
              {/* Input field */}
              <mesh position={[0.3, 0, 0]}>
                <boxGeometry args={[1.1, 0.12, 0.004]} />
                <meshBasicMaterial color="#1a1a1a" transparent opacity={0.9} />
              </mesh>
              {/* Filled value (orange, some rows) */}
              {i < 3 && (
                <mesh position={[0.3, 0, 0.003]}>
                  <boxGeometry args={[0.7 - i * 0.1, 0.045, 0.002]} />
                  <meshBasicMaterial color={ORANGE} transparent opacity={0.55} />
                </mesh>
              )}
            </group>
          ))}
          {/* Mic button bottom-right */}
          <mesh position={[0.98, -0.72, 0.102]}>
            <circleGeometry args={[0.16, 24]} />
            <meshBasicMaterial color={ORANGE} transparent opacity={0.85} />
          </mesh>
          {/* Power button on right edge */}
          <RoundedBox args={[0.06, 0.28, 0.08]} radius={0.03} smoothness={4} position={[1.48, 0.4, 0]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.8} roughness={0.1} />
          </RoundedBox>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 05 Bonito Sound ──────────────────────────────────────────────────────────
// Nudo de vidrio. Rediseño web. Escultura sonora.

function BonitoScene() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * 0.32;
    ref.current.rotation.x += d * 0.12;
    ref.current.rotation.z += d * 0.06;
  });

  return (
    <>
      <Lights />
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.9, 0.32, 200, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          transmission={1}
          roughness={0}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          color={ORANGE}
        />
      </mesh>
      <Environment preset="apartment" />
    </>
  );
}

// ─── 06 Musikeo ───────────────────────────────────────────────────────────────
// Auriculares. Marketplace de músicos y material técnico.

function HeadphonesScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.44) * 0.55;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.29) * 0.12;
  });

  return (
    <>
      <Lights />
      <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Headband arc — half torus */}
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[1.05, 0.1, 24, 100, Math.PI]} />
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.06} clearcoat={1} clearcoatRoughness={0.02} />
          </mesh>
          {/* Left ear cup — body */}
          <mesh position={[-1.05, 0, 0]}>
            <cylinderGeometry args={[0.44, 0.44, 0.22, 40]} />
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.06} clearcoat={1} clearcoatRoughness={0.02} />
          </mesh>
          {/* Left cushion ring */}
          <mesh position={[-1.05, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.36, 0.09, 20, 60]} />
            <meshPhysicalMaterial color="#1a0a00" metalness={0.1} roughness={0.7} />
          </mesh>
          {/* Right ear cup — body */}
          <mesh position={[1.05, 0, 0]}>
            <cylinderGeometry args={[0.44, 0.44, 0.22, 40]} />
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.06} clearcoat={1} clearcoatRoughness={0.02} />
          </mesh>
          {/* Right cushion ring */}
          <mesh position={[1.05, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.36, 0.09, 20, 60]} />
            <meshPhysicalMaterial color="#1a0a00" metalness={0.1} roughness={0.7} />
          </mesh>
          {/* Driver grille — left */}
          <mesh position={[-1.05, 0, -0.12]}>
            <circleGeometry args={[0.28, 32]} />
            <meshBasicMaterial color={ORANGE} transparent opacity={0.3} />
          </mesh>
          {/* Driver grille — right */}
          <mesh position={[1.05, 0, -0.12]}>
            <circleGeometry args={[0.28, 32]} />
            <meshBasicMaterial color={ORANGE} transparent opacity={0.3} />
          </mesh>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 07 Restaurante IA ────────────────────────────────────────────────────────
// Phone con chat. Agente WhatsApp para hostelería.

function RestauranteScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.41) * 0.52;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.26) * 0.08;
  });

  const bubbles: [number, number, boolean, number][] = [
    [-0.08, 0.75, false, 0.68],
    [ 0.12, 0.42, true,  0.54],
    [-0.14, 0.09, false, 0.75],
    [ 0.08, -0.24, true, 0.46],
    [-0.06, -0.57, false, 0.62],
  ];

  return (
    <>
      <Lights />
      <Float speed={1.3} floatIntensity={0.36} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Phone body */}
          <RoundedBox args={[1.32, 2.65, 0.17]} radius={0.13} smoothness={8}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.92} roughness={0.04} clearcoat={1} clearcoatRoughness={0.01} />
          </RoundedBox>
          {/* Screen */}
          <RoundedBox args={[1.0, 2.2, 0.02]} radius={0.08} smoothness={6} position={[0, 0.05, 0.095]}>
            <meshPhysicalMaterial color="#060606" roughness={0.07} metalness={0.12} />
          </RoundedBox>
          {/* WhatsApp-style header bar */}
          <RoundedBox args={[1.0, 0.22, 0.018]} radius={0.04} smoothness={4} position={[0, 1.0, 0.106]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.1} roughness={0.4} transparent opacity={0.7} />
          </RoundedBox>
          {/* Chat bubbles */}
          {bubbles.map(([x, y, isUser, w], i) => (
            <RoundedBox key={i} args={[w, 0.19, 0.016]} radius={0.07} smoothness={4}
              position={[x + (isUser ? 0.14 : -0.14), y, 0.106]}>
              <meshPhysicalMaterial
                color={isUser ? ORANGE : '#1c1c1c'}
                metalness={0.04} roughness={0.4}
                transparent opacity={isUser ? 0.88 : 0.72}
              />
            </RoundedBox>
          ))}
          {/* Camera */}
          <mesh position={[0, 1.17, 0.1]}>
            <circleGeometry args={[0.052, 16]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Home bar */}
          <RoundedBox args={[0.36, 0.04, 0.01]} radius={0.02} smoothness={4} position={[0, -1.12, 0.1]}>
            <meshStandardMaterial color="#2a2a2a" />
          </RoundedBox>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 08 Asesoría Inteligente ──────────────────────────────────────────────────
// Maletín ejecutivo. CRM, expedientes, gestión documental.

function BriefcaseScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.38) * 0.48;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.22) * 0.06;
  });

  return (
    <>
      <Lights />
      <Float speed={1.1} floatIntensity={0.35} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Body */}
          <RoundedBox args={[2.2, 1.55, 0.6]} radius={0.1} smoothness={8}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.07} clearcoat={1} clearcoatRoughness={0.02} />
          </RoundedBox>
          {/* Center divider line */}
          <mesh position={[0, 0, 0.305]}>
            <boxGeometry args={[2.22, 0.025, 0.01]} />
            <meshBasicMaterial color="#1a0a00" transparent opacity={0.6} />
          </mesh>
          {/* Clasp left */}
          <RoundedBox args={[0.22, 0.14, 0.08]} radius={0.04} smoothness={4} position={[-0.38, 0, 0.32]}>
            <meshPhysicalMaterial color="#cc5520" metalness={0.96} roughness={0.04} />
          </RoundedBox>
          {/* Clasp right */}
          <RoundedBox args={[0.22, 0.14, 0.08]} radius={0.04} smoothness={4} position={[0.38, 0, 0.32]}>
            <meshPhysicalMaterial color="#cc5520" metalness={0.96} roughness={0.04} />
          </RoundedBox>
          {/* Handle arc — half torus */}
          <mesh position={[0, 0.775, 0.12]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.42, 0.07, 20, 80, Math.PI]} />
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.07} clearcoat={1} />
          </mesh>
          {/* Glass front panel */}
          <RoundedBox args={[1.85, 1.2, 0.04]} radius={0.07} smoothness={6} position={[0, 0, 0.32]}>
            <MeshTransmissionMaterial
              backside={false}
              samples={4}
              transmission={0.7}
              roughness={0.02}
              thickness={0.06}
              ior={1.45}
              chromaticAberration={0.02}
              color={ORANGE}
            />
          </RoundedBox>
          {/* Doc lines visible through glass */}
          {[0.32, 0.1, -0.12, -0.34].map((y, i) => (
            <mesh key={i} position={[i % 2 === 0 ? -0.12 : 0.08, y, 0.34]}>
              <boxGeometry args={[i % 3 === 0 ? 1.2 : 0.7, 0.038, 0.004]} />
              <meshBasicMaterial color={ORANGE} transparent opacity={0.2} />
            </mesh>
          ))}
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 09 Cannabis Club Tech ────────────────────────────────────────────────────
// Tarjeta ID con scan line animada. OCR, alta de socios.

function IDCardScene() {
  const groupRef = useRef<THREE.Group>(null);
  const scanRef  = useRef<THREE.Mesh>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.5;
    if (scanRef.current) {
      // scan line oscillates top → bottom
      scanRef.current.position.y = Math.sin(s.clock.elapsedTime * 1.4) * 0.62;
    }
  });

  return (
    <>
      <Lights />
      <Float speed={1.2} floatIntensity={0.38} rotationIntensity={0}>
        <group ref={groupRef}>
          {/* Card body */}
          <RoundedBox args={[2.55, 1.62, 0.12]} radius={0.1} smoothness={8}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.07} clearcoat={1} clearcoatRoughness={0.02} />
          </RoundedBox>
          {/* Glass overlay */}
          <RoundedBox args={[2.55, 1.62, 0.04]} radius={0.1} smoothness={8} position={[0, 0, 0.08]}>
            <MeshTransmissionMaterial
              backside={false}
              samples={4}
              transmission={0.75}
              roughness={0.02}
              thickness={0.05}
              ior={1.45}
              chromaticAberration={0.015}
              color={ORANGE}
            />
          </RoundedBox>
          {/* Photo placeholder */}
          <RoundedBox args={[0.55, 0.72, 0.02]} radius={0.06} smoothness={4} position={[-0.85, 0.02, 0.1]}>
            <meshPhysicalMaterial color="#1a0a00" roughness={0.3} metalness={0.1} transparent opacity={0.8} />
          </RoundedBox>
          {/* Text lines */}
          {[0.44, 0.22, 0.0, -0.22].map((y, i) => (
            <mesh key={i} position={[0.35, y, 0.11]}>
              <boxGeometry args={[i === 0 ? 1.0 : 0.65, 0.045, 0.005]} />
              <meshBasicMaterial color={ORANGE} transparent opacity={0.3} />
            </mesh>
          ))}
          {/* Scan line */}
          <mesh ref={scanRef} position={[0, 0, 0.115]}>
            <boxGeometry args={[2.4, 0.025, 0.005]} />
            <meshBasicMaterial color={ORANGE} transparent opacity={0.9} />
          </mesh>
          {/* Scan glow plane */}
          <mesh ref={undefined} position={[0, 0, 0.114]}>
            <planeGeometry args={[2.4, 0.1]} />
            <meshBasicMaterial color={ORANGE} transparent opacity={0.08} />
          </mesh>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── 10 Aura ──────────────────────────────────────────────────────────────────
// Monitor con stand. Presencia digital, marca personal.

function AuraScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((s) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.35) * 0.4;
  });

  return (
    <>
      <Lights />
      <Float speed={1.0} floatIntensity={0.3} rotationIntensity={0}>
        <group ref={groupRef} position={[0, 0.1, 0]}>
          {/* Monitor bezel */}
          <RoundedBox args={[2.8, 1.85, 0.18]} radius={0.08} smoothness={8}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.9} roughness={0.06} clearcoat={1} clearcoatRoughness={0.02} />
          </RoundedBox>
          {/* Screen */}
          <RoundedBox args={[2.48, 1.52, 0.02]} radius={0.05} smoothness={6} position={[0, 0.04, 0.1]}>
            <meshPhysicalMaterial color="#050505" roughness={0.06} metalness={0.08} />
          </RoundedBox>
          {/* Webpage content — hero block */}
          <RoundedBox args={[2.2, 0.52, 0.015]} radius={0.04} smoothness={4} position={[0, 0.36, 0.115]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.08} roughness={0.4} transparent opacity={0.22} />
          </RoundedBox>
          {/* Text lines */}
          {[0.08, -0.12, -0.32].map((y, i) => (
            <mesh key={i} position={[i % 2 === 0 ? -0.1 : 0.15, y, 0.115]}>
              <boxGeometry args={[i === 0 ? 1.6 : 0.9, 0.045, 0.005]} />
              <meshBasicMaterial color={ORANGE} transparent opacity={0.25} />
            </mesh>
          ))}
          {/* CTA button shape */}
          <RoundedBox args={[0.52, 0.16, 0.015]} radius={0.05} smoothness={4} position={[-0.72, -0.52, 0.115]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.1} roughness={0.3} transparent opacity={0.75} />
          </RoundedBox>
          {/* Neck */}
          <mesh position={[0, -1.08, -0.02]}>
            <cylinderGeometry args={[0.08, 0.12, 0.52, 24]} />
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.08} clearcoat={1} />
          </mesh>
          {/* Base */}
          <RoundedBox args={[1.05, 0.08, 0.52]} radius={0.04} smoothness={6} position={[0, -1.35, -0.02]}>
            <meshPhysicalMaterial color={ORANGE} metalness={0.88} roughness={0.08} clearcoat={1} />
          </RoundedBox>
        </group>
      </Float>
      <Environment preset="studio" />
    </>
  );
}

// ─── Scene selector ───────────────────────────────────────────────────────────

function SceneContent({ id, animationType }: { id: string; animationType: string }) {
  void animationType;
  switch (id) {
    case 'bamba-stock':          return <BambaScene />;
    case 'artiverse':            return <LaptopScene />;
    case 'suma-salut':           return <SumaScene />;
    case 'bramer':               return <TabletScene />;
    case 'bonito-sound':         return <BonitoScene />;
    case 'musikeo':              return <HeadphonesScene />;
    case 'restaurante-ia':       return <RestauranteScene />;
    case 'asesoria-inteligente': return <BriefcaseScene />;
    case 'cannabis-club':        return <IDCardScene />;
    case 'aura':                 return <AuraScene />;
    default:                     return <BambaScene />;
  }
}

// ─── Export ───────────────────────────────────────────────────────────────────

interface Props {
  id: string;
  geometry: string;
  animationType: string;
  accentColor: string;
  particleCount?: number;
}

export default function Experiment3DScene({ id, animationType }: Props) {
  const [mounted, setMounted] = useState(false);
  const [inView,  setInView]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    const el = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div ref={containerRef} style={{ width: '100%', aspectRatio: '1/1', maxHeight: 440 }}>
      {mounted && inView && (
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <SceneContent id={id} animationType={animationType} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
