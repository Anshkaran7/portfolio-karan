import React from "react";
import "./Projects.css";
import Work from "../Work/Work.jsx";
import Project1 from "../../img/project1.jpg";
import Project2 from "../../img/project2.jpg";
import Project3 from "../../img/about.jpg";
import Project4 from "../../img/project4.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const transition = { duration: 3, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="project" id="Project">
      <motion.div
        initial={{ left: "-50%" }}
        whileInView={{ left: "5%" }}
        transition={transition}
        className="i-project"
      >
        <span style={{ color: darkMode ? "white" : "" }}>
          My Recent <span id="title-p">Projects</span>{" "}
        </span>
      </motion.div>
      <div className="projects">
        <div className="projectA">
          <Work
          onPress={()=>{
            window.open('https://github.com/Anshkaran7/Github')
          }} 
          onPress2={()=>{
            window.open('https://karangithub.netlify.app/')
          }}
            photo={Project1}
            heading={"Github Username Call"}
            detail={"Github username api call by using HTML, CSS & JS"}
          />
        </div>
        <div className="projectB">
          <Work
          onPress={()=>{
            window.open('https://github.com/Anshkaran7/Quiz-app')
          }}
          onPress2={()=>{
            window.open('https://quiz-karan.netlify.app')
          }}
            photo={Project2}
            heading={"Quiz App"}
            detail={"5 questions Quiz App by using HTML, CSS & JS"}
          />
        </div>
        <div className="projectC">
          <Work onPress={()=>{
            window.open('https://github.com/Anshkaran7/Skybagss')
          }}
          onPress2={()=>{
            window.open('https://skybags-karan.netlify.app/')
          }}
            photo={Project3}
            heading={"Skybags"}
            detail={"Landing Page of a product using Html css and js "}
          />
        </div>
        <div className="projectD">
          <Work onPress={()=>{
            window.open('https://github.com/Anshkaran7/Apnaa_cart')
          }}
          onPress2={()=>{
            window.open('https://apna-cart-karan.vercel.app')
          }}
            photo={Project4}
            heading={"Apna Cart"}
            detail={
              "A cart in which you can add delete items by using React JS "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
