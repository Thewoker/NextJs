import React from 'react'

function BloqueCatorce() {
    return (
        <div className='min-h-screen  min-w-screen flex flex-col items-center justify-center md:px-24 max-md:flex-wrap max-md:h-full gap-5 max-md:py-20 max-md:px-5'>
            <p className='text-center text-3xl'><b>Para darte tranquilidad te cuento los próximos pasos</b></p>
            <div className='flex max-md:flex-col w-full gap-3 items-center'>
                <div className='flex bg-[#ed7d31] w-[200px] h-[250px] justify-center items-center px-2 rounded-2xl'>
                    <p className=' text-center'>
                        Tocas el botón y aterrizas en  en la pagina para pagar
                    </p>
                </div>
                <img src="./imgs/landing-3/arrow-right-orange.svg" className='w-[5%] h-[5%] max-md:hidden' alt="" />
                <img src="./imgs/landing-3/down-arrow-download-orange.svg" className='w-[10%] h-[10%] md:hidden' alt="" />
                <div className='flex bg-[#a5a5a5] w-[200px] h-[250px] justify-center items-center px-2 rounded-2xl'>
                    <p className=' text-center'>
                        Alli pagaras solo Usd 100 para reservar el CUPO y obtener la TASACION
                    </p>
                </div>
                <img src="./imgs/landing-3/arrow-right-gray.svg" className='w-[5%] h-[5%] max-md:hidden' alt="" />
                <img src="./imgs/landing-3/down-arrow-download-gray.svg" className='w-[10%] h-[10%] md:hidden' alt="" />
                <div className='flex bg-[#ffc000] w-[200px] h-[250px] justify-center items-center px-2 rounded-2xl'>
                    <p className=' text-center'>
                        Recibiras la tasación en el transcurso de 7 dias
                    </p>
                </div>
                <img src="./imgs/landing-3/arrow-right-yellow.svg" className='w-[5%] h-[5%] max-md:hidden' alt="" />
                <img src="./imgs/landing-3/down-arrow-download-yellow.svg" className='w-[10%] h-[10%] md:hidden' alt="" />
                <div className='flex bg-[#599bd5] w-[200px] h-[250px] justify-center items-center px-2 rounded-2xl'>
                    <p className=' text-center'>
                        Si apruebas la tasación tendrás que pagar el SALDO de la MENTORIA
                    </p>
                </div>
                <img src="./imgs/landing-3/arrow-right-light-blue.svg" className='w-[5%] h-[5%] max-md:hidden' alt="" />
                <img src="./imgs/landing-3/down-arrow-download-light-bluee.svg" className='w-[10%] h-[10%] md:hidden' alt="" />
                <div className='flex bg-[#70ad47] w-[200px] h-[250px] justify-center items-center px-2 rounded-2xl'>
                    <p className=' text-center'>
                        SI NO APRUEBAS la TASACION se te reintegrará el dinero dentro de los 7 días desde el rechazo de la tasacion
                    </p>
                </div>
                {/* <img src="./imgs/landing-3/arrow-right-green.svg" className='w-[5%] h-[5%]' alt="" /> */}
            </div>
            <h2 className='text-center text-4xl mb-10 mt-32'>
                <b>Inscribite HOY MISMO! TODO LLAVE EN MANO</b>  <br />
                TRES GARANTIAS + 1 CONTRATO PROTEGEN TU DECISION.
            </h2>
            <div className='flex flex-col w-full justify-center items-center borde-caja p-5 gap-10 mb-10'>
                <p className='text-center'>
                    Reserva tu cupo por USD 100, congela el precio de la Mentoría y obtené la tasación de tu propiedad <br />
                    (Una vez que recibas y apruebes nuestra tasación <span className='underline'>pagaras el saldo. Aprox 7 dias)</span>
                </p>
                <button className='button-animate p-3 text-center text-2xl bg-[#0000ff] rounded-lg w-2/3 max-md:my-20'><h2 className='text-white roboto'><b>INSCRIBIRME A LA MENTORIA</b></h2></button>
                <p className='text-center text-xs'>
                    🔐Reserva segura. No te preocupes, si no estas conforme con nuestro servicio o con nuestra tasación, <br />
                    te devolvemos el dinero sin preguntas ( ver garantías 1-2-3)
                </p>
            </div>
        </div>
    )
}

export default BloqueCatorce