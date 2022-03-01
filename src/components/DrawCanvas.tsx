import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera , OrbitControls } from "@react-three/drei";
import Box from "./Box";


const DrawCanvas: FC = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        <PerspectiveCamera />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
       <Box position={[1.2, 0, 0]} />
      </Canvas>
    </Suspense>
  );
};

export default DrawCanvas;
