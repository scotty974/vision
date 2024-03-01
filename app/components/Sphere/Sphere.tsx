function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[2, 60, 60]}/>
      <meshStandardMaterial />
    </mesh>
  );
}

export default Sphere;
