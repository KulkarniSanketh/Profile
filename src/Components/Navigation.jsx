// import React, { useState, useEffect } from "react";
// import "./navbar.css";
// import menu from "../assets/menu.png";
// import close from "../assets/close.png"; // Optional: different icon for close state
// import signature from "../assets/signature.jpg";
// import { Link } from "react-router-dom";

// function Navigation() {
//   const [isMobile, setIsMobile] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setIsMobile(window.innerWidth < 1024);
//       };
  
//       handleResize();
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     const toggleMenu = () => {
//       setMenuOpen(!menuOpen);
//     };
    
  
//     return (
//       <div className="front"> 
//         {!isMobile ? (
//           <div className="navbar">
            
//             <div className="nav-links">
//               <Link to="/">Home</Link>
//               <Link to="/about">About</Link>
//               <Link to="/skills">Skills</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/contact">Contact</Link>
//             </div>
//           </div>
//         ) : (
//           <div className="mobile-nav">
//             <input 
//               type="checkbox" 
//               className="toggle" 
//               id="toggle" 
//               checked={menuOpen}
//               onChange={toggleMenu}
//             />
//             <label htmlFor="toggle" className="toggle-label">
//               {/* Show different icon based on menu state */}
//               {menuOpen ? (
//                 <img src={close} alt="Close menu" className="menu-icon" />
//               ) : (
//                 <img src={menu} alt="Open menu" className="menu-icon" />
//               )}
//             </label>
//             <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
//             <img src={signature} alt="Signature" className="signature" id="signature" /> 
//             <a href="/" onClick={toggleMenu}>Home</a>
//               <Link to="/about" onClick={toggleMenu}>About</Link>
//               <Link to="/skills" onClick={toggleMenu}>Skills</Link>
//               <Link to="/projects" onClick={toggleMenu}>Projects</Link>
//               <Link to="/contact" onClick={toggleMenu}>Contact</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
  

// export default Navigation




import React, { useState, useEffect } from "react";
import "./navbar.css";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import signature from "../assets/signature.jpg";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Common nav links configuration
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <div className="front"> 
      {!isMobile ? (
        <div className="navbar">
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={isActive(link.path) ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="mobile-nav">
          <input 
            type="checkbox" 
            className="toggle" 
            id="toggle" 
            checked={menuOpen}
            onChange={toggleMenu}
          />
          <label htmlFor="toggle" className="toggle-label">
            {menuOpen ? (
              <img src={close} alt="Close menu" className="menu-icon" />
            ) : (
              <img src={menu} alt="Open menu" className="menu-icon" />
            )}
          </label>
          <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <img src={signature} alt="Signature" className="signature" id="signature" /> 
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={isActive(link.path) ? "active" : ""}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;