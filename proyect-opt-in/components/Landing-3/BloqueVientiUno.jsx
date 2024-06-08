import React from 'react'

function BloqueVientiUno() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center max-md:pt-20 md:pb-32'>
            <div className='flex w-full items-center justify-center'>
                <div className='flex flex-col justify-center items-center w-1/2 gap-10'>
                    <h2 className='text-center text-5xl text-[#0000ff]'>
                        JuanInmobiliario360 en la TV
                    </h2>
                    <img src="/imgs/landing-1/img2.png" className='scale-125 py-10' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center w-1/2 gap-10'>
                    <h2 className='text-center text-5xl text-[#0000ff]'>
                        JuanInmobiliario360 en Redes
                    </h2>
                    <img src="/imgs/landing-3/redes.jpg" alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#1a1da0] w-full p-1'>
                <img src="./imgs/landing-2/instagram.svg" className='w-[5%] h-[5%]' alt="" />
                <p className='text-center text-white'>
                    TODOS LOS DERECHOS RESERVADOS <br />
                    POLITICAS DE PRIVACIDAD – TERMINOS Y CONDICIONES – DESCARGO DE RESPONSABILIDAD <br />
                    ©️ 2024    @juaninmobiliario360
                </p>
            </div>
        </div>
    )
}

export default BloqueVientiUno