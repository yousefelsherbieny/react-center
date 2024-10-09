import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Services3D } from "./Services3D";

export const OurServices = () => {
  const container = useRef();
  const servicesContainer = useRef();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [currentService, setCurrentService] = useState(0);

  return (
    <main ref={container}>
      <Canvas
        eventSource={container}
        className="canvas"
        camera={{ position: [0, 0, 1.5], fov: 30 }}
      >
        <View track={servicesContainer}>
          <Services3D currentService={currentService} />
        </View>
      </Canvas>

      <section className="services" id="services">
        <h2 className="services__title">Our Services</h2>
        <div className="services__slider">
          <div
            className="services__slider__display"
            ref={servicesContainer}
          ></div>
          <div className="services__slider__list">
            <div
              className={`services__slider__list__service ${
                currentService === 0
                  ? "services__slider__list__service--active"
                  : ""
              }`}
              onClick={() => setCurrentService(0)}
            >
              <h3 className="services__slider__list__service__title">
                Cross-Platform App Solutions
              </h3>
              <p className="services__slider__list__service__description">
                Leverage modern frameworks to build scalable and robust mobile
                and web applications that meet your business needs across
                different platforms.
              </p>
            </div>

            <div
              className={`services__slider__list__service ${
                currentService === 1
                  ? "services__slider__list__service--active"
                  : ""
              }`}
              onClick={() => setCurrentService(1)}
            >
              <h3 className="services__slider__list__service__title">
                Immersive Digital Experiences
              </h3>
              <p className="services__slider__list__service__description">
                We create virtual and augmented reality apps that provide
                next-level engagement and interaction for your users, pushing
                the boundaries of digital presence.
              </p>
            </div>

            <div
              className={`services__slider__list__service ${
                currentService === 2
                  ? "services__slider__list__service--active"
                  : ""
              }`}
              onClick={() => setCurrentService(2)}
            >
              <h3 className="services__slider__list__service__title">
                Professional Development Programs
              </h3>
              <p className="services__slider__list__service__description">
                Our tailored training programs help your teams acquire the
                skills necessary to excel in an evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default OurServices;
