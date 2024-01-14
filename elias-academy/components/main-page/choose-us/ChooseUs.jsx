import React from 'react'
import './choose-us.css'

function ChooseUs() {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center m-10 conteiner-choose-us gap-5'>
        <h2 className='choose-us-title'>¿Porqué elegirnos?</h2>
        <div className='flex flex-row gap-5 choose-us-article justify-center items-center py-3 border-1 border-spacing-y-1'>
            <img src="/imgs/pencil.png" alt="" className='choose-us-img'/>
            <p className='choose-us-text'>Experiencia de Ayudantes del Ramo: Somos la única plataforma que ofrece videos de material de estudio explicados por ex ayudantes del ramo, lo que garantiza una comprensión profunda de los conceptos.</p>
        </div>
        <div className='flex flex-row gap-5 choose-us-article justify-center items-center py-3 border-1 border-spacing-y-1'>
            <img src="/imgs/paper.png" alt="" className='choose-us-img'/>
            <p className='choose-us-text'>Consejos para Pruebas y Exámenes: En cada video, proporcionamos los mejores consejos para prepararte de manera efectiva para tus pruebas y exámenes, lo que te brinda una ventaja adicional.</p>
        </div>
        <div className='flex flex-row gap-5 choose-us-article justify-center items-center py-3 border-1 border-spacing-y-1'>
            <img src="/imgs/backpack.png" alt="" className='choose-us-img'/>
            <p className='choose-us-text'>Ejercicios de Pruebas Anteriores: Realizamos ejercicios basados en pruebas de semestres anteriores, lo que te ayuda a familiarizarte con el tipo de preguntas que puedes esperar en tus evaluaciones.</p>
        </div>
        <div className='flex flex-row gap-5 choose-us-article justify-center items-center py-3 border-1 border-spacing-y-1'>
            <img src="/imgs/money.png" alt="" className='choose-us-img'/>
            <p className='choose-us-text'>Precio Competitivo: Ofrecemos una excelente relación calidad-precio. En comparación con la contratación de un profesor particular por hora, nuestra plataforma ofrece acceso ilimitado al mejor material de estudio durante todo el semestre a un costo más accesible.</p>
        </div>
        <div className='flex flex-row gap-5 choose-us-article justify-center items-center py-3 border-1 border-spacing-y-1'>
            <img src="/imgs/coffe.png" alt="" className='choose-us-img'/>
            <p className='choose-us-text'>Apoyo Integral: Además de los videos, ofrecemos un foro de consultas donde puedes hacer preguntas y obtener respuestas tanto sobre el contenido del curso como sobre el funcionamiento de la plataforma.</p>
        </div>
        <div className='flex flex-row gap-5 choose-us-article justify-center items-center py-3 border-1 border-spacing-y-1'>
            <img src="/imgs/clock.png" alt="" className='choose-us-img'/>
            <p className='choose-us-text'>Ahorro de Tiempo: No queremos fastidiarte con videos de una hora y media, nosotros, en tan solo unos pocos minutos, te prepararemos de la mejor manera para que apruebes tus ramos.</p>
        </div>
        
    </div>
    </div>
  )
}

export default ChooseUs