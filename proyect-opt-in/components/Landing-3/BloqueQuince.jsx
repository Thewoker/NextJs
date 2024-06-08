import React from 'react'

function BloqueQuince() {
    return (
        <div className='min-h-screen md:px-24 division-declinada max-md:flex-wrap max-md:h-full flex justify-center items-center gap-5'>
            <div className='flex flex-col justify-center items-center gap-1 w-1/2'>
                <h2 className='text-center text-5xl text-white'><b>¿Tenes MUCHAS dudas?</b></h2>
                <p className='text-3xl text-center md:w-1/2 text-white'>Si tenes dudas respecto de si esta mentoría te servirá o no, agenda una Pre-Revisión de 15 minutos con alguien de nuestro equipo para sacarte todas las dudas y ver si podemos ayudar</p>
            </div>
            <div className='min-h-full h-[60vh] flex justify-center items-center w-1/2'>
                <button className='p-10 rounded-lg bg-yellow-200 text- roboto button-animate sombra-caja'><b>QUIERO AGENDAR MI REUNION INFORMATIVA</b></button>
            </div>
        </div>
    )
}

export default BloqueQuince