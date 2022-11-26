import React from "react";
import './ColorChanger.css';
const ColorChanger=(props)=>{
    return(
        <>
        <div id="div" className={props.color}></div>
        </>
    )
}
export default ColorChanger;