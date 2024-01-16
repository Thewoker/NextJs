import React from 'react'
import './contact-us.css'

function ContactUs() {
    return (
        <div className='flex flex-col justify-center items-center' id='contact'>
            <h2>Contáctanos</h2>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='info-contact justify-center items-center boton-div text-center'>
                        <img src="/imgs/telegram.png" alt="" className='contact-us-img' />
                        <p>freshmanu@gmail.com</p>
                    </div>
                </div>
                <div className='flex justify-center items-center '>
                    <div className='info-contact justify-center items-center boton-div text-center'>
                        <img src="/imgs/instagram.png" alt="" className='contact-us-img ' />
                        <p>@freshmanu.cl</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center my-4'>
                    <img src="/imgs/logo.png" alt="" className='img-logo-contact-us' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs