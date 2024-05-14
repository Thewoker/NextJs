import React from 'react'

function CardResenas(props) {
    return (
        <div className='bg-[#1a1da0] p-6 w-[250px] flex flex-col gap-5 rounded-xl'>
            <h2 className='text-left'>⭐⭐⭐⭐⭐</h2>
            <p className='text-white text-left'>{props.comentario}</p>
            <div className='flex justify-between items-center'>
                <p className='text-white'><b>{props.nombre}</b></p>
                <svg className='h-1/4 w-1/4 text-[#1c2db1]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path></svg>
            </div>
        </div>
    )
}

export default CardResenas