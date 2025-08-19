import React from "react";
import "./front.css";
import model from "../assets/model.webp";
import linkdin from "../assets/linkdin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";

function Front() {
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="front-container">
      <div className="container-fluid">
          <br />
          <br />
        <div className="row gap-0">
          <div className="col-lg-6 text-center left">
            <div className="container">
              <h1 className="name">Hi, I'm Sanketh Kulkarni</h1>
              <h2 className="title">A Full Stack Developer</h2>
              <p className="description">
                I create beautiful and functional web applications with modern technologies.
              </p>
              <button 
                type="button" 
                className="btn resume-btn"
                onClick={handleViewResume}
              >
                📄 View Resume
              </button>
              
              <div className="front-links">
                <a 
                  href="https://www.linkedin.com/in/shree-sanketh-kulkarni-9b118325b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <img src={linkdin} alt="LinkedIn" />
                </a>
                
                <a 
                  href="https://github.com/KulkarniSanketh" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <img src={github} alt="GitHub" />
                </a>
                
                <a 
                  href="https://www.instagram.com/sanketh_sk_/?next=%2F" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 text-center" id="right">
          <br /><br />
            <div className="right-box">
              <img 
                src={model} 
                alt="Sanketh Kulkarni" 
                id="right-img"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
