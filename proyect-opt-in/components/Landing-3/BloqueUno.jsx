"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function BloqueUno() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center md:px-24 md:pt-32 max-md:flex-wrap max-md:h-full gap-3'>
            <div className='flex flex-col w-full pb-6'>
                <p className='text-center text-3xl max-md:p-5 max-md:pt-28'>El departamento te quedo chico? Altas expensas? Necesitas vender para mudarte?</p>
                <div className='flex justify-center py-1 max-md:w-screen pb-6 '>
                    <img src="/imgs/landing-3/main1.jpg" className='w-[33%]' alt="" />
                    <img src="/imgs/landing-3/main2.jpg" className='w-[33%]' alt="" />
                    <img src="/imgs/landing-3/main3.jpg" className='w-[33%]' alt="" />
                </div>
                <p className='text-center text-3xl pb-5 max-md:px-5'>…pero tenes TU DEPARTAMENTO HACE AÑOS EN VENTA Y NO PASA NADA….</p>
            </div>
            <h3 className='text-center text-5xl pb-6 max-md:px-5'>
                …llegaste al lugar indicado, por que aquí…<br />
                <span className='text-[#ff0000]'><b>HACEMOS TODO POR VOS  LLAVE EN MANO</b></span>
            </h3>
            <div className='flex justify-center py-1 w-full gap-1 max-md:px-5 max-md:flex-wrap'>
                <div className='flex flex-col bg-[#6666ff] w-full'>
                    <div className='flex justify-center'>
                        <p className='text-center bg-personalizado-1 w-full text-3xl max-md:px-1'>
                            <b>MENTORIA INMOBILIARIA INTELIGENTE <br />
                                VENDES – COMPRAS Y TE MUDAS <br /></b>
                            con el METODO VENDA FACIL 9.0
                        </p>
                    </div>
                    <div className='mx-5 my-2 text-xl'>
                        <p className='text-3xl'>IMPLEMENTAMOS UN FUERTE PLAN COMERCIAL para que:</p>
                        <ul className='pl-3'>
                            <li>Vendas tu depto  y “<b>VUELE</b>”   en menos de 4 meses y en simultaneo: </li> <br />
                            <li>Encuentres algo mas grande y puedas mudarte</li>
                            <li>Minimizando la diferencia que tenes que pagar</li>
                            <li>Sincronizando la operación de venta- compra</li>
                            <li>De manera de reducir gastos y molestias</li>
                            <li>Haciendo que todo sea previsible, transparente y seguro para vos</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:w-[40%] max-md:p-5'>
                    <h3 className='text-center text-xl text-[#ff0000]'><b>MIRA EL VIDEO DONDE TE CONTAMOS LA PROPUESTA</b></h3>
                    {/* <ReactPlayer width={window.innerWidth > 425 ? 450 : 350} height={window.innerWidth > 425 ? 350 : 280} url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} /> */}
                    <ReactPlayer width={450} height={350} url={`https://www.youtube.com/watch?v=YmI_f3vIlt8`} />
                </div>
            </div>
        </div>
    )
}

export default BloqueUno