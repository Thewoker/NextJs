import React from 'react'

function BloqueViente() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center relative max-md:pt-20'>
            <div className='w-full bg-[#4118f0] p-2 absolute top-14'><h2 className='text-white text-center text-4xl roboto'><b>Pero QUIEN SOY YO PARA AYUDARTE?</b></h2></div>
            <div className='flex w-full gap-10 justify-center items-center md:p-24 max-md:flex-wrap max-md:h-full'>
                <img src="./imgs/landing-2/juan2.png" className='w-[400px] h-[400px]' alt="" />
                <div className='flex flex-col gap-3 w-full max-md:px-10'>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-2xl'>Mi nombre es Juan De Gregorio, 56 años, casado y con tres hermosos hijos.</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-2xl'>Soy Lic en Economía, con postgrados en Negocios, Management, Negociación. </p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-2xl'>Tengo 25 años de experiencia en Comercial, Marketing Publicidad </p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-2xl'>Trabaje en Comercio Exterior y recorrí infinidad de países y culturas aprendiendo de la diversidad</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-2xl'>Hago que las cosas sucedan y eso me enorgullece</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-2xl'>Hace 5 años me volqué al mercado inmobiliario</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src="./imgs/landing-2/check.svg" className='w-[20px] h-[20px]' alt="" />
                        <p className='roboto text-[#ff0000] text-2xl'>¡RUBRO QUE ME APASIONA POR EL POTENCIAL QUE TIENE Y POR COMO SE PUEDE TRANSFORMAR PARA BIEN LA VIDA DE UNA FAMILIA!</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BloqueViente