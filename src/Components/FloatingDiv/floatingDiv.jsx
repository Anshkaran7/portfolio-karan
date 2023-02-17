import React from 'react'
import './floatingDiv.css'
import { themeContext } from '../../Context';
import { useContext } from "react";
const FloatingDiv = ({image,txt1,txt2}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv" style={{color:darkMode ? "black" :''}}>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv