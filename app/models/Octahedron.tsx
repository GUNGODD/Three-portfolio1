"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { motion } from "framer-motion-3d"; // Import Framer Motion for 3D
import * as THREE from "three";
import { Experience } from "./charecterExperience";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";

const ChracterMesh = () => {
  const ExpRef = useRef<THREE.Mesh>(null!);

  return (
    <motion.mesh
      animate={{
        y: [-0.5, 0.5],
      }}
      transition={{
        duration: 4, // Adjusted duration for smoother movement
        ease: "easeInOut", // Smooth easing for transitions
        times: [0, 0.5, 1], // Timeline control
        repeat: Infinity, // Keep the animation running infinitely
        repeatType: "reverse", // Reverses the direction smoothly without stopping
      }}
      ref={ExpRef}
      scale={3}
    >
      <Sparkles count={20} color="white" size={8} />

      <Experience />
    </motion.mesh>
  );
};

export const CharacterCanvas = () => {
  return (
    <>
      <Canvas shadows>
        <ChracterMesh />

        <Environment preset="city" />
      </Canvas>
    </>
  );
};

function RotatingOctahedron() {
  const myMeshRef = useRef<THREE.Mesh>(null!);

  // Rotate the octahedron
  useFrame(() => {
    if (myMeshRef.current) {
      myMeshRef.current.rotation.x += 0.01;
      myMeshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <motion.mesh
        ref={myMeshRef}
        whileHover={{ scale: 1.8 }}
        transition={{ duration: 0.3 }}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshNormalMaterial />
      </motion.mesh>
    </>
  );
}

export default function OctahedronExperience() {
  return (
    <Canvas>
      <RotatingOctahedron />
    </Canvas>
  );
}
