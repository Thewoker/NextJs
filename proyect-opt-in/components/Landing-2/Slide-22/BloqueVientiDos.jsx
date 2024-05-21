import React from 'react'

function BloqueVientiDos() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-20 max-md:pb-20'>
        <div className='flex w-full justify-center items-center bg-[#1a1da0] py-3 text-5xl'>
            <h2 className='text-center text-white'><b>HAZ ESTE EJERCICIO..</b></h2>
        </div>
        <h2 className='text-center text-4xl'><b>MIRA ESTE CUADRO QUE TE MUESTRO ACA... <br />CUÁNTO CREES QUE VALE?</b></h2>
        <img src="./imgs/landing-2/cuadro.png" className='scale-150' alt="" />
        <p className='text-center text-3xl max-md:px-10'>TODO BLANCO???? ¡ALGUIEN APURADO PODRÍA DECIR QUE NO VALE NADA!</p>
    </div>
  )
}

export default BloqueVientiDos