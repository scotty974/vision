"use client";
import Header from "./components/Header/Header";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Cube/Cube";
import TextDrei from "./components/TextDrei/TextDrei";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -400, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const rotationY2 = useTransform(scrollYProgress, [10, 50], [0, Math.PI / 4]);
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
    <>
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
      <section className="container m-auto sticky ">
        <Header Enter={textEnter} Exit={textExit}></Header>
      </section>
      <motion.section style={{ y: y1 }}>
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
        </div>
      </motion.section>
      <motion.div
        className="min-h-screen container m-auto"
        style={{ y: y2, rotateY: rotationY2 }}
        onMouseEnter={textEnter}
        onMouseLeave={textExit}
      >
        <video
          src="/assets/video/wave.mp4"
          className="w-full h-full rounded-lg"
          autoPlay
          loop
        ></video>
      </motion.div>
      <motion.section
        className="min-h-screen bg-slate-900"
        style={{ y: y3 }}
      ></motion.section>
    </>
  );
}
