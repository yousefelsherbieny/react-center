import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

// Use the correct base path for GitHub Pages
const BASE_PATH = "/react-center/models/";

export const Item = ({ model = "Casual", ...props }) => {
  const { scene } = useGLTF(`${BASE_PATH}${model}.glb`);
  const copiedScene = useMemo(() => scene.clone(), [scene]); // To be able to reuse the same object

  return (
    <group {...props}>
      <primitive object={copiedScene} />
    </group>
  );
};

// Preload models with the correct base path
useGLTF.preload(`${BASE_PATH}Classroom.glb`);
useGLTF.preload(`${BASE_PATH}MacBook Pro.glb`);
useGLTF.preload(`${BASE_PATH}Oculus Controller.glb`);
useGLTF.preload(`${BASE_PATH}Phone.glb`);
useGLTF.preload(`${BASE_PATH}VR Headset.glb`);
useGLTF.preload(`${BASE_PATH}Flower_1.glb`);
useGLTF.preload(`${BASE_PATH}Flower_2.glb`);
useGLTF.preload(`${BASE_PATH}Flower_3.glb`);
useGLTF.preload(`${BASE_PATH}Flower_4.glb`);
useGLTF.preload(`${BASE_PATH}Flower_5.glb`);
