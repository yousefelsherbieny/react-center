import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";
import { useConvaiClient } from "../hooks/useConvaiClient";
import ChatBubble from "./chat/Chat";
import { Experience } from "./Experience";

function Game() {
  // Replace with your actual Convai API key and character ID
  const { client } = useConvaiClient(
    "11388cdc-84c8-11ef-bc02-42010a7be011",
    "255cefdba1e9993a35fb821bb5abec15"
  );

  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "sprint", keys: ["Shift"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Loader />
        <Canvas
          shadows
          camera={{
            position: [0, 0.8, 3],
            fov: 75,
          }}
        >
          <Experience client={client} />
        </Canvas>
      </KeyboardControls>
      <ChatBubble client={client} />
    </>
  );
}

export default Game;
