import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avt.jpg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GokulanSaravanan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gokulan-saravanan-5a0b98341/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Gokulan</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/GokulanSaravanan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gokulan-saravanan-5a0b98341/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;