import React from 'react'

function BloqueCuatro() {
    return (
        <div className='min-h-screen min-w-screen flex items-center px-24 division-img-1'>
            <div className='flex flex-col items-center w-full gap-5'>
                <h2 className='montserrat text-center text-lg'><b>Y ME PERDI DE COMPRAR DEPARTAMENTOS QUE ERAN <br />VERDADERAS OPORTUNIDADES</b></h2>
                <img src="./imgs/landing-2/decepcion.png" className='h-1/2 w-1/2' alt="" />
                <h2 className='roboto text-center text-red-600'><b>Y YO MIENTRAS VIVIENDO EN LO DE MI MADRE!!!</b></h2>
            </div>
            <div className='flex flex-col w-full gap-5 items-center'>
                <div className='circulo h-[250px] w-[250px] flex justify-center items-center text-white montserrat p-5'><h3 className='text-center'>ENTONCES ME OBSESIONÉ.. <br />ESTABA JUGANDO CON FUEGO..</h3></div>
                <div className='circulo h-[250px] w-[250px] flex justify-center items-center text-white montserrat p-5'><h3 className='text-center'>.. SI NO APRENDIA <br />..IBA A TERMINAR <span className='text-[#ff0000]'>CON UNA DEMANDA DE MI EX MUJER</span></h3></div>
            </div>
        </div>
    )
}

export default BloqueCuatro