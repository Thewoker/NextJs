import React from 'react'

function BloqueDiezYOcho() {
  return (
    <div className='min-h-screen min-w-screen grid grid-cols-3 grid-rows-3 items-center justify-center division-declinada max-md:h-full'>
      <div className='row-span-1 col-span-3 grid grid-cols-3'>
        <h2 className='md:text-white text-2xl text-center md:col-span-1 max-md:col-span-3'>…por la nueva ley de alquileres <br />HAY MENOS DEPARTAMENTOS EN VENTA!!!!</h2>
        <h2 className='text-[#0070c0] text-2xl text-center md:col-span-2 max-md:col-span-3'><b>EL COSTO DE LA CONSTRUCCIÓN ESTÁ <br />CRECIENDO MUCHO MEDIDO EN DÓLARES</b></h2>
      </div>
      <div className='row-span-2 max-md:col-span-3 col-span-3 grid grid-cols-3'>
        <div className='md:col-span-1 max-md:col-span-3 flex flex-col justify-center items-center w-full gap-10'>
          <img src="./imgs/landing-2/grafico5.png" className='max-md:w-[250px]' alt="" />
        </div>
        <div className='md:col-span-2 max-md:col-span-3 flex justify-center items-center px-5 max-md:flex-wrap max-md:h-full'>
          <div className='p-5 flex flex-col gap-y-5 justify-center items-center w-full max-md:flex-wrap max-md:h-full'>
            <img src="./imgs/landing-2/diario.png" className='w-[70%]' alt="" />
            <img src="./imgs/landing-2/diario2.png" className='w-[70%]' alt="" />
            <img src="./imgs/landing-2/diario3.png" className='w-[70%]' alt="" />
          </div>
          <div className='flex flex-col justify-center items-center gap-2 w-full '>
            <img src="./imgs/landing-2/grafico6.png" className='w-[80%] h[80%]' alt="" />
            <div className='borde-caja'>
              <p className='text-center borde-caja p-1'>
                <b>Mientras que el CAC creció 78,4% el dólar blue solo <br /> creció el 25,6%.</b>
                <br /><br />
                <b>Esto encarece  fuertemente los costos de <br /> construcción en dólares</b>
              </p>
              <p className='text-center borde-caja p-1 bg-[#ffc000]'>
                <b>Los precios de las propiedades nuevas aumentan, y <br />esto presionará sobre los precios de las usadas</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BloqueDiezYOcho