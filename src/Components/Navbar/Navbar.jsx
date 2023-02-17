import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import About from "../About/About";

const Navbar = () => {
  return (
    <div  id="Navbar">
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Karan</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              <li>Home</li>
              </Link>
              <Link spy={true} to="About" smooth={true} activeClass="activeClass">
              <li>About</li>
              </Link>
              <Link spy={true} to="projects" smooth={true} activeClass="activeClass">
              <li>Projects</li>
              </Link>
             
            </ul>
          </div>
          <button className="button ct-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;