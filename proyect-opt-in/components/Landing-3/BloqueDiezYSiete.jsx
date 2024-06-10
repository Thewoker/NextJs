import React from 'react'

function BloqueDiezYSiete() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center justify-center md:px-24 max-md:h-full gap-5 max-md:p-5'>
            <div className='flex w-full md:gap-10 max-md:gap-3'>
                <div className='flex flex-col gap-5 w-1/2 bg-[#4472c4] rounded-2xl p-5 text-center sombra-caja'>
                    <h2 className='md:text-3xl max-md:text-xl text-white'>SI CUMPLES LAS CONDICIONES <br /> EL MOMENTO ES AHORA!</h2>
                    <p className='text-white'>
                        <b>
                            Ni mañana ni pasado es ahora
                            No sabemos cuanto aumentaran los precios de las propiedades en los próximos meses agrandando la cantidad de cash que debes invertir para mudarte
                        </b>
                    </p>
                </div><div className='flex flex-col gap-5 w-1/2 bg-[#4472c4] rounded-2xl p-5 text-center sombra-caja'>
                    <h2 className='md:text-3xl max-md:text-xl text-white'>PERDELE EL MIEDO</h2>
                    <p className=' text-white'>
                        <b>
                            Tenes miedo por que no sabes como vender una casa, como buscar otra al mismo tiempo, de donde sacar un escribano, como mover tu dinero sin que te lo roben, que no te estafen con las comisiones e impuestos.
                            Es comprensible! <br /><br />
                            ESTAMOS PARA AYUDARTE EN TODO EL PROCESO
                            DE PRINCIPIO A FIN
                        </b>
                    </p>
                </div>
            </div>
            <div className='flex flex-col w-full bg-[#4472c4] rounded-2xl p-5 gap-5 sombra-caja'>
                <h2 className='text-5xl text-white text-center w-full'>Te parece cara la MENTORÍA?</h2>
                <div className='flex w-full items-center gap-3 justify-center '>
                    <img src="/imgs/landing-3/check-circle.svg" className='h-[3%] w-[3%]' alt="" />
                    <p className=' text-white text-xl'><b>Caro es no poder vender tu departamento durante años</b></p>
                    <img src="/imgs/landing-3/check-circle.svg" className='h-[3%] w-[3%]' alt="" />
                </div>
                <div className='flex w-full items-center gap-3 justify-center'>
                    <img src="/imgs/landing-3/check-circle.svg" className='h-[3%] w-[3%]' alt="" />
                    <p className=' text-white text-xl'><b>Caro es que vos y tu familia no puedan concretar su sueño de mudarse a algo mas grande y cómodo</b></p>
                    <img src="/imgs/landing-3/check-circle.svg" className='h-[3%] w-[3%]' alt="" />
                </div>
                <div className='flex w-full items-center gap-3 justify-center'>
                    <img src="/imgs/landing-3/check-circle.svg" className='h-[3%] w-[3%]' alt="" />
                    <p className='underline text-white text-xl'><b>Si te parece caro es por que tal vez  aun no ha llegado tu momento de mudarte.
                        Aun no lo deseas con toda tu alma</b></p>
                    <img src="/imgs/landing-3/check-circle.svg" className='h-[3%] w-[3%]' alt="" />

                </div>

            </div>
        </div>
    )
}

export default BloqueDiezYSiete