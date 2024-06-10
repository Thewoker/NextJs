import React from 'react'
import BloqueCatorcePlus from './../Landing-2/Slide-14/BloqueCatorcePlus';

function BloqueDiez() {
    return (
        <div className='min-h-screen md:h-screen min-w-screen flex max-md:flex-col relative items-center md:px-24 md:pt-24 max-md:h-full gap-5 division-inclinada max-md:p-5 max-md:py-20'>
            <div className='md:w-1/2'>
                <h2 className='text-center text-4xl md:px-10'>
                    Pero entonces como es? <br />
                    Pagas USD 977 y recibis <br /><b className='text-5xl'>Usd 6000 </b><br /> en servicios y bonos, <br />
                    y esto además te permite cumplir tu sueño de mudarte a algo mas grande? <br /><br />
                    <b className='text-7xl'>SI!</b> <br /><br /><br />
                    ……pero esto no es todo!
                </h2>
            </div>
            <div className='md:w-1/2'>
                <h2 className='text-center text-4xl md:px-10 md:text-white'>
                    <b className='text-5xl'>BONO RECO</b> <br /><br />
                    <b className='text-[#ff0000] text-7xl'>Usd 500 </b><br /><br />
                    Si   en algún momento del proceso nos recomendas a una persona que ingrese su propiedad al sistema vende fácil 9,0 ( igual a este) y lo hace de manera efectiva <br />
                    recibiras el BONO RECO  y se te  reintegraran <span className='text-5xl'>USD 500</span> (*) <br />
                </h2>
                <p className='text-xs md:text-white absolute right-5 bottom-0'>(*) El reintegro se efectua a los 30 días  en que la persona firme el contrato de adhesion</p>
            </div>
        </div>
    )
}

export default BloqueDiez