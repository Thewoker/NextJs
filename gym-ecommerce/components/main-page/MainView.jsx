import React from 'react'
import './first-view.css'
import Button from '@/components/ui/button-rounded-1/Button';

function MainView() {

    return (
        <div className='flex flex-col justify-center items-center main-view'>
            <video autoPlay muted loop id="myVideo" className='min-h-full min-w-full opacity-65'>
                <source src="main-page/bg-video.mp4" type="video/mp4" />
            </video>
            <div className='title-container'>
                <div className='title-subtitle-container flex flex-col justify-center items-center'>
                    <h2 className='main-title text-center'>TRABAJA COMO UN <br />PROFESIONAL</h2>
                    <h3 className='subtitle pb-3'>El mejor equipamiento y productos para utilizar todo tu potencial en un solo lugar</h3>
                    <Button content='Empieza ahora' width="194px" height="48px" radius="70px" />
                </div>
            </div>
        </div>
    )
}

export default MainView