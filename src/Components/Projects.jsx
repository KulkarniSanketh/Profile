import React from "react";
import "./project.css";
import projectsmodel from "../assets/projectsmodel.webp";
import satyam from "../assets/satyam.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import netfinancehub from "../assets/netfinancehub.png";
import shortit from "../assets/shortit.png";

function Projects() {
  return (
    <div className="projects">
      <br />
      <h1 className="text-info projects-title">Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left">
            <img
              src={projectsmodel}
              alt="Projects Model"
              id="projectsmodel-img"
              className="project-model-image"
            />
          </div>

          <div className="col-lg-6 right">
            <h3 className="text-info dsa">DSA</h3>
            <br />
            <b>
              I believe efficient code is the backbone of great software.
              Mastering DSA helps me:
            </b>
            <br />
            <br />
            <li>
              Solve problems methodically (from simple array manipulations to
              complex graph optimizations)
            </li>
            <br />
            <li>Write scalable code that performs well under heavy loads</li>
            <br />
            <li>Optimize memory usage for resource-constrained environments</li>
            <br />
            <li>Crack technical interviews (solved 200+ LeetCode problems)</li>
            <br />
            <br />
            <br />
            <br />

            <div className="links">
              <a
                href="https://leetcode.com/u/shreesanket/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
              >
                <img src={leetcode} alt="LeetCode" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/shreesanket/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks Profile"
              >
                <img src={gfg} alt="GeeksforGeeks" />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card project-card">
              <img
                src={satyam}
                className="card-img-top"
                alt="Satyam Deepfake Detection"
              />
              <div className="card-body">
                <h5 className="card-title text-info">
                  Satyam- A Deepfake Detection Tool
                </h5>
                <p className="card-text">
                  A machine learning system that identifies deepfake
                  videos/images with 95% accuracy to combat misinformation.
                  <br />
                  <br />
                  <p>
                    <strong>Tech Stack:</strong>
                    <br />
                    <b>Frontend:</b> React, Bootstrap, JavaScript <br />
                    <b>Backend:</b> Flask, FastAPI
                    <br />
                    <b>AI/ML:</b> Python, OpenCV, TensorFlow
                  </p>
                </p>
                <a
                  href="https://github.com/KulkarniSanketh/Deepfake"
                  className="btn project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card project-card">
              <img
                src={netfinancehub}
                className="card-img-top"
                alt="NetFinanceHub"
              />
              <div className="card-body">
                <h5 className="card-title text-info">NetFinanceHub</h5>
                <p className="card-text">
                  A comprehensive finance management web application that helps
                  users manage their finances efficiently and effectively with
                  advanced analytics.
                  <br />
                  <br />
                  <p>

                  <strong>Tech Stack:</strong>
                  <br />
                  <b>Frontend:</b> React, Bootstrap, JavaScript <br />
                  <b>Backend:</b> Node.js, Express.js <br />
                  <b>Database:</b> MongoDB
                  <br />
                  </p>
                </p>
                <a
                  href="https://github.com/KulkarniSanketh/Netfinancehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn project-btn"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-lg-6">
            <div className="card project-card">
              <img
                src={shortit}
                className="card-img-top"
                alt="Short-It URL Shortener"
              />
              <div className="card-body">
                <h5 className="card-title text-info">
                  Short-It — URL Shortener
                </h5>
                <p className="card-text">
                  A modern URL shortening service that converts long, messy
                  links into clean, shareable URLs. Features custom aliases,
                  one-click copy, redirect functionality, and an intuitive
                  dashboard for easy link management.
                  <br />
                  <br />
                  <p>
                    <strong>Tech Stack:</strong>
                    <br />
                    <b>Frontend:</b> React, Bootstrap, JavaScript <br />
                    <b>Backend:</b> Node.js, Express.js <br />
                    <b>Database:</b> MongoDB <br />
                    <b>Others:</b> REST API, Clipboard API
                  </p>
                </p>
                <a
                  href="https://github.com/KulkarniSanketh/ShortIt"
                  className="btn project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}

export default Projects;
