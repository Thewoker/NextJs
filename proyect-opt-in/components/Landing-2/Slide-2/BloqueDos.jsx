import Button from '@/components/ui/button-rounded-2/Button'
import React from 'react'

function BloqueDos() {
    return (
        <section className='min-h-screen min-w-screen flex items-center px-24 division-inclinada'>
            <div className='min-h-full h-[60vh] w-screen flex justify-center items-center'>
                <button className='p-10 rounded-lg bg-[#1a1da0] text-white roboto button-animate'>Si, quiero acceso inmediato al <br />ENTRENAMIENTO GRATUITO<br/> Los 5 TRUCOS</button>
            </div>
            <div className='flex justify-center items-center min-h-full h-[40vh] w-screen '>
                <p className='text-center text-balance text-white roboto text-lg w-2/3'>
                    SI, Este es <b className='text-2xl'>EL MISMO METODO DE LOS 5 TRUCOS</b><br />
                    que me permitió a mi y a cientos de familias superar la frustración y el estancamiento <br />
                    VENDIENDO SU DEPARTAMENTO EN MENOS DE 4 MESES Y ASI MUDARSE A ALGO MAS GRANDE
                    <br />
                    <br />
                    <b className='text-2xl'>GRATUITO solo X 14 DIAS ( Normalmente Usd 140)</b>
                </p>
            </div>
        </section>
    )
}

export default BloqueDos