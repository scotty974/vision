"use client";
import Header from "./components/Header/Header";
import { Canvas, useFrame } from "@react-three/fiber";
import Sphere from "./components/Cube/Cube";
import TextDrei from "./components/TextDrei/TextDrei";
import { useEffect, useState } from "react";
import { motion} from "framer-motion";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textExit = () => setCursorVariant("default");

  return (
    <main>
      <section className="container m-auto">
        <Header Enter={textEnter} Exit={textExit}></Header>
      </section>
      <motion.section>
        <div className="flex justify-center items-center">
          <Canvas
            shadows
            camera={{ position: [0, 0, 20], fov: 50 }}
            eventPrefix="client"
            className="absolute canvas-container "
            onMouseEnter={textEnter}
            onMouseLeave={textExit}
          >
            <ambientLight intensity={0.8} />
            <spotLight
              position={[20, 20, 10]}
              penumbra={1}
              castShadow
              angle={0.2}
            />
            <TextDrei></TextDrei>
            <Sphere></Sphere>
          </Canvas>
          
          <motion.div
            className="cursor"
            animate={cursorVariant}
            style={{
              x: mouse.x - 16,
              y: mouse.y - 16,
              height: cursorVariant === "text" ? 200 : undefined,
              width: cursorVariant === "text" ? 200 : undefined,
              mixBlendMode: cursorVariant === "text" ? "difference" : undefined,
            }}
          ></motion.div>
        </div>
        <div className="text-center w-full">Scroll bottom</div>
      </motion.section>
      <motion.section className="min-h-screen">

      </motion.section>
    </main>
  );
}
