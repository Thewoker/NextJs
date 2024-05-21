import React from 'react'

function BloqueCuatro() {
    return (
        <div className='min-h-screen min-w-screen flex items-center md:px-24 division-img-1 max-md:flex-wrap max-md:h-full max-md:p-10'>
            <div className='flex flex-col items-center max-md:w-full md:w-[60%] gap-5'>
                <p className='text-center roboto max-md:text-3xl md:text-3xl'>
                PASARON MESES SIN NINGUN RESULTADO<br />SUME A UNA SEGUNDA INMOBILIARIA Y PEOR!! <br />AL NO SER EXCLUSIVA MENOS COMPROMISO AUN<br /><br /><span className='text-[#ff0000]'>TARDARON AÑOS EN VENDERLA!!</span>
                </p>
            </div>
            <div className='flex flex-col w-full gap-5 items-center max-md:w-full md:w-[40%]'>
                <div className=' flex justify-center items-center montserrat p-5'><h3 className='text-center text-2xl'><b>Y ME PERDI DE COMPRAR DEPARTAMENTOS QUE ERAN <br />VERDADERAS OPORTUNIDADES</b></h3></div>
                <img src="./imgs/landing-2/decepcion.png" className='h-1/2 w-1/2' alt="" />
                <div className=' flex justify-center items-center montserrat p-5'><h3 className='text-center text-2xl text-[#ff0000]'><b>Y YO MIENTRAS VIVIENDO EN LO DE MI MADRE!!!</b></h3></div>
            </div>
        </div>
    )
}

export default BloqueCuatro