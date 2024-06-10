import React from 'react'

function BloqueDoce() {
    return (
        <div className='min-h-screen md:h-screen min-w-screen flex flex-col items-center justify-center md:px-24 md:mb-80 max-md:flex-wrap max-md:h-full gap-5 max-md:px-5 max-md:pb-20'>
            <div className='w-[80%] flex justify-center pt-10 relative'>
                <p className='bg-[#ffff00] text-xl p-2 absolute left-0 top-0 -rotate-12 -translate-x-1/4 translate-y-1/3'><b>Con triple garantÍa</b></p>
                <h2 className='text-3xl text-white bg-[#1a1da0] text-center p-5 w-full'>
                    VALOR INCREMENTAL QUE OBTENES <br />
                    EN COSAS CONCRETAS Y UTILES <br />
                    <b className='text-5xl text-white'>USD 6.000 </b>
                </h2>
            </div>
            <div className='relative flex justify-center items-center h-[35%]'>
                <img src="/imgs/landing-3/arrow-down-6.svg" className='h-full w-1/2' alt="" />
                <p className='absolute text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl'>¡MIRA!</p>
            </div>
            <div className='flex w-full md:gap-20 max-md:gap-1'>
                <div className='w-1/2 flex md:justify-end'>
                    <ul className='pl-3 '>
                        <li className='text-[#ff0000]'>ESCUCHA ACTIVA <br className='md:hidden'/> + TASACION PROFESIONAL</li>
                        <li>HOME REFRESH ( arreglos de alto impacto)</li>
                        <li>PACK DE IMAGENES PROFESIONALES</li>
                        <li>MEGAFONO COMERCIAL</li>
                        <li>RESPUESTA RAPIDA</li>
                        <li>BUSQUEDA ACTIVA</li>
                        <li>NUMEROS CRISTALINOS</li>
                        <li>VISIBILIZACION. Asesoramiento legal y contable</li>
                        <li>FIRMA SEGURA ESCRIBANA + CAJA DE SEGURIDAD</li>
                    </ul>
                </div>
                <div className='w-1/2 flex md:justify-start'>
                    <ul className='pl-3'>
                        <li>SERVICIO DE EMPACADO DE MUDANZA SIN CARGO</li>
                        <li>DEPOSITO DE MUEBLES sin cargo x 1 mes</li>
                        <li>MANO DE OBRA  PINTURA DE TU NUEVA CASA sin cargo</li>
                        <li>MANO DE OBRA PARA  COLOCACION DE 1 AIRE </li>
                        <li>ACONDICIONADO. SIN CARGO</li>
                        <li>VISITA DE UNA DECORADORA SIN CARGO</li>
                        <li>BONO PARA COMPRA DE MUEBLES</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BloqueDoce