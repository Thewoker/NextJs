"use client"
import React from 'react'
import dynamic from 'next/dynamic';


const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function page() {
    return (
        <div className='min-h-screen min-w-screen flex flex-col items-center px-24 pt-[5.2rem] relative'>
            <p className='py-5 roboto'><b>¿Se agrandó  la familia?, ¿falta de espacio?, ¿altas expensas?, ¿necesidad de un balcón o de verde?
                ¿NECESITAS VENDER PARA MUDARTE?</b></p>
            <div className='flex w-screen justify-center items-center p-4 bg-[#1a1da0]'>
                <h1 className='text-[#ff0000] text-center text-2xl roboto'>LOS 5 TRUCOS <br />QUE ME PERMITIERON A MI Y A CIENTOS DE FAMILIAS SALIR DE LA FRUSTRACION DE NO PODER MUDARSE</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 p-4 roboto'>
                <h2 className='text-xl text-[#ff0000]'><b>CON ESTE ENTRENAMIENTO GRATUITO</b></h2>
                <p className='text-center text-balance'><b>VAS A PODER VENDER TU DEPARTAMENTO EN MENOS DE 4 MESES  Y MUDARTE A ALGO MAS GRANDE MINIMIZANDO LA DIFERENCIA A PAGAR y todo en forma SIMULTANEA para no tener que ir a vivir a un hotel</b></p>
            </div>
            <div className=''>
                <p><b>2024 momento histórico para mudarse. Bajos precios permiten invertir la  mínima diferencia de los últimos 5 años</b></p>
            </div>
            <div className='flex justify-center gap-5 w-full'>
                <div className='p-2 '>
                    <img src="/imgs/landing-2/FOTO-1-testimonio-Whatsapp.webp" className="w-[200px]" alt="Testimonios" />
                    <img src="/imgs/landing-2/FOTO-2-Testimonio-Whatsapp-2.webp" className="w-[200px]" alt="Testimonios" />
                </div>
                <div className='p-2 flex flex-col items-center'>
                    <ReactPlayer className="" url='https://youtu.be/YmI_f3vIlt8' height={252} width={448} />
                    <p className='text-center text-balance'>Este video de 4 minutos solo podras verlo ahora, no volverá a estar disponible<br/>Asi que no cierres esta pagina sin avanzar a la siguiente</p>
                </div>
            </div>
            <p className="text-gray-200 text-center absolute bottom-0 bg-[#ff0000] text-balance">
                ATENCION: solo te servirá si vendes un departamento o PH,  NO casa / que cuente con balcón patio o terraza y no sea interno /
                que no sea planta baja ni ultimo piso / que se encuentre en buenas condiciones sobre todo baño y cocina / no tenga graves problemas de humedad</p>
        </div>
    )
}

export default page