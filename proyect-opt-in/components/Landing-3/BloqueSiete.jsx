import React from 'react'

function BloqueSiete() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center md:px-24 md:pt-24 max-md:flex-wrap max-md:h-full gap-5 max-md:px-5 max-md:pb-20'>
            <h2 className='text-center text-4xl'>
                <b>
                    SI ESTAS ACA ES POR QUE...
                </b>
            </h2>
            <h3 className='text-center p-3 w-full bg-[#ff0000] text-2xl'><b>Cumples con estos requisitos</b></h3>
            <div className='flex md:gap-5 max-md:gap-8'>
                <div className='flex flex-col justify-center items-center w-1/2 gap-2'>
                    <img src="imgs/landing-3/check.png" className="md:w-1/12 max-md:w-1/4 " alt="" />
                    <p className='p-2 bg-[#ffc000] text-center w-full'>Si cumples con estos requisitos</p>
                    <p className='p-2 text-center w-full bg-[#92d050] text-lg'><b>Queres vender tu departamento de 2 y 3 ambientes para <br /> comprar algo mas grande o lindo</b></p>
                    <div className='md:flex gap-3'>
                        <p className='p-2 text-center w-full bg-[#92d050]'>Que sea Departamento o PH,<br /> <b>NO Casa</b></p>
                        <p className='p-2 text-center w-full bg-[#92d050]'>Que cuente con Balcón, Patio o Terraza y no sea interno</p>
                    </div>
                    <p className='p-2 text-center w-full bg-[#92d050]'>Que se encuentre en buenas condiciones, sobre todo baño y cocina. Que no tenga graves problemas de humedad</p>
                    <p className='p-2 text-center w-full bg-[#92d050]'>Ubicado en Palermo, Caballito, Almagro, Belgrano, Recoleta, V. Urquiza, V Crespo</p>
                    <p className='p-2 text-center w-full bg-[#92d050]'>Que no sea en planta baja, ni ultimo piso</p>
                </div>
                <div className='flex flex-col items-center w-1/2'>
                    <img src="imgs/landing-3/check.png" className="md:w-1/12 max-md:w-1/4 " alt="" />
                    <div className='w-full h-full flex justify-center items-center'>
                        <ul className='md:pl-10'>
                            <li className='text-xl'><b>Si estas dispuesto a escuchar y adoptar una tasación actualizada de tu propiedad <br /><br /></b></li>
                            <li className='text-xl'>
                                <b>
                                    Si estas abierto a escuchar recomendaciones para mejorar el aspecto de tu
                                    propiedad y llevarlas a cabo <br /><br />
                                </b>
                            </li>
                            <li className='text-xl'>
                                <b>
                                Debes contar con escritura o sucesión con declaratoria de herederos
                                </b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BloqueSiete