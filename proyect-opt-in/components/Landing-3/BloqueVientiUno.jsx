import React from 'react'

function BloqueVientiUno() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center max-md:pt-20 md:pb-32 max-md:p-5'>
            <div className='flex w-full items-center justify-center max-md:flex-col'>
                <div className='flex flex-col justify-center items-center w-1/2 gap-10'>
                    <h2 className='text-center md:text-5xl max-md:text-4xl text-[#0000ff]'>
                        JuanInmobiliario360 en la TV
                    </h2>
                    <img src="/imgs/landing-1/img2.png" className='scale-125 py-10' alt="" />
                </div>
                <div className='flex flex-col justify-center items-center w-1/2 gap-10'>
                    <h2 className='text-center md:text-5xl max-md:text-4xl text-[#0000ff]'>
                        JuanInmobiliario360 en Redes
                    </h2>
                    <img src="/imgs/landing-3/redes.jpg" className='max-md:scale-150 max-md:py-16' alt="" />
                </div>
            </div>
        </div>
    )
}

export default BloqueVientiUno