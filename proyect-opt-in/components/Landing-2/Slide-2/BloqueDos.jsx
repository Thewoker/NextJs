import Button from '@/components/ui/button-rounded-2/Button'
import React from 'react'

function BloqueDos() {
    return (
        <section className='min-h-screen min-w-screen flex items-center md:px-24 division-inclinada max-md:flex-wrap max-md:h-full'>
            <div className='min-h-full h-[60vh] w-screen flex justify-center items-center'>
                <button className='p-10 rounded-lg bg-[#01ffff] text-black roboto button-animate sombra-caja'><b>Si, quiero acceso inmediato al <br />ENTRENAMIENTO GRATUITO<br/> <span className='text-2xl'>Los 5 TRUCOS</span></b></button>
            </div>
            <div className='flex justify-center items-center min-h-full h-[40vh] w-screen '>
                <p className='text-center text-balance md:text-white roboto max-md:text-xl md:text-2xl w-2/3 text-2xl'>
                    SI, Este es <b className='text-3xl'>EL MISMO METODO DE LOS 5 TRUCOS</b><br />
                    que me permitió a mi y a cientos de familias superar la frustración y el estancamiento <br />
                    VENDIENDO SU DEPARTAMENTO EN MENOS DE 4 MESES Y ASI MUDARSE A ALGO MAS GRANDE
                    <br />
                    <br />
                    <b className='text-2xl'><span className='max-md:text-2xl md:text-3xl'>GRATUITO solo X 14 DIAS </span><br />( Normalmente Usd 140)</b>
                </p>
            </div>
        </section>
    )
}

export default BloqueDos