
import React from 'react'
import './MainPresentation.css';


function MainPresentation() {
    return (
        <div className='main-container h-[80vh]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl py-1'>LA <span>MEJOR OPCIÓN</span>  PARA TU <span>APRENDIZAJE</span></h1>
                <p className='subtitle'>Prepárate para el éxito en la universidad con nuestros recursos de estudio. ¡Bienvenidos a un nuevo nivel de aprendizaje!</p>
                <div className='relative py-5'>
                    <div className='flex flex-col items-center justify-center text-center'>
                    <img src="/imgs/rocket.png" alt="" className='rocket absolute' />
                        <div><h2 className='who-are-we'>¿Quiénes somos?</h2></div>
                    </div>
                </div>
            </div>

            <div className='about-container flex items-center justify-center gap-40'>
                <p className='about-us'>Somos un equipo de estudiantes universitarios jóvenes,
                    apasionados y comprometidos con el éxito académico de nuestros
                    compañeros novatos. Entendemos los desafíos que enfrentan al
                    ingresar a Ia universidad, y estamos aquí para ofrecerles la guía y
                    los recursos necesarios para superar esos obstáculos con
                    confianza.
                    Nuestra startup nació de la determinación de hacer que la
                    transición a la vida universitaria sea más fácil y menos estresante.
                    Sabemos que los primeros ramos pueden ser abrumadores, y es por
                    eso que nos hemos dedicado a proporcionar material de estudio de
                    alta calidad, consejos prácticos y orientación personalizada para
                    ayudar a los estudiantes a tener éxito en sus primeros cursos
                    universitarios.</p>
                <img src="/imgs/books.png" alt="" className='books' />
            </div>
        </div>
    )
}

export default MainPresentation
