// src/components/CertificateSlider.js
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"; 
import frontEnd from '../img/Developing Front-End Apps with React-1.jpg';
import git from '../img/Getting Started with Git and GitHub-1.jpg';
import laravel from '../img/Mastering Laravel Framework and PHP-1.jpg';
import react from '../img/Web Development in React js Build a Web App-1.jpg';
import cloud from '../img/Introduction to Cloud Computing-1.jpg';
import meta from '../img/meta-1.jpg';



const CertificateSlider = () => {
  return (
    <AwesomeSlider
    style={{
      width: "60vw",
      height: "auto",
    }}
    >
      <div>
        <img
          src={frontEnd}
          alt="Certificate 1"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <img
          src={git}
          alt="Certificate 2"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <img
          src={laravel}
          alt="Certificate 3"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <img
          src={react}
          alt="Certificate 4"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <img
          src={cloud}
          alt="Certificate 5"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <img
          src={meta}
          alt="Certificate 6"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {/* Add more certificates here */}
    </AwesomeSlider>
  );
};

export default CertificateSlider;
