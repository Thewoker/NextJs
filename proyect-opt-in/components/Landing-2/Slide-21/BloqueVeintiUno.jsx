import React from 'react'

function BloqueVeintiUno() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-8'>
            <div className='w-full p-3 bg-[#4118f0]'><h2 className='text-center text-white roboto text-xl'><b>No hay Ninguna Trampa.</b></h2></div>
            <p className='text-center'>
                Por eso <b>tenemos más casos de éxito que el 99%</b> de los «gurús» de internet! <br />
                <b>..Pero este entrenamiento GRATUITO Es Una Oferta Por Poco Tiempo.</b> <br />
                <b>Actúa rápido.</b> Los 5 <b>TRUCOS pueden cambiar tu vida para siempre</b>.
            </p>
            <div className='w-full flex justify-center items-center gap-3 max-md:flex-wrap max-md:h-full'>
                <div className='flex flex-col justify-center items-center p-4 bg-[#1a1da0] gap-3 h-[250px] w-[250px] rounded-2xl'>
                    <img src="./imgs/landing-2/grupo.webp" className='h-[35%] w-[35%]' alt="" />
                    <h2 className='text-center text-white roboto text-5xl'>95%</h2>
                    <p className='text-center text-white roboto text-lg'>Satisfaccion Clientes</p>
                </div>
                <div className='flex flex-col justify-center items-center p-4 bg-[#1a1da0] gap-3 h-[250px] w-[250px] rounded-2xl'>
                    <img src="./imgs/landing-2/apartamento.webp" className='h-[35%] w-[35%]' alt="" />
                    <h2 className='text-center text-white roboto text-5xl'>+200</h2>
                    <p className='text-center text-white roboto text-base'>Departamentos Invertidos por Clientes</p>
                </div>
                <div className='flex flex-col justify-center items-center p-4 bg-[#1a1da0] gap-3 h-[250px] w-[250px] rounded-2xl'>
                    <img src="./imgs/landing-2/apreton-de-manos.webp" className='h-[35%] w-[35%]' alt="" />
                    <h2 className='text-center text-white roboto text-5xl'>+300</h2>
                    <p className='text-center text-white roboto text-lg'>Proyectos Relevados</p>
                </div>
                <div className='flex flex-col justify-center items-center p-4 bg-[#1a1da0] gap-1 h-[250px] w-[250px] rounded-2xl'>
                    <img src="./imgs/landing-2/exito.webp" className='h-[35%] w-[35%]' alt="" />
                    <h2 className='text-center text-white roboto text-5xl'>+20</h2>
                    <p className='text-center text-white roboto text-bse'>Proyectos elegidos como los mejores de Argentina HOY</p>
                </div>                
            </div>
            <p className='roboto text-center'>
                VENDE TU DEPARTAMENTO 16 MESES MAS RAPIDO ! <br />
                Y asi podras mudarte a un departamento mas grande y lindo!
            </p>
            <button className='button-animate p-3 text-center text-2xl bg-[#4118f0] rounded-lg w-2/3'><h2 className='text-white roboto'>Si, quiero acceso inmediato al<br /> ENTRENAMIENTO GRATUITO<br /> <b>Los 5 TRUCOS</b></h2></button>
        </div>
    )
}

export default BloqueVeintiUno