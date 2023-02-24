import React from 'react'
import './Work.css'
import { themeContext } from "../../Context";
import { useContext } from "react";
const Work = ({photo,heading,detail,onPress,onPress2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='work'>
        <img  src={photo}/>
        <span style={{color:darkMode?'white':''}}>{heading}</span>
        <span>{detail}</span>
      <button onClick={onPress} className='w-button1'>Source Code</button>
      <button className='w-button2' onClick={onPress2}  >Go Live</button>
    </div>
  )
}

export default Work