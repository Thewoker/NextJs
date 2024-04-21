import React from 'react'
import "./about-us.css"
import Button from '@/components/ui/button-rounded-1/Button'
import ImgTextRoutine from './ImgTextRoutine'

function AboutUs() {
  return (
    <div className='px-[15%]' id='servicios'>
      <h2 className='title-about-us'>Nuestro Gimnasio</h2>
      <div className='about-us-bicep w-full h-[60vh]'></div>
      <div className='flex bicep-text p-3 pl-0'>
        <p className='text-white text-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum esse veniam cumque libero quae. Inventore a esse ea quia.</p>
        <Button content="10 Años" width="200px" height="50px" radius="5px"/>
      </div>
      <ImgTextRoutine/>
    </div>
  )
}

export default AboutUs