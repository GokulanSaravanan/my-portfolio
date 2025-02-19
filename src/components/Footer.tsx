import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/GokulanSaravanan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/gokulan-saravanan-5a0b98341/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio  built by  <a href="https://github.com/GokulanSaravanan" target="_blank" rel="noreferrer">Gokulan </a> </p>
    </footer>
  );
}

export default Footer;