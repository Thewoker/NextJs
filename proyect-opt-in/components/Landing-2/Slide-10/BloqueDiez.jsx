import React from 'react'
import { Roboto } from 'next/font/google';

function BloqueDiez() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-16 md:px-28 relative max-md:pb-20'>
        <div className='w-full flex justify-center items-center'><p className='roboto text-center text-2xl'>Lo que aprenderás en el Curso funciona…<br /><br />Porque LA VENTA INMOBILIARIA  es:</p></div>
        <div className='p-5 bg-[#4118f0] w-full'>
            <h2 className='text-center text-2xl roboto text-white'>PRICING + IMPACTO Y COMUNICACIÓN + LEGALES PROLIJOS + BUENOS PROFESIONALES + PLANIFICACION:<br /><span className='text-5xl'><b>ÉXITO</b></span></h2>
        </div>
        <button className='p-10 rounded-lg bg-[#01ffff] text-black roboto button-animate sombra-caja'><b>Si, quiero acceso inmediato al <br />ENTRENAMIENTO GRATUITO<br/> <span className='text-2xl'>Los 5 TRUCOS</span></b></button>
        <p className=" text-center absolute bottom-0 bg-[#ff0000] text-balance roboto">
                ATENCION: solo te servirá si vendes un departamento o PH,  NO casa / que cuente con balcón patio o terraza y no sea interno /
                que no sea planta baja ni ultimo piso / que se encuentre en buenas condiciones sobre todo baño y cocina / no tenga graves problemas de humedad / Escritura a tu nombre</p>
    </div>
  )
}

export default BloqueDiez