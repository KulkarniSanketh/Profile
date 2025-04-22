import React from "react";
import "./project.css";
import projectsmodel from "../assets/projectsmodel.webp";
import satyam from "../assets/satyam.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import netfinancehub from "../assets/netfinancehub.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="text-info">Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6  left">
            <img src={projectsmodel} alt="model" id="projectsmodel-img" />
          </div>
          <div className="col-lg-6 right">
            <h3 className="text-info dsa">DSA</h3>
            <br />
            <b>I believe efficient code is the backbone of great software.
            Mastering DSA helps me:</b>
            <br />
            <br />
            <li>
              Solve problems methodically (from simple array manipulations to
              complex graph optimizations)
            </li>
            <br />
            <li>Write scalable code that performs well under heavy loads</li> <br />
            <li>Optimize memory usage for resource-constrained environments</li><br />
            <li>Crack technical interviews (solved 200+ LeetCode problems)</li><br />
            <br />
            <br />
            <br />
            <div className="links">
              <a href="https://leetcode.com/u/shreesanket/" target="_blank">
                <img src={leetcode} alt="leetcode" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/shreesanket/"
                target="_blank"
              >
                <img src={gfg} alt="gfg" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div class="card">
              <img src={satyam} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-info">Satyam- A Deepfake Detection Tool</h5>
                <p class="card-text">
                  A machine learning system that identifies deepfake
                  videos/images with 95% accuracy to combat misinformation.
                  <br />
                  <br />
                  <p>
                    <strong>Tech Stack:</strong>
                    <b>Frontend:</b> React,Bootstrap,JS <br />
                    <b>Backend:</b> Flask,FastAPI
                    <br />
                    <b>AI/ML:</b> Python,OpenCv,TensorFlow
                  </p>
                </p>
                <a href="" class="btn btn-primary" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card">
              <img src={netfinancehub} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-info">NetFinanceHub</h5>
                <p class="card-text">
                  NetFinanceHub <br />
                  A finance management web application that helps users manage
                  their finances efficiently and effectively.
                  <br />
                </p>
                <p>
                  <strong>Tech Stack:</strong>
                  <b>Frontend:</b> React,Bootstrap,JS <br />
                  <b>Backend:</b> Nodejs,express <br />
                  <b>DataBase:</b> MongoDB
                  <br />
                </p>
                <a
                  href="https://github.com/KulkarniSanketh/Deepfake"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Github
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
