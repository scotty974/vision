import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Torus } from "@react-three/drei";
import * as THREE from 'three';

function Cube() {
  const Mymesh = React.useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if(Mymesh.current){
      Mymesh.current.rotation.x = clock.getElapsedTime() * 0.03;
      Mymesh.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
    
  });

  return (
    <mesh ref={Mymesh} receiveShadow castShadow>
      <boxGeometry args={[7.8, 7.8, 7.8]} />
      <MeshTransmissionMaterial backside backsideThickness={10} thickness={5} />
    </mesh>
  );
}

export default Cube;
