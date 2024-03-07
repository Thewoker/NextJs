
import React from 'react'

function Contact() {
    return (
        <div className='flex flex-col justify-center items-center' id='contact'>
            <div className='flex flex-row contact justify-center items-center'>
                <div className='flex flex-col gap-4 ml-10 '>
                    <h3 className='contact-title '>¿No encontraste lo que buscabas?</h3>
                    <p className='contact-subtitle '>Cualquier duda o inconveniente envíanos un mensaje. </p>
                    <button className='contact-button'> <a href="mailto:freshmanuweb@gmail.com">Contáctanos</a></button>
                </div>
                <img className='contact-img' src="https://firebasestorage.googleapis.com/v0/b/elias-academy-bfa77.appspot.com/o/portadaInterrogaciones%2F32644d32a7c04c923faa88733482a4bb.png?alt=media&token=be35be9c-879a-4523-a6e1-0908b691c11e" alt="" />
            </div>
            <div className='m-20 mt-[6.5rem]'>
                <hr />
            </div>
            <div className='flex flex-col'>
                <h2 className='contact-title-net'>FreshmanU</h2>
                <a href="https://www.instagram.com/freshmanuweb.cl/" className='flex flex-row items-center redes-font gap-3'> 
                    <img className='redes-img' src="https://firebasestorage.googleapis.com/v0/b/elias-academy-bfa77.appspot.com/o/portadaInterrogaciones%2F96403b394668d36efc23cfb8ae6c3148.png?alt=media&token=153273a1-545c-4812-a30d-0001f9e0313c" alt="" />
                    <p>@freshmanuweb.cl</p>
                </a>
                <a href="mailto:freshmanuweb@gmail.com" className='flex flex-row items-center redes-font gap-3' >
                    <img className='redes-img' src="https://firebasestorage.googleapis.com/v0/b/elias-academy-bfa77.appspot.com/o/portadaInterrogaciones%2F1a787682537657b30efc0ebc6fbc0206.png?alt=media&token=7c3a28a8-946a-4503-b6ae-994a6060c2f8" alt="" />
                    <p>freshmanuweb@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default Contact