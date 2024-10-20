import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Define base path for GitHub Pages
const BASE_PATH = "/react-center/models/";

export const TeamMember = ({ model = "Casual", ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(`${BASE_PATH}${model}.gltf`);
  const { actions, mixer } = useAnimations(animations, group);
  const [animation, setAnimation] = useState("Idle");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.2).play();
    return () => actions[animation].fadeOut(0.2);
  }, [animation, actions]);

  useEffect(() => {
    // Set clampWhenFinished and loop to LoopOnce to trigger the "finished" event
    if (actions["Wave"]) {
      actions["Wave"].clampWhenFinished = true;
      actions["Wave"].loop = THREE.LoopOnce;
    }
  }, [actions]);

  useEffect(() => {
    const onAnimationFinished = () => {
      setAnimation("Idle");
    };
    mixer.addEventListener("finished", onAnimationFinished);
    return () => mixer.removeEventListener("finished", onAnimationFinished);
  }, [mixer]);

  return (
    <group ref={group} {...props} onPointerEnter={() => setAnimation("Wave")}>
      <primitive object={scene} />
    </group>
  );
};

// Preload models with the correct base path
useGLTF.preload(`${BASE_PATH}Casual.gltf`);
useGLTF.preload(`${BASE_PATH}Formal.gltf`);
useGLTF.preload(`${BASE_PATH}Suit.gltf`);
