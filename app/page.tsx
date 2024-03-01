"use client";
import Header from "./components/Header/Header";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Cube/Cube";
import TextDrei from "./components/TextDrei/TextDrei";
import { useEffect, useState } from "react";
export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: React.MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return (
    <main>
      <section className="container m-auto">
        <Header></Header>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <Canvas
            shadows
            camera={{ position: [0, 0, 20], fov: 50 }}
            eventPrefix="client"
            className="absolute"
          >
            <ambientLight intensity={0.1} />
            <spotLight
              position={[20, 20, 10]}
              penumbra={1}
              castShadow
              angle={0.2}
            />
            <TextDrei></TextDrei>
            <Sphere></Sphere>
          </Canvas>
        </div>
      </section>
    </main>
  );
}
