import React from 'react'

function BloqueCatorce() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center md:justify-center max-md:justify-start gap-20 max-md:px-10 '>
            <h2 className='text-[#00e720] sombra-texto max-md:text-3xl md:text-5xl max-md:text-center'><b>¿Por qué es gratuito el Entrenamiento?</b></h2>
            <p className='text-center sombra-chica-texto max-md:text-lg md:text-2xl'>
                PORQUE QUEREMOS AYUDAR A LA MAYOR CANTIDAD DE GENTE POSIBLE, <br />
                CUANTO MAS GENTE SEPA ESTOS 5 TRUCOS MAS PUJANTE SERA EL MERCADO INMOBILIARIO.<br />
                ADEMAS PORQUE LUEGO DE ESTE CURSO SOLO <span className='underline'>UNOS POCOS QUE REUNAN DETERMINADOS REQUISITOS</span><br />
                <span className='underline'>PODRAN APLICAR A LA MENTORIA</span> EN DONDE LOS PODRE AYUDAR PERSONALMENTE PASO A PASO
            </p>
        </div>
    )
}

export default BloqueCatorce