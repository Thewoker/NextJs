import React from 'react'

function BloqueNueve() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center md:px-24 md:pt-96 max-md:flex-wrap max-md:h-full gap-20'>
            <div className='w-full h-1/2'>
                <h2 className='text-[#ff0000] text-center text-6xl'>
                    ANIMATE A DAR EL PASO! <br />
                    concreta el sueño de mudarte a algo mas grande. <br /><br /> TODO LLAVE EN MANO
                </h2>
            </div>
            <div className='w-screen h-1/2 bg-[#0000ff] flex flex-col justify-center items-center gap-5 p-7'>
                <h2 className='text-[#ff0000] text-center text-4xl p-2'>
                    <b>CUPOS LIMITADOS 20 PERSONAS</b>
                </h2>
                <p className='text-white'>
                    Reserva tu cupo por USD 100, congela el precio de la Mentoría y obtené la tasación de tu propiedad <br />
                    (Una vez que recibas y apruebes nuestra tasación pagaras el saldo. Aprox 7 dias)
                </p>
                <button className='button-animate p-3 text-center text-2xl bg-[#01ffff] rounded-lg w-2/3 max-md:my-20'><h2 className='text-black roboto'><b>INSCRIBIRME A LA MENTORIA</b></h2></button>
                <p className='text-white text-center text-sm'>
                    🔐Reserva segura. No te preocupes, si no estas conforme con nuestro servicio o con nuestra tasación, <br />
                    te devolvemos el dinero sin preguntas ( ver garantías 1-2-3)
                </p>
            </div>
        </div>
    )
}

export default BloqueNueve