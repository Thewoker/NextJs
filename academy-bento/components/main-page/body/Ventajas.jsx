import React from 'react'

function Ventajas() {
    return (
        <div className='p-10' >
            <h3 className='p-10 ventajas-title' id='whochooseus'>
                En FreshmanU <span className='text-[#04E1FF]'>hacemos la diferencia</span>. Descubre las <span className='text-[#04E1FF]'>ventajas</span> de estudiar con nosotros.
            </h3>
            <div className='flex flex-row flex-wrap justify-center items-center gap-44 relative'>
                <div className='ventajas-box'>
                    <p className='ventajas-box-text p-3'>Somos <span className='text-[#04E1FF]'>la única plataforma</span> que ofrece videos de material de estudio explicados por <span className='text-[#04E1FF]'>ex ayudantes</span> del ramo, lo que garantiza una comprensión profunda de los conceptos.</p>
                </div>
                <div className='ventajas-box'>
                    <p className='ventajas-box-text p-3'>En cada video, proporcionamos los <span className='text-[#EB09FF]'>mejores consejos</span> para prepararte de manera efectiva para tus pruebas y exámenes, lo que te brinda una <span className='text-[#EB09FF]'>ventaja adicional</span>.</p>
                </div>
                <div className='ventajas-box'>
                    <p className='ventajas-box-text p-3'>Realizamos <span className='text-[#08DC10D1]'>ejercicios basados en pruebas de semestres anteriores</span>, lo que te ayuda a familiarizarte con el tipo de preguntas que puedes esperar en tus evaluaciones.</p>
                </div>
                <div className='ventajas-box'>
                    <p className='ventajas-box-text p-3'><span className='text-[#FFA800]'>No queremos fastidiarte con videos de una hora y media</span>, nosotros, en tan solo unos pocos minutos, te prepararemos de la mejor manera para que <span className='text-[#FFA800]'>apruebes tus ramos</span>.</p>
                </div>
                <div className='ventajas-box'>
                    <p className='ventajas-box-text p-3 '>Ofrecemos una <span className='text-[#0035FF]'>excelente relación calidad-precio</span>. En comparación con la contratación de un profesor particular por hora, nuestra plataforma ofrece acceso ilimitado <span className='text-[#0035FF]'>al mejor material de estudio</span> durante todo el semestre a un costo más accesible.</p>
                </div>
                <img className='ventajas-img absolute' src="https://firebasestorage.googleapis.com/v0/b/elias-academy-bfa77.appspot.com/o/portadaInterrogaciones%2F8f0905b60bc4e47a45a4eff9c9f52544.png?alt=media&token=52c4b56c-fa9a-4671-aa4f-da3e042712aa" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center my-16'>
                <hr />
            </div>
        </div>
    )
}

export default Ventajas