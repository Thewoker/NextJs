"use client"
import React from 'react'
import './cursos.css'
import LateralBar from '@/components/cursos/LateralBar'
import CursosList from '@/components/cursos/CursosList'

function page() {
    return (
        <div className='flex flex-row relative'>
            <div className='w-[15%] flex flex-col justify-center items-center'>
                <LateralBar />
            </div>
            <div className='w-[85%] m-0 p-0'>
                <div className='h-[10%] barra-sup relative'>
                    <p className='absolute titles-main absolute-center'>Mis Cursos</p>
                    <p className='absolute titles-main absolute-rigth-center'>Agregar Curso</p>
                </div>
                <div className='h-full bg-[#263159]'>
                    <CursosList />
                </div>
            </div>
        </div>
    )
}

export default page