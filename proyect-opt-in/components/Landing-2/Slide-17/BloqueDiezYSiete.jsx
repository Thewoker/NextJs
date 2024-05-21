import React from 'react'

function BloqueDiezYSiete() {
    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center gap-10 division-inclinada max-md:flex-wrap max-md:h-full max-md:px-10'>
            <div className='flex flex-col items-center justify-center w-full gap-10'>
                <h2 className='text-2xl text-center'><b>Y TE VOY A CONTAR ALGO QUE NO MUCHA GENTE <br /> TIENE CLARO…</b></h2>
                <div className='flex relative w-full h-full'>
                    <img src="./imgs/landing-2/etiqueta.png" className='h-1/2 -rotate-12 absolute -top-10 left-3' alt="" />
                    <p className='text-center pl-10'>Cuando los precios de mercado <span className='text-[#ff0000]'>bajan</span> LA DIFERENCIA CASH QUE DEBES INVERTIR ES MENOR!!!!! <br />(para mudarte a algo más grande)</p>
                    <img src="./imgs/landing-2/etiqueta2.png" className='h-[10%] w-[10%]' alt="" />
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <img src="./imgs/landing-2/grafico3.png" className='w-1/3 h-1/3' alt="" />
                    <img src="./imgs/landing-2/arrow.svg" className='w-[5%] h-[5%]' alt="" />
                    <img src="./imgs/landing-2/grafico4.png" className='w-1/3 h-1/3' alt="" />
                </div>
            </div>
            <div className='flex flex-col w-full h-full justify-center items-center gap-5'>
                <h3 className='md:text-white text-center text-xl'><b>PERO ENTONCES CUANDO LOS PRECIOS ESTAN BAJOS VENDO <br /> BARATO PERO COMPRO BARATO Y LA DIFERENCIA A INVERTIR ES <br />MAS PEUQEÑA?</b></h3>
                <h2 className='md:text-white text-center text-6xl'><b>Si</b></h2>
                <h3 className='md:text-white text-center text-xl'><b>PERO ESTA OPORTUNIDAD NO VA A DURAR PARA <br />SIEMPRE</b></h3>
            </div>
        </div>
    )
}

export default BloqueDiezYSiete