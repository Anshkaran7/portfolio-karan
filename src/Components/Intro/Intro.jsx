import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/floatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion"

const Intro = () => {
const transition ={duration:2,type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="hi"style={{color:darkMode?'white':''}} >Hy, I Am </span>
          <span className="name">Karan Kumar </span>
          <span>
            Frontend Web Developer with good knowledge in <br /> web designing
            and development, producing the Quality work.
          </span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Anshkaran7" target="_blank">
            <img src={Github} />
          </a>
          <a href="https://www.instagram.com/anshkaran7/" target="_blank">
            <img src={Instagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-kumar-416321239/"
            target="_blank"
          >
            <img src={Linkedin} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1}  />
        <img src={Vector2}/>
        <img src={boy} />

        <motion.img
        initial={{left:'-46%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        
        src={glassesimoji}style={{top:"2%"}} />
        <motion.div
        initial={{top:'60%', left:'94%'}}
        whileInView={{left:'65%'}}
        transition={transition}
        style={{ top: "60%", left: "65%" }}
        className="floating-div">
          <FloatingDiv image={Crown} txt1="Frontend" txt2="Web Developer" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;