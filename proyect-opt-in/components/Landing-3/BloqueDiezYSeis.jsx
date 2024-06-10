import React from 'react'

function BloqueDiezYSeis() {
    return (
        <div className='min-h-screen  min-w-screen flex flex-col items-center justify-center md:px-24 max-md:h-full gap-5 max-md:p-5'>
            <h2 className='md:text-6xl max-md:text-4xl text-center'><b>Por que no tenemos competencia?</b></h2>
            <div className='flex max-md:flex-col w-full max-md:gap-3'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src="./imgs/landing-3/main4.jpg" className='w-[70%] h-[70%]' alt="" />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center items-center gap-3'>
                    <div className='flex gap-3'>
                        <div className='w-1/2 bg-[#4472c4] p-2 flex justify-center items-center rounded-lg text-white sombra-caja'>
                            <p className='text-center'>
                                <b className='text-xl'>PRODUCTO ÚNICO EN EL MERCADO</b> <br />
                                Nadie te dará un servicio integral 360  y DEFENDERÁ TUS INTERESES como nosotros
                            </p>
                        </div>
                        <div className='w-1/2 bg-[#4472c4] p-2 flex justify-center items-center rounded-lg text-white sombra-caja'>
                            <p className='text-center'>
                                <b className='text-xl'>NOS OCUPAMOS DE TODO</b>
                                <br />
                                Decirte que arreglar en tu casa  y mandarte un proveedor de pintura, recomendarte un escribano, hacer una consulta legal, darte la caja de seguridad para que firmes, pintar y decorar tu nueva casa,  entre otras cosas
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-1/2 bg-[#4472c4] p-2 flex justify-center items-center rounded-lg text-white sombra-caja'>
                            <p className='text-center'>
                                <b className='text-xl'>AHORRA TIEMPO Y DINERO</b> <br />
                                Cambiaste varias veces de inmobiliaria siempre con malos resultados?
                                Evita  perder meses o años para vender tu departamento.
                                Evita que las cosas se traben,  evita sorpresas y costos ocultos
                            </p>
                        </div>
                        <div className='w-1/2 bg-[#4472c4] p-2 flex justify-center items-center rounded-lg text-white sombra-caja'>
                            <p className='text-center'>
                                <b className='text-xl'>TE DECIMOS LA VERDAD</b> <br />
                                Acerca del real precio de tu departamento.
                                No hacemos como otros que te dicen todo que si para tomar tu propiedad, pero luego no hacen nada   y no se vende x años
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-1/2 bg-[#4472c4] p-2 flex justify-center items-center rounded-lg text-white sombra-caja'>
                            <p className='text-center'>
                                <b className='text-xl'>TE ENTREGAMOS<br /> MUCHO VALOR</b> <br />
                                De que sirve pagar barato si no podés vender tu departamento Y NO PODÉS CONCRETAR TU SUEÑO DE MUDARTE A ALGO MÁS GRANDE
                            </p>
                        </div>
                        <div className='w-1/2 bg-[#4472c4] p-2 flex justify-center items-center rounded-lg text-white sombra-caja'>
                            <p className='text-center'>
                                <b className='text-xl'>TE GUIAMOS DE<br /> PRINCIPIO A FIN</b> <br />
                                Te anticipamos cada paso.
                                Te acompañamos  y te guiamos desde la entrevista inicial hasta la firma de la escritura

                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BloqueDiezYSeis