import React from 'react'

function BloqueSeis() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center md:px-24 gap-10 '>
            <div className='w-full flex justify-center items-center  p-3'>
                <h2 className=' bentham text-xl text-center'><b>Y ASI PASO ALGO QUE DESPUES LO CAMBIO TODO!</b></h2>
            </div>
            <div className='w-full flex justify-center items-center bg-[#1a1da0] p-3'>
                <h2 className='text-white montserrat max-md:text-xl md:text-3xl text-center '><b>DESCUBRÍ LOS 5 TRUCOS...</b></h2>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-center max-md:text-lg md:text-2xl max-md:px-10'>MI MUJER SE PUSO SU PROPIA INMOBILIARIA Y ME SUME INMEDIATAMENTE CON ELLA. </h3>
                <h2 className='text-center max-md:text-lg md:text-2xl'><b>ALLI PUDE APLICAR LO QUE HABIA DESCUBIERTO <br />LO QUE LITERALMENTE HIZO QUE EMPEZARAMOS A VENDER<br />A UNA GRAN VELOCIDAD TODAS LAS PROPIEDADES QUE TOMABAMOS</b></h2>
            </div>
            <div className='flex w-full justify-center items-center gap-5 max-md:flex-wrap max-md:h-full'>
                <img src="./imgs/landing-2/slide-6.png" className='h-1/5 w-1/5' alt="" />
                <div className='max-md:px-10'>
                    <h2 className=' max-md:text-xl md:text-3xl'><b>Fue una LOCURA….</b></h2>
                    <p className='text-[#4118f1] max-md:text-lg md:text-2xl'>Lo que nos hizo ganar una excelente reputación!<br />Los departamentos volaban!!!</p>
                </div>
            </div>
        </div>
    )
}

export default BloqueSeis