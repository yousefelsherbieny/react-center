import { Environment, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { TeamMember } from "./TeamMember";

export const OurTeam = () => {
  const container = useRef();

  const johnDoeContainer = useRef();
  const juliaDoeContainer = useRef();
  const lindaDoeContainer = useRef();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main ref={container}>
      <Canvas
        eventSource={container}
        className="canvas"
        camera={{ position: [0, 0, 1.5], fov: 30 }}
      >
        <View track={johnDoeContainer}>
          <TeamMember
            model="Suit"
            position-y={-1.5}
            rotation-y={-degToRad(20)}
          />
          <Environment preset="sunset" />
        </View>
        <View track={juliaDoeContainer}>
          <TeamMember
            model="Formal"
            position-y={-1.5}
            rotation-y={degToRad(20)}
          />
          <Environment preset="sunset" />
        </View>
        <View track={lindaDoeContainer}>
          <TeamMember
            model="Casual"
            position-y={-1.5}
            rotation-y={degToRad(-20)}
          />
          <Environment preset="sunset" />
        </View>
      </Canvas>

      <section className="team" id="team">
        <h2 className="team__title">Our Team</h2>
        <p className="team__subtitle">
          We are a team of 3D web and mobile developers, designers, and artists.
          Our goal is to build the best 3D experiences to make your business
          stand out.
        </p>
        <div className="team__container">
          <div className="team__member">
            <div
              className="team__member__display team__member__display--blue"
              ref={johnDoeContainer}
            ></div>
          </div>
          <div className="team__member">
            <div
              className="team__member__display team__member__display--pink"
              ref={juliaDoeContainer}
            ></div>
          </div>
          <div className="team__member">
            <div
              className="team__member__display team__member__display--orange"
              ref={lindaDoeContainer}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default OurTeam;
