import React from 'react'

function ImgTextRoutine() {
    return (
        <div className='text-white'>
            <div className='img-text-container w-full justify-between items-center gap-2'>
                <div className='circle' style={{ backgroundImage: 'url(/main-page/peso-muerto.jpg)' }}></div>
                <div className='circle' style={{ backgroundImage: 'url(/main-page/yoga.jpg)' }}></div>
                <div className='flex flex-col text-container-about'>
                    <h3 className='roboto'>Lorem ipsum dolor sit amet.</h3>
                    <p className='text-white roboto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, corrupti repudiandae!</p>
                </div>
                <div className='flex flex-col text-container-about'>
                    <h3 className='roboto'>Lorem ipsum dolor sit amet.</h3>
                    <p className='text-white roboto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, corrupti repudiandae!</p>
                </div>
            </div>
        </div>
    )
}

export default ImgTextRoutine