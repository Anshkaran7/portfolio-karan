import React from "react";
import "./Work.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Work = ({ photo, heading, detail, onPress, onPress2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
      <img src={photo} />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span>{detail}</span>
      <div className="btn">
        <button  style={{ color: darkMode ? "white" : "" }} onClick={onPress} className="w-button1">
          Source Code
        </button>
        <button style={{ color: darkMode ? "white" : "" }} className="w-button2" onClick={onPress2}>
          Go Live
        </button>
      </div>
    </div>
  );
};

export default Work;
