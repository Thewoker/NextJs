import React from 'react'
import './button.css'

function Button(props) {
  const contentenido = props.content;
  const sizes = {
    width: props.width,
    height: props.height,
  }
  return (
    <div className='flex justify-center items-center text-center text-white mx-7 custom-button' style={sizes}>

      <p>{contentenido}</p>

    </div>
  )
}

export default Button