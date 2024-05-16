import React from 'react'

function BloqueCatorce() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-20'>
            <h2 className='text-[#00e720] text-4xl sombra-texto'><b>¿Por qué es gratuito el Entrenamiento?</b></h2>
            <p className='text-center sombra-chica-texto'>
                PORQUE QUEREMOS AYUDAR A LA MAYOR CANTIDAD DE GENTE POSIBLE, <br />
                CUANTO MAS GENTE SEPA ESTOS 5 TRUCOS MAS PUJANTE SERA EL MERCADO INMOBILIARIO.<br />
                ADEMAS PORQUE LUEGO DE ESTE CURSO SOLO <span className='underline'>UNOS POCOS QUE REUNAN DETERMINADOS REQUISITOS</span><br />
                <span className='underline'>PODRAN APLICAR A LA MENTORIA</span> EN DONDE LOS PODRE AYUDAR PERSONALMENTE PASO A PASO
            </p>
            <button className='button-animate p-3 text-center text-2xl bg-[#4118f0] rounded-lg w-2/3'><h2 className='text-white roboto'>Si, quiero acceso inmediato al<br /> ENTRENAMIENTO GRATUITO<br /> <b>Los 5 TRUCOS</b></h2></button>

        </div>
    )
}

export default BloqueCatorce