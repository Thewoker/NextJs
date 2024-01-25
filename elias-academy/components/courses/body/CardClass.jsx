import React from 'react'

function CardClass({course}) {
  return (
    <>
        <li className="completado"><a href="#">{course.title}</a></li> 
    </>
  )
}

export default CardClass