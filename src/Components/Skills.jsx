import React from "react";
import "./skills.css";
import skillsmodel from "../assets/skillsmodel.webp";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import bootstrap from "../assets/bootstrap.png";
import sql from "../assets/sql.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import python from "../assets/python.png";

function Skills() {
  return (
    <div className="skills">
      <div className="container content">
      <br />
        <h2 className="text-info">Skills</h2>
        <div className="row">
          <div className="col-lg-6 left">
            <div className="row gap-2">
              <h1>Web Developement</h1>
              <br />
              <div className="col">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div className="col">
                <img src={css} alt="" />
                <p>CSS</p>
              </div>
              <div className="col">
                <img src={js} alt="" />
                <p>JavaScript</p>
              </div>
              <div className="col">
                <img src={bootstrap} alt="" />
                <p>BootStrap</p>
              </div>
              <div className="col">
                <img src={react} alt="" />
                <p>React</p>
              </div>
              <div className="col">
                <img src={node} alt="" />
                <p>Nodejs</p>
              </div>
              <div className="col">
                <img src={sql} alt="" />
                <p>SQL</p>
              </div>
              <div className="col">
                <img src={express} alt="" />
                <p>Express</p>
              </div>
              <div className="col">
                <img src={mongodb} alt="" />
                <p>MONGODB</p>
              </div>
              <h1>Other Languages</h1>
              <br />
              <div className="col">
<img src={java} alt="" />
              </div>
              <div className="col">
                <img src={python} alt="" />
              </div>
              <div className="col">
                <img src={c} alt="" />
              </div>
            </div>
           
          </div>
          <div className="col-lg-6 right">
            <img src={skillsmodel} alt="skills" id="skillsmodel-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
