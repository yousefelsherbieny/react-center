import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useLipsync } from "../../hooks/useLipsync";
import { useHeadTracking } from "../../hooks/useHeadTracking";

// Define base path for GitHub Pages
const BASE_PATH = "/react-center/models/"; // Adjust this to match your GitHub repo name

export function Nikhil(props) {
  // Load models and animations with the correct base path
  const { nodes, materials, scene } = useGLTF(`${BASE_PATH}nikhil.glb`);
  const { animations } = useGLTF(`${BASE_PATH}animations.glb`);

  const nikhilRef = useRef();
  const { actions, mixer } = useAnimations(animations, nikhilRef);
  const [animation, setAnimation] = useState(
    animations.find((a) => a.name === "Idle") ? "Idle" : animations[0].name // Check if Idle animation exists otherwise use first animation
  );
  const { client } = props;

  useEffect(() => {
    client?.convaiClient.current.sendTextChunk("");
  }, [client]);

  useEffect(() => {
    if (client?.isTalking) {
      setAnimation("Idle");
    } else {
      setAnimation("Idle");
    }
  }, [client?.isTalking]);

  useEffect(() => {
    actions[animation]
      .reset()
      .fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5)
      .play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation, actions, mixer.stats.actions.inUse]);

  useLipsync({ client, characterRef: nikhilRef, nodes, scene });
  useHeadTracking({ client, nodes });

  return (
    <group ref={nikhilRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="party-m-0001" scale={0.01}>
          <skinnedMesh
            name="Cesar_D_LaTorre_Jacket"
            geometry={nodes.Cesar_D_LaTorre_Jacket.geometry}
            material={materials.Character}
            skeleton={nodes.Cesar_D_LaTorre_Jacket.skeleton}
            morphTargetDictionary={
              nodes.Cesar_D_LaTorre_Jacket.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Cesar_D_LaTorre_Jacket.morphTargetInfluences
            }
          />
          <primitive object={nodes.RL_BoneRoot} />
        </group>
      </group>
    </group>
  );
}

// Preload models using the base path
useGLTF.preload(`${BASE_PATH}nikhil.glb`);
useGLTF.preload(`${BASE_PATH}animations.glb`);
