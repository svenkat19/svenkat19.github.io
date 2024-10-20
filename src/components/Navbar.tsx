import React from 'react';
import './Navbar.css';  // Import the CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-translucent">
      <div className="container-fluid">
        <div className="navbar-content">
          <div className="navbar-left">
            <img 
              src='shashank-venkat-high-resolution-logo-white-transparent.png' 
              alt='Shashank Venkat Logo' 
              className="navbar-logo"
              style={{width:'10rem',height:'2rem'}}
            />
          </div>
          <div className="navbar-right">
            <a href="https://github.com/svenkat19" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="light-icon" />
            </a>
            <a href="https://www.linkedin.com/in/shashankvenkat18/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="light-icon" />
            </a>
            <a href="https://www.facebook.com/shaz.venk/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="light-icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
