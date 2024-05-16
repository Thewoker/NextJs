import React from 'react'

function BloqueQuince() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-5'>
            <h2 className='text-[#1070c0] text-center'>Te aflije la falta de espacio? Altas expensas? La ubicación?</h2>
            <h2 className='text-[#1070c0] text-center text-2xl'>
                <b>
                    ARGENTINA: ESTE ES EL MEJOR MOMENTO PARA MUDARTE <br />
                    A UN DEPARTAMENTO MAS GRANDE
                </b>
            </h2>
            <p className='text-sm text-center text-[#0070ce]'>
                <b>Hay muchos Mitos. Te suena?</b><br />
                “Antes, vender una propiedad era fácil, ahora  con la ausencia de crédito y la crisis económica no se vende nada”
            </p>
            <p className='text-center'>
                <b className='text-[#ff0000]'>FALSO QUE NO SE VENDE NADA! </b><br />
                En 2023 se escrituraron 40.500 propiedades mas que en 2022, 21, 20, 19, 15, 14, 13 y casi como 2016 <br />
                Solo en Dic 2023 hubo 4,500 escrituras y con tendencia positiva.
            </p>
            <div className='flex justify-center items-center '>
                <img src="./imgs/landing-2/grafico.png" className='w-1/4 h-1/4' alt="" />
                <img src="./imgs/landing-2/grafico2.png" className='w-1/4 h-1/4' alt="" />
            </div>
            <p>Y por eso mismo estamos ante una <b>OPORTUNIDAD HISTÓRICA..</b></p>
        </div>
    )
}

export default BloqueQuince