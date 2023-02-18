import React from "react";
import "./Projects.css";
import Work from "../Work/Work.jsx";
import Project1 from "../../img/project1.jpg";
import Project2 from "../../img/project2.jpg";
import Project3 from "../../img/project3.jpg";
import Project4 from "../../img/project4.jpg";
// import { themeContext } from "../../Context";
// import { useContext } from "react";
import { motion } from "framer-motion"

const projects = () => {
  // const transition ={duration:3,type:'spring'}

  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="project" id="Project">
     <div
        className="i-project" >
        <span 
        
        //  style={{ color: darkMode ? "white" : "" }}
         >
          My Recent <span id="title-p">Projects</span>{" "}
        </span>
      </div>
      <div className="projects">
        <div className="projectA">
          <Work
            photo={Project1}
            heading={"Github Username Call"}
            detail={"Github username api call by using HTML, CSS & JS"}
          />
        </div>
        <div className="projectB" >
          <Work
            photo={Project2}
            heading={"Quiz App"}
            detail={"5 questions Quiz App by using HTML, CSS & JS"}
          />
        </div>
        <div className="projectC">
          <Work
            photo={Project3}
            heading={"Calculator"}
            detail={"A Simple Calculator by using HTML, CSS & JS"}
          />
        </div>
        <div className="projectD">
          <Work
            photo={Project4}
            heading={"Apna Cart"}
            detail={
              "A cart in which we can add, delete multiple items by using React JS"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default projects;
{/* <motion.div initial={{left:'-50%'}}
whileInView={{left:'5%'}}
transition={transition} */}