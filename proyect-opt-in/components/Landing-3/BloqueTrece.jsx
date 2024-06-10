import React from 'react'

function BloqueTrece() {
    return (
        <div className='min-h-screen  min-w-screen flex flex-col items-center justify-center md:px-24 md:mb-44 max-md:h-full gap-5 max-md:p-5'>
            <h2 className='text-center text-4xl text-[#0070c0]'>
                <b>
                    … POR SI TODAVÍA TE QUEDARON DUDAS, <br />
                    HAGAMOS ESTA COMPARACIÓN CON LA COMPETENCIA
                </b>
            </h2>
            <div className='flex w-full max-md:flex-wrap md:gap-20'>
                <div className='flex flex-col justify-center items-center md:w-[40%] gap-3'>
                    <img src="./imgs/landing-3/justice.jpg" className='w-1/3' alt="" />
                    <p className='text-center text-2xl'>
                        Repasemos para que  tengas claro, <br />
                        cuanto pagarías y que valor obtendrías <br />
                        por poner en venta  tu departamento <br />
                        y comprar uno nuevo <br />
                        con  una inmobiliaria competidora <br />
                    </p>
                </div>
                <img src="./imgs/landing-3/inmobiliaria juan - Sheet1-1.png" className='md:h-[50%] md:w-[52%]' alt="" />
            </div>
        </div>
    )
}

export default BloqueTrece