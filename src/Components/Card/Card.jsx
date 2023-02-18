import React from "react";
import "./Card.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Card = ({ photo, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={photo} />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span>{detail}</span>
      <Link spy={true} to="Project" smooth={true} activeClass="activeClass">
        {" "}
        <button className="c-button" style={{ color: darkMode ? "white" : "" }}>
          Check Out My Recent Projects
        </button>
      </Link>
    </div>
  );
};

export default Card;
