import React from 'react'

function BloqueDiezYSeis() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center gap-5'>
            <p className='text-lg bg-[#31d931] button-animate'>Pero  mira este secreto que tengo acá…</p>
            <h2 className='text-[#0070c0] text-center'>
                AL PRECIO CORRECTO HAY MUCHISIMAS CHANCES DE QUE <br />
                VENDAS TU PROPIEDAD EN MENOS DE 4 MESES,<br />
                (POR ESO ES CLAVE UNA TASACION PROFESIONAL Y ACTUALIZADA)
            </h2>
            <p className='text-lg text-center'>
                POR QUE?<br /><br />
                Por que el 64% de las propiedades está fuertemente sobrevaluado <br />
                Solo el 11% está a precio de mercado actual
            </p>
            <img src="./imgs/landing-2/estadistica.png" className='h-1/3 w-1/3' alt="" />
        </div>
    )
}

export default BloqueDiezYSeis