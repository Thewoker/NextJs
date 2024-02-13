import React from 'react'
import './cursos.css'
import LateralBar from '@/components/cursos/LateralBar'

function page() {
    return (
        <div className='flex flex-row '>
            <LateralBar />
            <div className='w-[85%] m-0 p-0'>
                <div className='h-[10%] barra-sup relative'>
                    <p className='absolute titles-main absolute-center'>Mis Cursos</p>
                    <p className='absolute titles-main absolute-rigth-center'>Agregar Curso</p>
                </div>
                <div className='h-[90%] bg-[#263159]'>

                </div>
            </div>
        </div>
    )
}

export default page