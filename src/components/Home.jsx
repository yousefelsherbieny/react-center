import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Services3D } from "./Services3D";


export const Home = () => {
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
                Web/Mobile App Development
              </h3>
              <p className="services__slider__list__service__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptate, voluptas quae quod
                quibusdam voluptatibus quia quos molestiae natus? Quisquam
                voluptatum, quas, voluptate, voluptas quae quod quibusdam
                voluptatibus quia quos molestiae natus?
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
                VR/AR App Development
              </h3>
              <p className="services__slider__list__service__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptate, voluptas quae quod
                quibusdam voluptatibus quia quos molestiae natus? Quisquam
                voluptatum, quas, voluptate, voluptas quae quod quibusdam
                voluptatibus quia quos molestiae natus?
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
                Training
              </h3>
              <p className="services__slider__list__service__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas, voluptate, voluptas quae quod
                quibusdam voluptatibus quia quos molestiae natus? Quisquam
                voluptatum, quas, voluptate, voluptas quae quod quibusdam
                voluptatibus quia quos molestiae natus?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
