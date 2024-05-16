import React from 'react'
import { Roboto } from 'next/font/google';

function BloqueDiez() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-16 md:px-28 '>
        <div className='w-full'><p className='roboto text-left text-lg'>Lo que aprenderás en el Curso funciona…<br /><br />Porque LA VENTA INMOBILIARIA  es:</p></div>
        <div className='p-5 bg-[#4118f0] w-full'>
            <h2 className='text-center text-2xl roboto text-white'>PRICING + IMPACTO Y COMUNICACIÓN + LEGALES PROLIJOS + BUENOS PROFESIONALES + PLANIFICACION:<br />ÉXITO</h2>
        </div>
        <button className='p-10 bg-[#4118f0] button-animate rounded-lg'>
            <h2 className='text-center text-lg roboto text-white'>Si, quiero acceso inmediato al <br />ENTRENAMIENTO GRATUITO<br />Los 5 TRUCOS</h2>
        </button>
    </div>
  )
}

export default BloqueDiez