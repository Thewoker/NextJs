import React from 'react'
import Link from 'next/link';
import './curso.css'

function Curso({ course }) {
    return (
        <div className='relative flex flex-col justify-center items-center curso-container'>
            <p className='absolute top-0 subtitulo w-full text-center'>{course.subtituloCurso}</p>
            <Link href={`/cursos/${course.slug}`} className='flex flex-col justify-center items-center gap-5'>
                <h2 className='titulo'>{course.titulo}</h2>
                <img className='curso-img' src={`${course.imgCurso}`} alt="" />
                <button className='btn-acceder'>Acceder</button>
            </Link>
        </div>
    )
}

export default Curso