import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Torus } from "@react-three/drei";

function Sphere() {
  const Mymesh = React.useRef();

  useFrame(({ clock }) => {
    Mymesh.current.rotation.x = clock.getElapsedTime() * 0.03;
    Mymesh.current.rotation.y = clock.getElapsedTime() * 0.03;
  });
  return (
    <mesh ref={Mymesh} receiveShadow castShadow>
      <boxGeometry args={[7, 7, 7]}/>
      <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
    </mesh>
  );
}

export default Sphere;
