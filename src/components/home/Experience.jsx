import React from "react";
import { info } from "../../info/Info";

const Experience = () => {
  return (
    <div
      className="experiences"
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {info.experiences.map((experience, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <h3
              style={{
                color: "#333",
                marginTop: 0,
                marginBottom: "10px",
                fontSize: "1.5rem",
              }}
            >
              {experience.name}
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "0.9rem",
                marginBottom: "10px",
              }}
            >
              {experience.date}
            </p>
            <p
              style={{
                color: "#444",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              {experience.description}
            </p>
            <p
              style={{
                marginBottom: 0,
              }}
            >
              <strong>Technologies:</strong>{" "}
              <span
                style={{
                  color: "#555",
                }}
              >
                {experience.technologies.join(", ")}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
