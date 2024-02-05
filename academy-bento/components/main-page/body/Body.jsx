import React from 'react'
import Main from './Main'
import './body.css'
import LearnWithAndCode from './LearnWithAndCode';
import Courses from './Courses';

function Body() {
  return (
    <div className='w-screen'>
        <Main/>
        <LearnWithAndCode />
        <Courses />
    </div>
  )
}

export default Body