import React from 'react'
import './plataform.css'
import Header from '@/components/plataform/header/Header'
import Plataform from '@/components/plataform/lobby/Plataform'

function page() {
  return (
    <div className='h-screen py-4 relative'>
        <Header/>
        <Plataform/>
    </div>
  )
}

export default page