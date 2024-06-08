import React from 'react'

function BloqueOnce() {
    return (
        <div className='min-h-screen md:h-full min-w-screen flex flex-col items-center md:px-24 md:pt-24 max-md:flex-wrap overflow-hidden max-md:h-full gap-5'>
            <div className='flex flex-col h-[50%] w-full items-center gap-5'>
                <h2 className='underline text-center text-3xl'><b>RESUMIENDO</b></h2>
                <img src="/imgs/landing-3/resumiendo.jpg" className='w-full' alt="" />
            </div>
            <div className='p-5 pt-44'>
                <h2 className='text-center text-5xl'>NUESTRO SERVICIO ES UNICO EN EL MERCADO  NO TIENE COMPETENCIA</h2>
            </div>
        </div>
    )
}

export default BloqueOnce