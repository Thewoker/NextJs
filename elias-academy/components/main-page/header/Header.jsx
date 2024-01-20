"use client"
import React from 'react'
import './Header.css'
import Link from 'next/link';

function Header() {
    
    return (
        <div className='h-[17vh] header sticky-header'>
            <div className="navbar">
                <div className='logo-conj flex flex-col items-center justify-center text-center'>
                    <img src="/imgs/logo.png" alt="Logo" className="logo" />
                    <h3 className='logo-text'>FreshMan<span>U</span>Web</h3>
                </div>
                <ul className="nav-links">
                    <li className="nav-link"><Link href="#courses">Cursos</Link></li>
                    <li className="nav-link"><Link href="#faq">F.A.Q.</Link></li>
                    <li className="nav-link"><Link href="#whochooseus">¿Por que elegirnos?</Link></li>
                    <li className="nav-link"><Link href="#contact">Contáctanos</Link></li>
                    <li className="nav-link"><Link href="/login">Iniciar Sesión</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header