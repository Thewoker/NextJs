import React from 'react'
import "./contact.css"
import Button from '@/components/ui/button-rounded-1/Button'

function Contact() {
    return (
        <div className='flex flex-col w-full h-[60vh] max-sm:h-full max-sm:p-5 contact mb-10  bg-white relative' id='contact'>
            <div className=' w-full h-full obsolute flex flex-col justify-center items-center z-10 gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='title-contact'>Ten tu primera visita gratis</h2>
                    <p className='contact-subtitle'>Explora nuestro gimnasio, examinando las diversas doctrinas y máquinas, con el propósito de ajustarnos a tus objetivos</p>
                </div>
                <form action="" className='flex items-center bg-[#4f4f4f] form-contact '>
                    <input type="text" className='bg-[#4f4f4f] ml-2' placeholder='joedoe@gmail.com' />
                    <div className='p-1'>
                        <Button width="auto" height="40px" radius="75px" content="Solicitar" padding="px-1" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact