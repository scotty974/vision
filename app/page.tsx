"use client";
import Header from "../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube/Cube";
import Sphere from "@/components/Sphere/Sphere";
import TextDrei from "../components/TextDrei/TextDrei";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

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
            <TextDrei text="Vision Agency" size={5}></TextDrei>
            <Cube></Cube>
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
      <motion.div style={{ y: y2 }}>
        <div
          className="flex justify-center"
          onMouseEnter={textEnter}
          onMouseLeave={textExit}
        >
          <span className="text-center text-3xl border w-60 rounded-full p-4">
            Hello
          </span>
        </div>
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

          <Sphere></Sphere>
          <TextDrei
            text="Introducing Vision – Your Gateway to the Future of Web Design"
            size={1}
          ></TextDrei>
        </Canvas>
      </motion.div>

      <motion.section
        className="min-h-screen w-full container m-auto"
        style={{ y: y3 }}
      >
        <motion.div className="w-full h-screen ">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
              <img
                src="/media/IROIKI.jpg"
                alt="IROIKI picture"
                className="w-full h-full object-cover"
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <img
                src="/media/PF.jpg"
                alt="IROIKI picture"
                className="w-full h-full object-cover"
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </motion.div>
      </motion.section>
    </>
  );
}
