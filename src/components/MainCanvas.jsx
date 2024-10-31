// MainCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { ExperienceIPhone } from "./ExperienceIPhone";
import { UI } from "./UI"; // Import the UI component
import { useState } from "react";

const MainCanvas = () => {
  const [section, setSection] = useState(0); // Manage state here

  return (
    <>
      <Leva hidden />
      <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>
        <color attach="background" args={["#171720"]} />
        <ExperienceIPhone section={section} />
      </Canvas>
      <UI section={section} onSectionChange={setSection} /> {/* Include UI */}
    </>
  );
};

export default MainCanvas;
