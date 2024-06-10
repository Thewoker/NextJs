import React from 'react'

function BloqueOnce() {
    return (
        <div className='min-h-screen md:h-full min-w-screen flex flex-col items-center md:px-24 md:pt-24 overflow-hidden max-md:h-full gap-5 max-md:px-5 max-md:py-20'>
            <div className='flex flex-col h-[50%] w-full items-center gap-5'>
                <h2 className='underline text-center text-3xl'><b>RESUMIENDO</b></h2>
                <div className='flex flex-col justify-center items-center md:hidden'>
                    <h2 className='text-center text-lg'>
                        <b className='text-xl'>Precio</b> <br />
                        ( Lo que usted paga)
                    </h2>
                </div>
                <img src="/imgs/landing-3/resumiendo.jpg" className='w-full max-md:hidden' alt="" />
                <img src="/imgs/landing-3/resumiendo mobile-1.png" className='w-full md:hidden' alt="" />
                <div className='flex flex-col justify-center items-center md:hidden'>
                    <h2 className='text-center text-lg'>
                        <b className='text-xl'>
                            Valor
                        </b> <br />
                        ( lo que usted recibe)
                    </h2>
                </div>
                <div className='w-screen bg-[#0000ff] md:hidden flex flex-col justify-center items-center p-5 gap-5'>
                    <h2 className='text-white text-center text-5xl'>6000</h2>
                    <p className='text-white text-center text-xl'>
                        Y LO MAS IMPORTANTE, QUE PODES CUMPLIR
                        CON EL SUEÑO FAMILIAR DE MUDARTE
                    </p>
                </div>
            </div>
            <div className='p-5 pt-44'>
                <h2 className='text-center md:text-5xl max-md:text-4xl max-md:text-[#ff0000]'>NUESTRO SERVICIO ES UNICO EN EL MERCADO  NO TIENE COMPETENCIA</h2>
            </div>
        </div>
    )
}

export default BloqueOnce