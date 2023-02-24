import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img src={Wave} />
      <div className="f-content">
        <p className="sppan"> ©karanchandravanshi217@gmail.com</p>
        <div className="f-icons">
          <a href="https://www.instagram.com/anshkaran7/" target="_blank">
            <FaInstagram color="white" size="2rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-kumar-416321239/"
            target="_blank"
          >
            <FaLinkedin color="white" size="2rem" />
          </a>
          <a href="https://github.com/Anshkaran7" target="_blank">
            <FaGithub color="white" size="2rem" />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
