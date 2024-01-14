import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='h-[17vh] '>
            <div className="navbar">
                <div className='logo-conj flex flex-col items-center justify-center text-center'>
                    <img src="/imgs/logo.png" alt="Logo" className="logo" />
                    <h3 className='logo-text'>FreshMan<span>U</span>Web</h3>
                </div>
                <ul className="nav-links">
                    <li className="nav-link">Acerca de Nosotros</li>
                    <li className="nav-link">Cursos</li>
                    <li className="nav-link">Contáctanos</li>
                    <li className="nav-link">Iniciar Sesión</li>
                    <li className="nav-link">Registrarse</li>
                </ul>
            </div>
        </div>
    )
}

export default Header