"use client";
import Header from "../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube/Cube";
import Sphere from "@/components/Sphere/Sphere";
import TextDrei from "../components/TextDrei/TextDrei";
import { Suspense, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Loading from "./loading";

export default function Home() {
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -500, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const rotationY2 = useTransform(scrollYProgress, [10, 50], [0, Math.PI / 4]);
  const words =
    "Welcome to Vision, where innovation meets creativity in the digital realm. As a cutting-edge agency, we transcend traditional boundaries to shape the future of online experiences. Our visionary team blends artistry and technology, crafting websites that not only meet today's standards but also set the stage for tomorrow's digital landscape. Join us on a journey into the future of web design, where limitless possibilities and unparalleled innovation converge. Elevate your online presence with Vision – Shaping Tomorrow's Web Today.";
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textExit = () => setCursorVariant("default");

  return isMobile ? (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-white">This site is only available on desktop</h1>
    </div>
  ) : (
    <Suspense fallback={<Loading />}>
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
      <motion.div style={{ y: y2 }} id="about">
        <div
          className="flex flex-col items-center justify-center container gap-8"
          onMouseEnter={textEnter}
          onMouseLeave={textExit}
        >
          <span className="text-center text-3xl border w-60 rounded-full p-4">
            Hello
          </span>
          <TextGenerateEffect words={words}></TextGenerateEffect>
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
        id="work"
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
      
    </Suspense>
  );
}
