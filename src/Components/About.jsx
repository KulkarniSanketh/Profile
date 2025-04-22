import React from "react";
import "./about.css";
import Navigation from "./Navigation";
import "./front.css";
import hellomodel from "../assets/hellomodel.webp";
function About() {
  return (
    <div className="about">
      <div className="content container-fluid">
        <h2 className="text-center text-info">About me</h2>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={hellomodel} alt="hello" id="hellomodel-img" />
            </div>
            <div className="col-lg-6 right">
              <h5>Who I am</h5>
              <p>
                A passionate Full Stack Developer with 1 years of experience
                building robust web applications. I specialize in the **MERN
                stack** (MongoDB, Express, React, Node.js) and love transforming
                complex problems into elegant solutions.
              </p>
              <br />
              <h5>Education</h5>
              <p>
                I have completed my Pre-University Education (PUC) at Alvas
                Pre-University College, Mangaluru. (2020-2022)
              <br />
                I am currently pursuing my Bachelor's degree in Computer Science
                Engineering at BMS College of Engineering, Bangalore.
                (2022-2026)
              </p>
              <br />
              <h5>Hobbies</h5>
              <p>
                I love to play Chess and badminton. I enjoy reading books and 
                listening to music. 
              </p>
              <br />
              <h5>My Development Philosophy</h5>
              <p>I write code that humans can read—clear, maintainable, and well-documented. Obsessed with performance optimization, I relentlessly refine every millisecond out of critical paths. I champion test-driven development (TDD) to build robust systems from the ground up, and I advocate for clean architecture principles to ensure scalable, modular designs that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
