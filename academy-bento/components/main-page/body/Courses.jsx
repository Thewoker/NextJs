import React from 'react'
import CourseList from './CourseList'


function Courses() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <h2 className='courses-title'>Cursos</h2>
            </div>
            <div className='flex flex-col  p-5'>
                <div className='flex items-start'>
                    <h3 className='couses-subtitle ml-10 my-5'>Elige el ramo que <span className='text-[#04E1FF]'>quieres aprobar</span></h3>
                </div>
            </div>
            <CourseList/>
        </>
    )
}

export default Courses