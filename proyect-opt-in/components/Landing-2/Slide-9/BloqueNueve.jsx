import React from 'react'

export default function BloqueNueve() {
    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center division-declinada-invertida max-md:flex-wrap max-md:h-full'>
            <div className='flex flex-col items-center justify-center gap-10 w-full max-md:pb-14'>
                <h4 className='text-center text-lg roboto text-white'>
                    <b>Te acabo de mostrar 10 testimonios <br />
                        CUANTO MAS TENGO QUE MOSTRARTE PARA QUE ME CREAS?</b>
                </h4>
                <h3 className='text-[#43e1ca] text-center text-[1.7rem]'>
                    <b>SIN RELLENO: MATERIAL VALIOSÍSIMO RESUMIDO <br />
                        EN LO QUE DURA UNA PELICULA DE  NETFLIX</b>
                </h3>
                <button className='p-10 rounded-lg bg-[#01ffff] text-black roboto button-animate sombra-caja '><b>Si, quiero acceso inmediato al <br />ENTRENAMIENTO GRATUITO<br/> <span className='text-2xl'>Los 5 TRUCOS</span></b></button>
            </div>
            <div className='flex flex-col w-full justify-center items-center gap-10'>
                <div className='bg-[#4118f0] w-full'>
                    <h2 className='text-white text-3xl text-center'>
                        Al ver los resultados y  la aceptación <br /> que tenia en la gente... Pense…
                        Es Hora De Mostrar MASIVAMENTE Mis 5 Trucos.
                    </h2>
                </div>
                <h3 className='text-center roboto text-xl'>Al enseñar estas cosas, las personas preguntaban siempre lo mismo... <br />...PERO FUNCIONARÁ PARA MI?</h3>
                <img src="./imgs/landing-2/si.jpg" className='h-1/5 w-1/5' alt="" />
                <h4 className='text-5xl max-md:text-center'><b>La Respuesta es <span className='max-md:text-7xl'>SI</span></b></h4>
            </div>
        </div>
    )
}
