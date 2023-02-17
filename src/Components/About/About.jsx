import React from "react";
import "./About.css";
import Card from "../Card/Card";
import WebD from "../../img/webD.jpg";
import fullWebD from "../../img/fullwebD.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion"

const About = () => {
  const transition ={duration:3,type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="About">
      <motion.div
       initial={{left:'-40%'}}
       whileInView={{left:'2%'}}
       transition={transition}
      className="i-about ">
        <span style={{color:darkMode?'white':''}}>About</span>
        <span>
          Hi! I'm Karan, I am currently doing my Bachelors in Computer Science Engineering
          from Parul University and right now i am in second year.
          Recently I completed Javascript and Now I'm learning React.js.
        </span>
        <button className="button a-button">Download CV</button>
      </motion.div>
      <div className="cards">
        <div className="card1" style={{left:"20rem"}}>
          <Card
            photo={WebD}
            heading={"Frontend Web Developer"}
            detail={
              "HTML5 | CSS3 | Bootstrap | Javascript | Tailwind CSS | React Js"
            }
          />
        </div>
        <div className="card2" style={{ left: "4rem", top:"10rem", button:"none" }}>
          <Card
            photo={fullWebD}
            heading={"Full Stack Web Developer"}
            detail={"I'm not a full stack web developer but I wanna be a full stack web developer."}
          />
        </div>
      </div>
    </div>
  );
};

export default About;