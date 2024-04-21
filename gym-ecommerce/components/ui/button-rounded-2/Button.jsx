import React from 'react'
import './button.css'
import { color } from 'framer-motion';

function Button(props) {
  const contentenido = props.content;
  const styles = {
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
  }
  return (
    <div className={`flex justify-center items-center text-center text-white ${props.padding ? props.padding : "mx-7"} ${props.bgColor ? props.bgColor : "bg-[#d6fd51]"} custom-button`} style={styles}>

      <p className={`${props.color ? props.color : "text-black"}`}>{contentenido}</p>

    </div>
  )
}

export default Button