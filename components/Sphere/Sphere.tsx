import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Torus } from "@react-three/drei";

function Sphere() {
    const Mymesh = React.useRef();

    useFrame(({ clock }) => {
      Mymesh.current.rotation.x = clock.getElapsedTime() * 0.03;
      Mymesh.current.rotation.y = clock.getElapsedTime() * 0.03;
    });
  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[1, -1]}
    >
      <mesh receiveShadow castShadow ref={Mymesh}>
        <icosahedronGeometry args={[3, 1]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={10}
          thickness={5}
        />
      </mesh>
    </Float>
  );
}

export default Sphere;
