"use client"
import ButtonOne from '@/components/ui/buttons/button1/ButtonOne'
import React from 'react'
import Link from 'next/link'
import { useAuthContext } from "@/contexts/AuthContext"


function Main() {
  const { user } = useAuthContext();

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='title flex flex-col justify-center items-center'>
        <h3 className='mt-[15vh]'>LA <span>MEJOR OPCIÓN</span> PARA <span>PASAR TUS RAMOS</span></h3>
        <p className='subtitle w-1/2 my-8'>¡Clases dictadas por los mejores ex ayudantes de los ramos, ejercicios de pruebas anteriores explicados de la mejor manera posible, foros de consulta y mucho más!</p>
        <Link href={user.logged && user.uid != null ? "/cursos" : "/ingresar"}><ButtonOne content='Ver cursos' width='199px' height='60px' /></Link>
      </div>
      <div className='flex flex-wrap w-full justify-center items-center pb-10'>
        <div className='left-conteiner'>
          <div className='light-blue-box flex flex-col ms-20 me-12 mt-20'>
            <h3 className='light-blue-box-h3 p-8'>Estudia con los <span className='text-white'>mejores</span> ex ayudantes de los ramos</h3>
            <p className='text-black p-10'>Domina tus ramos con confianza: explora nuestros videos de estudio, grabados por los mejores ex ayudantes del ramo, quienes te explicarán cada concepto de manera clara y eficaz, preparándote óptimamente para pruebas y exámenes.</p>
          </div>
          <div className='foro-consult flex flex-col ms-20 me-12 mt-[3.8rem]'>
            <h3 className='p-8'>Foros de consulta</h3>
            <div className='flex flex-row'>
              <p className='text-black pt-7 ps-9 '>¿Tienes alguna duda sobre la materia? Realiza consultas directamente a los ex ayudantes, los cuales te responderán eficazmente.</p>
              <img src="/imgs/main-page/foro-consult.png" alt="" />
            </div>
          </div>
        </div>
        <div className='right-conteiner ms-12 me-20 mt-20'>
          <h3 className='p-8'>La mejor plataforma para pasar <span className='text-[#04E1FF]'>todos</span> tus ramos</h3>
          <p className='px-9 py-8'>Inscríbete a los cursos, obtén el mejor material de estudio, clases grabadas, ejercicios de años anteriores, prepárate de la mejor manera para tus pruebas y exámenes junto a nosotros. </p>
          <div className='flex flex-row py-14'>
            <div className='flex flex-col gap-y-20 pt-7'>
              <p className='ps-9 '>Nuestros ex ayudantes se esfuerzan cada día en brindar el mejor material de estudio posible, utilizando los mejores ejercicios de pruebas anteriores, y ofreciendo los mejores tips para las pruebas. </p>
              <p className='ps-9 '>Además, nos preocupamos de actualizar el material de estudio cada semestre para ofrecerte la mejor experiencia de estudio posible. </p>
            </div>
            <img src="/imgs/main-page/right-main-img.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Main