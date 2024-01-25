import React from 'react'
import './plataform.css'
import ListCourse from './ListCourse';


function Plataform() {
    return (
        <div className='flex flex-col justify-center items-center gap-14'>
            <h1 className='title-course'>Mis Cursos</h1>
            <div className="card-container gap-14">
                <ListCourse/>
            </div>
        </div>
    )
}

export default Plataform