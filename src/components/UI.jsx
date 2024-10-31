import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

export const sections = ["intro", "titanium", "camera", "action-button"];

export const UI = ({ section, onSectionChange }) => {
  const [isInit, setIsInit] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
    }, 2000);
  }, []);

  return (
    <main className="position-fixed top-0 bottom-0 start-0 end-0 d-flex flex-column p-4">
      <div className="d-flex flex-grow-1 align-items-center justify-content-between text-white">
        {/* Back button */}
        <button
          className="btn btn-link text-white position-absolute top-0 start-0 m-3"
          style={{ zIndex: 1000 }} // Ensure it's on top
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "24px", height: "24px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.5l-7.5-7.5 7.5-7.5"
            />
          </svg>
          Back
        </button>

        <button
          className="btn btn-link text-white opacity-75"
          onClick={() =>
            onSectionChange(section === 0 ? sections.length - 1 : section - 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-size"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex-grow-1 position-relative h-100">
          <section
            className={`position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center text-center transition-opacity ${
              sections[section] === "intro" && isInit ? "" : "opacity-0"
            }`}
          >
            <h1 className="display-5 fw-medium">iPhone 15 Pro Max</h1>
            <p className="display-4 fw-bold">Titanium</p>
          </section>

          {/* Repeat for each section with similar structure */}
        </div>

        <button
          className="btn btn-link text-white opacity-75"
          onClick={() =>
            onSectionChange(section === sections.length - 1 ? 0 : section + 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-size"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
        {sections.map((sectionItem, idx) => (
          <div
            key={sectionItem}
            className={`rounded-circle border border-light ${
              section === idx ? "bg-light" : ""
            }`}
            style={{ width: "12px", height: "12px", cursor: "pointer" }}
            onClick={() => onSectionChange(idx)}
          ></div>
        ))}
      </div>
    </main>
  );
};
