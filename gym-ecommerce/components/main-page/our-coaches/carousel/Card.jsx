import React from 'react'
import "./card.css"

function Card(props) {
    var imgStyle = {
        background: `url("/main-page/${props.imgURL}") #242424 50% / cover no-repeat`
    };
    return (
        <div className='flex flex-col w-[250px] h-[250px] bg-[#242424] card'>
            <div className='card-image-coach' style={imgStyle}></div>
            <div className='px-[20px]'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div></div>
            </div>
        </div>
    )
}

export default Card