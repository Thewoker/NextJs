import React from 'react'
import './button.css'

function Button(props) {
  const contentenido = props.content;
  const sizes = {
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
  }
  return (
    <div className={`flex justify-center items-center text-center text-white ${props.padding ? props.padding : "mx-7"} custom-button`} style={sizes}>

      <p>{contentenido}</p>

    </div>
  )
}

export default Button