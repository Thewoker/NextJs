"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import { Button } from "@nextui-org/react";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function MainLanding2() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <section className='min-h-screen h-full min-w-screen max-w-screen flex flex-col items-center md:px-24 pt-10 relative'>
            <div className="md:pt-16 max-md:pt-24 flex flex-col justify-center items-center gap-5">
                <p className='max-md:text-center'><b>Se agrandó  la familia?, falta de espacio?, altas expensas?, necesidad de un balcón o de verde? NECESITAS VENDER PARA MUDARTE?</b></p>
                <h1 className="text-5xl font-bold text-center text-[#ff0000]">LOS 5 TRUCOS <br />
                    para salir de la frustración de no poder mudarte
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 p-4 roboto borde w-[70%]'>
                <h2 className='text-2xl text-[#ff0000] max-md:text-center'><b>CON ESTE ENTRENAMIENTO GRATUITO</b></h2>
                <p className='text-center text-balance'><b>VAS A PODER VENDER TU DEPARTAMENTO EN MENOS DE 4 MESES  Y MUDARTE A ALGO MAS GRANDE MINIMIZANDO LA DIFERENCIA A PAGAR y todo en forma SIMULTANEA para no tener que ir a vivir a un hotel</b></p>
            </div>
            <div className=''>
                <p className='max-md:text-center'><b>2024 momento histórico para mudarse. Bajos precios permiten invertir la  mínima diferencia de los últimos 5 años</b></p>
            </div>
            <div className='flex justify-center gap-5 w-full max-md:flex-wrap'>
                <div className='p-2 '>
                    <img src="/imgs/landing-2/FOTO-1-testimonio-Whatsapp.webp" className="w-[200px]" alt="Testimonios" />
                    <img src="/imgs/landing-2/FOTO-2-Testimonio-Whatsapp-2.webp" className="w-[200px]" alt="Testimonios" />
                </div>
                <div className='p-2 flex flex-col items-center relative'>
                    <ReactPlayer className="" url='https://youtu.be/YmI_f3vIlt8' height={252} width={448} onEnded={() => setVideoEnded(true)} />
                    <div className={`${videoEnded ? "block" : "hidden"} absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}><Button color="primary" variant="shadow" className='button-animate'>Click aquí para inscribirte al<br /> <b>ENTRENAMIENTO GRATUITO</b> </Button> </div>
                    <p className='text-center text-balance'>Este video de 4 minutos solo podras verlo ahora, no volverá a estar disponible<br />Asi que no cierres esta pagina sin avanzar a la siguiente</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[10%] max-md:pb-36'>
                    <h2 className='text-center bg-[#01ffff] p-3 rounded-lg'>El botón para inscribirse al ENTRENAMIENTO GRATUITO, aparecerá cuando finalice el video</h2>
                </div>
            </div>
            <p className=" text-center absolute bottom-0 bg-[#ff0000] text-balance roboto">
                ATENCION: solo te servirá si vendes un departamento o PH,  NO casa / que cuente con balcón patio o terraza y no sea interno /
                que no sea planta baja ni ultimo piso / que se encuentre en buenas condiciones sobre todo baño y cocina / no tenga graves problemas de humedad</p>
        </section>
    )
}

export default MainLanding2