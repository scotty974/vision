"use client";
import Header from "./components/Header/Header";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Cube/Cube";
import TextDrei from "./components/TextDrei/TextDrei";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cursorVariant, setcursorVariant] = useState("default");

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
  const textEnter = () => setcursorVariant("text");
  const textExit = () => setcursorVariant("default");
  const variants: any = {
    default: {
      x: mouse.x - 16,
      y: mouse.y - 16,
    },
    text: {
      height: 200,
      width: 200,
      x: mouse.x - 75,
      y: mouse.y - 75,
      mixBlendMode: "difference",
    },
  };
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
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        ></motion.div>
      </motion.section>
    </main>
  );
}
