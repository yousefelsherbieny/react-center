import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_PATH = "/react-center/models/";

const Model = () => {
  // Update the model path to point to the correct file location
  const { scene } = useGLTF(`${BASE_PATH}Suit.gltf`);
  return <primitive object={scene} />;
};

const ContactUs3D = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <h2 className="text-center mb-4">3D Model Viewer</h2>
          <div className="model-container" style={{ height: "400px" }}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Model />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs3D;
