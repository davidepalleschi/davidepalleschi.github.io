"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

interface StarFieldProps {
    config: {
        count: number;
        size: number;
        minRadius: number;
        maxRadius: number;
        color: string;
        rotationSpeed: number;
        cursorInfluence: number;
    };
}

function StarField({ config }: StarFieldProps) {
    const ref = useRef<any>(null);
    const [clicked, setClicked] = useState(false);

    // Re-generate sphere positions when config changes
    const sphere = useMemo(() => {
        const positions = new Float32Array(config.count * 3);
        const { minRadius, maxRadius } = config;

        for (let i = 0; i < config.count; i++) {
            const r = minRadius + Math.random() * (maxRadius - minRadius);
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, [config.count, config.minRadius, config.maxRadius]);

    // Store original positions for "home" returning
    const originalPositions = useMemo(() => sphere.slice(), [sphere]);

    useFrame((state, delta) => {
        if (ref.current) {
            const positions = ref.current.geometry.attributes.position.array;

            // 1. Get Mouse in World Space (Z=0 plane)
            const mx = (state.pointer.x * state.viewport.width) / 2;
            const my = (state.pointer.y * state.viewport.height) / 2;

            // 2. Transform into Local Space
            const mouseVec = new THREE.Vector3(mx, my, 0);
            ref.current.worldToLocal(mouseVec);

            // Physics params
            for (let i = 0; i < config.count; i++) {
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                const px = positions[ix];
                const py = positions[iy];
                const pz = positions[iz];

                const ox = originalPositions[ix];
                const oy = originalPositions[iy];
                const oz = originalPositions[iz];

                // 1. Spring force to original position (Home)
                const dx = ox - px;
                const dy = oy - py;
                const dz = oz - pz;

                positions[ix] += dx * delta * 2.0;
                positions[iy] += dy * delta * 2.0;
                positions[iz] += dz * delta * 2.0;

                // 2. Mouse Interaction: Soft "Repulsion" / Displace
                const distSq = (px - mouseVec.x) ** 2 + (py - mouseVec.y) ** 2 + (pz - mouseVec.z) ** 2;

                if (distSq < 4.0) {
                    const dist = Math.sqrt(distSq);
                    const force = (4.0 - distSq) * delta * 1.0;

                    // Direction: From Mouse TO Particle (Repulsion)
                    const dirX = (px - mouseVec.x) / (dist || 0.1);
                    const dirY = (py - mouseVec.y) / (dist || 0.1);
                    const dirZ = (pz - mouseVec.z) / (dist || 0.1);

                    // Push in true 3D direction
                    positions[ix] += dirX * force;
                    positions[iy] += dirY * force;
                    positions[iz] += dirZ * force;
                }
            }
            ref.current.geometry.attributes.position.needsUpdate = true;

            // Cursor Influence on Rotation
            // Use config.cursorInfluence instead of hardcoded 0.5
            const x = state.pointer.y * config.cursorInfluence;
            const y = state.pointer.x * config.cursorInfluence;

            // Updated Rotation Logic: Use Slider Config
            ref.current.rotation.x -= delta * config.rotationSpeed;
            ref.current.rotation.y -= delta * config.rotationSpeed * 0.8;

            ref.current.rotation.x -= x * delta;
            ref.current.rotation.y -= y * delta;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} onClick={() => setClicked(!clicked)}>
                <PointMaterial
                    transparent
                    color={clicked ? "#aa88ff" : config.color}
                    size={config.size}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
            <mesh
                visible={false}
                onClick={() => setClicked(!clicked)}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerOut={() => document.body.style.cursor = 'auto'}
            >
                <sphereGeometry args={[2, 16, 16]} />
                <meshBasicMaterial />
            </mesh>
        </group>
    );
}

export function HeroBackground() {
    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState({
        count: 1500,
        size: 0.025,
        minRadius: 1.5,
        maxRadius: 7.0,
        rotationSpeed: 0.08, // Adjusted to 0.08 as 0.8 would be extremely fast based on delta
        cursorInfluence: 0.1,
        color: "#ffffff"
    });

    return (
        <>
            <div className="absolute inset-0 z-0 h-full w-full bg-background pointer-events-auto">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <StarField config={config} />
                </Canvas>
            </div>

            {/* Float Controls */}
            <div className="absolute top-24 right-4 z-50 flex flex-col items-end gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-white/10"
                >
                    <Icons.settings className="h-5 w-5" />
                </Button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="w-72 rounded-xl border border-white/10 bg-black/80 p-4 backdrop-blur-md text-white shadow-2xl overflow-y-auto max-h-[80vh]"
                        >
                            <h3 className="mb-4 font-semibold text-sm uppercase tracking-wider text-gray-400">Animation Settings</h3>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>Rotation Speed</span>
                                        <span className="text-gray-400">{config.rotationSpeed.toFixed(2)}</span>
                                    </div>
                                    <Slider
                                        defaultValue={[config.rotationSpeed]}
                                        max={0.5}
                                        min={0}
                                        step={0.01}
                                        onValueChange={(v) => setConfig(prev => ({ ...prev, rotationSpeed: v[0] }))}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>Cursor Influence</span>
                                        <span className="text-gray-400">{config.cursorInfluence.toFixed(1)}</span>
                                    </div>
                                    <Slider
                                        defaultValue={[config.cursorInfluence]}
                                        max={2.0}
                                        min={0}
                                        step={0.1}
                                        onValueChange={(v) => setConfig(prev => ({ ...prev, cursorInfluence: v[0] }))}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>Particles</span>
                                        <span className="text-gray-400">{config.count}</span>
                                    </div>
                                    <Slider
                                        defaultValue={[config.count]}
                                        max={10000}
                                        min={100}
                                        step={100}
                                        onValueChange={(v) => setConfig(prev => ({ ...prev, count: v[0] }))}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>Size</span>
                                        <span className="text-gray-400">{config.size.toFixed(3)}</span>
                                    </div>
                                    <Slider
                                        defaultValue={[config.size]}
                                        max={0.05}
                                        min={0.001}
                                        step={0.001}
                                        onValueChange={(v) => setConfig(prev => ({ ...prev, size: v[0] }))}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>Min Radius</span>
                                        <span className="text-gray-400">{config.minRadius.toFixed(1)}</span>
                                    </div>
                                    <Slider
                                        defaultValue={[config.minRadius]}
                                        max={5}
                                        min={0}
                                        step={0.1}
                                        onValueChange={(v) => setConfig(prev => ({ ...prev, minRadius: v[0] }))}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>Max Radius</span>
                                        <span className="text-gray-400">{config.maxRadius.toFixed(1)}</span>
                                    </div>
                                    <Slider
                                        defaultValue={[config.maxRadius]}
                                        max={10}
                                        min={1}
                                        step={0.1}
                                        onValueChange={(v) => setConfig(prev => ({ ...prev, maxRadius: v[0] }))}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
