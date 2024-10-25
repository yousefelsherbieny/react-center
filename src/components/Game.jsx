import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";
import { useConvaiClient } from "../hooks/useConvaiClient";
import ChatBubble from "./chat/Chat";
import { Experience } from "./Experience";

function Game() {
  // Replace with your actual Convai API key and character ID
  const convaiApiKey = "6cf9f66c23b56064f8b75308ede13a43";
  const characterId = "53ae690a-5085-11ef-8886-42010a7be011";

  // Use the defined variables in the useConvaiClient hook
  const { client } = useConvaiClient(characterId, convaiApiKey);

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
