import React from 'react'
import './plataform.css'


function Plataform() {
    return (
        <div className='flex flex-col justify-center items-center gap-14'>
            <h1 className='title-course'>Mis Cursos</h1>
            <div className="card-container gap-14">
                <div className="card">
                    <h1 className="card-title">Cálculo I</h1>
                    <img src="/imgs/CálculoI.png" alt="Imagen" className="card-image" />
                    <button className="card-button">Acceder</button>
                </div>
                <div className="card">
                    <h1 className="card-title">Introducción a la Programación</h1>
                    <img src="/imgs/Introduccion-a-la-Programacion.png" alt="Imagen" className="card-image" />
                    <button className="card-button">Acceder</button>
                </div>
                <div className="card">
                    <h1 className="card-title">Contabilidad</h1>
                    <img src="/imgs/Contabilidad.png" alt="Imagen" className="card-image" />
                    <button className="card-button">Acceder</button>
                </div>
                <div className="card">
                    <h1 className="card-title">Introducción a la Microeconomía</h1>
                    <img src="/imgs/Introduccion-a-la-Microeconomia.png" alt="Imagen" className="card-image" />
                    <button className="card-button">Acceder</button>
                </div>
            </div>


            {/* <div className='plat flex justify-center items-center gap-14'>
                <div className='course-card card-1 justify-center items-center'>
                    <h2 className='course-title'>Cálculo I</h2>
                    <img src="/imgs/CálculoI.png" alt="" />

                </div>
                <div className='course-card card-2 justify-center items-center'>
                    <h2 className='course-title'>Introducción a la Programación</h2>
                    <img src="/imgs/Introduccion-a-la-Programacion.png" alt="" />

                </div>
                <div className='course-card card-3 justify-center items-center'>
                    <h2 className='course-title'>Contabilidad</h2>
                    <img src="/imgs/Contabilidad.png" alt="" />

                </div>
                <div className='course-card card-4 justify-center items-start'>
                    <h2 className='course-title'>Introducción a la Microeconomía</h2>
                    <img src="/imgs/Introduccion-a-la-Microeconomia.png" alt="" />

                </div>
            </div> */}
        </div>
    )
}

export default Plataform