import React from 'react'
import Main from './Main'
import './body.css'
import LearnWithAndCode from './LearnWithAndCode';
import Courses from './Courses';
import FAQ from './FAQ';
import Ventajas from './Ventajas';
import Contact from './Contact';

function Body() {
  return (
    <div className='w-screen'>
        <Main/>
        <LearnWithAndCode />
        <Courses />
        <FAQ/>
        <Ventajas/>
        <Contact/>
    </div>
  )
}

export default Body