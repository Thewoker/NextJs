import React from 'react'
import './faq.css'

function FAQ() {
    return (
        <div><div className="container-FAQ">
            <h2>Preguntas Frecuentes</h2>
            <div className='faq-asked'>
                <p><strong>¿Qué tipo de contenido de video ofrecen y en qué materias o disciplinas se especializan?</strong></p>
                <p className='text-faq'>En Freshman.cl, nos dedicamos 100% a ofrecer un gran número de videos explicativos de materias de cada rama; en cada uno de estos videos, nos preocupamos de explicarlo la materia lo mejor manera posible; ofrecemos videos entre 5-10 minutos de duración; en base a preguntas específicas y ejercicios demos; en cada video realizan los ejercicios los mismos tutores quienes se encargan del estudio previo y el análisis del contenido. Actualmente ofrecemos los siguientes cursos: Cálculo I, Introducción la Programación, Contabilidad e Introducción al Microscopio; estos cursos están enfocados en ayudar a los estudiantes de la Pontificia Universidad Católica De Chile.</p>
            </div>
            <div className='faq-asked'>
                <p><strong>¿Los videos son creados por expertos o profesores calificados?</strong></p>
                <p className='text-faq'>Cada uno el mejor su nivel actual posible; es por eso que nuestros profesores son calificados: Nos preocupamos brindarte el mejor video educativo posible! Un excelente base experiencia real inversa. Hacemos el proceso contratar docentes con experiencia “profesional”, que tienen bastante experiencia en temas varios sin importa si es derecho física y además “hermanos” que son graduados hace menos 10 años tu universidad sea fuera país para tener un buen equilibrio.</p>
            </div>
            <div className='faq-asked'>
                <p><strong>¿Ofrecen videos específicos para exámenes y pruebas?, ¿cómo puedo encontrarlos?</strong></p>
                <p className='text-faq'>Sí!, cada curso se organiza en módulos que corresponden a las unidades o temas que se evalúan en los exámenes y pruebas de tu universidad. Dentro de cada módulo, encontrarás videos que abordan las preguntas más frecuentes y los ejercicios más relevantes para prepararte de la mejor forma. Además, puedes usar el buscador de nuestra plataforma para encontrar el video que necesites según la materia, el tema o la palabra clave que quieras.</p>
            </div>
            <div className='faq-asked'>
                <p><strong>¿Qué pasa si tengo dudas o problemas con algún video o con la plataforma en general?</strong></p>
                <p className='text-faq'>Si tienes alguna duda o problema, puedes contactarnos a través de nuestro correo electrónico contacto@freshman.cl o a través de nuestro chat en línea, donde te atenderemos lo antes posible. También puedes revisar nuestra sección de ayuda, donde encontrarás respuestas a las preguntas más comunes sobre el funcionamiento de nuestra plataforma y nuestros servicios.</p>
            </div>
        </div></div>
    )
}

export default FAQ