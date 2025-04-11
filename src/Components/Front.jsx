import React from "react";
import Navigation from "./Navigation";
import "./front.css";
import model from "../assets/model.png";
import linkdin from "../assets/linkdin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import {Link} from "react-router-dom";

function Front() {
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <div>
      
      <br />
      <br />
      <br /><br /><br />
      <div className="container-fluid">
        <div className="row gap-0">
          <div className="col-lg-6 text-center left">
            <div className="container">
            <h1 className="name">Hi, I'm Sanketh Kulkarni</h1>
            <h2 className="title">A Full Stack Developer</h2>
            <p className="description">
              I create beautiful and functional web applications.
            </p>
            <button type="button" class="btn btn-outline-light" onClick={handleViewResume}>
              Resume
            </button>
            <br /><br /><br />
            <div className="front-links">

            <a href="https://www.linkedin.com/in/shree-sanketh-kulkarni-9b118325b/" target="_blank"><img src={linkdin} alt="linkdin"/></a>
            <a href="https://github.com/KulkarniSanketh" target="_blank"><img src={github} alt="github"/></a>
            <a href="https://www.instagram.com/sanketh_sk_/?next=%2F" target="_blank"><img src={instagram} alt="instagram"/></a>
            </div>
            </div>
           
            <br /><br />
            <br />
            <br /><br /><br /><br />
          </div>
          <div className="col-lg-6 text-center" id="right">
          <div className="right-box">
            <img src={model} alt="right" id="right-img"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
