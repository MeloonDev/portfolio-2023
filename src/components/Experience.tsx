import { Canvas } from "@react-three/fiber";
import { Head } from "./Head";

function Experience() {
  return (
    <Canvas shadows>
      <ambientLight color="orange" intensity={0.1} />
      <pointLight position={[10, 10, 10]} color="pink" />
      <Head />
    </Canvas>
  );
}
export default Experience;
