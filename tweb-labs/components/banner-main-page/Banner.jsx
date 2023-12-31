import React from 'react'
import './banner.css'
function Banner() {
  return (
    <div className=''>
      <div className="w-full h-3/5 flex justify-center items-center relative">
        <img className='logo absolute inset-0 m-auto max-h-[30vh] z-10' src="/imgs/TWEB-LABS-Logo-BigCommerce-Store-Logo-with-Transparent-Background.png" alt=""/>
        <img className="blur-sm w-full max-h-[70vh]" src="/imgs/Banner.jpg" alt="Descripción de la imagen" />
      </div>
    </div>
  )
}

export default Banner