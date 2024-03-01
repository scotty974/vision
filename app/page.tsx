'use client';
import Header from "./components/Header/Header";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere/Sphere";
export default function Home() {
  return (
    <main>
      <section className="container m-auto">
        <Header></Header>
      </section>
      <section>
        <div >
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
           <Sphere></Sphere>
          </Canvas>
        </div>
      </section>
    </main>
  );
}
