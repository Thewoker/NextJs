import React from 'react'

function BloqueQuince() {
    return (
        <div className='min-h-screen md:px-24 division-declinada max-md:h-full flex justify-center max-md:flex-wrap items-center gap-5 max-md:p-5 max-md:pb-20'>
            <div className='flex flex-col justify-center items-center gap-1 md:w-1/2 max-md:w-full'>
                <h2 className='text-center text-5xl md:text-white'><b>¿Tenes muchas dudas?</b></h2>
                <p className='text-3xl text-center md:w-1/2 md:text-white'>Si tenes dudas respecto de si esta mentoría te servirá o no, agenda una Pre-Revisión de 15 minutos con alguien de nuestro equipo para sacarte todas las dudas y ver si podemos ayudarte</p>
            </div>
            <div className='min-h-full md:h-[60vh] max-md:h-[20vh] flex justify-center items-center md:w-1/2 max-md:p-10'>
                <button className='p-10 rounded-lg bg-yellow-200 text- roboto button-animate sombra-caja'><b>QUIERO AGENDAR MI REUNION INFORMATIVA</b></button>
            </div>
        </div>
    )
}

export default BloqueQuince