import React from 'react'

function BloqueVeinte() {
    return (
        <div className='min-h-screen min-w-screen md:max-h-screen grid grid-cols-3 grid-rows-2 items-center justify-center overflow-y-hidden max-md:h-full'>
            <div className='row-span-1 col-span-3 grid grid-cols-3'>
                <div className='md:col-span-2 max-md:col-span-3 flex flex-col justify-center items-center'>
                    <h2 className='text-[#0070c0] text-2xl text-center'>¿QUÉ PASA CUANDO LOS PRECIOS SUBEN?</h2>
                    <div className='flex justify-center gap-3'>
                        <img src="./imgs/landing-2/etiqueta3.png" className='h-[60px]' alt="" />
                        <p className='p-2 text-center'>
                            Vas a poder vender tu casa un poco mas alto, pero.. <br />
                            la diferencia cash que debes invertir para mudarte <b>AUMENTA</b>!!!
                        </p>
                        <img src="./imgs/landing-2/etiqueta2.png" className='h-[60px]' alt="" />
                    </div>
                </div>
                <div className='md:col-span-1 max-md:col-span-3'>
                    <h2 className='text-xl text-center'>
                        PARA APROVECHAR ESTE EXCELENTE MOMENTO PARA MUDARTE CON MINIMA <br />
                        DIFERENCIA NECESITAS VENDER RAPIDO <br />
                        MIRA LA COMPARACION ENTRE UNA VENTA CON EL METODO COMUN Y CON LOS <br />5 TRUCOS
                    </h2>
                    <h2 className='text-xl text-center text-[#ff0000]'>LO HARAS 16 MESES ANTES!</h2>
                </div>
            </div>
            <div className='row-span-1 col-span-3 grid grid-cols-3'>
                <div className='md:col-span-2 max-md:col-span-3 flex justify-center items-center gap-5'>
                    <img src="./imgs/landing-2/grafico8.png" className='h-[40%]' alt="" />
                    <img src="./imgs/landing-2/arrow.svg" className='h-[10%]' alt="" />
                    <img src="./imgs/landing-2/grafico9.png" className='h-[40%]' alt="" />
                </div>
                <div className='md:col-span-1 max-md:col-span-3 flex flex-col justify-center items-center w-full gap-10'>
                    <img src="./imgs/landing-2/grafico7.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BloqueVeinte