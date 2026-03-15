'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════════
   THREE.JS SCENE — ATMOSPHERE ONLY
   Particles + Grid + Lighting — NO procedural objects
   Camera descends Y=0 → Y=-18 on scroll
   ═══════════════════════════════════════════════════════════════ */

export default function ThreeScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x050508);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050508, 0.035);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 120);
        camera.position.set(0, 0, 7);

        function resize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }
        resize();
        window.addEventListener('resize', resize);

        // ─── LIGHTS ────────────────────────────────────
        scene.add(new THREE.AmbientLight(0x111133, 0.6));

        const cyanPt = new THREE.PointLight(0x00E5FF, 2.5, 35);
        cyanPt.position.set(4, 2, 5);
        scene.add(cyanPt);

        const purplePt = new THREE.PointLight(0x7B2FFF, 1.8, 30);
        purplePt.position.set(-5, -4, 4);
        scene.add(purplePt);

        const cyanPt2 = new THREE.PointLight(0x00E5FF, 1.5, 20);
        cyanPt2.position.set(-3, -10, 6);
        scene.add(cyanPt2);

        const purplePt2 = new THREE.PointLight(0x7B2FFF, 1.2, 20);
        purplePt2.position.set(4, -14, 5);
        scene.add(purplePt2);

        // ─── PARTICLES ─────────────────────────────────
        const PCOUNT = 1500;
        const ppos = new Float32Array(PCOUNT * 3);
        for (let i = 0; i < PCOUNT; i++) {
            ppos[i * 3] = (Math.random() - 0.5) * 60;
            ppos[i * 3 + 1] = (Math.random() - 0.5) * 60;
            ppos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
        }
        const pGeom = new THREE.BufferGeometry();
        pGeom.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
        const particles = new THREE.Points(
            pGeom,
            new THREE.PointsMaterial({
                color: 0x00E5FF,
                size: 0.04,
                transparent: true,
                opacity: 0.45,
                sizeAttenuation: true,
            })
        );
        scene.add(particles);

        // ─── GRID ──────────────────────────────────────
        const grid = new THREE.GridHelper(80, 80, 0x00E5FF, 0x0a0a1a);
        grid.position.set(0, -22, 0);
        (grid.material as THREE.Material).transparent = true;
        (grid.material as THREE.Material).opacity = 0.12;
        scene.add(grid);

        // ═══════════════════════════════════════════════
        // SCROLL + MOUSE
        // ═══════════════════════════════════════════════
        let targetCamY = 0, currentCamY = 0, mouseX = 0, mouseY2 = 0;

        const onMM = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY2 = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', onMM);

        const onScroll = () => {
            const frac = Math.min(1, window.scrollY / (document.body.scrollHeight - window.innerHeight));
            targetCamY = -frac * 18;
            const prog = document.getElementById('w4-progress');
            if (prog) prog.style.width = (frac * 100) + '%';

            // Activate service cards on scroll
            ['w4-c1', 'w4-c2', 'w4-c3'].forEach((id, i) => {
                const el = document.getElementById(id);
                if (el && window.scrollY > (i + 1) * window.innerHeight * 0.7) {
                    el.classList.add('w4-active');
                }
            });
        };
        window.addEventListener('scroll', onScroll);

        // ═══════════════════════════════════════════════
        // ANIMATION LOOP
        // ═══════════════════════════════════════════════
        const clock = new THREE.Clock();
        let animId: number;

        function loop() {
            animId = requestAnimationFrame(loop);
            const t = clock.getElapsedTime();

            currentCamY += (targetCamY - currentCamY) * 0.075;
            camera.position.y = currentCamY;
            camera.position.x = mouseX * 0.3;
            camera.lookAt(new THREE.Vector3(mouseX * 0.1, currentCamY, 0));

            particles.rotation.y = t * 0.015;
            particles.rotation.x = t * 0.005;

            // Pulsing lights
            cyanPt.intensity = 2.2 + Math.sin(t * 1.8) * 0.6;
            purplePt.intensity = 1.5 + Math.sin(t * 1.2 + 1) * 0.5;
            cyanPt2.intensity = 1.3 + Math.sin(t * 2.2 + 2) * 0.4;

            renderer.render(scene, camera);
        }
        loop();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMM);
            window.removeEventListener('scroll', onScroll);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w4-canvas-wrap">
            <canvas ref={canvasRef} />
        </div>
    );
}
