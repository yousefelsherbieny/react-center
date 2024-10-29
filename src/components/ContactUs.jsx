import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";
import "bootstrap/dist/css/bootstrap.min.css";
import { useControls } from "leva";

const MODELS = {
  Beech:
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf",
  Lime:
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf",
  Spruce:
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf",
};

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const ContactUs3D = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { model } = useControls({
    model: { value: "Beech", options: Object.keys(MODELS) },
  });

  const [backgroundColor, setBackgroundColor] = useState("#87CEEB");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBackgroundChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h2 className="text-center mb-4">3D Agricultures</h2>

          <div className="model-container">
            <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
              <hemisphereLight
                color="white"
                groundColor="blue"
                intensity={0.75}
              />
              <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
              <group position={[0, -10, 0]}>
                <Suspense fallback={<Html>Loading...</Html>}>
                  <Model url={MODELS[model]} />
                </Suspense>
                <ContactShadows scale={20} blur={10} far={20} />
              </group>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs3D;
