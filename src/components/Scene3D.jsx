import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

const AnimatedSphere = () => {
    const meshRef = useRef();
    const [scale, setScale] = React.useState(2.4);

    React.useEffect(() => {
        const updateScale = () => {
            if (window.innerWidth <= 768) {
                setScale(1.5); // Smaller on mobile
            } else if (window.innerWidth <= 992) {
                setScale(1.8); // Medium on tablet
            } else {
                setScale(2.4); // Full size on desktop
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.15; // Slower, more majestic rotation
        meshRef.current.rotation.y = t * 0.25;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 128, 128]} scale={scale} ref={meshRef}>
                <MeshDistortMaterial
                    color="#FF6B00"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                    bumpScale={0.005}
                    clearcoat={1.0}
                    clearcoatRoughness={0.1}
                    radius={1}
                    envMapIntensity={2.5}
                />
            </Sphere>
        </Float>
    );
};

const Scene3D = ({ enableControls = true }) => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: false, stencil: false, depth: false }}>
                <color attach="background" args={['#050505']} />

                {/* Lighting Setup */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ff4400" />

                {/* Main Object */}
                <AnimatedSphere />

                {/* Environment & Background */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Environment preset="city" />

                {/* Post Processing Effects */}
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.2} mipmapBlur intensity={0.5} radius={0.5} />
                    <Noise opacity={0.025} />
                    <Vignette eskil={false} offset={0.1} darkness={0.9} />
                </EffectComposer>

                {/* Controls */}
                {enableControls && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
                {!enableControls && <OrbitControls enableZoom={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />}
            </Canvas>
        </div>
    );
};

export default Scene3D;
